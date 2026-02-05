import React from 'react'
import { motion } from 'framer-motion'

import Sidebar from '../../components/Sidebar'
import ContactForm from '../../components/contact/ContactForm'
import HomePageHowIWork from '../../components/home/HomePageHowIWork'
import HomePageWhyWorkWithMe from '../../components/home/HomePageWhyWorkWithMe'
import HomePageOpenTo from '../../components/home/HomePageOpenTo'

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

function Contact() {
  return (
    <div className="bg-[#0F103F] min-h-screen flex">
      <Sidebar />

      <main className="flex-1 ml-[38px] md:ml-[50px] px-2 md:px-9 pb-12 space-y-4 md:space-y-7">

        <ContactForm />

        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <HomePageHowIWork />
        </motion.section>

        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <HomePageWhyWorkWithMe />
        </motion.section>

        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <HomePageOpenTo />
        </motion.section>
      </main>
    </div>
  )
}

export default Contact
