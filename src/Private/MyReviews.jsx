import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const MyReviews = () => {
  const { users } = useContext(AuthContext);
  const [myReviews, setMyReviews] = useState([]);
console.log(myReviews);
  useEffect(() => {
    fetch(`http://localhost:5000/myreviews/${users?.uid}`)
      .then((res) => res.json())
      .then((data) => {
        setMyReviews(data);
      })
      .catch((error) => {
        console.error("Error fetching reviews:", error);
      });
  }, [users?.uid]);

  const handleRemoveReview = (id) => {
    console.log('remove clicked', id);
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
         fetch(`http://localhost:5000/deleteMyReview/${id}`, {
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
             const remaining = myReviews.filter((myReview) => myReview._id !== id);
             setMyReviews(remaining);
           });
       }
     });
  }

  return (
    <section className="bg-[#1D1D1D] min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-6 text-[#ADFF00]">
          My Reviews
        </h2>
        {myReviews.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="table-auto w-full border-collapse border border-gray-700 text-[#ADFF00] shadow-lg rounded-lg">
              <thead>
                <tr className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 text-white">
                  <th className="px-4 py-3 border border-gray-700 text-left">
                    #
                  </th>
                  <th className="px-4 py-3 border border-gray-700 text-left">
                    Image
                  </th>
                  <th className="px-4 py-3 border border-gray-700 text-left">
                    Name
                  </th>
                  <th className="px-4 py-3 border hidden md:flex border-gray-700 text-left">
                    Genres
                  </th>
                  <th className="px-4 py-3 border border-gray-700 text-left">
                    Rating
                  </th>
                  <th className="px-4 py-3 border border-gray-700 text-left">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {myReviews.map((review, index) => (
                  <tr
                    key={review._id}
                    className={`border-t border-gray-700 ${
                      index % 2 === 0 ? "bg-gray-900" : "bg-gray-800"
                    } hover:bg-gray-700`}
                  >
                    <td className="px-4 py-3">{index + 1}</td>
                    <td className="px-4 py-3">
                      <img
                        className="w-14 h-14 rounded-full border border-gray-500"
                        src={review.image}
                        alt={review.title}
                      />
                    </td>
                    <td className="px-4 py-3">{review.title}</td>
                    <td className="px-4 py-3 hidden  md:flex mt-4">{review.genres}</td>
                    <td className="px-4 py-3">{review.rating}/10</td>
                    <td className="px-4 py-3 flex flex-col items-center  md:flex-row space-x-2 space-y-2 md:space-y-0">
                      <button className="w-20 py-2 text-sm bg-blue-500 text-white rounded-lg hover:bg-blue-600 shadow">
                        Update
                      </button>
                      <button onClick={()=>{handleRemoveReview(review._id)}} className="w-20 py-2 text-sm bg-red-500 text-white rounded-lg hover:bg-red-600 shadow">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-center text-gray-400 mt-4">
            No reviews added yet.
          </p>
        )}
      </div>
    </section>
  );
};

export default MyReviews;
