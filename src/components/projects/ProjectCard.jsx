import React from "react"

function ProjectCard({ title, image, active, isMobile }) {
  return (
    <div
      className="
        relative overflow-hidden
        transition-all duration-500 ease-out
        rounded-[28px] md:rounded-[36px] lg:rounded-[44px]
       h-[270px] w-[260px]
md:h-[300px] md:w-[300px]
lg:h-[340px] lg:w-[340px]
xl:h-[380px] xl:w-[380px]

        bg-white/10 backdrop-blur-xl
      "
    >
      {/* IMAGE */}
      <div className="absolute inset-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-top"
        />
      </div>

      {/* ACTIVE GLOW */}
      <div className="absolute inset-0 rounded-[40px] ring-1 ring-white/30" />

      {/* BOTTOM GLASS */}
      <div className="
        absolute bottom-0 left-0 right-0
        bg-white/15 backdrop-blur-xl
        px-[10px] py-4
      ">
        <h3 className="text-white text-lg font-semibold">
          {title}
        </h3>
      </div>
    </div>
  )
}

export default ProjectCard
