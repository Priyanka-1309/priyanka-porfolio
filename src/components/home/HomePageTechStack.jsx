
import React, { useEffect, useRef, useState } from "react";
import { FaPenNib, FaLayerGroup, FaCode } from "react-icons/fa";

const skillGroups = [
  {
    title: "Graphic Design",
    icon: <FaPenNib />,
    skills: [
      "Brand Identity",
      "Poster & Print Design",
      "Packaging Design",
      "Social Media Design",
      "Typography",
      "Visual Storytelling",
    ],
  },
  {
    title: "UI/UX Design",
    icon: <FaLayerGroup />,
    skills: [
      "Wireframing",
      "Prototyping",
      "Information Architecture",
      "User Flows",
      "Interaction Design",
      "Responsive Design",
      "Design Systems",
    ],
  },
  {
    title: "Web Development",
    icon: <FaCode />,
    skills: [
      "HTML & CSS",
      "JavaScript",
      "Responsive Websites",
      "Frontend Implementation",
    ],
  },
];

const AdobeIcon = ({ label, color }) => (
  <svg viewBox="0 0 64 64" className="tool-svg" aria-label={label}>
    <rect x="3" y="3" width="58" height="58" rx="11" fill={color} />
    <text
      x="32"
      y="43"
      textAnchor="middle"
      fontSize="29"
      fontWeight="700"
      fill="white"
      fontFamily="Arial, sans-serif"
    >
      {label}
    </text>
  </svg>
);

const FigmaIcon = () => (
  <svg viewBox="0 0 48 72" className="tool-svg" aria-label="Figma">
    <path d="M12 2h12v20H12a10 10 0 0 1 0-20Z" fill="#F24E1E" />
    <path d="M24 2h12a10 10 0 0 1 0 20H24V2Z" fill="#FF7262" />
    <path d="M12 22h12v20H12a10 10 0 0 1 0-20Z" fill="#A259FF" />
    <circle cx="31" cy="32" r="10" fill="#1ABCFE" />
    <path d="M12 42h12v10a10 10 0 1 1-12-10Z" fill="#0ACF83" />
  </svg>
);

const CanvaIcon = () => (
  <svg viewBox="0 0 64 64" className="tool-svg" aria-label="Canva">
    <defs>
      <linearGradient id="canva-gradient" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#20C4CC" />
        <stop offset="100%" stopColor="#7657E8" />
      </linearGradient>
    </defs>
    <circle cx="32" cy="32" r="29" fill="url(#canva-gradient)" />
    <text
      x="32"
      y="43"
      textAnchor="middle"
      fontSize="37"
      fontWeight="700"
      fill="white"
      fontFamily="Georgia, serif"
      fontStyle="italic"
    >
      C
    </text>
  </svg>
);

const HtmlIcon = () => (
  <svg viewBox="0 0 64 64" className="tool-svg" aria-label="HTML5">
    <path d="M10 5h44l-4 47-18 7-18-7L10 5Z" fill="#E44D26" />
    <path d="M32 55l14-5 3-40H32v45Z" fill="#F16529" />
    <path
      d="M20 17h25l-1 6H27l1 6h15l-2 15-9 3-10-3-1-8h7l1 3 4 1 4-1 1-5H21l-1-17Z"
      fill="white"
    />
  </svg>
);

const CssIcon = () => (
  <svg viewBox="0 0 64 64" className="tool-svg" aria-label="CSS3">
    <path d="M10 5h44l-4 47-18 7-18-7L10 5Z" fill="#1572B6" />
    <path d="M32 55l14-5 3-40H32v45Z" fill="#33A9DC" />
    <path
      d="M20 17h25l-1 6H27l1 6h15l-1 6H29l1 5 5 1 5-1 1-5h7l-1 10-15 5-14-5-1-10h7l1 5 7 2 7-2 1-5H21l-1-18Z"
      fill="white"
    />
  </svg>
);

const JavascriptIcon = () => (
  <svg viewBox="0 0 64 64" className="tool-svg" aria-label="JavaScript">
    <rect x="3" y="3" width="58" height="58" rx="5" fill="#F7DF1E" />
    <text
      x="46"
      y="49"
      textAnchor="end"
      fontSize="31"
      fontWeight="700"
      fill="#222"
      fontFamily="Arial, sans-serif"
    >
      JS
    </text>
  </svg>
);

