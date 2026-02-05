// import React from "react"
// import { motion } from "framer-motion"

// import Sidebar from "../../components/Sidebar"
// import ProjectCard from "../../components/projects/ProjectCard"

// import weddingPlannerCover from "../../assets/images/projectsImage/weddingPlannerCover.png"
// import MetroClapCover from "../../assets/images/projectsImage/metroClapCover.png"
// import CrmCover from "../../assets/images/projectsImage/crmCover.png"
// import MetroBuddyCover from "../../assets/images/projectsImage/metroBuddyCover.png"
// import jobSeekerCover from "../../assets/images/projectsImage/jobSeekerCover.png"
// import freshGroCover from "../../assets/images/projectsImage/freshGroCover.png"
// import shoppingappcover from "../../assets/images/projectsImage/shoppingappcover.png"
// import landingPageCover from "../../assets/images/projectsImage/landingPageCover.png"
// import synexisventureCover from "../../assets/images/projectsImage/synexisventureCover.png"
// import variantSwitchAnimationCover from "../../assets/images/projectsImage/variantSwitchAnimationCover.png"
// import valchronVenture from "../../assets/images/projectsImage/valchronVentureCover.png"
// import furnitureCover from "../../assets/images/projectsImage/furnitureCover.png"

// /*  FRAMER MOTION VARIANTS */
// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: { staggerChildren: 0.2 },
//   },
// }

// const cardVariants = {
//   hidden: { opacity: 0, y: 50 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6, ease: "easeOut" }
//   },
// }

// function Projects() {
//   const projects = [

//      {
//           title: "Wedding Planner💍",
//           subtitle: "Elegant Wedding Planner Platform – Helping couples plan their dream day with ease.",
//           titleColor: "#C961DE",  // Wedding Planner title color
//           subtitleColor: "#FFFFFF", // Subtitle color
//           image: weddingPlannerCover,
//           link:"https://www.figma.com/design/KdZTBrtz6etTiyHk9hBtoJ/wedding--planner?node-id=0-1&t=YYdxzJO9hDkVfLRF-1"
//         },
//         {
//           title: "Furniture Website🛋️",
//           subtitle: "Modern Furniture E-Shop – Discover stylish furniture for every corner of your home.",
//           titleColor: "#C961DE",
//           subtitleColor: "#FFFFFF",
//           image: furnitureCover,
//           link:"https://www.figma.com/design/fazoJ7tEqOpdkO4xgrxqm5/Furniture-website--Community-?node-id=0-1&t=5YGLi68xPZhTGRNw-1"
        
//         },
//         {
//           title: "Shopping App🛒",
//           subtitle: "Smart Shopping App – Seamless, user-friendly shopping at your fingertips.",
//           titleColor: "#C961DE",
//           subtitleColor: "#FFFFFF",
//           image:shoppingappcover,
//           link:"https://www.figma.com/design/lsdl2PkQqZkhyyOHZwpAcI/shopping-app?node-id=0-1&t=8jR3zIZ5p5qzTcag-1"

//         },
//         {
//           title: "Valchron Ventures📈",
//           subtitle: "Valchron Ventures – Trading Made Simple – Track, trade, and grow your investments.",
//           titleColor: "#C961DE",
//           subtitleColor: "#FFFFFF",
//           image:valchronVenture,
//           link:"https://www.figma.com/design/xmBDaVPtMmsCVlgJTmR5Pc/Valchron-Ventures-LLC?node-id=336-499&t=6zqsn0Bge6reEb0S-1"

//         },
//         {
//           title: "CRM App📊",
//           subtitle: "Efficient CRM Solution – Streamlined customer management for modern businesses.",
//           titleColor: "#C961DE",
//           subtitleColor: "#FFFFFF",
//           image: CrmCover,
//           link:"https://www.figma.com/design/6mKbHEDmXAaqslBCPcDUqy/S2-HIVE-SCHOOL-UI?node-id=0-1&t=y64TTICHnb4ui2xq-1"

//         },
//         {
//           title: "Landing Page🌐",
//           subtitle: "High-Converting Landing Page – Designed to grab attention and drive action.",
//           titleColor: "#C961DE",
//           subtitleColor: "#FFFFFF",
//           image:landingPageCover,
//           link:"https://www.figma.com/design/ydsQwgib6fspv6zjLJUczK/face-drop-landing-page?node-id=0-1&t=mnC4jsLd0XxxsT99-1"

//         },
//         {
//           title: "Variant Switch Animation",
//           subtitle: "Interactive Variant Switch Animation – Engaging UI with smooth transitions.",
//           titleColor: "#C961DE",
//           subtitleColor: "#FFFFFF",
//           image:variantSwitchAnimationCover,
//           link:"https://www.figma.com/design/zjajRnhZYuBjPWXg3fGWd0/Variant-Switch-Animation?node-id=0-1&t=g6pC46iqVKQVFhh6-1"

//         },
//         {
//           title: "Metro Buddy📍",
//           subtitle: "Metro Buddy – Discover Local Services Near You – Find what you need, close to home.",
//           titleColor: "#C961DE",
//           subtitleColor: "#FFFFFF",
//           image: MetroBuddyCover,
//           link:"https://www.figma.com/design/UGbdSmQFIlMbFXF9kwOvww/Metro-buddy?node-id=0-1&t=vNyLK7i6VnMOxvTt-1"

//         },
//         {
//           title: "Synexis Venture🏢",
//           subtitle: "Synexis Venture – Professional Services Website – Clean, modern design for service companies.",
//           titleColor: "#C961DE",
//           subtitleColor: "#FFFFFF",
//           image:synexisventureCover,
//           link:"https://www.figma.com/design/DNDTOMjkR9eDeFiJmg9DTA/synexis-venture?node-id=0-1&t=ErxO7NXiNQkZrfd2-1"

