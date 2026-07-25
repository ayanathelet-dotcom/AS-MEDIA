import React from 'react'
import { useState } from "react";

 


const Nav2 = () => {


   const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="flex justify-between items-center">
          {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 text-xl font-bold">
          <a href="#">Home</a>
          <a href="#">Our Work</a>
          <a href="#">Services</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>

        {/* Hamburger Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          <i className="ri-menu-unfold-4-line"></i>
        </button>
        </div>

        {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
      )}
    </div>
  )
}

export default Nav2