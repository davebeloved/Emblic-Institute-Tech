import React from "react";
import { BiSolidQuoteAltLeft } from "react-icons/bi";

const Carousel = ({ children: item }) => {
  return (
    <div className="relative overflow-hidden ">
      <div className="flex">{item}</div>
    </div>
  );
};

export default Carousel;
