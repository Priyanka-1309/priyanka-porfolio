
import React, { useRef } from "react";
import {
  ArrowUpRight,
  Brush,
  Code2,
  PanelsTopLeft,
  PenTool,
  Sparkles,
  Waypoints,
} from "lucide-react";

import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";

const COLORS = {
  blue: "#E1E8FF",
  pink: "#FCE3ED",
  blueAccent: "#304ffe",
  pinkAccent: "#e987ad",
};

const services = [
  {
    title: "UI/UX Design",
    category: "User experience",
    description:
      "Thoughtful user flows and polished interfaces for web and mobile, grounded in real user needs and clear visual hierarchy.",
    tags: ["User flows", "Interface design", "Figma"],
    bg: COLORS.blue,
    accent: COLORS.blueAccent,
    Icon: Brush,
  },
  {
    title: "Website, Landing Page & App Design",
    category: "Digital experiences",
    description:
      "Clear, responsive designs for business websites, focused landing pages and app experiences—from the first page to the key user journey.",
    tags: ["Websites", "Landing pages", "Apps"],
    bg: COLORS.pink,
    accent: COLORS.pinkAccent,
    Icon: PanelsTopLeft,
  },
  {
    title: "Wireframing & Prototyping",
    category: "Ideas into reality",
    description:
      "Low-fidelity wireframes and clickable Figma prototypes that make ideas easier to explore, share and validate before development.",
    tags: ["Wireframes", "User journeys", "Prototypes"],
    bg: COLORS.blue,
    accent: COLORS.blueAccent,
    Icon: Waypoints,
  },
  {
    title: "Logo & Brand Identity",
    category: "A distinct first impression",
    description:
      "Memorable logo and visual identity explorations that give your product a consistent, recognizable presence.",
    tags: ["Logo design", "Visual identity", "Brand assets"],
    bg: COLORS.pink,
    accent: COLORS.pinkAccent,
    Icon: PenTool,
  },
  {
    title: "Frontend Development",
    category: "Design meets code",
    description:
      "Bringing design-led pages to life with responsive HTML and CSS, plus JavaScript for polished details.",
    tags: ["HTML", "CSS", "JavaScript"],
    bg: COLORS.blue,
    accent: COLORS.blueAccent,
    Icon: Code2,
  },
  {
    title: "Website UI Improvements",
    category: "Better by design",
    description:
      "A fresh look at your existing website to uncover usability gaps, improve visual clarity and make important actions easier to find.",
    tags: ["UI review", "Usability", "Iteration"],
    bg: COLORS.pink,
    accent: COLORS.pinkAccent,
    Icon: Sparkles,
  },
];

