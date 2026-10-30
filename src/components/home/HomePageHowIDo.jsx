"use client";

const items = [
  {
    number: "01",
    title: "Research & Explore",
    desc: "Understanding user needs, exploring references, and finding the right creative direction.",
    tag: "DISCOVER",
    detail: "Understand the why",
  },
  {
    number: "02",
    title: "Define & Structure",
    desc: "Turning research into clear goals, organized content, and intuitive user flows.",
    tag: "STRATEGY",
    detail: "Build the foundation",
  },
  {
    number: "03",
    title: "Wireframe & Design",
    desc: "Creating purposeful layouts with thoughtful typography, colors, and visual hierarchy.",
    tag: "DESIGN",
    detail: "Shape the vision",
  },
  {
    number: "04",
    title: "Prototype & Refine",
    desc: "Testing ideas, improving interactions, and polishing the details that matter.",
    tag: "REFINE",
    detail: "Make it feel right",
  },
  {
    number: "05",
    title: "Developer Handoff",
    desc: "Preparing detailed design specifications for a smooth development process.",
    tag: "DELIVER",
    detail: "Bring it to life",
  },
];

export default function HomepageHowIDo() {
  return (
    <section
      id="design-process"
      className="bg-white px-5 pb-16 pt-8 sm:px-8 sm:pb-20 sm:pt-10 lg:px-10 lg:pb-24 lg:pt-12"
    >
      <div className="mx-auto max-w-[1440px]">
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,500;0,600;1,500&display=swap');

          .design-process-eyebrow {
            color: #242039;
            font-family: 'Playfair Display', serif;
            font-size: 16px;
            font-style: italic;
            font-weight: 500;
            letter-spacing: 0;
            text-transform: none;
          }

          .design-process-heading {
            color: #242039;
            font-family: 'DM Sans', sans-serif;
            font-size: clamp(25px, 2.7vw, 36px);
            font-weight: 700;
            line-height: 1.3;
            letter-spacing: -1px;
          }

          .design-process-accent {
            color: #f29bbd;
            font-family: 'Caveat', cursive;
            font-size: 1.2em;
            font-weight: 600;
            line-height: 1;
            letter-spacing: 0;
          }
        `}</style>
        {/* Heading */}

        <div className="mb-10 flex flex-col justify-between gap-5 sm:mb-12 lg:flex-row lg:items-end">
          <div>
            <p className="design-process-eyebrow mb-3">
              My Design Process
            </p>

            <h2 className="design-process-heading max-w-2xl">
              From first thought
              <br className="hidden sm:block" /> to{" "}
              <span className="design-process-accent">
                final detail.
              </span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-[#777777] lg:pb-1">
            Every great experience starts with a question and comes to life
            through thoughtful design.
          </p>
        </div>

        {/* Process cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5 lg:gap-3 xl:gap-4">
          {items.map((item) => (
            <article
              key={item.number}
              className="group flex min-w-0 flex-col rounded-xl border border-[#304ffe] bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#CFCFCF] hover:shadow-[0_10px_30px_rgba(0,0,0,0.04)] lg:p-4 xl:p-5"
            >
              {/* Category and step */}
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-semibold tracking-[0.16em] text-[#555555]">
                  {item.tag}
                </span>

                <span className="text-[11px] font-medium text-[#999999]">
                  {item.number}
                </span>
              </div>

              {/* Card content */}
              <div className="mb-8 mt-8">
                <h3 className="text-lg font-semibold leading-snug tracking-[-0.03em] text-[#222222]">
                  {item.title}
                </h3>

                <p className="mt-3 text-xs leading-[1.9] text-[#777777]">
                  {item.desc}
                </p>
              </div>

              {/* Minimal footer */}
              <div className="mt-auto">
                <div className="mb-4 h-px bg-[#EAEAEA] transition-colors duration-300 group-hover:bg-[#AFAFAF]" />

                <p className="text-xs text-[#666666]">
                  {item.detail}
                </p>

                <div className="mt-4 h-[2px] w-8 bg-[#f29bbd] transition-all duration-300 group-hover:w-full group-hover:bg-[#333333]" />
              </div>
            </article>
          ))}
        </div>

        {/* Bottom note */}
        {/* <div className="mt-10 flex flex-col items-center gap-3 sm:mt-12">
          <div className="h-px w-12 bg-[#DADADA]" />

          <p className="text-center text-xs tracking-wide text-[#777777]">
            Thoughtfully crafted, from concept to creation.
          </p>
        </div> */}
      </div>
    </section>
  );
}