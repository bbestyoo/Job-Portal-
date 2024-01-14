import Search from "./Search";

import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "rc-pagination";
import bank from "../assets/icons/bank.png";
import coding from "../assets/icons/coding.png";
import food from "../assets/icons/food-restaurant.png";
import gov from "../assets/icons/government.png";
import grad from "../assets/icons/graduation-cap.png";
import ngo from "../assets/icons/ngo.png";
import soldier from "../assets/icons/soldier.png";
import stocks from "../assets/icons/stocks.png";
import support from "../assets/icons/support.png";
import logistics from "../assets/icons/logistics.png";
import healthcare from "../assets/icons/healthcare.png";
import community from "../assets/icons/community.png";
import {Category} from "./Categories";

const url = "http://localhost:8000/";

export function PopularCategories() {
  // const [getHotJobs, setHotJobs] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:8000/api/getHotJob")
  //     .then((res) => {
  //       setHotJobs(res.data);
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);
  // console.log(getHotJobs);

  return (
    <>
      <div className="mt-3 mb-24 px-14 bg-secondary py-6 mx-7 rounded-lg">
        <h1 className="text-3xl font-semibold mb-4">Popular Categories</h1>
        <div
          
          className=" container mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5  gap-y-8  cursor-pointer   justify-items-center justify-self-center"
        >
          <Category logo={coding} Category={"it-computer"} />
          <Category logo={bank} Category={"bank-finance"} />
          <Category logo={stocks} Category={"sales-marketing"} />
          <Category logo={gov} Category={"government"} />
          <Category logo={soldier} Category={"army-police"} />
          <Category logo={support} Category={"cooperative"} />
          <Category logo={grad} Category={"school-college"} />
          <Category logo={healthcare} Category={"healthcare"} />
          <Category logo={community} Category={"customer_care"} />
          <Category logo={logistics} Category={"logistics-supply_chain"} />
        </div>
      </div>
      {/* <div className="bg-secondary mt-20 p-5 pb-28">
        <p className="text-5xl font-medium my-10">Popular categories</p>

        <div className="flex flex-wrap justify-between gap-10 px-40">
          {getHotJobs?.map((jobs) => {
            return (
              <div
                key={jobs._id}
                className="flex border border-gray-400 rounded-lg p-4 items-center w-1/3 "
              >
                <img className="h-16 rounded-lg" src={`${url}${jobs.creatorPic}`} alt="" />
                <div>
                  <p className="font-medium text-xl">
                    {jobs.title} <br /> {jobs.job_type}
                  </p>
                  <p className="font-light text-sm">{jobs.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* <....................jobs part> */}
      {/* </div> */} 
    </>
  );
}

export function PopularJobs({ searchQuery }) {
  const [getJobs, setJobs] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("searchquery:", searchQuery);
    axios
      .get("http://localhost:8000/api/getJob")
      .then((res) => {
        console.log("popularjobs", res.data.jobs);
        const allJobs = res.data.jobs;

        const filteredJobs = searchQuery
          ? allJobs.filter((job) =>
              job.title.toLowerCase().includes(searchQuery.toLowerCase())
            )
          : allJobs;

        setJobs(filteredJobs);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [searchQuery]);

  return (
    <>
      <div className="px-20  w-full">
        <p className="text-3xl font-medium mb-10">Popular Jobs</p>
        {getJobs?.map((jobs) => {
          return (
            <div
              key={jobs._id}
              className="flex bg-white gap-3 border border-gray-400 py-10 rounded-lg p-4 w-full items-center h-20 mb-7 bg-extra "
            >
              <img
                className="h-16 rounded-lg"
                src={`${url}${jobs.creatorPic}`}
                alt="oop"
              />
              <div className="mr-auto text-left px-6">
                <p className="font-medium text-xl ">{jobs.title}</p>
                <p>{jobs.type}</p>
                <p className="font-light text-sm"> {jobs.description}</p>
              </div>
              <button
                onClick={() => {
                  navigate(`/jobs/${jobs._id}`);
                }}
                className="border border-blue-400 p-5 rounded-xl bg-primary text-white font-bold"
              >
                View Details
              </button>
            </div>
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
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    console.log("Handle Search:", query);

    setSearchQuery(query);
  };

  return (
    <>
      <div className="p-10 bg-footer">
        <Search onSearch={handleSearch} />
        <div className="mb-7 mt-14 mx-72 ">
          {/* <Pagination
            total={paginationData.total}
            pageSize={paginationData.perPage}
            prevIcon="<"
            nextIcon=">"
            current={paginationData.page}
            onChange={(pgNumber) => {
              console.log(pgNumber);
              currentSearchParams.set("page", pgNumber);
              setSearchParams(currentSearchParams);
            }}
            showTotal={(total, range) =>
              `${range[0]}-${range[1]} of ${total} items`
            }
          /> */}
          <div className="flex gap-4  ">
            <label htmlFor="sort">Per Page</label>
            <select
              className="border-2  border-green-600 rounded-md "
              // onChange={(e) => {
              //   e.preventDefault();
              //   currentSearchParams.set("perPage", e.target.value);
              //   setSearchParams(currentSearchParams);
              // }}
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={15}>15</option>
            </select>
          </div>
        </div>

        <div className="flex">
          <div className="bg-white p-6 rounded-lg border-1">
            <h1 className="text-xl mb-7">All Filters</h1>
            <div className="border border-gray mb-5"></div>
            <div className="flex flex-col">
              <label className="text-left text-md mb-3 ">Job Type</label>
              <select
                name="job_type"
                // onChange={(e) => {
                //   currentSearchParams.set("job_type", e.target.value);
                //   setSearchParams(currentSearchParams);
                // }}
                className=" text-sm font-light border-2 rounded-lg mb-4"
              >
                <option defaultChecked value={""}></option>
                <option defaultChecked value={"part-time"}>
                  part-time
                </option>
                <option value={"full-time"}>full-time</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label className="text-left text-md  mb-3">Job Level</label>
              <select
                name="job_level"
                // onChange={(e) => {
                //   currentSearchParams.set("job_level", e.target.value);
                //   setSearchParams(currentSearchParams);
                // }}
                className=" text-sm font-light border-2 rounded-lg mb-4"
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
              <label className="text-left text-md mb-2 ">Job Category</label>
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
                <option value={"ngo-ingo"}>NGO/INGO</option>
                <option value={"sales-marketing"}>Sales/Marketing</option>
                <option value={"government"}>Government</option>
                <option value={"army-police"}>Army/Police</option>
                <option value={"cooperative"}>Co-operative</option>
                <option value={"school-college"}>School/College</option>
                <option value={"healthcare"}>Healthcare</option>
                <option value={"hotel-restaurant"}>Hotel/Restaurant</option>
                <option value={"customer_care"}>Customer-Care</option>
                <option value={"it-computer"}>IT/Computer</option>
                <option value={"logistics-supply_chain"}>
                  Logistics/Supply Chain
                </option>
              </select>
            </div>
          </div>
          <PopularJobs searchQuery={searchQuery} />
        </div>
      </div>
    </>
  );
}
