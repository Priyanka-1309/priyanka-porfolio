import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/planetImg1.png';
import mode from '../../assets/images/lightMode.png';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const activeClass = ({ isActive }) =>
    isActive ? 'text-[#C961DE] transition' : 'hover:text-[#C961DE] transition';

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-[#0F103F] text-white py-5 px-20 flex items-center justify-end shadow-md z-40">
        {/* Desktop links + light mode aligned to end */}
        <ul className="hidden md:flex items-center space-x-8 lg:space-x-20">
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
          <div className="absolute top-[0px] right-[0px]"> <img src={mode} alt="Mode" className="h-30 sm:h-30 lg:h-50 xl:h-60 w-auto" /> </div>
        </ul>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden text-2xl ml-auto"
        >
          ☰
        </button>
      </nav>

      {/* Spacer */}
      <div className="hidden md:block h-16" />

      {/* Mobile slide menu */}
      <div
        className={`fixed top-0 left-0 h-full w-40 bg-[#1C1C65] text-white transform ${
          open ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out z-50 rounded-r-lg md:hidden`}
      >
        {/* Close button */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 text-2xl"
        >
          ✕
        </button>

        {/* Mobile links */}
        <ul className="flex flex-col items-center justify-center h-full space-y-6 text-lg">
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
  );
};

export default Navbar;
