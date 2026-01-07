import React from 'react'
import { NavLink } from 'react-router-dom'
import home from "../assets/images/home.png"
import profile from "../assets/images/profile.png"
import projects from "../assets/images/projects.png"
import call from "../assets/images/phone.png"
// import search from "../assets/images/search.png"

function Sidebar() {
    return (
        <div className="fixed top-1/2 left-0 -translate-y-1/2 h-[60vh] w-[38px] md:w-[60px] bg-[#FFFFFF99] flex items-center justify-center rounded-r-[50px] z-41">
            <div className='flex flex-col gap-[9vh]'>



                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        `block cursor-pointer ${isActive ? "filter brightness-0 invert" : "filter brightness-0"}`
                    }
                >
                    <img src={home} alt="Home" className="w-8 h-8" />
                </NavLink>

                <NavLink
                    to="/about"
                    className={({ isActive }) =>
                        `block cursor-pointer ${isActive ? "filter brightness-0 invert" : "filter brightness-0"}`
                    }
                >
                    <img src={profile} alt="Profile" className="w-8 h-8" />
                </NavLink>

                <NavLink
                    to="/projects"
                    className={({ isActive }) =>
                        `block cursor-pointer ${isActive ? "filter brightness-0 invert" : "filter brightness-0"}`
                    }
                >
                    <img src={projects} alt="Projects" className="w-8 h-8" />
                </NavLink>

                <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                        `block cursor-pointer ${isActive ? "filter brightness-0 invert" : "filter brightness-0"}`
                    }
                >
                    <img src={call} alt="Contact" className="w-8 h-8" />
                </NavLink>
                {/* <NavLink
                    to="/search"
                    className={({ isActive }) =>
                        `block cursor-pointer ${isActive ? "ilter brightness-0" : "filter brightness-0"}`
                    }
                >
                    <img src={search} alt="Search" className="w-8 h-8" />
                </NavLink> */}

            </div>
        </div>
    )
}

export default Sidebar
