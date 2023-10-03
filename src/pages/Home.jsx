import React from "react";
import Hero from "../components/Hero";
import Benefits from "../components/Benefits";
import BestCourse from "../components/BestCourse";
import PopularCourses from "../components/PopularCourses";
import Testimonial from "../components/Testimonial";
import Faq from "../components/Faq";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Nav />
      <Hero />
      <Benefits />
      <BestCourse />
      <PopularCourses />
      <Testimonial />
      <Faq />
      <Footer />
    </>
  );
};

export default Home;
