import { IoSearch } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

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

        <div className=" border-2 h-16 p-1 inline-block ps-5  text-l rounded-3xl">
          <div className="flex gap-3 h-full max-w-full items-center">
            <IoSearch className="text-4xl" />
            <input className="outline-none" placeholder="Search yr Job here" />
            <div className="h-5/6 mx-4 my-1 border border-gray-400"></div>
            <input
              placeholder="Enter yr location here"
              className="mr-3 outline-none "
            />
            <button className="bg-primary text-xl px-3 border-2 rounded-3xl ">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* <------------second page-----------> */}

      <div className="bg-secondary mt-20 p-5 pb-28">
        <p className="text-5xl font-medium my-10">Popular categories</p>
        <div className="flex flex-wrap justify-between gap-10 px-40">
          <div className="flex gap-3 border border-gray-400 rounded-lg p-4 items-center ">
            <div>reacticons</div>
            <div>
              <p className="font-medium text-xl">
                Topic <br /> Content
              </p>
              <p className="font-light text-sm"> Description available</p>
            </div>
          </div>
          <div className="flex gap-3 border border-gray-400 rounded-lg p-4 items-center">
            <div>reacticons</div>
            <div>
              <p className="font-medium text-xl">
                Topic <br /> Content
              </p>
              <p className="font-light text-sm"> Description available</p>
            </div>
          </div>
          <div className="flex gap-3 border border-gray-400 rounded-lg p-4 items-center">
            <div>reacticons</div>
            <div>
              <p className="font-medium text-xl">
                Topic <br /> Content
              </p>
              <p className="font-light text-sm"> Description available</p>
            </div>
          </div>
          <div className="flex gap-3 border border-gray-400 rounded-lg p-4 items-center">
            <div>reacticons</div>
            <div>
              <p className="font-medium text-xl">
                Topic <br /> Content
              </p>
              <p className="font-light text-sm"> Description available</p>
            </div>
          </div>
          <div className="flex gap-3 border border-gray-400 rounded-lg p-4 items-center">
            <div>reacticons</div>
            <div>
              <p className="font-medium text-xl">
                Topic <br /> Content
              </p>
              <p className="font-light text-sm"> Description available</p>
            </div>
          </div>
        </div>

        {/* <....................jobs part> */}

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
        </div>
        <button className="border bg-primary p-4 rounded-3xl mb-10">
          Find More Jobs
        </button>
      </div>

      {/* <...........................Loginn div..........> */}

      {/* <..............footer...........> */}
      <div>
        <div className="flex p-5 text-5xl gap-10 mb-16 w-full mx-auto items-center justify-center relative bottom-20 ">
          <div className="flex justify-center items-center gap-7 shadow p-7 rounded-3xl bg-secondary">
            <p>Never miss any new jobs</p>
            <button className="bg-primary text-white text-3xl p-3 rounded-3xl ">
              Subscribe
            </button>
          </div>
        </div>
        <div className="flex justify-between p-5">
          <div className="border border-gray-400  p-5 rounded-3xl px-10">
            <p className="text-2xl font-bold mb-4">Logo</p>
            <p>gg</p>
          </div>
          <div className="border border-gray-400 p-5 rounded-3xl px-10">
            <p className="text-2xl font-bold mb-4">About Us</p>
            <ul className="text-left">
              <Link>
                <li>About Us</li>
              </Link>
              <Link>
                <li>Life at About Us</li>
              </Link>
              <Link>
                <li>Facebook</li>
              </Link>
              <Link>
                <li>Instagram</li>
              </Link>
              <Link>
                <li>X</li>
              </Link>
              <Link>
                <li>Feedback</li>
              </Link>
            </ul>
          </div>
          <div className="border border-gray-400 p-5 rounded-3xl px-10 text-left">
            <p className="text-2xl font-bold mb-4">Contacts</p>
            <div className="flex items-center">
              <FaLocationDot />
              <p>Locations-09-nepal</p>
            </div>
            <div className="flex items-center">
              <MdEmail />
              <p>asdas@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
