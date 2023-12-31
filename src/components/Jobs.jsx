import { useEffect, useState } from "react"
import axios from "axios"



export function PopularCategories (){


    const [getJobs, setJobs] = useState([])

    useEffect( ()=> {
    axios.get("http://localhost:8000/api/getHotJob")
        .then((res) => {
         setJobs(res.data)
         console(res)


        })
        .catch((err) => {
            console.log(err)
        }
    )

    },[])
    console.log(getJobs)




    return (
        <>
        <div className="bg-secondary mt-20 p-5 pb-28">
        <p className="text-5xl font-medium my-10">Popular categories</p>

        


        <div className="flex flex-wrap justify-between gap-10 px-40">
            {
                getJobs?.map(jobs => {
                    return ( <div key={jobs._id} className="flex gap-3 border border-gray-400 rounded-lg p-4 items-center ">
                <div>react icons</div>
                <div>
                  <p className="font-medium text-xl">
                    {jobs.title} <br /> {jobs.job_type}
                  </p>
                  <p className="font-light text-sm">{jobs.description}</p>
                </div>
              </div> )

                })
            }

          
         
        </div>

        {/* <....................jobs part> */}

       
        <button className="border bg-primary p-4 rounded-3xl mb-3">
          Find More Jobs
        </button>
        <p className="mb-10 ">Page: 1 of 100</p>
      </div>

        </>
    )
}

export  function PopularJobs(){

    return (
    <>
    <div className="px-40">
    <p className="text-5xl font-medium my-10">Popular Jobs</p>

    <div className="flex  gap-3 border border-gray-400 rounded-lg p-4 w-full items-center h-20 mb-7 bg-extra ">
      <div>reacticons</div>
      <div className="mr-auto">
        <p className="font-medium text-xl">
          Topic <br /> Content
        </p>
        <p className="font-light text-sm"> Description available</p>
      </div>
      <button className="border border-blue-400 p-5 rounded-xl bg-primary text-white font-bold">
        View Details
      </button>
    </div>
    <div className="flex  gap-3 border border-gray-400 rounded-lg p-4 w-full items-center h-20 mb-7 bg-extra ">
      <div>reacticons</div>
      <div className="mr-auto">
        <p className="font-medium text-xl">
          Topic <br /> Content
        </p>
        <p className="font-light text-sm"> Description available</p>
      </div>
      <button className="border border-blue-400 p-5 rounded-xl bg-primary text-white font-bold">
        View Details
      </button>
    </div>
    <div className="flex  gap-3 border border-gray-400 rounded-lg p-4 w-full items-center h-20 mb-7 bg-extra ">
      <div>reacticons</div>
      <div className="mr-auto">
        <p className="font-medium text-xl">
          Topic <br /> Content
        </p>
        <p className="font-light text-sm"> Description available</p>
      </div>
      <button className="border border-blue-400 p-5 rounded-xl bg-primary text-white font-bold">
        View Details
      </button>
    </div>
    <div className="flex  gap-3 border border-gray-400 rounded-lg p-4 w-full items-center h-20 mb-7 bg-extra ">
      <div>reacticons</div>
      <div className="mr-auto">
        <p className="font-medium text-xl">
          Topic <br /> Content
        </p>
        <p className="font-light text-sm"> Description available</p>
      </div>
      <button className="border border-blue-400 p-5 rounded-xl bg-primary text-white font-bold">
        View Details
      </button>
    </div>
    <div className="flex  gap-3 border border-gray-400 rounded-lg p-4 w-full items-center h-20 mb-7 bg-extra ">
      <div>reacticons</div>
      <div className="mr-auto">
        <p className="font-medium text-xl">
          Topic <br /> Content
        </p>
        <p className="font-light text-sm"> Description available</p>
      </div>
      <button className="border border-blue-400 p-5 rounded-xl bg-primary text-white font-bold">
        View Details
      </button>
    </div>
    
    <button className="border bg-primary p-4 rounded-3xl mb-3">
          Find More Jobs
        </button>
        <p className="mb-10 ">Page: 1 of 100</p>
  </div>
   
    </>
    )
    





}