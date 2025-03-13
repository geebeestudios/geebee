import React from "react";
import bannerImg from "../assets/banner.png";
import FogAnimation from "./FogAnimation";
import { TypeAnimation } from 'react-type-animation';

const Banner = () => {
    return (
        <div className="h-fit py-8">
            {/* Mobile view - static text (hidden on sm screens and above) */}
            <div className="capitalize mb-4 font-albert text-[30px] text-center text-[#7F7B8A] sm:hidden">
                Transforming{" "}
                <span className="text-[50px] text-black font-semibold">
                    Ideas
                </span>{" "}
                into{" "}
                <span className="text-[50px] text-black font-semibold">
                    Experiences
                </span>
            </div>

            {/* Desktop view - typewriting animation (hidden on xs screens) */}
            <div className="capitalize mb-4 font-albert text-[50px] text-center text-[#7F7B8A] hidden sm:block">
                <TypeAnimation
                    sequence={[
                        'Transforming Ideas into Experiences',
                        2000,
                        'Transforming Concepts into Reality',
                        2000,
                        'Transforming Visions into Stories',
                        2000,
                        'Transforming Dreams into Success',
                        2000,
                    ]}
                    wrapper="span"
                    speed={50}
                    style={{ display: 'inline-block' }}
                    repeat={Infinity}
                    cursor={true}
                    className="text-center"
                />
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
