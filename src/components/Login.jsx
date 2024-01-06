import { FaUser, FaLock  } from "react-icons/fa";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import Signup from "./Signup";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useEffect, useState, } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUserDetails } from "../../redux/UserSlice";

function Login() {

  console.log("render...")
  const [password, setPassword] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const dispatch = useDispatch()
  




  const navigate = useNavigate()

  

  function handlesubmit(e){

    console.log(e.target.email.value,e.target.password.value)
    e.preventDefault()
    axios.post("http://localhost:8000/api/login", {
      email: e.target.email.value,
      password: e.target.password.value

    })
    .then((res) =>{
      
      console.log("data",res.data)
      console.log("user",res.data.user)

      dispatch(setUserDetails(res.data.user))      //dispatch calls a reducer that may take a state res.data.user is a state jun xai state.value ma basxa ra action xai setUserDetails garne bayo  action
      localStorage.setItem("token",res.data.token)
      navigate("/")
      





      
      
    })
    .catch((err)=>{
      console.log(err.response.data)

      // if(err.response.data.msg){
      //   console.log("ehh")
      // }
      // else{

      // }


    })

  
  }


  function clickEyeButton()  {
    setIsVisible((prevVisible) => !prevVisible);

  }

  return (
    <div>
    
      <div className="w-fit m-auto my-28">
        <form onSubmit={handlesubmit} className="border border-gray-400 py-20 px-10 rounded-3xl ">
          <p className="text-3xl font-medium mb-5 ">Login</p>
          <div className="flex border items-center p-2 px-4 rounded-3xl my-4">
            <input
              type="email"
              name="email"
              required
          
              placeholder="enter your email address"
              className="w-72 outline-none "
              
            />
            <FaUser />
          </div>
          <div className="flex border items-center p-2 px-4 rounded-3xl my-4">
            <input
              type={isVisible? "text" : "password"}
              name="password"
              required
              placeholder="password"
              className="w-72 outline-none "
              onChange={(e)=>{setPassword(e.target.value)}}
            />
         {password.length <= 0 ? 
        
          <FaLock />
        
       : (
        <button type="button" onClick={()=>clickEyeButton()}>
          {isVisible ? <IoMdEyeOff /> : <IoMdEye />}
        </button>
      )}

             

            
          
            
            
          </div>
          <div className="flex justify-between">
            <label>
              <input type="checkbox" />
              Remember me{" "}
            </label>
            <p>Forget Password?</p>
          </div>
          <button type="submit" className="w-full bg-primary rounded-3xl my-4 p-2 font-bold text-white text-xl hover:bg-hover">
            Login
          </button>
          <div className="flex justify-center">
            <p>Dont have an account?</p>
            <p className="font-bold">
              <Link to="/signup">Register</Link>
            </p>
          </div>

        </form>
    </div>
    </div>
  );
}

export default Login;