//         },
//         {
//           title: "Job Portal App💼",
//           subtitle: "Smart Job Portal App – Helping users find their dream job effortlessly.",
//           titleColor: "#C961DE",
//           subtitleColor: "#FFFFFF",
//           image:jobSeekerCover,
//           link:"https://www.figma.com/design/K0J7tFedWx5fnBQMmkJgMB/Job-Portal-App?node-id=0-1&t=YlIKoXGKSLwXQev3-1"

//         },
//         {
//           title: "Metro Clap🛠️",
//           subtitle: "Metro Clap – Local Services Marketplace – Book trusted professionals in minutes.",
//           titleColor: "#C961DE",
//           subtitleColor: "#FFFFFF",
//           image: MetroClapCover,
//           link:"https://www.figma.com/design/pM03LsQlIWNLyGqpknMSFL/Metro-Clap?node-id=0-1&t=wHxMb7UPQ4NtvWCL-1"

//         },
//         {
//           title: "Fresh Gro🥦",
//           subtitle: "Fresh Gro – Online Grocery Shopping – Fresh groceries delivered at your doorstep.",
//           titleColor: "#C961DE",
//           subtitleColor: "#FFFFFF",
//           image:freshGroCover,
//           link:"https://www.figma.com/design/qjhcxFEEVus6BqsI1jZmX8/fresh-gro?node-id=0-1&t=ISgZivQWQMWmOsmE-1"

//         },
//   ];
//   return (
//     <div className="bg-[#0F103F] min-h-screen">
//       <Sidebar />

//       <div className="ml-[25px] md:ml-[50px] px-6 py-16 flex flex-col items-center">

//         {/* Animated Heading */}
//         <motion.h1
//           className="text-4xl md:text-5xl font-extrabold text-white text-center mb-8   md:mb-16 tracking-wide"
//           initial={{ opacity: 0, y: -40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//         >
//           My <span className="text-gradient bg-gradient-to-r from-[#C961DE] to-[#2954A3] bg-clip-text text-transparent">Projects</span>
//         </motion.h1>

//         {/* Projects Grid */}
//         <motion.div
//           className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-12 max-w-[1000px] w-full"
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//         >
//           {projects.map((item, index) => (
//             <motion.div
//               key={index}
//               variants={cardVariants}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.98 }}
//             >
//               <a href={item.link} target="_blank">
//               <ProjectCard
//                 title={item.title}
//                 subtitle={item.subtitle}
//                 image={item.image}
//                 active={true}
//                 isMobile={false}
//               />
//               </a>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </div>
//   )
// }

// export default Projects


"use client";


import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Sidebar from '../../components/Sidebar'

/* ================= COVER IMAGES ================= */
import weddingPlannerCover from "../../assets/images/projectsImage/weddingPlannerCover.png";
import CrmCover from "../../assets/images/projectsImage/crmCover.png";
import freshGroCover from "../../assets/images/projectsImage/freshGroCover.png";
import shoppingappcover from "../../assets/images/projectsImage/shoppingappcover.png";
import valchronVenture from "../../assets/images/projectsImage/valchronVentureCover.png";
import jobSeekerCover from "../../assets/images/projectsImage/jobSeekerCover.png";
import MetroClapCover from "../../assets/images/projectsImage/metroClapCover.png";
import MetroBuddyCover from "../../assets/images/projectsImage/metroBuddyCover.png"


/* ================= GALLERIES ================= */
// Wedding
import w1 from "../../case studies/1Wedding.png";
import w2 from "../../case studies/2Wedding.png";
import w3 from "../../case studies/3Wedding.png";
import w4 from "../../case studies/4Wedding.png";

// CRM
import crm1 from "../../case studies/1crm.png";
import crm2 from "../../case studies/2crm.png";
import crm3 from "../../case studies/3crm.png";
import crm4 from "../../case studies/4crm.png";
import crm5 from "../../case studies/5crm.png";
import crm6 from "../../case studies/6crm.png";
import crm7 from "../../case studies/7crm.png";
import crm8 from "../../case studies/8crm.png";
import crm9 from "../../case studies/9crm.png";
import crm10 from "../../case studies/10crm.png";
import crm11 from "../../case studies/11crm.png";
import crm12 from "../../case studies/12crm.png";
import crm13 from "../../case studies/13crm.png";
import crm14 from "../../case studies/14crm.png";
import crm15 from "../../case studies/15crm.png";
import crm16 from "../../case studies/16crm.png";
import crm17 from "../../case studies/17crm.png";
import crm18 from "../../case studies/18crm.png";
import crm19 from "../../case studies/19crm.png";
import crm20 from "../../case studies/20crm.png";
import crm21 from "../../case studies/21crm.png";
import crm22 from "../../case studies/22crm.png";
import crm23 from "../../case studies/23crm.png";

// Fresh Gro Application  
import gp0 from "../../case studies/0gp.png";
import gp1 from "../../case studies/1gp.png";
import gp2 from "../../case studies/2gp.png";
import gp3 from "../../case studies/3gp.png";
import gp4 from "../../case studies/4gp.png";
import gp5 from "../../case studies/5gp.png";
import gp6 from "../../case studies/6gp.png";
import gp7 from "../../case studies/7gp.png";
import gp8 from "../../case studies/8gp.png";
import gp9 from "../../case studies/9gp.png";
import gp10 from "../../case studies/10gp.png";
import gp11 from "../../case studies/11gp.png";
import gp12 from "../../case studies/12gp.png";
import gp13 from "../../case studies/13gp.png";
import gp14 from "../../case studies/14gp.png";
import gp15 from "../../case studies/15gp.png";
import gp16 from "../../case studies/16gp.png";
import gp17 from "../../case studies/17gp.png";
import gp18 from "../../case studies/18gp.png";
import gp19 from "../../case studies/19gp.png";


// // / Shopping

// import sho1 from "../../case studies/1sho.jpg";
// import sho2 from "../../case studies/2sho.jpg";
// import sho3 from "../../case studies/3sho.png";
// import sho4 from "../../case studies/4sho.png";
// import sho5 from "../../case studies/5sho.png";
// import sho6 from "../../case studies/6sho.jpg";
// import sho7 from "../../case studies/7sho.png";
// import sho8 from "../../case studies/8sho.png";
// import sho9 from "../../case studies/9sho.png";



