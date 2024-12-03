// import { key } from "localforage";
import { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

// import { AuthContext } from "../provider/AuthProvider";

const Users = () => {
  const persons = useLoaderData();
  const [users, setUsers] = useState(persons);
  // const {users,setUsers} = useContext(AuthContext)
  // setUsers(persons)
  console.log(users);
  const check = () => {
    Swal.fire({
      title: "Hello!",
      text: "SweetAlert2 is now updated and working!",
      icon: "success",
      confirmButtonText: "Cool",
    });
  };
  const handleRemoveUser = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/person/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
            const remaining = users.filter((user) => user._id !== id);
            setUsers(remaining);
          });
      }
    });
  };

  return (
    <div className="container mx-auto mt-12">
      <Helmet>
        <title>Users Page</title>
      </Helmet>
      <p>Total Person: {users.length}</p>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Created Time</th>
              <th>Last LogIn Time</th>
            </tr>
          </thead>

          <tbody>
            {users.map((person, index) => (
              <tr key={person._id}>
                <th>{index + 1}</th>
                <td>{person.name}</td>
                <td>{person.email}</td>
                <td>{person.createdAt}</td>
                <td></td>
                <td onClick={check} className="btn mr-2 ">
                  E
                </td>
                <td
                  onClick={() => {
                    handleRemoveUser(person._id);
                  }}
                  className="btn"
                >
                  X
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
