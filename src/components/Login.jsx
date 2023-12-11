import { FaUser,FaLock} from "react-icons/fa";
import Signup from "./Signup";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
      <div className="w-fit m-auto my-28">
        <div className="border border-gray-400 py-20 px-10 rounded-3xl">
          <p className="text-3xl font-medium mb-5">Login</p>
          <div className="flex border items-center p-2 px-4 rounded-3xl my-4">
            <input
              type="email"
              placeholder="enter your email address"
              className="w-72 border-none"
            />
            <FaUser />
          </div>
          <div className="flex border items-center p-2 px-4 rounded-3xl my-4">
            <input type="password" placeholder="password" className="w-72" />
            <FaLock />
          </div>
          <div className="flex justify-between">
            <label>
              <input type="checkbox" />
              Remember me{" "}
            </label>
            <p>Forget Password?</p>
          </div>
          <button className="w-full bg-primary rounded-3xl my-4 p-2 font-bold text-white text-xl">
            Login
          </button>
          <div className="flex justify-center">
            <p>Dont have an account?</p>
            <p className="font-bold"><Link to="/signup">Register</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
