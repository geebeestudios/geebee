import React from "react";
import bannerImg from "../assets/banner.png";
import FogAnimation from "./FogAnimation";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { motion } from "framer-motion";

const Banner = () => {
  const words = [
    {
      text: "Transforming",
      className: "text-[#7F7B8A] text-[24px] sm:text-[28px]"
    },
    {
      text: "Ideas",
      className: "text-[36px] sm:text-[50px] lg:text-[70px] text-[#2F4858] font-semibold leading-tight"
    },
    {
      text: "into",
      className: "text-[#7F7B8A] text-[24px] sm:text-[28px]"
    },
    {
      text: "Experiences",
      className: "text-[36px] sm:text-[50px] lg:text-[70px] text-[#2F4858] font-semibold leading-tight"
    },
  ];

  return (
        <div className="h-fit py-8">
            <div className="capitalize mb-4 font-albert text-[30px] sm:text-[50px] text-center text-[#7F7B8A]">
                Transforming{" "}
                <span className="text-[50px] sm:text-[70px] text-black font-semibold">
                    Ideas
                </span>{" "}
                into{" "}
                <span className="text-[50px] sm:text-[70px] text-black font-semibold">
                    Experiences
                </span>{" "}
            </div>
      <FogAnimation
        className="h-fit w-full"
        fogColor="rgba(255, 255, 255, 0.6)"
        fogDensity={15}
        speed={10}
        direction="up"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative w-full h-full"
        >
          <img
            className="sm:rounded-xl h-[350px] w-full object-cover"
            src={bannerImg}
            alt=""
          />
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 3.8 }}
            className="capitalize bg-white p-10 sm:rounded-tl-xl text-[#7F7B8A] absolute bottom-0 right-0 font-raleway text-[18px] font-light z-20 shadow-lg"
          >
            "Where creativity meets strategy to bring your vision to life."
          </motion.p>
        </motion.div>
      </FogAnimation>
    </div>
  );
};

export default Banner;
