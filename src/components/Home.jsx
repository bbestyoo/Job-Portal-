import Footer from "./Footer";
import { useSelector } from "react-redux";
import Search from "./Search";
import { PopularCategories, PopularJobs } from "./BrowseJobs";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

export function Category({ Category, logo }) {}
export default function Home() {
  const navigate = useNavigate();

  const userDetails = useSelector((state) => state.user.value);
  // console.log("asdasd",userDetails)

  const handleFocus = (e) => {
    const length = e.target.value.length;
    {
      length > 0 && navigate("/browse jobs");
    }
  };

  return (
    <div className=" bg-gray-100 w-full">
      <div className="bg-image bg-bottom w-full bg-cover bg-no-repeat pt-32">
        {/* <Header/> */}

        <div className="h-[83vh] ml-7">
        <p className=" text-4xl md:text-7xl 2xl:text-9xl font-medium mb-5 2xl:mb-24 2xl:mt-36">
          Job is <span className="text-primary">overrated</span>
        </p>
        <p className="text-xl md:text-5xl 2xl:text-7xl mb-10 2xl:my-10">Go travel the world</p>
        <p className=" text-xl mb:text-2xl 2xl:text-5xl mb-20 2xl:my-24">
          10000 Jobs registered and 10000 employed
        </p>



          <div onChange={handleFocus}>
            <Search />
          </div>
        </div>
      </div>

      {/* <------------second page-----------> */}

      <PopularCategories />
      <PopularJobs />

      {/* <...........................Loginn div..........> */}

      {/* <..............footer...........> */}

      <Footer />
    </div>
  );
}
