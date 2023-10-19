import React, { useState } from "react";
import Image from "../../public/images/register.png";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { useStateContext } from "../context/contextProvider";
import Loading from "../components/Loading";

const SignIn = () => {
  const {
    email,
    setEmail,
    pwd,
    setPwd,
    handleSubmit,
    error,
    loading,
    succeed,
  } = useStateContext();

  console.log(error);
  return (
    <div className="bg-gray-300 grid grid-cols-1 lg:grid-cols-2 px-6 lg:px-10 py-16">
      <div>
        <img src={Image} alt="" />
      </div>
      <div className="">
        <div className="bg-[#0294DA]  p-5 rounded-lg shadow-md flex flex-col items-center py-6 lg:py-12 lg:mt-24 lg:w-[75%]">
          <h2 className="font-clash text-white text-2xl">Login</h2>
          <form onSubmit={handleSubmit} className=" w-full text-white">
            <p
              // ref={errRef}
              className={error ? "errmsg" : "offscreen"}
              aria-live="assertive"
            >
              {/* {errMsg} */}
              {error}
            </p>
            <p
              // ref={errRef}
              className={succeed ? "succedmsg" : "offscreen"}
              aria-live="assertive"
            >
              {/* {errMsg} */}
              {succeed}
            </p>
            <div className="flex flex-col items-center lg:flex-row gap-x-2"></div>
            <div className="flex flex-col w-full mb-5">
              <label className="mb-1">
                Email <span className="text-red-400">*</span>
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                value={email}
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
                onChange={(e) => setPwd(e.target.value)}
                name="pwd"
                value={pwd}
                type="password"
                placeholder="*******"
                className="w-full  p-2 rounded-md text-black bg-gray-200 outline-none"
              />
            </div>
            <button
              disabled={!email || !pwd || loading ? true : false}
              type="submit"
              className={
                !email || !pwd || loading
                  ? "text-white flex justify-center font-inter btn-primary opacity-50 w-full"
                  : "text-opacity-100 btn-primary font-inter flex justify-center w-full"
              }
            >
              {loading ? <Loading /> : "Sign in"}
            </button>
          </form>
          <p className="font-clash text-white mt-5 text-xs">
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
