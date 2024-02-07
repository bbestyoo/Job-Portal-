
import Footer from "./Footer";
import { useSelector } from "react-redux";
import Search from "./Search";
import { PopularCategories, PopularJobs } from "./BrowseJobs";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

export function Category({ Category, logo }) {
}
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



