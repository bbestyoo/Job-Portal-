  // import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";


function Signup() {

  const [error, setError] = useState({});
  const [role, setRole] = useState("");
  // const [userData, setUserData] = useState(initialState);
  const [profileImage, setProfileImage] = useState(null);
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [password, setPassword] = useState("");

  function clickEyeButton() {
    setIsVisible((prevVisible) => !prevVisible);
  }
  // const initialState = {
  //   username: "",
  //   email: "",
  //   password: "",
  //   repeat_password: "",
  //   role: "",
  //   website: "",
  //   image: null,
  // };


  // console.log(role);
  function handleRoleChange(e) {
    if (e.target.value === "company") {
      setRole("company");
    } else {
      setRole("job-seeker");
    }
  }
  function handleImage(e) {
    // console.log(fd);
    // console.log(e.target.files[0]);
    setProfileImage(e.target.files[0]);
  }

  // function handleChange(e) {
  //   setUserData({ ...userData, [e.target.name]: e.target.value });
  // }

  function handleSubmit(e) {
    e.preventDefault();
    // toast.success("Signup Success");

    const fd = new FormData();

   
    if (role === "company") {
      fd.append("username", e.target.username.value);
      fd.append("email", e.target.email.value);
      fd.append("password", e.target.password.value);
      fd.append("repeat_password", e.target.repeat_password.value);
      fd.append("role", e.target.role.value);
      // fd.append("website", e.target.website.value);
      fd.append("image", profileImage || "");
    } else {
      fd.append("username", e.target.username.value);
      fd.append("email", e.target.email.value);
      fd.append("password", e.target.password.value);
      fd.append("repeat_password", e.target.repeat_password.value);
      fd.append("role", e.target.role.value);
      fd.append("image", profileImage || "");
    }

    // console.log(fd.get("username"));
    // console.log(...fd);
    axios
      .post("https://job-portal-ten-alpha.vercel.app/", fd)
      .then((res) => {
        toast.success("Signup Success");
        // console.log(res.data);
        // console.log("hello bro");

        navigate("/login");
      })
      .catch((Err) => {
        // console.log(Err);
        setError({});
        // console.log("hello error");
        //Err.response.data.errors[0].msg)
        if (Err.response?.data.errors) {
          const errorArray = Err.response.data.errors;
          let temp = {};
          errorArray.forEach((error) => {
            temp[error.params] = error.msg;

            if (error.params === "repeat_password") {
              temp.repeat_password = "Both password should be same";
            }
            if (error.params === "image") {
              temp.image = "*Please add a Image";
            }
          });
          // setError(temp);

          setError({ ...temp });

        }

    
        if (Err.response.data.msg) {
          setError({ email: Err.response.data.msg });
        }
      });
    setError({});

    console.log(error);
  }

  return (
    <>
     <div>
      <div className="w-fit m-auto my-24  ">
        <div className="border border-gray-400 py-10 px-10 rounded-3xl">
        <form  onSubmit={(e)=>handleSubmit(e)}
          action="#"
        >
          <p className="text-3xl font-medium mb-5">Signup</p>
          <div className="text-left">

          <div className="flex border items-center p-2 px-4 rounded-3xl mt-4">

          <input type="username" name="username"  placeholder="enter your Username" className="w-72 outline-none" />

            <FaUser />
           
          </div>
          <small className="text-red-800">{error.username}</small>
          </div>
          <div className="text-left">

          <div className="flex border items-center p-2 px-4 rounded-3xl mt-4">
            <input
              type="email"
              name="email"
              // value={"mel@mel.com"}
              // required
              placeholder="enter your email address"
              className="w-72 outline-none "
            />
            <MdAlternateEmail />
            
            {/* <small>{error}</small> */}
          </div>
          <small className="text-red-800">{error.email}</small>
              </div>
              <div className="text-left">

          <div className="flex border items-center p-2 px-4 rounded-3xl mt-4">
            <input
              type={isVisible ? "text" : "password"}
              name="password"
              // value={"password"}
              placeholder="password"
              // required
              className="w-72 outline-none "
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            {password.length <= 0 ? (
              <FaLock />
            ) : (
              <button type="button" onClick={clickEyeButton}>
                {isVisible ? <IoMdEyeOff /> : <IoMdEye />}
              </button>
            )}
          </div>
          <small className="text-red-800">{error.password}</small>
          
        </div>
        <div className="text-left">

          <div className="flex border items-center p-2 px-4 rounded-3xl mt-4">
            <input
              type="password"
              name="repeat_password"
              // value={"password"}
              placeholder="repeat-password"
              // required
              className="w-72 outline-none "
              
            />
             <FaLock />
           </div>
           <small className="text-red-800">{error.repeat_password}</small>
           </div>
          <div className="flex flex-col items-start mt-3">
            <label className="px-3" htmlFor="role">
              Select Role:{" "}
            </label>

            <select
              className="border p-2 px-4 rounded-3xl w-full my-3"
              id="role"
              onChange={(e) => handleRoleChange(e)}
            >
              <option value="job-seeker">
                job-seeker
              </option>
              <option value="company">company</option>
            </select>
          </div>
          <div className="flex flex-col items-start">
            <label
              htmlFor="image"
              className=" px-3"
            >
              Add Profile Picture:
            </label>
            <div className="  w-full my-3">
              <input
                onChange={(e) => {
                  handleImage(e);
                  //setProductData({ ...productData, images: e.target.files });
                }}
                name="image"
                type="file"
                className=" p-4 block w-full rounded-3xl border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 "
              />
            </div>
            <small className="text-red-800">{error.image}</small>
          </div>

          <div className="flex justify-between">
            <label>
              <input type="checkbox" />
              Remember me{" "}
            </label>
            <p>Forget Password?</p>
          </div>
          <button type="submit"
           className="w-full bg-primary rounded-3xl my-4 p-2 font-bold text-white text-xl hover:bg-hover">
            Signup
          </button>
          <div className="flex justify-center">
            <p>Already have an account?</p>
            <p className="font-bold">
              <Link to="/login">Login</Link>
            </p>
          </div>
        </form>
        </div>
      </div>
    </div>

     </>
  )
              }
export default Signup
