import { CircleArrowOutUpRight } from "lucide-react";
import React from "react";
import chairimg from "../assets/chairimg.png"

const AboutUs = () => {
  return (
    <div className="w-full  bg-[#0c0c0c] py-40 px-4 sm:px-8 md:px-12">
      
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-3 bg-[#dbdbdb] p-3 rounded-xl">
        
        {/* IMAGE */}
        <div className="w-full lg:w-1/2 h--75 sm:h-100 md:h-125 rounded-md overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={chairimg}
            alt=""
          />
        </div>

        {/* CONTENT */}
        <div className="w-full lg:w-1/2 bg-[#c0c0c0] rounded-md flex flex-col justify-between">
          <div className="flex flex-col gap-4 p-4 sm:p-6 md:p-8 overflow-hidden">
            
            <h5 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black">
              About Us
            </h5>

            <p className="text-sm sm:text-base md:text-lg text-[#272727] w-115 leading-relaxed">
              We are a creative agency dedicated to transforming ideas into powerful visual stories.
Our team blends strategy, creativity, and technology to build impactful digital experiences.
From content creation to brand growth, we help businesses stand out in a crowded world.
Driven by passion and innovation, we turn visions into results that truly matter.
            </p>
            </div>
            <div className="gap-4 p-4 sm:p-6 md:p-8 flex justify-between" >
            <button className="bg-[#afadadf1] text-[#1d1d1d] py-3 px-5 text-sm sm:text-base md:text-lg font-semibold rounded-md w-fit flex items-center gap-2 hover:gap-3 transition-all">
              @as-media
            </button>
            <button className="bg-[#050505] text-white py-3 px-4 rounded-3xl " ><CircleArrowOutUpRight className="w-5 h-5" /></button>
            </div>

        </div>

      </div>
    </div>
  );
};

export default AboutUs;