"use client";

import { motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import React from "react";
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/effect-cards";

import { cn } from "@/lib/utils";
import ServiceCard from "../../ServiceCard";
import shooting from "@/assets/shooting.png"
import contentcreation from "@/assets/contentcreation.png"
import editing from "@/assets/editing.png"
import socialmedia from "@/assets/socialmedia.png"
import strategy from "@/assets/strategy.png"


const Skiper49 = () => {
  const services = [
  {
    image: shooting,
    title: "Shooting Videos",
    desc: "We create engaging content that brings brand story to life.",
  },
  {
    image: contentcreation,
    title: "Content Creation",
    desc: "video's that showcase your brand with clarity and creativity.",
  },
  {
    image: editing,
    title: "Video Editing",
    desc: "We transform raw footage into cinematic visuals.",
  },
   {
    image: socialmedia,
    title: "Social Media Management",
    desc: "We manage and grow your social presence with engaging content.",
  },
  {
    image: strategy,
    title: "Reseach & Strategy",
    desc: "We plan data-driven content strategies that connect, perform, and convert.",
  },
];

  return (
    <div
      className="flex  w-full items-center justify-center bg-[#030303]">
      <Carousel_003 className="" images={services} showPagination loop />
    </div>
  );
};

export { Skiper49 };

const Carousel_003 = ({
  images,
  className,
  showPagination = false,
  showNavigation = false,
  loop = true,
  autoplay = false,
  spaceBetween = 0
}) => {
  const css = `
.Carousal_003 {
  width: 100%;
  height: 500px;
  padding-bottom: 50px !important;
  overflow: hidden !important; /* 🔥 IMPORTANT */
}


.Carousal_003 .swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 350px;
}

.swiper-pagination-bullet {
  background-color: #fff !important;
}
`;
  return (
    <motion.div
      initial={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{
        duration: 0.3,
        delay: 0.5,
      }}
      className={cn("relative w-full max-w-4xl px-5", className)}>
      <style>{css}</style>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="w-full">
        <Swiper
          spaceBetween={spaceBetween}
          autoplay={
            autoplay
              ? {
                  delay: 1500,
                  disableOnInteraction: true,
                }
              : false
          }
          effect="coverflow"
          grabCursor={true}
          slidesPerView="auto"
          centeredSlides={true}
          loop={loop}
          coverflowEffect={{
            rotate: 40,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={
            showPagination
              ? {
                  clickable: true,
                }
              : false
          }
          navigation={
            showNavigation
              ? {
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }
              : false
          }
          className="Carousal_003"
          modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}>
          {images.map((image, index) => (
            <SwiperSlide key={index} className="">
                <ServiceCard
                 image={image.image}
                 title={image.title}
                 desc={image.desc}
               />
            </SwiperSlide>
          ))}
          {showNavigation && (
            <div>
              <div className="swiper-button-next after:hidden">
                <ChevronRightIcon className="h-6 w-6 text-white" />
              </div>
              <div className="swiper-button-prev after:hidden">
                <ChevronLeftIcon className="h-6 w-6 text-white" />
              </div>
            </div>
          )}
        </Swiper>
      </motion.div>
    </motion.div>
  );
};

export { Carousel_003 };

/**
 * Skiper 49 Carousel_003 — React + Swiper
 * Built with Swiper.js - Read docs to learn more https://swiperjs.com/
 * Illustrations by AarzooAly - https://x.com/AarzooAly
 *
 * License & Usage:
 * - Free to use and modify in both personal and commercial projects.
 * - Attribution to Skiper UI is required when using the free version.
 * - No attribution required with Skiper UI Pro.
 *
 * Feedback and contributions are welcome.
 *
 * Author: @gurvinder-singh02
 * Website: https://gxuri.me
 * Twitter: https://x.com/Gur__vi
 */
