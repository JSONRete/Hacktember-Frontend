import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserProvider";

function Nav() {
  const { handleLogoutClick, user } = useContext(UserContext);

  return (
    <div className="">
    <div className="p-8 flex m-5 justify-end space-x-4">
      <Link
        to="/"
        className="text-4xl text-slate-900 font-extrabold hover:text-blue-600 font-display"
      >
        Learnability Pathways
      </Link>
      <Link
        className="text-4xl text-slate-900 font-extrabold hover:text-blue-600 hover:bg-slate-100 font-display border border-slate-900 px-4 py-2 rounded"
        to="/"
      >
        Home
      </Link>
        <Link
          className="text-4xl text-slate-900 font-extrabold hover:text-blue-600  hover:bg-slate-100 font-display border border-slate-900 px-4 py-2 rounded"
          to="/courses"
        >
          Courses
        </Link>
        {user && (
          <Link
            className="text-4xl text-slate-900 font-extrabold hover:text-blue-600  hover:bg-slate-100 font-display border border-slate-900 px-4 py-2 rounded"
            to="/contact"
          >
            Library
          </Link>
        )}
        {!user && (
          <Link
            className="text-4xl text-slate-900 font-extrabold hover:text-blue-600  hover:bg-slate-100 font-display border border-slate-900 px-4 py-2 rounded"
            to="/register"
          >
            Login
          </Link>
        )}
      {user && (
        <button
          onClick={handleLogoutClick}
          className="bg-red-700 text-white hover:bg-blue-600 rounded-xl p-2 font-display"
        >
          Logout
        </button>
      )}
    </div>
    </div>
  );
}

export default Nav;
