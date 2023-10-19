import React from "react";
import Image from "../../public/images/on.png";
import { AiOutlineArrowRight } from "react-icons/ai";
import { motion } from "framer-motion";

const BestCourse = () => {
  return (
    <div className=" overflow-hidden px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-16 mt-24 mb-28 lg:mb-12 pt-6  bg-[#0294DA]">
      <div className="">
        <motion.img
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.6,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
          src={Image}
          alt=""
          className="h-full w-full"
        />
      </div>
      <div className="space-y-3 text-center lg:text-left md:space-y-8 lg:mt-12 pb-10 lg:pb-7">
        <motion.h2
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.6,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
          className="font-clash font-bold text-white text-2xl md:text-3xl lg:text-4xl"
        >
          We Offer the Best Quality Course
        </motion.h2>
        <motion.p
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.8,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
          className="font-monts text-white text-[14px] md:text-xl"
        >
          Emblic Institute of Technology takes pride in introducing its
          cutting-edge online/live training initiative. This program offers
          enrolled students’ exclusive access to hands-on materials,
          instructional videos, and real-time training sessions conducted by our
          proficient tech experts. The program's primary objective is to unite
          individuals who share a common interest in web development and
          information security.
        </motion.p>
        <motion.button
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.9,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
          className="btn-primary text-white font-bold  mx-auto flex items-center lg:mx-0 gap-x-3 px-10"
        >
          Learn More
          <AiOutlineArrowRight className="text-white" />
        </motion.button>
      </div>
    </div>
  );
};

export default BestCourse;
