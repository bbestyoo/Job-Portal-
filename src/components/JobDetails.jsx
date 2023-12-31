import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FcRating } from "react-icons/fc";
import { IoLocationSharp } from "react-icons/io5";
import { BsCalendarDate } from "react-icons/bs";

export default function JobDetails() {
  const [getJobById, setJobById] = useState([]);

  const params = useParams();
  const jobId = params.id;
  console.log(params);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/getJobById/${jobId}`)
      .then((res) => {
        setJobById(res.data);
        console.log(res.data);
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
            <p className="mb-2">Description:{getJobById.description}</p>
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
            <button className="ml-20 p-3 px-8 font-semibold text-white border border-gray-300 bg-primary rounded-2xl hover:bg-hover">Apply Now</button>
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
