import React from "react"
import { motion } from "framer-motion"
import { FaBriefcase } from "react-icons/fa"

function HomePageExperience() {
  const experience = [
    {
      role: "UI/UX Design Intern",
      company: "CMT AI",
      duration: "June – September",
      description:
        "During my 3-month UI/UX design internship at CMT AI, I actively contributed to real-world product design projects by working closely with cross-functional teams. I was involved in the complete design process, from understanding user requirements and defining user flows to creating wireframes and high-fidelity UI screens using Figma. This experience strengthened my foundation in user-centered design and problem-solving.",
    },
    {
      role: "UI/UX Designer",
      company: "Synexis Venture",
      duration: "September – Present",
      description:
       "Currently working as a UI/UX Designer at Synexis Venture, designing modern, scalable, and user-focused digital products for web and mobile platforms. I collaborate closely with developers and stakeholders to translate requirements into intuitive interfaces, maintain design consistency, and deliver impactful user experiences that balance aesthetics with functionality.",
    }
  ]

  return (
    <section className="bg-[#0F103F] py-20 flex justify-center">
      <div className="w-[90%] max-w-[1000px] text-white">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold tracking-wide ">
            My <span className="text-[#C961DE]">Experience</span>
          </h2>
          <p className="text-white/70 mt-3">
            My journey as a UI/UX designer
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative pl-10 space-y-12">

          {/* Vertical Line */}
          <div className="absolute left-4 top-6 h-140 w-[2px] bg-gradient-to-b from-[#C961DE] to-[#2954A3]" />

          {experience.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              {/* Dot + Icon */}
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="
                  absolute
                  -left-[45px]
                  top-6
                  w-10
                  h-10
                  rounded-full
                  bg-gradient-to-br
                  from-[#C961DE]
                  to-[#2954A3]
                  flex
                  items-center
                  justify-center
                  shadow-lg
                "
              >
                <FaBriefcase className="text-white text-sm" />
              </motion.div>

              {/* Gradient Border Card */}
              <div className="p-[1.5px] rounded-xl bg-gradient-to-br from-[#C961DE] to-[#2954A3]">
                <div className="bg-[#1C1D5E] rounded-xl p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-semibold">
                    {item.role}
                  </h3>

                  <p className="text-sm text-white/80 mt-1">
                    {item.company} • {item.duration}
                  </p>

                  <p className="text-white/90 mt-4 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default HomePageExperience

