import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import heroImg from "../assets/hero.png";
import "../styles/hero.css";
import Nav from "./Nav";
const Hero = () => {
  return (
    <>
      <section className="hero  lg:pr-[50px] bg-[#4caf50]">
        <div className="row px-5 lg:px-10 text-center lg:text-left">
          <h1 className="text-2xl mt-10 lg:mt-0 md:text-4xl lg:text-5xl font-clash   font-bold ">
            BEST ONLINE EDUCATION EXPERTISE
          </h1>
          <p className="font-monts text-[12px] leading-4 lg:text-base">
            We cultivate within our students an ideal learning culture and a
            wholesome educational environment that nurtures ongoing learning and
            swift advancement.
          </p>
          <div className="flex items-center justify-center lg:justify-start gap-x-5 mt-5">
            <button className="btn-primary hover:bg-[#0f2310] transition-all duration-300 ease-in">
              GET STARTED NOW <AiOutlineArrowRight />
            </button>
            <button className="btn-secondary">
              VIEW COURSE <AiOutlineArrowRight />
            </button>
          </div>
        </div>
      </section>
      <div className="margin"></div>
    </>
  );
};

export default Hero;
