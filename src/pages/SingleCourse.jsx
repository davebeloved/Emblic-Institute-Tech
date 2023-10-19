import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import { courses } from "../data";
import { BsPlay } from "react-icons/bs";
import Vid from "../assets/vid.mp4";
import Rating from "../components/Rating";
import { MdSystemSecurityUpdateWarning } from "react-icons/md";

const SingleCourse = () => {
  const { id } = useParams();

  const singleCourse = courses.find((course) => course.id === Number(id));
  const date = new Date();
  const month = date.getMonth();
  const year = date.getFullYear();
  return (
    <>
      <NavBar />
      <div className="overflow-hidden py-24 ">
        <div className="flex flex-col lg:flex-row gap-y-24  gap-x-12 linear px-6 lg:px-10 py-24">
          <div className=" w-full lg:w-1/2">
            <h1 className="text-white font-clash text-xl lg:text-5xl">
              {singleCourse.name}
            </h1>
            <p className="text-white">{singleCourse.text}</p>
            <div className="flex -ml-5">
              <Rating
                value={singleCourse.rating}
                text={`${singleCourse.numReview} numreview`}
              />
            </div>
            <h4 className="font-inter text-white mt-3 text-sm italic">
              Created by Prof Solomon
            </h4>
            <h4 className="flex items-center gap-x-2 font-inter text-white mt-3 text-sm italic">
              <MdSystemSecurityUpdateWarning /> Last Updated at {month + 1}/
              {year}{" "}
            </h4>
            <button className="btn-secondary mt-6 font-inter font-semibold">
              ENROLL NOW
            </button>
          </div>
          <div className="bg-white lg:ml-32 w-80  pb-6 rounded-md relative h-80">
            <div className="relative w-full ">
              <div className=" ">
                <video src={Vid} className="  w-full"></video>
                <BsPlay
                  size={35}
                  className="bg-[#1e4620] text-white rounded-full w-16 h-16 absolute top-[50px] left-[130px] cursor-pointer"
                />
              </div>
              <h4 className="absolute bottom-0 font-inter text-center w-full text-[#1e4620] font-bold text-sm">
                Preview course
              </h4>
            </div>
            <h1 className="text-center mt-3 font-inter font-bold text-xl text-[#1e4620]">
              Onliine Price ${singleCourse.online_price}
            </h1>
            <h1 className="text-center  font-inter font-bold text-xl text-[#1e4620]">
              Live Price ${singleCourse.live_price}
            </h1>
            <button className="btn-primary text-white block mx-auto mt-3 font-inter font-semibold">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SingleCourse;
