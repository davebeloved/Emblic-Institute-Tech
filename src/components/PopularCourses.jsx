import React from "react";
import { courses } from "../data";
import { BsArrowRight } from "react-icons/bs";
import Rating from "./Rating";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const PopularCourses = () => {
  const navigate = useNavigate();
  return (
    <div className="px-6 lg:px-10 overflow-hidden">
      <motion.h1
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
        EXPLORE OUR POPULAR COURSES
      </motion.h1>
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-4 ">
        {courses.slice(0, 4).map((course, i) => {
          const {
            name,
            src,
            online_price,
            live_price,
            numReview,
            rating,
            delays,
          } = course;
          return (
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                delay: delays,
                y: { type: "spring", stiffness: 60 },
                opacity: { duration: 1 },
                ease: "easeIn",
                duration: 1,
              }}
              key={i}
              className="text-center bg-white rounded-md p-5 shadow-md flex flex-col gap-y-2"
            >
              <div className="w-20 h-20 rounded-full overflow-hidden mx-auto">
                <img
                  src={src}
                  alt=""
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <h2 className="font-monts font-bold text-[14px] md:text-lg ">
                {name}
              </h2>
              <Rating value={rating} text={`${numReview} numreview`} />
              <div>
                <h3 className="font-monts font-bold">
                  {`Online Training: $${online_price}`}
                </h3>
                <h3 className="font-monts font-bold">
                  {`Live Training: $${live_price}`}
                </h3>
              </div>
              <button className="btn-primary text-white justify-center font-bold mt-5">
                Enroll Now
              </button>
            </motion.div>
          );
        })}
      </div>

      <motion.button
        onClick={() => navigate("all-courses")}
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.3,
          y: { type: "spring", stiffness: 60 },
          opacity: { duration: 1 },
          ease: "easeIn",
          duration: 1,
        }}
        className="btn-secondary  mx-auto bg-transparent font-clash  border-2 border-[#1e4620] flex items-center gap-x-3 my-14"
      >
        SEE ALL COURSES{" "}
        <span className="bg-[#1e4620] w-7  h-7 rounded-full flex items-center justify-center">
          {" "}
          <BsArrowRight className="text-white" />
        </span>
      </motion.button>
    </div>
  );
};

export default PopularCourses;
