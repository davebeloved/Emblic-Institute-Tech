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
  const { token } = useStateContext();

  window.addEventListener("scroll", () => {
    const header = document.querySelector(".myNav");
    header.classList.toggle("sticky", window.scrollY > 0);
  });
  const [click, setClick] = useState(false);
  return (
    <nav className="py-2 px-6 lg:px-10 fixed top-0 left-0 w-full  z-[1000] bg-[#fff]  myNav">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-x-3">
          {/* Logo */}
          <img className="w-60 lg:80" src={logo} alt="Logo" />
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
                  <Link className="text-white lg:text-black links font-inter" to={path}>
                    {label}
                  </Link>
                </li>
              );
            })}
            <div>
              {token ? (
                <h2 className="uppercase ml-5">
                  Welcome {token.user.fullname}
                </h2>
              ) : (
                <button
                  onClick={() => navigate("/signup")}
                  className=" bg-[#0294da] hover:shadow-lg hover:shadow-[#1e4620]/50  px-7 py-2 btn-primary text-white lg:ml-4 transition-all duration-500 mt-3 mb-5 lg:mt-0 lg:mb-0  font-semibold border-none"
                >
                  Sign Up
                </button>
              )}
            </div>
          </ul>
        </div>
      </div>
      <button className="toggle text-black  lg:mt-12 mr-3" onClick={() => setClick(!click)}>
        {click ? <FaTimes className="text-black"/> : <AiOutlineBars />}
      </button>
    </nav>
  );
};

export default NavBar;
