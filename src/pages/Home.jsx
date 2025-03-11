import React from "react";
import Navbar from "../common/Navbar";
import Banner from "../components/Banner";
import TalkToUs from "../components/TalkToUs";
import About from "../components/About";
import Services from "../components/Services";
import Work from "../components/Work";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full sm:w-[90%] 2xl:w-[80%] 3xl:w-[70%]">
        <Navbar />
        <Banner />
        <TalkToUs />
        <About />
        <Services />
        <Work />
        <Contact />
      </div>
    </div>
  );
};

export default Home;
