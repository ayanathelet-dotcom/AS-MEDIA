import { CircleArrowOutUpRight } from "lucide-react";
import React from "react";
import ContactButton from "./ContactButton";

const ServiceCard = ({ image, title, desc }) => {
  return (
    <div className="w-90 h-100  bg-amber-50 p-2 rounded-xl">
      
      {/* Image */}
      <div className="h-60 w-full overflow-hidden rounded-lg">
        <img
          className="w-full h-full object-cover"
          src={image}
          alt={title}
        />
      </div>

      {/* Content */}
      <div className="py-3 text-black overflow-hidden">
        <h4 className="text-lg sm:text-lg md:text-xl lg:text-2xl font-bold">{title}</h4>
        <p className="text-sm sm:text-sm md:text-lg lg:text-lg">{desc}</p>

        <div>
          <ContactButton/>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;

