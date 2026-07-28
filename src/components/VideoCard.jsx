import React from 'react'

const VideoCard = ({ video }) => {
  return (
<div className="min-w-55 sm:min-w-65 md:min-w-70">
  <video
    src={video.video}
    autoPlay
    loop
    muted
    playsInline
    className="
      w-full 
      h-70 sm:h-80 md:h-108 
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