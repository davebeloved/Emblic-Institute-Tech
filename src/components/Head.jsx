import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import Logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { useStateContext } from "../context/contextProvider";

const Head = () => {
  const navigate = useNavigate();
  const { token } = useStateContext();
  return (
    <>
      <section className="head bg-white">
        <div className="flex items-center justify-between  mx-auto px-4">
          <div className="logo flex items-center gap-x-1  lg:gap-x-3">
            <img src={Logo} alt="" className=" " />
            <div className="">
              {/* <h1 className="text-lg lg:text-2xl  leading-none font-monts">
                EMBLIC-TECH
              </h1>
              <h5 className="text-[12px] lg:text-xl font-monts">
                ONLINE EDUCATION & LEARNING
              </h5> */}
            </div>
          </div>

          <div className="flex items-center gap-x-2 ml-4 lg:ml-0 lg:mr-6">
            {!token && (
              <button
                onClick={() => navigate("/signin")}
                className="border border-[#0294da] w-16 md:w-32 lg:w-28 lg:px-6 text-sm  md:text-lg -mt-0  text-[#0294da] hover:shadow-lg   px-7 py-1  lg:ml-4 transition-all duration-500  mb-5 lg:mt-0 lg:mb-0  font-semibold hover:bg-[#0294da] hover:text-white"
              >
                Sign in
              </button>
            )}
            <FaFacebookF className="text-[#0294da] hover:-translate-y-1 transition-all duration-500 cursor-pointer" />
            <FaInstagram className="text-[#0294da] hover:-translate-y-1 transition-all duration-500 cursor-pointer" />
            <FaTwitter className="text-[#0294da] hover:-translate-y-1 transition-all duration-500 cursor-pointer" />
            <FaYoutube className="text-[#0294da] hover:-translate-y-1 transition-all duration-500 cursor-pointer" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
