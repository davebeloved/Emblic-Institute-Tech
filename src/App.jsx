import React, { useEffect } from "react";
import "./App.css";

import {
  Routes,
  Route,
  useNavigate,
  HashRouter,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import AllCourses from "./pages/AllCourses";
import SingleCourse from "./pages/SingleCourse";
import { useStateContext } from "./context/contextProvider";

const App = () => {
  const { token } = useStateContext();
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/signup"
          element={token ? <Navigate to="/" /> : <SignUp />}
        />
        <Route
          path="/signin"
          element={token ? <Navigate to="/" /> : <SignIn />}
        />
        <Route path="/all-courses" element={<AllCourses />} />
        <Route path="course/:id" element={<SingleCourse />} />
      </Routes>
    </div>
  );
};

export default App;
