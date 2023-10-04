import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserProvider";

function Nav() {
  const { handleLogoutClick, user } = useContext(UserContext);
  const links =
    "text-4xl text-white font-extrabold hover:text-blue-600 hover:underline hover:bg-slate-100 font-display border border-slate-900 px-4 py-2 rounded bg-slate-900";

  return (
    <>
    <div className="relative flex h-16 items-center justify-between">
      <div className="p-2 flex m-1 justify-start space-x-4">
      <Link
          to="/">
          <img className='logo' src={process.env.PUBLIC_URL + "/lp-logo.png"} alt="Learnability Pathways Logo"  width={400} height={'auto'}/>
        </Link>

        </div>
        <div className="p-8 flex m-5 justify-end space-x-4">
        <Link className={links} to="/">
          Home
        </Link>
        <Link className={links} to="/courses">
          Courses
        </Link>
        {user && (
          <Link className={links} to="/library">
            Library
          </Link>
        )}
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
    <div className="bg-slate-900 h-1 mt-4">
      </div>
      </>
  );
}

export default Nav;
