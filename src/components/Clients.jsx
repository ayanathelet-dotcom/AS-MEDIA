import React from "react";

const Clients = () => {
  const clients = ["TrueCars", "Xpress Cars", "Bhavya Motors", "Isquare Automobiles",];

  return (
    <div className="relative w-full overflow-hidden py-35 bg-[#030303]">

    <div className="flex items-center justify-center pb-14" >
      <h4 className="text-2xl sm:text-2xl md:text-4xl lg:text-6xl font-bold" >
        Clients
      </h4>
      </div>

      {/* SCROLL */}
      <div className="flex gap-16 animate-scrollX whitespace-nowrap">
        {[...clients, ...clients].map((client, index) => (
          <h4
            key={index}
            className="text-2xl md:text-4xl font-bold shrink-0 opacity-50 hover:opacity-100 transition"
          >
            {client}
          </h4>
        ))}
      </div>

    </div>
  );
};

export default Clients;