import React from 'react';
import girlImage from "../../assets/images/girlImage.png";
import diamond from "../../assets/images/diamond.png";
import { useNavigate } from 'react-router-dom';

function HomePageAboutMe() {
  const navigation = useNavigate();

  const cards = [
    { title: "Problem-Solving", desc: "Designing with logic, not just visuals." },
    { title: "User-Centered", desc: "Focused on real user needs & behavior." },
    { title: "Full Process", desc: "Flows, wireframes, UI & prototypes." },
    { title: "Always Learning", desc: "Constantly improving my design craft." }
  ];

  return (
    <div className="relative pb-[120px] pt-[80px] flex justify-center overflow-hidden ">

      {/* MAIN RECTANGLE CARD */}
      <div
        className="
          relative
          w-[95%] max-w-[1000px]
          min-h-[520px]
          rounded-3xl
          bg-gradient-to-br from-[#C961DE] to-[#2954A3]
          shadow-[0_30px_80px_rgba(0,0,0,0.25)]
          flex flex-col md:flex-row
          items-center
          px-[60px] md:px-[80px]
          py-[60px]
          text-white
        "
      >

        {/* Girl Illustration with float */}
        <img
          src={girlImage}
          alt="girl"
          className="hidden md:block absolute left-[-200px] top-[-90px] h-[800px] animate-float"
        />

        {/* LEFT TEXT SECTION */}
        <div className="md:w-[65%] text-left animate-fadeInUp">
          <p className="text-sm tracking-widest text-white/120 mb-3 text-center w-full">
            ABOUT ME
          </p>

          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-5 pl-4 md:pl-6 animate-fadeInUp">
            Hello, I’m <span className="text-[#1E3A8A]">Priyanka</span>
          </h2>

          <p className="text-m font-medium text-white/80 mb-4 pl-4 md:pl-6 animate-fadeInUp">
            I’m a UI/UX Designer with hands-on experience designing user-centric
            web and mobile products.
          </p>

          <p className="text-sm md:text-base text-white/80 leading-relaxed mb-4 pl-5 md:pl-6 animate-fadeInUp delay-100">
            I approach design as a problem-solving process, not just a visual task. My work focuses on understanding user behavior, identifying friction points, and creating clean, functional interfaces that feel effortless to use.
          </p>

          <p className="text-sm md:text-base text-white/80 leading-relaxed mb-4 pl-4 md:pl-6 animate-fadeInUp delay-200">
            I primarily work in Figma, designing structured user flows, wireframes, high-fidelity interfaces, and interactive prototypes.
          </p>

          <p className="text-sm md:text-base text-white/80 leading-relaxed pl-4 md:pl-6 animate-fadeInUp delay-300">
            I’m constantly learning, iterating, and refining my process to create meaningful and effective digital experiences.
          </p>
        </div>

        {/* RIGHT SIDE CARDS WITH STAGGERED ANIMATION */}
       <div className="md:w-[35%] grid grid-cols-2 sm:grid-cols-1 gap-4 mt-40 md:mt-0">
  {cards.map((card, index) => (
    <div
      key={index}
      className={`
        bg-white/15 backdrop-blur-md
        rounded-2xl p-4
        hover:scale-105 transition-transform duration-300
        animate-cardFadeUp
      `}
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      <h4 className="font-semibold mb-1">{card.title}</h4>
      <p className="text-sm text-white/80">{card.desc}</p>
    </div>
  ))}
</div>

<style>
  {`
    @keyframes cardFadeUp {
      0% {
        opacity: 0;
        transform: translateY(30px) scale(0.95);
      }
      50% {
        opacity: 0.5;
        transform: translateY(15px) scale(1.02);
      }
      100% {
        opacity: 1;
        transform: translateY(0) scale(1);
      }
    }

    .animate-cardFadeUp {
      animation: cardFadeUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
    }
  `}
</style>


        {/* Diamond with float */}
        <img
          src={diamond}
          alt="diamond"
          className="hidden md:block absolute right-[-100px] bottom-[-170px] h-[320px] animate-float delay-500"
        />
      </div>

      {/* Inline Animations */}
      <style>
        {`
          @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(30px); }
            100% { opacity: 1; transform: translateY(0); }
          }

          @keyframes cardFadeUp {
            0% { opacity: 0; transform: translateY(40px) scale(0.95); }
            100% { opacity: 1; transform: translateY(0) scale(1); }
          }

          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }

          .animate-fadeInUp {
            animation: fadeInUp 0.8s ease-out forwards;
          }

          .animate-cardFadeUp {
            animation: cardFadeUp 0.7s ease-out forwards;
          }

          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
        `}
      </style>
    </div>
  );
}

export default HomePageAboutMe;
