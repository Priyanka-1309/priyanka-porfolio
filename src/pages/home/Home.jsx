import React from 'react'
import { motion } from 'framer-motion'

import Sidebar from '../../components/Sidebar'
import HomePgaeIntroduction from '../../components/home/HomePgaeIntroduction'
import HomePageExperience from '../../components/home/HomePageExperience'
import HomePageAboutMe from '../../components/home/HomePageAboutMe'
import HomePageContact from '../../components/home/HomePageContact'
import HomePageProjects from '../../components/home/HomePageProjects'
import HomePageTechStack from '../../components/home/HomePageTechStack'

/* SCROLL ANIMATION VARIANT */
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
    <div className='bg-[#0F103F]'>
      <Sidebar />

      <div className="ml-[38px] md:ml-[50px] pb-20">

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
          animate="visible"
          transition={{ delay: 0.2 }}
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

        {/* PROJECTS */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <HomePageProjects />
        </motion.div>

        {/* experience  */}
        <motion.div
        variants={sectionVariants}
          initial="hidden"
        whileInView="visible"
       viewport={{ once: true, amount: 0.2}}
         >
        <HomePageExperience />
         </motion.div>


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
    </div>
  )
}

export default Home
