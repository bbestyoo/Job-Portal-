import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const ProtectedRoutes = ({ element }) => {
  const userDetails = useSelector((state) => state.user.value);
  const navigate = useNavigate();

  useEffect(() => {
    if (!userDetails || Object.keys(userDetails).length === 0 || userDetails.role !== "company") {
      navigate("/");
    }
  }, [userDetails, navigate]);

  return element;
};
