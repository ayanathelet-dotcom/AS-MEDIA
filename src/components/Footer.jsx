import React from "react";
import finalogo from "../assets/finalogo.png";
import ContactButton from "./ContactButton";


const Footer = () => {
  return (
    <div className="w-full bg-[#0c0c0c] text-white flex flex-col justify-between">
      
      {/* TOP SECTION */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10 px-6 sm:px-10 md:px-16 py-10">
        
        {/* LOGO */}
        <div className="w-32 sm:w-40 md:w-48">
          <img src={finalogo} alt="logo" className="w-full object-contain" />
        </div>

        {/* CONTACT */}
        <div>
          <h5 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
            Contacts
          </h5>
          <p className="text-sm sm:text-base">+91-7021450196</p>
          <p className="text-sm sm:text-base">+91-9082867933</p>
          <p className="text-sm sm:text-base">asmedias1209@gmail.com</p>
        </div>

        {/* CTA */}
        <div>
          <h5 className="text-lg sm:text-xl md:text-2xl mb-3">
            Let's talk
          </h5>
          <ContactButton/>
        </div>

        {/* SOCIAL */}
        <div>
          <h5 className="text-lg sm:text-xl mb-3">
            Follow us
          </h5>

          <div className="flex gap-4">
            <a href="https://youtube.com/@asmedia1-0?si=ELCVmPrzAE3bTjql" target="_blank">
  <i className="ri-youtube-fill text-2xl sm:text-3xl md:text-4xl lg:text-5xl cursor-pointer hover:scale-110 transition"></i>
  </a>
  <a href="Instagram: https://www.instagram.com/as_.medias?igsh=OGN4NnMxd3p6YXJy" target="_blank">
  <i className="ri-instagram-fill text-2xl sm:text-3xl md:text-4xl lg:text-5xl cursor-pointer hover:scale-110 transition"></i>
  </a>
</div>
        </div>
      </div>

      {/* BIG TEXT BOTTOM */}
      <div className="w-full overflow-hidden leading-none">
        <h6 className="w-full text-center text-[60px] sm:text-[90px] md:text-[140px] lg:text-[180px] font-bold tracking-tight">
          AS-MEDIA
        </h6>
      </div>
    </div>
  );
};

export default Footer;