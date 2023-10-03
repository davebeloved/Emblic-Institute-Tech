import React from "react";
import Image from "../../public/images/register.png";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="bg-gray-300 grid grid-cols-1 lg:grid-cols-2 px-6 lg:px-10 py-16">
      <div>
        <img src={Image} alt="" />
      </div>
      <div className="">
        <div className="bg-[#4caf50]  p-5 rounded-lg shadow-md flex flex-col items-center py-6 lg:py-12">
          <div className="flex items-center gap-x-2">
            <img src={Logo} alt="" className="w-7 md:w-10" />
            <h2 className="text-center font-semibold font-clash text-sm md:text-3xl  leading-none text-white ">
              Emblic Institute of Technology
            </h2>
          </div>
          <h2 className="text-center font-semibold font-clash text-sm md:text-2xl text-[#fff] leading-none">
            Welcom Back to EIT
          </h2>
          <p className="font-clash leading-none text-white text-[12px] md:text-lg">
            Kindly fill in your details to sign in to your account
          </p>
          <form className="mt-10 w-full text-white">
            <div className="flex flex-col items-center lg:flex-row gap-x-2"></div>
            <div className="flex flex-col w-full mb-5">
              <label className="mb-1">
                Email <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                placeholder="john@gmail.com"
                className="w-full  p-2 rounded-md text-black bg-gray-200 outline-none"
              />
            </div>
            <div className="flex flex-col w-full mb-5">
              <label className="mb-1">
                Password <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                placeholder="*******"
                className="w-full  p-2 rounded-md text-black bg-gray-200 outline-none"
              />
            </div>
            <button className="btn-primary w-full flex justify-center mt-10">
              Sign in
            </button>
          </form>
          <p className="font-clash text-white mt-5 text-sm">
            Dont have an Account?
            <span className="italic underline">
              {" "}
              <Link to="/signup">Sign-Up</Link>{" "}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
