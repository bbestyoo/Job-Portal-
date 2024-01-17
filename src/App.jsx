import "./App.css";
import {Route,Routes } from "react-router-dom";
import Home from "./components/Home";   
import Login from "./components/Login";
import Signup from "./components/Signup";
import JobDetails from "./components/JobDetails";
import Header from "./components/Header";
import BrowseJobs from "./components/BrowseJobs";
import CreateJobs from "./components/Jobs/CreateJobs";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserDetails } from "../redux/UserSlice";
import axios from "axios";
import { SingleCategory } from "./components/Categories";
import Chart from "./charts/Charts";
import JobEdit from "./components/Jobs/EditJob";




function App() {

  const userDetails = useSelector((state)=>state.user.value)
  console.log("userdet",userDetails)
  const token = localStorage.getItem("token")
  console.log(token)
  const dispatch = useDispatch()
  

  useEffect(()=>{

    
    if (token) {
      console.log("yoyo")
      axios
        .get("http://localhost:8000/api/User", {
          headers: {
            authorization: `bearer ${token}`,
          },
        })
        .then((res) => {``
          console.log(res.data);
          dispatch(setUserDetails(res.data));
        })
        .catch((err) => console.log(err));
    }
  




  },[])



  return (
    <div className="overflow-hidden">

      <Header/>

    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/browse jobs" element={<BrowseJobs/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/jobs">
        <Route path="" element={<SingleCategory/>}></Route>
        <Route path=":id"  element={<JobDetails/>}></Route>
        <Route path="/jobs/editJob/:id"  element={<JobEdit/>}></Route>
        {/* <Route path="/category"  element={<JobDetails/>}></Route> */}

      </Route>
      <Route path="/chart" element={<Chart />}></Route>
      <Route path="/createJobs"  element={<CreateJobs/>}></Route>
    </Routes>
   
    </div>

  
  )
}

export default App;
