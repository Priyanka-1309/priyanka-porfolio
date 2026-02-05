import React, { useState, useEffect, useRef } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import "swiper/css"

import weddingPlannerCover from "../../assets/images/projectsImage/weddingPlannerCover.png"
import MetroClapCover from "../../assets/images/projectsImage/metroClapCover.png"
import CrmCover from "../../assets/images/projectsImage/crmCover.png"
import MetroBuddyCover from "../../assets/images/projectsImage/metroBuddyCover.png"
import jobSeekerCover from "../../assets/images/projectsImage/jobSeekerCover.png"
import freshGroCover from "../../assets/images/projectsImage/freshGroCover.png"
import shoppingappcover from "../../assets/images/projectsImage/shoppingappcover.png"
import landingPageCover from "../../assets/images/projectsImage/landingPageCover.png"
import synexisventureCover from "../../assets/images/projectsImage/synexisventureCover.png"
import variantSwitchAnimationCover from "../../assets/images/projectsImage/variantSwitchAnimationCover.png"
import valchronVenture from "../../assets/images/projectsImage/valchronVentureCover.png"
import furnitureCover from "../../assets/images/projectsImage/furnitureCover.png"

import prevIcon from "../../assets/images/backArrow.png"
import nextIcon from "../../assets/images/forwardArrow.png"
import ring2 from "../../assets/images/ring2.png"
import arrow from "../../assets/images/exploreWork/arrow.png";
import exploreText from "../../assets/images/exploreWork/exploreText.png";
import personOnChair from "../../assets/images/exploreWork/personOnChair.png";

import ProjectCard from "./projectCard/ProjectCard"
import { useNavigate } from "react-router-dom"
 
