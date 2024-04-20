import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate,  } from "react-router-dom";



const url = "https://job-portal-server-tvif.onrender.com/"
export  function SingleCategory() {

  const [getJobs,setJob] = useState([])
  const navigate = useNavigate()

  
  const params = useLocation()
  const category = params.search
  console.log("Asdasdasd",category)

  useEffect(()=>{

    axios.get(`https://job-portal-server-tvif.onrender.com/api/getJob${category}`)
    .then((res)=>{
      // console.log(res)
      setJob(res.data.jobs[0].data)
    })
    .catch((err)=>{
      console.log(err)
    })
    
  }, [])

  return (
    <>
    <div className="px-20 mt-16  w-full">
        <p className="text-3xl font-medium mb-16">Popular Categories Jobs</p>
        {getJobs?.map((jobs) => {
          return (
            <div
              key={jobs?._id}
              className="flex bg-white gap-3 border border-gray-400 py-10 rounded-lg p-4 w-full items-center h-20 mb-7 bg-extra "
            >
              <img
                className="h-16 rounded-lg"
                src={`${url}${jobs?.creatorPic}`}
                alt="oop"
              />
              <div className="mr-auto text-left px-6">
                <p className="font-medium text-xl ">{jobs?.title}</p>
                <p>{jobs?.type}</p>
                <p className="font-light text-sm"> {jobs?.description}</p>
              </div>
              <button
                onClick={() => {
                  navigate(`/jobs/${jobs?._id}`);
                }}
                className="border border-blue-400 p-5 rounded-xl bg-primary text-white font-bold"
              >
                View Details
              </button>
            </div>
          );
        })}

      
      </div>

    </>
    
  );
}

export function Category({ Category, logo }) {
  let cat = Category.toUpperCase();
  return (
    <Link
      to={`/jobs?category=${Category}`}
      className=" shadow-md p-5 flex gap-5 w-48 items-center bg-white rounded-lg md:w-52 sm:w-48"
    >
      <img
        className=" w-8 md:w-14 bg-secondary p-2 rounded-full "
        src={logo}
        alt="sda"
      />
      <p className="text-md mt-3 text-[8px] sm:text-[10px] md:text-sm font-semibold text-black">
        {cat}
      </p>
    </Link>
  );
}
