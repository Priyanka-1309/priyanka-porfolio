"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

const experience = [
  {
    role: "UI/UX Design Intern",
    company: "CMT AI",
    duration: "June – September",
    description:
      "Contributed to product design, wireframes, and high-fidelity UI screens using Figma while collaborating with cross-functional teams.",
  },
  {
    role: "UI/UX Designer",
    company: "Synexis Venture",
    duration: "September – Present",
    description:
      "Designing scalable and user-focused digital products, translating requirements into intuitive interfaces while maintaining design consistency.",
  },
  // {
  //   role: "Freelance Designer",
  //   company: "Self-Employed",
  //   duration: "2024 – Present",
  //   description:
  //     "Providing UI/UX design solutions to startups, creating responsive websites and apps with user-centered designs.",
  // },
];

export default function HomePageExperience() {
  return (
    <section className="bg-[#0F103F] py-10 px-4 md:px-6">
      <div className="max-w-5xl mx-auto text-white">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            My <span className="text-[#C961DE]">Experience</span>
          </h2>
          <p className="text-white/70 mt-2 text-lg">Professional UI/UX journey</p>
        </motion.div>

        {/* Experience Cards */}
        <div className="flex flex-col gap-8">
          {experience.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6"
            >
              {/* Icon */}
              <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-[#C961DE] to-[#2954A3] flex items-center justify-center text-white shadow-md">
                <FaBriefcase className="text-lg md:text-xl" />
              </div>

              {/* Card Content */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="flex-1 bg-[#1C1D5E]/70 backdrop-blur-md p-5 md:p-6 rounded-2xl border border-white/20"
              >
                <h3 className="text-lg md:text-xl font-semibold text-[#C961DE] mb-1">{item.role}</h3>
                <p className="text-sm md:text-base text-white/80 mb-2">
                  {item.company} • {item.duration}
                </p>
                <p className="text-sm md:text-base text-white/90 leading-relaxed">{item.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
