import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaArrowUp } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { FaCar } from "react-icons/fa";
import logo from "../assets/logo.png";


export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show/hide the scroll-to-top button based on scroll position
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    // Scroll to the top of the page with smooth animation
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="bg-black">
        <div className=" bg-black">
          <div className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 sm:p-5 bg-black pt-20 sm:pl-10 sm:pr-10 pl-3 text-white">
            <div className="  p-5 rounded-3xl sm:px-10">
              <p className="text-2xl font-bold ">Get In Touch</p>
              <p className="flex items-center gap-3 my-4 ">
              <img className="h-10" src={logo} alt="oops" />
                <span className="text-3xl font-bold text-yellow-400">
                  Job Portal
                </span>
              </p>
              <p className="flex items-center gap-3 mb-2">
                <FaLocationDot />
                123 Street, New York, USA
              </p>
              <p className="flex items-center gap-3 mb-2">
                <FaPhone />
                +012 345 67890
              </p>
              <p className="flex items-center gap-3">
                <IoMdMail />
                info@example.com
              </p>
            </div>

            <div className=" p-5 rounded-3xl sm:px-10 text-white">
              <p className="text-2xl font-bold mb-4">Quick Links</p>
              <ul className="text-left flex flex-col gap-1">
                <Link>
                  <li className="flex gap-1 items-center">
                    <MdKeyboardArrowRight size={27} /> About Us
                  </li>
                </Link>
                <Link>
                  <li className="flex gap-1 items-center">
                    <MdKeyboardArrowRight size={27} /> Contact Us
                  </li>
                </Link>
                <Link>
                  <li className="flex gap-1 items-center">
                    <MdKeyboardArrowRight size={27} /> Our Services
                  </li>
                </Link>
                <Link>
                  <li className="flex gap-1 items-center">
                    <MdKeyboardArrowRight size={27} /> Terms & Condition
                  </li>
                </Link>
                <Link>
                  <li className="flex gap-1 items-center">
                    <MdKeyboardArrowRight size={27} /> Support
                  </li>
                </Link>
              </ul>
            </div>
            <div className=" p-5 rounded-3xl sm:px-10 text-white">
              <p className="text-2xl font-bold mb-4">Popular Links</p>
              <ul className="text-left flex flex-col gap-1">
                <Link>
                  <li className="flex gap-1 items-center">
                    <MdKeyboardArrowRight size={27} /> About Us
                  </li>
                </Link>
                <Link>
                  <li className="flex gap-1 items-center">
                    <MdKeyboardArrowRight size={27} /> Contact Us
                  </li>
                </Link>
                <Link>
                  <li className="flex gap-1 items-center">
                    <MdKeyboardArrowRight size={27} /> Our Services
                  </li>
                </Link>
                <Link>
                  <li className="flex gap-1 items-center">
                    <MdKeyboardArrowRight size={27} /> Terms & Condition
                  </li>
                </Link>
                <Link>
                  <li className="flex gap-1 items-center">
                    <MdKeyboardArrowRight size={27} /> Support
                  </li>
                </Link>
              </ul>
            </div>

            <div className=" p-5 rounded-3xl sm:px-10 text-left">
              <p className="text-2xl font-bold mb-4">News Letter</p>
              <div className="flex items-center w-fit">
                <input
                  className="p-3 w-full sm:w-full"
                  type="text"
                  placeholder="Your Email Address"
                />
                <button className="bg-yellow-400 text-white px-5 p-3 font-semibold">
                  SignUp
                </button>
              </div>
              <div className="my-4">
                <p className="font-bold text-xl">Follow us</p>
                <ul className="flex mt-4 gap-1">
                  <li className="border border-white p-3 hover:bg-white hover:text-black">
                    <FaTwitter />
                  </li>
                  <li className="border border-white p-3 hover:bg-white hover:text-black">
                    <FaFacebookF />
                  </li>
                  <li className="border border-white p-3 hover:bg-white hover:text-black">
                    <FaYoutube />
                  </li>
                  <li className="border border-white p-3 hover:bg-white hover:text-black">
                    <FaLinkedinIn />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-last grid md:grid-cols-1 text-center lg:text-left lg:grid-cols-2  sm:px-16 py-7">
          <div className="">
            <span className="text-white">© </span>
            <span className="text-yellow-400">JOB PORTAL</span>
            <span className="text-white">All Right Reserved.</span>
          </div>
          <div className="text-center lg:text-right">
            <span className="block">
              <p className="text-white inline">Designed By </p>
              <p className="text-yellow-400 inline">Bibesh Basnet</p>
            </span>
            <span className="">
              <p className="text-white inline">Distributed By: </p>
              <p className="text-yellow-400 inline">Job portal</p>
            </span>
          </div>
          {isVisible && (
            <button
              onClick={scrollToTop}
              className="bg-yellow-400 text-white p-4 fixed bottom-7 right-6 z-50  transition-opacity duration-300 ease-in-out hover:opacity-75 "
            >
              <FaArrowUp size={19} />
            </button>
          )}
        </div>
      </div>
    </>
  );
}