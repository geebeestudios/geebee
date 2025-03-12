import React from "react";
import bannerImg from "../assets/banner.png";
import FogAnimation from "./FogAnimation";

const Banner = () => {
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
                <div className="relative w-full h-full">
                    <img
                        className="sm:rounded-xl h-[350px] w-full object-cover"
                        src={bannerImg}
                        alt=""
                    />
                    <p className="capitalize bg-white p-10 sm:rounded-tl-xl text-[#7F7B8A] absolute bottom-0 right-0 font-raleway text-[18px] font-light z-20">
                        "Where creativity meets strategy to bring your vision to
                        life."
                    </p>
                </div>
            </FogAnimation>
        </div>
    );
};

export default Banner;
