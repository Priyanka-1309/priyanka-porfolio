export default function HomePageOpenTo() {
  return (
    <section className="relative py-24 px-6 overflow-hidden bg-[#0E0F3B]">
      {/* Soft background gradient */}
         <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-72 h-72 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-[#C961DE]/20 to-[#2954A3]/20 blur-2xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto text-center">
        {/* Heading */}
        <p className="uppercase tracking-widest text-sm text-white/70">
          Open To
        </p>

        <h2 className="text-4xl md:text-4xl text-[#C961DE] font-serif font-bold tracking-wide mt-3">
          What I&apos;m Looking For
        </h2>

        <p className="max-w-2xl mx-auto mb-10 mt-2 text-white/80">
          I&apos;m actively exploring opportunities where I can make a meaningful
          impact through thoughtful design.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              title: "Full-Time UI/UX Roles",
              desc: "Product design positions where I can drive UX strategy and collaborate closely with engineering and product teams.",
            },
            {
              title: "Freelance Projects",
              desc: "UX audits, redesigns, and focused design sprints without long-term commitment.",
            },
            {
              title: "Product-Driven Teams",
              desc: "Organizations that treat design as a strategic function and value research-driven decision making.",
            },
          ].map((card, i) => (
            <div
              key={i}
              className="relative group rounded-2xl p-[2px] hover:scale-[1.02] transition-all duration-300"
            >
              {/* Animated Gradient Border */}
              <div className="absolute inset-7 rounded-2xl bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 animate-[spin_10s_linear_infinite]" />

              {/* Glass Card */}
               <div className="relative h-full rounded-2xl bg-[#1C1D5E]/60 backdrop-blur-xl border border-white/20 p-8 text-left">
                {/* Decorative line instead of icon */}
                <div className="h-1 w-16 mb-6 rounded-full bg-gradient-to-r from-[#C961DE] to-[#2954A3]" />

                <h3 className="text-xl font-semibold text-white mb-4">
                  {card.title}
                </h3>

                <p className="text-white/70 leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Spin animation (inline, no extra CSS file) */}
      <style>
        {`
          @keyframes spin {
            to {
              transform: rotate(240deg);
            }
          }
        `}
      </style>
    </section>
  );
}
