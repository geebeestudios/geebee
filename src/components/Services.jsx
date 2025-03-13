import React from "react";
import AnimatedText from "./ui/AnimatedText";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <div className="py-10">
      <AnimatedText
        text="Services"
        className="text-center mb-10 font-normal font-albert text-[30px] sm:text-[40px]"
      />
      <p className="mb-10 capitalize text-center text-[#7F7B8A]">
        Empowering your brand through creative design and strategic solutions.
        Explore our services to see how <br className="" /> we can help bring
        your vision to life
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-5 gap-5">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, zIndex: 1 }}
          whileInView={{ opacity: 1, scale: 1, zIndex: 1 }}
          // whileHover={{
          //   scale: 1.15,
          //   transition: { duration: 0.3, ease: "easeOut" },
          //   zIndex: 100,
          // }}
          viewport={{ once: false }}
          transition={{
            duration: 0.5,
            delay: 0.1,
            ease: "easeOut",
          }}
          className="h-[230px] rounded-lg bg-green-400 sm:col-span-1"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9, zIndex: 1 }}
          whileInView={{ opacity: 1, scale: 1, zIndex: 1 }}
          // whileHover={{
          //   scale: 1.15,
          //   transition: { duration: 0.3, ease: "easeOut" },
          //   zIndex: 100,
          // }}
          viewport={{ once: false }}
          transition={{
            duration: 0.5,
            delay: 0.1,
            ease: "easeOut",
          }}
          className="h-[230px] rounded-lg bg-green-400 sm:col-span-1 lg:col-span-2"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9, zIndex: 1 }}
          whileInView={{ opacity: 1, scale: 1, zIndex: 1 }}
          // whileHover={{
          //   scale: 1.15,
          //   transition: { duration: 0.3, ease: "easeOut" },
          //   zIndex: 100,
          // }}
          viewport={{ once: false }}
          transition={{
            duration: 0.5,
            delay: 0.1,
            ease: "easeOut",
          }}
          className="h-[230px] rounded-lg bg-green-400 sm:col-span-2 lg:col-span-1"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9, zIndex: 1 }}
          whileInView={{ opacity: 1, scale: 1, zIndex: 1 }}
          // whileHover={{
          //   scale: 1.15,
          //   transition: { duration: 0.3, ease: "easeOut" },
          //   zIndex: 100,
          // }}
          viewport={{ once: false }}
          transition={{
            duration: 0.5,
            delay: 0.1,
            ease: "easeOut",
          }}
          className="h-[230px] rounded-lg bg-green-400 sm:col-span-1 lg:col-span-2"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9, zIndex: 1 }}
          whileInView={{ opacity: 1, scale: 1, zIndex: 1 }}
          // whileHover={{
          //   scale: 1.15,
          //   transition: { duration: 0.3, ease: "easeOut" },
          //   zIndex: 100,
          // }}
          viewport={{ once: false }}
          transition={{
            duration: 0.5,
            delay: 0.1,
            ease: "easeOut",
          }}
          className="h-[230px] rounded-lg bg-green-400 sm:col-span-1 lg:col-span-2"
        ></motion.div>
      </div>
    </div>
  );
};

export default Services;
