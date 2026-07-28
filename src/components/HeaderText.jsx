"use client";
import React, { useRef } from "react";
import TextAnimation from "@/components/ui/skiper-ui/skiper31";

const HeaderText = () => {
 
  

    const sectionRef = useRef(null);

  return (
    <section
      ref={sectionRef}
      className=" flex flex-col items-center justify-center pt-50 bg-[#030303]"
    >
      {/* ✅ Animated Heading */}
      <TextAnimation
        text="Our Services"
        targetRef={sectionRef}

        
      />
      <div className="w-120 py-6 px-2 ">
        <p className="text-xl text-center" >We craft engaging content that connects brands with their audience.We bring your vision to life through creative storytelling.</p>
      </div>
    </section>
  )
}

export default HeaderText