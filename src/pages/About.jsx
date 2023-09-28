import React from "react";
import NavBar from "../components/NavBar";
import AboutImg from "../../public/images/abt.jpg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      <NavBar />
      <div className="overflow-hidden">
        <div className="py-32">
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
            className="text-center font-semibold font-clash text-2xl md:text-3xl text-[#1e4620] mb-10 about relative"
          >
            ABOUT US
          </motion.h1>

          <div className="px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 py-10">
            <motion.img
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.4,
                x: { type: "spring", stiffness: 60 },
                opacity: { duration: 1 },
                ease: "easeIn",
                duration: 1,
              }}
              src={AboutImg}
              alt="ahout image"
            />
            <div>
              <motion.h2
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 0.4,
                  x: { type: "spring", stiffness: 60 },
                  opacity: { duration: 1 },
                  ease: "easeIn",
                  duration: 1,
                }}
                className="font-monts font-bold text-[#1e4620] text-[14px] lg:text-xl mb-3"
              >
                WHY CHOOSE EMBLIC INSTITUTION OF TECHNOLOGY
              </motion.h2>
              <motion.p
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 0.6,
                  x: { type: "spring", stiffness: 60 },
                  opacity: { duration: 1 },
                  ease: "easeIn",
                  duration: 1,
                }}
                className="font-inter leading-none lg:leading-7 text-[12px] lg:text-lg"
              >
                At Emblic Institute of Technology (EIT), we cultivate within our
                students an ideal learning culture and a wholesome educational
                environment that nurtures ongoing learning and swift
                advancement. EIT boasts a track record of generating skilled IT
                professionals who are currently achieving significant
                accomplishments in their careers. Our instructional approach at
                Emblic Institute of Technology (EIT) is characterized by its
                adaptability and remarkable convenience, catering to the needs
                of all our students. Our team of proficient facilitators is
                dedicated to imparting the correct principles and comprehensive
                knowledge to all our students, aligning with societal
                requirements and surpassing their anticipations.
              </motion.p>
              <motion.h3
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 0.8,
                  x: { type: "spring", stiffness: 60 },
                  opacity: { duration: 1 },
                  ease: "easeIn",
                  duration: 1,
                }}
                className="font-monts font-bold text-[#1e4620] text-[14px] lg:text-xl mt-3"
              >
                Our Vision
              </motion.h3>
              <motion.p
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 1,
                  x: { type: "spring", stiffness: 60 },
                  opacity: { duration: 1 },
                  ease: "easeIn",
                  duration: 1,
                }}
                className="font-inter leading-none lg:leading-7 text-[12px] lg:text-lg"
              >
                Our vision is to become the Foremost I.T. refinery in Africa
                where individuals are refined and equipped with technological
                skills. This has become our watchword as we strive to maintain
                our stand as the best I.T. refinery.
              </motion.p>
              <motion.h3
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 1.2,
                  x: { type: "spring", stiffness: 60 },
                  opacity: { duration: 1 },
                  ease: "easeIn",
                  duration: 1,
                }}
                className="font-monts font-bold text-[#1e4620] text-[14px] lg:text-xl mt-3"
              >
                Objective
              </motion.h3>
              <motion.p
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 1.4,
                  x: { type: "spring", stiffness: 60 },
                  opacity: { duration: 1 },
                  ease: "easeIn",
                  duration: 1,
                }}
                className="font-inter leading-none lg:leading-7 text-[12px] lg:text-lg"
              >
                The program's primary objective is to unite individuals who
                share a common interest in web development and information
                security.
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
