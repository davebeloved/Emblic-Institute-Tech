import { motion } from "framer-motion";
import React from "react";
import NavBar from "../components/NavBar";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import { useStateContext } from "../context/contextProvider";

const Contact = () => {
  const { setIsOpen } = useStateContext();
  return (
    <>
      <NavBar />
      <div onClick={() => setIsOpen(false)} className="overflow-hidden py-32">
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
          CONTACT US
        </motion.h1>
        <ContactUs />
      </div>
      <Footer />
    </>
  );
};

export default Contact;
