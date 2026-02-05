import React from 'react'
import { motion } from 'framer-motion'

import HomePageExperience from "../Home/HomePageExperience"
import HomePageTechStack from "../Home/HomePageTechStack"

import girlImage from "../../assets/images/girlImage.png"
import diamond from "../../assets/images/diamond.png"
import searchAndNewspaper from "../../assets/images/searchAndNewspaper.png"
import ring1 from "../../assets/images/ring1.png"

/* ===== Motion Variants ===== */
const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

const imageVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

function AboutDetails() {
  return (
    <div className="bg-[#0F103F] overflow-hidden">

      {/* ================= ABOUT SECTION ================= */}
      <motion.section
        className="relative flex justify-center pt-16 md:pt-28 pb-16 md:pb-24"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >

        {/* Decorative Image */}
        <motion.img
          src={searchAndNewspaper}
          alt=""
          className="hidden md:block absolute left-0 top-16 h-[150px] opacity-80"
          variants={imageVariants}
        />

        {/* Ring */}
        <motion.img
          src={ring1}
          alt=""
          className="hidden md:block absolute bottom-[-40px] left-1/2 -translate-x-1/2 w-[780px] opacity-30"
          variants={imageVariants}
        />

        {/* Main Card */}
        <motion.div
          className="
            relative z-10
            w-[92%] max-w-[640px]
            rounded-[32px]
            bg-[linear-gradient(135deg,#C961DE,#2954A3)]
            px-6 md:px-12
            py-12 md:py-16
            text-center
            shadow-2xl
          "
          variants={sectionVariants}
        >

          {/* Girl Image */}
          <motion.img
            src={girlImage}
            alt=""
            className="hidden md:block absolute -left-[260px] -top-[150px] w-[420px]"
            variants={imageVariants}
          />

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8">
            About Me
          </h2>

          {/* Content */}
          <p className="text-white/90 text-[15px] md:text-[17px] leading-relaxed text-justify">
            I’m a passionate UI/UX Designer specializing in crafting responsive
            websites 💻 and intuitive mobile applications 📱. I’ve worked across
            multiple domains including e-commerce, job portals, service-based
            platforms, and NGO websites—always focusing on user-centric and
            visually refined design solutions.
            <br /><br />
            Currently working at{" "}
            <span className="text-[#FFD6FF] font-semibold">
              Synexis Venture
            </span>{" "}
            🚀, I collaborate closely with developers to transform ideas into
            scalable, high-impact digital experiences with strong attention to
            usability, clarity, and clean visual aesthetics ✨.
          </p>

          {/* Diamond */}
          <motion.img
            src={diamond}
            alt=""
            className="hidden md:block absolute -right-[240px] bottom-[-110px] w-[240px]"
            variants={imageVariants}
          />
        </motion.div>
      </motion.section>

      {/* ================= EXPERIENCE ================= */}
      <motion.section
        className="mt-14 md:mt-20"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        <HomePageExperience />
      </motion.section>

      {/* ================= TECH STACK ================= */}
      <motion.section
        className="mt-12 md:mt-16 pb-20"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        <HomePageTechStack />
      </motion.section>

    </div>
  )
}

export default AboutDetails
