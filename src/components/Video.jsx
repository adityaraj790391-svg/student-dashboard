import React from 'react'

const Video = () => {
  return (
    <div className='h-full w-full overflow-hidden'>
      <video className='h-full w-full object-cover overflow-hidden' autoPlay muted loop src='/video.mp4'/>
    </div>
  )
}

export default Video
