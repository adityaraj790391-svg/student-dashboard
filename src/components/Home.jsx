import React, { useState } from 'react'
import Video from './Video'
import Navbar from './Navbar'
import UpperSection from './UpperSection'
import StudentRegister from './StudentRegister'

const Home = () => {

  const [isMuted, setIsMuted] = useState(true);

  return (
    <div>
      <div className='h-screen w-screen fixed'>
        <Video isMuted={isMuted} />
      </div>
      
      <div className='h-screen w-screen overflow-hidden relative pointer-events-none'>
          <div className='pointer-events-auto'>
            <Navbar />
            <UpperSection />
            <StudentRegister />
          </div>
          <button onClick={() => setIsMuted(!isMuted)} className='fixed right-[65vw] bottom-[20vw] h-22 w-40 font-bold text-2xl bg-cyan-600 text-white px-3 py-2 rounded-full hover:bg-gray-500 transition-colors z-50 pointer-events-auto'> {isMuted ? 'ARISE' : 'CANCEL SUMMON'}</button>
      </div>
    </div>
  )
}

export default Home

