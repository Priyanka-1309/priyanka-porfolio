import React from 'react'

import girlImage from "../../assets/images/girlImage.png";
import diamond from "../../assets/images/diamond.png";
import searchAndNewspaper from "../../assets/images/searchAndNewspaper.png";
import ring1 from "../../assets/images/ring1.png";

function HomePageAboutMe() {
  return (
    <div className="relative pb-[80px] pt-[40px]   sm:pt-30 md:pt-60 lg:pt-70 xl:pt-80 flex justify-center">

      {/* searchAndNewspaper iamge will be hidden below md screen */}
      <img
        src={searchAndNewspaper}
        alt='image'
        className='h-[250px] w-[250px] hidden md:block absolute left-[0px] top-0 lg:top-20'
      />

      {/* RING — OUTSIDE CARD */}
      <img
        src={ring1}
        alt="ring"
        className="
      hidden md:block
      absolute
      bottom-[-10px]
      left-1/2
      -translate-x-1/2
      w-[900px]
      max-w-none
      z-0
      opacity-40 
    "
      />

      <div className="
      relative
        w-[500px]  md:w-[600px]
        min-h-[400px] md:h-[600px]
        rounded-[20px] md:rounded-full 
         bg-[linear-gradient(135deg,#C961DE,#2954A3)]
        flex flex-col items-center 
        py-[50px] md:py-[100px]
        px-[10px] md: px-10 
        mx-[15px] md:mx-5
        md:pr-[30px]
      ">

        {/* girl image will be hidden below md screen */}
        <img
          src={girlImage}
          alt='girlImage'
          className='h-[800px] w-[400px] hidden md:block absolute left-[-225px] top-[-160px] z-15'
        />

        {/* middle section */}
       <h2 className="text-5xl font-serif font-bold tracking-wide -mt-10 mb-13  text-center ">
  <span className="text-white">About</span>{" "}
  <span className="text-[#2954A3]">Me</span>
</h2>

<p className=" text-7xl text-justify text-white text-lg max-w-m ml-auto mr-4 leading-snug md:pl-9">
  Hello! I’m Priyanka, I’m a passionate UI/UX Designer with hands-on experience 
  in creating intuitive and visually engaging digital experiences. I specialize in 
  designing user-centric interfaces using Figma, focusing on usability, clean 
  layouts, and meaningful interactions. I enjoy transforming ideas💡into practical 
  designs that balance aesthetics with functionality⚡I have worked on a variety 
  of projects including websites💻and mobile app designs📱, always aiming to create 
  smooth user journeys.I’m constantly learning and improving my skills to deliver 
  impactful and user-focused design solutions🚀.
</p>


        {/* diamond image will be hidden below md screen */}
        <img
          src={diamond}
          alt='diamond Image'
          className='h-[470px] w-[320px] hidden md:block absolute right-[-80px] top-[380px] z-15'
        />

        {/* view more button */}
         <button
        className="mt-6 px-6 py-2 rounded-full text-sm font-semibold text-white hover:scale-105 transition cursor-pointer"
        style={{ background: "linear-gradient(90deg, #C961DE, #2954A3)" }}
         >
           View More
            </button>
            
      </div>
    </div>
  )

}

export default HomePageAboutMe
