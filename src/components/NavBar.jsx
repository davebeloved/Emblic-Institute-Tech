import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { links } from "../data";
import "../styles/nav.css";
import { AiOutlineBars } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";
import { useStateContext } from "../context/contextProvider";

const NavBar = () => {
  const navigate = useNavigate();
  const { token, setToken, isOpen, setIsOpen } = useStateContext();

  window.addEventListener("scroll", () => {
    const header = document.querySelector(".myNav");
    header.classList.toggle("sticky", window.scrollY > 0);
  });
  const [click, setClick] = useState(false);

  // logout logic
  const logout = () => {
    localStorage.removeItem("user");
    setToken("");
    setIsOpen(false);
  };
  return (
    <nav className="py-2 px-6 lg:px-10 fixed top-0 left-0 w-full  z-[1000] bg-[#fff]  myNav">
      <div
        className={
          isOpen
            ? "  rounded-b-md absolute right-10 top-14 bg-white flex py-4 px-3  w-72 shadow-lg flex-col"
            : "hidden"
        }
      >
        <div className="mr-10 cursor-pointer mb-4">
          {token?.user?.fullname ? (
            <div className="flex items-center gap-x-2">
              <div className="flex w-10 h-10 rounded-full bg-[#0294da]  items-center justify-center text-white">
                <h2 className="uppercase text-white">
                  {token.user.fullname.charAt(0)}
                  {token.user.fullname.charAt(1)}
                </h2>
              </div>
              <h2 className="text-black"> {token.user.fullname}</h2>
            </div>
          ) : !token?.user?.fullname && token ? (
            <h2 className="hidden lg:block">Welcome Back</h2>
          ) : null}
        </div>
        <Link className="hover:bg-[#0294da] py-2 px-2 rounded-sm hover:text-white ">
          Dashboard
        </Link>
        <Link className="hover:bg-[#0294da]  py-2 px-2 rounded-sm hover:text-white ">
          My Cart
        </Link>
        <Link className="hover:bg-[#0294da] py-2 px-2 rounded-sm hover:text-white ">
          Account Settings
        </Link>
        <Link
          onClick={logout}
          className="hover:bg-[#0294da] py-2 px-2 rounded-sm hover:text-white "
        >
          Logout
        </Link>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-x-3">
          {/* Logo */}
          <img className="w-60 lg:80 mt-2" src={logo} alt="Logo" />
          <div>
            {/* <h2 className="logo text-white font-bold text-[12px] lg:text-lg font-monts">
              EMBLIC-TECH
            </h2>
            <h4 className="logo text-white font-bold text-[10px] lg:text-lg font-monts">
              ONLINE EDUCATION & LEARNING{" "}
            </h4> */}
          </div>
        </div>
        {/* <div className="flex items-center gap-x-10"> */}
        <div className="header">
          {/* <ul className="flex space-x-6 link"> */}
          <ul
            className={
              click
                ? "mobile-navB transition-all duration-300 ease-in"
                : "hidden lg:flex items-center space-x-12 "
            }
          >
            {links.map((link, i) => {
              const { label, path } = link;
              return (
                <li key={i}>
                  <Link
                    className="text-white lg:text-black links font-inter"
                    to={path}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
            <div>
              {token?.user?.fullname ? (
                <div
                  onClick={() => setIsOpen(!isOpen)}
                  className="hidden cursor-pointer lg:flex w-10 h-10 rounded-full bg-[#0294da]  items-center justify-center text-white"
                >
                  <h2 className="uppercase text-white">
                    {token.user.fullname.charAt(0)}
                    {token.user.fullname.charAt(1)}
                  </h2>
                </div>
              ) : !token?.user?.fullname && token ? (
                <h2 className="hidden lg:block">Welcome Back</h2>
              ) : (
                <div className="flex items-center">
                  <button
                    onClick={() => navigate("/signin")}
                    className="text-white text-sm mr-5 lg:mr-0 lg:text-[#0294da] hover:shadow-lg   px-7 lg:py-3 border lg:border-[#0294da] border-white lg:ml-4 transition-all duration-500 mt-3 mb-5 lg:mt-0 lg:mb-0  font-semibold hover:bg-[#0294da] hover:text-white"
                  >
                    Sign in
                  </button>
                  <button
                    onClick={() => navigate("/signup")}
                    className=" bg-white text-[#0294da] lg:bg-[#0a1e27] hover:shadow-lg hover:shadow-[#1e4620]/50  px-7 py-3 btn-primary lg:text-white lg:ml-4 transition-all duration-500 mt-3 mb-5 lg:mt-0 lg:mb-0  font-semibold border-none"
                  >
                    Sign Up
                  </button>
                </div>
              )}
            </div>
          </ul>
        </div>
      </div>
      <div className="flex items-center  absolute top-3 right-3">
        <div className="mr-10 cursor-pointer">
          {token?.user?.fullname ? (
            <div className="lg:hidden flex w-10 h-10 rounded-full bg-[#0294da]  items-center justify-center text-white">
              <h2 className="uppercase text-white">
                {token.user.fullname.charAt(0)}
                {token.user.fullname.charAt(1)}
              </h2>
            </div>
          ) : !token?.user?.fullname && token ? (
            <h2 className="hidden lg:block">Welcome Back</h2>
          ) : null}
        </div>
        <button
          className="toggle text-[#0294da]  lg:mt-12  mr-"
          onClick={() => setClick(!click)}
        >
          {click ? (
            <FaTimes className="text-[#0294da]" />
          ) : (
            <AiOutlineBars className="text-[#0294da]" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
