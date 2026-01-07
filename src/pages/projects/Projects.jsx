import React from "react"
import { motion } from "framer-motion"

import Sidebar from "../../components/Sidebar"
import ProjectCard from "../../components/projects/ProjectCard"

import img1 from "../../assets/images/projectImages/testImage.png"
import img2 from "../../assets/images/projectImages/testImage.png"
import img3 from "../../assets/images/projectImages/testImage.png"
import img4 from "../../assets/images/projectImages/testImage.png"

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
    { title: "Design Project", image: img1 },
    { title: "UI Project", image: img2 },
    { title: "Mockup Project", image: img3 },
    { title: "Brand Project", image: img4 },
  ]

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
