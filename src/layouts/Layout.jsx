import React from 'react'
// import Navbar from '../components/header/Navbar'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import Footer from '../components/footer/Footer'

function Layout() {
    return (
        <div className='min-h-screen overflow-x-hidden bg-white'>
           
            <section className="flex justify-between ">
                <div>
                    {/* <Sidebar /> */}
                </div>
                <div className="w-full ">
                    <Outlet />
                </div>
            </section>
            <Footer/>
        </div>
    )
}

export default Layout