function HomePageProjects() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const swiperRef = useRef(null)
  const navigate = useNavigate()

  /* ================= PROJECT DATA ================= */
 
      const projects = [

    {
              title: "Wedding Planner💍",
              subtitle: "Elegant Wedding Planner Platform – Helping couples plan their dream day with ease.",
              titleColor: "#C961DE",  // Wedding Planner title color
              subtitleColor: "#FFFFFF", // Subtitle color
              image: weddingPlannerCover,
              // link:"https://www.figma.com/design/KdZTBrtz6etTiyHk9hBtoJ/wedding--planner?node-id=0-1&t=YYdxzJO9hDkVfLRF-1"
            },
            {
              title: "Furniture Website🛋️",
              subtitle: "Modern Furniture E-Shop – Discover stylish furniture for every corner of your home.",
              titleColor: "#C961DE",
              subtitleColor: "#FFFFFF",
              image: furnitureCover,
              // link:"https://www.figma.com/design/fazoJ7tEqOpdkO4xgrxqm5/Furniture-website--Community-?node-id=0-1&t=5YGLi68xPZhTGRNw-1"
            
            },
            {
              title: "Shopping App🛒",
              subtitle: "Smart Shopping App – Seamless, user-friendly shopping at your fingertips.",
              titleColor: "#C961DE",
              subtitleColor: "#FFFFFF",
              image:shoppingappcover,
              // link:"https://www.figma.com/design/lsdl2PkQqZkhyyOHZwpAcI/shopping-app?node-id=0-1&t=8jR3zIZ5p5qzTcag-1"
    
            },
            {
              title: "Valchron Ventures📈",
              subtitle: "Valchron Ventures – Trading Made Simple – Track, trade, and grow your investments.",
              titleColor: "#C961DE",
              subtitleColor: "#FFFFFF",
              image:valchronVenture,
              // link:"https://www.figma.com/design/xmBDaVPtMmsCVlgJTmR5Pc/Valchron-Ventures-LLC?node-id=336-499&t=6zqsn0Bge6reEb0S-1"
    
            },
            {
              title: "CRM App📊",
              subtitle: "Efficient CRM Solution – Streamlined customer management for modern businesses.",
              titleColor: "#C961DE",
              subtitleColor: "#FFFFFF",
              image:CrmCover,
              // link:"https://www.figma.com/design/6mKbHEDmXAaqslBCPcDUqy/S2-HIVE-SCHOOL-UI?node-id=0-1&t=y64TTICHnb4ui2xq-1"
    
            },
            {
              title: "Landing Page🌐",
              subtitle: "High-Converting Landing Page – Designed to grab attention and drive action.",
              titleColor: "#C961DE",
              subtitleColor: "#FFFFFF",
              image:landingPageCover,
              // link:"https://www.figma.com/design/ydsQwgib6fspv6zjLJUczK/face-drop-landing-page?node-id=0-1&t=mnC4jsLd0XxxsT99-1"
    
            },
            {
              title: "Variant Switch Animation",
              subtitle: "Interactive Variant Switch Animation – Engaging UI with smooth transitions.",
              titleColor: "#C961DE",
              subtitleColor: "#FFFFFF",
              image:variantSwitchAnimationCover,
              // link:"https://www.figma.com/design/zjajRnhZYuBjPWXg3fGWd0/Variant-Switch-Animation?node-id=0-1&t=g6pC46iqVKQVFhh6-1"
    
            },
            {
              title: "Metro Buddy📍",
              subtitle: "Metro Buddy – Discover Local Services Near You – Find what you need, close to home.",
              titleColor: "#C961DE",
              subtitleColor: "#FFFFFF",
              image: MetroBuddyCover,
              // link:"https://www.figma.com/design/UGbdSmQFIlMbFXF9kwOvww/Metro-buddy?node-id=0-1&t=vNyLK7i6VnMOxvTt-1"
    
            },
            {
              title: "Synexis Venture🏢",
              subtitle: "Synexis Venture – Professional Services Website – Clean, modern design for service companies.",
              titleColor: "#C961DE",
              subtitleColor: "#FFFFFF",
              image:synexisventureCover,
              // link:"https://www.figma.com/design/DNDTOMjkR9eDeFiJmg9DTA/synexis-venture?node-id=0-1&t=ErxO7NXiNQkZrfd2-1"
    
            },
            {
              title: "Job Portal App💼",
              subtitle: "Smart Job Portal App – Helping users find their dream job effortlessly.",
              titleColor: "#C961DE",
              subtitleColor: "#FFFFFF",
              image:jobSeekerCover,
              // link:"https://www.figma.com/design/K0J7tFedWx5fnBQMmkJgMB/Job-Portal-App?node-id=0-1&t=YlIKoXGKSLwXQev3-1"
    
            },
            {
              title: "Metro Clap🛠️",
              subtitle: "Metro Clap – Local Services Marketplace – Book trusted professionals in minutes.",
              titleColor: "#C961DE",
              subtitleColor: "#FFFFFF",
              image: MetroClapCover,
              // link:"https://www.figma.com/design/pM03LsQlIWNLyGqpknMSFL/Metro-Clap?node-id=0-1&t=wHxMb7UPQ4NtvWCL-1"
    
            },
            {
              title: "Fresh Gro🥦",
              subtitle: "Fresh Gro – Online Grocery Shopping – Fresh groceries delivered at your doorstep.",
              titleColor: "#C961DE",
              subtitleColor: "#FFFFFF",
              image:freshGroCover,
              // link:"https://www.figma.com/design/qjhcxFEEVus6BqsI1jZmX8/fresh-gro?node-id=0-1&t=ISgZivQWQMWmOsmE-1"
    
            },
  ];


  /* ================= RESPONSIVE ================= */
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const goPrev = () => swiperRef.current?.slidePrev()
  const goNext = () => swiperRef.current?.slideNext()

  return (
    <section className="px-[5px] 
                            md:mt-[60px]
                            pb-38 md:pb-52  
                            bg-[#0F103F] 
                            relative max-w-[1000px] 
                            mx-auto">


      {/* RING — OUTSIDE CARD */}
      <img
        src={ring2}
        alt="ring"
        className="
      hidden md:block
      absolute
      top-[-120px]
      left-1/2
      -translate-x-1/2
      w-[80vw]
      h-[800px]
      max-w-none
      z-0
      opacity-40 
    "
      />

      {/* TITLE */}
      <div className="text-center px-4">
         <h2 className="text-3xl md:text-4xl font-bold mb-4">
  <span className="text-white">My </span>
  <span className="text-[#C961DE]">
    Recent work
  </span>
</h2>


        {/* <p className="text-gray-300 pb-5">
          Explore my latest projects
        </p> */}
      </div>

      {/* SWIPER WRAPPER */}
      <div className="relative  max-w-7xl lg:max-w-[950px]  mx-auto px-0 ">

        <Swiper
          slidesPerView={isMobile ? 1 : 3}
          centeredSlides
          loop
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          autoplay={{ delay: 8000, disableOnInteraction: false }}
          className="pb-16"
          modules={[Autoplay]}
        >
          {projects.map((item, index) => (
            <SwiperSlide
              key={index}
              className={`flex justify-center transition-all
                         ${activeIndex === index ? "z-20" : "z-10"}
                          `}
            >
              <div
                className={`
                    flex justify-center cursor-pointer
                    ${isMobile
                    ? "w-[75vw] sm:w-[80vw] md:w-[80vw] lg:w-[90vw] mx-auto"
                    : "w-[320px]"
                  }
                                    `}
              >
                 <a href={item.link} target="_blank">
                <ProjectCard
                  title={item.title}
                  subtitle={item.subtitle}
                  image={item.image}
                  isActive={activeIndex === index}
                  isMobile={isMobile}
                />
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/*  CUSTOM NAVIGATION (PARENT + SWIPER ) */}
        <button
          onClick={goPrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20
          bg-white/20 backdrop-blur-md p-3 rounded-full hover:scale-110 transition 
          ml-0 min-[500px]:ml-[10vw] md:ml-0 cursor-pointer"
        >
          <img src={prevIcon} alt="prev" className="w-4 h-4" />
        </button>

        <button
          onClick={goNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20
          bg-white/20 backdrop-blur-md p-3 rounded-full hover:scale-110 transition
          mr-0 min-[500px]:mr-[10vw] md:mr-0  cursor-pointer"
        >
          <img src={nextIcon} alt="next" className="w-4 h-4" />
        </button>

      </div>

      {/* EXPLORE WORK IMAGES */}
      <div className="relative mt-8 flex pl-[150px] justify-center cursor-pointer">
        <div
          onClick={() => navigate("/projects")}
          className="absolute w-[250px] h-[200px]">
          <img
            src={exploreText}
            alt="text"
            className="absolute top-[5px] left-[-80px] h-[17px] w-[100px]"
          />

          <img
            src={arrow}
            alt="arrow"
            className="absolute top-[5px] left-[20px]  h-[30px] w-[70px] "
          />


          <img
            src={personOnChair}
            alt="person"
            className="absolute top-[30px] left-[60px] h-[50px] w-[50px]"
          />

        </div>
      </div>


    </section>
  )
}

export default HomePageProjects
