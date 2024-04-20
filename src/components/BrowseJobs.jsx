import Search from "./Search";

import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "rc-pagination";
import bank from "../assets/icons/bank.png";
import coding from "../assets/icons/coding.png";
import gov from "../assets/icons/government.png";
import grad from "../assets/icons/graduation-cap.png";
import soldier from "../assets/icons/soldier.png";
import stocks from "../assets/icons/stocks.png";
import support from "../assets/icons/support.png";
import logistics from "../assets/icons/logistics.png";
import healthcare from "../assets/icons/healthcare.png";
import community from "../assets/icons/community.png";
import { Category } from "./Categories";

// import toast from "react-hot-toast";
import { ToastContainer, toast } from "react-toastify";
import { SingleJob } from "./Jobs/SingleJob";
import { SearchedJobs } from "./Jobs/SearchedJobs";

const url = "https://job-portal-server-tvif.onrender.com/";

export function PopularCategories() {

  return (
    <>
      <div className="mt-3 mb-24 px-14 bg-secondary py-6 mx-7 rounded-lg">
        <h1 className="text-3xl font-semibold my-10">Popular Categories</h1>
        <div className=" container mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5  gap-y-8  cursor-pointer   justify-items-center justify-self-center">
          <Category logo={coding} Category={"it-computer"} />
          <Category logo={bank} Category={"bank-finance"} />
          <Category logo={stocks} Category={"sales-marketing"} />
          <Category logo={gov} Category={"government"} />
          <Category logo={soldier} Category={"army-police"} />
          <Category logo={support} Category={"design-creative"} />
          <Category logo={grad} Category={"school-college"} />
          <Category logo={healthcare} Category={"healthcare"} />
          <Category logo={community} Category={"customer_care"} />
          <Category logo={logistics} Category={"logistics-supply_chain"} />
        </div>
      </div>
      
    </>
  );
}

export function PopularJobs() {
  const [getJobs, setJobs] = useState([]);
  const [rerenderJobs, setRerenderJobs] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.user.value);

  useEffect(() => {
    axios
      .get("https://job-portal-server-tvif.onrender.com/api/getJob")
      .then((res) => {
        console.log("popularjobsasdasd", res.data.jobs[0].data);
        const allJobs = res.data.jobs[0].data;
        setJobs(allJobs);
      })
      .catch((err) => {
        console.log("jobserr",err);
      });
  }, [ rerenderJobs]);

  function handleDelete(Jobs_id){


    setRerenderJobs(true)

    axios.delete(`https://job-portal-server-tvif.onrender.com/api/deleteJob/${Jobs_id}`,{
      headers: {
        Authorization: `bearer ${localStorage.getItem("token")}`,
      },
    })
    .then((res)=>{
      toast.success("Job deleted Successfully")
    })
    .catch((err)=>{
      console.log(err)
    })

  }

  


  return (
    <>
      <ToastContainer />
      <div className="px-20  w-full">
        <p className="text-3xl font-medium mb-10">Popular Jobs</p>
        {getJobs?.map((jobs) => {
          return (
            <SingleJob
              handleDelete={handleDelete}
              key={jobs._id}
              
              jobs={jobs}
            
            />

            // <div
            //   key={jobs._id}
            //   className="flex bg-white gap-3 border border-gray-400  rounded-lg p-2 w-full items-center h-fit mb-7 bg-extra "
            // >
            //   <img
            //     className="h-20 rounded-lg"
            //     src={`${url}${jobs.creatorPic}`}
            //     alt="oop"
            //   />
            //   <div className="mr-auto text-left px-6">
            //     <p className="font-medium text-xl ">{jobs.title}</p>
            //     <p>{jobs.type}</p>
            //     <p className="font-light text-sm"        
            //     dangerouslySetInnerHTML={{ __html: jobs.description }}>

            //        </p>
            //   </div>
            //   <div className="flex items-center gap-3">
            //     <button
            //       onClick={() => {
            //         navigate(`/jobs/${jobs._id}`);
            //       }}
            //       className="border border-blue-400 p-5 rounded-xl bg-primary text-white font-bold"
            //     >
            //       View Details
            //     </button>
            //     {userDetails?.role === "company" ? (
            //       <>
            //         <FaRegEdit
            //           size={25}
            //           onClick={() => {
            //             if (userDetails?._id == jobs?.createdBy) {
            //               // Navigate to the edit page if user is authorized
            //               navigate(`/jobs/editJob/${jobs._id}`);
            //             } else {
            //               // Show an error toast if user is not authorized
            //               toast.error("Unauthorized", {
            //                 position: "top-right",
            //                 autoClose: 1500,
            //                 hideProgressBar: false,
            //                 closeOnClick: true,
            //                 draggable: true,
            //                 progress: undefined,
            //                 theme: "dark",
            //               });
            //             }
            //           }}
            //           className="hover:"
            //         />
            //         <MdDelete
            //          onClick={() => {
            //           if (jobs.createdBy !== userDetails._id) {

            //             toast.error("Unauthorized", {
            //               position: "top-right",
            //               autoClose: 1500,
            //               hideProgressBar: false,
            //               closeOnClick: true,
            //               draggable: true,
            //               progress: undefined,
            //               theme: "dark",
            //             });
                        
            //           } else {
            //             return handleDelete(jobs._id);
            //           }}}
            //           size={25}
            //         />
            //       </>
            //     ) : null}
            //   </div>
            // </div>
          );
        })}

        <button
          className="border bg-primary p-4 rounded-3xl mb-3"
          onClick={() => {
            navigate(`/browse jobs`);
          }}
        >
          Find More Jobs
        </button>
        <p className="mb-10 ">Page: 1 of 100</p>
      </div>
    </>
  );
}

