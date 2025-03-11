import React from "react";

const Services = () => {
  return (
    <div className="py-10">
      <h1 className="text-center mb-10 font-normal font-albert text-[30px] sm:text-[40px]">
        Services
      </h1>
      <p className="mb-10 capitalize text-center text-[#7F7B8A]">
        Empowering your brand through creative design and strategic solutions.
        Explore our services to see how <br className="" /> we can help bring
        your vision to life
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-5 gap-5">
        <div className="h-[230px] rounded-lg bg-green-400 sm:col-span-1"></div>
        <div className="h-[230px] rounded-lg bg-green-400 sm:col-span-1 lg:col-span-2"></div>
        <div className="h-[230px] rounded-lg bg-green-400 sm:col-span-2 lg:col-span-1"></div>
        <div className="h-[230px] rounded-lg bg-green-400 sm:col-span-1 lg:col-span-2"></div>
        <div className="h-[230px] rounded-lg bg-green-400 sm:col-span-1 lg:col-span-2"></div>
      </div>
    </div>
  );
};

export default Services;
