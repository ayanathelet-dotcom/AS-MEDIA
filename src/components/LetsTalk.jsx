import { CircleArrowOutUpRight } from "lucide-react";
import React from "react";
import contentcreation from "../assets/contentcreation.png";

const LetsTalk = () => {
  return (
    <div className="w-full  bg-black px-4 sm:px-8 md:px-16 py-40">
      
      {/* Heading */}
      <h4 className="text-white text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-8">
        Let's Talk
      </h4>

      {/* Center Container */}
      <div className="flex items-center justify-center">
        
        {/* Card */}
        <div className="w-full max-w-sm sm:max-w-md md:max-w-lg bg-[#e7e5e5] border-2 rounded-2xl p-4 sm:p-6 flex flex-col gap-4">
          
          {/* Text */}
          <div>
            <h5 className="text-black font-bold text-xl sm:text-2xl md:text-3xl">
              Let's Meet
            </h5>

            <p className="text-sm sm:text-base md:text-lg text-black mt-2 font-bold">
              Every great brand starts with a conversation—let’s have ours.
            </p>
          </div>

          {/* Image */}
          <div className="w-full h-48 sm:h-56 md:h-64 rounded-md overflow-hidden">
            <img
              src={contentcreation}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          {/* Button */}
          <button className="bg-black text-white py-2 px-5 flex items-center gap-2 rounded-xl w-fit hover:gap-3 transition-all">
            Get Started
            <CircleArrowOutUpRight className="w-5 h-5" />
          </button>

        </div>
      </div>
    </div>
  );
};

export default LetsTalk;