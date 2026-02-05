import React from "react"
import planet3 from "../../assets/images/planetImage3.png"
import planet4 from "../../assets/images/planetImage4.png"


import homeIcon from "../../assets/images/home.png"
import aboutIcon from "../../assets/images/profile.png"
import workIcon from "../../assets/images/projects.png"
import contactIcon from "../../assets/images/phone.png"

function Footer() {
  return (
    <footer className="relative bg-[#1C1C65] overflow-hidden">

      {/* TOP GLOW LINE */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#C961DE] to-transparent opacity-80" />

      {/* PLANETS */}
      <img
        src={planet3}
        alt=""
        className="absolute left-0 top-[-120px] w-[220px] hidden md:block pointer-events-none opacity-80"
      />

      <img
        src={planet4}
        alt=""
        className="absolute right-0 bottom-[-120px] w-[700px] pointer-events-none opacity-40"
      />

      {/* CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 text-white">

        {/* NAV LINKS */}
        <div className="flex flex-wrap justify-center gap-x-14 gap-y-6 text-sm">
          {[
            { icon: homeIcon, label: "Home" },
            { icon: workIcon, label: "Projects" },
            { icon: aboutIcon, label: "About" },
            { icon: contactIcon, label: "Contact" },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2 cursor-pointer group"
            >
              <img
                src={item.icon}
                className="h-[26px] w-[26px] brightness-0 invert group-hover:scale-110 transition"
              />
              <span className="group-hover:text-[#C961DE] transition">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* DIVIDER */}
        <div className="mt-12 border-t border-white/20" />

        {/* BOTTOM AREA */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/60">

          {/* DESIGN CREDIT */}
          <p className="text-center md:text-left">
            Designed & Developed {" "}
            <span className="text-[#C961DE]">♥</span> by{" "}
            <span className="text-white font-medium">
              Priyanka Chandel
            </span>
          </p>

          {/* POLICIES
          <div className="flex gap-3">
            <span className="hover:text-white cursor-pointer transition">
              Terms of Service
            </span>
            <span className="opacity-40">|</span>
            <span className="hover:text-white cursor-pointer transition">
              Privacy Policy
            </span>
          </div> */}
        </div>
      </div>
    </footer>
  )
}

export default Footer
