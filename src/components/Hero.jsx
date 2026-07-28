import React from 'react'
import hero2 from '../assets/hero2.png'
import TextHero from './TextHero'


const Hero = () => {
  return (
    <section
      className="h-[85vh] w-full flex items-center justify-center text-white"
      style={{
        backgroundImage: `url(${hero2})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
        <TextHero />
    </section>
  )
}

export default Hero