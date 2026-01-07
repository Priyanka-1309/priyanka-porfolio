import React from 'react'
import { Link } from 'react-router-dom'
import Sidebar from '../../components/Sidebar'

function NotFound() {
  return (
    <div className="bg-[#0F103F] min-h-screen flex">
      {/* Sidebar */}
      <Sidebar />

      {/* CONTENT AREA */}
      <div className="ml-[38px] md:ml-[50px] flex flex-col items-center justify-center flex-1 h-screen text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
          404 - Page Not Found
        </h1>
        <p className="mb-6 text-white text-lg md:text-xl">
          Sorry, the page you are looking for does not exist.
        </p>
        <Link
          to="/"
          className="px-6 py-3 bg-[#2F2F8A] text-white rounded hover:bg-[#2954A3] transition"
        >
          Go to Home
        </Link>
      </div>
    </div>
  )
}

export default NotFound
