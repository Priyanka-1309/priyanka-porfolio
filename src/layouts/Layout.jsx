
import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/footer/Footer'

function Layout() {
  return (
    <div className="min-h-screen overflow-x-clip bg-white">
      <section className="w-full">
        <div className="w-full min-w-0">
          <Outlet />
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Layout
