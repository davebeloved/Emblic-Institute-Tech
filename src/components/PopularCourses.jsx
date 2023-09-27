import React from "react";
import { courses } from "../data";
import Rating from "./Rating";

const PopularCourses = () => {
  return (
    <div className="px-6 lg:px-10">
      <h1 className="text-center font-semibold font-clash text-2xl md:text-3xl text-[#1e4620] mb-10">
        EXPLORE OUR POPULAR COURSES
      </h1>
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-4 ">
        {courses.map((course, i) => {
          const { name, src, online_price, live_price, numReview, rating } =
            course;
          return (
            <div className="text-center bg-white rounded-md p-5 shadow-md flex flex-col gap-y-2">
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
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PopularCourses;
