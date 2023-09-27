import React from "react";
import Hero from "../components/Hero";
import Benefits from "../components/Benefits";
import BestCourse from "../components/BestCourse";
import PopularCourses from "../components/PopularCourses";
import Testimonial from "../components/Testimonial";
import Faq from "../components/Faq";

const Home = () => {
  return (
    <>
      <Hero />
      <Benefits />
      <BestCourse />
      <PopularCourses />
      <Testimonial />
      <Faq />
    </>
  );
};

export default Home;
