import React, { useState } from "react";
import { Link } from "react-router-dom";
import Head from "./Head";
import { AiOutlineBars } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";
import { links } from "../data";

const Nav = () => {
  const [click, setClick] = useState(false);
  return (
    <>
      <div className="absolute top-0 z-50 left-0 right-0 w-full">
        <Head />
        <header className="">
          <nav className="flexSB">
            <ul
              className={
                click
                  ? "mobile-nav transition-all duration-300 ease-in"
                  : "flexSB "
              }
              onClick={() => setClick(false)}
            >
              {links.map((link, i) => {
                const { label, path } = link;
                return (
                  <li key={i}>
                    <Link to={path}>{label}</Link>
                  </li>
                );
              })}
            </ul>
            <div className="start py-[30px] px-[40px] lg:px-[70px]">
              <div className="button">GET CERTIFICATE</div>
            </div>
            <button
              className="toggle  mt-12 mr-3"
              onClick={() => setClick(!click)}
            >
              {click ? <FaTimes /> : <AiOutlineBars />}
            </button>
          </nav>
        </header>
      </div>
    </>
  );
};

export default Nav;
