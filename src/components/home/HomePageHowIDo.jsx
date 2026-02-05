"use client";

import { motion } from "framer-motion";

const items = [
  {
    title: "Improve Activation",
    desc: "Turn signups into engaged users by simplifying onboarding flows and reducing time-to-value.",
  },
  {
    title: "Boost Retention",
    desc: "Design intuitive experiences that solve real problems and keep users coming back.",
  },
  {
    title: "Increase Conversion",
    desc: "Remove friction points in user journeys to help more visitors become customers.",
  },
  {
    title: "Enhance Clarity",
    desc: "Simplify complex interfaces so users clearly understand what to do next.",
  },
];

export default function HomepageHowIDo() {
  return (
    <section className="relative py-28 bg-[#0F103F] overflow-hidden">
     

      <div className="relative max-w-6xl mx-auto px-6 text-center z-10">
        {/* Section Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-white/70 uppercase tracking-widest mb-2"
        >
          What I Do
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-serif font-bold tracking-wide mb-4 text-[#C961DE]"
        >
          Problems I Solve
        </motion.h2>

        {/* Sub Text */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-white max-w-2xl mx-auto mb-16"
        >
          I focus on the metrics that matter most to product teams — not just
          making things look good, but making them work better for users and
          businesses.
        </motion.p>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-4 gap-10">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                ease: [0.4, 0, 0.2, 1],
              }}
              whileHover={{ scale: 1.08, y: -12, rotateY: 5, rotateX: 3 }}
              className="relative group rounded-2xl p-6 flex flex-col items-center justify-center gap-3 cursor-pointer
                bg-gradient-to-br from-[#1C1D5E]/80 to-[#0F103F]/80
                border-l border-r border-white/40
                shadow-[0_30px_60px_rgba(201,97,222,0.25)]
                backdrop-blur-xl overflow-hidden transition-transform duration-100"
            >
              {/* Inner neon glow blobs */}
              <motion.div
                className="absolute -top-10 -left-10 w-[120%] h-[120%] rounded-full bg-gradient-to-tr from-[#C961DE]/50 to-[#2954A3]/20 blur-2xl opacity-40 group-hover:opacity-70 transition-opacity duration-500"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />

              <h3 className="relative text-[#C961DE] font-serif font-bold text-lg md:text-xl mb-2 z-10">
                {item.title}
              </h3>
              <p className="relative text-sm text-white z-10">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Blobs Animation */}
      <style>
        {`
          @keyframes blob1 {
            0%,100% { transform: translateY(0px) translateX(0px) scale(1);}
            25% { transform: translateY(-20px) translateX(10px) scale(1.05);}
            50% { transform: translateY(15px) translateX(-10px) scale(0.95);}
            75% { transform: translateY(-10px) translateX(5px) scale(1.02);}
          }

          @keyframes blob2 {
            0%,100% { transform: translateY(0px) translateX(0px) scale(1);}
            25% { transform: translateY(10px) translateX(-10px) scale(0.98);}
            50% { transform: translateY(-15px) translateX(15px) scale(1.03);}
            75% { transform: translateY(5px) translateX(-5px) scale(1.01);}
          }

          @keyframes blob3 {
            0%,100% { transform: translateY(0px) translateX(0px) scale(1);}
            25% { transform: translateY(-10px) translateX(5px) scale(1.02);}
            50% { transform: translateY(15px) translateX(-15px) scale(0.97);}
            75% { transform: translateY(-5px) translateX(10px) scale(1.01);}
          }

          .animate-blob1 { animation: blob1 12s ease-in-out infinite; }
          .animate-blob2 { animation: blob2 15s ease-in-out infinite; }
          .animate-blob3 { animation: blob3 18s ease-in-out infinite; }
        `}
      </style>
    </section>
  );
}
