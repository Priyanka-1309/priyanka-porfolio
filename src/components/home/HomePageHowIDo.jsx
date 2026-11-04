
"use client";

import React, { useEffect, useRef, useState } from "react";

const items = [
  {
    number: "01",
    title: "Research & Explore",
    desc: "Understanding user needs, exploring references, and finding the right creative direction.",
    tag: "DISCOVER",
    icon: "discover",
  },
  {
    number: "02",
    title: "Define & Structure",
    desc: "Turning research into clear goals, organized content, and intuitive user flows.",
    tag: "STRATEGY",
    icon: "planning",
  },
  {
    number: "03",
    title: "Wireframe & Design",
    desc: "Creating purposeful layouts with thoughtful typography, colors, and visual hierarchy.",
    tag: "DESIGN",
    icon: "wireframe",
  },
  {
    number: "04",
    title: "Prototype & Refine",
    desc: "Testing ideas, improving interactions, and polishing the details that matter.",
    tag: "REFINE",
    icon: "prototype",
  },
  {
    number: "05",
    title: "Developer Handoff",
    desc: "Preparing detailed design specifications for a smooth development process.",
    tag: "DELIVER",
    icon: "handoff",
  },
];

const WorkflowIcon = ({ type }) => {
  const common = {
    width: "27",
    height: "27",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  const icons = {
    discover: (
      <>
        <path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8A8.5 8.5 0 0 1 8.7 3.9a8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8v.5Z" />
        <path d="M8 12h.01M12 12h.01M16 12h.01" />
      </>
    ),
    planning: (
      <>
        <rect x="5" y="4" width="14" height="17" rx="2" />
        <path d="M9 4V2h6v2M8 10l1.5 1.5L12 9M13 11h3M8 16l1.5 1.5L12 15M13 17h3" />
      </>
    ),
    wireframe: (
      <>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 9h18M9 9v11M13 13h4M13 16h4" />
      </>
    ),
    prototype: (
      <>
        <rect x="4" y="3" width="16" height="18" rx="2" />
        <path d="M8 8h8M8 12h5M8 16h3M17 15l1.5 1.5L21 14" />
      </>
    ),
    handoff: (
      <>
        <path d="M3 12h12M11 8l4 4-4 4" />
        <path d="M16 5h4v14h-4" />
        <path d="M5 5h5M5 19h5" />
      </>
    ),
  };

  return <svg {...common}>{icons[type]}</svg>;
};

export default function HomepageHowIDo() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="design-process"
      className={`workflow-section ${isVisible ? "workflow-visible" : ""}`}
      ref={sectionRef}
    >
      <div className="workflow-container">

        {/* Heading */}
        <div className="workflow-heading">
          <div className="workflow-heading-title">
            <span className="heading-dot"></span>
            <h2>My Workflow</h2>
            <span className="heading-dotted-line"></span>
          </div>
        </div>

        {/* Workflow Timeline */}
        <div className="workflow-timeline">

          {/* Animated Connecting Line */}
          <div className="timeline-line">
            <div className="timeline-progress"></div>
          </div>

          {items.map((item, index) => (
            <article
              className="workflow-step"
              key={item.number}
              style={{
                "--step-delay": `${index * 650}ms`,
              }}
            >

              {/* Icon */}
              <div className="workflow-icon">
                <div className="icon-glass">
                  <WorkflowIcon type={item.icon} />
                </div>
              </div>

              {/* Number */}
              <span className="workflow-number">
                {item.number}
              </span>

              {/* Glass Card */}
              <div className="workflow-card">

                <span className="workflow-tag">
                  {item.tag}
                </span>

                <h3>{item.title}</h3>

                <p>{item.desc}</p>

              </div>

            </article>
          ))}
        </div>

      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap');

        .workflow-section {
          width: 100%;
          padding: 65px 6% 75px;
          background: #ffffff;
          font-family: 'DM Sans', sans-serif;
          overflow: hidden;
        }

        .workflow-container {
          max-width: 1400px;
          margin: 0 auto;
        }

        /* Heading */

        .workflow-heading {
          margin-bottom: 42px;
          opacity: 0;
          transform: translateY(15px);
          transition: all 0.7s ease;
        }

        .workflow-visible .workflow-heading {
          opacity: 1;
          transform: translateY(0);
        }

        .workflow-heading-title {
          display: flex;
          align-items: center;
          gap: 12px;
          width: 100%;
        }

        .heading-dot {
          width: 11px;
          height: 11px;
          flex-shrink: 0;
          border-radius: 50%;
          background: #f29bbd;
          box-shadow: 0 0 12px rgba(242, 155, 189, 0.5);
        }

        .workflow-heading-title h2 {
          margin: 0;
          color: #24242b;
          font-size: 24px;
          font-weight: 800;
          letter-spacing: -0.7px;
          white-space: nowrap;
        }

        .heading-dotted-line {
          flex: 1;
          height: 1px;
          margin-left: 5px;
          border-top: 2px dotted #d5d5dd;
        }

        /* Timeline */

        .workflow-timeline {
          position: relative;
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 15px;
          padding-top: 4px;
        }

        .timeline-line {
          position: absolute;
          top: 33px;
          left: 9%;
          right: 9%;
          height: 2px;
          border-radius: 10px;
          background: #e9eaf2;
          z-index: 0;
        }

        .timeline-progress {
          width: 0;
          height: 100%;
          border-radius: 10px;
          background: linear-gradient(
            90deg,
            #304ffe,
            #a5adff,
            #f29bbd
          );
          box-shadow: 0 0 10px rgba(48, 79, 254, 0.2);
        }

        .workflow-visible .timeline-progress {
          animation: timelineFill 3.6s ease forwards;
        }

        @keyframes timelineFill {
          from { width: 0; }
          to { width: 100%; }
        }

        /* Individual Step */

        .workflow-step {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          flex-direction: column;
          min-width: 0;
          text-align: center;
          opacity: 0;
          transform: translateY(35px) scale(0.94);
          filter: blur(5px);
        }

        .workflow-visible .workflow-step {
          animation: stepReveal 0.75s cubic-bezier(.2,.8,.2,1) forwards;
          animation-delay: var(--step-delay);
        }

        @keyframes stepReveal {
          0% {
            opacity: 0;
            transform: translateY(35px) scale(0.94);
            filter: blur(5px);
          }

          70% {
            opacity: 1;
            transform: translateY(-4px) scale(1.01);
            filter: blur(0);
          }

          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
          }
        }

        /* Icon Glass */

        .workflow-icon {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 66px;
          height: 66px;
          flex-shrink: 0;
          border: 1px solid rgba(255, 255, 255, 0.9);
          border-radius: 50%;
          color: #304ffe;

          background: linear-gradient(
            145deg,
            rgba(255, 255, 255, 0.95),
            rgba(236, 240, 255, 0.85)
          );

          box-shadow:
            0 7px 22px rgba(48, 79, 254, 0.12),
            inset 0 1px 4px rgba(255, 255, 255, 1);

          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);

          transition: transform 0.35s ease, box-shadow 0.35s ease;
        }

        .workflow-step:nth-child(even) .workflow-icon {
          color: #df82a6;
          background: linear-gradient(
            145deg,
            rgba(255, 255, 255, 0.96),
            rgba(255, 237, 245, 0.9)
          );

          box-shadow:
            0 7px 22px rgba(242, 155, 189, 0.16),
            inset 0 1px 4px rgba(255, 255, 255, 1);
        }

        .icon-glass {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.55);
        }

        .workflow-step:hover .workflow-icon {
          transform: translateY(-5px) scale(1.06);
          box-shadow: 0 12px 25px rgba(48, 79, 254, 0.18);
        }

        /* Step Number */

        .workflow-number {
          margin-top: 12px;
          margin-bottom: 12px;
          color: #353541;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 0.5px;
        }

        /* Glass Cards */

        .workflow-card {
          position: relative;
          display: flex;
          flex-direction: column;
          width: 100%;
          min-height: 175px;
          padding: 17px 13px;
          border: 1px solid rgba(255, 255, 255, 0.95);
          border-radius: 16px;

          background: linear-gradient(
            145deg,
            rgba(255, 255, 255, 0.88),
            rgba(246, 247, 255, 0.72),
            rgba(255, 245, 250, 0.75)
          );

          box-shadow:
            0 8px 25px rgba(38, 49, 100, 0.055),
            inset 0 1px 2px rgba(255, 255, 255, 0.95);

          backdrop-filter: blur(15px);
          -webkit-backdrop-filter: blur(15px);

          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease,
            border-color 0.3s ease;

          overflow: hidden;
        }

        .workflow-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 3px;
          background: linear-gradient(
            90deg,
            #304ffe,
            #f29bbd
          );
          opacity: 0.75;
        }

        .workflow-card:hover {
          transform: translateY(-5px);
          border-color: rgba(48, 79, 254, 0.2);
          box-shadow:
            0 14px 30px rgba(48, 79, 254, 0.09),
            0 8px 20px rgba(242, 155, 189, 0.08);
        }

        .workflow-tag {
          align-self: center;
          margin-bottom: 10px;
          padding: 5px 10px;
          border: 1px solid rgba(48, 79, 254, 0.12);
          border-radius: 30px;
          background: rgba(48, 79, 254, 0.055);
          color: #304ffe;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 1.2px;
        }

        .workflow-step:nth-child(even) .workflow-tag {
          border-color: rgba(242, 155, 189, 0.25);
          background: rgba(242, 155, 189, 0.10);
          color: #c76e91;
        }

        .workflow-card h3 {
          margin: 0;
          color: #282833;
          font-size: 14px;
          font-weight: 700;
          line-height: 1.45;
          letter-spacing: -0.3px;
        }

        .workflow-card p {
          margin: 9px 0 0;
          color: #74747f;
          font-size: 11px;
          font-weight: 400;
          line-height: 1.75;
        }

        /* Tablet */

        @media (max-width: 1000px) {
          .workflow-section {
            padding: 55px 5%;
          }

          .workflow-timeline {
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 25px 15px;
          }

          .timeline-line {
            display: none;
          }

          .workflow-card {
            min-height: 170px;
          }
        }

        /* Mobile */

        @media (max-width: 600px) {
          .workflow-section {
            padding: 42px 6% 55px;
          }

          .workflow-heading {
            margin-bottom: 30px;
          }

          .workflow-heading-title h2 {
            font-size: 22px;
          }

          .workflow-timeline {
            display: flex;
            flex-direction: column;
            gap: 19px;
            padding: 0 0 0 2px;
          }

          .workflow-step {
            display: grid;
            grid-template-columns: 58px minmax(0, 1fr);
            grid-template-rows: auto 1fr;
            column-gap: 14px;
            align-items: start;
            text-align: left;
            min-height: auto;
            padding-bottom: 0;
          }

          .workflow-icon {
            grid-column: 1;
            grid-row: 1 / 3;
            width: 54px;
            height: 54px;
          }

          .icon-glass {
            width: 40px;
            height: 40px;
          }

          .icon-glass svg {
            width: 23px;
            height: 23px;
          }

          .workflow-number {
            grid-column: 2;
            grid-row: 1;
            margin: 0 0 7px;
            font-size: 12px;
          }

          .workflow-card {
            grid-column: 2;
            grid-row: 2;
            min-height: auto;
            padding: 15px;
          }

          .workflow-tag {
            align-self: flex-start;
          }

          .workflow-card h3 {
            font-size: 15px;
          }

          .workflow-card p {
            font-size: 12px;
            line-height: 1.7;
          }

          .workflow-step:not(:last-child)::before {
            content: '';
            position: absolute;
            top: 55px;
            left: 26px;
            height: calc(100% + 19px);
            width: 2px;
            background: linear-gradient(
              180deg,
              #304ffe,
              #f29bbd
            );
            opacity: 0.35;
            z-index: -1;
          }

          .timeline-line {
            display: none;
          }
        }

        /* Small Mobile */

        @media (max-width: 380px) {
          .workflow-section {
            padding-left: 5%;
            padding-right: 5%;
          }

          .workflow-card {
            padding: 13px;
          }

          .workflow-heading-title h2 {
            font-size: 20px;
          }
        }

        /* Accessibility */

        @media (prefers-reduced-motion: reduce) {
          .workflow-step,
          .workflow-heading {
            opacity: 1;
            transform: none;
            filter: none;
            animation: none !important;
            transition: none;
          }

          .timeline-progress {
            width: 100% !important;
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}
