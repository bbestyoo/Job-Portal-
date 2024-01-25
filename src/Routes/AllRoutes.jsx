import { BrowserRouter, Outlet } from "react-router-dom";

import { SingleCategory } from "../components/Categories";
import Chart from "../charts/Charts";
import JobEdit from "../components/Jobs/EditJob";
import {Route,Routes } from "react-router-dom";
import Home from "../components/Home";   
import Login from "../components/Login";
import Signup from "../components/Signup";
import JobDetails from "../components/JobDetails";
import BrowseJobs from "../components/BrowseJobs";
import CreateJobs from "../components/Jobs/CreateJobs";

import React from 'react'
import { ProtectedRoutes } from './ProtectedRoutes'
import Header from "../components/Header";

export const AllRoutes = () => {
  return (
    <BrowserRouter>
    <div className="overflow-hidden">
        <Header/>


    <Routes >
      <Route path="/" element={<Home/>}></Route>
      <Route path="/browse jobs" element={<BrowseJobs/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/jobs">
        <Route path="" element={<SingleCategory/>}></Route>
        <Route path=":id"  element={<JobDetails/>}></Route>
        {/* <Route path="/category"  element={<JobDetails/>}></Route> */}

      </Route>
      <Route path="/chart" element={<Chart />}></Route>
      <Route element={
          <ProtectedRoutes element={<Outlet></Outlet>}></ProtectedRoutes>
        }
              
            >

        <Route path="/jobs/editJob/:id"  element={<JobEdit/>}></Route>
      <Route path="/createJobs"  element={<CreateJobs/>}></Route>
      </Route>
    </Routes>
    </div>

    </BrowserRouter>
  )
}
