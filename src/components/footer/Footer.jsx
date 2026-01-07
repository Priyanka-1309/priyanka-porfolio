import React from "react"
import planet3 from "../../assets/images/planetImage3.png"
import planet4 from "../../assets/images/planetImage4.png"

import homeIcon from "../../assets/images/home.png"
import aboutIcon from "../../assets/images/profile.png"
import workIcon from "../../assets/images/projects.png"
import contactIcon from "../../assets/images/phone.png"

function Footer() {
  return (
    <footer className="relative bg-[#1C1C65] overflow-visible">
      
      {/* TOP BORDER */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-blue-400/70" />

      {/* PLANETS */}
      <img
        src={planet3}
        alt=""
        className="absolute left-0 top-[-100px] w-[220px] hidden md:block pointer-events-none"
      />

      <img
        src={planet4}
        alt=""
        className="absolute right-0 bottom-0 w-[700px] pointer-events-none opacity-30 md:opacity-60 "
      />

      {/* CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 text-white">

        {/* NAV LINKS */}
        <div
          className="
            flex flex-wrap justify-center gap-x-12 gap-y-6
            text-sm
          "
        >
          {/* HOME */}
          <div className="flex items-center gap-2 cursor-pointer">
            <img
              src={homeIcon}
              className="h-[26px] w-[26px] brightness-0 invert"
            />
            <span>Home</span>
          </div>

          {/* PROJECTS */}
          <div className="flex items-center gap-2 cursor-pointer">
            <img
              src={workIcon}
              className="h-[26px] w-[26px] brightness-0 invert"
            />
            <span>Projects</span>
          </div>

          {/* ABOUT */}
          <div className="flex items-center gap-2 cursor-pointer">
            <img
              src={aboutIcon}
              className="h-[26px] w-[26px] brightness-0 invert"
            />
            <span>About</span>
          </div>

          {/* CONTACT */}
          <div className="flex items-center gap-2 cursor-pointer">
            <img
              src={contactIcon}
              className="h-[26px] w-[26px] brightness-0 invert"
            />
            <span>Contact</span>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="mt-10 border-t border-white/20" />

        {/* BOTTOM TEXT */}
        <div className="mt-6 flex justify-center md:justify-end text-xs text-white/60">
          <span className="hover:text-white cursor-pointer">
            Terms of Service
          </span>
          <span className="mx-2">-</span>
          <span className="hover:text-white cursor-pointer">
            Privacy Policy
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
