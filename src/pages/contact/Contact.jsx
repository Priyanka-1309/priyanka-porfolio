import React from 'react'
import Sidebar from '../../components/Sidebar'
import ContactForm from '../../components/contact/ContactForm'

function Contact() {
  return (
    <div className='bg-[#0F103F]'>
      <Sidebar />
      <div className="ml-[38px] md:ml-[50px] min-h-screen pb-20">
        <ContactForm />

      </div>
    </div>
  )
}

export default Contact
