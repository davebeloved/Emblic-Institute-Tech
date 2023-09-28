import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { links } from "../data";
import "../styles/nav.css";
import { AiOutlineBars } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";

const NavBar = () => {
  window.addEventListener("scroll", () => {
    const header = document.querySelector(".myNav");
    header.classList.toggle("sticky", window.scrollY > 0);
  });
  const [click, setClick] = useState(false);
  return (
    <nav className="py-2 px-6 lg:px-10 fixed top-0 left-0 w-full  z-[1000] bg-[#1e4620] myNav">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-x-3">
          {/* Logo */}
          <img className="w-20" src={logo} alt="Logo" />
          <div>
            <h2 className="logo text-white font-bold text-[12px] lg:text-lg font-monts">
              EMBLIC-TECH
            </h2>
            <h4 className="logo text-white font-bold text-[10px] lg:text-lg font-monts">
              ONLINE EDUCATION & LEARNING{" "}
            </h4>
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
                <li>
                  <Link className="text-white links font-inter" to={path}>
                    {label}
                  </Link>
                </li>
              );
            })}
            <div>
              <button className=" bg-[#4caf50] hover:shadow-lg hover:shadow-[#1e4620]/50  px-7 py-2 btn-primary text-white lg:ml-4 transition-all duration-500 mt-3 mb-5 lg:mt-0 lg:mb-0  font-semibold border-none">
                Sign Up
              </button>
            </div>
          </ul>
        </div>
      </div>
      <button className="toggle  mt-12 mr-3" onClick={() => setClick(!click)}>
        {click ? <FaTimes /> : <AiOutlineBars />}
      </button>
    </nav>
  );
};

export default NavBar;
