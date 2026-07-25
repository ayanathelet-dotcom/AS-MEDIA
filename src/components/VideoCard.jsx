import React from 'react'

const VideoCard = ({ video }) => {
  return (
<div className="min-w-[220px] sm:min-w-[260px] md:min-w-[300px]">
  <video
    src={video.video}
    autoPlay
    loop
    muted
    playsInline
    className="
      w-full 
      h-[280px] sm:h-[320px] md:h-[430px] 
      object-cover 
      rounded-3xl
    "
  />
  <h3 className="mt-2 text-sm sm:text-base font-medium">
    {video.title}
  </h3>
</div>
  )
}

export default VideoCard