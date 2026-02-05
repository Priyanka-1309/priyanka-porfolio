import React from "react"
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiFigma,
  SiAdobexd,
  SiAdobephotoshop,
  SiCoreldraw,
  SiCanva,
} from "react-icons/si"
import { FaMobileAlt } from "react-icons/fa"

const stack = [
  { name: "HTML", icon: SiHtml5, color: "text-orange-400" },
  { name: "CSS", icon: SiCss3, color: "text-blue-400" },
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-300" },
  { name: "Figma", icon: SiFigma, color: "text-pink-400" },
  { name: "Adobe XD", icon: SiAdobexd, color: "text-purple-400" },
  { name: "Photoshop", icon: SiAdobephotoshop, color: "text-blue-300" },
  { name: "CorelDRAW", icon: SiCoreldraw, color: "text-green-400" },
  { name: "Canva", icon: SiCanva, color: "text-sky-400" },
  { name: "Responsive", icon: FaMobileAlt, color: "text-emerald-400" },
]

function HomePageTechStack() {
  return (
    <section  className="bg-[#0F103F] pt-15 pb-0 overflow-hidden">

      
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-white">
          My <span className="text-[#C961DE]">Tech Stack</span>
        </h2>
        <p className="text-white/70 mt-3 text-sm">
          Tools I use to design & build digital products
        </p>
      </div>

      {/* GRID */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          
          {stack.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className="
                  tech-float
                  justify-self-center
                  flex items-center gap-3
                  px-5 py-3
                  rounded-full
                  bg-[#1C1D5E]/85
                  border border-white/10
                  text-white
                  cursor-pointer
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:shadow-[0_0_25px_rgba(201,97,222,0.45)]
                "
                style={{ animationDelay: `${index * 0.12}s` }}
              >
                <Icon size={20} className={item.color} />
                <span className="text-sm font-medium whitespace-nowrap">
                  {item.name}
                </span>
              </div>
            )
          })}

        </div>
      </div>

      {/* FLOAT ANIMATION */}
      <style>
        {`
          .tech-float {
            animation: float 5s ease-in-out infinite;
          }

          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-6px); }
            100% { transform: translateY(0px); }
          }
        `}
      </style>

    </section>
  )
}

export default HomePageTechStack
