import React from "react";
import logo from "/GeeBee.svg";
import phone from "../assets/icons/phone2.svg";
import message from "../assets/icons/message2.svg";
import mail from "../assets/icons/mail2.svg";
import AnimatedText from "./ui/AnimatedText";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="flex flex-col items-center">
      <AnimatedText
        text="Contact"
        className="text-center mb-10 font-normal font-albert text-[30px] sm:text-[40px]"
      />

      <form className="mb-16 flex flex-col gap-5 items-center px-5 w-full sm:w-[80%] lg:w-[60%] xl:w-[40%]">
        <motion.input
          initial={{ width: "50px" }}
          whileInView={{ width: "100%" }}
          transition={{
            duration: 0.5,
            delay: 0.1,
            ease: "easeOut",
          }}
          className="p-2 rounded-lg border outline-none w-full border-gray-900"
          type="text"
          placeholder="Name"
        />
        <motion.input
          initial={{ width: "50px" }}
          whileInView={{ width: "100%" }}
          transition={{
            duration: 0.5,
            delay: 0.1,
            ease: "easeOut",
          }}
          className="p-2 rounded-lg border outline-none w-full border-gray-900"
          type="text"
          placeholder="Email"
        />
        <motion.textarea
        initial={{ width: "50px" }}
          whileInView={{ width: "100%" }}
          transition={{
            duration: 0.5,
            delay: 0.1,
            ease: "easeOut",
          }}
          className="p-2 rounded-lg border outline-none w-full border-black"
          name=""
          id=""
          rows="10"
        ></motion.textarea>
        <button className="py-[6px] px-4 text-white rounded-lg bg-[#2F4858] w-fit">
          Submit
        </button>
      </form>
      <div className="flex flex-col items-center">
        <img className="mb-10" src={logo} alt="" />
        <div className="flex items-center gap-[50px] sm:gap-[120px]">
          <img className="animate-bounce cursor-pointer delay-100" src={phone} alt="" />
          <img className="animate-bounce cursor-pointer" src={message} alt="" />
          <img className="animate-bounce cursor-pointer delay-100" src={mail} alt="" />
        </div>
      </div>
      <p className="py-7 capitalize text-center text-[#7F7B8A]">
        geeBee studios. All rights reserved
      </p>
    </div>
  );
};

export default Contact;
