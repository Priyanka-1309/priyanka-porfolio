import React from 'react'
import { motion } from 'framer-motion'
import boyImage from "../../assets/images/boyImage.png"
import girlImage from "../../assets/images/girlImage.png"
import diamond from "../../assets/images/diamond.png"
import searchAndNewspaper from "../../assets/images/searchAndNewspaper.png"
import ring1 from "../../assets/images/ring1.png"

/* 🔥 VARIANTS */
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

function AboutDetails() {
  return (
    <motion.div
      className="
        relative
        pb-[20px] md:pb-[20px]
        pt-[80px] md:pt-[40px]
        flex justify-center
      "
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >

      {/* searchAndNewspaper */}
      <motion.img
        src={searchAndNewspaper}
        alt='image'
        className='h-[250px] w-[250px] hidden md:block absolute left-[0px] top-0 lg:top-20'
        variants={imageVariants}
      />

      {/* RING */}
      <motion.img
        src={ring1}
        alt="ring"
        className="
          hidden md:block
          absolute
          bottom-[10px]
          left-1/2
          -translate-x-1/2
          w-[900px]
          max-w-none
          z-0
          opacity-40 
        "
        variants={imageVariants}
      />

      {/* CARD */}
      <motion.div
        className="
          relative
          w-[500px] md:w-[600px]
          min-h-[400px] md:h-[600px]
          rounded-[20px] md:rounded-full 
          bg-[linear-gradient(135deg,#C961DE,#2954A3)]
          flex flex-col items-center 
          py-[50px] md:py-[100px]
          px-[10px] md:px-10 
          mx-[15px] md:mx-5
          md:my-[80px]
        "
        variants={containerVariants}
      >

        {/* BOY IMAGE */}
        <motion.img
          src={girlImage}
          alt='girlImage'
          className='h-[800px] w-[280px] hidden md:block absolute left-[-200px] top-[-80px] z-15'
          variants={imageVariants}
        />

        {/* CONTENT */}
        <motion.h2
          className="text-3xl font-bold text-white mb-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          About Me
        </motion.h2>

        <motion.p
          className="text-white text-justify text-[14px] md:text-[18px] leading-relaxed md:pl-[50px] md:pr-[20px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          Hello! I’m Priyanka , I am a passionate UI/UX Designer with experience in creating intuitive, user-centric websites and mobile applications. Skilled in Figma, I have worked on diverse projects including wedding planner platforms, CRM systems, service websites, grocery apps, and job portals. I focus on combining usability, visual clarity, and strategy to deliver meaningful digital experiences that support both user needs and business goals. I’m always learning new things and improving my skills by working on different projects.
        </motion.p>

        {/* DIAMOND IMAGE */}
        <motion.img
          src={diamond}
          alt='diamond Image'
          className='h-[460px] w-[320px] hidden md:block absolute right-[-80px] top-[350px] z-15'
          variants={imageVariants}
        />

      </motion.div>
    </motion.div>
  )
}

export default AboutDetails
