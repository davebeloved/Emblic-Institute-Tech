import React from "react";
import "../styles/footer.css";
import { BsFillSendFill } from "react-icons/bs";
import Logo from "../assets/logo.png";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaAddressCard,
} from "react-icons/fa";
import { AiOutlineMail, AiFillPhone } from "react-icons/ai";

const Footer = () => {
  const date = new Date();
  const year = date.getUTCFullYear();
  return (
    <>
      <section className="newletter">
        <div className="grid grid-cols-1 lg:grid-cols-2 px-6 lg:px-10 lg:items-center">
          <div className="text-center lg:text-left">
            <h1 className="font-monts">
              Newsletter - Stay tune and get the latest update
            </h1>
            <span className="font-monts text-sm">
              We will be providing more information regarding our training
              courses in the near future. Stay tuned for updates.
            </span>
          </div>
          <div className=" bg-white flex items-center h-10 py-7">
            <input
              type="text"
              placeholder="Enter email address"
              className="bg-transparent text-black p-3"
            />
            {/* <BsFillSendFill className="icon" /> */}
            <button className="btn-primary bg-[#4caf50] mr-3 px-6">Send</button>
          </div>
        </div>
      </section>

      <footer className="py-10">
        <div className="px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-4 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <img src={Logo} alt="logo" className="w-32 block mx-auto lg:mx-0" />
            <span className="font-inter  font-semibold">
              ONLINE EDUCATION & LEARNING
            </span>
            <p className="font-inter leading-none text-[12px] lg:text-lg text-[#1e4620]">
              We cultivate within our students an ideal learning culture and a
              wholesome educational environment that nurtures ongoing learning
              and swift advancement.
            </p>

            <div className="flex gap-x-5 mt-6 justify-center lg:justify-start">
              <div className="bg-[#4caf50] w-10 h-10 flex items-center justify-center rounded-full text-white hover:-translate-y-2 hover:scale-105 transition-all duration-300 ease-out">
                <FaFacebookF size={25} className="cursor-pointer" />
              </div>
              <div className="bg-[#4caf50] w-10 h-10 flex items-center justify-center rounded-full text-white hover:-translate-y-2 hover:scale-105 transition-all duration-300 ease-out">
                <FaInstagram size={25} className="cursor-pointer" />
              </div>
              <div className="bg-[#4caf50] w-10 h-10 flex items-center justify-center rounded-full text-white hover:-translate-y-2 hover:scale-105 transition-all duration-300 ease-out">
                <FaTwitter size={25} className="cursor-pointer" />
              </div>
            </div>
          </div>
          <div className="lg:pl-20 text-center lg:text-left">
            <h3 className="font-inter font-bold text-[#1e4620]">Explore</h3>
            <ul className="font-inter">
              <li>About Us</li>
              <li>Courses</li>
              <li>Blog</li>
              <li>Contact us</li>
              <li>Terms & Privacy</li>
            </ul>
          </div>
          {/* <div className="box link">
            <h3>Quick Links</h3>
            <ul>
              <li>Contact Us</li>
              <li>Terms & Conditions</li>
              <li>Privacy</li>
              <li>Feedbacks</li>
            </ul>
          </div> */}
          {/* <div className="box">
            <h3>Recent Post</h3> */}
          {/* {blog.slice(0, 3).map((val) => (
              <div className="items flexSB">
                <div className="img">
                  <img src={val.cover} alt="" />
                </div>
                <div className="text">
                  <span>
                    <i className="fa fa-calendar-alt"></i>
                    <label htmlFor="">{val.date}</label>
                  </span>
                  <span>
                    <i className="fa fa-user"></i>
                    <label htmlFor="">{val.type}</label>
                  </span>
                  <h4>{val.title.slice(0, 40)}...</h4>
                </div>
              </div>
            ))} */}
          {/* </div> */}
          <div className="lg:col-span-2 mt-14">
            <h3 className="font-inter font-bold text-[#1e4620] text-center mb-10 lg:mr-44 ">
              Have a Questions?
            </h3>
            <div className="flex flex-col lg:flex-row items-center gap-x-7 ">
              <ul className="text-center lg:text-left">
                <h3 className="font-inter text-[#1e4620]">Nigeria</h3>
                <li className="flex lg:gap-x-3 font-inter">
                  <FaAddressCard size={30} className="text-[#1e4620] " />
                  79 Stadium Road, Opp. FIRS Office, Rumuomasi, Port Harcourt,
                  Rivers State, Nigeria.
                </li>
                <li className="flex justify-center lg:justify-start lg:gap-x-3">
                  <AiFillPhone size={25} className="text-[#1e4620]" />
                  <span className="font-inter">
                    +234 (0) 813 718 9820, <br></br> +234 (0) 703 435 6313
                  </span>
                </li>
                <li className="flex justify-center lg:justify-start gap-x-3 font-inter">
                  <AiOutlineMail size={25} className="text-[#1e4620]" />
                  info@emblictech.com
                </li>
              </ul>
              <ul className=" text-center lg:text-left">
                <h3 className="font-inter text-[#1e4620]">Ghana</h3>
                <li className="flex lg:gap-x-3 font-inter">
                  <FaAddressCard size={30} className="text-[#1e4620]" />
                  Trinity Road Mempeasem, by Trinity Theological College
                  Mempeasem, East Legon, Accra, Ghana.
                </li>
                <li className="flex justify-center lg:justify-start gap-x-3">
                  <AiFillPhone size={25} className="text-[#1e4620]" />
                  <span className="font-inter">
                    +233 (0) 508 865 412, <br></br> +233 (0) 532 581 069
                  </span>
                </li>
                <li className="flex justify-center lg:justify-start gap-x-3 font-inter">
                  <AiOutlineMail size={25} className="text-[#1e4620]" />
                  info@emblictech.com
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <div className="legal">
        <p>
          ©Copyright {year} Emblic Technologies. All rights reserved | Powered
          by: Emblic Technologies
        </p>
      </div>
    </>
  );
};

export default Footer;
