import React from "react"
import { motion } from "framer-motion"

import Sidebar from "../../components/Sidebar"
import ProjectCard from "../../components/projects/ProjectCard"

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

/*  FRAMER MOTION VARIANTS */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
}

function Projects() {
  const projects = [

     {
          title: "Wedding Planner💍",
          subtitle: "Elegant Wedding Planner Platform – Helping couples plan their dream day with ease.",
          titleColor: "#C961DE",  // Wedding Planner title color
          subtitleColor: "#FFFFFF", // Subtitle color
          image: weddingPlannerCover,
          link:"https://www.figma.com/design/KdZTBrtz6etTiyHk9hBtoJ/wedding--planner?node-id=0-1&t=YYdxzJO9hDkVfLRF-1"
        },
        {
          title: "Furniture Website🛋️",
          subtitle: "Modern Furniture E-Shop – Discover stylish furniture for every corner of your home.",
          titleColor: "#C961DE",
          subtitleColor: "#FFFFFF",
          image: furnitureCover,
          link:"https://www.figma.com/design/fazoJ7tEqOpdkO4xgrxqm5/Furniture-website--Community-?node-id=0-1&t=5YGLi68xPZhTGRNw-1"
        
        },
        {
          title: "Shopping App🛒",
          subtitle: "Smart Shopping App – Seamless, user-friendly shopping at your fingertips.",
          titleColor: "#C961DE",
          subtitleColor: "#FFFFFF",
          image:shoppingappcover,
          link:"https://www.figma.com/design/lsdl2PkQqZkhyyOHZwpAcI/shopping-app?node-id=0-1&t=8jR3zIZ5p5qzTcag-1"

        },
        {
          title: "Valchron Ventures📈",
          subtitle: "Valchron Ventures – Trading Made Simple – Track, trade, and grow your investments.",
          titleColor: "#C961DE",
          subtitleColor: "#FFFFFF",
          image:valchronVenture,
          link:"https://www.figma.com/design/xmBDaVPtMmsCVlgJTmR5Pc/Valchron-Ventures-LLC?node-id=336-499&t=6zqsn0Bge6reEb0S-1"

        },
        {
          title: "CRM App📊",
          subtitle: "Efficient CRM Solution – Streamlined customer management for modern businesses.",
          titleColor: "#C961DE",
          subtitleColor: "#FFFFFF",
          image: CrmCover,
          link:"https://www.figma.com/design/6mKbHEDmXAaqslBCPcDUqy/S2-HIVE-SCHOOL-UI?node-id=0-1&t=y64TTICHnb4ui2xq-1"

        },
        {
          title: "Landing Page🌐",
          subtitle: "High-Converting Landing Page – Designed to grab attention and drive action.",
          titleColor: "#C961DE",
          subtitleColor: "#FFFFFF",
          image:landingPageCover,
          link:"https://www.figma.com/design/ydsQwgib6fspv6zjLJUczK/face-drop-landing-page?node-id=0-1&t=mnC4jsLd0XxxsT99-1"

        },
        {
          title: "Variant Switch Animation",
          subtitle: "Interactive Variant Switch Animation – Engaging UI with smooth transitions.",
          titleColor: "#C961DE",
          subtitleColor: "#FFFFFF",
          image:variantSwitchAnimationCover,
          link:"https://www.figma.com/design/zjajRnhZYuBjPWXg3fGWd0/Variant-Switch-Animation?node-id=0-1&t=g6pC46iqVKQVFhh6-1"

        },
        {
          title: "Metro Buddy📍",
          subtitle: "Metro Buddy – Discover Local Services Near You – Find what you need, close to home.",
          titleColor: "#C961DE",
          subtitleColor: "#FFFFFF",
          image: MetroBuddyCover,
          link:"https://www.figma.com/design/UGbdSmQFIlMbFXF9kwOvww/Metro-buddy?node-id=0-1&t=vNyLK7i6VnMOxvTt-1"

        },
        {
          title: "Synexis Venture🏢",
          subtitle: "Synexis Venture – Professional Services Website – Clean, modern design for service companies.",
          titleColor: "#C961DE",
          subtitleColor: "#FFFFFF",
          image:synexisventureCover,
          link:"https://www.figma.com/design/DNDTOMjkR9eDeFiJmg9DTA/synexis-venture?node-id=0-1&t=ErxO7NXiNQkZrfd2-1"

        },
        {
          title: "Job Portal App💼",
          subtitle: "Smart Job Portal App – Helping users find their dream job effortlessly.",
          titleColor: "#C961DE",
          subtitleColor: "#FFFFFF",
          image:jobSeekerCover,
          link:"https://www.figma.com/design/K0J7tFedWx5fnBQMmkJgMB/Job-Portal-App?node-id=0-1&t=YlIKoXGKSLwXQev3-1"

        },
        {
          title: "Metro Clap🛠️",
          subtitle: "Metro Clap – Local Services Marketplace – Book trusted professionals in minutes.",
          titleColor: "#C961DE",
          subtitleColor: "#FFFFFF",
          image: MetroClapCover,
          link:"https://www.figma.com/design/pM03LsQlIWNLyGqpknMSFL/Metro-Clap?node-id=0-1&t=wHxMb7UPQ4NtvWCL-1"

        },
        {
          title: "Fresh Gro🥦",
          subtitle: "Fresh Gro – Online Grocery Shopping – Fresh groceries delivered at your doorstep.",
          titleColor: "#C961DE",
          subtitleColor: "#FFFFFF",
          image:freshGroCover,
          link:"https://www.figma.com/design/qjhcxFEEVus6BqsI1jZmX8/fresh-gro?node-id=0-1&t=ISgZivQWQMWmOsmE-1"

        },
  ];
  return (
    <div className="bg-[#0F103F] min-h-screen">
      <Sidebar />

      <div className="ml-[25px] md:ml-[50px] px-6 py-16 flex flex-col items-center">

        {/* Animated Heading */}
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-white text-center mb-8   md:mb-16 tracking-wide"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          My <span className="text-gradient bg-gradient-to-r from-[#C961DE] to-[#2954A3] bg-clip-text text-transparent">Projects</span>
        </motion.h1>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-12 max-w-[1000px] w-full"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <a href={item.link} target="_blank">
              <ProjectCard
                title={item.title}
                subtitle={item.subtitle}
                image={item.image}
                active={true}
                isMobile={false}
              />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default Projects