const CIcon = () => (
  <svg viewBox="0 0 64 64" className="tool-svg" aria-label="C Language">
    <circle cx="32" cy="32" r="29" fill="#A8B9CC" />
    <path
      d="M42 22a16 16 0 1 0 0 20l-6-5a8 8 0 1 1 0-10l6-5Z"
      fill="white"
    />
  </svg>
);

const tools = [
  { name: "InDesign", icon: <AdobeIcon label="Id" color="#49021F" /> },
  { name: "Figma", icon: <FigmaIcon /> },
  { name: "Adobe XD", icon: <AdobeIcon label="Xd" color="#470137" /> },
  { name: "Photoshop", icon: <AdobeIcon label="Ps" color="#001E36" /> },
  { name: "Illustrator", icon: <AdobeIcon label="Ai" color="#330000" /> },
  { name: "Canva", icon: <CanvaIcon /> },
  { name: "HTML5", icon: <HtmlIcon /> },
  { name: "CSS3", icon: <CssIcon /> },
  { name: "JavaScript", icon: <JavascriptIcon /> },
  { name: "C Language", icon: <CIcon /> },
];

const HomePageTechStack = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className={`portfolio-skills ${visible ? "is-visible" : ""}`}
      id="skills"
      ref={sectionRef}
    >
      <div className="skills-container">

        {/* Main Heading */}
        <div className="skills-heading">
          <h2 className="main-title">Skills &amp; Tools</h2>

          <p className="main-description">
            The tools, skills and creative techniques I use to design
            meaningful experiences and build beautiful digital products.
          </p>
        </div>

        <div className="skills-content">

          {/* Skills Section */}
          <div className="skills-block">
            <h3 className="section-heading reveal-heading">
              <span>Skills</span>
              <span className="heading-script">Elaborated</span>
            </h3>

            <div className="skill-groups">
              {skillGroups.map((group, index) => (
                <div className="skill-group" key={index}>
                  <div className="skill-group-title">
                    <span className="skill-group-icon">{group.icon}</span>
                    <h4>{group.title}</h4>
                  </div>

                  <ul>
                    {group.skills.map((skill, skillIndex) => (
                      <li key={skillIndex}>{skill}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Tools Section */}
          <div className="tools-block">
            <h3 className="section-heading reveal-heading">
              <span>Tools</span>
              <span className="heading-script">used</span>
            </h3>

            <div className="tools-panel">
              <div className="tools-grid">
                {tools.map((tool, index) => (
                  <div className="tool-item" key={index}>
                    <div className="tool-logo">{tool.icon}</div>
                    <span>{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@500;600;700&family=DM+Sans:wght@400;500;600;700;800&display=swap');

        .portfolio-skills {
          width: 100%;
          padding: 42px 5% 60px;
          background: #ffffff;
          font-family: 'DM Sans', sans-serif;
          box-sizing: border-box;
          overflow: hidden;
        }

        .skills-container {
          width: 100%;
          max-width: 1250px;
          margin: 0 auto;
        }

        /* Main Heading - Grey to Black Gradient */
        .skills-heading {
          text-align: center;
          margin: 0 auto 27px;
          max-width: 850px;
        }

        .main-title {
          margin: 0 0 12px;
          font-size: clamp(42px, 6vw, 62px);
          font-weight: 800;
          line-height: 1.12;
          letter-spacing: -2.5px;
          text-align: center;

          background: linear-gradient(
            100deg,
            #b8b8c0 0%,
            #777780 45%,
            #8888899c 100%
          );

          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          color: transparent;
        }

        .main-description {
          max-width: 760px;
          margin: 0 auto;
          color: #777786;
          font-size: 14px;
          line-height: 1.8;
          letter-spacing: 0.15px;
        }

        /* Skills and Tools Layout */
        .skills-content {
          display: grid;
          grid-template-columns: 1.35fr 0.9fr;
          gap: 55px;
          align-items: start;
        }

        /* Section Headings - Normal Dark */
        .section-heading {
          display: flex;
          align-items: baseline;
          gap: 10px;
          margin: 0 0 23px;
          color: #252535;
          font-size: 29px;
          font-weight: 800;
          letter-spacing: -0.8px;
        }

        .heading-script {
          color: #f29bbd;
          font-family: 'Caveat', cursive;
          font-size: 33px;
          font-weight: 600;
          letter-spacing: 0;
        }

        /* Scroll Reveal Animation */
        .reveal-heading {
          opacity: 0;
          transform: translateY(24px);
          filter: blur(5px);
          transition:
            opacity 0.75s ease,
            transform 0.75s cubic-bezier(.2,.7,.2,1),
            filter 0.75s ease;
        }

        .is-visible .reveal-heading {
          opacity: 1;
          transform: translateY(0);
          filter: blur(0);
        }

        .skills-block .reveal-heading {
          transition-delay: 0.12s;
        }

        .tools-block .reveal-heading {
          transition-delay: 0.28s;
        }

        .skill-groups {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }

        .skill-group {
          padding: 0 22px;
          border-right: 1px solid #eeeeF3;
        }

        .skill-group:first-child {
          padding-left: 0;
        }

        .skill-group:last-child {
          padding-right: 0;
          border-right: none;
        }

        .skill-group-title {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 19px;
        }

        .skill-group-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          color: #304ffe;
          font-size: 19px;
        }

        .skill-group-title h4 {
          margin: 0;
          color: #282838;
          font-size: 15px;
          font-weight: 700;
        }

        .skill-group ul {
          display: flex;
          flex-direction: column;
          gap: 13px;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .skill-group li {
          color: #777786;
          font-size: 13px;
          line-height: 1.5;
        }

        /* Tools Glass Card */
        .tools-panel {
          position: relative;
          isolation: isolate;
          overflow: hidden;
          padding: 25px;
          border: 1px solid rgba(207, 207, 231, 0.65);
          border-radius: 24px;
          background:
            linear-gradient(135deg, rgba(242, 155, 189, 0.13), transparent 48%),
            linear-gradient(315deg, rgba(48, 79, 254, 0.10), transparent 55%),
            rgba(255, 255, 255, 0.92);
          box-shadow: 0 12px 35px rgba(48, 45, 90, 0.07);
          backdrop-filter: blur(16px);
        }

        .tools-panel::before {
          content: "";
          position: absolute;
          z-index: -1;
          top: -75px;
          right: -65px;
          width: 180px;
          height: 180px;
          border-radius: 50%;
          background: rgba(242, 155, 189, 0.16);
          filter: blur(35px);
        }

        .tools-panel::after {
          content: "";
          position: absolute;
          z-index: -1;
          bottom: -90px;
          left: -70px;
          width: 190px;
          height: 190px;
          border-radius: 50%;
          background: rgba(48, 79, 254, 0.12);
          filter: blur(40px);
        }

        .tools-grid {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 17px 12px;
        }

        .tool-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 9px;
          min-width: 0;
          padding: 13px 5px;
          border: 1px solid rgba(230, 230, 240, 0.8);
          border-radius: 15px;
          background: rgba(255, 255, 255, 0.75);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .tool-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 20px rgba(48, 79, 254, 0.09);
        }

        .tool-logo {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 43px;
          height: 43px;
        }

        .tool-svg {
          display: block;
          width: 42px;
          height: 42px;
          object-fit: contain;
        }

        .tool-item > span {
          color: #555568;
          font-size: 11px;
          font-weight: 600;
          text-align: center;
          line-height: 1.3;
        }

        /* Tablet */
        @media (max-width: 1000px) {
          .skills-content {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .tools-panel {
            max-width: 650px;
          }
        }

        /* Mobile */
        @media (max-width: 650px) {
          .portfolio-skills {
            padding: 35px 18px 45px;
          }

          .skills-heading {
            margin-bottom: 22px;
          }

          .main-title {
            font-size: 43px;
            letter-spacing: -1.8px;
          }

          .main-description {
            font-size: 13px;
          }

          .skills-content {
            gap: 35px;
          }

          .skill-groups {
            grid-template-columns: 1fr;
            gap: 25px;
          }

          .skill-group,
          .skill-group:first-child,
          .skill-group:last-child {
            padding: 0;
            border: none;
          }

          .skill-group ul {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .tools-panel {
            padding: 17px;
          }

          .tools-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 12px;
          }
        }

        @media (max-width: 380px) {
          .main-title {
            font-size: 37px;
          }

          .section-heading {
            font-size: 26px;
          }

          .tools-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .reveal-heading {
            opacity: 1;
            transform: none;
            filter: none;
            transition: none;
          }
        }
      `}</style>
    </section>
  );
};

export default HomePageTechStack;