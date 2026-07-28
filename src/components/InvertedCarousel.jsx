import React from 'react'
import { Skiper49 } from '@/components/ui/skiper-ui/skiper49'
import HeaderText from './HeaderText'

const InvertedCarousel = () => {
  return (
    <div className=' w-full overflow-hidden ' >
      <HeaderText/>
      <Skiper49 />
    </div>
  )
}

export default InvertedCarousel