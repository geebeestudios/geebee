import React from "react";
import phone from "../assets/icons/phone.svg";
import message from "../assets/icons/message.svg";
import mail from "../assets/icons/mail.svg";

const TalkToUs = () => {
    return (
        <div className="pb-20">
            <h1 className="text-center mb-4 font-normal font-albert text-[30px] sm:text-[40px]">
                Talk To Us?
            </h1>
            <div className="flex justify-center gap-10">
                <div className="bg-[#2F4858] p-4 rounded-full">
                    <img
                        className="h-[25px] cursor-pointer"
                        src={phone}
                        alt=""
                    />
                </div>
                <div className="bg-[#2F4858] p-4 rounded-full">
                    <img
                        className="h-[25px] cursor-pointer"
                        src={message}
                        alt=""
                    />
                </div>
                <div className="bg-[#2F4858] p-4 rounded-full">
                    <img
                        className="h-[25px] cursor-pointer"
                        src={mail}
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
};

export default TalkToUs;
