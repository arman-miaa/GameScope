import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { NavLink } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline"; // Correct import path for Heroicons v2
import { useTheme } from "../provider/ThemeProvider ";

const Header = () => {
  const { users, logOutUser } = useContext(AuthContext);
  // const [theme, setTheme] = useState("dark"); // Default theme is dark
const { theme, toggleTheme } = useTheme();

  const handleLogOutUser = () => {
    logOutUser();
  };

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/allReviews">All Reviews</NavLink>
      </li>
      <li>
        <NavLink to="/addReview">Add Review</NavLink>
      </li>
      <li>
        <NavLink to="/myReviews">My Reviews</NavLink>
      </li>
      <li>
        <NavLink to="/gameWatchList">My WatchList</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar py-4 container text-[gray] mx-auto sticky top-0 left-0 z-40">
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
            className="menu menu-sm font-semibold dropdown-content bg-[#1D1D1D] rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className=" text-xl hover:text-main">GameScope</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 md:text-lg md:font-bold ">{links}</ul>
      </div>
      <div className="navbar-end">
        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme} // Toggle Function Call
          className="mr-6 px-2 capitalize flex justify-center items-center gap-0 md:gap-2"
          aria-label="Toggle Theme"
        >
          {theme === "dark" ? (
            <MoonIcon className="h-6 w-6 md:h-8 md:w-8" /> // Dark Mode Icon
          ) : (
            <SunIcon className="h-6 w-6 md:h-8 md:w-8 text-yellow-500" /> // Light Mode Icon
          )}
        </button>

        {/* User Authentication Section */}
        {users?.email ? (
          <div className="flex items-center justify-center gap-4">
            <div>
              <img
                data-tooltip-id="my-tooltip"
                className="border-2 w-14 h-14 rounded-full"
                src={users.photoURL}
                alt=""
              />
              <Tooltip id="my-tooltip">
                <p className="">{users.displayName}</p>
              </Tooltip>
            </div>
            <p
              onClick={handleLogOutUser}
              className=" p-2 text-sm md:text-xl rounded-md bg-red-600 border-none hover:bg-red-900 text-main"
            >
              LogOut
            </p>
          </div>
        ) : (
          <div className="flex items-center justify-center gap-4">
            <button className="p-2 md:px-4 text-sm md:text-xl rounded-md text-black  bg-[#646EE4]">
              <NavLink to="/login">Login</NavLink>
            </button>
            <button className="p-2 md:px-4 text-sm md:text-xl rounded-md text-black  bg-[#646EE4]">
              <NavLink to="/signup">Register</NavLink>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
