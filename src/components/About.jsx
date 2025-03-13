import React from "react";
import about from "../assets/about-img.png";
import AnimatedText from "./ui/AnimatedText";

const About = () => {
  return (
    <div>
      <AnimatedText
        text="About"
        className="text-center mb-16 font-normal font-albert text-[30px] sm:text-[40px]"
      />
      {/* <h1 className="text-center mb-16 font-normal font-albert text-[30px] sm:text-[40px]">
        About
      </h1> */}
      <div className="flex px-5 sm:px-0 gap-10 sm:gap-0 flex-col md:flex-row justify-around sm:items-center">
        <img
          className="h-[300px] object-cover overflow-visible"
          src={about}
          alt=""
        />
        <p className="capitalize text-[#7F7B8A] text-[18px] font-light">
          Born from a deep understanding that true creativity lies in the union
          of <br className="hidden sm:block" /> strategy and artistic
          expression, we are a creative agency dedicated to{" "}
          <br className="hidden sm:block" /> building more than just businesses
          – we craft legacies. While our founder{" "}
          <br className="hidden sm:block" /> never formally trained in
          traditional art, the innate ability to visualize and{" "}
          <br className="hidden sm:block" /> create has always been at the core
          of their journey. With a natural flair{" "}
          <br className="hidden sm:block" /> for design and an eye for detail,
          they discovered the transformative <br className="hidden sm:block" />{" "}
          power of design as a tool for growth and impact.{" "}
          <br className="hidden sm:block" /> Our approach is simple yet
          powerful: combining creativity with purpose-{" "}
          <br className="hidden sm:block" />
          driven strategy to create designs that resonate, inspire, and leave a{" "}
          <br className="hidden sm:block" /> lasting legacy. Every project we
          take on is a partnership, a chance to{" "}
          <br className="hidden sm:block" /> build something extraordinary that
          stands the test of time. <br className="hidden sm:block" /> We don’t
          just design – we build stories, shape brands, and empower{" "}
          <br className="hidden sm:block" /> visions to flourish. Together, we
          create something that’s not only seen,{" "}
          <br className="hidden sm:block" /> but remembered.
        </p>
      </div>
    </div>
  );
};

export default About;
