import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { NavLink } from "react-router-dom";
import { Tooltip } from "react-tooltip";


const Header = () => {
    const { users, logOutUser } = useContext(AuthContext);
    // console.log(users);
  // console.log(users.photoURL);
  
  const handleLogOutUser = () => {
    logOutUser();
  }

    const links = <>
    <li> <NavLink to='/'>Home</NavLink></li>
    <li> <NavLink to='/allReviews'>All Reviews</NavLink></li>
    <li> <NavLink to='/addReview'>Add Review</NavLink></li>
    {/* <li> <NavLink to='/reviewsDetails'>Reviews Details</NavLink></li> */}
    <li> <NavLink to='/myReviews'>My Reviews</NavLink></li>
    <li> <NavLink to='/gameWatchList'>Game WatchList</NavLink></li>
   
    <li> <NavLink to='/users'>Users</NavLink></li>
    </>
    return (
      <div className="navbar  container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">GameScope</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          {users?.email ? (
            <div className="flex items-center justify-center gap-4">
              <div>
                <img
                  data-tooltip-id="my-tooltip"
                  className="border-2 w-16 h-16 rounded-full"
                  src={users.photoURL}
                  alt=""
                />
                <Tooltip id="my-tooltip">
                  <p>{users.displayName}</p>
                </Tooltip>
              </div>
              <button onClick={handleLogOutUser}>LogOut</button>
            </div>
          ) : (
            <div className="flex items-center justify-center gap-4">
              <button className="btn btn-primary">
                {" "}
                <NavLink to="/login">Login</NavLink>
              </button>
              <button className="btn btn-primary">
                {" "}
                <NavLink to="/signup">Register</NavLink>
              </button>
            </div>
          )}
        </div>
      </div>
    );
};

export default Header;