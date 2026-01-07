import React from 'react'
import Sidebar from '../../components/Sidebar' 
import AboutDetails from '../../components/about/AboutDetails'

function About() {
  return (
    <div className='bg-[#0F103F]'>
      <Sidebar />
      <div className="ml-[38px] md:ml-[50px] min-h-screen pb-20">
        
        <AboutDetails/>
      </div>
    </div>
  )
}

export default About