const STYLES = `
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=Caveat:wght@600;700&display=swap');

.service-section {
  --ink: #242039;
  --muted: #777489;

  position: relative;
  width: 100%;
  padding: 70px 5vw 20px;
  background: #fff;
  color: var(--ink);
  font-family: 'DM Sans', sans-serif;
  overflow: visible !important;
}

.service-section *,
.service-section *::before,
.service-section *::after {
  box-sizing: border-box;
}

.service-shell {
  width: min(1360px, 100%);
  margin: auto;
  display: grid;
  grid-template-columns: minmax(210px, .72fr) minmax(0, 2fr);
  gap: clamp(28px, 4.2vw, 64px);
  align-items: start;
  position: relative;
  overflow: visible !important;
}

/* LEFT CONTENT */

.service-heading {
  position: sticky;
  position: -webkit-sticky;
  top: 100px;
  align-self: start;
  height: fit-content;
  z-index: 20;
  padding-top: 10px;
}

.service-eyebrow {
  display: inline-block;
  margin-bottom: 20px;
  color: #304ffe;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: .2em;
}

.service-title {
  display: flex;
  flex-direction: column;
  margin: 0;
  font-size: clamp(36px, 4vw, 58px);
  font-weight: 800;
  line-height: .99;
  letter-spacing: -.065em;
}

.service-title-script {
  width: max-content;
  margin-top: 8px;
  color: #e987ad;
  font-family: 'Caveat', cursive;
  font-size: 1.4em;
  transform: rotate(-5deg);
}

.service-intro {
  max-width: 290px;
  margin-top: 24px;
  color: var(--muted);
  font-size: 13px;
  line-height: 1.8;
}

.service-contact {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  margin-top: 25px;
  padding: 13px 18px;
  border: 1px solid rgba(48,79,254,.2);
  border-radius: 50px;
  color: var(--ink);
  background: white;
  box-shadow: 0 5px 16px rgba(48,79,254,.06);
  font-size: 11px;
  font-weight: 800;
  text-decoration: none;
  transition: .3s ease;
}

.service-contact:hover {
  transform: translateY(-4px);
}

.service-contact svg {
  color: #e987ad;
}

/* RIGHT CARDS */

.service-grid {
  position: relative;
  width: 100%;
  min-width: 0;

  /* Removed extra bottom space */
  padding-bottom: 0;

  overflow: visible !important;
}

.service-card-wrap {
  position: sticky;
  position: -webkit-sticky;
  top: calc(50vh - 125px);
  width: 100%;
  height: 270px;
  margin-bottom: 25px;
  perspective: 1200px;
  overflow: visible;
}

.service-card-wrap:last-child {
  margin-bottom: 0;
  height: 250px;
}

/* CARD DESIGN */

.service-card {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 250px;
  padding: 24px 28px;
  overflow: hidden;
  border: 2px solid rgba(255,255,255,.95);
  border-radius: 25px;
  background: var(--card-bg);
  color: var(--ink);

  /* Light shadow */
  box-shadow: 0 3px 10px rgba(36,32,57,.035);

  transform-origin: top center;
  backface-visibility: hidden;
  will-change: transform, opacity;
  transition: box-shadow .35s ease;
}

.service-card:hover {
  box-shadow: 0 5px 14px rgba(36,32,57,.05);
}

/* CARD TOP */

.service-card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  position: relative;
  z-index: 2;
}

.service-icon-wrap {
  display: grid;
  place-items: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  color: var(--card-accent);
  background: rgba(255,255,255,.8);
  transition: transform .45s cubic-bezier(.2,.8,.2,1);
}

.service-card:hover .service-icon-wrap {
  transform: rotate(-12deg) scale(1.12);
}

.service-card-category {
  color: #777489;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: .08em;
}

.service-description {
  position: relative;
  z-index: 2;
  max-width: 490px;
  margin: 12px 0;
  color: #696779;
  font-size: 12px;
  line-height: 1.8;
}

.service-card-bottom {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 12px;
}

.service-card h3 {
  max-width: 360px;
  margin: 0;
  font-size: clamp(16px, 1.5vw, 21px);
  font-weight: 800;
  line-height: 1.3;
  letter-spacing: -.04em;
}

.service-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
  margin-top: 11px;
}

.service-tags span {
  padding: 6px 10px;
  border: 1px solid rgba(48,79,254,.1);
  border-radius: 30px;
  color: #696779;
  background: rgba(255,255,255,.7);
  font-size: 9px;
  font-weight: 600;
}

.service-number {
  flex-shrink: 0;
  color: var(--card-accent);
  font-size: 20px;
  font-weight: 800;
}

.service-card-decoration {
  position: absolute;
  right: -70px;
  bottom: -110px;
  width: 220px;
  height: 220px;
  border-radius: 50%;
  background: rgba(255,255,255,.25);
  pointer-events: none;
}

/* TABLET */

@media(max-width: 850px) {
  .service-shell {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .service-heading {
    position: relative !important;
    top: auto;
    height: auto;
    text-align: center;
  }

  .service-title {
    align-items: center;
    font-size: 48px;
  }

  .service-title-script {
    transform-origin: center;
  }

  .service-intro {
    margin: 20px auto 0;
  }

  .service-card-wrap {
    top: calc(50vh - 125px);
  }
}

/* MOBILE */

@media(max-width: 600px) {
  .service-section {
    padding: 55px 5vw 15px;
  }

  .service-title {
    font-size: clamp(38px, 9vw, 50px);
  }

  .service-card-wrap {
    top: calc(50vh - 130px);
    height: 285px;
    margin-bottom: 25px;
  }

  .service-card-wrap:last-child {
    height: 260px;
    margin-bottom: 0;
  }

  .service-card {
    height: 260px;
    padding: 18px;
    border-radius: 20px;
  }

  .service-card h3 {
    font-size: 15px;
  }

  .service-description {
    font-size: 11px;
  }

  .service-card-category {
    font-size: 8px;
  }

  .service-tags span {
    font-size: 8px;
    padding: 5px 7px;
  }
}

@media(prefers-reduced-motion: reduce) {
  .service-section *,
  .service-section *::before,
  .service-section *::after {
    animation: none !important;
    transition: none !important;
  }
}
`;

function StackingCard({ service, index }) {
  const ref = useRef(null);
  const Icon = service.Icon;
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.35, 0.75, 1],
    [1, 1, 0.35, 0]
  );

  const scale = useTransform(
    scrollYProgress,
    [0, 0.8],
    [1, 0.93]
  );

  const y = useTransform(
    scrollYProgress,
    [0, 0.8],
    [0, -12]
  );

  return (
    <div
      ref={ref}
      className="service-card-wrap"
      style={{ zIndex: index + 1 }}
    >
      <motion.article
        className="service-card"
        style={{
          "--card-bg": service.bg,
          "--card-accent": service.accent,
          scale: reduceMotion ? 1 : scale,
          y: reduceMotion ? 0 : y,
          opacity: reduceMotion ? 1 : opacity,
        }}
      >
        <div className="service-card-top">
          <span className="service-icon-wrap">
            <Icon size={21} strokeWidth={1.9} />
          </span>

          <span className="service-card-category">
            {service.category}
          </span>
        </div>

        <p className="service-description">
          {service.description}
        </p>

        <div className="service-card-bottom">
          <div>
            <h3>{service.title}</h3>

            <div className="service-tags">
              {service.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>

          <span className="service-number">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <span className="service-card-decoration" />
      </motion.article>
    </div>
  );
}

export default function HomePageService() {
  return (
    <>
      <style>{STYLES}</style>

      <section className="service-section">
        <div className="service-shell">

          {/* LEFT SIDE CONTENT - UNCHANGED */}

          <header className="service-heading">
            <span className="service-eyebrow">
              HOW I CAN HELP
            </span>

            <h2 className="service-title">
              <span>How Can I</span>

              <span className="service-title-script">
                Assist You?
              </span>
            </h2>

            <p className="service-intro">
              Thoughtful design and development to turn your ideas
              into clear, engaging digital experiences.
            </p>

            <a
              className="service-contact"
              href="mailto:priyankachandel348@gmail.com"
            >
              Let's work together
              <ArrowUpRight size={17} />
            </a>
          </header>

          {/* RIGHT SIDE STACKING CARDS */}

          <div className="service-grid">
            {services.map((service, index) => (
              <StackingCard
                key={service.title}
                service={service}
                index={index}
              />
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
