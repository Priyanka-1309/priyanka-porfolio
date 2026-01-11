import React, { useState, useEffect, useRef } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import "swiper/css"

import weddingPlannerCover from "../../assets/images/projectsImage/weddingPlannerCover.png"
import MetroClapCover from "../../assets/images/projectsImage/metroClapCover.png"
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
          link:"https://portfolio-mocha-beta-97.vercel.app"

    },
    {
      title: "Furniture Website🛋️",
      subtitle: "Modern Furniture E-Shop – Discover stylish furniture for every corner of your home.",
      titleColor: "#C961DE",
      subtitleColor: "#FFFFFF",
      image: furnitureCover,
          link:"https://portfolio-mocha-beta-97.vercel.app"

    },
    {
      title: "Shopping App🛒",
      subtitle: "Smart Shopping App – Seamless, user-friendly shopping at your fingertips.",
      titleColor: "#C961DE",
      subtitleColor: "#FFFFFF",
      image:shoppingappcover,
          link:"https://portfolio-mocha-beta-97.vercel.app"

    },
    {
      title: "Valchron Ventures📈",
      subtitle: "Valchron Ventures – Trading Made Simple – Track, trade, and grow your investments.",
      titleColor: "#C961DE",
      subtitleColor: "#FFFFFF",
      image:valchronVenture,
          link:"https://portfolio-mocha-beta-97.vercel.app"

    },
    {
      title: "CRM App📊",
      subtitle: "Efficient CRM Solution – Streamlined customer management for modern businesses.",
      titleColor: "#C961DE",
      subtitleColor: "#FFFFFF",
      image: MetroBuddyCover,
          link:"https://portfolio-mocha-beta-97.vercel.app"

    },
    {
      title: "Landing Page🌐",
      subtitle: "High-Converting Landing Page – Designed to grab attention and drive action.",
      titleColor: "#C961DE",
      subtitleColor: "#FFFFFF",
      image:landingPageCover,
          link:"https://portfolio-mocha-beta-97.vercel.app"

    },
    {
      title: "Variant Switch Animation",
      subtitle: "Interactive Variant Switch Animation – Engaging UI with smooth transitions.",
      titleColor: "#C961DE",
      subtitleColor: "#FFFFFF",
      image:variantSwitchAnimationCover,
          link:"https://portfolio-mocha-beta-97.vercel.app"

    },
    {
      title: "Metro Buddy📍",
      subtitle: "Metro Buddy – Discover Local Services Near You – Find what you need, close to home.",
      titleColor: "#C961DE",
      subtitleColor: "#FFFFFF",
      image: MetroBuddyCover,
          link:"https://portfolio-mocha-beta-97.vercel.app"

    },
    {
      title: "Synexis Venture🏢",
      subtitle: "Synexis Venture – Professional Services Website – Clean, modern design for service companies.",
      titleColor: "#C961DE",
      subtitleColor: "#FFFFFF",
      image:synexisventureCover,
          link:"https://portfolio-mocha-beta-97.vercel.app"

    },
    {
      title: "Job Portal App💼",
      subtitle: "Smart Job Portal App – Helping users find their dream job effortlessly.",
      titleColor: "#C961DE",
      subtitleColor: "#FFFFFF",
      image:jobSeekerCover,
          link:"https://portfolio-mocha-beta-97.vercel.app"

    },
    {
      title: "Metro Clap🛠️",
      subtitle: "Metro Clap – Local Services Marketplace – Book trusted professionals in minutes.",
      titleColor: "#C961DE",
      subtitleColor: "#FFFFFF",
      image: MetroClapCover,
          link:"https://portfolio-mocha-beta-97.vercel.app"

    },
    {
      title: "Fresh Gro🥦",
      subtitle: "Fresh Gro – Online Grocery Shopping – Fresh groceries delivered at your doorstep.",
      titleColor: "#C961DE",
      subtitleColor: "#FFFFFF",
      image:freshGroCover,
          link:"https://portfolio-mocha-beta-97.vercel.app"

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
                            md:mt-[180px]
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
      top-[-320px]
      left-1/2
      -translate-x-1/2
      w-[120vw]
      h-[1100px]
      max-w-none
      z-0
      opacity-40 
    "
      />

      {/* TITLE */}
      <div className="text-center px-4">
        <h2 className="text-white text-3xl md:text-4xl font-bold mb-3">
          My recent work
        </h2>
        <p className="text-gray-300 pb-5">
          Explore my latest projects
        </p>
      </div>

      {/* SWIPER WRAPPER */}
      <div className="relative  max-w-7xl lg:max-w-[950px]  mx-auto px-0 ">

        <Swiper
          slidesPerView={isMobile ? 1 : 3}
          centeredSlides
          loop
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
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
            className="absolute top-[30px] left-[60px] h-[80px] w-[80px]"
          />

        </div>
      </div>


    </section>
  )
}

export default HomePageProjects
