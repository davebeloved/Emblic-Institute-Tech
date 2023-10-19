import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import Logo from "../assets/logo.png";

const Head = () => {
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
            <FaFacebookF className="text-[#1F2121]"/>
            <FaInstagram className="text-[#1F2121]"/>
            <FaTwitter className="text-[#1F2121]"/>
            <FaYoutube className="text-[#1F2121]"/>
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
