import React from 'react'
import ContactButton from './ContactButton'

const TextHero = () => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">

  <h1 className="
    text-4xl
    sm:text-4xl
    md:text-6xl
    lg:text-8xl
    xl:text-9xl
    font-bold
  ">
    AS MEDIA
  </h1>

  <h3 className='text-xl
    sm:text-xl
    md:text2xl
    lg:text-4xl
    ' >
    We shoot videos that express the purpose of your products
  </h3>
  <div className='flex justify-center items-center pt-4 ' >
    <ContactButton/>
  </div>

</div>
  )
}

export default TextHero