import React, { useEffect, useRef } from "react";
import { Globe } from "lucide-react";
import myimage from "../../assets/images/myimage.jpg";

function HomePageAboutMe() {
  const sectionRef = useRef(null);

  const experiences = [
    {
      company: "CMT AI",
      role: "UI/UX Designer Intern",
      period: "JUNE 2025 — SEPTEMBER 2025",
      url: "https://www.cmtai.in/",
    },
    {
      company: "Oscorm",
      role: "UI/UX Designer",
      period: "OCTOBER 2025 — PRESENT",
      url: "https://oscorm.com/",
      featured: true,
    },
  ];

  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return;

    const elements = root.querySelectorAll(".pr-animate");

    if (
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      elements.forEach((element) =>
        element.classList.add("pr-in-view")
      );
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("pr-in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -20px 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="pr-about" id="about" ref={sectionRef}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@500;600;700&family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,500;0,600;1,500&display=swap');

        .pr-about,
        .pr-about * {
          box-sizing: border-box;
        }

        .pr-about {
          --blue: #304ffe;
          --pink: #f29bbd;
          --dark: #242039;
          --muted: #777489;
          --border: #eae8ef;

          position: relative;
          isolation: isolate;
          width: 100%;
          max-width: 100%;
          overflow: hidden;
          background: #fff;
          color: var(--dark);
          font-family: 'DM Sans', sans-serif;
          scroll-margin-top: 80px;
        }

        .pr-about::before,
        .pr-about::after {
          content: "";
          position: absolute;
          z-index: -1;
          width: 180px;
          height: 180px;
          border-radius: 50%;
          filter: blur(100px);
          opacity: .045;
          pointer-events: none;
        }

        .pr-about::before {
          top: 0;
          left: -130px;
          background: var(--blue);
        }

        .pr-about::after {
          right: -130px;
          bottom: 0;
          background: var(--pink);
        }

        /* Main container: balanced left-right padding */

        .pr-container {
          width: 100%;
          max-width: 1500px;
          margin: 0 auto;
          padding: 36px 64px 40px;
        }

        /* Scroll animation */

        .pr-animate {
          opacity: 0;
          transform: translateY(14px);
          transition:
            opacity .6s ease,
            transform .6s ease;
          transition-delay: var(--delay, 0ms);
        }

        .pr-animate.pr-in-view {
          opacity: 1;
          transform: translateY(0);
        }

        /* Centered section heading */

        .pr-heading-wrap {
          width: 100%;
          margin: 0 auto 32px;
          text-align: center;
        }

        .pr-eyebrow {
          display: block;
          width: fit-content;
          margin: 0 auto 10px;
          color: var(--dark);
          font-family: 'Playfair Display', serif;
          font-size: 16px;
          font-style: italic;
          font-weight: 500;
        }

        .pr-heading {
          display: flex;
          flex-wrap: wrap;
          align-items: baseline;
          justify-content: center;
          column-gap: 9px;
          row-gap: 0;
          margin: 0;
          color: var(--dark);
          font-family: 'DM Sans', sans-serif;
          font-size: clamp(25px, 2.7vw, 36px);
          font-weight: 700;
          line-height: 1.3;
          letter-spacing: -1px;
        }

        .pr-heading-main {
          color: var(--dark);
          font-weight: 700;
        }

        .pr-heading-accent {
          display: inline-block;
          color: var(--pink);
          font-family: 'Caveat', cursive;
          font-size: 1.2em;
          font-weight: 600;
          line-height: 1;
          letter-spacing: 0;
          white-space: nowrap;
        }

        /* Main two-column layout */

        .pr-main-grid {
          display: grid;
          grid-template-columns: 260px minmax(0, 1fr);
          align-items: start;
          gap: clamp(36px, 4vw, 60px);
          width: 100%;
        }

        .pr-profile,
        .pr-content {
          width: 100%;
          min-width: 0;
        }

        .pr-profile {
          width: 100%;
          max-width: 250px;
          justify-self: center;
        }

        /* Profile image */

        .pr-photo-frame {
          position: relative;
          width: min(100%, 190px);
          height: 250px;
          margin: 0 auto;
          padding: 4px;
          overflow: hidden;
          border: 2px solid rgba(48, 79, 254, .16);
          border-radius: 15px;
          background: linear-gradient(
            135deg,
            rgba(48, 79, 254, .10),
            rgba(242, 155, 189, .20)
          );
          box-shadow: 7px 7px 0 rgba(242, 155, 189, .19);
          transform: rotate(-.4deg);
          transition:
            transform .35s ease,
            border-color .35s ease;
        }

        .pr-photo-frame:hover {
          transform: rotate(0deg) translateY(-3px);
          border-color: rgba(48, 79, 254, .3);
        }

        .pr-photo {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 25%;
          border-radius: 9px;
          transition: transform .5s ease;
        }

        .pr-photo-frame:hover .pr-photo {
          transform: scale(1.025);
        }

        /* Profile details */

        .pr-profile-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          margin-top: 19px;
        }

        .pr-profile-label {
          display: inline-block;
          margin-bottom: 6px;
          color: var(--blue);
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 1.5px;
        }

        .pr-name {
          margin: 0 0 4px;
          color: var(--dark);
          font-family: 'Playfair Display', serif;
          font-size: 23px;
          font-weight: 500;
          line-height: 1.3;
        }

        .pr-role {
          margin: 0;
          color: var(--muted);
          font-size: 11px;
          line-height: 1.7;
        }

        .pr-monogram {
          display: grid;
          flex-shrink: 0;
          width: 39px;
          height: 39px;
          place-items: center;
          border: 1px solid var(--border);
          border-radius: 50%;
          color: var(--blue);
          font-family: 'Playfair Display', serif;
          font-size: 21px;
          transition:
            border-color .3s ease,
            background .3s ease;
        }

        .pr-profile-bottom:hover .pr-monogram {
          border-color: var(--pink);
          background: #fffafd;
        }

        /* About content */

        .pr-content {
          padding-top: 1px;
        }

        .pr-about-copy {
          color: var(--muted);
          font-size: 12px;
          line-height: 1.85;
          overflow-wrap: break-word;
        }

        .pr-about-copy p {
          margin: 0 0 13px;
        }

        .pr-about-copy > p {
          clip-path: inset(0 0 100%);
          opacity: 0;
          transform: translateY(12px);
          transition:
            clip-path .75s cubic-bezier(.22, 1, .36, 1),
            opacity .45s ease,
            transform .65s cubic-bezier(.22, 1, .36, 1);
        }

        .pr-content.pr-in-view .pr-about-copy > p {
          clip-path: inset(0);
          opacity: 1;
          transform: translateY(0);
        }

        .pr-content.pr-in-view .pr-about-copy > p:nth-child(1) {
          transition-delay: 160ms;
        }

        .pr-content.pr-in-view .pr-about-copy > p:nth-child(2) {
          transition-delay: 300ms;
        }

        .pr-content.pr-in-view .pr-about-copy > p:nth-child(3) {
          transition-delay: 440ms;
        }

        .pr-content.pr-in-view .pr-about-copy > p:nth-child(4) {
          transition-delay: 580ms;
        }

        .pr-about-copy strong {
          color: #38324f;
          font-weight: 700;
        }

        /* Oscorm project highlight */

        .pr-project-note {
          margin-top: 16px !important;
          padding: 11px 13px;
          border-left: 2px solid var(--pink);
          border-radius: 0 5px 5px 0;
          background: #fffafd;
          color: var(--muted);
          font-size: 11px;
          line-height: 1.8;
        }

        .pr-project-note strong {
          color: var(--blue);
        }

        .pr-project-link {
          color: var(--blue);
          font-weight: 700;
          text-decoration: none;
          border-bottom: 1px solid rgba(48, 79, 254, .3);
          transition:
            color .2s ease,
            border-color .2s ease;
        }

        .pr-project-link:hover {
          color: #172dcc;
          border-color: var(--pink);
        }

        /* Experience section */

        .pr-experience {
          margin-top: 27px;
          padding-top: 20px;
          border-top: 1px solid var(--border);
        }

        .pr-experience-heading {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 12px;
          margin-bottom: 15px;
        }

        .pr-section-label {
          display: block;
          margin-bottom: 6px;
          color: var(--blue);
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 1.5px;
        }

        .pr-experience-title {
          margin: 0;
          color: var(--dark);
          font-family: 'Playfair Display', serif;
          font-size: 29px;
          font-weight: 500;
          line-height: 1.2;
        }

        .pr-experience-title span {
          color: var(--pink);
        }

        .pr-position-count {
          flex-shrink: 0;
          padding: 5px 9px;
          border: 1px solid var(--border);
          border-radius: 20px;
          color: var(--muted);
          font-size: 8px;
          font-weight: 700;
          letter-spacing: .5px;
        }

        .pr-experience-row {
          display: grid;
          grid-template-columns:
            minmax(0, 1fr)
            minmax(75px, .7fr)
            auto;
          align-items: center;
          gap: 9px;
          min-height: 52px;
          padding: 10px 0;
          border-bottom: 1px solid var(--border);
          transition: padding .25s ease;
        }

        .pr-experience-row:hover {
          padding-right: 4px;
          padding-left: 4px;
        }

        .pr-exp-role {
          padding-left: 11px;
          border-left: 2px solid var(--pink);
          color: #29263a;
          font-size: 11px;
          font-weight: 600;
          line-height: 1.6;
        }

        .pr-exp-company {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          min-width: 0;
          color: var(--muted);
          font-size: 10px;
          font-weight: 600;
          text-decoration: none;
          overflow-wrap: anywhere;
          transition: color .25s ease;
        }

        .pr-exp-company:hover {
          color: var(--blue);
        }

        .pr-exp-company svg {
          flex-shrink: 0;
          color: var(--blue);
          transition:
            color .25s ease,
            transform .25s ease;
        }

        .pr-exp-company:hover svg {
          color: var(--pink);
          transform: translateY(-1px);
        }

        .pr-exp-date {
          display: block;
          color: #858092;
          font-size: 8px;
          font-weight: 700;
          line-height: 1.6;
          text-align: right;
          white-space: normal;
        }

        .pr-featured {
          display: inline-block;
          margin-top: 5px;
          color: var(--blue);
          font-size: 8px;
          font-weight: 700;
          letter-spacing: .5px;
        }

        .pr-bottom-note {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-top: 15px;
          color: #89829a;
          font-size: 10px;
          line-height: 1.7;
        }

        .pr-bottom-star {
          color: var(--pink);
          font-size: 16px;
        }

        /* Medium laptop */

        @media (max-width: 1100px) {
          .pr-container {
            padding-left: 32px;
            padding-right: 32px;
          }

          .pr-main-grid {
            grid-template-columns: 230px minmax(0, 1fr);
            gap: 28px;
          }

          .pr-heading {
            font-size: clamp(25px, 3vw, 33px);
          }

          .pr-photo-frame {
            height: clamp(245px, 28vw, 320px);
          }
        }

        /* Tablet */

        @media (max-width: 850px) {
          .pr-container {
            padding-left: 20px;
            padding-right: 20px;
          }

          .pr-heading-wrap {
            margin-bottom: 27px;
          }

          .pr-heading {
            font-size: clamp(23px, 3.2vw, 30px);
            column-gap: 7px;
          }

          .pr-main-grid {
            grid-template-columns: 200px minmax(0, 1fr);
            gap: 22px;
          }

          .pr-profile {
            max-width: 200px;
          }

          .pr-photo-frame {
            width: min(100%, 175px);
          }

          .pr-name {
            font-size: 20px;
          }

          .pr-about-copy {
            font-size: 11px;
            line-height: 1.8;
          }

          .pr-experience-row {
            grid-template-columns:
              minmax(0, 1fr)
              minmax(70px, .8fr);
            gap: 8px;
          }

          .pr-exp-date {
            grid-column: 1 / -1;
            padding-left: 11px;
            text-align: left;
          }
        }

        /* Mobile */

        @media (max-width: 650px) {
          .pr-container {
            padding-left: 18px;
            padding-right: 18px;
          }

          .pr-heading-wrap {
            margin-bottom: 22px;
            padding: 0;
          }

          .pr-eyebrow {
            margin-bottom: 9px;
            font-size: 15px;
          }

          .pr-heading {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: baseline;
            column-gap: 6px;
            row-gap: 2px;
            font-size: clamp(22px, 5.5vw, 30px);
            line-height: 1.35;
            letter-spacing: -.7px;
          }

          .pr-heading-accent {
            font-size: 1.14em;
          }

          .pr-main-grid {
            grid-template-columns: minmax(0, 1fr);
            gap: 24px;
          }

          .pr-profile {
            width: 100%;
            max-width: 360px;
            margin: 0 auto;
          }

          .pr-photo-frame {
            height: clamp(260px, 78vw, 340px);
          }

          .pr-content {
            padding-top: 0;
          }

          .pr-about-copy {
            font-size: 12px;
            line-height: 1.85;
          }

          .pr-project-note {
            padding: 10px 12px;
          }

          .pr-experience {
            margin-top: 22px;
            padding-top: 16px;
          }

          .pr-experience-row {
            grid-template-columns:
              minmax(0, 1fr)
              minmax(75px, .8fr);
            gap: 8px;
          }

          .pr-exp-company {
            justify-self: end;
          }

          .pr-exp-date {
            grid-column: 1 / -1;
            padding-left: 11px;
            text-align: left;
            font-size: 8px;
          }
        }

        /* Small phones */

        @media (max-width: 390px) {
          .pr-container {
            padding-left: 16px;
            padding-right: 16px;
          }

          .pr-heading {
            font-size: 21px;
            column-gap: 5px;
          }

          .pr-heading-accent {
            font-size: 1.1em;
          }

          .pr-photo-frame {
            height: 300px;
          }

          .pr-name {
            font-size: 20px;
          }

          .pr-experience-title {
            font-size: 26px;
          }

          .pr-exp-role,
          .pr-exp-company {
            font-size: 9px;
          }

          .pr-experience-row {
            grid-template-columns: minmax(0, 1fr) auto;
            column-gap: 8px;
          }

          .pr-exp-date {
            overflow-wrap: anywhere;
          }
        }

        /* Very narrow phones */

        @media (max-width: 340px) {
          .pr-heading {
            flex-direction: column;
            align-items: center;
            gap: 0;
            font-size: 25px;
          }

          .pr-photo-frame {
            height: 300px;
          }
        }

        /* Accessibility */

        @media (prefers-reduced-motion: reduce) {
          .pr-about *,
          .pr-about *::before,
          .pr-about *::after {
            animation: none !important;
            transition: none !important;
          }

          .pr-animate {
            opacity: 1;
            transform: none;
          }

          .pr-about .pr-about-copy > p {
            clip-path: none;
            opacity: 1;
            transform: none;
          }
        }
      `}</style>

      <div className="pr-container">
        {/* Centered section heading */}

        <header className="pr-heading-wrap pr-animate">
          <span className="pr-eyebrow">/ Who Am I</span>

          <h1 className="pr-heading">
            <span className="pr-heading-main">
              I turn ideas into
            </span>

            <span className="pr-heading-accent">
              digital experiences.
            </span>
          </h1>
        </header>

        <div className="pr-main-grid">
          {/* Left profile */}

          <aside className="pr-profile pr-animate">
            <div className="pr-photo-frame">
              <img
                src={myimage}
                alt="Priyanka Chandel"
                className="pr-photo"
              />
            </div>

            <div className="pr-profile-bottom">
              <div>
                <span className="pr-profile-label">
                  HELLO, I'M
                </span>

                <h2 className="pr-name">
                  Priyanka Chandel
                </h2>

                <p className="pr-role">
                  UI/UX Designer &amp; Frontend Developer
                </p>
              </div>

              <div className="pr-monogram">P.</div>
            </div>
          </aside>

          {/* Right About content */}

          <main
            className="pr-content pr-animate"
            style={{ "--delay": "100ms" }}
          >
            <div className="pr-about-copy">
              <p>
                I’m a{" "}
                <strong>
                  UI/UX Designer and Frontend Developer
                </strong>{" "}
                with 1+ year of professional experience creating
                intuitive, responsive, and visually engaging web
                and mobile experiences.
              </p>

              <p>
                Skilled in{" "}
                <strong>
                  Figma, user research, wireframing, prototyping,
                  and design systems
                </strong>
                , I enjoy transforming ideas into user-centered
                designs that balance aesthetics, usability, and
                functionality. Over time, I’ve worked on various
                UI/UX projects, exploring creative solutions and
                designing seamless digital experiences for
                different user needs.
              </p>

              <p>
                With a foundation in frontend development using{" "}
                <strong>HTML, CSS, and JavaScript</strong>, I bridge
                the gap between design and development to bring
                ideas to life. I’m passionate about continuous
                learning, thoughtful design, and creating digital
                products that make a meaningful impact.
              </p>

              <p className="pr-project-note">
                At <strong>Oscorm</strong>, I designed the website
                experience for{" "}
                <a
                  href="https://oscorm.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pr-project-link"
                >
                  Oscorm.com
                </a>
                , bringing together intuitive user flows, thoughtful
                visual design, and usability-focused interface
                decisions to create a clear and engaging digital
                experience.
              </p>
            </div>

            {/* Experience */}

            <section className="pr-experience">
              <div
                className="pr-experience-heading pr-animate"
                style={{ "--delay": "80ms" }}
              >
                <div>
                  <span className="pr-section-label">
                    MY PROFESSIONAL JOURNEY
                  </span>

                  <h2 className="pr-experience-title">
                    Experience<span>.</span>
                  </h2>
                </div>

                <span className="pr-position-count">
                  {String(experiences.length).padStart(2, "0")} POSITIONS
                </span>
              </div>

              {experiences.map((experience, index) => (
                <article
                  key={experience.company}
                  className="pr-experience-row pr-animate"
                  style={{ "--delay": `${index * 100}ms` }}
                >
                  <div>
                    <div className="pr-exp-role">
                      {experience.role}
                    </div>

                    {experience.featured && (
                      <span className="pr-featured">
                        ✦ DESIGN EXPERIENCE
                      </span>
                    )}
                  </div>

                  <a
                    className="pr-exp-company"
                    href={experience.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${experience.company} website`}
                    title={`Visit ${experience.company} website`}
                  >
                    <Globe size={13} strokeWidth={1.8} />
                    <span>{experience.company}</span>
                  </a>

                  <span className="pr-exp-date">
                    {experience.period}
                  </span>
                </article>
              ))}

              <div className="pr-bottom-note">
                <span className="pr-bottom-star">✳</span>

                <span>
                  Thoughtful design, clear experiences, meaningful impact.
                </span>
              </div>
            </section>
          </main>
        </div>
      </div>
    </section>
  );
}

export default HomePageAboutMe;