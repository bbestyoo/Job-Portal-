import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FcRating } from "react-icons/fc";
import { IoLocationSharp } from "react-icons/io5";
import { BsCalendarDate } from "react-icons/bs";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function JobDetails() {
  const [buttonStyle, setButtonStyle] = useState({ cursor: "pointer" });
  const [getJobById, setJobById] = useState([]);
  const navigate = useNavigate()
  const userDetails = useSelector((state)=>state.user.value)

  const params = useParams();
  const jobId = params.id;
  console.log(params);

  function handleClick (){
    if (userDetails) {
      if (userDetails.role === "job-seeker") {
        toast.success("Applied Successfully", {
          pauseOnHover: false,
          autoClose: 2000,
        });
        navigate("/");
      } else {
        toast.warning("You need to be a Job Seeker to apply", {
          pauseOnHover: false,
          autoClose: 2000,
        });
        // Set pointer to "not-allowed" when there's no job seeker
        setButtonStyle({ cursor: 'not-allowed' });
      }
    } else {
      toast.error("Login required", {
        pauseOnHover: false,
        autoClose: 2000,
      });
      // Set pointer to "not-allowed" when there's no job seeker
      navigate("/login")
    }
  }
  

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/getJobById/${jobId}`)
      .then((res) => {
        console.log("job indasdv",res.data);
        setJobById(res.data);
      })
      .catch((err) => {
        console.log(err); 
      });
  }, []);

  
  return (
    <>
      <div className="bg-footer h-900 p-10">
          <div className="m-10 w-fit border rounded-xl bg-white text-left p-8" >
            <p className="font-bold mb-3 text-2xl uppercase">{getJobById.title}</p>
            <div className="flex gap-5 items-center mb-2">
              <p>{getJobById.tags}</p>
              <FcRating />
              <p className="pl-4 border-s-2 leading-4">9 Reviews</p>
            </div>
            <div>
            <h2 className=" font-semibold text-2xl mb-1">Job Description
            :</h2>

            <p className="mb-2" dangerouslySetInnerHTML={{ __html: getJobById.description }}></p>
            </div>
            

            <hr />
            <div className="flex gap-5 items-center mb-3 mt-2">
                <p className=" pr-3 border-e-2 leading-2">{getJobById.experience}</p>
                <p className="pr-4 border-e-2 leading-2">$ Not Disclosed</p>
                <p >{getJobById.job_level}</p>
                <span className="flex items-center">

                <IoLocationSharp />
                <p className="">{getJobById.location}</p>
                </span>
            </div>

            <hr />

            <div className="flex items-center mt-2 gap-3">
            <BsCalendarDate />
            <p>Apply Before: {getJobById.deadline_date}</p>
            <p>Applicants:10</p>
            <button 
              style={buttonStyle}
              onClick={handleClick}
              className="ml-20 p-3 px-8 font-semibold text-white border border-gray-300 bg-primary rounded-2xl hover:bg-hover">Apply Now</button>
            </div>
            

        </div>

        <div className="m-10 w-2/3 border rounded-xl bg-white text-left p-8">
            <p className="font-semibold text-xl mb-3">Job Details</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi autem libero voluptate quod odit, deserunt consectetur nulla tenetur expedita debitis magni blanditiis amet minima repudiandae deleniti perspiciatis. Animi, vitae cumque.</p>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore necessitatibus nisi exercitationem iusto, id perspiciatis repudiandae nulla sit dolore sed ducimus voluptate officia eligendi cupiditate veritatis accusamus maxime aperiam neque.</p>
        </div>
        <hr />

      </div>
    </>
  );
}
