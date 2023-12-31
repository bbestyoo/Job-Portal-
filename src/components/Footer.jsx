import { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Footer() {
  const [showMore, setShowMore] = useState(false);  

  function readMore() {
    setShowMore(!showMore);
  }

  return (
    <>
      <div>
        <div className="flex justify-center items-center gap-7 shadow p-7 rounded-3xl bg-secondary  relative top-16 text-5xl w-2/3 mx-auto">
          <p>Never miss any new jobs</p>
          <button className="bg-primary hover:bg-hover   text-white text-3xl p-3 rounded-3xl ">
            Subscribe
          </button>
        </div>
        <div className="">
          <div className="flex justify-between p-5 bg-footer pt-20">
            <div className=" p-1 py-5 rounded-lg text-left text-xs w-1/3 ">
        <span>
            <p> Since its inception in 2023, this site has been at the forefront
                of connecting job seekers and employers in Nepal and around the
                globe. The goal is to provide a comprehensive platform for job
                seekers to find jobs in Nepal and for employers to find the
                right fit for their organization. We pride ourselves on being a
                reliable bridge between hiring employers and job seekers and
                have established ourselves as a national leader in recruitment
                solutions.</p>{""}
            {!showMore && (
          <>
            <Link onClick={readMore} className="text-primary">
              Read more...
            </Link>
          </>
        )}
            
        {showMore && (
          <>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam veniam, similique pariatur veritatis quos nisi eum nulla id vitae et saepe voluptatibus recusandae itaque voluptas quasi fugit repudiandae iste voluptate.</p>
            <Link onClick={readMore} className="text-primary">
              Read less
            </Link>
            
          </>
        )}
        </span>
      
            </div>
            <div className="  p-5 rounded-3xl px-10">
              <p className="text-2xl font-bold mb-4">Logo</p>
              <p>gg</p>
            </div>
            <div className=" p-5 rounded-3xl px-10">
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
            <div className=" p-5 rounded-3xl px-10 text-left">
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
    </>
  );
}
