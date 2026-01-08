import React from "react"
import { motion } from "framer-motion"
import { FaImages, FaArrowRight } from "react-icons/fa"

function ProjectCard({ title, subtitle ,  image }) {
  return (
    // md:h-[300px] md:w-[300px] 
    <motion.div
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      className="
        relative overflow-hidden cursor-pointer
        transition-all duration-500 ease-out
        rounded-[28px] md:rounded-[36px] lg:rounded-[44px]
        h-[265px] w-[270px]
        bg-black/20 backdrop-blur-xl
        group
        "
    >
      {/* IMAGE */}
      <img
        src={image}
        alt={title}
        className="
      w-full h-full
      object-contain object-top
      transition-transform duration-700 group-hover:scale-110
    "
      />

      {/* GALLERY BADGE */}
      <div className="
        absolute top-4 left-4
        flex items-center gap-2
        bg-black/60 backdrop-blur
        text-white text-xs px-3 py-1 rounded-full
      ">
        <FaImages size={14} />

      </div>


      {/* BOTTOM GLASS */}
      <div className="
        absolute bottom-0 left-0 right-0
        bg-black/15 backdrop-blur-xl
        px-4 py-4
">
        <h3 className="text-[#C961DE] text-lg md:text-xl font-semibold">
          {title}
        </h3>
        <h3 className="text-white text-[10px] md:text-[10px] font-semibold">
          {subtitle}
        </h3>

      </div>
    </motion.div>
  )
}

export default ProjectCard
