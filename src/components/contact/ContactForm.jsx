import React from "react"
import { motion } from "framer-motion"

import girlImage2 from "../../assets/images/girlImage2.png"
import mail from "../../assets/images/mail.png"
import phone from "../../assets/images/phone.png"
import ContactSubmitForm from "../contactSubmitForm/ContactSubmitForm"

/* 🔥 SCROLL ANIMATION VARIANT */
const sectionVariants = {
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

function ContactForm() {
  return (
    <section className="relative min-h-screen pt-[80px] md:pt-[200px] bg-[#0F103F] flex items-center justify-center">

      {/* MAIN CARD */}
      <motion.div
        className="
          relative z-10
          w-[90%] md:w-[80%] max-w-[900px]
          bg-[#2F2F8A99]
          rounded-2xl
          px-[20px] md:px-10 py-12
          grid grid-cols-1 md:grid-cols-2
          gap-10
          text-white
        "
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >

        {/* LEFT CHARACTER IMAGE */}
        <motion.img
          src={girlImage2}
          alt="girl sitting"
          className="hidden md:block absolute left-[-120px] top-[-330px] w-[280px] z-15"
          variants={imageVariants}
        />

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Get in touch</h2>
          <p className="text-sm text-white/80 leading-relaxed mb-6">
            I'm very approachable and would love to speak to you.
            Feel free to call, send me an email. Follow me on social
            media or simply complete the enquiry form.
          </p>

          <div className="space-y-4 text-sm">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10">
                <img
                  className='h-[25px] w-[25px] invert cursor-pointer'
                  src={phone}
                  alt='phone'
                />
              </span>
              <span className="text-[12px] md:text-[14px]">+91 7895763977</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10">
                <img
                  className='h-[12px] w-[12px] cursor-pointer'
                  src={mail}
                  alt='Mail'
                />
              </span>
              <span className="text-[12px] md:text-[14px]">priyankachndel348@gmail.com</span>
            </div>
          </div>
        </motion.div>

        {/* RIGHT FORM */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Send me a message</h2>

          {/* contact submit form using web3forms  */}
          <ContactSubmitForm/>

        </motion.div>

      </motion.div>
    </section>
  )
}

export default ContactForm
