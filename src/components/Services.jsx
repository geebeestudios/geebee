import React from "react";
import AnimatedText from "./ui/AnimatedText";
import { motion } from "framer-motion";
import service1 from "../assets/service1.png";
import service2 from "../assets/service2.png";
import service3 from "../assets/service3.png";
import service4 from "../assets/service4.png";
import service5 from "../assets/service5.png";
import { IoIosCheckmark } from "react-icons/io";

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
        <div className="relative h-[230px] w-full overflow-hidden shadow-lg rounded-lg sm:col-span-1">
          <motion.img
            src={service1}
            alt="service1"
            initial={{ opacity: 0, scale: 0.9, zIndex: 1 }}
            whileInView={{ opacity: 1, scale: 1, zIndex: 1 }}
            viewport={{ once: false }}
            transition={{
              duration: 0.5,
              delay: 0.1,
              ease: "easeOut",
            }}
            className="h-full w-full object-cover"
          />
          <div className="flex items-center gap-3 absolute bottom-0 left-0 p-2 bg-[#2F4858] w-full">
            <IoIosCheckmark className="text-[19px] text-green-500" />
            <p className="capitalize text-white">arts & illustration</p>
          </div>
        </div>
        <div className="relative h-[230px] w-full overflow-hidden shadow-lg rounded-lg sm:col-span-1 lg:col-span-2">
          <motion.img
            src={service2}
            alt="service2"
            initial={{ opacity: 0, scale: 0.9, zIndex: 1 }}
            whileInView={{ opacity: 1, scale: 1, zIndex: 1 }}
            viewport={{ once: false }}
            transition={{
              duration: 0.5,
              delay: 0.1,
              ease: "easeOut",
            }}
            className="h-full w-full object-cover"
          />
          <div className="flex items-center gap-3 absolute bottom-0 left-0 p-2 bg-[#2F4858] w-full">
            <IoIosCheckmark className="text-[19px] text-green-500" />
            <p className="capitalize text-white">Brand strategy</p>
          </div>
        </div>
        <div className="relative h-[230px] w-full overflow-hidden shadow-lg rounded-lg sm:col-span-2 lg:col-span-1">
          <motion.img
            src={service3}
            alt="service3"
            initial={{ opacity: 0, scale: 0.9, zIndex: 1 }}
            whileInView={{ opacity: 1, scale: 1, zIndex: 1 }}
            viewport={{ once: false }}
            transition={{
              duration: 0.5,
              delay: 0.1,
              ease: "easeOut",
            }}
            className="h-full w-full object-cover"
          />
          <div className="flex items-center gap-3 absolute bottom-0 left-0 p-2 bg-[#2F4858] w-full">
            <IoIosCheckmark className="text-[19px] text-green-500" />
            <p className="capitalize text-white">graphic design</p>
          </div>
        </div>
        <div className="relative h-[230px] w-full overflow-hidden shadow-lg rounded-lg sm:col-span-1 lg:col-span-2">
          <motion.img
            src={service4}
            alt="service4"
            initial={{ opacity: 0, scale: 0.9, zIndex: 1 }}
            whileInView={{ opacity: 1, scale: 1, zIndex: 1 }}
            viewport={{ once: false }}
            transition={{
              duration: 0.5,
              delay: 0.1,
              ease: "easeOut",
            }}
            className="h-full w-full object-cover"
          />
          <div className="flex items-center gap-3 absolute bottom-0 left-0 p-2 bg-[#2F4858] w-full">
            <IoIosCheckmark className="text-[19px] text-green-500" />
            <p className="capitalize text-white">Visual identityn</p>
          </div>
        </div>
        <div className="relative h-[230px] w-full overflow-hidden shadow-lg rounded-lg sm:col-span-1 lg:col-span-2">
          <motion.img
            src={service5}
            alt="service5"
            initial={{ opacity: 0, scale: 0.9, zIndex: 1 }}
            whileInView={{ opacity: 1, scale: 1, zIndex: 1 }}
            viewport={{ once: false }}
            transition={{
              duration: 0.5,
              delay: 0.1,
              ease: "easeOut",
            }}
            className="h-full w-full object-cover"
          />
          <div className="flex items-center gap-3 absolute bottom-0 left-0 p-2 bg-[#2F4858] w-full">
            <IoIosCheckmark className="text-[19px] text-green-500" />
            <p className="capitalize text-white">website copy, design, development</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
