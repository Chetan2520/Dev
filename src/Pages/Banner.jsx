import React from "react";

const Banner = () => {
  return (
    <div className=" mx-[2%] my-5">
      <div className="w-full bg-gradient-to-r from-[#D2BBAE] to-[#e4c998] rounded-2xl shadow-lg overflow-hidden relative">
        {/* Main Content Container */}
        <div className="w-[80%] flex mx-auto">
            <img src="banner.png" className="w-full object-contain" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
