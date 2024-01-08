import { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";

export default function Search({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchBox, setSearchBox] = useState(false);
  const dispatch = useDispatch();
  // const jobDetails = useSelector((state) => state.jobs.value);

//   useEffect(() => {
//     dispatch(fetchJobDetails());
    
//   }, [dispatch]);
//  console.log("job details",fetchJobDetails)

  

  const handleOnchange = (e) => {
    const query = e.target.value;
    console.log("Input Change:", query);

    setSearchQuery(query);
    onSearch(query);

    const length = e.target.value.length;
    {
      length > 0 && setSearchBox(true);
    }
  };
  const handleOnFocus = (e) => {
    const length = e.target.value.length;
    {
      length > 0 && setSearchBox(true);
    }
  };
  const handleOnBlur = (e) => {
    const length = e.target.value.length;
    {
      length < 1 && setSearchBox(false);
    }
  };



  return (
    <>
      <div
        className={` ${
          searchBox ? "h-20 w-full px-20" : "h-16 px-10"
        } p-1 inline-block ps-5  text-l rounded-3xl  transition-all duration-300 shadow-lg`}
      >
        <div
          className={` ${
            searchBox ? "justify-between text-xl" : "gap-3"
          } flex h-full max-w-full items-center`}
        >
          <IoSearch className="text-4xl transition-transform transform hover:scale-110" />
          <input
            onChange={handleOnchange}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
            className="outline-none"
            placeholder="Search yr Job here"
          />
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
    </>
  );
}
