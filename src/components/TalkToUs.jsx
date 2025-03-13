import React from "react";
import phone from "../assets/icons/phone.svg";
import message from "../assets/icons/message.svg";
import mail from "../assets/icons/mail.svg";
import AnimatedText from "./ui/AnimatedText";
import { motion } from "framer-motion";

const TalkToUs = () => {
  return (
    <div className="pb-20">
      <AnimatedText
        text="Talk To Us?"
        className="text-center mb-4 font-normal font-albert text-[30px] sm:text-[40px]"
      />
      {/* <h1></h1> */}
      <div className="flex justify-center gap-10">
        <motion.div
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.2 },
          }}
          className="bg-[#2F4858] p-4 rounded-full"
        >
          <img className="h-[25px] cursor-pointer" src={phone} alt="" />
        </motion.div>
        <motion.div
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.2 },
          }}
          className="bg-[#2F4858] p-4 rounded-full"
        >
          <img className="h-[25px] cursor-pointer" src={message} alt="" />
        </motion.div>
        <motion.div
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.2 },
          }}
          className="bg-[#2F4858] p-4 rounded-full"
        >
          <img className="h-[25px] cursor-pointer" src={mail} alt="" />
        </motion.div>
      </div>
    </div>
  );
};

export default TalkToUs;
