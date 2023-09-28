import React, { useEffect, useState } from "react";
import { testimonies } from "../data";
import Carousel from "./Carousel";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from "react-icons/md";
import { motion } from "framer-motion";
const Testimonial = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === 0 ? testimonies.length - 1 : prev - 1
    );
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === testimonies.length - 1 ? 0 : prev + 1
    );
  };

  //   useEffect(() => {
  //     const lastIndex = testimonies.length - 1;
  //     if (currentTestimonial < 0) {
  //       setCurrentTestimonial(lastIndex);
  //     }
  //     if (currentTestimonial >= lastIndex) {
  //       setCurrentTestimonial(0);
  //     }
  //   }, [currentTestimonial, testimonies]);

  //   useEffect(() => {
  //     let slide = setInterval(() => {
  //       setCurrentTestimonial(currentTestimonial + 1);
  //     }, 3000);
  //     return () => {
  //       clearInterval(slide);
  //     };
  //   }, [currentTestimonial]);

  return (
    <div className="bg-gray-100 py-16 px-6 overflow-hidden">
      <motion.h2
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.2,
          x: { type: "spring", stiffness: 60 },
          opacity: { duration: 1 },
          ease: "easeIn",
          duration: 1,
        }}
        className="text-center font-semibold font-clash text-2xl md:text-3xl text-[#1e4620] mb-10"
      >
        WHAT DOES OUR STUDENTS SAY ABOUT US
      </motion.h2>
      <div className="max-w-sm lg:max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.8,
            y: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
          className="  bg-white p-10 rounded-md shadow-md h-92"
        >
          <BiSolidQuoteAltLeft
            className="text-[#1e4620] mb-3 block mx-auto"
            size={40}
          />
          <div className="mb-4 transition-all duration-500 ease-out">
            <p className="text-gray-600">
              {testimonies[currentTestimonial].desc}
            </p>
          </div>
          <p className="transition-all duration-500 ease-out font-bold">
            {testimonies[currentTestimonial].name}
          </p>
          <div className="mt-4">
            <button
              onClick={prevTestimonial}
              className="bg-[#1e4620] text-white px-4 py-2 rounded-full focus:outline-none focus:ring focus:ring-blue-300 transition-all duration-500 ease-out"
            >
              <MdOutlineNavigateBefore
                size={25}
                className="text-red-700"
                color="white"
              />
            </button>
            <button
              onClick={nextTestimonial}
              className="bg-[#1e4620] text-white px-4 py-2 rounded-full focus:outline-none focus:ring focus:ring-blue-300 ml-4"
            >
              <MdOutlineNavigateNext
                size={25}
                className="text-white"
                color="white"
              />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonial;
