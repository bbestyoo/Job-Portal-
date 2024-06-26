

import { useSelector } from "react-redux";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";


import React from 'react'
import { useNavigate } from "react-router-dom";

const url = "https://job-portal-server-tvif.onrender.com/";


export const SingleJob = ({jobs, handleDelete}) => {

    console.log("picccc",jobs.creatorPic)
    const navigate = useNavigate();
    const userDetails = useSelector((state) => state.user.value);
    // console.log("user",userDetails)


  return (
    <>

         <div
              key={jobs._id}
              className="flex flex-col md:flex md:flex-row bg-white gap-3 border border-gray-400  rounded-lg p-2 w-full items-center h-fit mb-7 bg-extra "
            >
              <img
                className="h-20 rounded-lg"
                src={`${url}${jobs.creatorPic}`}
                alt="oop"
              />
              <div className="mr-auto text-left px-6">
                <p className="font-medium text-xl ">{jobs.title}</p>
                <p>{jobs.type}</p>
                <p className="font-light text-sm"        
                dangerouslySetInnerHTML={{ __html: jobs.description }}>

                   </p>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => {
                    navigate(`/jobs/${jobs._id}`);
                  }}
                  className="border border-blue-400 p-5 rounded-xl bg-primary text-white font-bold"
                >
                  View Details
                </button>
                {userDetails?.role === "company" ? (
                  <>
                   
                    <FaRegEdit
                      size={25}
                      onClick={() => {
                        if (userDetails?._id == jobs?.createdBy) {
                          // Navigate to the edit page if user is authorized
                          // console.log("sdde",userDetails,"asdasd",jobs.createdBy)
                          navigate(`/jobs/editJob/${jobs._id}`);
                        } else {
                          toast.error("Unauth", {
                            position: "top-right",
                            autoClose: 1500,
                            hideProgressBar: false,
                            closeOnClick: true, 
                            draggable: true,
                            progress: undefined,
                            theme: "dark",
                          });
                        }
                      }}
                      className="hover:"
                    />
                    <MdDelete
                     onClick={() => {
                      if (jobs.createdBy !== userDetails._id) {

                        toast.error("Del Unauth", {
                          position: "top-right",
                          autoClose: 1500,
                          hideProgressBar: false,
                          closeOnClick: true,
                          draggable: true,
                          progress: undefined,
                          theme: "dark",
                        });
                        
                      } else {
                        return handleDelete(jobs._id);
                      }}}
                      size={25}
                    />
                  </>
                ) : null}
              </div>
            </div>

    </>
  )
}