export default function BrowseJobs() {

  const initialState = {
    search: "",
    job_type: "",
  };
  const [jobs, setjobs] = useState([]);
  const [input, setInput] = useState(initialState);
  const [isEmpty, setIsEmpty] = useState(false);
  const [currentSearchParams, setSearchParams] = useSearchParams();
  const [paginationData, setPaginationData] = useState({
    total: 10,
    Page: 1,
    perPage: 5,
  });
  const params = useLocation();
  const userDetail = useSelector((state) => state.user.value);
  console.log(userDetail);

  useEffect(() => {
    setIsEmpty(false);
    // Aos.init({ duration: 1000 });
    axios
      .get(`https://job-portal-server-tvif.onrender.com/api/getJob/${params.search}`)
      .then((res) => {
        setjobs(res.data.jobs[0].data);
        console.log("resdata",res.data.jobs[0])
        if (res.data.jobs[0].metadata[0]) {
          setPaginationData(res.data.jobs[0].metadata[0]);
        }
        console.log("yeta pugyo?");
        res.data.jobs[0].data.length === 0 ? setIsEmpty(true) : setIsEmpty(false);
      })
      .catch((err) => console.log(err));

    // sdds
  }, [params.search]);
  console.log(params.search);

  function handleChange(e) {
    setInput({ ...input, [e.target.name]: e.target.value });
    setSearchParams(currentSearchParams);
    console.log(currentSearchParams.get("search"));
  }

  function handleDelete(id) {
    console.log("this is hadnle delete");
    axios
      .delete(`https://job-portal-ten-alpha.vercel.app/api/deleteJob/${id}`, {
        headers: {
          authorization: `bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setjobs((jobs) => jobs.filter((job) => job._id !== id));
        toast.success("Deleted Successfully");
        console.log(res.data);
      })
      .catch((Err) => console.log(Err));
  }
 

  console.log(isEmpty);

  return (
    <div className=" p-7">
      <h2 className="mt-16 text-xl text-black bg-[#F6F7FA] font-bold text-center py-6">
        All the Jobs You're Seeking Available Here
      </h2>
      <div className=" container mx-auto">
        <div className="my-4">
          <div className="  flex flex-col sm:flex-row gap-4 sm:justify-between items-center">
            <div className=" w-full">
              <input
                name="search"
                onChange={(e) => {
                  e.preventDefault();
                  handleChange(e);
                  currentSearchParams.set("search", e.target.value);
                  setSearchParams(currentSearchParams);
                }}
                value={currentSearchParams.get("search")}
                className=" w-full  text-sm border-2  bg-white rounded-md p-2 outline-none"
                placeholder="search by job title"
              />
            </div>
            <div className="flex gap-1  justify-between sm:justify-normal">
              <div className="flex flex-col gap-1 text-center">
                <label className=" text-sm font-thin ">Job Type</label>
                <select
                  name="job_type"
                  onChange={(e) => {
                    currentSearchParams.set("job_type", e.target.value);
                    setSearchParams(currentSearchParams);
                  }}
                  className=" text-sm font-light border-2 rounded-lg"
                >
                  {/* <option defaultValue value={""}></option> */}
                  <option defaultChecked value={""}></option>
                  <option defaultChecked value={"part-time"}>
                    part-time
                  </option>
                  <option value={"full-time"}>full-time</option>
                </select>
              </div>
              <div className="flex flex-col gap-1 text-center">
                <label className=" text-sm font-thin ">Job Level</label>
                <select
                  name="job_level"
                  onChange={(e) => {
                    currentSearchParams.set("job_level", e.target.value);
                    setSearchParams(currentSearchParams);
                  }}
                  className=" text-sm font-light border-2 rounded-lg"
                >
                  {/* <option defaultValue value={""}></option> */}
                  <option defaultChecked value=""></option>
                  <option defaultChecked value={"fresher"}>
                    fresher
                  </option>
                  <option value={"junior"}>junior</option>
                  <option value={"mid"}>mid</option>
                  <option value={"senior"}>senior</option>
                </select>
              </div>
              <div className="flex flex-col gap-1 text-center">
                <label className=" text-sm font-thin ">Job Category</label>
                <select
                  name="job_type"
                  onChange={(e) => {
                    currentSearchParams.set("category", e.target.value);
                    setSearchParams(currentSearchParams);
                  }}
                  className="  text-sm font-light border-2 rounded-lg"
                >
                  {/* <option defaultValue value={""}></option> */}

                  <option defaultChecked value={""}></option>
                  <option value={"bank-finance"}>Bank/Finance</option>
                  <option value={"sales-marketing"}>Sales/Marketing</option>
                  <option value={"government"}>Government</option>
                  <option value={"army-police"}>Army/Police</option>
                  <option value={"cooperative"}>Co-operative</option>
                  <option value={"school-college"}>School/College</option>
                  <option value={"healthcare"}>Healthcare</option>
                  <option value={"hotel-restaurant"}>Hotel/Restaurant</option>
                  <option value={"customer_care"}>Customer-Care</option>
                  <option value={"it-computer"}>IT/Computer</option>
                  <option value={"it-computer"}>Design Creative</option>
                  <option value={"logistics-supply_chain"}>
                    Logistics/Supply Chain
                  </option>
                </select>
              </div>
            </div>
            {/* <button
            type="submit"
            className=" text-gray-300 bg-green-700 px-4 rounded-lg"
          >
            {" "}
            Search
          </button> */}
          </div>
        </div>
        <div className="flex justify-between">
          <Pagination
            total={paginationData.total}
            pageSize={paginationData.perPage}
            prevIcon="<"
            nextIcon=">"
            current={paginationData.Page}
            onChange={(pgNumber) => {
              console.log(pgNumber);
              currentSearchParams.set("Page", pgNumber);
              setSearchParams(currentSearchParams);
            }}
            showTotal={(total, range) =>
              `${range[0]}-${range[1]} of ${total} items Shown`
            }
          />
          {/* <div className="flex gap-4  ">
            <label htmlFor="sort">Per Page</label>
            <select
              className="border-2  border-green-600 rounded-md "
              onChange={(e) => {
                e.preventDefault();
                currentSearchParams.set("perPage", e.target.value);
                setSearchParams(currentSearchParams);
              }}
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={15}>15</option>
            </select>
          </div> */}
        </div>
        {isEmpty && (
          <div className=" mx-auto text-center mt-20">
            <h3 className=" text-red-500 font-bold text-4xl">Sorry!!!</h3>
            <h2 className=" text-red-300 mt-2 font-bold text-2xl">
              No Such Job Found
            </h2>
          </div>
        )}
        <div className="mb-2  -z-10">
          {jobs.map((job) => (
            <div
              data-aos="slide-up"
              key={job._id}
              className="flex    flex-col  "
            >
              
              <SearchedJobs
                handleDelete={handleDelete}
                userDetail={userDetail}
                key={job._id}
                job={job}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );



}

