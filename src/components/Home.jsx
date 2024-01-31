
import Footer from "./Footer";
import { useSelector } from "react-redux";
import Search from "./Search";
import { PopularCategories, PopularJobs } from "./BrowseJobs";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

export default function Home() {
  
  

  const navigate = useNavigate()

  const userDetails = useSelector((state)=>state.user.value)
  console.log("asdasd",userDetails)

  const handleFocus = (e) => {
    const length = e.target.value.length
    {
      length > 0 &&
      navigate("/browse jobs") 

    }

  }

  return (
    <div className=" bg-gray-100 ">
      <div className="bg-image bg-bottom  bg-cover bg-no-repeat pt-32">
        {/* <Header/> */}

      <div className="h-[83vh] ml-7">
        <p className="text-7xl font-medium mb-5">
          Job is <span className="text-primary">overrated</span>
        </p>
        <p className="text-5xl mb-10">Go travel the world</p>
        <p className=" text-xl mb-20">
          10000 Jobs registered and 10000 employed
        </p>

       <div onChange={handleFocus}>

      <Search/>
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




export function PopularJobs() {
  const [getJobs, setJobs] = useState([]);
  const [rerenderJobs, setRerenderJobs] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.user.value);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/getJob")
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

    axios.delete(`http://localhost:8000/api/deleteJob/${Jobs_id}`,{
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
