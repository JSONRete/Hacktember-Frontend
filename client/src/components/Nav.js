import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserProvider";

function Nav() {
  const { handleLogoutClick, user } = useContext(UserContext);
  const links =
    "text-4xl text-slate-900 font-extrabold hover:text-blue-600 hover:underline hover:bg-slate-100 font-display border border-slate-900 px-4 py-2 rounded";

  return (
    <div className="">
      <div className="p-8 flex m-5 justify-end space-x-4">
        <Link
          to="/"
          className="text-4xl text-slate-900 font-extrabold hover:text-blue-600 hover:underline font-display"
        >
          Learnability Pathways
        </Link>
        </div>
        <div>
        <Link className={links} to="/">
          Home
        </Link>
        <Link className={links} to="/courses">
          Courses
        </Link>
        {user && <Link className={links}>Library</Link>}
        {!user && (
          <Link className={links} to="/register">
            {" "}
            Login{" "}
          </Link>
        )}
            
        {user && (
          <Link>
            <button
              onClick={handleLogoutClick}
              className="bg-red-700 text-4xl text-slate-900 font-extrabold hover:text-blue-600 hover:underline  hover:bg-white font-display border border-slate-900 px-4 py-2 rounded"
            >
              Logout
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Nav;
