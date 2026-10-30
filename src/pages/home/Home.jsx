import React from 'react'
import { motion } from 'framer-motion'

// import Sidebar from '../../components/Sidebar'
import HomePgaeIntroduction from '../../components/home/HomePgaeIntroduction'
import HomePageService from '../../components/home/HomePageService'
import HomePageAboutMe from '../../components/home/HomePageAboutMe'
import HomePageHowIDo from '../../components/home/HomePageHowIDo'
// import HomePageHowIWork from '../../components/home/HomePageHowIWork'
import HomePageCaseStudies from '../../components/home/HomePageCaseStudies'
import HomePageContact from '../../components/home/HomePageContact'
// import HomePageProjects from '../../components/home/HomePageProjects'
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
    <div className='bg-[#fff]'>
      {/* <Sidebar /> */}

      <div >

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

        {/* How I Do  */}
        <motion.div
        variants={sectionVariants}
          initial="hidden"
        whileInView="visible"
       viewport={{ once: true, amount: 0.2}}
         >
        <HomePageHowIDo />
         </motion.div>
         
  {/* HowCaseStudies*/}
        <div>
        <HomePageCaseStudies />
        </div>

         {/* How I Work  */}
        <motion.div
        variants={sectionVariants}
          initial="hidden"
        whileInView="visible"
       viewport={{ once: true, amount: 0.2}}
         >
   
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

        {/* services */}
        <motion.div
        variants={sectionVariants}
          initial="hidden"
        whileInView="visible"
       viewport={{ once: true, amount: 0.2}}
         >
        <HomePageService />
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
