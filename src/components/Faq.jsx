import React, { useState } from "react";
import FaqImg from "../../public/images/faq.png";
import { faqs } from "../data";

const Faq = () => {
  const [open, setOpen] = useState(null);

  const show = (i) => {
    open === i ? setOpen(null) : setOpen(i);
  };
  return (
    <div className="bg-white px-6 lg:px-10 py-16">
      <h2 className="text-center font-semibold font-clash text-2xl md:text-3xl text-[#1e4620] font-monts">
        FREQUENTLY ASK QUESTION
      </h2>
      <h3 className="text-center mb-24">
        we got answers to the questions that you might <br></br> want to ask
        abouut Emmblic Institution of Technology
      </h3>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div>
          {faqs.map((ques, i) => {
            return (
              <div className="bg-[#4caf50] p-3 rounded-md shadow-md">
                <div className="bg-white p-5 rounded-md">
                  <h2 className="  flex items-center justify-between font-inter font-semibold text-lg text-[#1e4620]">
                    {ques.question}
                    <button
                      onClick={() => show(i)}
                      className="font-clash font-bold text-xl bg-[#4caf50] w-8 h-8 rounded-full flex items-center justify-center text-white"
                    >
                      {open === i ? "-" : "+"}
                    </button>
                  </h2>
                  <p className={`${open === i ? "inline-block" : "hidden"}`}>
                    {ques.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div>
          <img src={FaqImg} alt="frequently ask question image" />
        </div>
      </div>
    </div>
  );
};

export default Faq;
