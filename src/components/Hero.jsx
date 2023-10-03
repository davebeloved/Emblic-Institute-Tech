import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import heroImg from "../assets/hero.png";
import "../styles/hero.css";
import Nav from "./Nav";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <>
      <section className="hero  lg:pr-[50px] bg-[#4caf50]">
        <div className="row px-3 w-[70%] lg:px-10 text-center lg:text-left">
          <motion.h1
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.3,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
            className="text-2xl mt-10 lg:mt-0 md:text-4xl lg:text-5xl font-clash    font-bold "
          >
            BEST ONLINE EDUCATION EXPERTISE
          </motion.h1>
          <motion.p
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.6,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
            className="font-inter font-bold text-[#1e4620] lg:text-white text-[12px] leading-4 lg:text-base lg:w-[70%]"
          >
            We cultivate within our students an ideal learning culture and a
            wholesome educational environment that nurtures ongoing learning and
            swift advancement.
          </motion.p>
          <div className="flex items-center justify-center lg:justify-start gap-x-5 mt-5">
            <motion.button
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.3,
                y: { type: "spring", stiffness: 60 },
                opacity: { duration: 1 },
                ease: "easeIn",
                duration: 1,
              }}
              className="btn-primary hover:bg-[#0f2310]  transition-colors duration-300 ease-in"
            >
              GET STARTED NOW <AiOutlineArrowRight />
            </motion.button>
            <motion.button
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.4,
                y: { type: "spring", stiffness: 60 },
                opacity: { duration: 1 },
                ease: "easeIn",
                duration: 1,
              }}
              className="btn-secondary transition-none"
            >
              VIEW COURSE <AiOutlineArrowRight />
            </motion.button>
          </div>
        </div>
      </section>
      <div className="margin"></div>
    </>
  );
};

export default Hero;
