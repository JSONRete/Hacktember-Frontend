import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App bg-slate-200 p-8 flex mb-5 justify-end space-x-6">
      <Link to='/'>
      <h1 className="text-4xl text-pink-900 underline font-extrabold hover:text-blue-600 font-display">
        Home
      </h1>     
      </Link>
      <div>
      <Link className="text-4xl text-pink-900 underline font-extrabold hover:text-blue-600 font-display" to="courses">Courses</Link>
      </div>
      <div>
      <Link className="text-4xl text-pink-900 underline font-extrabold hover:text-blue-600 font-display" to="contact">Contact</Link>
      </div>
      <div>
      <Link className="text-4xl text-pink-900 underline font-extrabold hover:text-blue-600 font-display" to="login">Login</Link>
      </div>
      <div>
      <Link className="text-4xl text-pink-900 underline font-extrabold hover:text-blue-600 font-display" to="about">About Us</Link>
      </div>
      <button class="bg-red-700 text-white hover:bg-blue-600 rounded-xl p-2">Logout</button>
    </div>
  );
}

export default App;
