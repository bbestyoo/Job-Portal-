
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const ProtectedRoutes = ({ element }) => {
  const user = useSelector((state) => state.user.value);
  console.log("fked user", user);
  
  const navigate = useNavigate();
  useEffect(() => {
    console.log("Inside useEffect");
  
    if (user && Object.keys(user).length) {
      console.log("User object is not empty:", user);
  
      if (user.role !== "company") {
        console.log("Redirecting to /");
        navigate("/");
      } else {
        console.log("User has role 'company'");
      }
    } else {
      console.log("User object is empty or undefined");
      navigate("/");
    }
  }, [user]);
}
  