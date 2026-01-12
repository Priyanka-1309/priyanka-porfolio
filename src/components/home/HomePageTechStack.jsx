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


function HomePageTechStack() { 
  const stack = [
  { name: "HTML", icon: SiHtml5, color: "text-orange-500" },
  { name: "CSS", icon: SiCss3, color: "text-blue-500" },
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },

  { name: "Figma", icon: SiFigma, color: "text-pink-500" },
 
  { name: "Adobe XD", icon: SiAdobexd, color: "text-purple-500" },
  { name: "Adobe Photoshop", icon: SiAdobephotoshop, color: "text-blue-400" },
  { name: "CorelDRAW", icon: SiCoreldraw, color: "text-green-500" },
  { name: "Canva", icon: SiCanva, color: "text-sky-400" },

  { name: "Responsive Design", icon: FaMobileAlt, color: "text-green-400" },
]



  return (
    <section className="bg-[#0F103F] pb-12 md:pt-28 flex justify-center">
      <div className="w-[90%] max-w-[1000px] text-white">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-serif font-bold tracking-wide">
            Tech <span className="text-[#C961DE]">Stack</span>
          </h2>
          <p className="text-white/70 mt-3">
            Tools & technologies I work with
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {stack.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className="
                  group
                  bg-[#1C1D5E]
                  rounded-xl
                  p-6
                  flex flex-col items-center justify-center
                  gap-3
                  cursor-pointer
                  transition
                  hover:scale-105
                  hover:bg-gradient-to-br hover:from-[#C961DE] hover:to-[#2954A3]
                "
              >
                <Icon
                  size={38}
                  className={`
                    ${item.color}
                    transition
                    group-hover:scale-110
                    group-hover:text-white
                  `}
                />
                <span className="text-sm md:text-base font-medium text-white">
                  {item.name}
                </span>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default HomePageTechStack
