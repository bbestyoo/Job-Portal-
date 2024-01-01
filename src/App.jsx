import "./App.css";
import {Route,Routes } from "react-router-dom";
import Home from "./components/Home";   
import Header from "./Header";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { PopularJobs } from "./components/Jobs";
import JobDetails from "./components/JobDetails";


function App() {
  return (
    <div>

    <Header/>
    
    
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/browse jobs" element={<PopularJobs/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/jobs">
        <Route path=":id"  element={<JobDetails/>}></Route>

      </Route>
    </Routes>
   
    </div>

  
  )
}

export default App;
