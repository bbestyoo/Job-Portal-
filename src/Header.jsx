import { useState } from "react";
import { Link } from "react-router-dom";
// import Modal from "react-modal"
import Login from "./components/Login";

export default function Header() {
  

  return (
    <div>
      <header className="bg-secondary">
        <nav className="flex justify-between p-4">
          <ul>
            <li>
              <Link to="">Logo</Link>
            </li>
          </ul>
          <ul className="flex gap-6">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/browse jobs">Browse Jobs</Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
          <ul className="flex gap-4">
            <li>
              <Link to="/login">
                <button
                 
                  className="p-1 px-3 text-white border border-gray-300 bg-primary rounded-2xl"
                >
                  Login
                </button>
              </Link>
            </li>
            <li>
              <Link to="/signup">
                <button
                 
                  className="p-1 px-3 text-white border border-gray-300 bg-primary rounded-2xl"
                >
                  Signup
                </button>
              </Link>
            </li>
          </ul>
        </nav>
      </header>

     
     
    </div>
  );
}
