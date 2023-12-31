import { IoSearch } from "react-icons/io5";

import { PopularCategories, PopularJobs } from "./Jobs";
import Footer from "./Footer";

export default function Home() {
  return (
    <div className="mt-20 ">
      <div className="h-[75vh]">
        <p className="text-7xl font-medium mb-5">
          Job is <span className="text-primary">overrated</span>
        </p>
        <p className="text-5xl mb-10">Go travel the world</p>
        <p className=" text-xl mb-20">
          10000 Jobs registered and 10000 employed
        </p>

        <div className="  h-16 p-1 inline-block ps-5  text-l rounded-3xl shadow-lg">
          <div className="flex gap-3 h-full max-w-full items-center">
            <IoSearch className="text-4xl transition-transform transform hover:scale-110" />
            <input className="outline-none" placeholder="Search yr Job here" />
            <div className="h-5/6 mx-4 my-1 border border-gray-300"></div>
            <input
              placeholder="Enter yr location here"
              className="mr-3 outline-none "
            />
            <button className="bg-primary text-xl px-5 py-2 shadow-md shadow-blue-300 rounded-3xl text-white font-semibold hover:bg-hover ">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* <------------second page-----------> */}

      <PopularCategories/>
      <PopularJobs/>

     
      {/* <...........................Loginn div..........> */}




      {/* <..............footer...........> */}

      <Footer/>
      
    </div>
  );
}
