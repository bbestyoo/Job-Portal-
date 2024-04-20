
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const ProtectedRoutes = ({ element }) => {
  const userDetails = useSelector((state) => state.user.value);
  console.log("fked userDetails", userDetails);
  
  const navigate = useNavigate();
  useEffect(() => {
    console.log("Inside useEffect");
  
    if (userDetails && Object.keys(userDetails).length) {
      console.log("userDetails object is not empty:", userDetails);
  
      if (userDetails.role !== "company") {
        console.log("Redirecting to /");
        navigate("/");
      } else {
        console.log("userDetails has role 'company'");
      }
    } else {
      console.log("userDetails object is empty or undefined");
      console.log("dont BS")
      navigate("/");
    }
  }, [userDetails]);
}
  