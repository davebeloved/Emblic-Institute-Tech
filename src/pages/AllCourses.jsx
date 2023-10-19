import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import Courses from "../components/Courses";

const AllCourses = () => {
  return (
    <>
      <NavBar />
      <div className="overflow-hidden py-32">
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
          className="text-center font-semibold font-clash text-2xl md:text-3xl text-[#0294da] mb-10 about relative"
        >
          ALL COURSES
        </motion.h1>
        <Courses />
      </div>
      <Footer />
    </>
  );
};

export default AllCourses;
