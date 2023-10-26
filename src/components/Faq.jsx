import React, { useState } from "react";
import FaqImg from "../../public/images/faq.png";
import { faqs } from "../data";
import { motion } from "framer-motion";

const Faq = () => {
  const [open, setOpen] = useState(null);

  const show = (i) => {
    open === i ? setOpen(null) : setOpen(i);
  };
  return (
    <div className="bg-white px-6 lg:px-10 py-16 overflow-hidden">
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
        className="text-center font-semibold font-clash text-2xl md:text-3xl text-[#1e4620] font-monts"
      >
        FREQUENTLY ASK QUESTION
      </motion.h2>
      <motion.h3
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.4,
          x: { type: "spring", stiffness: 60 },
          opacity: { duration: 1 },
          ease: "easeIn",
          duration: 1,
        }}
        className="text-center mb-24"
      >
        we got answers to the questions that you might <br></br> want to ask
        abouut Emmblic Institution of Technology
      </motion.h3>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div>
          {faqs.map((ques, i) => {
            return (
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 0.6,
                  x: { type: "spring", stiffness: 60 },
                  opacity: { duration: 1 },
                  ease: "easeIn",
                  duration: 1,
                }}
                className="bg-[#0294DA] p-3 rounded-md shadow-md"
              >
                <div className="bg-white p-5 rounded-md">
                  <h2 className="  flex items-center justify-between font-inter font-semibold text-lg text-[#1e4620]">
                    {ques.question}
                    <button
                      onClick={() => show(i)}
                      className="font-clash font-bold text-xl bg-[#0294DA] w-8 h-7 p-2 lg:h-8 rounded-full flex items-center justify-center text-white"
                    >
                      {open === i ? "-" : "+"}
                    </button>
                  </h2>
                  <p className={`${open === i ? "inline-block" : "hidden"}`}>
                    {ques.answer}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
        <div>
          <motion.img
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.6,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
            src={FaqImg}
            alt="frequently ask question image"
            className="w-full lg:h-[60%] object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
};

export default Faq;
