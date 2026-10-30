
import React, { useEffect, useRef, useState } from "react";

import {
  SiFigma,
  SiCanvas,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiC,
} from "react-icons/si";

import { FaPenNib, FaLayerGroup, FaCode } from "react-icons/fa";

const skillGroups = [
  {
    title: "Graphic Design",
    icon: FaPenNib,
    skills: [
      "Brand Identity",
      "Poster & Print Design",
      "Packaging Design",
      "Social Media Design",
      "Visual Storytelling",
    ],
  },
  {
    title: "UI/UX Design",
    icon: FaLayerGroup,
    skills: [
      "Wireframing",
      "Prototyping",
      "Information Architecture",
      "User Flows",
      "Interaction Design",
      "Responsive Design",
    ],
  },
  {
    title: "Web Development",
    icon: FaCode,
    skills: [
      "HTML & CSS",
      "JavaScript",
      "Responsive Websites",
      "Frontend Implementation",
    ],
  },
];

const tools = [
  { name: "InDesign", icon: FaPenNib, color: "#FF3366" },
  { name: "Figma", icon: SiFigma, color: "#A259FF" },
  { name: "Adobe XD", icon: FaPenNib, color: "#FF61F6" },
  { name: "Photoshop", icon: FaPenNib, color: "#31A8FF" },
  { name: "Illustrator", icon: FaPenNib, color: "#FF9A00" },
  { name: "Canva", icon: SiCanvas, color: "#00C4CC" },
  { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", icon: SiCss, color: "#1572B6" },
  { name: "JavaScript", icon: SiJavascript, color: "#B49A00" },
  { name: "C Language", icon: SiC, color: "#659AD2" },
];

function HomePageTechStack() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(section);
        }
      },
      {
        threshold: 0.12,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className={`portfolio-skills ${isVisible ? "is-visible" : ""}`}
    >
      <div className="portfolio-container">
        {/* MAIN HEADING */}
        <header className="portfolio-header">
          <h2 className="main-title pop-heading">
            Skills <span>&amp;</span> Tools
          </h2>

          <p className="main-description">
            The tools, skills and creative techniques I use to design
            meaningful experiences and build beautiful digital products.
          </p>
        </header>

        {/* SKILLS SECTION */}
        <div className="skills-block">
          <div className="section-heading">
            <h2>Skills</h2>
            <span className="script-text">Elaborated</span>
          </div>

          <div className="skills-grid">
            {skillGroups.map((group, index) => {
              const Icon = group.icon;

              return (
                <article
                  className={`skill-column skill-column-${index + 1}`}
                  key={group.title}
                >
                  <div className="skill-icon">
                    <Icon size={34} aria-hidden="true" />
                  </div>

                  <h3>{group.title}</h3>

                  <ul>
                    {group.skills.map((skill) => (
                      <li key={skill}>
                        <span className="bullet" aria-hidden="true">
                          ·
                        </span>
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>

        {/* TOOLS SECTION */}
        <div className="tools-block">
          <div className="section-heading tools-heading">
            <h2>Tools</h2>
            <span className="script-text">used</span>
          </div>

          <div className="tools-grid">
            {tools.map((tool) => {
              const Icon = tool.icon;

              return (
                <div className="tool-item" key={tool.name}>
                  <div className="tool-logo">
                    <Icon
                      size={43}
                      color={tool.color}
                      aria-hidden="true"
                    />
                  </div>

                  <span>{tool.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@500;600;700&family=DM+Sans:wght@400;500;600;700;800&display=swap');

        /* MAIN SECTION */
        .portfolio-skills {
          --blue: #304ffe;
          --pink: #f29bbd;
          --ink: #202027;

          width: 100%;
          padding: 40px 16px 44px;
          background: #ffffff;
          color: var(--ink);
          box-sizing: border-box;
          overflow: hidden;
        }

        .portfolio-skills *,
        .portfolio-skills *::before,
        .portfolio-skills *::after {
          box-sizing: border-box;
        }

        .portfolio-container {
          width: 100%;
          max-width: 1180px;
          margin: 0 auto;
        }

        /* MAIN HEADING */
        .portfolio-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          text-align: center;
        }

        .main-title {
          margin: 0;
          font-family: 'DM Sans', sans-serif;
          font-size: clamp(44px, 6.5vw, 76px);
          font-weight: 800;
          letter-spacing: -0.065em;
          line-height: 1.12;

          background: linear-gradient(
            180deg,
            #c9c9d2 0%,
            #dedee5 45%,
            #f0f0f4 100%
          );

          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          color: transparent;
        }

        .main-title span {
          -webkit-text-fill-color: #d5d5df;
        }

        /* SCROLL POP-IN EFFECT */
        .pop-heading {
          opacity: 0;
          transform: translateY(24px) scale(0.94);
          transform-origin: center;
        }

        .portfolio-skills.is-visible .pop-heading {
          animation: skillsHeadingPop 0.7s
            cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        @keyframes skillsHeadingPop {
          0% {
            opacity: 0;
            transform: translateY(24px) scale(0.94);
          }

          70% {
            opacity: 1;
            transform: translateY(-3px) scale(1.015);
          }

          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .main-description {
          width: 100%;
          max-width: 620px;
          margin: 18px auto 0;
          color: #777580;
          font-family: 'DM Sans', sans-serif;
          font-size: 15px;
          line-height: 1.9;
          text-align: center;
        }

        /* SECTION HEADINGS */
        .skills-block {
          margin-top: 58px;
        }

        .section-heading {
          display: flex;
          flex-wrap: wrap;
          align-items: baseline;
          gap: 12px;
          margin: 0 0 28px;
        }

        .section-heading h2 {
          margin: 0;
          color: #24232b;
          font-family: 'DM Sans', sans-serif;
          font-size: clamp(34px, 4vw, 46px);
          font-weight: 700;
          letter-spacing: -2px;
          line-height: 1.2;
        }

        .script-text {
          display: inline-block;
          color: var(--pink);
          font-family: 'Caveat', cursive;
          font-size: 34px;
          font-weight: 600;
          line-height: 1;
          white-space: nowrap;
          transform: rotate(-3deg);
        }

        /* SKILLS GRID */
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 0;
        }

        .skill-column {
          min-width: 0;
          padding: 0 24px;
        }

        .skill-column:first-child {
          padding-left: 0;
        }

        .skill-column:not(:first-child) {
          border-left: 1px solid rgba(35, 35, 48, 0.13);
        }

        .skill-icon {
          display: flex;
          align-items: center;
          height: 42px;
          margin-bottom: 14px;
          color: var(--blue);
          transition: color 0.25s ease, transform 0.25s ease;
        }

        .skill-column:hover .skill-icon {
          color: var(--pink);
          transform: translateY(-3px);
        }

        .skill-column h3 {
          margin: 0 0 17px;
          color: #25242c;
          font-family: 'DM Sans', sans-serif;
          font-size: clamp(18px, 2vw, 23px);
          font-weight: 700;
          letter-spacing: -0.7px;
          line-height: 1.4;
        }

        .skill-column ul {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .skill-column li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          color: #686671;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          line-height: 1.65;
        }

        .bullet {
          flex-shrink: 0;
          color: var(--blue);
          font-size: 20px;
          line-height: 1.3;
        }

        /* TOOLS SECTION */
        .tools-block {
          margin-top: 60px;
          padding-top: 0;
          border: none;
        }

        .tools-heading {
          margin-bottom: 28px;
        }

        .tools-grid {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 26px 18px;
        }

        .tool-item {
          display: flex;
          min-width: 0;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 12px;
          padding: 6px 8px;
          border: none;
          border-radius: 12px;
          background: transparent;
          transition: background 0.25s ease, transform 0.25s ease;
        }

        .tool-item:hover {
          background: #faf9ff;
          transform: translateY(-3px);
        }

        .tool-logo {
          display: flex;
          width: 58px;
          height: 58px;
          align-items: center;
          justify-content: center;
          transition: transform 0.25s ease;
        }

        .tool-item:hover .tool-logo {
          transform: translateY(-3px);
        }

        .tool-item > span {
          color: #5e5c66;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 600;
          text-align: center;
        }

        /* LAPTOP / TABLET */
        @media (max-width: 900px) {
          .portfolio-skills {
            padding: 36px 16px 40px;
          }

          .skills-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 34px 0;
          }

          .skill-column {
            padding: 0 22px;
          }

          .skill-column:first-child {
            padding-left: 0;
          }

          .skill-column:nth-child(2) {
            padding-right: 0;
            border-left: 1px solid rgba(35, 35, 48, 0.13);
          }

          .skill-column:nth-child(3) {
            grid-column: 1 / -1;
            padding: 0;
            border-left: none;
          }

          .tools-grid {
            grid-template-columns: repeat(4, minmax(0, 1fr));
          }
        }

        /* MOBILE */
        @media (max-width: 560px) {
          .portfolio-skills {
            padding: 32px 12px 36px;
          }

          .main-title {
            font-size: clamp(38px, 9vw, 52px);
            letter-spacing: -0.055em;
          }

          .main-description {
            max-width: 390px;
            margin-top: 14px;
            font-size: 13px;
            line-height: 1.8;
          }

          .skills-block {
            margin-top: 20px;
          }

          .section-heading {
            gap: 10px;
            margin-bottom: 23px;
          }

          .section-heading h2 {
            font-size: 36px;
          }

          .section-heading .script-text {
            font-size: 29px;
          }

          .skills-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .skill-column,
          .skill-column:first-child,
          .skill-column:nth-child(2),
          .skill-column:nth-child(3) {
            grid-column: auto;
            padding: 0;
            border-left: none;
          }

          .skill-column h3 {
            font-size: 21px;
          }

          .skill-column li {
            font-size: 14px;
          }

          .tools-block {
            margin-top: 46px;
          }

          .tools-grid {
            grid-template-columns: repeat(5, minmax(0, 1fr));
            gap: 12px 4px;
          }

          .tool-logo {
            width: 100%;
            max-width: 52px;
            height: 52px;
          }

          .tool-logo svg {
            width: 34px;
            height: 34px;
            max-width: 100%;
          }

          .tool-item {
            padding: 12px 2px;
            gap: 8px;
          }

          .tool-item > span {
            font-size: 10px;
            overflow-wrap: anywhere;
          }
        }

        /* SMALL MOBILE */
        @media (max-width: 360px) {
          .portfolio-skills {
            padding-right: 10px;
            padding-left: 10px;
          }

          .main-title {
            font-size: 36px;
          }

          .section-heading h2 {
            font-size: 32px;
          }

          .section-heading .script-text {
            font-size: 27px;
          }

          .skill-column li {
            font-size: 13px;
          }

          .tools-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 12px;
          }

          .tool-item {
            padding: 14px 6px;
          }

          .tool-item > span {
            font-size: 12px;
          }
        }

        /* ACCESSIBILITY */
        @media (prefers-reduced-motion: reduce) {
          .portfolio-skills.is-visible .pop-heading {
            animation: none;
            opacity: 1;
            transform: none;
          }

          .skill-icon,
          .tool-logo,
          .tool-item {
            transition: none;
          }
        }
      `}</style>
    </section>
  );
}

export default HomePageTechStack;
