import React from 'react'
import Video from './Video'
import Navbar from './Navbar'
import UpperSection from './UpperSection'

const Home = () => {
  return (
    <div>
    <div className='h-screen w-screen fixed'>
      <Video />
    </div>
    <div className='h-screen w-screen overflow-hidden relative'>
        <Navbar />
        <UpperSection />
    </div>
    </div>
  )
}

export default Home
