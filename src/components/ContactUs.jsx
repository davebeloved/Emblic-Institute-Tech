import React, { useState } from "react";
import ContImg from "../../public/images/contact.png";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaAddressCard,
} from "react-icons/fa";
import { motion } from "framer-motion";

const ContactUs = () => {
  const [email, setEmail] = useState("");
  const [first_name, setFirst_name] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmitSignUp = async (e) => {
    e.preventDefault();
  };
  return (
    <div className="overflow-hidden">
      <div className="px-1 lg:px-24 pt-16 grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-10">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.4,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
          className="relative  "
        >
          <div className="space-y-6 lg:ml-48  text-center lg:text-left">
            <h1 className="text-[#0294da] font-clash text-[20px] lg:text-[32px] unique font-bold">
              Get in touch
            </h1>
            <div>
              <h3 className="font-mono text-[12px] lg:text-xl font-bold">
                Contact
              </h3>
              <h3 className="font-mono text-[12px] lg:text-xl font-bold">
                Information
              </h3>
            </div>
            <div>
              <h2 className="font-mono text-[12px] lg:text-xl font-semibold">
                Nigeria
              </h2>
              <h3 className="font-mono text-[12px] lg:text-lg">
                79, Stadium Road Opp
              </h3>
              <h3 className="font-mono text-[12px] lg:text-lg">
                FIRS OFFICE, RUMUOMASI
              </h3>
              <h3 className="font-mono text-[12px] lg:text-lg">
                PORT-HARCOURT, RIVERS STATE
              </h3>
            </div>
            <div className="flex flex-col">
              <h3 className=" font-mono text-[12px] lg:text-lg font-semibold">
                Call Us:
              </h3>
              <span>+234 (0) 813 718 9820,</span>
              <span className="ml">+234 (0) 703 435 6313</span>
            </div>
            <div className="flex flex-col">
              <h3 className=" font-mono text-[12px] lg:text-lg font-semibold">
                Email Us:
              </h3>
              <span>eit@emblictech.com</span>
            </div>
            <div>
              <h2 className="font-mono text-[12px] lg:text-xl font-semibold">
                Ghana
              </h2>
              <h3 className="font-mono text-[12px] lg:text-lg">
                Trinity Road Mempeasem, by Trinity
              </h3>
              <h3 className="font-mono text-[12px] lg:text-lg">
                Theological College Mempeasem, East
              </h3>
              <h3 className="font-mono text-[12px] lg:text-lg">
                Legon, Accra, Ghana.
              </h3>
            </div>
            <div className="flex flex-col">
              <h3 className=" font-mono text-[12px] lg:text-lg font-semibold">
                Call Us:
              </h3>
              <span>233 (0) 508 865 412,</span>
              <span className="ml">+233 (0) 532 581 069</span>
            </div>
            <div className="flex flex-col">
              <h3 className=" font-mono text-[12px] lg:text-lg font-semibold">
                Email Us:
              </h3>
              <span>eit@emblictech.com</span>
            </div>
            <div>
              <h3 className="font-mono text-[12px] lg:text-lg">
                We are open from Monday-Friday <br /> 08:00am-05:00pm
              </h3>
            </div>
            <div>
              <h3 className="font-mono pb-3 text-[12px] unique lg:text-lg">
                Share on
              </h3>
              <div className="flex gap-x-5  justify-center lg:justify-start">
                <div className="bg-[#0294da] w-10 h-10 flex items-center justify-center rounded-full text-white hover:-translate-y-2 hover:scale-105 transition-all duration-300 ease-out">
                  <FaFacebookF size={25} className="cursor-pointer" />
                </div>
                <div className="bg-[#0294da] w-10 h-10 flex items-center justify-center rounded-full text-white hover:-translate-y-2 hover:scale-105 transition-all duration-300 ease-out">
                  <FaInstagram size={25} className="cursor-pointer" />
                </div>
                <div className="bg-[#0294da] w-10 h-10 flex items-center justify-center rounded-full text-white hover:-translate-y-2 hover:scale-105 transition-all duration-300 ease-out">
                  <FaTwitter size={25} className="cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.6,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
          className="shd p-10 w-full h-[900px] relative bg-[#0294da] rounded-lg shadow-md"
        >
          <h2 className="text-white font-clash unique text-24px] lg:text-[32px]">
            Questions or need assistance?
          </h2>
          <h2 className="text-white font-clash unique text-24px] lg:text-[32px] mb-5">
            Let us know about it
          </h2>

          <form className="">
            <div className="flex flex-col items-center gap-7 w-full flex-wrap">
              <input
                type="text"
                onChange={(e) => setFirst_name(e.target.value)}
                value={first_name}
                placeholder="First Name"
                className="bg-gray-200 w-full  rounded-md p-3 mb-3 outline-none   "
              />
              <input
                type="text"
                placeholder="Mail"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="bg-gray-200 w-full  rounded-md p-3 mb-3 outline-none  "
              />
              <input
                type="text"
                placeholder="Phone number"
                onChange={(e) => setPhone_number(e.target.value)}
                value={phone_number}
                className="bg-gray-200 w-full  rounded-md p-3 mb-3 outline-none  "
              />
              <textarea
                name="message"
                id=""
                cols="30"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                rows="10"
                placeholder="Message"
                className="bg-gray-200 w-full  rounded-md p-3 mb-3 outline-none  "
              ></textarea>
              <button
                // onClick={handleSubmitSignUp}
                className="btn block mx-auto font-semibold  lg:block outline-none btn-secondary  text-[#1e4620] font-inter w-full"
              >
                Submit
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactUs;
