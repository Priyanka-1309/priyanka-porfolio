import React from 'react'
import planetImage from '../../assets/images/planetImage2.png'

// images for social media icons
import instagram from '../../assets/images/instagram.png'
import linkedin from '../../assets/images/linkedin.png'
import github from '../../assets/images/github.png'
import mail from '../../assets/images/mail.png'
import download from '../../assets/images/download.png'
// import resume from "../../assets/images/resume/"
import resume from "../../assets/images/download.png"

function HomePageIntroduction() {
  return (
    <>
      {/* top intro section and absolute image*/}
      <div className="relative pt-[120px] px-5 md:pl-[70px] lg:md:pl-[120px] text-white ">

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-[45px]  mb-4"  style={{ color: '#C961DE', fontFamily: " font-serif tracking-wide" }}>
          ❝𝘏𝘪❞
        </h1>

        {/* Text */}
             <p className="text-xl sm:text-2xl md:text-[30px] font-medium text-gray-200 leading-snug max-w-[700px] z-10 animate-fade-slide-up" style={{ animationDelay: '0.4s' }}>
              I’m a{' '}
              <span className="font-bold" style={{ color: '#C961DE', fontFamily: " font-serif tracking-wide" }}>
               UI/UX  Designer
             </span>{' '}
          <br className='hidden md:block' />
           Building intuitive digital experiences that simplify user journeys.  
            <br className='hidden md:block' />
           My work focuses on clean interfaces and seamless user journeys.
          </p>

        {/* Image */}
        <img
          src={planetImage}
          alt="Planet"
          className="
          absolute 
          top-[120px] 
          right-[-10%] 
          w-[90vw]  sm:w-[80vw] md:w-[60vw] lg:w-[55vw] xl:w-[50vw]
           z-[0]
           opacity-20 md:opacity-60
          pointer-events-none
        "
        />
      </div>

      {/* social media section */}
      <div className='flex flex-row gap-[26px] pt-[30px] px-5 md:pl-[70px] lg:md:pl-[120px]'>
        <a href="https://www.instagram.com/priyankadesignstudio1?igsh=MTd5NGNzd2hoamE1cw==" target="_blank" rel="noopener noreferrer">
          <img className='h-[20px] w-[20px] cursor-pointer' src={instagram} alt='Instagram' />
        </a>
        <a href="https://www.linkedin.com/in/priyanka-chandel-2b1574262?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
          <img className='h-[20px] w-[20px] cursor-pointer' src={linkedin} alt='Linkedin' />
        </a>
        {/* <a href="https://github.com/prashant5701" target="_blank" rel="noopener noreferrer">
          <img className='h-[20px] w-[20px] cursor-pointer' src={github} alt='Github' />
        </a> */}
        <a href="mailto:priyankachandel348@gmail.com" target="_blank" rel="noopener noreferrer">
          <img className='h-[20px] w-[20px] cursor-pointer' src={mail} alt='Mail' />
        </a>
      </div>



      {/* resume and hire button section */}
      <div className="flex gap-[20px] pt-[30px] px-5 md:pl-[70px] lg:pl-[120px]">

        <button
          className="flex items-center gap-2 px-6 py-2 rounded-full text-sm font-semibold text-white hover:scale-105 transition cursor-pointer"
          style={{ background: "linear-gradient(90deg, #C961DE, #2954A3)" }}
        >
          <a
            href="https://drive.google.com/file/d/1oKJ8xfF0b8OtZluuV8vq9RTQFza17hiv/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-2 rounded-full text-sm font-semibold text-white hover:scale-105 transition cursor-pointer"
            style={{ background: "linear-gradient(90deg, #C961DE, #2954A3)" }}
          >
            Resume
            <img src={download} alt="Open" className="w-[40px] h-[24px]" />
          </a>

        </button>


        <button
          className="px-6 py-2 rounded-full text-sm font-semibold text-white hover:scale-105 transition cursor-pointer"
          style={{ background: "linear-gradient(90deg, #C961DE, #2954A3)" }}
        >
          Hire Me
        </button>

      </div>

    </>

  )
}

export default HomePageIntroduction
