import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { logoutUser } from "../../redux/UserSlice";
import logo from "../assets/logo.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiOutlineBarChart } from "react-icons/ai";


// import Modal from "react-modal"

const url="http://localhost:8000/"


export default function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.user.value);
  console.log("header",userDetails)

  function handleLogout() {
    navigate("/");
    dispatch(logoutUser());
  }

  return (
    <div>
      <ToastContainer />
      <header className="bg-secondary">
        <nav className="flex justify-between py-4 pl-16 pr-10 items-center">
          <ul>
            <li>
              <NavLink className="flex items-center font-bold" to="">
                JOB PORTAL
                <img className="h-10" src={logo} alt="oops" />
              </NavLink>
            </li>
          </ul>
          <ul className="flex gap-14">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/browse jobs">Browse Jobs</NavLink>
            </li>

            {userDetails ? (
              <>
                
                {userDetails.role === "company" ? (
                  <>
                    <li>
                      <NavLink to="/createJobs">Create Jobs</NavLink>
                    </li>
                  </>
                ) : null}
              </>
            ) : (
              <>
                <li>
                  <NavLink to="/">About Us </NavLink>
                </li>
              </>
            )}
            {userDetails && (
                  <li className=" transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-125 hover:text-gray-400 duration-300 hover:drop-shadow-md  ">
                    <NavLink to="/chart">
                      Charts
                      <AiOutlineBarChart className="inline" />
                    </NavLink>
                  </li>
                )}
          </ul>

          <ul className="flex gap-3 items-center">
            {userDetails?.username ? (
              <>
                <span>{userDetails.username}</span>
                <img className="h-9 w-9 rounded-full" src={`${url}${userDetails.image}`} alt="oops" />

                <button
                  onClick={handleLogout}
                  className="p-1 px-3 text-white border border-gray-300 bg-primary rounded-2xl hover:bg-hover"
                >
                  Logout
                </button>
              </>
            ) : (
              <ul className="flex gap-4">
                <li>
                  <NavLink to="/login">
                    <button className="p-1 px-3 text-white border border-gray-300 bg-primary rounded-2xl hover:bg-hover">
                      Login
                    </button>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/signup">
                    <button className="p-1 px-3 text-white border border-gray-300 bg-primary rounded-2xl hover:bg-hover">
                      Signup
                    </button>
                  </NavLink>
                </li>
              </ul>
            )}
          </ul>
        </nav>
      </header>
    </div>
  );
}
