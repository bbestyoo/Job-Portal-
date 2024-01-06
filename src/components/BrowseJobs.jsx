import Search from "./Search";

import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";


export function PopularCategories() {
  const [getHotJobs, setHotJobs] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/getHotJob")
      .then((res) => {
        setHotJobs(res.data);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(getHotJobs);

  return (
    <>
      <div className="bg-secondary mt-20 p-5 pb-28">
        <p className="text-5xl font-medium my-10">Popular categories</p>

        <div className="flex flex-wrap justify-between gap-10 px-40">
          {getHotJobs?.map((jobs) => {
            return (
              <div
                key={jobs._id}
                className="flex border border-gray-400 rounded-lg p-4 items-center w-1/3 "
              >
                <div>react icons</div>
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
      </div>
    </>
  );
}

export function PopularJobs({searchQuery}) {
  const [getJobs, setJobs] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();


  useEffect(() => {
    console.log('searchquery:',searchQuery)
    axios
      .get("http://localhost:8000/api/getJob")
      .then((res) => {
        const allJobs = res.data.jobs
        
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
      <div className="px-40">
        <p className="text-5xl font-medium my-10">Popular Jobs</p>
        {getJobs?.map((jobs) => {
          return     (
            <div
              key={jobs._id}
              className="flex  gap-3 border border-gray-400 rounded-lg p-4 w-full items-center h-20 mb-7 bg-extra "
            >
              <div>reacticons</div>
              <div className="mr-auto">
                <p className="font-medium text-xl">
                  {jobs.title} <br /> {jobs.type}
                </p>
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

    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (query) => {
        console.log('Handle Search:', query);

        setSearchQuery(query);
      };


  return (
    <>
      <div className="p-10">
        <Search onSearch={handleSearch} />
        <div className="my-28"></div>
        <PopularJobs searchQuery={searchQuery}/>
      </div>
    </>
  );
}
