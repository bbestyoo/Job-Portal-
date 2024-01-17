
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
