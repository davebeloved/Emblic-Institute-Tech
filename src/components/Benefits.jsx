import React from "react";
import Image from "../../public/images/abouts.png";
import { trainingBenefits } from "../data";

const Benefits = () => {
  return (
    <div className=" py-14 lg:py-0 px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-4 ">
      <div className=" col-span-2">
        <img
          src={Image}
          alt=""
          className="w-full h-[85%] object-cover object-center"
        />
      </div>
      <div className="col-span-2 w-full">
        <h3 className="text-[#1e4620] font-monts font-bold text-[12px] lg:text-xl leading-none text-center lg:text-left">
          Learn Anything Anywhere
        </h3>
        <h2 className="font-clash font-bold text-sm md:text-xl lg:text-2xl mb-6 leading-none text-center lg:text-left">
          Benefits About Emblic Institute of Technology(EIT) Training Expertise
        </h2>
        <div className="space-y-3  ">
          {trainingBenefits.map((item, i) => {
            const { title, label, src } = item;
            return (
              <div
                key={i}
                className="bg-white flex gap-x-4  p-5 w-full rounded-md shadow-md lg:h-40 transition-all duration-300"
              >
                <div className="w-[300px] h-20">
                  <img
                    src={src}
                    alt=""
                    className="w-full h-1/2  md:h-full object-cover object-center"
                  />
                </div>
                <div>
                  <h2 className="font-monts font-bold text-[#1e4620]">
                    {title}
                  </h2>
                  <p className="font-monts text-[14px] leading-5">{label}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Benefits;
