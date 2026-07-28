import React, { useState, useRef } from "react";
import SectionHeader from "./SectionHeader";
import { videos } from "../data/videos";
import FilterBar from "./FilterBar";
import VideoCard from "./VideoCard";

const WorkSection = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const scrollRef = useRef();

  const filteredVideos =
    activeFilter === "all"
      ? videos
      : videos.filter((v) => v.category === activeFilter);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <section className="py-20 px-6 relative bg-[#000000]">

      <SectionHeader />

      <FilterBar
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />

      {/* LEFT BUTTON */}
      <button
        onClick={scrollLeft}
        className="absolute left-2 top-[60%] z-10 -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded-full"
      >
        ◀
      </button>

      {/* RIGHT BUTTON */}
      <button
        onClick={scrollRight}
        className="absolute right-2 top-[60%] z-10 -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded-full"
      >
        ▶
      </button>

      {/* HORIZONTAL SCROLL */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scroll-smooth no-scrollbar mt-6"
      >
        {filteredVideos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>

    </section>
  );
};

export default WorkSection;