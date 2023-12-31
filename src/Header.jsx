import { useState } from "react";
import { NavLink } from "react-router-dom";
// import Modal from "react-modal"
import Login from "./components/Login";

export default function Header() {
  

  return (
    <div>
      <header className="bg-secondary">
        <nav className="flex justify-between p-4">
          <ul>
            <li>
              <NavLink to="">Logo</NavLink>
            </li>
          </ul>
          <ul className="flex gap-6">
            <li>
              <NavLink   to="/">Home</NavLink>
            </li>
            <li>
              <NavLink  to="/browse jobs">Browse Jobs</NavLink>
            </li>
            <li>
              <NavLink   to="/">About Us </NavLink>
            </li>
            <li>
              <NavLink   to="/">FAQs</NavLink>
            </li>
          </ul>
          <ul className="flex gap-4">
            <li>
              <NavLink  to="/login">
                <button
                 
                  className="p-1 px-3 text-white border border-gray-300 bg-primary rounded-2xl hover:bg-hover"
                >
                  Login
                </button>
              </NavLink>
            </li>
            <li>
              <NavLink   to="/signup">
                <button
                 
                  className="p-1 px-3 text-white border border-gray-300 bg-primary rounded-2xl hover:bg-hover"
                >
                  Signup
                </button>
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>

     
     
    </div>
  );
}
