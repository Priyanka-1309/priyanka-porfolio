
import React from 'react'
import { motion } from 'framer-motion'

import HomePgaeIntroduction from '../../components/home/HomePgaeIntroduction'
import HomePageService from '../../components/home/HomePageService'
import HomePageAboutMe from '../../components/home/HomePageAboutMe'
import HomePageHowIDo from '../../components/home/HomePageHowIDo'
import HomePageCaseStudies from '../../components/home/HomePageCaseStudies'
import HomePageContact from '../../components/home/HomePageContact'
import HomePageTechStack from '../../components/home/HomePageTechStack'

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
}

function Home() {
  return (
    <div className="bg-white">

      {/* INTRO */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <HomePgaeIntroduction />
      </motion.div>

      {/* ABOUT */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <HomePageAboutMe />
      </motion.div>

      {/* TECH STACK */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <HomePageTechStack />
      </motion.div>

      {/* HOW I DO */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <HomePageHowIDo />
      </motion.div>

      {/* CASE STUDIES */}
      <div>
        <HomePageCaseStudies />
      </div>

      {/* SERVICES */}
      {/* Important: No motion.div wrapper here */}
      <div>
        <HomePageService />
      </div>

      {/* CONTACT */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <HomePageContact />
      </motion.div>

    </div>
  )
}

export default Home
