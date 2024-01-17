import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { logoutUser } from "../../redux/UserSlice";
import logo from "../assets/logo.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiOutlineBarChart } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";


// import Modal from "react-modal"

const url="http://localhost:8000/"


export default function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.user.value);
  console.log("header",userDetails)
  const [scrolling, setScrolling] = useState(false);
  const [menu, setMenu] = useState(true);
  function handleLogout() {
    navigate("/");
    dispatch(logoutUser());
  }

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function handleMenu(){
    setMenu((prev)=> !prev)
  console.log("menu",menu)

  }

  return (
    <div>
      <ToastContainer />
      <header  
    
        className={`  fixed w-full bg-${menu === false? "white shadow-md" : "transparent" } bg-${scrolling === true ? "white shadow-md" : "transparent"} transition-all duration-900 ease-in-out ${
          scrolling && 'opacity-100' } `}>
          
        <nav className=" flex-col py-7 px-10 md:gap-28 md:py-4 md:pl-16 md:pr-10 md:p-14  sm:flex sm:flex-col xl:flex xl:flex-row  md:flex md:flex-row ">
          <div className="flex justify-between">

          <ul className="w-full">
            <li className="transition ease-in-out  hover:-translate-y-1 hover:scale-125 hover:text-primary duration-300">
              <NavLink className="flex items-center font-bold" to="">
                <span className="mr-1">JOB</span>
                <span>PORTAL</span>
                <img className="h-10" src={logo} alt="oops" />
              </NavLink>
            </li>
          </ul>
          <ul className="md:hidden"> 
                    <ul onClick={handleMenu} className="fixed top-10 right-10  md:hidden">
                      {
                      menu ? <RxHamburgerMenu size={25}/>  : <RxCross2 size={25}/> 
                      }
                  </ul>
                    
                
          </ul>
          </div>
          
          <div className={` md:flex md:flex-row md:w-full md:justify-between ${menu === false ? "flex flex-col mx-auto" : "hidden"}`}>
          <ul className="flex flex-col gap-5 xl:flex xl:flex-row xl:justify-between xl:items-center md:flex md:flex-row md:justify-between md:items-center ">
            <li className="transition ease-in-out  hover:-translate-y-1 hover:scale-125 hover:text-primary duration-300">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="transition ease-in-out  hover:-translate-y-1 hover:scale-125 hover:text-primary duration-300">
              <NavLink to="/browse jobs">Browse Jobs</NavLink>
            </li>

            {userDetails ? (
              <>
                
                {userDetails.role === "company" ? (
                  <>
                    <li className="transition ease-in-out  hover:-translate-y-1 hover:scale-125 hover:text-primary duration-300">
                      <NavLink to="/createJobs">Create Jobs</NavLink>
                    </li>
                  </>
                ) : null}
              </>
            ) : (
              <>
                <li className="mb-5 md:mb-0 transition ease-in-out  hover:-translate-y-1 hover:scale-125 hover:text-primary duration-300">
                  <NavLink to="/">About Us </NavLink>
                </li>
              </>
            )}
            {userDetails && (
                  <li className=" transition ease-in-out  hover:-translate-y-1 hover:scale-125 hover:text-primary duration-300 hover:drop-shadow-md mb-5 md:mb-0 ">
                    <NavLink to="/chart">
                      Charts
                      <AiOutlineBarChart className="inline" />
                    </NavLink>
                  </li>
                )}
          </ul>

          <ul className="flex flex-col gap-5 items-center sm:flex sm:flex-col xl:flex xl:flex-row xl:justify-between xl:items-center md:flex md:flex-row  md:items-center ">
            {userDetails?.username ? (
              <>
              <div className="flex gap-2">

                <span>{userDetails.username}</span>
                <img className="h-9 w-9 rounded-full" src={`${url}${userDetails.image}`} alt="oops" />

                <button
                  onClick={handleLogout}
                  className="transition ease-in-out  hover:-translate-y-1 hover:scale-125  duration-300 p-1 px-3 text-white border border-gray-300 bg-primary rounded-2xl hover:bg-hover"
                  >
                  Logout
                </button>
                  </div>
              </>
            ) : (
              <ul className="flex flex-col gap-5 sm:flex sm:flex-col xl:flex xl:flex-row xl:justify-between xl:items-center md:flex md:flex-row md:justify-between  md:items-center">
                <li className="transition ease-in-out  hover:-translate-y-1 hover:scale-125 hover:text-primary duration-300">
                  <NavLink to="/login">
                    <button className="p-1 px-3 text-white border border-gray-300 bg-primary rounded-2xl hover:bg-hover">
                      Login
                    </button>
                  </NavLink>
                </li>
                <li className="transition ease-in-out  hover:-translate-y-1 hover:scale-125 hover:text-primary duration-300">
                  <NavLink to="/signup">
                    <button className="p-1 px-3 text-white border border-gray-300 bg-primary rounded-2xl hover:bg-hover">
                      Signup
                    </button>
                  </NavLink>
                </li>
                
              </ul>
            )}
          </ul>
          </div>
        </nav>
          
      </header>
    </div>
  );
}
