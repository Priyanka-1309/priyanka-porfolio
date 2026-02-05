import React, { useState, useEffect } from 'react';
import planetImage from '../../assets/images/planetImage2.png';

import instagram from '../../assets/images/instagram.png';
import linkedin from '../../assets/images/linkedin.png';
import mail from '../../assets/images/mail.png';
import download from '../../assets/images/download.png';

import { useNavigate } from 'react-router-dom';

function HomePageIntroduction() {
  const navigation = useNavigate();

  const lines = [
    "I’m a UI/UX Designer",
    "I design experiences that turn users into customers.",
    "Helping product teams reduce friction, improve clarity, and drive meaningful business outcomes through research-driven design decisions."
  ];

  const [displayedText, setDisplayedText] = useState(["", "", ""]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);

  useEffect(() => {
    if (currentLine < lines.length) {
      const interval = setInterval(() => {
        const newText = [...displayedText];
        newText[currentLine] += lines[currentLine][currentChar];
        setDisplayedText(newText);

        if (currentChar < lines[currentLine].length - 1) {
          setCurrentChar(currentChar + 1);
        } else {
          setCurrentLine(currentLine + 1);
          setCurrentChar(0);
        }
      }, 10); // typing speed
      return () => clearInterval(interval);
    }
  }, [currentChar, currentLine, displayedText]);

  return (
    <>
      <div className="relative pt-[50px] px-5 md:pl-[120px] lg:md:pl-[120px] text-white">

        {/* UI/UX Designer Badge */}
        <div className="inline-flex items-center gap-2 mb-4 px-5 py-2 rounded-full 
          bg-white/10 backdrop-blur-md border border-white/20 animate-fadeInUp"
          style={{ animationDelay: '0.2s' }}
        >
          <span className="font-bold" style={{ color: '#C961DE', fontFamily: "font-serif tracking-wide" }}>
            Hi...
          </span>
        </div>

        {/* Typing Text */}
        <div className="max-w-[800px] z-10">
          {displayedText.map((text, idx) => (
            <p
              key={idx}
              className="text-xl sm:text-2xl md:text-[25px] font-medium text-gray-200 leading-snug"
            >
              {idx === 0 ? (
                <span className="font-bold" style={{ color: '#C961DE', fontFamily: "font-serif tracking-wide" }}>
                  {text}
                </span>
              ) : text}
              {idx === currentLine && <span className="animate-blink">|</span>}
              <br className='hidden md:block' />
            </p>
          ))}
        </div>

        {/* Planet Image */}
        <img
          src={planetImage}
          alt="Planet"
          className="
            absolute 
            top-[70px] 
            right-[-10%] 
            w-[60vw] sm:w-[80vw] md:w-[60vw] lg:w-[55vw] xl:w-[50vw]
            z-[0]
            opacity-20 md:opacity-60
            pointer-events-none
            animate-float
          "
        />
      </div>

      {/* Social Media Section */}
      <div className='flex flex-row gap-[26px] pt-[30px] px-5 md:pl-[70px] lg:md:pl-[120px]'>
        {[instagram, linkedin, mail].map((icon, idx) => (
          <a
            key={idx}
            href={
              icon === instagram ? "https://www.instagram.com/priyankadesignstudio1?igsh=MTd5NGNzd2hoamE1cw==" :
              icon === linkedin ? "https://www.linkedin.com/in/priyanka-chandel-2b1574262" :
              "mailto:priyankachandel348@gmail.com"
            }
            target="_blank"
            rel="noopener noreferrer"
            className="animate-fadeInUp"
            style={{ animationDelay: `${0.8 + idx*0.2}s` }}
          >
            <img className='h-[20px] w-[20px] cursor-pointer' src={icon} alt="icon" />
          </a>
        ))}
      </div>

      {/* Resume & Hire Me Buttons */}
      <div className="flex gap-[20px] pt-[30px] px-5 md:pl-[70px] lg:pl-[120px]">
        <a
          href="https://drive.google.com/file/d/1oKJ8xfF0b8OtZluuV8vq9RTQFza17hiv/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-2 rounded-full text-sm font-semibold text-white hover:scale-105 transition cursor-pointer animate-fadeInUp"
          style={{ animationDelay: '1.4s', background: "linear-gradient(90deg, #C961DE, #2954A3)" }}
        >
          Resume
          <img src={download} alt="Open" className="w-[40px] h-[24px]" />
        </a>

        <button
          className="px-6 py-2 rounded-full text-sm font-semibold text-white hover:scale-105 transition cursor-pointer animate-fadeInUp"
          style={{ animationDelay: '1.6s', background: "linear-gradient(90deg, #C961DE, #2954A3)" }}
          onClick={()=> navigation("/contact")}
        >
          Hire Me
        </button>
      </div>

      <style>
        {`
          @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(30px); }
            100% { opacity: 1; transform: translateY(0); }
          }

          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-15px); }
          }

          @keyframes blink {
            0%, 49% { opacity: 1; }
            50%, 100% { opacity: 0; }
          }

          .animate-fadeInUp {
            animation: fadeInUp 0.8s ease-out forwards;
          }

          .animate-float {
            animation: float 6s ease-in-out infinite;
          }

          .animate-blink {
            animation: blink 1s infinite;
          }
        `}
      </style>
    </>
  );
}

export default HomePageIntroduction;
