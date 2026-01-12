import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/images/planetImg1.png'
import mode from '../../assets/images/lightMode.png'
// import modeLightText from "../../assets/images/lightModeText.png"

const Navbar = () => {
  const [open, setOpen] = useState(false)

  // Function to apply active styles
  const activeClass = ({ isActive }) =>
    isActive ? 'text-[#C961DE] transition' : 'hover:text-[#2954A3] transition'

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-[#0F103F] text-white py-4 flex items-center justify-center shadow-md z-40">
        <div className="absolute top-[0px] left-[0px] hidden md:block">
          <img src={logo} alt="Logo" className="h-30 sm:h-30 lg:h-50 xl:h-60 w-auto" />
        </div>

        <button onClick={() => setOpen(true)} className="absolute left-4 md:hidden text-2xl">☰</button>

        {/* Center links */}
        <ul className="hidden md:flex lg:space-x-[119px] space-x-[32px]">
          <li>
            <NavLink to="/" className={activeClass}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" className={activeClass}>About me</NavLink>
          </li>
          <li>
            <NavLink to="/projects" className={activeClass}>Projects</NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={activeClass}>Contact</NavLink>
          </li>
        </ul>

        <div className="absolute top-[0px] right-[0px]">
          <img src={mode} alt="Mode" className="h-30 sm:h-30 lg:h-50 xl:h-60 w-auto" />
          
        </div>
      </nav>
    {/* to take space on desktop and tablet */}
    <div className='hidden md:block h-[50px] z-42'/>


      {/* Mobile slide menu */}
      <div className={`fixed top-0 left-0 h-full w-[150px] bg-[#1C1C65] text-white transform ${open ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-50 md:hidden
      rounded-r-[16px]
      `}>
        <button onClick={() => setOpen(false)} className="absolute top-4 right-4 text-2xl">✕</button>

        <ul className="flex flex-col items-center justify-center h-full space-y-8 text-lg">
          <li onClick={() => setOpen(false)}>
            <NavLink to="/" className={activeClass}>Home</NavLink>
          </li>
          <li onClick={() => setOpen(false)}>
            <NavLink to="/about" className={activeClass}>About me</NavLink>
          </li>
          <li onClick={() => setOpen(false)}>
            <NavLink to="/projects" className={activeClass}>Projects</NavLink>
          </li>
          <li onClick={() => setOpen(false)}>
            <NavLink to="/contact" className={activeClass}>Contact</NavLink>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Navbar
