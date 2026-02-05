import React from 'react'
import Sidebar from '../../components/Sidebar' 
import HomePageAboutMe from '../../components/home/HomePageAboutMe'

function About() {
  return (
    <div className='bg-[#0F103F]'>
      <Sidebar />
      <div className="ml-[28px] md:ml-[50px] min-h-screen pb-20">
        
        <HomePageAboutMe/>
      </div>
    </div>
  )
}

export default About
