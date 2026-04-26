import React from 'react'

const Video = ({ isMuted }) => {
  return (
    <div className='h-full w-full overflow-hidden relative'>
      <video className='h-full w-full object-cover overflow-hidden' autoPlay muted={isMuted} loop src='/video.mp4'/>
    </div>
  )
}

export default Video

