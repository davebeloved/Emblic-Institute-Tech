import React from "react";
import "./App.css";

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import AllCourses from "./pages/AllCourses";
import SingleCourse from "./pages/SingleCourse";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/all-courses" element={<AllCourses />} />
        <Route path="course/:id" element={<SingleCourse />} />
      </Routes>
    </div>
  );
};

export default App;
