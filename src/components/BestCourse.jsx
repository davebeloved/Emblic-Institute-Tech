import React from "react";
import Image from "../../public/images/on.png";
import { AiOutlineArrowRight } from "react-icons/ai";

const BestCourse = () => {
  return (
    <div className="px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-16 mt-24 mb-28 lg:mb-12 pt-6  bg-[#4caf50]">
      <div className="">
        <img src={Image} alt="" className="h-full w-full" />
      </div>
      <div className="space-y-3 text-center lg:text-left md:space-y-8 lg:mt-12 pb-10 lg:pb-7">
        <h2 className="font-clash font-bold text-white text-2xl md:text-3xl lg:text-4xl">
          We Offer the Best Quality Course
        </h2>
        <p className="font-monts text-white text-[14px] md:text-xl">
          Emblic Institute of Technology takes pride in introducing its
          cutting-edge online/live training initiative. This program offers
          enrolled students’ exclusive access to hands-on materials,
          instructional videos, and real-time training sessions conducted by our
          proficient tech experts. The program's primary objective is to unite
          individuals who share a common interest in web development and
          information security.
        </p>
        <button className="btn-primary text-white font-bold  mx-auto flex items-center lg:mx-0 gap-x-3 px-10">
          Learn More
          <AiOutlineArrowRight className="text-white" />
        </button>
      </div>
    </div>
  );
};

export default BestCourse;
