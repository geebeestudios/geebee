import React from "react";

const Work = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-center mb-10 font-normal font-albert text-[30px] sm:text-[40px]">
        Work
      </h1>
      <p className="mb-10 capitalize text-center text-[#7F7B8A]">
        Discover the power of creativity in action. Explore our portfolio to see
        how we’ve helped brands turn their visions into <br /> unforgettable
        experiences
      </p>
      <div className="w-[80%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-5">
        <div className="h-[230px] rounded-lg bg-[#7F7B8A]"></div>
        <div className="h-[230px] rounded-lg bg-[#7F7B8A]"></div>
        <div className="h-[230px] rounded-lg bg-[#7F7B8A]"></div>
        <div className="h-[230px] rounded-lg bg-[#7F7B8A]"></div>
        <div className="h-[230px] rounded-lg bg-[#7F7B8A]"></div>
        <div className="h-[230px] rounded-lg bg-[#7F7B8A]"></div>
      </div>
      <p className="py-5 capitalize text-center text-[#7F7B8A]">Show More...</p>
    </div>
  );
};

export default Work;
