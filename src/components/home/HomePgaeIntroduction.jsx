
import React from "react";
import { useNavigate } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";

import instagram from "../../assets/images/instagram.png";
import linkedin from "../../assets/images/linkedin.png";
import mail from "../../assets/images/mail.png";

function HomePageIntroduction() {
  const navigate = useNavigate();
  const reduceMotion = useReducedMotion();

  const socials = [
    {
      name: "Instagram",
      icon: instagram,
      href: "https://www.instagram.com/priyankadesignstudio1/",
    },
    {
      name: "LinkedIn",
      icon: linkedin,
      href: "https://www.linkedin.com/in/priyanka-chandel-2b1574262",
    },
    {
      name: "Email",
      icon: mail,
      href: "mailto:priyankachandel348@gmail.com",
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const socialContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.7,
      },
    },
  };

  const socialItem = {
    hidden: { opacity: 0, y: 12, scale: 0.85 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  const toolAnimation = (delay = 0) => ({
    initial: reduceMotion
      ? false
      : { opacity: 0, y: 20, scale: 0.9 },
    animate: { opacity: 1, y: 0, scale: 1 },
    transition: {
      duration: reduceMotion ? 0 : 0.7,
      delay: reduceMotion ? 0 : delay,
      ease: "easeOut",
    },
  });

  return (
    <section className="poster-hero" id="home">
      {/* Background glow */}
      <motion.div
        className="poster-glow"
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      />

      {/* Decorative background lines */}
      <motion.svg
        className="poster-lines"
        viewBox="0 0 1440 650"
        preserveAspectRatio="none"
        aria-hidden="true"
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.2 }}
      >
        <path d="M-60 230 C80 180 100 -40 190 15 C270 65 70 220 45 320 C10 445 170 525 315 420 C420 340 520 260 550 300 C590 360 370 435 400 515 C425 585 620 510 735 440 C805 395 820 600 940 550 C1060 500 1160 355 1215 270 C1260 200 1110 160 1150 120 C1190 80 1310 110 1450 -20" />
        <path d="M-40 255 C65 220 105 80 170 30 C225 -5 210 80 160 130" />
        <path d="M620 650 C690 570 760 625 850 585 C920 555 945 470 990 520 C1030 565 1070 610 1130 565" />
      </motion.svg>

      {/* Figma */}
      <motion.div
        className="poster-tool figma-tool"
        aria-label="Figma"
        {...toolAnimation(0.2)}
      >
        <div className="figma-tile">
          <svg viewBox="0 0 38 56" aria-hidden="true">
            <path fill="#F24E1E" d="M9 0h10v18H9A9 9 0 0 1 9 0Z" />
            <path fill="#FF7262" d="M19 0h10a9 9 0 0 1 0 18H19Z" />
            <path fill="#A259FF" d="M9 18h10v18H9a9 9 0 0 1 0-18Z" />
            <circle cx="28" cy="27" r="9" fill="#1ABCFE" />
            <path fill="#0ACF83" d="M9 36h10v10a9 9 0 1 1-10-10Z" />
          </svg>
        </div>
        <span>Figma</span>
      </motion.div>

      {/* Photoshop */}
      <motion.div
        className="poster-tool photoshop-tool"
        aria-label="Photoshop"
        {...toolAnimation(0.35)}
      >
        <div className="adobe-tile photoshop-tile">
          <span>Ps</span>
        </div>
        <span>Photoshop</span>
      </motion.div>

      {/* Adobe XD */}
      <motion.div
        className="poster-tool xd-tool"
        aria-label="Adobe XD"
        {...toolAnimation(0.5)}
      >
        <div className="adobe-tile xd-tile">
          <span>Xd</span>
        </div>
        <span>Adobe XD</span>
      </motion.div>

      {/* Canva */}
      <motion.div
        className="poster-tool canva-tool"
        aria-label="Canva"
        {...toolAnimation(0.65)}
      >
        <div className="canva-tile">
          <span>C</span>
        </div>
        <span>Canva</span>
      </motion.div>

      {/* Main introduction */}
      <motion.div
        className="poster-content"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.16,
              delayChildren: 0.1,
            },
          },
        }}
      >
        <motion.p className="poster-name" variants={fadeUp}>
          PRIYANKA CHANDEL
        </motion.p>

        {/* Animated heading */}
        <motion.h1
          className="poster-title"
          initial={
            reduceMotion
              ? false
              : { opacity: 0, y: 30, filter: "blur(8px)" }
          }
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          transition={{
            duration: reduceMotion ? 0 : 1,
            delay: reduceMotion ? 0 : 0.25,
            ease: "easeOut",
          }}
        >
          Design That
          <br />

          <motion.span
            className="poster-script-word"
            initial={
              reduceMotion
                ? false
                : { opacity: 0, scale: 0.82 }
            }
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: reduceMotion ? 0 : 0.8,
              delay: reduceMotion ? 0 : 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            Speaks.
          </motion.span>
        </motion.h1>

        <motion.p className="poster-subtitle" variants={fadeUp}>
          ( UI/UX Designer )
        </motion.p>

        <motion.p className="poster-tagline" variants={fadeUp}>
          Crafting thoughtful digital experiences,
          <br />
          one pixel at a time.
        </motion.p>

        {/* Social links */}
        <motion.div
          className="poster-socials"
          variants={socialContainer}
        >
          {socials.map((social) => (
            <motion.a
              key={social.name}
              href={social.href}
              aria-label={social.name}
              target={social.name === "Email" ? undefined : "_blank"}
              rel={
                social.name === "Email"
                  ? undefined
                  : "noopener noreferrer"
              }
              variants={socialItem}
              whileHover={
                reduceMotion
                  ? undefined
                  : {
                      y: -4,
                      scale: 1.08,
                      transition: { duration: 0.2 },
                    }
              }
              whileTap={reduceMotion ? undefined : { scale: 0.95 }}
            >
              <img src={social.icon} alt="" />
            </motion.a>
          ))}

          <motion.span className="poster-divider" variants={socialItem} />

          <motion.span className="poster-location" variants={socialItem}>
            Noida, India
          </motion.span>
        </motion.div>
      </motion.div>

      {/* Decorative stars */}
      <motion.span
        className="poster-spark spark-one"
        initial={reduceMotion ? false : { opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1, rotate: 90 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        ✳
      </motion.span>

      <motion.span
        className="poster-spark spark-two"
        initial={reduceMotion ? false : { opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1, rotate: -45 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        ✦
      </motion.span>

      <motion.span
        className="poster-spark spark-three"
        initial={reduceMotion ? false : { opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1, rotate: 90 }}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        ✳
      </motion.span>

      {/* Color palette */}
      <motion.div
        className="poster-color-card"
        aria-label="Design color palette"
        initial={
          reduceMotion
            ? false
            : { opacity: 0, x: -15, rotate: -12 }
        }
        animate={{ opacity: 1, x: 0, rotate: -7 }}
        transition={{ duration: 0.7, delay: 1 }}
      >
        <span className="palette-blue" />
        <span className="palette-pink" />
        <span className="palette-cream" />
        <span className="palette-dark" />
      </motion.div>

      {/* View Projects button */}
      <motion.button
        type="button"
        className="poster-contact"
        onClick={() => navigate("/projects")}
        aria-label="View my projects"
        initial={reduceMotion ? false : { opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.1 }}
        whileHover={reduceMotion ? undefined : { y: -3, scale: 1.04 }}
        whileTap={reduceMotion ? undefined : { scale: 0.96 }}
      >
        View My Projects <span>↗</span>
      </motion.button>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Inter:wght@300;400;500;600;700;800;900&display=swap');

        .poster-hero {
          position: relative;
          isolation: isolate;
          width: 100%;
          min-height: 720px;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 65px 24px 75px;
          background: #fff;
          color: #20191d;
          font-family: 'Inter', sans-serif;
          box-sizing: border-box;
        }

        .poster-hero *,
        .poster-hero *::before,
        .poster-hero *::after {
          box-sizing: border-box;
        }

        .poster-glow {
          position: absolute;
          z-index: -2;
          width: 88%;
          height: 95%;
          top: 2%;
          left: 6%;
          border-radius: 50%;
          background: radial-gradient(
            ellipse at center,
            rgba(255, 118, 166, .65) 0%,
            rgba(255, 156, 190, .43) 32%,
            rgba(255, 210, 225, .23) 58%,
            transparent 76%
          );
          filter: blur(30px);
          pointer-events: none;
        }

        .poster-lines {
          position: absolute;
          z-index: -1;
          inset: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .poster-lines path {
          fill: none;
          stroke: #999195;
          stroke-width: 1.8;
          stroke-linecap: round;
          opacity: .55;
          vector-effect: non-scaling-stroke;
        }

        .poster-content {
          position: relative;
          z-index: 4;
          width: min(100%, 1040px);
          padding: 40px 16px;
          text-align: center;
        }

        .poster-name {
          margin: 0 0 22px;
          color: #41353c;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 3px;
        }

        .poster-title {
          margin: 0 auto;
          color: #21191e;
          font-size: clamp(48px, 7vw, 92px);
          font-weight: 900;
          line-height: 1.12;
          letter-spacing: -.065em;
        }

        .poster-title .poster-script-word {
          position: relative;
          display: inline-block;
          padding: 0 8px 15px 0;
          background: linear-gradient(
            110deg,
            #536dff 10%,
            #a18aff 35%,
            #536dff 50%,
            #ec72b7 70%,
            #536dff 90%
          );
          background-size: 250% 100%;
          background-position: 100% 50%;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-family: 'Dancing Script', cursive;
          font-size: 1.12em;
          font-weight: 700;
          font-style: italic;
          letter-spacing: -.045em;
          line-height: 1.2;
          filter: drop-shadow(0 5px 12px rgba(83, 109, 255, .12));
          animation: speakGradient 5s ease-in-out infinite;
        }

        .poster-title .poster-script-word::after {
          content: '';
          position: absolute;
          left: 5%;
          bottom: 5px;
          width: 83%;
          height: 8px;
          border-bottom: 3px solid #536dff;
          border-radius: 50%;
          transform: rotate(-4deg) scaleX(0);
          transform-origin: left center;
          animation: drawUnderline .9s ease-out 1.5s forwards;
        }

        @keyframes speakGradient {
          0%, 100% { background-position: 100% 50%; }
          50% { background-position: 0% 50%; }
        }

        @keyframes drawUnderline {
          to { transform: rotate(-4deg) scaleX(1); }
        }

        .poster-subtitle {
          margin: 18px 0 0;
          color: #2d2228;
          font-size: clamp(23px, 3.1vw, 39px);
          line-height: 1.3;
          font-weight: 300;
          letter-spacing: -.045em;
        }

        .poster-tagline {
          margin: 15px 0 0;
          color: #665760;
          font-size: 13px;
          line-height: 1.9;
        }

        .poster-socials {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 25px;
        }

        .poster-socials a {
          width: 34px;
          height: 34px;
          display: grid;
          place-items: center;
          border: 1px solid #e9dfe4;
          border-radius: 50%;
          background: rgba(237, 126, 174, .9);
          transition: background .25s ease, box-shadow .25s ease;
        }

        .poster-socials a:hover {
          background: #536dff;
          box-shadow: 0 5px 15px rgba(83, 109, 255, .2);
        }

        .poster-socials a img {
          width: 15px;
          height: 15px;
          object-fit: contain;
        }

        .poster-divider {
          height: 18px;
          width: 1px;
          background: #ed7eae;
        }

        .poster-location {
          color: #786871;
          font-size: 11px;
        }

        .poster-tool {
          position: absolute;
          z-index: 3;
          display: flex;
          align-items: center;
          flex-direction: column;
          gap: 7px;
          animation: posterFloat 5s ease-in-out infinite;
        }

        .poster-tool > span {
          color: #5f5058;
          font-size: 10px;
          font-weight: 600;
        }

        .figma-tool {
          top: 9%;
          left: 17%;
        }

        .figma-tile {
          width: 59px;
          height: 59px;
          display: grid;
          place-items: center;
          border-radius: 13px;
          background: #171317;
          box-shadow: 0 8px 22px #33212a1c;
          transform: rotate(-8deg);
        }

        .figma-tile svg {
          width: 28px;
          height: 42px;
        }

        .photoshop-tool {
          top: 14%;
          right: 17%;
          animation-delay: -1.4s;
        }

        .adobe-tile {
          width: 62px;
          height: 62px;
          display: grid;
          place-items: center;
          border-radius: 11px;
          box-shadow: 0 8px 22px #33212a1c;
        }

        .adobe-tile span {
          font-size: 32px;
          font-weight: 700;
          letter-spacing: -2px;
        }

        .photoshop-tile {
          color: #31a8ff;
          background: #071d3b;
        }

        .xd-tool {
          bottom: 16%;
          left: 17%;
          animation-delay: -2s;
        }

        .xd-tile {
          color: #ff61f6;
          background: #310b2b;
        }

        .canva-tool {
          right: 17%;
          bottom: 12%;
          animation-delay: -2.7s;
        }

        .canva-tile {
          width: 60px;
          height: 60px;
          display: grid;
          place-items: center;
          border: 2px solid white;
          border-radius: 50%;
          background: linear-gradient(135deg, #25c9dc, #7657df 65%, #ed7eae);
          box-shadow: 0 8px 22px #33212a1c;
          transform: rotate(-8deg);
        }

        .canva-tile span {
          color: white;
          font-family: Georgia, serif;
          font-size: 40px;
          font-style: italic;
          font-weight: 700;
        }

        .poster-spark {
          position: absolute;
          z-index: 1;
          color: #fa629f;
          pointer-events: none;
        }

        .spark-one {
          top: 28%;
          left: 8%;
          font-size: 25px;
        }

        .spark-two {
          top: 33%;
          right: 8%;
          color: #7a80d9;
          font-size: 23px;
        }

        .spark-three {
          right: 33%;
          bottom: 25%;
          font-size: 19px;
        }

        .poster-color-card {
          position: absolute;
          z-index: 2;
          left: 31%;
          bottom: 9%;
          display: flex;
          gap: 5px;
          padding: 8px;
          border: 1px solid #ffffffd9;
          border-radius: 9px;
          background: #ffffffb8;
          box-shadow: 0 8px 20px #33212a12;
          transform: rotate(-7deg);
        }

        .poster-color-card span {
          width: 16px;
          height: 20px;
          border-radius: 4px;
        }

        .palette-blue { background: #304ffe; }
        .palette-pink { background: #f29bbd; }
        .palette-cream { background: #f1e5d7; }
        .palette-dark { background: #292329; }

        /* View Projects button */
        .poster-contact {
          position: absolute;
          z-index: 4;
          right: 25px;
          bottom: 20px;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 11px 16px;
          border: 1px solid #e9dfe4;
          border-radius: 25px;
          background: rgba(255, 255, 255, .9);
          color: #332831;
          font: 500 12px 'Inter', sans-serif;
          cursor: pointer;
          transition: color .25s ease, background .25s ease;
        }

        .poster-contact:hover {
          color: #fff;
          background: #252025;
        }

        .poster-contact:focus-visible {
          outline: 2px solid #536dff;
          outline-offset: 4px;
        }

        @keyframes posterFloat {
          0%, 100% { translate: 0 0; }
          50% { translate: 0 -7px; }
        }

        @media (max-width: 700px) {
          .poster-hero {
            min-height: 670px;
            padding: 100px 12px 105px;
          }

          .poster-glow {
            width: 120%;
            height: 80%;
            left: -10%;
            top: 10%;
          }

          .poster-content {
            padding: 30px 8px;
          }

          .poster-name {
            font-size: 10px;
            letter-spacing: 2px;
            margin-bottom: 18px;
          }

          .poster-title {
            font-size: clamp(39px, 9.5vw, 63px);
            letter-spacing: -.055em;
          }

          .poster-title .poster-script-word {
            padding-bottom: 11px;
          }

          .poster-title .poster-script-word::after {
            bottom: 4px;
            border-bottom-width: 2.5px;
          }

          .poster-subtitle {
            margin-top: 13px;
            font-size: clamp(21px, 5.5vw, 30px);
          }

          .poster-tagline {
            font-size: 11px;
          }

          .poster-tool > span {
            font-size: 9px;
          }

          .figma-tool {
            top: 3%;
            left: 12%;
          }

          .photoshop-tool {
            top: 4%;
            right: 12%;
          }

          .xd-tool {
            bottom: 6%;
            left: 12%;
          }

          .canva-tool {
            bottom: 6%;
            right: 12%;
          }

          .figma-tile {
            width: 43px;
            height: 43px;
            border-radius: 9px;
          }

          .figma-tile svg {
            width: 21px;
            height: 32px;
          }

          .adobe-tile {
            width: 45px;
            height: 45px;
            border-radius: 8px;
          }

          .adobe-tile span {
            font-size: 25px;
          }

          .canva-tile {
            width: 44px;
            height: 44px;
          }

          .canva-tile span {
            font-size: 29px;
          }

          .poster-color-card {
            left: 50%;
            bottom: 3%;
            transform: translateX(-50%) rotate(-4deg);
          }

          .spark-one {
            top: 25%;
            left: 5%;
          }

          .spark-two {
            top: 25%;
            right: 5%;
          }

          .spark-three {
            right: 10%;
            bottom: 27%;
          }

          .poster-contact {
            right: 14px;
            bottom: 17px;
          }

          .poster-lines path {
            stroke-width: 1.4;
          }
        }

        @media (max-width: 390px) {
          .poster-hero {
            min-height: 640px;
          }

          .poster-title {
            font-size: 38px;
          }

          .poster-socials {
            gap: 9px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .poster-tool {
            animation: none;
          }

          .poster-title .poster-script-word {
            animation: none;
            background-position: 50% 50%;
          }

          .poster-title .poster-script-word::after {
            animation: none;
            transform: rotate(-4deg) scaleX(1);
          }

          .poster-contact,
          .poster-socials a {
            transition: none;
          }
        }
      `}</style>
    </section>
  );
}

export default HomePageIntroduction;
