import React from 'react'
import { motion } from 'framer-motion'

import Sidebar from '../../components/Sidebar'
import HomePgaeIntroduction from '../../components/home/HomePgaeIntroduction'
import HomePageExperience from '../../components/home/HomePageExperience'
// import HomePageAboutMe from '../../components/home/HomePageAboutMe'
import HomePageHowIDo from '../../components/home/HomePageHowIDo'
import HomePageHowIWork from '../../components/home/HomePageHowIWork'
import HomePageCaseStudies from '../../components/home/HomePageCaseStudies'
import HomePageContact from '../../components/home/HomePageContact'
import HomePageWhyWorkWithMe from '../../components/home/HomePageWhyWorkWithMe'
// import HomePageProjects from '../../components/home/HomePageProjects'
import HomePageTechStack from '../../components/home/HomePageTechStack'
import HomePageOpenTo from '../../components/home/HomePageOpenTo'

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

        {/* ABOUT
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
        >
          <HomePageAboutMe />
        </motion.div> */}


        {/* TECH STACK */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <HomePageTechStack />
        </motion.div>

        {/* How I Do  */}
        <motion.div
        variants={sectionVariants}
          initial="hidden"
        whileInView="visible"
       viewport={{ once: true, amount: 0.2}}
         >
        <HomePageHowIDo />
         </motion.div>

         {/* How I Work  */}
        <motion.div
        variants={sectionVariants}
          initial="hidden"
        whileInView="visible"
       viewport={{ once: true, amount: 0.2}}
         >
        <HomePageHowIWork />
         </motion.div>



  {/* HowCaseStudies*/}
        <motion.div
        variants={sectionVariants}
          initial="hidden"
        whileInView="visible"
       viewport={{ once: true, amount: 0.2}}
         >
        <HomePageCaseStudies />
         </motion.div>




        {/* PROJECTS */}
        {/* <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <HomePageProjects />
        </motion.div> */}

        {/* experience  */}
        <motion.div
        variants={sectionVariants}
          initial="hidden"
        whileInView="visible"
       viewport={{ once: true, amount: 0.2}}
         >
        <HomePageExperience />
         </motion.div>


       {/* WhyWorkWithMe*/}
        <motion.div
        variants={sectionVariants}
          initial="hidden"
        whileInView="visible"
       viewport={{ once: true, amount: 0.2}}
         >
        <HomePageWhyWorkWithMe />

         </motion.div>

 {/* OpenTo*/}
        <motion.div
        variants={sectionVariants}
          initial="hidden"
        whileInView="visible"
       viewport={{ once: true, amount: 0.2}}
         >
        <HomePageOpenTo />

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
