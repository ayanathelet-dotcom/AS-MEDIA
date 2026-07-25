import React from 'react'
import Nav2 from './Nav2'
import finalogo from '../assets/finalogo.png'

const Nav1 = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-center mt-6">
    <div className=' flex items-center justify-between 
        w-[90%] max-w-6xl px-6 py-3
        
        bg-white/10 
        backdrop-blur-md 
        border border-white/20 hover:border-white/35
        
        rounded-full
        shadow-lg' >
        <img  className='h-18 w-45 object-cover' src={finalogo} alt="" />
        <Nav2 />
    </div>
    </header>
  )
}

export default Nav1