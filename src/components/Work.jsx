import React from "react";
import { motion } from "framer-motion";
import AnimatedText from "./ui/AnimatedText";

const Work = () => {
  return (
    <div className="flex flex-col items-center">
      <AnimatedText
        text="Work"
        className="text-center mb-10 font-normal font-albert text-[30px] sm:text-[40px]"
      />

      <p className="mb-10 capitalize text-center text-[#7F7B8A]">
        Discover the power of creativity in action. Explore our portfolio to see
        how we’ve helped brands turn their visions into <br /> unforgettable
        experiences
      </p>
      <div className="w-[80%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-5">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, zIndex: 1 }}
          whileInView={{ opacity: 1, scale: 1, zIndex: 1 }}
          whileHover={{
            scale: 1.15,
            transition: { duration: 0.3, ease: "easeOut" },
            zIndex: 100,
          }}
          viewport={{ once: false }}
          transition={{
            duration: 0.5,
            delay: 0.1,
            ease: "easeOut",
          }}
          className="h-[230px] rounded-lg bg-[#7F7B8A]"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9, zIndex: 1 }}
          whileInView={{ opacity: 1, scale: 1, zIndex: 1 }}
          whileHover={{
            scale: 1.15,
            transition: { duration: 0.3, ease: "easeOut" },
            zIndex: 100,
          }}
          viewport={{ once: false }}
          transition={{
            duration: 0.5,
            delay: 0.1,
            ease: "easeOut",
          }}
          className="h-[230px] rounded-lg bg-[#7F7B8A]"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9, zIndex: 1 }}
          whileInView={{ opacity: 1, scale: 1, zIndex: 1 }}
          whileHover={{
            scale: 1.15,
            transition: { duration: 0.3, ease: "easeOut" },
            zIndex: 100,
          }}
          viewport={{ once: false }}
          transition={{
            duration: 0.5,
            delay: 0.1,
            ease: "easeOut",
          }}
          className="h-[230px] rounded-lg bg-[#7F7B8A]"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9, zIndex: 1 }}
          whileInView={{ opacity: 1, scale: 1, zIndex: 1 }}
          whileHover={{
            scale: 1.15,
            transition: { duration: 0.3, ease: "easeOut" },
            zIndex: 100,
          }}
          viewport={{ once: false }}
          transition={{
            duration: 0.5,
            delay: 0.1,
            ease: "easeOut",
          }}
          className="h-[230px] rounded-lg bg-[#7F7B8A]"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9, zIndex: 1 }}
          whileInView={{ opacity: 1, scale: 1, zIndex: 1 }}
          whileHover={{
            scale: 1.15,
            transition: { duration: 0.3, ease: "easeOut" },
            zIndex: 100,
          }}
          viewport={{ once: false }}
          transition={{
            duration: 0.5,
            delay: 0.1,
            ease: "easeOut",
          }}
          className="h-[230px] rounded-lg bg-[#7F7B8A]"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9, zIndex: 1 }}
          whileInView={{ opacity: 1, scale: 1, zIndex: 1 }}
          whileHover={{
            scale: 1.15,
            transition: { duration: 0.3, ease: "easeOut" },
            zIndex: 100,
          }}
          viewport={{ once: false }}
          transition={{
            duration: 0.5,
            delay: 0.1,
            ease: "easeOut",
          }}
          className="h-[230px] rounded-lg bg-[#7F7B8A]"
        ></motion.div>
      </div>
      <p className="py-5 capitalize text-center text-[#7F7B8A] cursor-pointer">Show More...</p>
    </div>
  );
};

export default Work;