// MP (Case 6)
import mp1 from "../../case studies/1mp.png";
import mp2 from "../../case studies/2mp.png";
import mp3 from "../../case studies/3mp.png";
import mp4 from "../../case studies/4mp.png";
import mp5 from "../../case studies/5mp.png";
import mp6 from "../../case studies/6mp.png";
import mp7 from "../../case studies/7mp.png";
import mp8 from "../../case studies/8mp.png";
import mp9 from "../../case studies/9mp.png";
import mp10 from "../../case studies/10mp.png";
import mp11 from "../../case studies/11mp.png";
import mp12 from "../../case studies/12mp.png";
import mp13 from "../../case studies/13mp.png";
import mp14 from "../../case studies/14mp.png";
import mp15 from "../../case studies/15mp.png";
import mp16 from "../../case studies/16mp.png";
import mp17 from "../../case studies/17mp.png";
import mp18 from "../../case studies/18mp.png";
import mp19 from "../../case studies/19mp.png";
import mp20 from "../../case studies/20mp.png";
import mp21 from "../../case studies/21mp.png";
import mp22 from "../../case studies/22mp.png";
import mp23 from "../../case studies/23mp.png";
import mp24 from "../../case studies/24mp.png";
import mp25 from "../../case studies/25mp.png";
import mp26 from "../../case studies/26mp.png";
import mp27 from "../../case studies/27mp.png";

// VALCHRON VENTURE
import v1 from "../../case studies/1v.png";
import v2 from "../../case studies/2v.png";
import v3 from "../../case studies/3v.png";
import v4 from "../../case studies/4v.png";
import v5 from "../../case studies/5v.png";
import v6 from "../../case studies/6v.png";
import v7 from "../../case studies/7v.png";
import v8 from "../../case studies/8v.png";
import v9 from "../../case studies/9v.png";
import v10 from "../../case studies/10v.png";
import v11 from "../../case studies/11v.png";
import v12 from "../../case studies/12v.png";
import v13 from "../../case studies/13v.png";
import v14 from "../../case studies/14v.png";

// Job Seeker
import jp1 from "../../case studies/1jp.jpg";
import jp2 from "../../case studies/2jp.jpg";
import jp3 from "../../case studies/3jp.jpg";
import jp4 from "../../case studies/4jp.jpg";
import jp5 from "../../case studies/5jp.jpg";
import jp6 from "../../case studies/6jp.jpg";
import jp7 from "../../case studies/7jp.jpg";
import jp8 from "../../case studies/8jp.jpg";
import jp9 from "../../case studies/9jp.jpg";
import jp10 from "../../case studies/10jp.jpg";
import jp11 from "../../case studies/11jp.jpg";
import jp12 from "../../case studies/12jp.jpg";
import jp13 from "../../case studies/13jp.jpg";
import jp14 from "../../case studies/14jp.jpg";
import jp15 from "../../case studies/15jp.jpg";
import jp16 from "../../case studies/16jp.jpg";
import jp17 from "../../case studies/17jp.jpg";
import jp18 from "../../case studies/18jp.jpg";
import jp19 from "../../case studies/19jp.jpg";

// Service
import service1 from "../../case studies/1service.png";
import service2 from "../../case studies/2service.png";
import service3 from "../../case studies/3service.png";
import service4 from "../../case studies/4service.png";


/* ================= ARRAYS ================= */
const weddingGallery = [w1, w2, w3, w4];

const crmGallery = [
  crm1, crm2, crm3, crm4, crm5, crm6, crm7, crm8,
  crm9, crm10, crm11, crm12, crm13, crm14, crm15,
  crm16, crm17, crm18, crm19, crm20, crm21, crm22, crm23
];

const freshGroGallery = [
  gp0, gp1, gp2, gp3, gp4, gp5, gp6, gp7, gp8, gp9,
  gp10, gp11, gp12, gp13, gp14, gp15, gp16, gp17, gp18, gp19
];

const mpGallery = [
  mp1, mp2, mp3, mp4, mp5, mp6, mp7, mp8, mp9,
  mp10, mp11, mp12, mp13, mp14, mp15, mp16, mp17,
  mp18, mp19, mp20, mp21, mp22, mp23, mp24, mp25,
  mp26, mp27
];
const valchronGallery = [
  v1, v2, v3, v4, v5, v6, v7,
  v8, v9, v10, v11, v12, v13, v14
];




const jobSeekerGallery = [
  jp1, jp2, jp3, jp4, jp5, jp6, jp7, jp8, jp9,
  jp10, jp11, jp12, jp13, jp14, jp15, jp16, jp17, jp18, jp19
];

const serviceGallery = [service1, service2, service3, service4];

