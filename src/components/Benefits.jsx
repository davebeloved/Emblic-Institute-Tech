import React from "react";
import Image from "../../public/images/abouts.png";
import { trainingBenefits } from "../data";
import { motion } from "framer-motion";

const Benefits = () => {
  return (
    <div className=" py-14 pt-72 lg:pt-44 px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-4 ">
      <div className=" col-span-2">
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
          className="w-full h-[85%] object-cover object-center"
        />
      </div>
      <div className="col-span-2 w-full overflow-hidden">
        <motion.h3
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.6,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
          className="text-[#1e4620] font-monts font-bold text-[12px] lg:text-xl leading-none text-center lg:text-left"
        >
          Learn Anything Anywhere
        </motion.h3>
        <motion.h2
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.8,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
          className="font-clash font-bold text-sm md:text-xl lg:text-2xl mb-6 leading-none text-center lg:text-left"
        >
          Benefits About Emblic Institute of Technology(EIT) Training Expertise
        </motion.h2>
        <div className="space-y-3  ">
          {trainingBenefits.map((item, i) => {
            const { title, label, src, delays } = item;
            return (
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  delay: delays,
                  x: { type: "spring", stiffness: 60 },
                  opacity: { duration: 1 },
                  ease: "easeIn",
                  duration: 1,
                }}
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
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Benefits;
