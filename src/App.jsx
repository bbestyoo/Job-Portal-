import "./App.css";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserDetails } from "../redux/UserSlice";
import axios from "axios";

import { AllRoutes } from "./Routes/AllRoutes";




function App() {
  const userDetails = useSelector((state) => state.user.value);
  console.log("userdet", userDetails);
  const token = localStorage.getItem("token");
  console.log(token);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (token) {
          console.log("yoyo");
          const response = await axios.get("http://localhost:8000/api/User", {
            headers: {
              authorization: `bearer ${token}`,
            },
          });
          console.log(response.data);
          dispatch(setUserDetails(response.data));
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [token, dispatch]);

  // rest of your component




  return (
    <AllRoutes></AllRoutes>
    // <div className="overflow-hidden">

    //   <Header/>

    // <Routes>
    //   <Route path="/" element={<Home/>}></Route>
    //   <Route path="/browse jobs" element={<BrowseJobs/>}></Route>
    //   <Route path="/login" element={<Login/>}></Route>
    //   <Route path="/signup" element={<Signup/>}></Route>
    //   <Route path="/jobs">
    //     <Route path="" element={<SingleCategory/>}></Route>
    //     <Route path=":id"  element={<JobDetails/>}></Route>
    //     <Route path="/jobs/editJob/:id"  element={<JobEdit/>}></Route>
    //     {/* <Route path="/category"  element={<JobDetails/>}></Route> */}

    //   </Route>
    //   <Route path="/chart" element={<Chart />}></Route>
    //   <Route path="/createJobs"  element={<CreateJobs/>}></Route>
    // </Routes>
   
    // </div>

  
  )
}

export default App;