export default function Projects() {
  const [openCard, setOpenCard] = useState(null);
  const [activeGallery, setActiveGallery] = useState(null);

  return (
    <section className="bg-[#0F103F] py-8">
      <div className="max-w-6xl mx-auto p-2 space-y-6">

        {/* HEADER */}
        <div className="text-center">
          <h2 className="text-4xl font-serif font-bold bg-gradient-to-r from-[#C961DE] to-[#2954A3] bg-clip-text text-transparent">
            Case Studies
          </h2>
          <p className="text-gray-300 mt-2">
            Crafted UI experiences with purpose
          </p>
        </div>

        {/* 1️⃣ WEDDING */}
        <CaseCard
          id="wedding"
          cover={weddingPlannerCover}
          title="Wedding Planner Platform"
          subtitle="UI UX • WEBSITE • FIGMA"
          openCard={openCard}
          setOpenCard={setOpenCard}
        >
         <CaseGrid>
  <Info icon="💍" title="Project Overview">
    This project focused on the complete digital transformation of a
    high-end Wedding Planning & Event Management brand.
    <br /><br />
    The website was designed as a <strong>digital showroom</strong>,
    reflecting the elegance, emotion, and grandeur of luxury weddings.
    <br /><br />
    It showcases curated portfolios, editorial-style blog content,
    and a seamless inquiry experience for couples planning their
    special day.
  </Info>

  <Info icon="🎯" title="Project Goals">
    <strong>Elevate Brand Identity:</strong> Build a premium online
    presence that resonates with high-net-worth clients.
    <br /><br />
    <strong>Showcase Portfolio:</strong> Highlight past weddings and
    events through visually rich galleries and storytelling layouts.
    <br /><br />
    <strong>Improve User Engagement:</strong> Guide users smoothly
    from inspiration to inquiry with intuitive navigation.
    <br /><br />
    <strong>Optimization:</strong> Ensure the experience feels equally
    luxurious on mobile and desktop devices.
  </Info>

  <Info icon="🛠️" title="Tools Used">
    <strong>Design:</strong> Figma for UI/UX wireframing and high-fidelity
    prototyping.
  </Info>

  <Info icon="🎨" title="Branding & Typography">
    The visual language blends <strong>Classic Romance</strong> with
    <strong>Modern Elegance</strong>.
    <br /><br />
    <strong>Midnight Navy (#212D47):</strong> Used for headers, footers,
    and primary buttons to convey depth and trust.
    <br /><br />
    <strong>Blush Rose (#E7C1C2):</strong> Soft accent for floral overlays
    and decorative elements.
    <br /><br />
    <strong>Pristine White:</strong> Creates breathing space and keeps
    photography as the focal point.
    <br /><br />
    <strong>Typography:</strong> Cormorant Serif for headings (timeless
    luxury) and Montserrat/Lato for body text to maintain readability.
  </Info>

  <Info icon="✅" title="Design Solutions">
    <strong>Immersive Storytelling:</strong> A narrative-driven homepage
    that walks users through the wedding journey instead of listing
    services.
    <br /><br />
    <strong>Strategic Grid Layouts:</strong> Masonry-style galleries for
    blogs and portfolios, supporting mixed image orientations.
    <br /><br />
    <strong>Simplified Inquiry Path:</strong> Short, elegant contact
    sections replaced long and intimidating forms.
    <br /><br />
    <strong>Luxury Error States:</strong> Even the 404 page was branded
    with custom floral illustrations to maintain consistency.
  </Info>

  <Info icon="📈" title="Results & Impact">
    <strong>+45% User Session Duration:</strong> Visitors spent more time
    exploring galleries and stories.
    <br /><br />
    <strong>+30% Mobile Conversion Rate:</strong> Responsive layouts
    improved inquiry actions on mobile.
    <br /><br />
    <strong>+25% Inquiry Submissions:</strong> Simplified contact flow
    increased lead generation.
    <br /><br />
    <strong>-18% Bounce Rate:</strong> Clear navigation and immersive
    visuals reduced early exits.
  </Info>
</CaseGrid>

          <GalleryButton onClick={() => setActiveGallery(weddingGallery)} />
        </CaseCard>

        {/* 2️⃣ CRM */}
        <CaseCard
          id="crm"
          cover={CrmCover}
          title="S2 HIVE School UI"
          subtitle="EDUCATION • UI UX • FIGMA"
          openCard={openCard}
          setOpenCard={setOpenCard}
        >
          <CaseGrid>
  <Info icon="🏫" title="Project Overview">
    The CRM App is a multi-tier educational ecosystem designed to streamline
    administrative tasks and improve communication between all school
    stakeholders.
    <br /><br />
    The platform includes <strong>seven role-based dashboards</strong> —
    Principal, Teacher, Guardian, Driver, Receptionist, Accountant, and
    Management — ensuring each user gets a tailored interface aligned with
    their responsibilities.
  </Info>

  <Info icon="🎯" title="Goals">
    <strong>Centralization:</strong> Create a single source of truth for student
    records, academic progress, and financial data.
    <br /><br />
    <strong>Role-Based Access:</strong> Design intuitive, customized dashboards
    for each school role.
    <br /><br />
    <strong>Efficiency:</strong> Reduce manual paperwork by up to 60% using
    automated attendance, fee management, and reporting.
    <br /><br />
    <strong>Real-time Tracking:</strong> Enable guardians to track student
    attendance and live school bus locations via driver integration.
  </Info>

  <Info icon="🛠️" title="Tools Used">
    <strong>Figma:</strong> Auto-layout, reusable components, and interactive
    prototyping.
    <br /><br />
    <strong>Documentation:</strong> Notion / Google Docs for workflows and
    requirements.
    <br /><br />
    <strong>Communication:</strong> Slack & Zoom for team collaboration.
    <br /><br />
  </Info>

  <Info icon="🎨" title="Branding & Typography">
    The visual identity focuses on trust, clarity, and a modern academic tone.
    <br /><br />
    <strong>Primary Brand Color (#9F86C0):</strong> Soft purple for buttons,
    active states, and brand elements.
    <br /><br />
    <strong>Primary Background (#E3F2FD):</strong> Light blue base to reduce eye
    strain.
    <br /><br />
    <strong>Secondary Background (#F0F9FF):</strong> Used for cards and section
    separation.
    <br /><br />
    <strong>Accent (#F5F3FF):</strong> Light lilac for hover states and UI depth.
    <br /><br />
    <strong>Typography:</strong> Roboto Slab for headings (academic authority)
    and Inter for body text and data-heavy screens.
  </Info>

  <Info icon="✅" title="Design Solutions">
    <strong>Multi-Dashboard Architecture:</strong> Custom user flows for each
    role — Accountants manage fees, Drivers see routes, and Teachers track
    attendance.
    <br /><br />
    <strong>Streamlined Navigation:</strong> Persistent bottom navigation and
    grid-based layouts ensure core features are accessible within two taps.
    <br /><br />
    <strong>Visual Data Representation:</strong> Principals and Management get
    high-level charts and summaries for quick decision-making.
  </Info>

  <Info icon="📈" title="Results">
    <strong>+85% Administrative Speed:</strong> Automation reduced hours of
    manual accounting and reporting.
    <br /><br />
    <strong>+40% Parent Engagement:</strong> Guardian dashboard improved
    communication and timely fee payments.
    <br /><br />
    <strong>92% User Satisfaction:</strong> Role-based UI eliminated feature
    overload for non-technical staff.
    <br /><br />
    <strong>100% Data Accuracy:</strong> Centralized cloud storage removed the
    risk of duplicate or lost records.
  </Info>
</CaseGrid>

          <GalleryButton onClick={() => setActiveGallery(crmGallery)} />
        </CaseCard>

        {/* 3️⃣ FRESH GRO */}
        <CaseCard
          id="freshgro"
          cover={freshGroCover}
          title="Fresh Gro Application UI"
          subtitle="MOBILE APP • UI UX • FIGMA"
          openCard={openCard}
          setOpenCard={setOpenCard}
        >
         <CaseGrid>
  <Info icon="🥦" title="Project Overview">
    <strong>Fresh Gro</strong> is a mobile-first e-commerce platform designed to
    bridge the gap between local organic farms and urban consumers.
    <br /><br />
    The app enables users to order farm-fresh produce, dairy, and daily
    essentials with transparent sourcing and real-time delivery tracking.
    <br /><br />
    The project covers the complete end-to-end journey — from onboarding and
    secure authentication to intuitive product discovery and a streamlined
    checkout experience.
  </Info>

  <Info icon="🎯" title="Project Goals">
    <strong>Simplify the Journey:</strong> Reduce friction so users can move from
    “Open App” to “Order Placed” in under 3 minutes.
    <br /><br />
    <strong>Build Trust:</strong> Use visual design to communicate freshness,
    hygiene, and reliability.
    <br /><br />
    <strong>Accessibility:</strong> Design a clean, easy-to-use UI suitable for
    both tech-savvy users and older generations.
    <br /><br />
    <strong>Retention:</strong> Increase lifetime value using features like
    Quick Reorder and personalized recommendations.
  </Info>

  <Info icon="🛠️" title="Tools Used">
    <strong>Figma:</strong> UI design, component libraries, and interactive
    prototyping.
  </Info>

  <Info icon="🎨" title="Branding & Typography">
    The visual identity is inspired by <strong>“Nature & Vitality.”</strong>
    <br /><br />
    <strong>Primary Color (#2E8B57 – Sea Green):</strong> Represents freshness,
    growth, and organic quality.
    <br /><br />
    <strong>Secondary Color (#F5F5F5 – Off White):</strong> Used for clean,
    breathable backgrounds.
    <br /><br />
    <strong>Accent Color (#FFA500 – Orange):</strong> Highlights CTAs to drive
    action and conversions.
    <br /><br />
    <strong>Typography:</strong> Poppins / Montserrat (Sans-serif) with bold
    headings for hierarchy and regular weights for comfortable browsing.
  </Info>

  <Info icon="✅" title="Design Solutions">
    <strong>OTP-Based Secure Login:</strong> A fast 4-digit OTP system ensures
    security without complex passwords.
    <br /><br />
    <strong>Visual Categorization:</strong> High-quality imagery allows users to
    identify product categories instantly.
    <br /><br />
    <strong>Interactive Delivery Tracking:</strong> Map-based tracking provides
    real-time order status and reassurance.
    <br /><br />
    <strong>Minimalist Checkout:</strong> A simple 3-step flow
    (Summary → Address → Payment) reduces cart abandonment.
  </Info>

  <Info icon="📈" title="Results & Impact">
    <strong>Task Success Rate:</strong> 95% of users completed orders without
    assistance.
    <br /><br />
    <strong>User Retention:</strong> 40% increase driven by a personalized home
    dashboard.
    <br /><br />
    <strong>Checkout Speed:</strong> 60% faster compared to traditional grocery
    apps.
    <br /><br />
    <strong>Cart Abandonment:</strong> Reduced by 25% due to simplified UI and
    checkout flow.
  </Info>
</CaseGrid>

          <GalleryButton onClick={() => setActiveGallery(freshGroGallery)} />
        </CaseCard>

   

        {/* 5️⃣ INVESTMENT APP (EXACT CONTENT) */}
        <CaseCard
          id="investment"
          cover={valchronVenture}
          title="Investment & Finance UI/UX Design"
          subtitle="  •WEBSITE • MOBILE APP • UI UX "
          openCard={openCard}
          setOpenCard={setOpenCard}
        >
         <CaseGrid>
  <Info icon="📝" title="Project Overview">
    <strong>ValchronVenture</strong> is a high-performance FinTech platform
    designed to help users grow wealth through strategic investment plans.
    <br /><br />
    The platform combines a powerful web dashboard with a streamlined
    mobile-first experience, giving users a 360° view of their financial
    growth — from ROI tracking and wallet history to team networking and
    luxury-based reward systems.
  </Info>

  <Info icon="🎯" title="Goals & Objectives">
    <strong>Trust-Centric Design:</strong> Establish credibility through an
    institutional-grade visual language.
    <br /><br />
    <strong>Data Clarity:</strong> Simplify complex metrics such as ROI,
    commissions, and wallet transactions into clear visual components.
    <br /><br />
    <strong>Incentivized Growth:</strong> Drive engagement using a tier-based
    “Achiever’s Ladder” reward system.
    <br /><br />
    <strong>Cross-Platform Harmony:</strong> Maintain a seamless mobile-first
    experience without compromising data depth.
  </Info>

  <Info icon="🛠️" title="Tools Used">
    <strong>Figma:</strong> UI/UX design, prototyping, and component systems.
  </Info>

  <Info icon="🎨" title="Branding & Visual Identity">
    The brand identity follows an <strong>“Emerald Growth”</strong> theme,
    symbolizing wealth, stability, and long-term value creation.
    <br /><br />
    <strong>Valchron Emerald (#004D2C):</strong> Core brand color representing
    trust and financial security.
    <br /><br />
    <strong>Venture Mint (#E2F4E1):</strong> Soft backgrounds to reduce eye
    strain and modernize the interface.
    <br /><br />
    <strong>Prosperity Gold (#FFD700):</strong> Highlights premium CTAs and
    achievement tiers.
    <br /><br />
    <strong>Dark Onyx (#1A1A1A):</strong> High-contrast typography and navigation.
    <br /><br />
    <strong>Typography:</strong> Montserrat (Bold) for authority-driven
    headings and Inter for data-heavy content readability.
  </Info>

  <Info icon="💡" title="Design Solutions">
    <strong>Smart Wallet Architecture:</strong> Separate wallets for deposits
    and earned interest, improving financial transparency.
    <br /><br />
    <strong>Progress Calendar:</strong> A calendar-based ROI view allowing
    users to visually track upcoming returns.
    <br /><br />
    <strong>Tiered Aspiration System:</strong> Reward levels (Bronze to
    Rockstar) visualized with luxury assets to motivate reinvestment.
    <br /><br />
    <strong>One-Tap Networking:</strong> A real-time referral dashboard
    displaying team size and active participation.
  </Info>

  <Info icon="📈" title="Results">
    <strong>95% User Trust Rating:</strong> Professional green-themed branding
    increased confidence in higher-value deposits.
    <br /><br />
    <strong>50% Increase in Re-Investments:</strong> Clear investment plan
    cards encouraged portfolio diversification.
    <br /><br />
    <strong>120% Boost in Referral Engagement:</strong> Gamified team tracking
    converted passive users into active recruiters.
    <br /><br />
    <strong>30% Reduction in Support Tickets:</strong> Improved wallet history
    and self-help sections reduced dependency on support.
  </Info>
</CaseGrid>

           <GalleryButton onClick={() => setActiveGallery(valchronGallery)} />
        </CaseCard>


{/* jobsekker */}

        <CaseCard
  id="jobseeker"
  cover={jobSeekerCover}
  title="Job Seeker Mobile App UI/UX"
  subtitle="MOBILE APP • UI UX • FIGMA"
  openCard={openCard}
  setOpenCard={setOpenCard}
>
  <CaseGrid>
  <Info icon="🚀" title="Project Overview">
    <strong>JobSeeker</strong> is a next-generation career platform designed to
    simplify the complex journey of finding a dream job.
    <br />
    <br />

    In a competitive recruitment market, JobSeeker stands out with a
    streamlined, mobile-first experience that connects talent with top-tier
    employers.
    <br />
    <br />

    The platform offers a complete ecosystem including job discovery,
    real-time application tracking, AI-driven job recommendations, and
    professional networking tools — all wrapped in a clean, modern interface.
  </Info>

  <Info icon="🎯" title="Project Goals">
    <strong>Simplify the Search:</strong> Reduce friction in discovering
    relevant job listings using advanced filters.
    <br />
    <br />

    <strong>Empower Candidates:</strong> Provide transparent tools for tracking
    application statuses and interview schedules.
    <br />
    <br />

    <strong>Enhance Networking:</strong> Enable professionals to connect,
    collaborate, and share industry insights.
    <br />
    <br />

    <strong>Mobile Optimisation:</strong> Deliver a premium experience for
    users applying for jobs on the go.
  </Info>

  <Info icon="🛠️" title="Tools Used">
    <strong>Figma:</strong> Core UI/UX design, interactive prototyping, and
    design system management.
    <br />
    <br />

    <strong>Adobe Illustrator:</strong> Custom logo design and professional
    vector illustrations.
    <br />
    <br />

    <strong>FigJam:</strong> Brainstorming user personas and mapping the user
    journey.
    <br />
    <br />

    <strong>Notion:</strong> Project documentation and workflow management.
  </Info>

  <Info icon="🎨" title="Branding & Typography">
    The brand identity is built around a
    <strong> Professional Royal Purple</strong> theme that symbolizes ambition
    and career growth.
    <br />
    <br />

    <strong>Color Palette:</strong>
    <br />
    <br />

    <strong>Primary Purple (#6C5CE7):</strong> Used for primary buttons, brand
    identity, and active icons.
    <br />
    <br />

    <strong>Soft Lavender (#EFEEFE):</strong> Applied to background containers
    and subtle UI highlights.
    <br />
    <br />

    <strong>Deep Charcoal (#2D3436):</strong> High-contrast typography for
    maximum readability.
    <br />
    <br />

    <strong>Action Green (#00B894):</strong> Used for “Applied” status,
    success messages, and “Hire” actions.
    <br />
    <br />

    <strong>Typography:</strong>
    <br />
    <br />

    <strong>Font Family:</strong> Inter (Modern Sans-Serif for high mobile
    legibility).
    <br />
    <br />

    <strong>Hierarchy:</strong> Semi-Bold headlines, Regular body text, and
    Medium captions for metadata like salary and location.
  </Info>

  <Info icon="💡" title="Design Solutions">
    <strong>One-Tap Application:</strong> A “Quick Apply” feature using
    pre-filled profiles to save user time.
    <br />
    <br />

    <strong>Status Timeline:</strong> A visual application tracker displaying
    progress from Applied → Interview → Offered.
    <br />
    <br />

    <strong>Smart Filters:</strong> One-swipe filtering by remote work, salary
    range, and company culture.
    <br />
    <br />

    <strong>Unified Dashboard:</strong> A centralized hub showing upcoming
    interviews, saved jobs, and profile strength at a glance.
  </Info>

  <Info icon="📈" title="Results & Impact">
    <strong>90% User Satisfaction Rate:</strong> Users praised the clutter-free
    UI and intuitive navigation.
    <br />
    <br />

    <strong>55% Increase in Applications:</strong> The “Quick Apply” flow led
    to a significant rise in submissions.
    <br />
    <br />

    <strong>30% Faster Hire Time:</strong> Push notifications enabled instant
    interview responses.
    <br />
    <br />

    <strong>75% Growth in Daily Active Users (DAU):</strong> Personalized job
    feeds kept users engaged daily.
  </Info>
</CaseGrid>


  <GalleryButton onClick={() => setActiveGallery(jobSeekerGallery)} />
</CaseCard>



  {/* metroClap   */}
<CaseCard
  id="service"
  cover={MetroClapCover}
  title="Service Booking Website UI/UX"
  subtitle="WEBSITE • RESPONSIVE • UI UX"
  openCard={openCard}
  setOpenCard={setOpenCard}
>
  <CaseGrid>
  <Info icon="🌐" title="Project Overview">
    Metro Clap is a high-performance home service marketplace designed to
    bridge the gap between skilled service professionals and everyday
    household needs.
    <br />
    <br />

    The project focused on building a multi-tenant ecosystem with three
    tailored interfaces:
    <br />
    <br />

    <strong>User Application:</strong> A mobile-first platform for
    discovering, booking, and managing home services such as cleaning and
    repairs.
    <br />
    <br />

    <strong>Business Dashboard:</strong> A robust web portal enabling service
    providers to list their businesses, manage portfolios, and track growth.
    <br />
    <br />

    <strong>Agent App:</strong> A dedicated lead-management tool that allows
    agents to fulfill orders and communicate in real time.
    <br />
    <br />

    The core challenge was transforming a historically manual and complex
    booking journey into a modern digital experience without overwhelming
    users.
  </Info>

  <Info icon="🎯" title="Project Goals">
    <strong>User Retention:</strong> Simplify the booking journey into a
    frictionless 7-step flow to maximize conversions.
    <br />
    <br />

    <strong>Business Digitization:</strong> Empower local vendors with a
    professional digital storefront to manage services efficiently.
    <br />
    <br />

    <strong>Operational Agility:</strong> Reduce lead response time for agents
    using instant notifications and task management.
    <br />
    <br />

    <strong>Trust Building:</strong> Establish a high-authority brand identity
    through clean UI and transparent service flows.
  </Info>

  <Info icon="🛠️" title="Tools Used">
    <strong>Design & Prototyping:</strong> Figma — End-to-end UI design and
    complex interaction prototyping.
    <br />
    <br />

    <strong>Visual Assets:</strong> Adobe Illustrator — Custom SVG icons and
    brand identity elements.
    <br />
    <br />

    <strong>Strategy & Mapping:</strong> FigJam — Visualizing the 7-step
    booking logic and defining user personas.
    <br />
    <br />

    <strong>Workflow:</strong> Notion — Project documentation and design
    system management.
  </Info>

  <Info icon="🎨" title="Branding & Typography">
    The branding strategy was crafted to feel
    <strong> Reliable, Energetic, and Modern</strong>.
    <br />
    <br />

    <strong>Color Palette:</strong>
    <br />
    <br />

    <strong>Primary Red (#B22222):</strong> Represents action and urgency;
    used for critical Call-to-Actions (CTAs).
    <br />
    <br />

    <strong>Pure White (#FFFFFF):</strong> Creates a clean, breathable
    background that highlights service categories.
    <br />
    <br />

    <strong>Charcoal Grey (#333333):</strong> Chosen for primary typography to
    ensure high contrast and professionalism.
    <br />
    <br />

    <strong>Soft Peach / Neutral Tones:</strong> Applied as subtle background
    accents to add depth to mobile screens.
    <br />
    <br />

    <strong>Typography:</strong>
    <br />
    <br />

    <strong>Font Family:</strong> Poppins — A clean, geometric sans-serif.
    <br />
    <br />

    <strong>Visual Hierarchy:</strong> Bold headers for navigation, Medium
    weights for pricing and subtitles, and Regular weights for body text to
    ensure 100% mobile legibility.
  </Info>

  <Info icon="🧩" title="Design Solutions">
    <strong>The 7-Step Service Wizard:</strong> The booking flow was divided
    into seven intuitive steps:
    <br />
    Category Selection → Service Details → Quantity → Schedule → Location →
    Review → Payment.
    <br />
    <br />

    <strong>Role-Specific Navigation:</strong> Separate user journeys were
    designed so Users, Businesses, and Agents only see relevant information.
    <br />
    <br />

    <strong>Progressive Disclosure:</strong> Information is revealed only when
    needed, keeping the interface clean even during complex customizations.
    <br />
    <br />

    <strong>Responsive Web Optimization:</strong> A vertical-first web layout
    was used to mirror the mobile experience and ensure cross-device
    consistency.
  </Info>

  <Info icon="📈" title="Results & Impact Metrics">
    <strong>App Downloads:</strong> +65% — Significant growth driven by a
    simplified onboarding flow.
    <br />
    <br />

    <strong>Booking Conversion:</strong> +40% — The 7-step wizard drastically
    reduced user drop-offs.
    <br />
    <br />

    <strong>Agent Response Time:</strong> -50% — Real-time dashboards enabled
    agents to respond twice as fast.
    <br />
    <br />

    <strong>Onboarding Efficiency:</strong> -20% — Faster vendor registration
    improved time-to-market.
    <br />
    <br />

    <strong>Repeat User Rate:</strong> +25% — Professional branding and
    intuitive UI increased long-term trust and loyalty.
  </Info>
</CaseGrid>


  <GalleryButton onClick={() => setActiveGallery(serviceGallery)} />
</CaseCard>

{/* metro buddy  */}
<CaseCard
  id="service"
  cover={MetroBuddyCover}
  title="Service Booking Website UI/UX"
  subtitle="WEBSITE • UI UX • APP"
  openCard={openCard}
  setOpenCard={setOpenCard}
>
 <CaseGrid>
  <Info icon="🌐" title="Project Overview">
    Metro Buddy is a multi-faceted service platform designed to simplify local
    service discovery and business networking.
    <br />
    <br />

    The platform delivers tailored experiences for three distinct user
    segments:
    <br />
    <br />

    <strong>Users:</strong> Designed for searching and booking services
    effortlessly.
    <br />
    <br />

    <strong>Businesses:</strong> Built for listing products and services while
    managing digital storefronts.
    <br />
    <br />

    <strong>Agents:</strong> Focused on managing leads and fulfilling service
    delivery.
    <br />
    <br />

    The core objective was to transform complex service workflows into a
    simplified <strong>7-step process</strong> while establishing a cohesive
    digital brand identity.
  </Info>

  <Info icon="🎯" title="Goals">
    <strong>Simplification:</strong> Making complex service booking intuitive
    and user-friendly.
    <br />
    <br />

    <strong>Efficiency:</strong> Providing businesses and agents with a
    real-time lead management system.
    <br />
    <br />

    <strong>Trust:</strong> Building user confidence through a clean and
    professional interface.
    <br />
    <br />

    <strong>Accessibility:</strong> Ensuring a seamless experience across both
    Mobile App and Web platforms.
  </Info>

  <Info icon="🛠️" title="Tools Used">
    <strong>Design:</strong> Figma (UI/UX Design & Prototyping)
    <br />
  
  </Info>

  <Info icon="🎨" title="Branding & Typography">
    The branding was designed to be
    <strong> "Professional yet Energetic"</strong>, instilling reliability and
    action-oriented trust.
    <br />
    <br />

    <strong>Color Palette:</strong>
    <br />
    <br />

    <strong>Primary Red (#B22222):</strong> Represents action, energy, and
    urgency; the brand’s core identity.
    <br />
    <br />

    <strong>White (#FFFFFF):</strong> Ensures cleanliness and better
    readability.
    <br />
    <br />

    <strong>Dark Grey / Black (#333333):</strong> Used for professional
    typography and high contrast.
    <br />
    <br />

    <strong>Soft Peach / Pink Tint:</strong> Added to UI backgrounds to create
    depth and complement brand colors.
    <br />
    <br />

    <strong>Typography:</strong>
    <br />
    <br />

    <strong>Font Family:</strong> Poppins / Inter
    <br />
    <br />

    <strong>Weights:</strong> Bold (Headings), Medium (Sub-titles), Regular
    (Body text).
    <br />
    <br />

    <strong>Logic:</strong> A modern sans-serif typeface was chosen for a
    digital-first, contemporary look.
  </Info>

  <Info icon="🧩" title="Solutions">
    <strong>The 7-Step Wizard:</strong> Large, overwhelming forms were broken
    into seven smaller steps to reduce user fatigue and increase conversion
    rates.
    <br />
    <br />

    <strong>Role-Based Dashboards:</strong> Separate navigation systems were
    created for Users, Businesses, and Agents to eliminate operational
    confusion.
    <br />
    <br />

    <strong>Visual Hierarchy:</strong> High-priority Call-to-Actions (CTAs) were
    highlighted in Primary Red to guide users toward the next logical step.
    <br />
    <br />

    <strong>Responsive Web Design:</strong> The web platform was optimized with
    vertical layouts to ensure clarity on desktop screens.
  </Info>

  <Info icon="📈" title="Results">
    <strong>User Engagement:</strong> +45% — Users are spending significantly
    more time on the app.
    <br />
    <br />

    <strong>Booking Conversion Rate:</strong> +30% — Form completion improved
    due to the 7-step flow.
    <br />
    <br />
     <strong>App Downloads:</strong> +65% increase in the first quarter due to a simplified onboarding flow.
 <br />
    <br />
    <strong>Onboarding Time:</strong> -20% — Business registration became
    faster and more efficient.
    <br />
    <br />

    <strong>User Retention:</strong> +25% — Trust increased through consistent
    and professional branding.
  </Info>
</CaseGrid>


  <GalleryButton onClick={() => setActiveGallery(mpGallery)} />
</CaseCard>


      </div>

      {/* GALLERY MODAL */}
      <AnimatePresence>
        {activeGallery && (
          <motion.div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center px-4">
            <motion.div className="bg-[#1C1D5E] rounded-xl max-w-4xl w-full p-5 relative">
              <button
                onClick={() => setActiveGallery(null)}
                className="absolute top-3 right-4 text-white text-xl"
              >
                ✕
              </button>
              <h3 className="text-xl font-serif font-bold text-[#C961DE] mb-4">
                Design Gallery
              </h3>
              <div className="flex gap-4 overflow-x-auto pb-3">
                {activeGallery.map((img, i) => (
                  <motion.img
                    key={i}
                    src={img}
                    className="h-[320px] w-[150px] rounded-lg object-cover flex-shrink-0"
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

/* ================= COMPONENTS ================= */

function CaseCard({ id, cover, title, subtitle, openCard, setOpenCard, children }) {
  const open = openCard === id;

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-[900px] rounded-xl bg-gradient-to-r from-[#C961DE] to-[#2954A3] p-[1.5px]">
        <div className="bg-[#1C1D5E] rounded-xl">
          <div className="grid md:grid-cols-2 gap-4 p-4 items-center">
            <img src={cover} className="h-[180px] w-full md:w-[300px] object-cover rounded-lg" />
            <div>
              <p className="text-xs text-white/60">{subtitle}</p>
              <h3 className="text-2xl font-serif text-[#C961DE] mb-3">{title}</h3>
              <button
                onClick={() => setOpenCard(open ? null : id)}
                className="px-5 py-2 bg-gradient-to-r from-[#C961DE] to-[#2954A3] rounded-md text-white text-sm"
              >
                {open ? "Hide Case Study" : "View Case Study"}
              </button>
            </div>
          </div>
          {open && <div className="px-5 pb-5">{children}</div>}
        </div>
      </div>
    </div>
  );
}

const CaseGrid = ({ children }) => (
  <div className="grid md:grid-cols-2 gap-4 text-sm mt-4">{children}</div>
);

const Info = ({ icon, title, children }) => (
  <div className="bg-[#151652] rounded-lg p-4">
    <h4 className="text-[#C961DE] font-semibold mb-1">
      {icon} {title}
    </h4>
    <p className="text-gray-300">{children}</p>
  </div>
);

const GalleryButton = ({ onClick }) => (
  <button
    onClick={onClick}
    className="mt-5 px-5 py-2 bg-gradient-to-r from-[#C961DE] to-[#2954A3] text-white rounded-md text-sm"
  >
    View Design Gallery
  </button>
);
