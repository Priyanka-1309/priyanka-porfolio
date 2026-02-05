import React from "react";

const steps = [
  { title: "Empathize", color: "bg-green-500", icon: "🔍" },
  { title: "Define", color: "bg-sky-500", icon: "📄" },
  { title: "Ideate", color: "bg-purple-500", icon: "💡" },
  { title: "Prototype", color: "bg-yellow-500", icon: "🖱️" },
  { title: "Test", color: "bg-red-500", icon: "👁️" },
];

const HomePageHowIWork = () => {
  return (
    <section className="w-full py-20 bg-[#0F103F] overflow-hidden">
         <h2 className="text-4xl text-[#C961DE] font-serif font-bold mb-20 text-center">
  My Design Process
</h2>

      <div className="relative flex items-center justify-between px-20">

        {/* dotted line */}
        <div className="absolute top-[72px] left-24 right-24 border-t-2 border-dashed border-gray-400" />

        {steps.map((step, index) => (
          <div key={index} className="relative flex flex-col items-center group">

            {/* circle */}
            <div
              className={`w-32 h-32 rounded-full flex items-center justify-center text-4xl text-white
              ${step.color}
              transition-all duration-500
              group-hover:scale-110 group-hover:shadow-2xl`}
            >
              {step.icon}
            </div>

            {/* title */}
            <p className="mt-5 text-lg font-medium text-white">
              {step.title}
            </p>

            {/* iterate arrows */}
            {(step.title === "Ideate" || step.title === "Prototype") && (
              <div className="absolute -top-14 right-[-99px] hidden lg:block">
                <svg width="120" height="60" className="animate-pulse">
                  <path
                    d="M5 55 C60 5, 60 5, 115 55"
                    stroke="#FFFFFF"
                    strokeWidth="2"
                    strokeDasharray="8 6"
                    fill="none"
                  />
                  <text x="40" y="8" fontSize="10" fill="#FFFFFF">
                    ITERATE
                  </text>
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomePageHowIWork;
