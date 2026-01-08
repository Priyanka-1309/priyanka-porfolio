import React from "react"
import { motion } from "framer-motion"

import Sidebar from "../../components/Sidebar"
import ProjectCard from "../../components/projects/ProjectCard"

import weddingPlannerCover from "../../assets/images/projectImages/weddingPlannerCover.png"
import MetroClapCover from "../../assets/images/projectImages/MetroClapCover.png"
import MetroBuddyCover from "../../assets/images/projectImages/MetroBuddyCover.png"
import CRMCover from "../../assets/images/projectImages/CRMCover.png"
import designImg from "../../assets/images/projectImages/testImage.png"

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
    },
    {
      title: "Furniture Website🛋️",
      subtitle: "Modern Furniture E-Shop – Discover stylish furniture for every corner of your home.",
      titleColor: "#C961DE",
      subtitleColor: "#FFFFFF",
      image: designImg,
    },
    {
      title: "Shopping App🛒",
      subtitle: "Smart Shopping App – Seamless, user-friendly shopping at your fingertips.",
      titleColor: "#C961DE",
      subtitleColor: "#FFFFFF",
      image: designImg,
    },
    {
      title: "Valchron Ventures📈",
      subtitle: "Valchron Ventures – Trading Made Simple – Track, trade, and grow your investments.",
      titleColor: "#C961DE",
      subtitleColor: "#FFFFFF",
      image: designImg,
    },
    {
      title: "CRM App📊",
      subtitle: "Efficient CRM Solution – Streamlined customer management for modern businesses.",
      titleColor: "#C961DE",
      subtitleColor: "#FFFFFF",
      image: CRMCover,
    },
    {
      title: "Landing Page🌐",
      subtitle: "High-Converting Landing Page – Designed to grab attention and drive action.",
      titleColor: "#C961DE",
      subtitleColor: "#FFFFFF",
      image: designImg,
    },
    {
      title: "Variant Switch Animation",
      subtitle: "Interactive Variant Switch Animation – Engaging UI with smooth transitions.",
      titleColor: "#C961DE",
      subtitleColor: "#FFFFFF",
      image: designImg,
    },
    {
      title: "Metro Buddy📍",
      subtitle: "Metro Buddy – Discover Local Services Near You – Find what you need, close to home.",
      titleColor: "#C961DE",
      subtitleColor: "#FFFFFF",
      image: MetroBuddyCover,
    },
    {
      title: "Synexis Venture🏢",
      subtitle: "Synexis Venture – Professional Services Website – Clean, modern design for service companies.",
      titleColor: "#C961DE",
      subtitleColor: "#FFFFFF",
      image: designImg,
    },
    {
      title: "Job Portal App💼",
      subtitle: "Smart Job Portal App – Helping users find their dream job effortlessly.",
      titleColor: "#C961DE",
      subtitleColor: "#FFFFFF",
      image: designImg,
    },
    {
      title: "Metro Clap🛠️",
      subtitle: "Metro Clap – Local Services Marketplace – Book trusted professionals in minutes.",
      titleColor: "#C961DE",
      subtitleColor: "#FFFFFF",
      image: MetroClapCover,
    },
    {
      title: "Fresh Gro🥦",
      subtitle: "Fresh Gro – Online Grocery Shopping – Fresh groceries delivered at your doorstep.",
      titleColor: "#C961DE",
      subtitleColor: "#FFFFFF",
      image: designImg,
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
              <ProjectCard
                title={item.title}
                subtitle={item.subtitle}
                image={item.image}
                active={true}
                isMobile={false}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default Projects
