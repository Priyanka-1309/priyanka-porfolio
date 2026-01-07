import React from "react"

function ProjectCard({ title,subtitle, image, active, isMobile }) {
  return (
    <div
      className={`
        
        relative overflow-hidden
        transition-all duration-500 ease-out
        rounded-[28px] md:rounded-[36px] lg:rounded-[44px]
        ${isMobile ? "h-[300px] w-[270px]" : "h-[270px] w-[260px]"}
        bg-white/10 backdrop-blur-xl
      `}
      style={{
        transform: active
          ? "scale(1)"
          : isMobile
            ? "scale(0.9)"
            : "scale(0.85)",
      }}
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
      {active && (
        <>
          <div className="absolute inset-0 rounded-[40px] ring-1 ring-white/30" />
        </>
      )}

      {/* BOTTOM GLASS CONTENT */}
      <div
        className="
          absolute bottom-0 left-0 right-0
          bg-white/15 backdrop-blur-xl
          px-5 py-4 md:px-6 md:py-5
        "
      >
        <h3 className="text-[#C961DE] text-lg md:text-xl font-semibold">
          {title}
        </h3>
        <h3 className="text-white text-[10px] md:text-[10px] font-semibold">
          {subtitle}
        </h3>
      </div>
    </div>
  )
}

export default ProjectCard
