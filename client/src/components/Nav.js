import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserProvider';

function Nav() {

  const { handleLogoutClick, user} = useContext(UserContext);

  return (
    <div className="p-8 flex m-5 justify-between">
            <Link to="/">
        <h1 className="text-4xl text-slate-900 font-extrabold hover:text-blue-600 font-display">
        Learnability Pathways
        </h1>
      </Link>
      <Link to="/">
        <h1 className="text-4xl text-slate-900 font-extrabold hover:text-blue-600 font-display border border-slate-900 px-4 py-2 rounded">
          Home
        </h1>
      </Link>
      <div>
        <Link
          className="text-4xl text-slate-900 font-extrabold hover:text-blue-600 font-display border border-slate-900 px-4 py-2 rounded"
          to="/courses" 
        >
          Courses
        </Link>
      </div>
      <div>
        <Link
          className="text-4xl text-slate-900 font-extrabold hover:text-blue-600 font-display border border-slate-900 px-4 py-2 rounded"
          to="/contact" 
        >
          Library
        </Link>
      </div>
      <div>
      { !user && (  <Link
          className="text-4xl text-slate-900 font-extrabold hover:text-blue-600 font-display border border-slate-900 px-4 py-2 rounded"
          to="/register" 
        >
          Login
        </Link>)}
      </div>
     {user && ( <button onClick={handleLogoutClick}className="bg-red-700 text-white hover:bg-blue-600 rounded-xl p-2 font-display">
        Logout
      </button>)}
    </div>
  );
}

export default Nav;





