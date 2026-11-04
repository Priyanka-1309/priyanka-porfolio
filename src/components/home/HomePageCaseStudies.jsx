import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion as Motion } from "framer-motion";
import { Sparkles, Users } from "lucide-react";

import weddingPlannerCover from "../../assets/images/projectsImage/weddingPlannerCover.png";
import CrmCover from "../../assets/images/projectsImage/crmCover.png";
import freshGroCover from "../../assets/images/projectsImage/freshGroCover.png";
import metroBuddyCover from "../../assets/images/projectsImage/metroBuddyCover.png";
import oscormDashboard from "../../assets/images/projectsImage/oscormDashboard.png";
import easySkyTripCover from "../../assets/images/projectsImage/easySkyTripCover.png";
import myLocalPlaceCover from "../../assets/images/projectsImage/mylocalPlaceCover.png";

// The Oscorm cover artwork is stored in: src/cover pages/
// Load it from the real folder instead of the old projectsImage path.
const coverPageFiles = import.meta.glob("../../cover pages/*", {
  eager: true,
  import: "default",
});
const oscormCover =
  Object.entries(coverPageFiles).find(([filePath]) =>
    /\/(?:oscomcover|oscormcover)[^/]*\.(png|jpe?g|webp|avif)$/i.test(filePath)
  )?.[1] || oscormDashboard;

import w1 from "../../case studies/1wedding.png";
import w2 from "../../case studies/2wedding.png";
import w3 from "../../case studies/3wedding.png";
import w4 from "../../case studies/4wedding.png";
import w5 from "../../case studies/5wedding.png";
import w6 from "../../case studies/6wedding.png";
import w7 from "../../case studies/7wedding.png";

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

import service1 from "../../case studies/1service.png";
import service2 from "../../case studies/2service.png";
import service3 from "../../case studies/3service.png";
import service4 from "../../case studies/4service.png";

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

import oscorm1 from "../../case studies/oscorm1.png";
import oscorm2 from "../../case studies/oscorm2.png";
import oscorm3 from "../../case studies/oscorm3.jpg";
import oscorm4 from "../../case studies/oscorm4.png";
import oscorm5 from "../../case studies/oscorm5.jpg";
import oscorm6 from "../../case studies/oscorm6.png";
import oscorm8 from "../../case studies/oscorm8.png";
import oscorm9 from "../../case studies/oscorm9.png";
import oscorm10 from "../../case studies/oscorm10.png";
import oscorm11 from "../../case studies/oscorm11.png";
import oscorm12 from "../../case studies/oscorm12.png";
import oscorm13 from "../../case studies/oscoem13.png";
import aoscorm1 from "../../case studies/aoscorm1.png";
import aoscorm2 from "../../case studies/aoscorm2.png";
import aoscorm3 from "../../case studies/aoscorm3.png";
import aoscorm4 from "../../case studies/aoscorm4.png";
import aoscorm5 from "../../case studies/aoscorm5.png";
import aoscorm6 from "../../case studies/aoscorm6.png";
// Dashboard screenshots: supports PNG, JPG, JPEG and WebP files.
const cdOscormFiles = import.meta.glob("../../case studies/cdoscorm*.*", { eager: true, import: "default" });
const fdOscormFiles = import.meta.glob("../../case studies/fdoscorm*.*", { eager: true, import: "default" });
// EasySkyTrip screens: est1 through est12 (PNG/JPG/JPEG/WebP/AVIF supported).
const easySkyTripFiles = import.meta.glob("../../case studies/est*.*", { eager: true, import: "default" });
// MyLocalPlace screens
const myLocalPlaceUserFiles = import.meta.glob(
  "../../case studies/UMLP*.*",
  { eager: true, import: "default" }
);

const myLocalPlaceBusinessFiles = import.meta.glob(
  "../../case studies/BMLP*.*",
  { eager: true, import: "default" }
);

const myLocalPlaceAdminFiles = import.meta.glob(
  "../../case studies/DMLP*.*",
  { eager: true, import: "default" }
);

const getMyLocalPlaceScreens = (files, prefix, total) =>
  Array.from({ length: total }, (_, index) => {
    const number = index + 1;
    const path = Object.keys(files).find((file) =>
      new RegExp(
        `/${prefix}${number}\\.(png|jpe?g|webp|avif)$`,
        "i"
      ).test(file)
    );

    return path ? files[path] : null;
  }).filter(Boolean);

const getOscormScreens = (files, prefix, total) =>
  Array.from({ length: total }, (_, index) => {
    const number = index + 1;
    const path = Object.keys(files).find((file) =>
      new RegExp(`/${prefix}${number}\\.(png|jpe?g|webp|avif)$`, "i").test(file)
    );
    return path ? files[path] : null;
  }).filter(Boolean);

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

/* ------------------------------------------------------------------ */
/*  DATA – project summaries and case-study details                    */
/* ------------------------------------------------------------------ */
const PROCESS_TITLES = ["Research", "Wireframes", "Visual design", "Prototype"];
const metroBuddyAppGallery = [
  mp1, mp2, mp3, mp4, mp5, mp6, mp7, mp8, mp9,
  mp10, mp11, mp12, mp13, mp14, mp15, mp16, mp17, mp18, mp19,
  mp26, mp27,
];
const metroBuddyWebsiteGallery = [mp20, mp21, mp22, mp23, mp24, mp25];
const oscormWebsiteGallery = [
  oscorm1,
  oscorm2,
  oscorm3,
  oscorm4,
  oscorm5,
  oscorm6,
  oscorm8,
  oscorm9,
  oscorm10,
  oscorm11,
  oscorm12,
  oscorm13,
  oscormDashboard,
];
const oscormClientGallery = getOscormScreens(cdOscormFiles, "cdoscorm", 33);
const oscormFreelancerGallery = getOscormScreens(fdOscormFiles, "fdoscorm", 12);
const oscormAnalyticsGallery = [aoscorm1, aoscorm2, aoscorm3, aoscorm4, aoscorm5, aoscorm6];
const easySkyTripGallery = getOscormScreens(easySkyTripFiles, "est", 12);
const myLocalPlaceUserGallery = getMyLocalPlaceScreens(
  myLocalPlaceUserFiles,
  "UMLP",
  7
);

const myLocalPlaceBusinessGallery = getMyLocalPlaceScreens(
  myLocalPlaceBusinessFiles,
  "BMLP",
  9
);

const myLocalPlaceAdminGallery = getMyLocalPlaceScreens(
  myLocalPlaceAdminFiles,
  "DMLP",
  7
);

const projects = [
  {
    id: "oscorm",
    number: "01",
    title: "Oscorm",
    category: "Website",
    projectType: "Talent platform · Website, Client, Freelancer & Analytics",
    presentation: "hybrid",
    browserFrameModes: ["Website", "Client", "Freelancer", "Analytics"],
    galleryModes: {
      Website: oscormWebsiteGallery,
      Client: oscormClientGallery,
      Freelancer: oscormFreelancerGallery,
      Analytics: oscormAnalyticsGallery,
    },
    label: "TALENT PLATFORM · WEB & DASHBOARD DESIGN",
    role: "UI/UX Designer",
    description:
      "A connected talent platform with a public website and dedicated client, freelancer and analytics dashboards.",
    overview:
      "Oscorm brings hiring and freelance work into one platform. The website helps businesses discover verified experts, while client, freelancer and analytics dashboards support hiring, project delivery and performance tracking.",
    audience:
      "Businesses looking for skilled professionals and freelancers seeking verified project opportunities.",
    goals: [
      "Make relevant talent easier to discover",
      "Build trust with clear profile and skill verification",
      "Make project progress and payments easier to follow",
    ],
    problem:
      "Hiring and freelance work can involve manual profile checks, scattered communication and unclear project milestones.",
    insights: [
      { t: "Trust comes first", d: "Both sides need confidence in skills, identity and payment before committing to a project." },
      { t: "Two user journeys", d: "Businesses and freelancers need different tools, but should share a consistent platform." },
      { t: "Visibility matters", d: "Clear milestones help people understand what is happening after a match is made." },
    ],
    solution:
      "A two-sided hiring experience that brings verified profiles, AI-assisted discovery and project progress into a clear workflow.",
    features: [
      { t: "Verified profiles", d: "Present professional skills and trust signals where hiring decisions happen." },
      { t: "AI talent matching", d: "Help businesses find experts relevant to their project needs." },
      { t: "Freelancer tools", d: "Support profile building and personalized job discovery." },
      { t: "Project milestones", d: "Keep delivery stages and escrow-protected payments easy to understand." },
    ],
    process: [
      "Organised the experience around the distinct needs of clients and freelancers.",
      "Prioritised verification and relevant talent discovery in the hiring journey.",
      "Used Oscorm's teal accents with neutral surfaces to keep actions clear and readable.",
      "Connected matching, project milestones and payment into one continuous workflow.",
    ],
    palette: [
      { name: "Oscorm Green", hex: "#057A79", use: "Primary highlights, buttons and key actions" },
      { name: "Bright Teal", hex: "#00E7E1", use: "Secondary accents and supporting details" },
      { name: "Ink", hex: "#14171A", use: "Headings and primary text" },
      { name: "Mist", hex: "#F3F4F6", use: "Soft interface backgrounds" },
      { name: "White", hex: "#FFFFFF", use: "Cards and content surfaces" },
    ],
    fonts: { display: "DM Sans", body: "Inter" },
    principles: ["Build trust early", "Design for both sides", "Keep progress visible"],
    outcome:
      "A clearer hiring and freelance workflow that supports discovery, project delivery and payment in one place.",
    learnings:
      "Two-sided platforms work best when each audience gets a focused journey within a shared visual system.",
    tools: ["Figma", "UI/UX Design", "Client Dashboard", "Freelancer Dashboard", "Analytics Dashboard", "Prototyping", "Design System"],
    cover: oscormCover,
    accent: "#057A79",
    gallery: [...oscormWebsiteGallery, ...oscormClientGallery, ...oscormFreelancerGallery, ...oscormAnalyticsGallery],
  },
  {
    id: "wedding",
    number: "02",
    title: "Wedding Planner",
    category: "Website",
    label: "UI/UX DESIGN · WEBSITE",
    role: "UI/UX Designer",
    description:
      "A premium wedding planning experience to discover venues, vendors and wedding inspiration in one place.",
    overview:
      "Wedding Planner is a website concept for couples who want to plan their big day without opening ten different tabs. Venues, photographers, decorators, caterers and inspiration live together in one calm, elegant place.",
    audience: "Engaged couples and families planning a wedding for the first time.",
    goals: [
      "Let couples compare vendors in one place",
      "Make every service easy to understand quickly",
      "Create a premium, trustworthy first impression",
    ],
    problem:
      "Wedding information is scattered across different platforms. Comparing vendors, understanding services and making decisions can become stressful.",
    insights: [
      { t: "Too many tabs", d: "Couples jump between social media, vendor sites and chats just to compare two options." },
      { t: "Unclear pricing", d: "Services and packages are explained differently everywhere, so decisions feel risky." },
      { t: "Stress, not joy", d: "Planning tools often feel like spreadsheets instead of something to look forward to." },
    ],
    solution:
      "A structured experience with clear categories, elegant layouts and easy-to-explore wedding services.",
    features: [
      { t: "Clear categories", d: "Venues, vendors and inspiration are grouped so users always know where to go next." },
      { t: "Vendor cards", d: "Each card shows the essentials first: who, what and why, so comparing is fast." },
      { t: "Inspiration gallery", d: "Large, image-led sections keep the experience emotional, not transactional." },
      { t: "Generous spacing", d: "Soft layouts and white space make a long planning journey feel calm." },
    ],
    process: [
      "Looked at how couples search for venues and vendors and listed the biggest frustrations.",
      "Mapped the page structure and navigation before any colour or imagery.",
      "Built a soft, romantic look with blush tones, a serif headline and clean sans body text.",
      "Linked the main flow from home to vendor details in Figma to check it feels natural.",
    ],
    palette: [
      { name: "Blush", hex: "#F29BBD", use: "Primary accent, buttons, highlights" },
      { name: "Deep Plum", hex: "#3B1E37", use: "Headlines and key text" },
      { name: "Ivory", hex: "#FBF5EF", use: "Page background" },
      { name: "Soft Gold", hex: "#C9A46A", use: "Small details and icons" },
      { name: "Rose Dust", hex: "#E7C6D2", use: "Cards and dividers" },
    ],
    fonts: { display: "Playfair Display", body: "Inter" },
    principles: ["Romantic but not fussy", "Image first, text second", "One clear action per section"],
    outcome:
      "A polished, easy-to-navigate concept focused on trust, discovery and a premium wedding experience.",
    learnings:
      "Emotional products need calm layouts. Giving photography room to breathe did more for trust than adding more features.",
    tools: ["Figma", "User Research", "Wireframes", "UI Design"],
    cover: weddingPlannerCover,
    accent: "#F29BBD",
    gallery: [w1, w2, w3, w4, w5, w6, w7],
  },
  {
    id: "school",
    number: "03",
    title: "S2 HIVE School UI",
    category: "Mobile App",
    label: "SCHOOL CRM · MOBILE APP",
    role: "UI/UX Designer",
    description:
      "A school CRM app concept that brings attendance, fees, staff updates and daily school operations into one clear dashboard.",
    overview:
      "S2 HIVE is a mobile CRM dashboard for school teams. It brings everyday operational information—attendance, fees, staff activity and notifications—into one place for faster decisions.",
    audience: "School administrators and staff managing daily operations.",
    goals: [
      "Surface attendance and fee summaries at a glance",
      "Make important updates easy to find on mobile",
      "Keep recurring school tasks clear and consistent",
    ],
    problem:
      "School teams often rely on scattered tools and updates to monitor attendance, fees and daily activity, making key information harder to act on quickly.",
    insights: [
      { t: "Scattered operations", d: "Attendance, fee collection and staff updates can live in separate workflows." },
      { t: "Need for quick scanning", d: "Admins need the most important numbers and exceptions visible immediately." },
      { t: "Small-screen density", d: "Operational dashboards need structure so useful data stays readable on mobile." },
    ],
    solution:
      "A mobile-first school CRM dashboard that prioritises key metrics, clear status indicators and quick access to common tasks.",
    features: [
      { t: "At-a-glance dashboard", d: "Attendance and fee summaries help admins spot daily changes quickly." },
      { t: "Clear status cards", d: "Consistent cards make operational information easier to scan and compare." },
      { t: "Quick actions", d: "Frequent tasks and updates are reachable without digging through menus." },
      { t: "Reusable components", d: "A shared visual system keeps screens consistent as the product grows." },
    ],
    process: [
      "Mapped the school administrator's key daily tasks and information needs.",
      "Prioritised dashboard content and grouped related school operations into clear flows.",
      "Used a confident purple palette, strong contrast and compact cards for fast scanning.",
      "Built reusable components in Auto Layout and connected the core screens in a prototype.",
    ],
    palette: [
      { name: "Periwinkle", hex: "#A5B4FC", use: "Primary accent and highlights" },
      { name: "Navy", hex: "#1E2A5A", use: "Headings, nav and key text" },
      { name: "Cloud", hex: "#F1F3FF", use: "Page and section background" },
      { name: "Amber", hex: "#F6B73C", use: "Alerts and call-outs" },
      { name: "Slate", hex: "#5B6280", use: "Body text and captions" },
    ],
    fonts: { display: "Plus Jakarta Sans", body: "Inter" },
    principles: ["Clarity before decoration", "Same pattern, same place", "Readable at a glance"],
    outcome:
      "A school CRM app concept that brings attendance, fee summaries and everyday operational updates into one clear mobile experience.",
    learnings:
      "A consistent dashboard system makes dense school operations easier to scan. Reusable cards and clear status patterns help staff move between daily tasks with less friction.",
    tools: ["Figma", "Auto Layout", "Design System", "UI Design"],
    cover: CrmCover,
    accent: "#A5B4FC",
    gallery: [
      crm1, crm2, crm3, crm4, crm5, crm6, crm7, crm8,
      crm9, crm10, crm11, crm12, crm13, crm14, crm15,
      crm16, crm17, crm18, crm19, crm20, crm21, crm22, crm23,
    ],
  },
  {
    id: "service",
    number: "04",
    title: "Service Booking",
    category: "Website",
    label: "SERVICE PLATFORM · UI/UX",
    role: "UI/UX Designer",
    description:
      "A service booking website concept that helps people discover services and understand the booking process.",
    overview:
      "Service Booking helps people find trusted local services such as cleaning, repairs and beauty, understand what is included, and book a slot without confusion.",
    audience: "Busy people who want reliable home and personal services.",
    goals: [
      "Make service discovery quick",
      "Explain what is included before booking",
      "Keep the booking journey short and clear",
    ],
    problem:
      "Finding reliable local services and understanding booking steps can be confusing.",
    insights: [
      { t: "Unsure who to trust", d: "Users want proof and clear details before they commit." },
      { t: "Hidden steps", d: "People do not know how many steps are left until they are in the middle." },
      { t: "Too much choice", d: "Long unorganised lists make it hard to pick the right service." },
    ],
    solution:
      "Organised service discovery, clear service details and a simple booking journey.",
    features: [
      { t: "Service categories", d: "Large, friendly categories let users start from what they need." },
      { t: "Detail pages", d: "What is included, how it works and what it costs in one scannable page." },
      { t: "Step-by-step booking", d: "A visible progress path so users always know what is next." },
      { t: "Clear confirmation", d: "A final summary so nothing about the booking is a surprise." },
    ],
    process: [
      "Reviewed common booking flows and noted where people usually drop off.",
      "Drew the user flow from search to confirmation and cut unnecessary steps.",
      "Used warm amber and cream for a friendly, approachable feel with strong contrast for actions.",
      "Prototyped the booking path and checked that every step has one obvious action.",
    ],
    palette: [
      { name: "Amber", hex: "#F5B971", use: "Primary accent and buttons" },
      { name: "Charcoal", hex: "#232323", use: "Headings and body text" },
      { name: "Cream", hex: "#FFF6E9", use: "Page background" },
      { name: "Teal", hex: "#2F7F79", use: "Success and confirmation" },
      { name: "Sand", hex: "#E8D3B5", use: "Cards and borders" },
    ],
    fonts: { display: "DM Sans", body: "Inter" },
    principles: ["Show the next step", "Details before commitment", "Warm and trustworthy"],
    outcome:
      "A more structured booking experience with a focus on usability and clarity.",
    learnings:
      "People feel safer when they can see the whole journey. A visible progress path reduced the feeling of risk in the design.",
    tools: ["Figma", "Wireframes", "User Flow", "UI Design"],
    cover: service1,
    accent: "#F5B971",
    gallery: [service1, service2, service3, service4],
  },
  {
    id: "job",
    number: "05",
    title: "Job Portal App",
    category: "Mobile App",
    label: "MOBILE APP · UI/UX DESIGN",
    role: "UI/UX Designer",
    description:
      "A job portal app concept designed to make job discovery and application flows easier to follow.",
    overview:
      "Job Portal is a mobile-first app for job seekers. It focuses on finding relevant roles, reading job details quickly and keeping track of every application in one place.",
    audience: "Students, freshers and working professionals looking for new roles.",
    goals: [
      "Help users find relevant jobs faster",
      "Make job details easy to read on a small screen",
      "Let users track applications without confusion",
    ],
    problem:
      "Job seekers need a clear way to explore opportunities, review job details and manage applications.",
    insights: [
      { t: "Endless lists", d: "Users scroll through jobs that do not match, and lose interest." },
      { t: "Dense job posts", d: "Long descriptions are hard to read and compare on mobile." },
      { t: "Lost applications", d: "People forget where they applied and what happened next." },
    ],
    solution:
      "Structured job listings, searchable opportunities and a straightforward application journey.",
    features: [
      { t: "Smart search and filters", d: "Quickly narrow by role, location and type." },
      { t: "Scannable job cards", d: "Title, company, pay and location are visible without opening the job." },
      { t: "Simple apply flow", d: "A short, guided application with clear progress." },
      { t: "Application tracker", d: "A single place to see every application status." },
    ],
    process: [
      "Studied how job seekers search and where mobile job apps feel heavy.",
      "Sketched the main flows: search, job detail, apply and track.",
      "Used a fresh mint palette with a strong dark teal for readable text and key actions.",
      "Built an interactive prototype to test thumb reach and the apply flow.",
    ],
    palette: [
      { name: "Mint", hex: "#9BDCCB", use: "Primary accent and chips" },
      { name: "Deep Teal", hex: "#0F4C45", use: "Headings and primary buttons" },
      { name: "Snow", hex: "#F4FBF8", use: "Screen background" },
      { name: "Coral", hex: "#FF7A66", use: "Notifications and urgent actions" },
      { name: "Graphite", hex: "#2B3A38", use: "Body text" },
    ],
    fonts: { display: "Manrope", body: "Inter" },
    principles: ["Thumb friendly", "Information at a glance", "Always show status"],
    outcome:
      "A mobile-first concept focused on discoverability and a more organised job search.",
    learnings:
      "On mobile, every extra field costs attention. Cutting the apply flow down to the essentials made the whole app feel lighter.",
    tools: ["Figma", "Prototyping", "User Flow", "UI Design"],
    cover: jp1,
    accent: "#9BDCCB",
    gallery: [
      jp1, jp2, jp3, jp4, jp5, jp6, jp7, jp8, jp9, jp10,
      jp11, jp12, jp13, jp14, jp15, jp16, jp17, jp18, jp19,
    ],
  },
  {
    id: "freshgro",
    number: "06",
    title: "Fresh Gro",
    category: "Mobile App",
    label: "GROCERY APP · UI/UX DESIGN",
    role: "UI/UX Designer",
    description:
      "A fresh, modern grocery shopping app concept with a focus on browsing, cart management and checkout.",
    overview:
      "Fresh Gro is a grocery shopping app concept that makes everyday ordering quick. Clear product presentation, an easy cart and a short checkout keep the focus on fresh food, not on fighting the interface.",
    audience: "Households and busy professionals who order groceries regularly.",
    goals: [
      "Make browsing products pleasant and quick",
      "Keep cart changes simple and visible",
      "Shorten checkout to as few steps as possible",
    ],
    problem:
      "Crowded product layouts and complicated shopping flows can make everyday grocery ordering harder.",
    insights: [
      { t: "Crowded screens", d: "Too many products, banners and offers fight for attention." },
      { t: "Cart anxiety", d: "Users are unsure what is in the cart and how much they will pay." },
      { t: "Slow repeat orders", d: "Regular shoppers want to reorder quickly, not search again." },
    ],
    solution:
      "Clear product presentation, consistent components and a simplified shopping journey.",
    features: [
      { t: "Clean product cards", d: "Large images, clear price and one-tap add to cart." },
      { t: "Category browsing", d: "Friendly categories make finding items quick." },
      { t: "Live cart", d: "Quantities and totals update instantly and stay visible." },
      { t: "Short checkout", d: "Address, slot and payment in a few clear steps." },
    ],
    process: [
      "Looked at how people shop for groceries and what slows them down.",
      "Planned a simple structure: home, categories, product, cart and checkout.",
      "Chose fresh greens with a red-orange accent for sale and action moments.",
      "Created reusable components and prototyped the full shopping flow.",
    ],
    palette: [
      { name: "Leaf", hex: "#B6E3A8", use: "Primary accent and backgrounds" },
      { name: "Forest", hex: "#1F5D2E", use: "Headings and primary buttons" },
      { name: "Lime", hex: "#8BD450", use: "Success and highlights" },
      { name: "Cream", hex: "#FAFBF2", use: "Screen background" },
      { name: "Tomato", hex: "#F2563D", use: "Offers and alerts" },
    ],
    fonts: { display: "Poppins", body: "Inter" },
    principles: ["Fresh and light", "Products are the hero", "Cart always in reach"],
    outcome:
      "A clean grocery app concept designed around convenience and easy product discovery.",
    learnings:
      "Consistent components make a large catalogue feel calm. Strong product photography and spacing do most of the design work.",
    tools: ["Figma", "UI Design", "Prototyping", "Components"],
    cover: freshGroCover,
    accent: "#B6E3A8",
    gallery: [
      gp0, gp1, gp2, gp3, gp4, gp5, gp6, gp7, gp8, gp9,
      gp10, gp11, gp12, gp13, gp14, gp15, gp16, gp17, gp18, gp19,
    ],
  },
  {
    id: "metro-buddy",
    number: "07",
    title: "Metro Buddy",
    category: "Website",
    projectType: "Website + mobile app",
    presentation: "hybrid",
    label: "LOCAL SERVICES · WEB & APP",
    role: "UI/UX Designer",
    description:
      "A connected local-services experience that helps customers discover providers while giving businesses and agents the tools to manage service requests.",
    overview:
      "Metro Buddy brings local service discovery, business listings and lead management into one connected platform. Separate journeys support customers, local businesses and agents across web and mobile.",
    audience:
      "People looking for nearby services, local businesses managing listings, and agents coordinating leads.",
    goals: [
      "Make local service discovery straightforward",
      "Give businesses a clear way to manage listings",
      "Help agents track and fulfil incoming leads",
    ],
    problem:
      "Finding reliable local services and coordinating requests across customers, businesses and agents can create fragmented journeys.",
    insights: [
      { t: "Discovery needs context", d: "People need nearby options with useful service details before deciding who to contact." },
      { t: "Different roles, different tasks", d: "Customers, businesses and agents need focused tools rather than one crowded interface." },
      { t: "Long workflows feel heavy", d: "Breaking booking into clear steps makes progress easier to understand." },
    ],
    solution:
      "A multi-role service platform with local discovery, business tools and agent workflows, designed to feel consistent across web and mobile.",
    features: [
      { t: "Local discovery", d: "Search and browse services by location and category." },
      { t: "Business listings", d: "Give local providers a place to present and manage their services." },
      { t: "Agent workspace", d: "Bring leads, tickets and operational summaries into a focused dashboard." },
      { t: "Guided service flow", d: "Break service requests into smaller, easier-to-follow steps." },
    ],
    process: [
      "Identified the needs of customers, service businesses and agents as separate user groups.",
      "Organised discovery, booking, listing management and lead handling into clear role-based flows.",
      "Used the existing red, white and charcoal brand palette with clean layouts and visible calls to action.",
      "Designed the experience across mobile screens and web surfaces as one connected service platform.",
    ],
    palette: [
      { name: "Primary Red", hex: "#B22222", use: "Brand actions and primary calls to action" },
      { name: "White", hex: "#FFFFFF", use: "Clean surfaces and readable layouts" },
      { name: "Charcoal", hex: "#333333", use: "High-contrast text and interface details" },
      { name: "Soft Peach", hex: "#FCE8E6", use: "Subtle background accents" },
      { name: "Success Green", hex: "#168447", use: "Positive states and confirmations" },
    ],
    fonts: { display: "Poppins", body: "Inter" },
    principles: ["Make the next step obvious", "Design for each role", "Keep local information easy to scan"],
    outcome:
      "A connected service concept that brings customer discovery, business listings and agent operations together across web and mobile.",
    learnings:
      "Multi-role products need distinct journeys and a shared visual language; role-specific screens help keep each task focused.",
    tools: ["Figma", "UI/UX Design", "Prototyping", "Responsive Design"],
    cover: metroBuddyCover,
    accent: "#B22222",
    galleryModes: {
      App: metroBuddyAppGallery,
      Website: metroBuddyWebsiteGallery,
    },
    gallery: [
      ...metroBuddyAppGallery,
      ...metroBuddyWebsiteGallery,
    ],
  },
  {
    id: "mylocalplace",
    number: "08",
    title: "MyLocalPlace",
    category: "Website",
    projectType: "Local discovery · Website",
    label: "LOCAL DISCOVERY · WEB DESIGN",
    role: "UI/UX Designer",
    description:
      "A local discovery platform for finding trusted businesses, comparing reviews and connecting with nearby services.",
    overview:
      "MyLocalPlace helps people search for local restaurants, services and shops, while giving businesses tools to share updates, respond to reviews and reach nearby customers.",
    audience:
      "People searching for local businesses and business owners building their presence in the community.",
    goals: [
      "Make local businesses easy to search and explore",
      "Help customers judge trust through reviews and details",
      "Give businesses a clear way to engage local customers",
    ],
    problem:
      "Finding reliable local businesses can mean switching between search results, review sites and business pages to compare options.",
    insights: [
      { t: "Search needs context", d: "Location, category and useful business details help people decide where to go." },
      { t: "Trust is built socially", d: "Reviews and responses help customers feel confident before reaching out." },
      { t: "Businesses need visibility", d: "Owners need simple ways to keep listings current and connect with nearby customers." },
    ],
    solution:
      "A business discovery experience that brings category browsing, reviews and local business updates together.",
    features: [
      { t: "Category discovery", d: "Browse restaurants, shopping, health, travel and other local services." },
      { t: "Business search", d: "Find relevant businesses and services in a locality." },
      { t: "Reviews and ratings", d: "Make customer feedback easy to scan while comparing options." },
      { t: "Business engagement", d: "Help owners share updates, answer questions and respond to reviews." },
    ],
    process: [
      "Structured the experience around customer discovery and business visibility.",
      "Grouped local services into categories to support browsing as well as direct search.",
      "Used MyLocalPlace's maroon brand color with white surfaces and readable contrast.",
      "Kept reviews and business information close to the discovery flow.",
    ],
    palette: [
      { name: "Brand Maroon", hex: "#8B1A2B", use: "Brand identity and primary actions" },
      { name: "White", hex: "#FFFFFF", use: "Navigation and content surfaces" },
      { name: "Warm White", hex: "#FDFDFD", use: "Main page background" },
      { name: "Charcoal", hex: "#2B292A", use: "Headings and body text" },
      { name: "Review Gold", hex: "#FFC107", use: "Ratings and review highlights" },
    ],
    fonts: { display: "Inter", body: "Inter" },
    principles: ["Make local search simple", "Show trust signals", "Support both audiences"],
    outcome:
      "A local business directory that helps customers discover services and gives owners more ways to build visibility.",
    learnings:
      "Pairing category browsing with visible reviews helps turn a broad directory into a more confident discovery experience.",
    tools: ["Figma", "UI/UX Design", "Responsive Design", "Prototyping"],
    cover: myLocalPlaceCover,
accent: "#8B1A2B",

galleryModes: {
  User: myLocalPlaceUserGallery,
  Business: myLocalPlaceBusinessGallery,
  "Admin Dashboard": myLocalPlaceAdminGallery,
},

gallery: [
  ...myLocalPlaceUserGallery,
  ...myLocalPlaceBusinessGallery,
  ...myLocalPlaceAdminGallery,
],
  },
  {
    id: "easyskytrip",
    number: "09",
    title: "EasySkyTrip",
    category: "Website",
    projectType: "Travel booking · Website",
    label: "TRAVEL BOOKING · WEB DESIGN",
    role: "UI/UX Designer",
    description:
      "A travel booking experience for discovering flight deals, destinations and travel options in one place.",
    overview:
      "EasySkyTrip brings flight and travel offers together with recommended tickets, popular airlines and destination discovery to help travelers plan their next journey.",
    audience:
      "Travelers comparing flight options and planning domestic or international trips.",
    goals: [
      "Make flight and destination discovery straightforward",
      "Surface useful offers and recommended tickets",
      "Build confidence with clear booking and support information",
    ],
    problem:
      "Travelers often compare airlines, destinations and offers across multiple sites before they can make a confident booking decision.",
    insights: [
      { t: "Planning starts with a route", d: "Origin and destination should be easy to set and review." },
      { t: "Offers need context", d: "Travelers need to compare deals alongside destinations and airline information." },
      { t: "Confidence continues after search", d: "Clear payment, refund and support information helps people complete a booking." },
    ],
    solution:
      "A travel-focused website that brings route search, flight offers and destination inspiration into a single journey.",
    features: [
      { t: "Route search", d: "Start a trip by choosing where to travel from and to." },
      { t: "Flight offers", d: "Explore exclusive deals and recommended tickets." },
      { t: "Airline discovery", d: "Review popular airline partners while comparing travel options." },
      { t: "Booking reassurance", d: "Keep payment security, refunds and support easy to find." },
    ],
    process: [
      "Organised the page around route search, offers and destination discovery.",
      "Separated domestic and international travel to make browsing more relevant.",
      "Used the EasySkyTrip wordmark's magenta accent with crisp light surfaces.",
      "Kept booking reassurance visible alongside the inspiration-led travel content.",
    ],
    palette: [
      { name: "Brand Magenta", hex: "#7D0740", use: "Brand highlights and primary actions" },
      { name: "Deep Berry", hex: "#750037", use: "Supporting brand accents" },
      { name: "Ink", hex: "#010101", use: "Headings and high-contrast text" },
      { name: "White", hex: "#FFFFFF", use: "Primary content surfaces" },
      { name: "Soft Rose", hex: "#F9F7F8", use: "Subtle background accents" },
    ],
    fonts: { display: "Geist", body: "Geist" },
    principles: ["Search first", "Make offers easy to compare", "Reassure at every step"],
    outcome:
      "A travel booking concept that brings route search, deals and destination browsing into one approachable experience.",
    learnings:
      "Travel discovery feels simpler when inspiration and practical booking information live in the same journey.",
    tools: ["Figma", "UI/UX Design", "Responsive Design", "Prototyping"],
    cover: easySkyTripCover,
    accent: "#7D0740",
    // Keep every original EasySkyTrip screen in numeric order.
    gallery: easySkyTripGallery.length ? easySkyTripGallery : [easySkyTripCover],
  },
];

const FILTERS = [
  { key: "All", short: "All" },
  { key: "Website", short: "Web" },
  { key: "Mobile App", short: "Apps" },
];

const SECTIONS = [
  ["overview", "Project overview"],
  ["problem", "Problem statement"],
  ["goals", "Project goals & objectives"],
  ["journey", "User journey"],
  ["uiux", "UI/UX design & colour palette"],
  ["screens", "Screens & mockups"],
  ["features", "Key features"],
  ["outcome", "Final outcome"],
];

const Arrow = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path d="M3 11L11 3M5 3h6v6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

function SectionHeading({ number, title, kicker }) {
  return (
    <header className="pc-editorial-heading">
      <span>{number}</span>
      <div>
        <h2>{title}</h2>
        <p>{kicker}</p>
      </div>
    </header>
  );
}

/* ------------------------------------------------------------------ */
/*  MAIN                                                               */
/* ------------------------------------------------------------------ */
class CaseBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { err: null };
  }
  static getDerivedStateFromError(err) {
    return { err };
  }
  render() {
    if (this.state.err) {
      return (
        <div style={{ padding: 32, fontFamily: "monospace", color: "#b00020" }}>
          Case studies could not load: {String(this.state.err && this.state.err.message)}
        </div>
      );
    }
    return this.props.children;
  }
}

export default function CaseStudies() {
  return (
    <CaseBoundary>
      <CaseStudiesInner />
    </CaseBoundary>
  );
}

function CaseStudiesInner() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState(null);
  const [previewId, setPreviewId] = useState(projects[0].id);
  const rootRef = useRef(null);
  const savedY = useRef(0);

  const visible = useMemo(
    () => projects.filter((p) => filter === "All" || p.category === filter),
    [filter]
  );
  const previewIndex = Math.max(0, visible.findIndex((project) => project.id === previewId));
  const previewProject = visible[previewIndex];
  const carouselItems = visible
    .map((project, index) => {
      let offset = index - previewIndex;
      if (offset > visible.length / 2) offset -= visible.length;
      if (offset < -visible.length / 2) offset += visible.length;
      return { project, offset };
    })
    .filter(({ offset }) => Math.abs(offset) <= 2);

  const counts = {
    All: projects.length,
    Website: projects.filter((p) => p.category === "Website").length,
    "Mobile App": projects.filter((p) => p.category === "Mobile App").length,
  };

  function openProject(project) {
    savedY.current = window.scrollY;
    const rootTop = rootRef.current?.getBoundingClientRect().top + window.scrollY;
    setSelected(project);
    if (Number.isFinite(rootTop)) window.scrollTo({ top: rootTop, behavior: "instant" });
  }

  function openNextProject(project) {
    const rootTop = rootRef.current?.getBoundingClientRect().top + window.scrollY;
    setSelected(project);
    if (Number.isFinite(rootTop)) window.scrollTo({ top: rootTop, behavior: "instant" });
  }

  function closeProject() {
    setSelected(null);
    setTimeout(() => window.scrollTo({ top: savedY.current }), 0);
  }

  return (
    <section className="pc-root" ref={rootRef}>
      <style>{STYLES + `
/* Case study card spacing refinement */
.pc-detail .pc-story-content .pc-editorial-section{padding:clamp(22px,2.6vw,34px);}
.pc-detail .pc-editorial-pair{gap:18px;margin-bottom:22px;}
.pc-detail .pc-editorial-pair-item{padding:clamp(22px,2.4vw,32px)!important;}
.pc-detail #pc-sec-problem .pc-editorial-problem{padding:clamp(22px,2.5vw,34px)!important;min-height:220px;}
.pc-detail .pc-editorial-goals{gap:12px;}
.pc-detail .pc-editorial-goal{padding:18px!important;min-height:126px;gap:10px;}
.pc-detail .pc-editorial-goal p{line-height:1.6;font-size:13px;}
.pc-detail .pc-editorial-section .pc-block-head{margin-bottom:20px;}
@media(max-width:767px){
 .pc-detail .pc-story-content .pc-editorial-section{padding:19px!important;}
 .pc-detail .pc-editorial-pair{gap:14px;margin-bottom:16px;}
 .pc-detail .pc-editorial-pair-item{padding:19px!important;}
 .pc-detail #pc-sec-problem .pc-editorial-problem{padding:20px!important;min-height:unset;}
 .pc-detail .pc-editorial-goal{padding:15px!important;min-height:108px;}
}
`}</style>

      {selected ? (
        <ProjectDetail
          key={selected.id}
          project={selected}
          onBack={closeProject}
          onOpen={(p) => {
            openNextProject(p);
          }}
        />
      ) : (
        <>
          <header className="pc-hero">
            <h1 className="pc-hero-title">
              <span>Selected</span>
              <span className="pc-script">Projects</span>
            </h1>
            <div className="pc-hero-foot">
              <p>
                Explore the projects that interest you. Choose a category, preview
                the work, and open any case study whenever you are ready.
              </p>
              <div className="pc-scrollhint">Choose a project to explore <span aria-hidden="true">✦</span></div>
            </div>
            <nav className="pc-filter-row" aria-label="Filter projects">
              {FILTERS.map((f) => (
                <button
                  key={f.key}
                  type="button"
                  className={filter === f.key ? "is-active" : ""}
                  onClick={() => {
                    setFilter(f.key);
                    setPreviewId(projects.find((project) => f.key === "All" || project.category === f.key).id);
                  }}
                  aria-pressed={filter === f.key}
                >
                  <span>{f.short}</span>
                  <small>{counts[f.key]}</small>
                </button>
              ))}
            </nav>
          </header>

          <div className="pc-project-carousel" style={{ "--active-accent": previewProject.accent }}>
            <button
              type="button"
              className="pc-carousel-arrow pc-carousel-prev"
              onClick={() => setPreviewId(visible[(previewIndex - 1 + visible.length) % visible.length].id)}
              aria-label="Previous project"
            >
              <span aria-hidden="true">←</span>
            </button>
            <div className="pc-carousel-stage" aria-label="Featured projects">
              {carouselItems.map(({ project, offset }) => (
                <button
                  type="button"
                  key={project.id}
                  className={`pc-carousel-card ${offset === 0 ? "is-current" : ""}`}
                  data-offset={offset}
                  style={{ "--project-accent": project.accent }}
                  onClick={() => offset === 0 ? openProject(project) : setPreviewId(project.id)}
                  aria-label={offset === 0 ? `Open ${project.title} case study` : `Preview ${project.title}`}
                  aria-current={offset === 0 ? "true" : undefined}
                >
                  <img
                    src={project.cover || project.gallery[0]}
                    alt=""
                    loading={offset === 0 ? "eager" : "lazy"}
                    decoding="async"
                  />
                  <span className="pc-carousel-shade" aria-hidden="true" />
                  <span className="pc-carousel-number">{project.number} <i>/ {String(projects.length).padStart(2, "0")}</i></span>
                  <span className="pc-carousel-copy">
                    <small>{project.category} <i>·</i> {project.role}</small>
                    <strong>{project.title}</strong>
                    <span>{project.label}</span>
                  </span>
                  {offset === 0 && <span className="pc-carousel-open">Open case study <Arrow /></span>}
                </button>
              ))}
            </div>
            <button
              type="button"
              className="pc-carousel-arrow pc-carousel-next"
              onClick={() => setPreviewId(visible[(previewIndex + 1) % visible.length].id)}
              aria-label="Next project"
            >
              <span aria-hidden="true">→</span>
            </button>
            <div className="pc-carousel-footer">
              <div className="pc-carousel-dots" role="group" aria-label="Choose a project">
                {visible.map((project) => (
                  <button
                    key={project.id}
                    type="button"
                    className={project.id === previewProject.id ? "is-active" : ""}
                    onClick={() => setPreviewId(project.id)}
                    aria-label={`Show ${project.title}`}
                    aria-pressed={project.id === previewProject.id}
                  />
                ))}
              </div>
              <span><b>{previewProject.number}</b> / {String(projects.length).padStart(2, "0")} <i>Scroll or use arrows to explore</i></span>
            </div>
          </div>
        </>
      )}
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  CASE STUDY PAGE                                                    */
/* ------------------------------------------------------------------ */
function getHexLuminance(hex) {
  if (!hex || typeof hex !== "string") return 1;
  const value = hex.replace("#", "").trim();
  const normalized = value.length === 3 ? value.split("").map((part) => part + part).join("") : value;
  if (!/^[0-9a-fA-F]{6}$/.test(normalized)) return 1;
  const channels = [0, 2, 4].map((index) => parseInt(normalized.slice(index, index + 2), 16) / 255);
  const linear = channels.map((channel) => channel <= 0.04045 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4);
  return 0.2126 * linear[0] + 0.7152 * linear[1] + 0.0722 * linear[2];
}

function getProjectPaletteTone(palette, mode, fallback) {
  if (!palette?.length) return fallback;
  return palette.reduce((chosen, colour) => {
    const current = getHexLuminance(colour.hex);
    const selected = getHexLuminance(chosen.hex);
    return mode === "dark" ? (current < selected ? colour : chosen) : (current > selected ? colour : chosen);
  }, palette[0]).hex;
}

function ProjectDetail({ project, onBack, onOpen }) {
  const [zoom, setZoom] = useState(null);
  const [active, setActive] = useState("overview");
  const [toast, setToast] = useState("");
  const [showAllScreens, setShowAllScreens] = useState(false);
  const [galleryMode, setGalleryMode] = useState(
    project.galleryModes
      ? Object.keys(project.galleryModes)[0]
      : project.category === "Website" ? "Website" : "App"
  );
  const barRef = useRef(null);
  const isHybrid = project.presentation === "hybrid" || Boolean(project.galleryModes);
  const isWeb = project.galleryModes
    ? (project.browserFrameModes || Object.keys(project.galleryModes)).includes(galleryMode)
    : project.category === "Website";
  const gal = project.galleryModes?.[galleryMode] || project.gallery;
  const i = projects.findIndex((p) => p.id === project.id);
  const next = projects[(i + 1) % projects.length];
  const previous = projects[(i - 1 + projects.length) % projects.length];
  const visibleGallery = gal; // Render every original screen in the gallery by default.

  // reading progress
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      const p = h > 0 ? Math.min(1, window.scrollY / h) : 0;
      if (barRef.current) barRef.current.style.transform = `scaleX(${p})`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [project.id]);

  // section spy
  useEffect(() => {
    const els = SECTIONS.map(([id]) => document.getElementById(`pc-sec-${id}`)).filter(Boolean);
    const updateActiveSection = () => {
      const marker = window.innerHeight * 0.32;
      let current = SECTIONS[0][0];
      els.forEach((el) => {
        if (el.getBoundingClientRect().top <= marker) {
          current = el.id.replace("pc-sec-", "");
        }
      });
      setActive((previousActive) => previousActive === current ? previousActive : current);
    };
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    updateActiveSection();
    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [project.id]);

  // lightbox keys
  useEffect(() => {
    if (zoom === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") setZoom(null);
      if (e.key === "ArrowRight") setZoom((z) => (z + 1) % gal.length);
      if (e.key === "ArrowLeft") setZoom((z) => (z - 1 + gal.length) % gal.length);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [zoom, gal.length]);

  function go(id) {
    const el = document.getElementById(`pc-sec-${id}`);
    if (el) {
      const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
      el.scrollIntoView({ behavior, block: "start" });
    }
  }

  async function copy(hex) {
    try {
      await navigator.clipboard.writeText(hex);
      setToast(`${hex} copied`);
    } catch {
      setToast(hex);
    }
    setTimeout(() => setToast(""), 1600);
  }

  const projectPalette = project.palette || [];
  const projectPrimary = projectPalette[0]?.hex || project.accent || "#304ffe";
  const projectSecondary = projectPalette[1]?.hex || projectPrimary;
  const projectTertiary = projectPalette[2]?.hex || projectSecondary;
  // Pick the actual darkest/lightest swatches from this project's own palette.
  const projectDark = getProjectPaletteTone(projectPalette, "dark", "#252530");
  const projectSoft = getProjectPaletteTone(projectPalette, "light", "#f6f6f8");
  const detailTheme = {
    "--accent": projectPrimary,
    "--blue": projectPrimary,
    "--pink": projectSecondary,
    "--ink": projectDark,
    "--project-primary": projectPrimary,
    "--project-secondary": projectSecondary,
    "--project-tertiary": projectTertiary,
    "--project-dark": projectDark,
    "--project-soft": projectSoft,
    "--paper": "#ffffff",
  };

  return (
    <div className={`pc-detail pc-project-${project.id}`} style={detailTheme}>
      <div className="pc-top">
        <div className="pc-top-row">
          <button type="button" className="pc-back" onClick={onBack}>
            ← All projects
          </button>
          <div className="pc-project-switch">
            <button type="button" onClick={() => onOpen(previous)} aria-label={`View previous project: ${previous.title}`}>
              ← <span>Previous</span>
            </button>
            <label>
              <span className="pc-switch-label">Project</span>
              <select value={project.id} onChange={(event) => {
                const selectedProject = projects.find((item) => item.id === event.target.value);
                if (selectedProject) onOpen(selectedProject);
              }}>
                {projects.map((item) => <option key={item.id} value={item.id}>{item.number} · {item.title}</option>)}
              </select>
            </label>
            <button type="button" onClick={() => onOpen(next)} aria-label={`View next project: ${next.title}`}>
              <span>Next</span> →
            </button>
          </div>
          <span className="pc-top-count">
            {project.number} / {String(projects.length).padStart(2, "0")}
          </span>
        </div>
        <div className="pc-read">
          <b ref={barRef} />
        </div>
      </div>

      {/* 01 — project cover */}
      <Motion.header
        className="pc-d-hero pc-cover-hero"
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="pc-d-inner">
          <div className="pc-d-hero-grid">
            <Motion.div
              className="pc-d-intro"
              initial={{ opacity: 0, x: -18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.08 }}
            >
              <div className="pc-d-badges">
                <span>{project.number}</span>
                <span>{project.projectType || project.category}</span>
              </div>
              <p className="pc-d-eyebrow"><Sparkles size={14} aria-hidden="true" /> {project.label}</p>
              <h1 className={`pc-d-title ${project.title.length > 10 ? "is-long" : ""}`}>{project.title}</h1>
              <p className="pc-d-lead">{project.description}</p>
              <div className="pc-d-actions">
                <button type="button" className="pc-d-explore" onClick={() => go("overview")}>
                  Explore the case study <span aria-hidden="true">↓</span>
                </button>
              </div>
            </Motion.div>

            <Motion.figure
              className={`pc-showcase ${isWeb ? "is-web" : "is-app"} ${isHybrid ? "is-hybrid" : ""}`}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.55, ease: "easeOut", delay: 0.12 }}
            >
              <div className="pc-showcase-glow" aria-hidden="true" />
              <div className="pc-showcase-cover-card">
                <img src={project.cover || gal[0]} alt="" loading="eager" decoding="async" />
                <span><b>{project.number}</b> {project.label}</span>
              </div>
              {isHybrid ? (
                <div className="pc-showcase-hybrid">
                  <img src={project.cover} alt={`${project.title} web and mobile interface overview`} />
                </div>
              ) : isWeb ? (
                <div className="pc-showcase-browser">
                  <div className="pc-showcase-toolbar" aria-hidden="true">
                    <span /><span /><span /><i>{project.title}</i>
                  </div>
                  <img className="pc-cover-image" src={gal[0] || project.cover} alt={`${project.title} website screen`} fetchPriority="high" decoding="async" />
                  <div className="pc-showcase-base" aria-hidden="true"><i /></div>
                </div>
              ) : (
                <div className="pc-showcase-phones" aria-label={`${project.title} app screen preview`}>
                  {gal.slice(0, 3).map((src, index) => (
                    <div className={`pc-showcase-phone pc-showcase-phone-${index + 1}`} key={`${project.id}-hero-${index}`}>
                      <img src={src} alt={`${project.title} app screen ${index + 1}`} fetchPriority={index === 0 ? "high" : "auto"} decoding="async" />
                    </div>
                  ))}
                </div>
              )}
              <div className="pc-showcase-floats" aria-label={`${project.title} supporting interface highlights`}>
                <article className="pc-showcase-float pc-showcase-float-feature">
                  <span className="pc-showcase-float-kicker">FEATURE / 01</span>
                  <div className="pc-showcase-float-copy">
                    <strong>{project.features[0]?.t || "Designed around people"}</strong>
                    <p>{project.features[0]?.d || project.description}</p>
                  </div>
                  {gal[1] && <img src={gal[1]} alt={`${project.title} additional original screen preview`} loading="lazy" decoding="async" />}
                </article>
                <article className="pc-showcase-float pc-showcase-float-highlight">
                  <span className="pc-showcase-float-kicker">PROJECT HIGHLIGHT</span>
                  <strong>{project.insights[0]?.t || "A clearer experience"}</strong>
                  <p>{project.insights[0]?.d || project.solution}</p>
                  <i aria-hidden="true">✦</i>
                </article>
                <article className="pc-showcase-float pc-showcase-float-mini">
                  {gal[2] && <img src={gal[2]} alt={`${project.title} another original interface screen`} loading="lazy" decoding="async" />}
                  <span>INTERFACE PREVIEW <b>{project.number}</b></span>
                </article>
              </div>
              <figcaption className="pc-showcase-caption">{project.number} <i /> Selected work</figcaption>
            </Motion.figure>
          </div>

          <dl className="pc-meta-grid">
            <div><dt>My role</dt><dd>{project.role}</dd></div>
            <div><dt>Project type</dt><dd>{project.projectType || (isWeb ? "Website concept" : "Mobile app concept")}</dd></div>
            <div><dt>Tools & methods</dt><dd>{project.tools.join(" · ")}</dd></div>
          </dl>
        </div>
      </Motion.header>

      <div className="pc-story-layout">
        <aside className="pc-story-sidebar">
          <span className="pc-story-index-label">On this page</span>
          <nav className="pc-secnav" aria-label="Case study sections">
            {SECTIONS.map(([id, label]) => (
              <button
                key={id}
                type="button"
                className={active === id ? "is-active" : ""}
                onClick={() => {
                  setActive(id);
                  go(id);
                }}
              >
                <i aria-hidden="true" />
                {label}
              </button>
            ))}
          </nav>
          <span className="pc-story-project-count">
            {project.number} <i>/</i> {String(projects.length).padStart(2, "0")}
          </span>
        </aside>
        <div className="pc-story-content">
      <Motion.section id="pc-sec-overview" className="pc-editorial-section pc-case-block" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.45, ease: "easeOut" }}>
        <SectionHeading number="01" title="Project overview" kicker="The idea, its audience and how it was shaped" />
        <div className="pc-editorial-overview pc-editorial-overview-grid">
          <div className="pc-editorial-overview-copy">
            <div className="pc-editorial-lead">
              <span className="pc-editorial-eyebrow"><Sparkles size={14} /> {project.label}</span>
              <p>{project.overview}</p>
            </div>
            <div className="pc-editorial-meta">
              <div><span>My role</span><strong>{project.role}</strong></div>
              <div><span>Project type</span><strong>{project.projectType || project.category}</strong></div>
              <div className="pc-editorial-tools"><span>Tools &amp; methods</span><strong>{project.tools.join(" · ")}</strong></div>
            </div>
            <div className="pc-editorial-audience">
              <span className="pc-editorial-icon"><Users size={18} /></span>
              <div><span className="pc-card-label">Intended audience</span><p>{project.audience}</p></div>
            </div>
          </div>
          <figure className="pc-editorial-overview-visual">
            <span className="pc-overview-visual-kicker">SELECTED PROJECT VISUAL</span>
            <img src={project.cover || gal[0]} alt={`${project.title} original project preview`} loading="lazy" decoding="async" />
            <figcaption><b>{project.number}</b><span>{project.title}</span></figcaption>
            <span className="pc-overview-visual-shape" aria-hidden="true" />
          </figure>
        </div>
      </Motion.section>

      <div className="pc-editorial-pair">
        <Motion.section id="pc-sec-problem" className="pc-editorial-section pc-case-block pc-editorial-pair-item" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.45, ease: "easeOut" }}>
          <SectionHeading number="02" title="Problem statement" kicker="The need this project set out to address" />
          <div className="pc-editorial-problem">
            <span>THE CHALLENGE</span>
            <p>{project.problem}</p>
            <i aria-hidden="true">“</i>
          </div>
        </Motion.section>

        <Motion.section id="pc-sec-goals" className="pc-editorial-section pc-case-block pc-editorial-pair-item" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.45, ease: "easeOut" }}>
          <SectionHeading number="03" title="Project goals &amp; objectives" kicker="The priorities captured for this experience" />
          <div className="pc-editorial-goals">
            {project.goals.map((goal, index) => (
              <article className="pc-editorial-goal" key={goal}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{goal}</p>
              </article>
            ))}
          </div>
        </Motion.section>
      </div>

      <Motion.section id="pc-sec-journey" className="pc-editorial-section pc-case-block" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.45, ease: "easeOut" }}>
        <SectionHeading number="04" title="User journey" kicker="How the project notes describe planning the experience" />
        <div className="pc-editorial-journey">
          <span className="pc-card-label">Flow-planning note</span>
          <p>{project.process[1]}</p>
          <div className="pc-editorial-journey-goals">
            {project.goals.map((goal, index) => (
              <div key={goal}><span>{String(index + 1).padStart(2, "0")}</span><p>{goal}</p></div>
            ))}
          </div>
          <small>The source content describes flow planning and design priorities, not a measured or step-by-step user journey.</small>
        </div>
      </Motion.section>

      <Motion.section id="pc-sec-uiux" className="pc-editorial-section pc-case-block" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.45, ease: "easeOut" }}>
        <SectionHeading number="05" title="UI/UX design" kicker="The visual choices and principles behind the interface" />
        <div className="pc-editorial-design">
          <p className="pc-editorial-direction">{project.process[2]}</p>
          <h3 className="pc-sub">Colour palette <small>Click a colour to copy its value</small></h3>
          <div className="pc-palette-strip">
            {project.palette.map((colour) => (
              <button type="button" key={colour.hex} className="pc-color-token" onClick={() => copy(colour.hex)} aria-label={`Copy ${colour.name}, ${colour.hex}`}>
                <span style={{ background: colour.hex }} />
                <strong>{colour.name}</strong>
                <code>{colour.hex}</code>
              </button>
            ))}
          </div>
          <div className="pc-editorial-type">
            <article className="pc-type-specimen">
              <span>Aa</span><div><small>DISPLAY TYPEFACE</small><strong>{project.fonts.display}</strong></div>
            </article>
            <article className="pc-type-specimen">
              <span>Aa</span><div><small>BODY TYPEFACE</small><strong>{project.fonts.body}</strong></div>
            </article>
          </div>
          <h3 className="pc-sub">Design principles</h3>
          <div className="pc-principle-list">{project.principles.map((principle, index) => <span key={principle}><b>{String(index + 1).padStart(2, "0")}</b>{principle}</span>)}</div>
        </div>
      </Motion.section>

      <Motion.section id="pc-sec-screens" className="pc-editorial-section pc-editorial-screens pc-case-block" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.45, ease: "easeOut" }}>
        <SectionHeading number="06" title="Screens &amp; mockups" kicker="Explore the original project visuals and open any screen full size" />
        {project.galleryModes && (
          <div className="pc-gallery-switch" role="group" aria-label={`Choose ${project.title} gallery`}>
            {Object.keys(project.galleryModes).map((mode) => (
              <button type="button" key={mode} className={galleryMode === mode ? "is-active" : ""} onClick={() => {
                setGalleryMode(mode);
                setShowAllScreens(false);
                setZoom(null);
              }} aria-pressed={galleryMode === mode}>
                {mode}<span>{project.galleryModes[mode].length}</span>
              </button>
            ))}
          </div>
        )}
        <div className={`pc-gal ${isWeb ? "is-web" : "is-app"}`}>
          {visibleGallery.map((src, screenIndex) => (
            <Motion.button
              className="pc-gallery-screen"
              type="button"
              key={`${project.id}-${galleryMode}-${screenIndex}`}
              onClick={() => setZoom(screenIndex)}
              aria-label={`View ${project.title} screen ${screenIndex + 1} enlarged`}
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.38, delay: Math.min(screenIndex * 0.035, 0.21), ease: "easeOut" }}
            >
              {isWeb && <span className="pc-gallery-browser-bar" aria-hidden="true"><i /><i /><i /><em>{project.title} · Screen {screenIndex + 1}</em></span>}
              <img src={src} alt={`${project.title} design screen ${screenIndex + 1}`} loading="lazy" decoding="async" />
              <span className="pc-gallery-screen-hint">View screen <span aria-hidden="true">↗</span></span>
            </Motion.button>
          ))}
        </div>
        {gal.length > visibleGallery.length && (
          <button type="button" className="pc-gallery-more" onClick={() => setShowAllScreens(true)}>
            Explore all screens <span aria-hidden="true">↓</span>
          </button>
        )}
        {showAllScreens && gal.length > (isWeb ? 4 : 6) && (
          <button type="button" className="pc-gallery-more is-collapse" onClick={() => setShowAllScreens(false)}>
            Show fewer screens <span aria-hidden="true">↑</span>
          </button>
        )}
      </Motion.section>

      <Motion.section id="pc-sec-features" className="pc-editorial-section pc-case-block" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.45, ease: "easeOut" }}>
        <SectionHeading number="07" title="Key features" kicker="The capabilities described in the original project content" />
        <div className="pc-editorial-features">
          {project.features.map((feature, index) => (
            <article className="pc-editorial-feature" key={feature.t}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div><h3>{feature.t}</h3><p>{feature.d}</p></div>
            </article>
          ))}
        </div>
      </Motion.section>

      <Motion.section id="pc-sec-outcome" className="pc-editorial-section pc-editorial-outcome pc-case-block" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.45, ease: "easeOut" }}>
        <SectionHeading number="08" title="Final outcome" kicker="The project outcome and reflection, in the original words" />
        <div className="pc-editorial-outcome-card">
          <span className="pc-card-label">Project outcome</span>
          <p>{project.outcome}</p>
          <div><span className="pc-card-label">Key learning</span><p>{project.learnings}</p></div>
        </div>
      </Motion.section>

        </div>
      </div>

      <button
        type="button"
        className="pc-next"
        style={{ "--accent": next.accent }}
        onClick={() => onOpen(next)}
      >
        <span>Next project</span>
        <strong>{next.title}</strong>
        <Arrow />
      </button>

      {zoom !== null && (
        <div className="pc-zoom" onClick={() => setZoom(null)} role="dialog" aria-modal="true">
          <button type="button" className="pc-zx" onClick={() => setZoom(null)} aria-label="Close">
            ✕
          </button>
          {gal.length > 1 && (
            <>
              <button
                type="button"
                className="pc-zn pc-zprev"
                aria-label="Previous screen"
                onClick={(e) => {
                  e.stopPropagation();
                  setZoom((z) => (z - 1 + gal.length) % gal.length);
                }}
              >
                ←
              </button>
              <button
                type="button"
                className="pc-zn pc-znext"
                aria-label="Next screen"
                onClick={(e) => {
                  e.stopPropagation();
                  setZoom((z) => (z + 1) % gal.length);
                }}
              >
                →
              </button>
            </>
          )}
          <img src={gal[zoom]} alt={`Screen ${zoom + 1}`} onClick={(e) => e.stopPropagation()} />
        </div>
      )}

      {toast && <div className="pc-toast">{toast}</div>}
    </div>
  );
}

const STYLES = `
@import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,700;12..96,800&family=Inter:wght@400;500;600;700&family=Caveat:wght@600;700&family=Playfair+Display:wght@600;700&family=Plus+Jakarta+Sans:wght@600;700&family=DM+Sans:wght@400;500;600;700;800&family=Manrope:wght@600;700&family=Poppins:wght@500;600&display=swap');

.pc-root{
  --ink:#16161a; --paper:#ffffff; --muted:#66666e; --line:#e9e7e2;
  --padL:calc(5vw + 92px); --padR:5vw;
  background:var(--paper); color:var(--ink);
  font-family:Inter,ui-sans-serif,system-ui,sans-serif;
  position:relative;
}
.pc-root *{box-sizing:border-box}
.pc-root h1,.pc-root h2,.pc-root h3{font-family:'Bricolage Grotesque',Inter,sans-serif}
.pc-root button{font-family:inherit}

/* ---------- left-corner filter ---------- */
.pc-rail{
  position:fixed; left:20px; top:50%; transform:translateY(-50%); z-index:50;
  display:flex; flex-direction:column; gap:6px; padding:6px;
  background:rgba(255,255,255,.82); backdrop-filter:blur(12px);
  border:1px solid var(--line); border-radius:999px;
  box-shadow:0 10px 30px rgba(0,0,0,.08);
}
.pc-rail button{
  width:54px; height:54px; border-radius:50%; border:0; background:transparent;
  color:var(--ink); cursor:pointer; display:flex; flex-direction:column;
  align-items:center; justify-content:center; gap:2px; transition:background .2s,color .2s;
}
.pc-rail button:hover{background:rgba(0,0,0,.06)}
.pc-rail button.is-active{background:var(--ink); color:#fff}
.pc-rail button:focus-visible{outline:2px solid var(--blue,#304ffe); outline-offset:2px}
.pc-rail-label{font-size:12px; font-weight:700}
.pc-rail-count{font-size:10px; opacity:.6}

/* ---------- hero ---------- */
.pc-hero{padding:clamp(56px,9vw,120px) var(--padR) clamp(48px,7vw,90px) var(--padL)}
.pc-hero-kicker{margin:0 0 18px; font-size:13px; color:var(--muted); font-weight:500}
.pc-hero-title{
  margin:0; font-size:clamp(48px,10vw,164px); line-height:.9; font-weight:800;
  letter-spacing:-.05em;
}
.pc-hero-title .out{color:transparent; -webkit-text-stroke:2px var(--ink)}
.pc-hero-foot{
  display:flex; justify-content:space-between; align-items:flex-end; gap:24px;
  margin-top:clamp(28px,4vw,54px); flex-wrap:wrap;
}
.pc-hero-foot p{margin:0; max-width:420px; color:var(--muted); line-height:1.7; font-size:15px}
.pc-scrollhint{display:flex; align-items:center; gap:12px; font-size:13px; font-weight:600}
.pc-scrollhint i{
  width:22px; height:36px; border:2px solid var(--ink); border-radius:14px; position:relative; display:block;
}
.pc-scrollhint i:after{
  content:""; position:absolute; left:50%; top:6px; width:4px; height:7px; margin-left:-2px;
  background:var(--ink); border-radius:3px; animation:pcWheel 1.6s ease-in-out infinite;
}
@keyframes pcWheel{0%{transform:translateY(0);opacity:1}70%{transform:translateY(11px);opacity:0}100%{opacity:0}}

/* ---------- scene ---------- */
.pc-scene{position:relative; background:var(--paper); background:color-mix(in srgb,var(--accent) 18%,var(--paper))}
.pc-stage{
  position:sticky; top:0; height:100vh; overflow:hidden;
  display:grid; grid-template-columns:minmax(280px,.8fr) minmax(0,1.2fr);
  gap:clamp(24px,4vw,70px); align-items:center;
  padding:0 var(--padR) 0 var(--padL);
}
.pc-info{position:relative; z-index:2; min-width:0}
.pc-num{
  font-family:'Bricolage Grotesque',Inter,sans-serif; font-weight:800;
  font-size:clamp(70px,9vw,150px); line-height:.8; letter-spacing:-.06em;
  color:color-mix(in srgb,var(--accent) 55%,#16161a); margin-bottom:22px;
}
.pc-label{margin:0 0 10px; font-size:12px; font-weight:600; color:var(--muted); letter-spacing:.04em}
.pc-title{margin:0; font-size:clamp(32px,4.2vw,62px); line-height:1; letter-spacing:-.045em; font-weight:700}
.pc-desc{margin:16px 0 18px; max-width:400px; color:#4d4d55; line-height:1.7; font-size:14.5px}
.pc-tags{display:flex; flex-wrap:wrap; gap:7px; margin-bottom:24px}
.pc-tags span{
  padding:6px 12px; border-radius:999px; font-size:11.5px; font-weight:500;
  background:rgba(255,255,255,.65); border:1px solid rgba(0,0,0,.08);
}
.pc-cta{
  display:inline-flex; align-items:center; gap:10px; padding:13px 20px; border:0;
  border-radius:999px; background:var(--ink); color:#fff; font-size:13px; font-weight:600;
  cursor:pointer; transition:transform .2s,gap .2s;
}
.pc-cta:hover{transform:translateY(-2px); gap:14px}
.pc-cta:focus-visible{outline:2px solid #304ffe; outline-offset:3px}
.pc-progress{display:flex; align-items:center; gap:14px; margin-top:34px; max-width:340px}
.pc-progress-bar{flex:1; height:3px; background:rgba(0,0,0,.12); border-radius:3px; overflow:hidden}
.pc-progress-bar b{display:block; height:100%; width:100%; background:var(--ink); transform:scaleX(0); transform-origin:left}
.pc-progress span{font-size:12px; font-weight:600; font-variant-numeric:tabular-nums}

.pc-device-wrap{
  position:relative; display:flex; align-items:center; justify-content:center;
  height:100%; min-width:0; cursor:pointer;
}
.pc-glow{
  position:absolute; width:min(560px,90%); aspect-ratio:1; border-radius:50%;
  background:var(--accent); opacity:.45; filter:blur(70px);
}

/* ---------- laptop ---------- */
.pc-laptop{position:relative; width:min(100%,680px); z-index:1; filter:drop-shadow(0 30px 40px rgba(0,0,0,.22))}
.pc-lid{
  position:relative; background:#f5f5f3; padding:14px 13px 16px;
  border-radius:18px 18px 4px 4px; border:1px solid #dad7d2;
}
.pc-cam{position:absolute; top:5px; left:50%; width:5px; height:5px; margin-left:-2.5px; border-radius:50%; background:#2a2a30}
.pc-screen{position:relative; aspect-ratio:16/10; overflow:hidden; background:#fff; border-radius:3px}
.pc-track{will-change:transform}
.pc-track img{display:block; width:100%; height:auto; user-select:none}
.pc-base{
  position:relative; height:15px; width:108%; margin-left:-4%;
  background:linear-gradient(#f0efec,#d5d3ce); border-radius:0 0 22px 22px;
}
.pc-base i{
  position:absolute; top:0; left:50%; width:18%; height:6px; margin-left:-9%;
  background:#8f8f96; border-radius:0 0 8px 8px;
}

/* ---------- phone ---------- */
.pc-phone{
  position:relative; z-index:1; height:min(76vh,620px); aspect-ratio:9/18.6;
  padding:10px; border-radius:50px;
  background:linear-gradient(145deg,#f2f2f0,#dfe1e5 55%,#eef0f3);
  box-shadow:0 0 0 1.5px #ddd7d2 inset,0 30px 55px rgba(61,64,75,.12);
}
.pc-phone-screen{position:relative; height:100%; border-radius:40px; overflow:hidden; background:#fff}
.pc-phone-screen img{
  position:absolute; inset:0; width:100%; height:100%;
  object-fit:var(--pc-fit,cover); object-position:top center; user-select:none;
  transition:opacity .45s ease,transform .6s cubic-bezier(.2,.8,.2,1);
}
.pc-phone-screen img.is-on{opacity:1; transform:translateY(0) scale(1)}
.pc-phone-screen img.is-prev{opacity:0; transform:translateY(-8%) scale(.97)}
.pc-phone-screen img.is-next{opacity:0; transform:translateY(8%) scale(.97)}
.pc-island{
  position:absolute; z-index:3; top:10px; left:50%; width:30%; height:22px;
  margin-left:-15%; background:#f4f4f2; border-radius:20px;
}
.pc-pb{position:absolute; width:3px; background:#3b3b40; border-radius:2px}
.pc-pb1{left:-3px; top:16%; height:24px}
.pc-pb2{left:-3px; top:23%; height:44px}
.pc-pb3{left:-3px; top:31%; height:44px}
.pc-pb4{right:-3px; top:26%; height:70px}

/* ---------- extras on the list page ---------- */
.pc-dots{
  position:fixed; right:22px; top:50%; transform:translateY(-50%); z-index:50;
  display:flex; flex-direction:column; gap:14px; align-items:flex-end;
}
.pc-dots button{
  position:relative; width:12px; height:12px; padding:0; border-radius:50%;
  border:2px solid var(--ink); background:transparent; cursor:pointer; transition:transform .2s,background .2s;
}
.pc-dots button.is-active{background:var(--ink); transform:scale(1.25)}
.pc-dots button span{
  position:absolute; right:22px; top:50%; transform:translateY(-50%); white-space:nowrap;
  font-size:12px; font-weight:600; background:var(--ink); color:#fff; padding:5px 10px;
  border-radius:999px; opacity:0; pointer-events:none; transition:opacity .2s;
}
.pc-dots button:hover span,.pc-dots button:focus-visible span{opacity:1}
.pc-swatches{display:flex; gap:6px; margin:0 0 16px}
.pc-swatches i{width:22px; height:22px; border-radius:50%; border:2px solid rgba(255,255,255,.9); box-shadow:0 0 0 1px rgba(0,0,0,.1)}
.pc-open-hint{
  position:absolute; z-index:3; bottom:6%; left:50%; transform:translateX(-50%); padding:7px 14px;
  background:var(--ink); color:#fff; border-radius:999px; font-size:12px; font-weight:600;
  opacity:0; transition:opacity .2s; pointer-events:none;
}
.pc-device-wrap:hover .pc-open-hint{opacity:1}

/* ---------- case study page ---------- */
.pc-detail{background:var(--paper)}
.pc-top{position:sticky; top:0; z-index:60; background:rgba(246,244,239,.9); backdrop-filter:blur(14px); border-bottom:1px solid var(--line)}
.pc-top-row{display:flex; align-items:center; justify-content:space-between; gap:14px; padding:12px 5vw}
.pc-back{
  border:1px solid var(--line); background:#fff; padding:9px 16px; border-radius:999px;
  font-size:12.5px; font-weight:600; cursor:pointer; white-space:nowrap;
}
.pc-back:hover{background:var(--ink); color:#fff}
.pc-secnav{display:flex; gap:4px; overflow-x:auto; scrollbar-width:none}
.pc-secnav::-webkit-scrollbar{display:none}
.pc-secnav button{
  border:0; background:transparent; padding:8px 13px; border-radius:999px; font-size:12.5px;
  font-weight:600; color:var(--muted); cursor:pointer; white-space:nowrap; transition:background .2s,color .2s;
}
.pc-secnav button:hover{color:var(--ink)}
.pc-secnav button.is-active{background:var(--ink); color:#fff}
.pc-top-count{font-size:12px; color:var(--muted); font-variant-numeric:tabular-nums}
.pc-read{height:3px; background:transparent}
.pc-read b{display:block; height:100%; background:var(--accent); transform:scaleX(0); transform-origin:left; filter:saturate(1.6) brightness(.85)}

.pc-d-hero{
  background:var(--paper); background:color-mix(in srgb,var(--accent) 26%,var(--paper));
  padding:clamp(48px,8vw,110px) 5vw 0; overflow:hidden;
}
.pc-d-inner{max-width:1180px; margin:0 auto}
.pc-d-title{margin:0; font-size:clamp(50px,11vw,170px); line-height:.9; letter-spacing:-.055em; font-weight:800}
.pc-d-lead{max-width:560px; margin:24px 0 0; font-size:17px; line-height:1.7; color:#3f3f46}
.pc-meta-grid{
  display:grid; grid-template-columns:repeat(auto-fit,minmax(150px,1fr)); gap:24px;
  margin:44px 0 0; padding-top:20px; border-top:1px solid rgba(0,0,0,.16);
}
.pc-meta-grid dt{font-size:12px; color:var(--muted); margin-bottom:6px}
.pc-meta-grid dd{margin:0; font-size:14px; font-weight:600}
.pc-d-cover{margin-top:clamp(40px,6vw,80px)}
.pc-d-cover img{
  display:block; width:100%; max-width:1000px; margin:0 auto; height:auto;
  border-radius:22px 22px 0 0; box-shadow:0 -20px 60px rgba(0,0,0,.14); background:#fff;
}

.pc-block{
  scroll-margin-top:84px; padding:clamp(56px,8vw,110px) 5vw;
  display:grid; grid-template-columns:minmax(180px,.35fr) minmax(0,1fr); gap:clamp(24px,5vw,80px);
  max-width:1280px; margin:0 auto;
}
.pc-tint{position:relative; max-width:none; background:#efede6}
.pc-tint .pc-block-head,.pc-tint .pc-block-body{max-width:none}
.pc-tint{padding-left:max(5vw,calc((100vw - 1280px)/2 + 5vw)); padding-right:max(5vw,calc((100vw - 1280px)/2 + 5vw))}
.pc-block-head{position:sticky; top:96px; align-self:start}
.pc-block-head h2{margin:0; font-size:clamp(28px,3.4vw,46px); letter-spacing:-.045em; line-height:1}
.pc-kicker{margin:10px 0 0; font-size:13px; color:var(--muted)}
.pc-block-body{min-width:0}
.pc-big{margin:0 0 32px; font-size:clamp(20px,2.2vw,28px); line-height:1.5; letter-spacing:-.02em; font-weight:500; max-width:760px}
.pc-card{background:#fff; border:1px solid var(--line); border-radius:18px; padding:22px}
.pc-card h3{margin:0 0 8px; font-size:17px; letter-spacing:-.02em}
.pc-card p{margin:0; color:#52525a; line-height:1.7; font-size:14.5px}
.pc-card ul{margin:0; padding-left:18px; color:#52525a; line-height:1.8; font-size:14.5px}
.pc-two{display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:16px}
.pc-three{display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:16px}
.pc-four{display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:16px}
.pc-feature .pc-dot{display:block; width:34px; height:34px; border-radius:10px; margin-bottom:14px; box-shadow:0 0 0 1px rgba(0,0,0,.08) inset}
.pc-learn{background:color-mix(in srgb,var(--accent) 28%,#fff); border-color:transparent}

.pc-steps{list-style:none; margin:0; padding:0; display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:16px}
.pc-steps li{background:#fff; border:1px solid var(--line); border-radius:18px; padding:22px}
.pc-step-n{
  display:inline-grid; place-items:center; width:30px; height:30px; border-radius:50%;
  background:var(--ink); color:#fff; font-size:13px; font-weight:700; margin-bottom:14px;
}
.pc-steps h3{margin:0 0 8px; font-size:18px; letter-spacing:-.02em}
.pc-steps p{margin:0; color:#52525a; line-height:1.7; font-size:14.5px}

.pc-sub{margin:36px 0 14px; font-size:18px; letter-spacing:-.02em}
.pc-sub:first-child{margin-top:0}
.pc-sub small{font-family:Inter,sans-serif; font-weight:400; font-size:12px; color:var(--muted); letter-spacing:0}
.pc-palette{display:grid; grid-template-columns:repeat(auto-fit,minmax(150px,1fr)); gap:14px}
.pc-chip{
  text-align:left; background:#fff; border:1px solid var(--line); border-radius:18px; padding:10px 10px 16px;
  cursor:pointer; display:flex; flex-direction:column; gap:4px; transition:transform .2s,box-shadow .2s;
}
.pc-chip:hover{transform:translateY(-3px); box-shadow:0 12px 24px rgba(0,0,0,.08)}
.pc-chip:focus-visible{outline:2px solid #304ffe; outline-offset:2px}
.pc-chip-color{display:block; height:92px; border-radius:11px; margin-bottom:10px; box-shadow:0 0 0 1px rgba(0,0,0,.08) inset}
.pc-chip strong{font-size:14px; padding:0 6px}
.pc-chip code{font-size:12px; color:var(--muted); padding:0 6px}
.pc-chip em{font-style:normal; font-size:12px; color:#52525a; line-height:1.5; padding:0 6px}
.pc-type{display:flex; flex-direction:column}
.pc-aa{font-size:76px; line-height:1; margin-bottom:14px; letter-spacing:-.03em}
.pc-principle{font-family:'Bricolage Grotesque',Inter,sans-serif; font-size:19px; font-weight:700; letter-spacing:-.03em; line-height:1.25}

.pc-gal-wrap{scroll-margin-top:70px; background:#e9e7e1; padding:clamp(40px,6vw,80px) 5vw}
.pc-gal-head{max-width:1160px; margin:0 auto 28px}
.pc-gal-head h2{margin:0; font-size:clamp(28px,3.4vw,46px); letter-spacing:-.045em}
.pc-gal-head p{margin:8px 0 0; font-size:13px; color:var(--muted)}
.pc-gal{margin:0 auto}
.pc-gal img{display:block; width:100%; height:auto; background:#fff; cursor:zoom-in; transition:transform .25s}
.pc-gal img:hover{transform:scale(1.01)}
.pc-gal.is-web{max-width:1160px; display:flex; flex-direction:column; gap:14px}
.pc-gal.is-web img{border-radius:10px}
.pc-gal.is-app{max-width:1160px; column-count:3; column-gap:16px}
.pc-gal.is-app img{break-inside:avoid; margin-bottom:16px; border-radius:18px}

.pc-next{
  display:flex; align-items:center; justify-content:space-between; gap:16px; width:100%;
  border:0; cursor:pointer; text-align:left; padding:clamp(40px,7vw,90px) 5vw;
  background:var(--paper); background:color-mix(in srgb,var(--accent) 30%,var(--paper));
  color:var(--ink); transition:filter .3s;
}
.pc-next:hover{filter:saturate(1.3)}
.pc-next span{font-size:13px; color:var(--muted)}
.pc-next strong{font-family:'Bricolage Grotesque',Inter,sans-serif; font-size:clamp(34px,7vw,100px); letter-spacing:-.05em; line-height:.95; flex:1; margin-left:24px}
.pc-next svg{width:44px; height:44px; flex:none}

.pc-zoom{
  position:fixed; inset:0; z-index:100; background:rgba(10,10,12,.92); overflow:auto;
  display:flex; justify-content:center; padding:64px 24px 40px; cursor:zoom-out;
}
.pc-zoom img{display:block; max-width:min(1200px,100%); height:auto; align-self:flex-start; border-radius:10px; cursor:default}
.pc-zx,.pc-zn{
  position:fixed; z-index:101; width:46px; height:46px; border-radius:50%; border:0; cursor:pointer;
  background:rgba(255,255,255,.14); color:#fff; font-size:18px; backdrop-filter:blur(8px);
}
.pc-zx:hover,.pc-zn:hover{background:rgba(255,255,255,.28)}
.pc-zx{top:16px; right:16px}
.pc-zn{top:50%; transform:translateY(-50%)}
.pc-zprev{left:16px}
.pc-znext{right:16px}
.pc-zcount{position:fixed; left:50%; bottom:16px; transform:translateX(-50%); z-index:101; color:#fff; font-size:12px; background:rgba(255,255,255,.14); padding:6px 12px; border-radius:999px}
.pc-toast{
  position:fixed; left:50%; bottom:28px; transform:translateX(-50%); z-index:120;
  background:var(--ink); color:#fff; padding:11px 18px; border-radius:999px; font-size:13px; font-weight:600;
}

/* ---------- v3 overrides: brand colours, crisp images, better UX ---------- */
.pc-root{--blue:#304ffe; --pink:#f29bbd; --paper:#faf9f6; text-align:left; width:100%; max-width:none; margin:0; padding:0; display:block}
.pc-root ::selection{background:var(--pink); color:var(--ink)}

.pc-project-info{display:flex; flex-direction:column; gap:12px}
.pc-project-meta{display:flex; align-items:center; justify-content:space-between; gap:10px; padding-top:8px; border-top:1px solid rgba(22,22,26,.08)}
.pc-project-meta span{font-size:12.5px; color:var(--muted); letter-spacing:.02em}
.pc-project-pill{display:inline-flex; align-items:center; padding:7px 10px; border-radius:999px; background:color-mix(in srgb, var(--accent) 18%, #fff); color:var(--ink); border:1px solid rgba(22,22,26,.06); font-weight:600}
.pc-project-cover{overflow:hidden}
.pc-project-cover img{transition:transform .45s ease, filter .45s ease}
.pc-project-cover:hover img{transform:scale(1.04); filter:saturate(1.08)}
.pc-project-cover::after{content:""; position:absolute; inset:0; background:linear-gradient(180deg, rgba(11,12,20,.06), rgba(11,12,20,.3)); opacity:0; transition:opacity .25s ease}
.pc-project-cover:hover::after{opacity:1}

.pc-d-hero-grid{display:grid; grid-template-columns:minmax(0, 1fr) minmax(320px, 520px); gap:clamp(26px, 4vw, 60px); align-items:center}
.pc-d-intro{position:relative; z-index:1}
.pc-d-badges{display:flex; gap:8px; flex-wrap:wrap; margin-bottom:18px}
.pc-d-badges span{display:inline-flex; align-items:center; justify-content:center; min-height:28px; padding:6px 10px; border-radius:999px; background:rgba(255,255,255,.7); border:1px solid rgba(22,22,26,.08); font-size:11px; letter-spacing:.08em; text-transform:uppercase; font-weight:700; color:var(--ink)}
.pc-d-action-row{display:flex; gap:12px; flex-wrap:wrap}
.pc-d-actions{display:flex; gap:12px; flex-wrap:wrap; margin-top:26px}
.pc-d-explore, .pc-d-back{display:inline-flex; align-items:center; justify-content:center; min-height:46px; border-radius:999px; font-size:13px; font-weight:700; transition:transform .2s ease, box-shadow .2s ease, background .2s ease}
.pc-d-explore{padding:0 18px; background:var(--ink); color:#fff; border:1px solid var(--ink); box-shadow:0 20px 32px rgba(22,22,26,.12)}
.pc-d-explore:hover{transform:translateY(-2px); box-shadow:0 22px 36px rgba(22,22,26,.18)}
.pc-d-back{padding:0 18px; background:rgba(255,255,255,.7); color:var(--ink); border:1px solid rgba(22,22,26,.12)}
.pc-d-back:hover{transform:translateY(-2px); background:#fff}
.pc-showcase{position:relative; margin:0; border-radius:28px; padding:12px; background:linear-gradient(145deg, rgba(255,255,255,.9), rgba(255,255,255,.75)); border:1px solid rgba(22,22,26,.08); box-shadow:0 30px 60px rgba(22,22,26,.12)}
.pc-showcase::before{content:""; position:absolute; inset:14px 12px -12px -12px; border-radius:32px; background:radial-gradient(circle at top left, color-mix(in srgb, var(--accent) 42%, white), transparent 55%); opacity:.9; filter:blur(20px); z-index:0}
.pc-showcase.is-app{padding:18px 16px 16px}
.pc-showcase.is-web{padding:14px 14px 20px}
.pc-showcase-glow{position:absolute; inset:auto 28% 8% 28%; height:12%; border-radius:999px; background:color-mix(in srgb, var(--accent) 68%, #fff); filter:blur(22px); opacity:.8; z-index:0}
.pc-cover-image{position:relative; z-index:1; display:block; width:100%; border-radius:20px; background:#fff; object-fit:cover; box-shadow:0 18px 42px rgba(22,22,26,.15); border:1px solid rgba(22,22,26,.05)}
.pc-showcase-caption{display:flex; align-items:center; gap:10px; margin-top:14px; font-size:12px; letter-spacing:.12em; text-transform:uppercase; color:var(--muted); position:relative; z-index:1}
.pc-showcase-caption i{display:inline-block; width:28px; height:1px; background:rgba(22,22,26,.35)}

.pc-hero{padding:clamp(56px,8vw,110px) var(--padR) clamp(32px,5vw,60px) var(--padL)}
.pc-hero-title{
  display:flex; align-items:baseline; flex-wrap:wrap; gap:.05em .28em; margin:0;
  font-size:clamp(46px,8.5vw,120px); line-height:1.05; letter-spacing:-.045em; font-weight:800;
}
.pc-script{
  font-family:'Caveat','Kalam',cursive; font-weight:700; font-size:1.08em; letter-spacing:0;
  color:var(--pink); display:inline-block; transform:rotate(-4deg) translateY(.04em);
}
.pc-hero-foot{margin-top:clamp(18px,3vw,32px)}

.pc-scene{background:var(--paper); background:color-mix(in srgb,var(--accent) 9%,var(--paper))}
.pc-count{font-family:'Bricolage Grotesque',Inter,sans-serif; font-weight:800; font-size:15px; margin-bottom:14px; color:var(--ink)}
.pc-count span{color:var(--muted); font-weight:600}
.pc-title{font-size:clamp(34px,4.4vw,66px)}
.pc-actions{display:flex; align-items:center; gap:14px; flex-wrap:wrap}
.pc-cta{background:var(--blue)}
.pc-cta:hover{box-shadow:0 10px 24px rgba(48,79,254,.35)}
.pc-skip{border:0; background:none; padding:8px 2px; font-size:13px; font-weight:600; color:var(--ink); cursor:pointer; border-bottom:2px solid var(--pink)}
.pc-skip:hover{color:var(--blue)}
.pc-progress-bar b{background:var(--blue)}
.pc-rail button.is-active{background:var(--blue)}
.pc-dots button{border-color:var(--blue)}
.pc-dots button.is-active{background:var(--blue)}
.pc-dots button span{background:var(--blue)}

/* crisp, big devices */
.pc-glow{opacity:.35}
.pc-open-hint{top:2%; bottom:auto; background:var(--blue)}
.pc-laptop{width:min(100%,800px,calc((100vh - 190px)*1.58)); filter:none}
.pc-lid{box-shadow:0 34px 60px rgba(0,0,0,.22)}
.pc-screen{overflow:hidden}
.pc-screen img{display:block; width:100%; height:auto; user-select:none}
.pc-phone{height:min(78vh,700px); filter:none}
.pc-device-wrap.has-ctrl{padding-bottom:56px}
.pc-ctrl{bottom:0}
.pc-phone-screen img{object-fit:cover; object-position:top center}
.pc-board{
  --bh:74vh; position:relative; z-index:1; aspect-ratio:var(--r);
  width:min(100%,calc(var(--bh)*var(--r))); border-radius:22px; overflow:hidden; background:#fff;
  box-shadow:0 34px 60px rgba(0,0,0,.2);
}
.pc-board img{
  position:absolute; inset:0; width:100%; height:100%; object-fit:contain; background:#fff;
  transition:opacity .45s ease,transform .6s cubic-bezier(.2,.8,.2,1);
}
.pc-board img.is-on{opacity:1; transform:none}
.pc-board img.is-prev{opacity:0; transform:translateY(-6%)}
.pc-board img.is-next{opacity:0; transform:translateY(6%)}
.pc-ctrl{
  position:absolute; z-index:4; bottom:16px; left:50%; transform:translateX(-50%);
  display:flex; align-items:center; gap:10px; padding:5px; border-radius:999px;
  background:rgba(255,255,255,.92); box-shadow:0 8px 22px rgba(0,0,0,.14); cursor:default;
}
.pc-ctrl span{font-size:12px; font-weight:700; min-width:50px; text-align:center; font-variant-numeric:tabular-nums}
.pc-ctrl button{width:32px; height:32px; border-radius:50%; border:0; background:var(--ink); color:#fff; cursor:pointer; font-size:14px}
.pc-ctrl button:hover{background:var(--blue)}

/* case study page brand touches */
.pc-secnav button.is-active{background:var(--blue)}
.pc-read b{background:var(--blue); filter:none}
.pc-step-n{background:var(--blue)}
.pc-chip:hover{border-color:var(--pink)}
.pc-learn{border-left:5px solid var(--pink); border-radius:18px}

@media (min-width:851px){
  .pc-stage{grid-template-columns:minmax(280px,.62fr) minmax(0,1.38fr); gap:clamp(20px,3vw,48px)}
}

/* protect against global site CSS (e.g. white headings, hidden sections) */
:where(.pc-root) :is(h1,h2,h3,h4,p,span,dt,dd,li){color:inherit}
.pc-root{opacity:1; visibility:visible; color:var(--ink); min-height:100vh; isolation:isolate}
.pc-hero-title .pc-script{color:var(--pink)}

/* ---------- responsive ---------- */
@media (max-width:1100px){
  .pc-dots{display:none}
  .pc-three{grid-template-columns:1fr}
  .pc-gal.is-app{column-count:2}
}
@media (max-width:850px){
  .pc-root{--padL:5vw; --padR:5vw}
  .pc-rail{left:50%; top:auto; bottom:14px; transform:translateX(-50%); flex-direction:row}
  .pc-rail button{width:auto; height:42px; padding:0 16px; border-radius:999px; flex-direction:row; gap:7px}
  .pc-stage{grid-template-columns:1fr; grid-template-rows:auto auto; align-content:center; gap:16px; padding-bottom:70px}
  .pc-device-wrap{order:-1; height:auto; padding-top:14px}
  .pc-phone{height:min(44vh,390px); border-radius:40px; padding:8px}
  .pc-phone-screen{border-radius:32px}
  .pc-island{height:17px; top:8px}
  .pc-laptop{width:min(100%,460px)}
  .pc-num{font-size:48px; margin-bottom:6px}
  .pc-label{margin-bottom:6px}
  .pc-desc{font-size:13.5px; margin:8px 0 12px; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden}
  .pc-tags{display:none}
  .pc-swatches{margin-bottom:12px}
  .pc-progress{margin-top:16px}
  .pc-open-hint{display:none}
  .pc-board{--bh:42vh}
  .pc-laptop{width:min(100%,520px)}
  .pc-actions{gap:10px}
  .pc-hero-title .out{-webkit-text-stroke:1.5px var(--ink)}
  .pc-top-count{display:none}
  .pc-top-row{padding:10px 4vw}
  .pc-block{grid-template-columns:1fr; gap:22px}
  .pc-block-head{position:static}
  .pc-two,.pc-four,.pc-steps{grid-template-columns:1fr}
}
@media (max-width:520px){
  .pc-gal.is-app{column-count:1}
  .pc-next svg{width:30px; height:30px}
  .pc-zn{display:none}
}
@media (prefers-reduced-motion:reduce){
  .pc-phone-screen img,.pc-gal img,.pc-chip{transition:none}
  .pc-scrollhint i:after{animation:none}
}

/* ---------- polished case-study presentation ---------- */
.pc-detail{--paper:#fff; background:#fff}
.pc-top{background:rgba(255,255,255,.92)}
.pc-d-hero{
  position:relative; isolation:isolate; overflow:hidden;
  padding:clamp(44px,7vw,88px) 5vw 0;
  background:linear-gradient(135deg,#fff 0%,color-mix(in srgb,var(--accent) 12%,#fff) 100%);
}
.pc-d-hero::before{
  position:absolute; z-index:-1; content:""; width:44vw; aspect-ratio:1; right:-8vw; top:-18vw;
  border-radius:50%; background:var(--accent); opacity:.12; filter:blur(70px);
}
.pc-d-inner{max-width:1280px}
.pc-d-hero-grid{
  display:grid; grid-template-columns:minmax(0,.82fr) minmax(0,1.18fr);
  gap:clamp(28px,5vw,76px); align-items:center;
}
.pc-d-intro{padding:10px 0 36px}
.pc-d-eyebrow{
  display:flex; align-items:center; gap:10px; margin:0 0 20px;
  font-size:11px; font-weight:700; letter-spacing:.14em; color:#676773;
}
.pc-d-eyebrow span{
  display:grid; place-items:center; width:34px; height:34px; border-radius:50%;
  background:var(--blue); color:white; letter-spacing:0;
}
.pc-d-title{font-size:clamp(48px,7.4vw,104px); line-height:.94; letter-spacing:-.065em}
.pc-d-lead{max-width:490px; margin:22px 0 26px; font-size:clamp(15px,1.35vw,18px); line-height:1.75; color:#555560}
.pc-d-explore{
  display:inline-flex; align-items:center; gap:22px; border:0; border-radius:999px;
  padding:13px 18px; background:var(--blue); color:#fff; font-size:13px; font-weight:700;
  cursor:pointer; box-shadow:0 12px 26px rgba(48,79,254,.18); transition:transform .2s,box-shadow .2s;
}
.pc-d-explore:hover{transform:translateY(-2px); box-shadow:0 16px 30px rgba(48,79,254,.26)}
.pc-d-explore span{font-size:17px}
.pc-showcase{
  position:relative; min-width:0; min-height:clamp(300px,38vw,500px);
  display:flex; align-items:center; justify-content:center;
}
.pc-showcase-glow{
  position:absolute; width:76%; aspect-ratio:1; border-radius:50%; background:var(--accent);
  opacity:.22; filter:blur(65px);
}
.pc-showcase-browser{
  position:relative; z-index:1; width:100%; overflow:hidden; padding:0 12px 15px;
  border:1px solid rgba(31,35,50,.12); border-radius:17px;
  background:linear-gradient(140deg,#fbfbfc,#e8e9ed);
  box-shadow:0 28px 70px rgba(34,35,47,.17);
}
.pc-showcase-toolbar{
  height:38px; display:flex; align-items:center; gap:6px; color:#777986;
}
.pc-showcase-toolbar span,.pc-gallery-browser-bar i{
  width:7px; height:7px; border-radius:50%; background:#ef8c91;
}
.pc-showcase-toolbar span:nth-child(2),.pc-gallery-browser-bar i:nth-child(2){background:#f2c56f}
.pc-showcase-toolbar span:nth-child(3),.pc-gallery-browser-bar i:nth-child(3){background:#7acb9a}
.pc-showcase-toolbar i{
  flex:1; margin-left:8px; padding:5px 12px; border-radius:999px;
  background:#fff; font-size:9px; font-style:normal; text-align:center;
}
.pc-showcase-browser img{
  display:block; width:100%; height:clamp(250px,33vw,440px);
  object-fit:cover; object-position:top center; border-radius:5px; background:#fff;
}
.pc-showcase-base{
  position:absolute; height:13px; bottom:2px; left:7%; right:7%;
  border-radius:0 0 14px 14px; background:linear-gradient(#e9e9ed,#cfd0d7);
}
.pc-showcase-base i{position:absolute; left:40%; top:0; width:20%; height:5px; border-radius:0 0 7px 7px; background:#babcc4}
.pc-showcase-phones{
  position:relative; z-index:1; width:100%; height:100%; display:flex;
  align-items:center; justify-content:center; gap:clamp(10px,2vw,24px);
}
.pc-showcase-phone{
  position:relative; width:clamp(94px,13vw,164px); aspect-ratio:9/18.6; padding:6px;
  border:1px solid #d5d4dc; border-radius:25px; background:linear-gradient(145deg,#fff,#e9e9ef);
  box-shadow:0 22px 45px rgba(36,37,55,.2);
}
.pc-showcase-phone img{display:block; width:100%; height:100%; object-fit:contain; border-radius:19px; background:#fff}
.pc-showcase-phone-1{transform:translateY(16px) rotate(-7deg)}
.pc-showcase-phone-2{z-index:2; transform:translateY(-14px)}
.pc-showcase-phone-3{transform:translateY(16px) rotate(7deg)}
.pc-showcase-caption{
  position:absolute; z-index:2; bottom:-16px; right:0; display:flex; align-items:center; gap:9px;
  color:#646570; font-size:10px; font-weight:700; letter-spacing:.08em;
}
.pc-showcase-caption i{width:24px; height:1px; background:var(--pink)}
.pc-meta-grid{
  position:relative; z-index:2; grid-template-columns:repeat(4,minmax(0,1fr));
  gap:18px; margin:16px 0 0; padding:20px 0 24px; border-top:1px solid rgba(39,42,55,.12);
}
.pc-meta-grid div{min-width:0}
.pc-meta-grid dt{font-size:10px; font-weight:700; text-transform:uppercase; letter-spacing:.11em}
.pc-meta-grid dd{font-size:13px; line-height:1.55}
.pc-case-block{scroll-margin-top:82px}
.pc-case-block .pc-block-head h2{max-width:260px}
.pc-section-number{display:block; margin-bottom:13px; color:var(--blue); font-size:12px; font-weight:800; letter-spacing:.14em}
.pc-case-block.pc-tint{background:linear-gradient(110deg,#f8f7fb,#f9f4f6)}
.pc-card{
  border-color:#eeedf1; border-radius:20px; box-shadow:0 12px 34px rgba(28,30,54,.035);
  transition:transform .22s,box-shadow .22s;
}
.pc-card:hover{transform:translateY(-3px); box-shadow:0 18px 38px rgba(28,30,54,.075)}
.pc-card-label{display:block; margin:0 0 10px; color:var(--blue); font-size:10px; font-weight:800; letter-spacing:.12em; text-transform:uppercase}
.pc-audience-card{background:linear-gradient(135deg,#fff,color-mix(in srgb,var(--accent) 12%,#fff))}
.pc-challenge-card{border-top:3px solid var(--pink)}
.pc-objective-strip{
  display:flex; align-items:center; gap:18px; margin-top:18px; padding:18px 22px;
  border:1px solid color-mix(in srgb,var(--accent) 45%,#fff); border-radius:16px;
  background:rgba(255,255,255,.78);
}
.pc-objective-strip strong{flex:none; color:var(--blue); font-size:11px; letter-spacing:.1em; text-transform:uppercase}
.pc-objective-strip span{font-size:14px; font-weight:600; line-height:1.55}
.pc-planning-audience{margin-bottom:20px; padding:20px 22px; border-radius:18px; background:#f7f6fb}
.pc-planning-audience p{margin:0; font-size:16px; line-height:1.65}
.pc-steps{grid-template-columns:repeat(2,minmax(0,1fr))}
.pc-steps li{border-radius:20px; box-shadow:0 12px 34px rgba(28,30,54,.035)}
.pc-step-n{background:var(--blue)}
.pc-planning-goals{margin-top:24px}
.pc-planning-goals h3{margin:0 0 12px; font-size:17px}
.pc-planning-goals div{display:flex; align-items:baseline; gap:14px; padding:12px 0; border-top:1px solid rgba(22,22,26,.1)}
.pc-planning-goals div span{color:var(--pink); font-size:11px; font-weight:800}
.pc-planning-goals div p{margin:0; font-size:14px; line-height:1.6}
.pc-design-direction{margin:0 0 30px; padding:20px 24px; border-left:3px solid var(--pink); border-radius:0 14px 14px 0; background:#fff; font-size:15px; line-height:1.75}
.pc-sub{margin-top:32px}
.pc-chip{border-radius:16px; box-shadow:0 8px 24px rgba(28,30,54,.04)}
.pc-chip-color{height:clamp(74px,10vw,112px)}
.pc-type{min-height:180px; border-radius:18px}
.pc-final-section{background:#fff}
.pc-final-intro{padding-bottom:clamp(32px,5vw,64px)}
.pc-feature{position:relative; overflow:hidden; padding:24px}
.pc-feature-index{display:block; margin-bottom:28px; color:var(--pink); font-size:11px; font-weight:800; letter-spacing:.12em}
.pc-validation-intro{
  display:flex; align-items:flex-start; gap:18px; margin-bottom:20px; padding:24px;
  border:1px solid #e8e6f4; border-radius:20px; background:linear-gradient(135deg,#fff,#f7f5ff);
}
.pc-validation-mark{
  display:grid; place-items:center; flex:none; width:42px; height:42px; border-radius:14px;
  background:var(--blue); color:#fff; font-size:22px;
}
.pc-validation-intro h3{margin:0 0 6px; font-size:20px}
.pc-validation-intro p{margin:0; color:#62626c; font-size:13px; line-height:1.6}
.pc-validation-card{border-top:3px solid var(--blue)}
.pc-next-step{background:linear-gradient(140deg,#fff,color-mix(in srgb,var(--accent) 18%,#fff))}
.pc-gal-wrap{scroll-margin-top:76px; padding:clamp(48px,7vw,82px) 5vw; background:#f7f6fa}
.pc-gal-head{
  display:flex; align-items:flex-end; justify-content:space-between; gap:20px;
  max-width:1160px; margin:0 auto 28px;
}
.pc-gal-head h2{margin:0; font-size:clamp(28px,4vw,46px); letter-spacing:-.045em}
.pc-gal-head p{margin:8px 0 0; color:#66666e; font-size:13px}
.pc-gallery-hint{flex:none; color:#66666e; font-size:12px}
.pc-gallery-hint b{margin-left:8px; color:var(--blue); font-size:18px}
.pc-gal.is-web{display:flex; flex-direction:column; gap:24px}
.pc-gallery-screen{
  position:relative; display:block; width:100%; max-width:1160px; margin:0 auto; padding:12px;
  overflow:hidden; border:1px solid #e1e0e8; border-radius:16px; background:#fff;
  box-shadow:0 18px 45px rgba(27,29,53,.08); cursor:zoom-in; text-align:left;
}
.pc-gallery-browser-bar{
  position:absolute; top:0; left:0; right:0; height:32px; display:flex; align-items:center; gap:6px;
  padding:0 12px; background:#f6f6f8;
}
.pc-gallery-browser-bar em{
  flex:1; margin-left:8px; padding:4px 10px; border-radius:999px; background:#fff;
  color:#747480; font-size:9px; font-style:normal; text-align:center;
}
.pc-gallery-screen img{
  width:100%; max-height:min(74vh,820px); object-fit:contain; object-position:top center;
  border-radius:5px; background:#fff;
}
.pc-gal.is-app{
  display:flex; align-items:flex-start; gap:22px; max-width:1160px; padding:8px 4px 22px;
  overflow-x:auto; overscroll-behavior-x:contain; scroll-snap-type:x mandatory; scrollbar-color:#c8c4d2 transparent;
}
.pc-gal.is-app .pc-gallery-screen{
  flex:0 0 clamp(210px,25vw,280px); width:clamp(210px,25vw,280px); height:clamp(400px,58vw,620px);
  padding:8px; border-radius:20px; border:1px solid #e5e3eb; background:#fff; scroll-snap-align:start;
  box-shadow:0 18px 40px rgba(27,29,53,.12);
}
.pc-gal.is-app .pc-gallery-screen img{
  width:100%; height:100%; max-height:none; object-fit:contain; border-radius:12px; background:#fff;
}
.pc-gallery-phone-notch{
  position:absolute; z-index:2; top:8px; left:50%; width:26%; height:15px;
  transform:translateX(-50%); border-radius:999px; background:#25252d;
}
.pc-zoom{align-items:flex-start}
.pc-zoom img{width:auto; max-width:min(1200px,100%); image-rendering:auto}

@media (max-width:850px){
  .pc-d-hero{padding:42px 5vw 0}
  .pc-d-hero-grid{grid-template-columns:1fr; gap:14px}
  .pc-d-intro{padding-bottom:0}
  .pc-d-title{font-size:clamp(48px,12vw,76px)}
  .pc-d-lead{margin:16px 0 18px}
  .pc-showcase{min-height:clamp(260px,65vw,390px)}
  .pc-showcase-browser{width:100%; padding:0 8px 12px}
  .pc-showcase-browser img{height:42vh}
  .pc-showcase-phone{width:clamp(82px,22vw,140px)}
  .pc-meta-grid{grid-template-columns:repeat(2,minmax(0,1fr)); gap:16px; margin-top:10px}
  .pc-objective-strip{align-items:flex-start; flex-direction:column; gap:7px}
  .pc-gal-head{align-items:flex-start}
  .pc-gallery-hint{display:none}
  .pc-gal.is-app .pc-gallery-screen{flex-basis:220px; width:220px; height:480px}
}
@media (max-width:520px){
  .pc-d-eyebrow{font-size:9px}
  .pc-showcase{min-height:260px}
  .pc-showcase-caption{bottom:0}
  .pc-showcase-phones{gap:7px}
  .pc-showcase-phone{width:clamp(78px,25vw,112px); border-radius:19px; padding:4px}
  .pc-showcase-phone img{border-radius:15px}
  .pc-meta-grid{gap:12px}
  .pc-meta-grid dd{font-size:12px}
  .pc-planning-audience{padding:16px}
  .pc-design-direction{padding:16px}
  .pc-gal-head{display:block}
  .pc-gal.is-app{gap:14px}
  .pc-gal.is-app .pc-gallery-screen{flex-basis:190px; width:190px; height:410px}
  .pc-gallery-screen{padding:34px 7px 8px}
}

/* ---------- compact, portfolio-wide visual system ---------- */
.pc-root{
  --paper:#fff;
  font-family:'DM Sans',sans-serif;
  background:#fff;
}
.pc-root h1,.pc-root h2,.pc-root h3,.pc-root h4{
  font-family:'DM Sans',sans-serif;
}
.pc-hero{padding-top:clamp(42px,6vw,78px); padding-bottom:clamp(24px,3vw,40px)}
.pc-hero-foot{margin-top:16px}
.pc-hero-foot p{max-width:560px}
.pc-filter-row{
  display:flex; align-items:center; gap:8px; margin-top:24px;
}
.pc-filter-row button{
  display:inline-flex; align-items:center; gap:9px; padding:8px 13px;
  border:1px solid #e8e7ed; border-radius:999px; background:#fff;
  color:#555560; font-size:12px; font-weight:600; cursor:pointer;
  transition:background .2s,border-color .2s,color .2s,transform .2s;
}
.pc-filter-row button:hover{transform:translateY(-1px); border-color:#c9c6d8}
.pc-filter-row button.is-active{border-color:var(--blue); background:var(--blue); color:#fff}
.pc-filter-row button small{
  display:grid; place-items:center; min-width:20px; height:20px; padding:0 5px;
  border-radius:999px; background:rgba(22,22,26,.06); font-size:10px;
}
.pc-filter-row button.is-active small{background:rgba(255,255,255,.2)}
.pc-scene{background:color-mix(in srgb,var(--accent) 7%,#fff)}
.pc-stage{min-height:640px}
.pc-d-title,.pc-hero-title{font-family:'DM Sans',sans-serif}
.pc-block{
  padding-top:clamp(38px,4.7vw,62px);
  padding-bottom:clamp(38px,4.7vw,62px);
  gap:clamp(20px,3.2vw,48px);
}
.pc-case-block.pc-tint{
  padding-top:clamp(38px,4.7vw,62px);
  padding-bottom:clamp(38px,4.7vw,62px);
}
.pc-d-hero{padding-top:clamp(34px,4.5vw,58px)}
.pc-d-hero-grid{gap:clamp(22px,3.6vw,54px)}
.pc-d-intro{padding:6px 0 18px}
.pc-d-title{font-size:clamp(46px,6.6vw,88px); letter-spacing:-.06em}
.pc-d-lead{margin:16px 0 20px; line-height:1.65}
.pc-showcase{min-height:clamp(270px,32vw,410px)}
.pc-showcase-browser img{height:clamp(225px,28vw,360px)}
.pc-meta-grid{padding:16px 0 19px}
.pc-section-number{margin-bottom:8px}
.pc-case-block .pc-block-head h2{font-size:clamp(26px,3vw,38px)}
.pc-big{margin-bottom:22px; font-size:clamp(18px,1.8vw,23px)}
.pc-card{padding:19px}
.pc-steps li{padding:19px}
.pc-gal-wrap{padding-top:clamp(38px,5vw,58px); padding-bottom:clamp(38px,5vw,58px)}
.pc-gal-head{margin-bottom:22px}
.pc-final-intro{padding-top:clamp(38px,4.7vw,62px); padding-bottom:clamp(24px,3vw,40px)}
.pc-next{padding-top:clamp(34px,5vw,62px); padding-bottom:clamp(34px,5vw,62px)}
.pc-top-row{padding-top:8px; padding-bottom:8px}
.pc-secnav button{padding:7px 10px; font-size:11.5px}
.pc-rail{display:none}

@media (max-width:850px){
  .pc-hero{padding-top:42px}
  .pc-filter-row{margin-top:18px}
  .pc-stage{min-height:0}
  .pc-block,.pc-case-block.pc-tint{
    padding-top:34px; padding-bottom:34px;
  }
  .pc-case-block .pc-block-head h2{max-width:none}
  .pc-showcase{min-height:clamp(245px,58vw,350px)}
  .pc-showcase-browser img{height:38vh}
  .pc-final-intro{padding-top:34px; padding-bottom:26px}
  .pc-top-row{gap:8px}
  .pc-secnav button{padding:7px 9px; font-size:10.5px}
}
@media (max-width:520px){
  .pc-hero-title{font-size:clamp(42px,12vw,58px)}
  .pc-filter-row{gap:6px}
  .pc-filter-row button{padding:7px 10px; font-size:11px}
  .pc-block,.pc-case-block.pc-tint{padding-top:28px; padding-bottom:28px}
  .pc-two,.pc-four,.pc-steps{gap:12px}
  .pc-card{padding:16px}
  .pc-d-hero{padding-top:28px}
  .pc-showcase{min-height:250px}
  .pc-meta-grid{padding:14px 0 16px}
  .pc-top-row{padding-left:3vw; padding-right:3vw}
  .pc-back{padding:8px 11px; font-size:11px}
  .pc-secnav{gap:2px}
  .pc-secnav button{padding:7px 8px; font-size:10px}
  .pc-gal-wrap{padding-top:34px; padding-bottom:34px}
}

/* ---------- browsable project cards and compact case study ---------- */
.pc-root{font-family:'DM Sans',sans-serif; background:#fff}
.pc-root :is(h1,h2,h3,h4){font-family:'DM Sans',sans-serif}
.pc-hero{padding-top:clamp(38px,5vw,68px); padding-bottom:28px}
.pc-hero-title{font-size:clamp(40px,6vw,76px); line-height:1.04}
.pc-hero-foot{align-items:center; margin-top:12px}
.pc-scrollhint{color:var(--blue)}
.pc-filter-row{margin-top:20px}
.pc-project-grid{
  display:grid; grid-template-columns:repeat(3,minmax(0,1fr));
  gap:20px; padding:0 var(--padR) clamp(56px,8vw,100px) var(--padL);
}
.pc-project-card{
  --accent:#304ffe; min-width:0; overflow:hidden; border:1px solid #eeedf1;
  border-radius:22px; background:#fff; box-shadow:0 12px 35px rgba(27,29,53,.055);
  animation:pcCardIn .5s both; transition:transform .28s,box-shadow .28s,border-color .28s;
}
.pc-project-card:hover{
  transform:translateY(-5px); border-color:color-mix(in srgb,var(--accent) 45%,#fff);
  box-shadow:0 22px 48px rgba(27,29,53,.12);
}
@keyframes pcCardIn{from{opacity:0}to{opacity:1}}
.pc-project-preview{
  position:relative; display:flex; align-items:center; justify-content:center;
  width:100%; height:clamp(180px,20vw,250px); overflow:hidden; padding:16px;
  border:0; border-radius:0; background:linear-gradient(140deg,color-mix(in srgb,var(--accent) 16%,#fff),#f7f6fb);
  cursor:pointer;
}
.pc-project-preview img{
  display:block; width:100%; height:100%; object-fit:cover; object-position:top center;
  border-radius:12px; box-shadow:0 12px 25px rgba(27,29,53,.12);
  transition:transform .35s;
}
.pc-project-card.is-app .pc-project-preview img{
  width:auto; max-width:76%; object-fit:contain; object-position:center;
}
.pc-project-card:hover .pc-project-preview img{transform:scale(1.035)}
.pc-project-number,.pc-project-kind,.pc-project-open{
  position:absolute; z-index:1; display:grid; place-items:center;
  box-shadow:0 6px 16px rgba(27,29,53,.12);
}
.pc-project-number{
  top:25px; left:25px; width:34px; height:34px; border-radius:50%;
  background:#fff; color:var(--blue); font-size:11px; font-weight:800;
}
.pc-project-kind{
  bottom:25px; left:25px; padding:7px 11px; border-radius:999px;
  background:rgba(255,255,255,.92); color:#454550; font-size:10px; font-weight:700;
}
.pc-project-open{
  top:25px; right:25px; width:34px; height:34px; border-radius:50%;
  background:var(--blue); color:#fff; font-size:17px;
  transition:transform .25s;
}
.pc-project-card:hover .pc-project-open{transform:rotate(45deg)}
.pc-project-copy{padding:18px 19px 16px}
.pc-project-label{
  margin:0 0 7px; color:#757581; font-size:9px; font-weight:700; letter-spacing:.12em;
}
.pc-project-copy h2{margin:0; font-size:21px; line-height:1.2; letter-spacing:-.04em}
.pc-project-description{
  display:-webkit-box; min-height:42px; margin:9px 0 15px; overflow:hidden;
  color:#666671; font-size:12px; line-height:1.7; -webkit-line-clamp:2; -webkit-box-orient:vertical;
}
.pc-project-footer{
  display:flex; align-items:center; justify-content:space-between; gap:8px;
  padding-top:12px; border-top:1px solid #efedf2;
}
.pc-project-footer>span{color:#777783; font-size:10px}
.pc-project-footer button{
  display:inline-flex; align-items:center; gap:8px; padding:8px 11px; border:0;
  border-radius:999px; background:#f0efff; color:var(--blue); font-size:10px;
  font-weight:700; cursor:pointer; transition:background .2s,color .2s;
}
.pc-project-footer button:hover{background:var(--blue); color:#fff}
.pc-project-footer button span{font-size:14px}
.pc-rail,.pc-dots{display:none}

.pc-detail{--paper:#fff; font-family:'DM Sans',sans-serif}
.pc-top{background:rgba(255,255,255,.96)}
.pc-top-row{justify-content:flex-start; max-width:1320px; margin:0 auto}
.pc-back{flex:none}
.pc-secnav{flex:1}
.pc-top-count{flex:none}
.pc-d-title{font-size:clamp(34px,4.4vw,58px); line-height:1.02; letter-spacing:-.055em}
.pc-d-hero{padding:34px 5vw 0}
.pc-d-hero-grid{grid-template-columns:minmax(0,.8fr) minmax(0,1.2fr); gap:clamp(24px,4vw,52px)}
.pc-d-intro{padding:4px 0}
.pc-d-eyebrow{margin-bottom:14px}
.pc-d-lead{margin:13px 0 18px; font-size:15px}
.pc-showcase{
  min-height:clamp(230px,26vw,340px); padding:15px; overflow:hidden;
  border:1px solid #eeedf1; border-radius:22px;
  background:linear-gradient(145deg,#fff,color-mix(in srgb,var(--accent) 15%,#f8f7fb));
}
.pc-showcase-glow{display:none}
.pc-showcase-web-image{
  position:relative; z-index:1; display:block; width:100%; max-height:310px;
  object-fit:cover; object-position:top center; border-radius:12px;
  box-shadow:0 16px 36px rgba(27,29,53,.13);
}
.pc-showcase-phones{gap:clamp(8px,1.5vw,18px)}
.pc-showcase-app-screen{
  display:block; width:28%; max-height:300px; object-fit:contain;
  border:1px solid rgba(32,34,52,.08); border-radius:15px;
  background:#fff; box-shadow:0 14px 30px rgba(27,29,53,.14);
  transition:transform .25s;
}
.pc-showcase-app-screen-1{transform:translateY(10px) rotate(-4deg)}
.pc-showcase-app-screen-2{z-index:2; transform:translateY(-8px)}
.pc-showcase-app-screen-3{transform:translateY(10px) rotate(4deg)}
.pc-showcase-caption{bottom:4px; right:12px; font-size:9px}
.pc-meta-grid{margin-top:18px; padding:14px 0 18px}
.pc-meta-grid dt{font-size:9px}
.pc-meta-grid dd{font-size:12px}
.pc-block,.pc-case-block.pc-tint{
  padding-top:clamp(28px,3.8vw,48px); padding-bottom:clamp(28px,3.8vw,48px);
}
.pc-case-block .pc-block-head h2{font-size:clamp(23px,2.7vw,34px)}
.pc-section-number{margin-bottom:6px; font-size:10px}
.pc-kicker{font-size:11px}
.pc-big{margin-bottom:16px; font-size:clamp(16px,1.5vw,19px); line-height:1.6}
.pc-card{padding:16px; border-radius:16px}
.pc-card h3{font-size:15px}
.pc-card p,.pc-card ul,.pc-steps p{font-size:12.5px}
.pc-steps{gap:12px}
.pc-steps li{padding:16px; border-radius:16px}
.pc-step-n{width:26px; height:26px; font-size:11px}
.pc-sub{margin:22px 0 11px; font-size:15px}
.pc-sub small{font-size:10px}
.pc-palette-strip{display:grid; grid-template-columns:repeat(5,minmax(0,1fr)); gap:9px}
.pc-color-token{
  min-width:0; display:grid; grid-template-columns:32px minmax(0,1fr); align-items:center;
  column-gap:9px; padding:9px; border:1px solid #eeedf1; border-radius:13px;
  background:#fff; text-align:left; cursor:pointer; transition:transform .2s,border-color .2s;
}
.pc-color-token:hover{transform:translateY(-2px); border-color:var(--pink)}
.pc-color-token>span{grid-row:span 2; width:32px; height:32px; border-radius:9px; box-shadow:0 0 0 1px rgba(0,0,0,.08) inset}
.pc-color-token strong{overflow:hidden; color:#373741; font-size:10px; text-overflow:ellipsis; white-space:nowrap}
.pc-color-token code{color:#777783; font-size:9px}
.pc-type{min-height:0; padding:14px}
.pc-aa{margin-bottom:8px; font-size:48px}
.pc-principle-list{display:flex; flex-wrap:wrap; gap:8px}
.pc-principle-list span{
  display:flex; align-items:center; gap:8px; padding:9px 12px;
  border:1px solid #eeedf1; border-radius:999px; background:#fff;
  color:#4c4c57; font-size:11px; font-weight:600;
}
.pc-principle-list b{color:var(--pink); font-size:9px}
.pc-gal-wrap{padding-top:34px; padding-bottom:34px}
.pc-gal-head h2{font-size:clamp(24px,3vw,36px)}
.pc-gallery-screen{max-width:980px; padding:10px}
.pc-gal.is-app .pc-gallery-screen{
  flex-basis:220px; width:220px; height:440px; padding:8px;
  border:1px solid #e5e3eb; border-radius:20px;
}
.pc-next{padding-top:30px; padding-bottom:30px}
.pc-next strong{font-size:clamp(28px,5vw,62px)}

.pc-project-switch{
  display:flex; flex:none; align-items:center; gap:7px; padding:4px;
  border:1px solid #eeedf1; border-radius:999px; background:#fff;
}
.pc-project-switch>button{
  display:flex; align-items:center; gap:5px; padding:7px 9px;
  border:0; border-radius:999px; background:transparent; color:#54545f;
  font-size:10px; font-weight:700; cursor:pointer; transition:background .2s,color .2s;
}
.pc-project-switch>button:hover{background:#f0efff; color:var(--blue)}
.pc-project-switch label{display:flex; align-items:center; gap:6px; padding:0 6px}
.pc-switch-label{color:#858590; font-size:9px; font-weight:700; text-transform:uppercase; letter-spacing:.08em}
.pc-project-switch select{
  max-width:142px; border:0; outline:0; background:transparent; color:#292933;
  font:600 10px 'DM Sans',sans-serif; cursor:pointer;
}
.pc-project-switch select:focus-visible{outline:2px solid var(--blue); outline-offset:3px; border-radius:4px}
.pc-showcase{
  position:relative; display:flex; align-items:center; justify-content:center;
  padding:12px; isolation:isolate; animation:pcCoverIn .65s cubic-bezier(.2,.8,.2,1) both;
}
.pc-cover-image{
  position:absolute; z-index:0; inset:12px; display:block; width:calc(100% - 24px); height:calc(100% - 24px);
  object-fit:contain; object-position:center; transition:transform .65s cubic-bezier(.2,.8,.2,1);
}
.pc-showcase:hover .pc-cover-image{transform:scale(1.025)}
.pc-showcase-caption{z-index:1; right:14px; bottom:12px; color:#555560}
.pc-showcase-caption i{background:var(--pink)}
.pc-gallery-screen{transition:transform .25s ease,box-shadow .25s ease,border-color .25s ease}
.pc-gallery-screen:hover{transform:translateY(-3px); border-color:#c8c4d2; box-shadow:0 22px 48px rgba(27,29,53,.15)}
.pc-gallery-more{
  display:flex; align-items:center; justify-content:center; gap:10px; margin:22px auto 0;
  padding:11px 16px; border:1px solid #e5e3eb; border-radius:999px; background:#fff;
  color:#373741; font:700 12px 'DM Sans',sans-serif; cursor:pointer;
  transition:transform .2s,border-color .2s,color .2s;
}
.pc-gallery-more:hover{transform:translateY(-2px); border-color:var(--blue); color:var(--blue)}
.pc-gallery-more span{color:var(--blue); font-size:15px}
.pc-gallery-more.is-collapse{margin-top:10px}
@keyframes pcCoverIn{from{opacity:0; transform:translateY(12px)}to{opacity:1; transform:translateY(0)}}

@media (max-width:1000px){
  .pc-project-grid{grid-template-columns:repeat(2,minmax(0,1fr))}
  .pc-palette-strip{grid-template-columns:repeat(3,minmax(0,1fr))}
}
@media (max-width:850px){
  .pc-project-grid{padding-left:5vw; padding-right:5vw}
  .pc-d-hero{padding-top:26px}
  .pc-d-title{font-size:clamp(34px,8vw,50px)}
  .pc-showcase{min-height:240px}
  .pc-showcase-web-image{max-height:34vh}
  .pc-showcase-app-screen{max-height:220px}
  .pc-top-row{justify-content:flex-start}
  .pc-project-switch{order:2; margin-left:auto}
  .pc-secnav{order:3; flex-basis:100%}
  .pc-top-row{flex-wrap:wrap}
  .pc-meta-grid{grid-template-columns:repeat(2,minmax(0,1fr))}
  .pc-block,.pc-case-block.pc-tint{padding-top:28px; padding-bottom:28px}
}
@media (max-width:560px){
  .pc-project-grid{grid-template-columns:1fr; gap:14px; padding-bottom:48px}
  .pc-project-preview{height:210px}
  .pc-project-copy{padding:16px}
  .pc-project-copy h2{font-size:19px}
  .pc-project-description{min-height:0}
  .pc-d-hero-grid{grid-template-columns:1fr; gap:12px}
  .pc-showcase{min-height:225px}
  .pc-showcase-app-screen{width:29%; max-height:205px}
  .pc-showcase-caption{right:7px; bottom:0}
  .pc-palette-strip{grid-template-columns:repeat(2,minmax(0,1fr))}
  .pc-meta-grid{gap:10px}
  .pc-meta-grid dd{font-size:11px}
  .pc-top-row{gap:7px}
  .pc-top-count{display:none}
  .pc-project-switch{order:2; margin-left:auto; gap:2px}
  .pc-project-switch>button{padding:7px}
  .pc-project-switch>button span{display:none}
  .pc-project-switch label{gap:3px; padding:0 3px}
  .pc-switch-label{display:none}
  .pc-project-switch select{max-width:118px; font-size:9px}
  .pc-secnav{overflow-x:auto}
  .pc-secnav button{padding:7px 8px; font-size:10px}
  .pc-gal.is-app .pc-gallery-screen{flex-basis:175px; width:175px; height:370px}
}
@media (prefers-reduced-motion:reduce){
  .pc-project-card{animation:none}
  .pc-project-card,.pc-project-preview img,.pc-project-open,.pc-color-token,
  .pc-showcase,.pc-cover-image,.pc-gallery-screen,.pc-gallery-more{animation:none; transition:none}
}

/* Homepage project browser */
.pc-root{--padL:5vw; --padR:5vw}
.pc-hero{
  max-width:1320px; margin:0 auto;
  padding:clamp(44px,6vw,76px) 5vw 30px;
}
.pc-hero-title{font-size:clamp(38px,5.6vw,70px)}
.pc-hero-foot{margin-top:16px}
.pc-filter-row{margin-top:22px}
.pc-project-browser{
  display:grid; grid-template-columns:minmax(220px,.34fr) minmax(0,1fr);
  gap:24px; align-items:stretch; max-width:1320px; margin:0 auto;
  padding:0 5vw clamp(56px,8vw,96px);
}
.pc-project-nav{
  display:flex; flex-direction:column; gap:8px; padding:18px;
  height:380px; max-height:calc(100vh - 40px); overflow-y:auto;
  align-self:start; overscroll-behavior:contain; scrollbar-color:#c8c6cf transparent;
  scrollbar-width:thin;
  border:1px solid #eeedf1; border-radius:24px; background:#fff;
  box-shadow:0 14px 36px rgba(27,29,53,.055);
}
.pc-project-nav::-webkit-scrollbar{width:6px}
.pc-project-nav::-webkit-scrollbar-thumb{border-radius:999px; background:#c8c6cf}
.pc-project-nav::-webkit-scrollbar-track{background:transparent}
.pc-project-nav-label{
  margin:2px 6px 6px; color:#858590; font-size:10px; font-weight:800;
  letter-spacing:.12em; text-transform:uppercase;
}
.pc-project-option{
  --accent:#304ffe; display:grid; grid-template-columns:34px minmax(0,1fr) 22px;
  align-items:center; gap:10px; min-height:68px; padding:10px;
  border:1px solid transparent; border-radius:15px; background:transparent;
  color:#292933; text-align:left; cursor:pointer;
  transition:background .2s,border-color .2s,transform .2s;
}
.pc-project-option:hover{transform:translateX(2px); background:#f8f7fb}
.pc-project-option.is-active{
  border-color:color-mix(in srgb,var(--accent) 36%,#fff);
  background:color-mix(in srgb,var(--accent) 10%,#fff);
}
.pc-option-number{
  display:grid; place-items:center; width:32px; height:32px;
  border-radius:50%; background:#f1f0f5; color:#666671;
  font-size:10px; font-weight:800; font-variant-numeric:tabular-nums;
}
.pc-project-option.is-active .pc-option-number{background:var(--accent); color:#fff}
.pc-option-copy{display:grid; gap:4px; min-width:0}
.pc-option-copy strong{overflow:hidden; font-size:12px; text-overflow:ellipsis; white-space:nowrap}
.pc-option-copy small{color:#777783; font-size:10px}
.pc-option-arrow{color:#9999a3; font-size:16px; text-align:center; transition:transform .2s,color .2s}
.pc-project-option.is-active .pc-option-arrow{transform:translate(2px,-2px); color:var(--accent)}
.pc-project-showcase{
  --accent:#304ffe; display:grid; grid-template-columns:minmax(0,1.15fr) minmax(270px,.85fr);
  min-width:0; min-height:430px; overflow:hidden; border:1px solid #eeedf1;
  border-radius:24px; background:#fff; box-shadow:0 18px 44px rgba(27,29,53,.075);
  animation:pcCardIn .35s ease both;
}
.pc-project-cover{
  position:relative; display:flex; align-items:center; justify-content:center;
  min-width:0; min-height:100%; overflow:hidden; padding:24px; border:0;
  background:linear-gradient(140deg,color-mix(in srgb,var(--accent) 20%,#fff),#f7f6fb);
  cursor:pointer; isolation:isolate;
}
.pc-project-cover img{
  display:block; width:100%; height:100%; max-height:430px; object-fit:contain;
  border-radius:14px; filter:drop-shadow(0 18px 32px rgba(27,29,53,.16));
  transition:transform .45s cubic-bezier(.2,.8,.2,1);
}
.pc-project-cover:hover img{transform:scale(1.025)}
.pc-project-kind{
  position:absolute; bottom:20px; left:20px; padding:8px 12px; border-radius:999px;
  background:rgba(255,255,255,.94); color:#454550; font-size:10px; font-weight:700;
  box-shadow:0 6px 16px rgba(27,29,53,.12);
}
.pc-cover-cta{
  position:absolute; right:20px; bottom:20px; display:flex; align-items:center; gap:8px;
  padding:9px 12px; border-radius:999px; background:#fff; color:#292933;
  font-size:10px; font-weight:700; box-shadow:0 6px 16px rgba(27,29,53,.12);
}
.pc-cover-cta span{color:var(--blue); font-size:14px}
.pc-project-info{
  display:flex; flex-direction:column; justify-content:center; align-items:flex-start;
  min-width:0; padding:clamp(24px,4vw,48px);
}
.pc-project-label{margin:0 0 10px; color:#757581; font-size:10px; font-weight:800; letter-spacing:.12em}
.pc-project-info h2{margin:0; font-size:clamp(26px,3.2vw,40px); line-height:1.1; letter-spacing:-.045em}
.pc-project-description{
  display:block; min-height:0; max-width:430px; margin:14px 0 26px; overflow:visible;
  color:#666671; font-size:13px; line-height:1.75; -webkit-line-clamp:unset; -webkit-box-orient:initial;
}
.pc-project-meta{
  display:flex; align-items:center; justify-content:space-between; gap:12px;
  width:100%; padding-top:16px; border-top:1px solid #efedf2;
}
.pc-project-meta>span{color:#777783; font-size:10px; font-weight:600}
.pc-project-meta button{
  display:inline-flex; align-items:center; gap:8px; flex:none; padding:10px 13px;
  border:0; border-radius:999px; background:#f0efff; color:var(--blue);
  font-size:11px; font-weight:700; cursor:pointer; transition:background .2s,color .2s;
}
.pc-project-meta button:hover{background:var(--blue); color:#fff}
.pc-project-meta button span{font-size:15px}
.pc-project-nav button:focus-visible,.pc-project-cover:focus-visible,.pc-project-meta button:focus-visible{
  outline:2px solid var(--blue); outline-offset:3px;
}
.pc-rail,.pc-dots{display:none}
.pc-meta-grid{grid-template-columns:repeat(3,minmax(0,1fr))}
.pc-gallery-screen-hint{
  position:absolute; z-index:2; right:14px; bottom:14px; display:flex; align-items:center; gap:7px;
  padding:7px 10px; border-radius:999px; background:rgba(25,27,42,.82); color:#fff;
  font-size:10px; font-weight:700; opacity:0; transform:translateY(4px);
  transition:opacity .2s,transform .2s;
}
.pc-gallery-screen-hint span{font-size:13px}
.pc-gallery-screen:hover .pc-gallery-screen-hint,
.pc-gallery-screen:focus-visible .pc-gallery-screen-hint{opacity:1; transform:none}
.pc-gal-head p{max-width:520px; line-height:1.65}
.pc-gal.is-app .pc-gallery-screen{display:flex; align-items:center; justify-content:center}
.pc-gal.is-app .pc-gallery-screen img{object-position:center}
.pc-detail .pc-meta-grid>div{min-width:0}

@media (max-width:900px){
  .pc-project-browser{grid-template-columns:minmax(190px,.38fr) minmax(0,1fr); gap:16px}
  .pc-project-nav{padding:12px}
  .pc-project-option{grid-template-columns:30px minmax(0,1fr) 16px; gap:8px; padding:8px}
  .pc-option-number{width:28px; height:28px}
  .pc-project-showcase{grid-template-columns:1fr; min-height:0}
  .pc-project-cover{min-height:clamp(260px,38vw,360px)}
  .pc-project-cover img{max-height:340px}
  .pc-project-info{padding:24px}
}
@media (max-width:640px){
  .pc-hero{padding:40px 5vw 24px}
  .pc-hero-title{font-size:clamp(38px,10vw,58px)}
  .pc-hero-foot{align-items:flex-start}
  .pc-hero-foot p{font-size:13px}
  .pc-project-browser{grid-template-columns:1fr; gap:14px; padding:0 5vw 52px}
  .pc-project-nav{
    display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:6px; padding:12px;
    height:auto; max-height:none; overflow:visible;
  }
  .pc-project-nav-label{grid-column:1/-1; margin:2px 4px 4px}
  .pc-project-option{min-height:60px; grid-template-columns:27px minmax(0,1fr); gap:7px; padding:7px}
  .pc-option-number{width:26px; height:26px; font-size:9px}
  .pc-option-copy strong{font-size:10px}
  .pc-option-copy small{font-size:9px}
  .pc-option-arrow{display:none}
  .pc-project-cover{min-height:clamp(230px,65vw,310px); padding:16px}
  .pc-project-cover img{max-height:290px}
  .pc-project-kind{bottom:12px; left:12px}
  .pc-cover-cta{right:12px; bottom:12px}
  .pc-project-info{padding:20px}
  .pc-project-info h2{font-size:28px}
  .pc-project-description{margin:10px 0 18px; font-size:12px}
  .pc-project-meta{align-items:flex-start; flex-direction:column}
  .pc-meta-grid{grid-template-columns:repeat(2,minmax(0,1fr))}
  .pc-meta-grid>div:last-child{grid-column:1/-1}
  .pc-gal-head{align-items:flex-start; flex-direction:column}
  .pc-gal-head p{font-size:12px}
  .pc-gal.is-app .pc-gallery-screen{flex-basis:190px; width:190px; height:390px}
  .pc-gallery-screen-hint{opacity:1; transform:none}
}
@media (prefers-reduced-motion:reduce){
  .pc-project-showcase,.pc-project-cover img,.pc-project-option,
  .pc-project-meta button,.pc-gallery-screen-hint{animation:none; transition:none}
}

/* Compact case-study story and device-led screen previews */
.pc-d-hero{padding-bottom:0}
.pc-d-badges{margin-bottom:12px}
.pc-d-eyebrow{margin-bottom:10px; font-size:10px}
.pc-d-lead{margin:12px 0 16px; max-width:440px; font-size:15px; line-height:1.6}
.pc-d-actions{margin-top:18px}
.pc-d-explore{min-height:42px; padding:11px 16px}
.pc-showcase{min-height:clamp(250px,29vw,360px)}
.pc-showcase-browser{width:100%; max-width:600px; padding:0 10px 13px}
.pc-showcase-toolbar{height:31px}
.pc-showcase-browser img{height:clamp(190px,24vw,310px); object-fit:contain; object-position:top center}
.pc-showcase-base{bottom:1px}
.pc-showcase-phones{height:auto; min-height:300px; padding:16px 0 24px}
.pc-showcase-phone{width:clamp(88px,11vw,138px); max-height:310px}
.pc-showcase-phone img{object-fit:contain}
.pc-meta-grid{margin-top:8px; padding:14px 0 16px}
.pc-meta-grid dt{margin-bottom:4px}
.pc-block,.pc-case-block.pc-tint{
  padding-top:clamp(30px,3.8vw,48px);
  padding-bottom:clamp(30px,3.8vw,48px);
}
.pc-block-head h2{font-size:clamp(25px,2.7vw,34px)}
.pc-kicker{font-size:12px}
.pc-big{margin-bottom:18px; font-size:clamp(17px,1.65vw,21px); line-height:1.55}
.pc-card{padding:17px}
.pc-card h3{font-size:16px}
.pc-card p,.pc-card ul{font-size:13px; line-height:1.65}
.pc-steps{grid-template-columns:repeat(4,minmax(0,1fr)); gap:10px}
.pc-steps li{padding:15px; border-radius:16px}
.pc-step-n{width:27px; height:27px; margin-bottom:10px; font-size:11px}
.pc-steps h3{font-size:15px}
.pc-steps p{font-size:12px; line-height:1.6}
.pc-planning-audience{margin-bottom:14px; padding:15px 18px}
.pc-planning-audience p{font-size:14px}
.pc-planning-goals{margin-top:18px}
.pc-planning-goals div{padding:9px 0}
.pc-planning-goals div p{font-size:13px}
.pc-design-direction{margin-bottom:20px; padding:16px 19px; font-size:14px}
.pc-sub{margin-top:24px}
.pc-chip-color{height:76px}
.pc-type{min-height:150px}
.pc-final-intro{padding-top:clamp(30px,3.8vw,48px); padding-bottom:24px}
.pc-feature{padding:18px}
.pc-feature-index{margin-bottom:16px}
.pc-gal-wrap{padding-top:clamp(32px,4vw,48px); padding-bottom:clamp(32px,4vw,48px)}
.pc-gal-head{margin-bottom:18px}
.pc-gallery-screen{padding:40px 10px 10px}
.pc-gallery-browser-bar{height:30px}
.pc-gal.is-web{gap:16px}
.pc-gal.is-app{gap:16px; padding-bottom:14px}
.pc-gal.is-app .pc-gallery-screen{flex-basis:clamp(180px,20vw,230px); width:clamp(180px,20vw,230px); height:clamp(350px,42vw,490px)}
.pc-gallery-more{margin-top:18px}
.pc-gallery-more+.pc-gallery-more{margin-left:8px}
.pc-next{padding-top:clamp(30px,4vw,48px); padding-bottom:clamp(30px,4vw,48px)}

@media (max-width:1000px){
  .pc-steps{grid-template-columns:repeat(2,minmax(0,1fr))}
}
@media (max-width:850px){
  .pc-showcase{min-height:clamp(245px,54vw,340px)}
  .pc-showcase-browser img{height:clamp(190px,36vw,280px)}
  .pc-showcase-phones{min-height:250px}
  .pc-showcase-phone{width:clamp(82px,18vw,128px); max-height:270px}
  .pc-steps{grid-template-columns:repeat(2,minmax(0,1fr))}
  .pc-block,.pc-case-block.pc-tint{padding-top:30px; padding-bottom:30px}
}
@media (max-width:520px){
  .pc-d-badges{margin-bottom:8px}
  .pc-d-lead{margin:10px 0 14px; font-size:14px}
  .pc-showcase{min-height:230px}
  .pc-showcase-browser{padding:0 7px 10px}
  .pc-showcase-toolbar{height:27px}
  .pc-showcase-browser img{height:190px}
  .pc-showcase-phones{min-height:220px; padding:10px 0 18px; gap:7px}
  .pc-showcase-phone{width:clamp(72px,24vw,106px); max-height:220px; padding:4px; border-radius:18px}
  .pc-showcase-phone img{border-radius:13px}
  .pc-block,.pc-case-block.pc-tint{padding-top:26px; padding-bottom:26px}
  .pc-steps{grid-template-columns:1fr}
  .pc-steps li{padding:14px}
  .pc-gal.is-web .pc-gallery-screen{padding:36px 7px 7px}
  .pc-gal.is-app .pc-gallery-screen{flex-basis:175px; width:175px; height:360px; padding:7px}
  .pc-gallery-phone-notch{top:7px}
  .pc-zoom{padding:58px 12px 24px}
}
@media (prefers-reduced-motion:reduce){
  .pc-detail [style*="transform"]{transition:none}
}

/* Project cover artwork and overview snapshot */
.pc-showcase-cover-card{
  position:absolute; z-index:4; top:8%; left:-10px; display:flex; align-items:center; gap:9px;
  max-width:min(230px,48%); padding:7px 11px 7px 7px; border:1px solid rgba(255,255,255,.82);
  border-radius:14px; background:rgba(255,255,255,.9); box-shadow:0 12px 30px rgba(27,29,53,.13);
  backdrop-filter:blur(12px); transform:rotate(-3deg);
}
.pc-showcase-cover-card img{
  width:44px; height:38px; flex:none; border-radius:8px; object-fit:cover; background:#f4f2f7;
}
.pc-showcase-cover-card span{
  display:-webkit-box; overflow:hidden; color:#5f5e68; font-size:8px; font-weight:700;
  line-height:1.35; letter-spacing:.06em; text-overflow:ellipsis; -webkit-line-clamp:2; -webkit-box-orient:vertical;
}
.pc-showcase-cover-card b{margin-right:4px; color:var(--blue)}
.pc-showcase-browser .pc-cover-image{
  position:relative; z-index:1; inset:auto; width:100%; height:clamp(190px,24vw,310px);
  object-fit:cover; object-position:top center;
}
.pc-overview-intro{
  position:relative; display:grid; grid-template-columns:42px minmax(0,1fr); align-items:start;
  gap:15px; margin-bottom:22px; padding:22px 24px; overflow:hidden;
  border:1px solid color-mix(in srgb,var(--accent) 25%,#fff); border-radius:20px;
  background:linear-gradient(115deg,color-mix(in srgb,var(--accent) 12%,#fff),#fff 74%);
}
.pc-overview-intro::after{
  position:absolute; content:""; width:150px; height:150px; right:-74px; bottom:-104px;
  border:1px solid color-mix(in srgb,var(--accent) 45%,transparent); border-radius:50%;
  box-shadow:0 0 0 16px color-mix(in srgb,var(--accent) 7%,transparent),0 0 0 32px color-mix(in srgb,var(--accent) 4%,transparent);
}
.pc-overview-mark{
  display:grid; place-items:center; width:38px; height:38px; border-radius:13px;
  color:var(--blue); background:#fff; box-shadow:0 7px 18px rgba(28,30,54,.08);
}
.pc-overview-intro .pc-big{position:relative; z-index:1; margin:0; max-width:790px; font-size:clamp(17px,1.8vw,22px)}
.pc-overview-grid{display:grid; grid-template-columns:minmax(0,.82fr) minmax(0,1.18fr); gap:14px}
.pc-overview-audience{
  position:relative; display:flex; flex-direction:column; justify-content:space-between; min-height:205px;
  overflow:hidden; padding:22px; border-radius:20px; color:#fff;
  background:linear-gradient(145deg,#24244f,color-mix(in srgb,var(--accent) 42%,#35376a));
}
.pc-overview-audience .pc-card-label{position:relative; z-index:1; display:flex; align-items:center; gap:7px; color:#fff; opacity:.78}
.pc-overview-audience h3{position:relative; z-index:1; max-width:250px; margin:20px 0 8px; color:#fff; font-size:21px; line-height:1.15}
.pc-overview-audience p{position:relative; z-index:1; max-width:290px; margin:0; color:rgba(255,255,255,.8); font-size:13px; line-height:1.65}
.pc-overview-orbit{
  position:absolute; width:180px; height:180px; right:-54px; top:-68px; border:1px solid rgba(255,255,255,.18); border-radius:50%;
  box-shadow:0 0 0 18px rgba(255,255,255,.05),0 0 0 38px rgba(255,255,255,.035);
}
.pc-overview-goals{
  padding:15px 19px; border:1px solid #eeedf1; border-radius:20px; background:#fff;
  box-shadow:0 12px 34px rgba(28,30,54,.035);
}
.pc-overview-goals-head{display:flex; align-items:center; justify-content:space-between; gap:8px; padding-bottom:7px}
.pc-overview-goals-head .pc-card-label{display:flex; align-items:center; gap:7px; margin:0}
.pc-overview-count{color:#8b8995; font-size:10px; font-weight:700}
.pc-overview-goal{
  display:grid; grid-template-columns:30px minmax(0,1fr) 18px; align-items:center; gap:10px;
  min-height:47px; border-top:1px solid #f0eff3;
}
.pc-overview-goal>span{color:var(--accent); font-size:10px; font-weight:800}
.pc-overview-goal p{margin:0; color:#484852; font-size:12px; font-weight:600; line-height:1.45}
.pc-overview-goal i{color:#aaa8b2; font-size:13px; font-style:normal}
@media (max-width:850px){
  .pc-overview-grid{grid-template-columns:1fr}
  .pc-overview-audience{min-height:180px}
  .pc-showcase-browser .pc-cover-image{height:clamp(190px,36vw,280px)}
}
@media (max-width:520px){
  .pc-showcase-cover-card{top:3%; left:2px; max-width:45%; padding:5px 7px 5px 5px; gap:6px; border-radius:11px}
  .pc-showcase-cover-card img{width:34px; height:30px}
  .pc-showcase-cover-card span{font-size:7px}
  .pc-showcase-browser .pc-cover-image{height:190px}
  .pc-overview-intro{grid-template-columns:32px minmax(0,1fr); gap:10px; padding:16px}
  .pc-overview-mark{width:31px; height:31px; border-radius:10px}
  .pc-overview-mark svg{width:17px; height:17px}
  .pc-overview-intro .pc-big{font-size:16px}
  .pc-overview-audience{min-height:165px; padding:18px}
  .pc-overview-audience h3{font-size:19px}
  .pc-overview-goals{padding:13px}
  .pc-overview-goal{grid-template-columns:25px minmax(0,1fr) 14px; gap:7px}
}

.pc-showcase-hybrid{
  position:relative; z-index:1; width:100%; max-width:600px; overflow:hidden;
  border:1px solid rgba(31,35,50,.12); border-radius:18px; background:#fff;
  box-shadow:0 28px 70px rgba(34,35,47,.17);
}
.pc-showcase-hybrid img{display:block; width:100%; max-height:420px; object-fit:contain}
.pc-showcase.is-hybrid .pc-showcase-cover-card{display:none}
.pc-gal.is-web{
  display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); align-items:start;
  gap:clamp(14px,2.4vw,26px);
}
.pc-gal.is-web .pc-gallery-screen{
  display:flex; width:100%; max-width:none; aspect-ratio:16/10; margin:0;
  padding:34px 0 0; border-radius:18px; transition:transform .28s,box-shadow .28s;
}
.pc-gal.is-web .pc-gallery-screen:first-child{grid-column:1/-1; aspect-ratio:2/1}
.pc-gal.is-web .pc-gallery-screen img{
  flex:1; min-height:0; width:100%; height:100%; max-height:none;
  object-fit:cover; object-position:top center;
}
.pc-gal.is-web .pc-gallery-screen:hover{
  transform:translateY(-5px); box-shadow:0 24px 48px rgba(27,29,53,.15);
}
.pc-gal.is-web .pc-gallery-screen:hover img{transform:none}

@media (max-width:640px){
  .pc-gal.is-web{grid-template-columns:1fr}
  .pc-gal.is-web .pc-gallery-screen:first-child{grid-column:auto; aspect-ratio:16/10}
}
.pc-gallery-switch{
  display:inline-flex; gap:5px; margin:0 auto 20px; padding:5px;
  border:1px solid #e8e5eb; border-radius:999px; background:#fff;
  box-shadow:0 8px 24px rgba(27,29,53,.06);
}
.pc-gallery-switch button{
  display:flex; align-items:center; gap:9px; min-height:40px; padding:0 16px;
  border:0; border-radius:999px; background:transparent; color:#5f5e68;
  font-size:12px; font-weight:700; cursor:pointer; transition:background .2s,color .2s,transform .2s;
}
.pc-gallery-switch button:hover{transform:translateY(-1px)}
.pc-gallery-switch button.is-active{background:var(--accent); color:#fff}
.pc-gallery-switch button span{
  min-width:21px; padding:3px 6px; border-radius:999px;
  background:rgba(127,127,127,.12); font-size:10px; text-align:center;
}
.pc-gallery-switch button.is-active span{background:rgba(255,255,255,.2)}
.pc-gal.is-app .pc-gallery-screen{
  flex-basis:clamp(210px,22vw,260px); width:clamp(210px,22vw,260px);
  height:clamp(460px,48vw,620px); padding:8px;
}
.pc-gal.is-app .pc-gallery-screen img{object-fit:contain; object-position:center}
@media (max-width:640px){
  .pc-gallery-switch{margin-bottom:14px}
  .pc-gallery-switch button{min-height:38px; padding:0 13px}
  .pc-gal.is-app .pc-gallery-screen{flex-basis:210px; width:210px; height:470px}
}
@media (prefers-reduced-motion:reduce){
  .pc-gal.is-web .pc-gallery-screen,.pc-gallery-switch button{transition:none}
}

/* Editorial project carousel and case-study layout */
.pc-root{
  --blue:#304ffe;
  --pink:#f29bbd;
  --paper:#faf9f6;
  --ink:#191a27;
  --muted:#6d6c77;
  --line:#e8e5e2;
  background:var(--paper);
  color:var(--ink);
}
.pc-root .pc-hero{
  max-width:1420px;
  margin:0 auto;
  padding:clamp(54px,7vw,92px) 5vw 16px;
  text-align:center;
}
.pc-root .pc-hero-title{
  display:flex;
  justify-content:center;
  align-items:baseline;
  gap:.24em;
  color:var(--ink);
  font-size:clamp(48px,7.2vw,96px);
}
.pc-root .pc-hero-title .pc-script{
  color:var(--pink);
  font-family:Caveat,cursive;
  font-size:1.04em;
  font-weight:700;
  letter-spacing:-.04em;
}
.pc-root .pc-hero-foot{
  justify-content:center;
  margin-top:12px;
}
.pc-root .pc-hero-foot p{
  max-width:560px;
  font-size:15px;
}
.pc-root .pc-scrollhint{display:none}
.pc-root .pc-filter-row{justify-content:center; margin-top:24px}
.pc-root .pc-filter-row button{
  border-color:#e8e5e2;
  background:rgba(255,255,255,.72);
}
.pc-root .pc-filter-row button.is-active{
  border-color:var(--blue);
  background:var(--blue);
  color:#fff;
}
.pc-project-carousel{
  position:relative;
  max-width:1420px;
  margin:0 auto;
  padding:0 66px 54px;
}
.pc-carousel-stage{
  position:relative;
  height:clamp(390px,48vw,560px);
  perspective:1500px;
  isolation:isolate;
}
.pc-carousel-card{
  --project-accent:var(--blue);
  position:absolute;
  top:50%;
  left:50%;
  display:block;
  width:clamp(210px,27vw,340px);
  height:clamp(310px,39vw,460px);
  padding:0;
  overflow:hidden;
  border:1px solid rgba(255,255,255,.7);
  border-radius:24px;
  background:#242333;
  box-shadow:0 28px 65px rgba(29,27,46,.2);
  color:#fff;
  cursor:pointer;
  text-align:left;
  transform-origin:center;
  transition:transform .65s cubic-bezier(.2,.8,.2,1),opacity .45s ease,filter .45s ease,box-shadow .45s ease;
}
.pc-carousel-card img{
  display:block;
  width:100%;
  height:100%;
  object-fit:cover;
  object-position:center;
  transition:transform .75s cubic-bezier(.2,.8,.2,1);
}
.pc-carousel-card:hover img{transform:scale(1.045)}
.pc-carousel-card:focus-visible,.pc-carousel-arrow:focus-visible,.pc-carousel-dots button:focus-visible{
  outline:3px solid var(--blue);
  outline-offset:4px;
}
.pc-carousel-card[data-offset="0"]{
  z-index:5;
  opacity:1;
  filter:none;
  transform:translate(-50%,-50%) scale(1);
  box-shadow:0 38px 90px rgba(29,27,46,.26);
}
.pc-carousel-card[data-offset="1"]{
  z-index:4;
  opacity:.88;
  filter:saturate(.88);
  transform:translate(-50%,-50%) translateX(108%) rotateY(-8deg) scale(.84);
}
.pc-carousel-card[data-offset="-1"]{
  z-index:4;
  opacity:.88;
  filter:saturate(.88);
  transform:translate(-50%,-50%) translateX(-108%) rotateY(8deg) scale(.84);
}
.pc-carousel-card[data-offset="2"]{
  z-index:2;
  opacity:.5;
  filter:saturate(.7);
  transform:translate(-50%,-50%) translateX(178%) rotateY(-12deg) scale(.68);
}
.pc-carousel-card[data-offset="-2"]{
  z-index:2;
  opacity:.5;
  filter:saturate(.7);
  transform:translate(-50%,-50%) translateX(-178%) rotateY(12deg) scale(.68);
}
.pc-carousel-shade{
  position:absolute;
  inset:0;
  background:linear-gradient(180deg,rgba(18,19,33,.04) 20%,rgba(18,19,33,.08) 40%,rgba(18,19,33,.88) 100%);
  pointer-events:none;
}
.pc-carousel-number{
  position:absolute;
  top:20px;
  right:20px;
  color:#fff;
  font-size:14px;
  font-weight:700;
  font-variant-numeric:tabular-nums;
  text-shadow:0 2px 12px rgba(0,0,0,.35);
}
.pc-carousel-number i{
  color:rgba(255,255,255,.7);
  font-size:11px;
  font-style:normal;
}
.pc-carousel-copy{
  position:absolute;
  right:24px;
  bottom:28px;
  left:24px;
  display:grid;
  gap:8px;
}
.pc-carousel-copy small{
  color:rgba(255,255,255,.8);
  font-size:10px;
  font-weight:600;
  letter-spacing:.04em;
  text-transform:uppercase;
}
.pc-carousel-copy small i{
  margin:0 4px;
  color:var(--pink);
  font-style:normal;
}
.pc-carousel-copy strong{
  color:#fff;
  font-family:'Bricolage Grotesque',Inter,sans-serif;
  font-size:clamp(22px,2.4vw,32px);
  line-height:1.05;
  letter-spacing:-.045em;
}
.pc-carousel-copy>span{
  color:rgba(255,255,255,.76);
  font-size:9px;
  font-weight:700;
  letter-spacing:.1em;
}
.pc-carousel-open{
  position:absolute;
  right:20px;
  bottom:20px;
  display:flex;
  align-items:center;
  gap:8px;
  padding:9px 12px;
  border:1px solid rgba(255,255,255,.45);
  border-radius:999px;
  background:rgba(255,255,255,.14);
  color:#fff;
  font-size:10px;
  font-weight:700;
  opacity:0;
  transform:translateY(5px);
  transition:opacity .2s ease,transform .2s ease;
  backdrop-filter:blur(8px);
}
.pc-carousel-open svg{width:13px;height:13px}
.pc-carousel-card.is-current:hover .pc-carousel-open,
.pc-carousel-card.is-current:focus-visible .pc-carousel-open{opacity:1;transform:none}
.pc-carousel-arrow{
  position:absolute;
  z-index:8;
  top:44%;
  display:grid;
  place-items:center;
  width:46px;
  height:46px;
  border:1px solid #e8e5e2;
  border-radius:50%;
  background:rgba(255,255,255,.92);
  color:var(--blue);
  box-shadow:0 8px 26px rgba(32,31,45,.1);
  cursor:pointer;
  transition:transform .2s ease,background .2s ease,color .2s ease;
}
.pc-carousel-arrow:hover{transform:scale(1.07);background:var(--blue);color:#fff}
.pc-carousel-arrow span{font-size:23px;line-height:1}
.pc-carousel-prev{left:10px}
.pc-carousel-next{right:10px}
.pc-carousel-footer{
  display:flex;
  justify-content:center;
  align-items:center;
  gap:18px;
  margin-top:5px;
  color:#777681;
  font-size:11px;
}
.pc-carousel-footer>b,.pc-carousel-footer span b{color:var(--blue)}
.pc-carousel-footer span i{margin-left:10px;color:#898894;font-style:normal}
.pc-carousel-dots{display:flex;align-items:center;gap:8px}
.pc-carousel-dots button{
  width:8px;
  height:8px;
  padding:0;
  border:0;
  border-radius:999px;
  background:#d8d6dd;
  cursor:pointer;
  transition:width .25s ease,background .25s ease;
}
.pc-carousel-dots button.is-active{width:22px;background:var(--blue)}

.pc-detail{
  --paper:#faf9f6;
  background:var(--paper);
  color:var(--ink);
  font-family:Inter,ui-sans-serif,system-ui,sans-serif;
}
.pc-detail .pc-top{
  border-color:rgba(33,31,43,.08);
  background:rgba(250,249,246,.94);
}
.pc-detail .pc-top-row{max-width:1440px;padding:10px 5vw}
.pc-detail .pc-back{
  border-color:rgba(48,79,254,.24);
  background:transparent;
  color:var(--blue);
}
.pc-detail .pc-back:hover{background:var(--blue);color:#fff}
.pc-detail .pc-project-switch{border-color:rgba(33,31,43,.1);background:rgba(255,255,255,.8)}
.pc-detail .pc-project-switch>button:hover{background:rgba(48,79,254,.08);color:var(--blue)}
.pc-detail .pc-top-count{color:#777681}
.pc-detail .pc-read b{background:var(--blue)}
.pc-detail .pc-d-hero{
  padding:clamp(40px,6vw,78px) 5vw 0;
  background:
    radial-gradient(ellipse at 86% 28%,rgba(242,155,189,.2),transparent 31%),
    radial-gradient(ellipse at 76% 75%,rgba(48,79,254,.08),transparent 34%),
    var(--paper);
}
.pc-detail .pc-d-hero::before{
  width:34vw;
  right:-9vw;
  top:-17vw;
  background:var(--pink);
  opacity:.12;
  filter:blur(78px);
}
.pc-detail .pc-d-inner{max-width:1320px}
.pc-detail .pc-d-hero-grid{
  grid-template-columns:minmax(0,.82fr) minmax(0,1.18fr);
  gap:clamp(30px,5vw,82px);
}
.pc-detail .pc-d-intro{padding:10px 0 28px}
.pc-detail .pc-d-badges span{
  border-color:rgba(48,79,254,.16);
  background:rgba(255,255,255,.78);
  color:var(--blue);
}
.pc-detail .pc-d-eyebrow{color:var(--blue)}
.pc-detail .pc-d-title{
  max-width:650px;
  color:#171827;
  font-family:'Bricolage Grotesque',Inter,sans-serif;
  font-size:clamp(46px,6.6vw,88px);
  line-height:.98;
}
.pc-detail .pc-d-lead{color:#64636f}
.pc-detail .pc-d-explore{
  background:var(--blue);
  box-shadow:0 12px 28px rgba(48,79,254,.19);
}
.pc-detail .pc-d-explore:hover{box-shadow:0 16px 32px rgba(48,79,254,.27)}
.pc-detail .pc-showcase{
  min-height:clamp(330px,39vw,510px);
  overflow:visible;
  border:0;
  background:transparent;
}
.pc-detail .pc-showcase-glow{
  width:78%;
  background:linear-gradient(135deg,var(--blue),var(--pink));
  opacity:.18;
  filter:blur(78px);
}
.pc-detail .pc-showcase-cover-card{
  top:7%;
  left:-4%;
  border-color:rgba(255,255,255,.9);
}
.pc-detail .pc-showcase-browser{
  width:100%;
  padding:0 10px 14px;
  border-color:rgba(34,33,45,.12);
  border-radius:20px;
  background:linear-gradient(145deg,#fff,#eeedf1);
  box-shadow:0 32px 76px rgba(31,30,44,.18);
  transform:rotate(1deg);
}
.pc-detail .pc-showcase-toolbar{height:39px}
.pc-detail .pc-showcase-browser .pc-cover-image{
  height:clamp(250px,33vw,420px);
  object-fit:contain;
  object-position:top center;
  background:#fff;
}
.pc-detail .pc-showcase-base{
  bottom:1px;
  background:linear-gradient(#f3f2f5,#dad9df);
}
.pc-detail .pc-showcase-phones{gap:clamp(12px,2vw,28px)}
.pc-detail .pc-showcase-phone{
  width:clamp(106px,14vw,174px);
  border-color:rgba(31,30,44,.14);
  border-radius:30px;
  box-shadow:0 26px 56px rgba(31,30,44,.2);
}
.pc-detail .pc-showcase-caption{bottom:0;color:#6d6c77}
.pc-detail .pc-showcase-caption i{background:var(--pink)}
.pc-detail .pc-meta-grid{
  grid-template-columns:repeat(3,minmax(0,1fr));
  gap:24px;
  margin-top:24px;
  padding:18px 0 28px;
  border-color:rgba(33,31,43,.12);
}
.pc-detail .pc-meta-grid dt{color:#797883}
.pc-detail .pc-meta-grid dd{color:#222331}

.pc-story-layout{
  display:grid;
  grid-template-columns:minmax(180px,220px) minmax(0,1fr);
  align-items:start;
  gap:clamp(32px,5vw,76px);
  width:min(1320px,90%);
  margin:0 auto;
  padding:clamp(28px,4vw,54px) 0 clamp(56px,8vw,104px);
}
.pc-story-sidebar{
  position:sticky;
  top:90px;
  align-self:start;
  padding:20px 14px 14px;
  border:1px solid rgba(33,31,43,.09);
  border-radius:20px;
  background:rgba(255,255,255,.72);
  box-shadow:0 16px 42px rgba(31,30,44,.045);
  backdrop-filter:blur(12px);
}
.pc-story-index-label{
  display:block;
  margin:0 10px 13px;
  color:var(--blue);
  font-size:10px;
  font-weight:800;
  letter-spacing:.13em;
  text-transform:uppercase;
}
.pc-story-sidebar .pc-secnav{
  display:flex;
  flex-direction:column;
  gap:4px;
  overflow:visible;
}
.pc-story-sidebar .pc-secnav button{
  display:grid;
  grid-template-columns:13px minmax(0,1fr);
  align-items:center;
  gap:10px;
  min-height:40px;
  padding:8px 10px;
  border:0;
  border-radius:10px;
  background:transparent;
  color:#686773;
  font-size:11px;
  font-weight:600;
  text-align:left;
  white-space:normal;
  transition:background .2s ease,color .2s ease;
}
.pc-story-sidebar .pc-secnav button:hover{background:rgba(48,79,254,.06);color:var(--blue)}
.pc-story-sidebar .pc-secnav button.is-active{background:rgba(48,79,254,.09);color:var(--blue)}
.pc-story-sidebar .pc-secnav button i{
  width:7px;
  height:7px;
  border:1px solid #c8c6ce;
  border-radius:50%;
  background:#fff;
}
.pc-story-sidebar .pc-secnav button.is-active i{border-color:var(--blue);background:var(--blue)}
.pc-story-project-count{
  display:block;
  margin:16px 10px 0;
  padding-top:13px;
  border-top:1px solid rgba(33,31,43,.09);
  color:#777681;
  font-size:10px;
  font-weight:700;
  letter-spacing:.08em;
}
.pc-story-project-count i{margin:0 4px;color:var(--pink);font-style:normal}
.pc-story-content{min-width:0}
.pc-story-content .pc-block,
.pc-story-content .pc-final-section{
  display:block;
  width:100%;
  max-width:none;
  margin:0;
  padding:clamp(40px,5vw,66px) 0;
  border-bottom:1px solid rgba(33,31,43,.09);
  background:transparent;
}
.pc-story-content .pc-block-head{
  position:static;
  margin-bottom:24px;
}
.pc-story-content .pc-block-head h2{
  max-width:none;
  color:#191a27;
  font-size:clamp(30px,3.8vw,48px);
  letter-spacing:-.055em;
}
.pc-story-content .pc-section-number{color:var(--blue)}
.pc-story-content .pc-kicker{color:#777681;font-size:13px}
.pc-story-content .pc-block-body{min-width:0}
.pc-story-content .pc-big{
  max-width:850px;
  color:#33323e;
  font-size:clamp(19px,2vw,25px);
  line-height:1.62;
}
.pc-story-content .pc-overview-intro{
  border-color:rgba(48,79,254,.13);
  background:linear-gradient(115deg,rgba(48,79,254,.07),rgba(242,155,189,.08) 48%,#fff 100%);
}
.pc-story-content .pc-overview-mark{color:var(--blue)}
.pc-story-content .pc-overview-audience{
  background:linear-gradient(145deg,#242548,#34365e);
}
.pc-story-content .pc-overview-goal>span{color:var(--blue)}
.pc-story-content .pc-card,
.pc-story-content .pc-steps li{
  border-color:rgba(33,31,43,.09);
  background:rgba(255,255,255,.78);
  box-shadow:0 12px 34px rgba(31,30,44,.04);
}
.pc-story-content .pc-card:hover{box-shadow:0 18px 40px rgba(31,30,44,.08)}
.pc-story-content .pc-card-label{color:var(--blue)}
.pc-story-content .pc-challenge-card{border-top-color:var(--pink)}
.pc-story-content .pc-objective-strip{
  border-color:rgba(48,79,254,.16);
  background:#fff;
}
.pc-story-content .pc-objective-strip strong{color:var(--blue)}
.pc-story-content .pc-step-n{background:var(--blue)}
.pc-story-content .pc-planning-audience{background:rgba(48,79,254,.055)}
.pc-story-content .pc-design-direction{
  border-left-color:var(--pink);
  background:rgba(242,155,189,.1);
}
.pc-story-content .pc-color-token{border-color:rgba(33,31,43,.1);background:#fff}
.pc-story-content .pc-principle-list b{color:var(--pink)}
.pc-story-content .pc-final-section{padding-top:0;border-bottom:0}
.pc-story-content .pc-final-intro{
  display:block;
  max-width:none;
  margin:0;
  padding:clamp(40px,5vw,66px) 0 30px;
}
.pc-story-content .pc-final-intro .pc-block-head{margin-bottom:24px}
.pc-story-content .pc-gal-wrap{
  margin-top:22px;
  padding:clamp(24px,3.5vw,42px);
  border:1px solid rgba(33,31,43,.08);
  border-radius:24px;
  background:#f0eff8;
}
.pc-story-content .pc-gal-head h2{
  color:#191a27;
  font-size:clamp(25px,3vw,38px);
  letter-spacing:-.05em;
}
.pc-story-content .pc-gal-head p{color:#6d6c77;font-size:13px}
.pc-story-content .pc-gallery-switch button.is-active{background:var(--blue)}
.pc-story-content .pc-gallery-more span{color:var(--blue)}
.pc-story-content .pc-validation-intro{
  border-color:rgba(48,79,254,.12);
  background:linear-gradient(135deg,#fff,rgba(242,155,189,.1));
}
.pc-story-content .pc-validation-mark{background:var(--blue)}
.pc-story-content .pc-validation-card{border-top-color:var(--blue)}
.pc-story-content .pc-learn{
  border-left:4px solid var(--pink);
  background:linear-gradient(135deg,#fff,rgba(242,155,189,.13));
}
.pc-story-content .pc-next-step{background:linear-gradient(140deg,#fff,rgba(48,79,254,.07))}
.pc-detail .pc-next{
  padding:clamp(36px,6vw,78px) max(5vw,calc((100vw - 1320px)/2));
  background:linear-gradient(110deg,rgba(48,79,254,.1),rgba(242,155,189,.2));
  color:#191a27;
}
.pc-detail .pc-next span{color:var(--blue);font-weight:700}
.pc-detail .pc-next strong{color:#191a27}
.pc-detail .pc-zoom{background:rgba(17,18,29,.94)}
.pc-detail :is(button,a,select):focus-visible{outline:2px solid var(--blue);outline-offset:3px}
.pc-story-content .pc-case-block{scroll-margin-top:96px}

@media (max-width:1000px){
  .pc-carousel-card{width:clamp(190px,29vw,280px);height:clamp(300px,43vw,410px)}
  .pc-carousel-card[data-offset="2"]{transform:translate(-50%,-50%) translateX(154%) rotateY(-12deg) scale(.66)}
  .pc-carousel-card[data-offset="-2"]{transform:translate(-50%,-50%) translateX(-154%) rotateY(12deg) scale(.66)}
  .pc-story-layout{grid-template-columns:170px minmax(0,1fr);gap:28px}
}
@media (max-width:850px){
  .pc-root .pc-hero{padding-top:44px}
  .pc-project-carousel{padding:0 42px 44px}
  .pc-carousel-stage{height:clamp(350px,58vw,470px)}
  .pc-carousel-card{width:clamp(185px,34vw,280px);height:clamp(290px,49vw,400px)}
  .pc-carousel-card[data-offset="2"],.pc-carousel-card[data-offset="-2"]{opacity:0;pointer-events:none}
  .pc-carousel-card[data-offset="1"]{transform:translate(-50%,-50%) translateX(93%) rotateY(-6deg) scale(.78)}
  .pc-carousel-card[data-offset="-1"]{transform:translate(-50%,-50%) translateX(-93%) rotateY(6deg) scale(.78)}
  .pc-carousel-arrow{width:40px;height:40px}
  .pc-detail .pc-top-row{flex-wrap:wrap}
  .pc-detail .pc-d-hero-grid{grid-template-columns:minmax(0,.9fr) minmax(0,1.1fr)}
  .pc-detail .pc-showcase{min-height:clamp(280px,48vw,390px)}
  .pc-story-layout{grid-template-columns:1fr;gap:14px;width:90%;padding-top:18px}
  .pc-story-sidebar{
    position:sticky;
    z-index:40;
    top:58px;
    display:grid;
    grid-template-columns:auto minmax(0,1fr);
    align-items:center;
    gap:10px;
    padding:8px 10px;
    border-radius:15px;
  }
  .pc-story-index-label{margin:0 0 0 4px;white-space:nowrap}
  .pc-story-sidebar .pc-secnav{flex-direction:row;gap:3px;overflow-x:auto;scrollbar-width:none}
  .pc-story-sidebar .pc-secnav::-webkit-scrollbar{display:none}
  .pc-story-sidebar .pc-secnav button{
    display:flex;
    flex:none;
    min-height:34px;
    padding:7px 10px;
    white-space:nowrap;
  }
  .pc-story-sidebar .pc-secnav button i{display:none}
  .pc-story-project-count{display:none}
}
@media (max-width:600px){
  .pc-root .pc-hero{padding:38px 5vw 12px}
  .pc-root .pc-hero-title{flex-wrap:wrap;gap:.12em;font-size:clamp(42px,11vw,62px)}
  .pc-root .pc-hero-foot p{font-size:13px}
  .pc-root .pc-filter-row{margin-top:18px}
  .pc-project-carousel{padding:0 28px 34px}
  .pc-carousel-stage{height:clamp(330px,104vw,440px)}
  .pc-carousel-card{width:clamp(205px,68vw,300px);height:clamp(310px,96vw,420px);border-radius:21px}
  .pc-carousel-card[data-offset="1"]{transform:translate(-50%,-50%) translateX(76%) rotateY(-5deg) scale(.73)}
  .pc-carousel-card[data-offset="-1"]{transform:translate(-50%,-50%) translateX(-76%) rotateY(5deg) scale(.73)}
  .pc-carousel-number{top:15px;right:15px;font-size:12px}
  .pc-carousel-copy{right:17px;bottom:20px;left:17px;gap:7px}
  .pc-carousel-copy strong{font-size:25px}
  .pc-carousel-copy small{font-size:9px}
  .pc-carousel-open{right:15px;bottom:14px;opacity:1;transform:none}
  .pc-carousel-arrow{top:43%;width:36px;height:36px}
  .pc-carousel-prev{left:0}
  .pc-carousel-next{right:0}
  .pc-carousel-footer{flex-direction:column;gap:12px;margin-top:8px}
  .pc-carousel-footer span i{display:none}
  .pc-detail .pc-top-row{justify-content:space-between;gap:6px;padding:9px 3vw}
  .pc-detail .pc-back{padding:8px 10px;font-size:10px}
  .pc-detail .pc-project-switch{gap:2px}
  .pc-detail .pc-project-switch>button{padding:7px 6px;font-size:9px}
  .pc-detail .pc-project-switch label{gap:2px;padding:0 3px}
  .pc-detail .pc-project-switch select{max-width:105px;font-size:9px}
  .pc-detail .pc-d-hero{padding:34px 5vw 0}
  .pc-detail .pc-d-hero-grid{grid-template-columns:1fr;gap:10px}
  .pc-detail .pc-d-intro{padding:0 0 8px}
  .pc-detail .pc-d-title{font-size:clamp(42px,12vw,66px)}
  .pc-detail .pc-d-lead{font-size:14px}
  .pc-detail .pc-showcase{min-height:clamp(260px,78vw,360px);margin:0 -4px}
  .pc-detail .pc-showcase-browser{transform:none}
  .pc-detail .pc-showcase-browser .pc-cover-image{height:clamp(210px,60vw,290px)}
  .pc-detail .pc-showcase-cover-card{left:0;top:3%;max-width:52%}
  .pc-detail .pc-showcase-phone{width:clamp(88px,25vw,125px)}
  .pc-detail .pc-showcase-caption{right:8px;bottom:-6px}
  .pc-detail .pc-meta-grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:12px;margin-top:10px;padding:14px 0 18px}
  .pc-detail .pc-meta-grid>div:last-child{grid-column:1/-1}
  .pc-story-layout{width:90%;padding-top:10px}
  .pc-story-sidebar{grid-template-columns:minmax(0,1fr);gap:5px;top:56px;padding:7px}
  .pc-story-index-label{display:none}
  .pc-story-sidebar .pc-secnav button{min-height:32px;padding:6px 9px;font-size:10px}
  .pc-story-content .pc-block,
  .pc-story-content .pc-final-section{padding:34px 0}
  .pc-story-content .pc-block-head{margin-bottom:18px}
  .pc-story-content .pc-block-head h2{font-size:32px}
  .pc-story-content .pc-kicker{font-size:11px}
  .pc-story-content .pc-big{font-size:18px}
  .pc-story-content .pc-two,
  .pc-story-content .pc-four,
  .pc-story-content .pc-steps{grid-template-columns:1fr}
  .pc-story-content .pc-three{grid-template-columns:1fr}
  .pc-story-content .pc-overview-intro{grid-template-columns:30px minmax(0,1fr);gap:10px;padding:16px}
  .pc-story-content .pc-overview-mark{width:30px;height:30px}
  .pc-story-content .pc-overview-mark svg{width:17px;height:17px}
  .pc-story-content .pc-overview-grid{grid-template-columns:1fr}
  .pc-story-content .pc-objective-strip{align-items:flex-start;flex-direction:column;gap:7px}
  .pc-story-content .pc-palette-strip{grid-template-columns:repeat(2,minmax(0,1fr))}
  .pc-story-content .pc-gal-wrap{margin-top:10px;padding:18px 13px;border-radius:18px}
  .pc-story-content .pc-gal.is-web{grid-template-columns:1fr}
  .pc-story-content .pc-gal.is-web .pc-gallery-screen:first-child{grid-column:auto;aspect-ratio:16/10}
  .pc-story-content .pc-gal.is-app .pc-gallery-screen{flex-basis:190px;width:190px;height:390px}
  .pc-detail .pc-next{align-items:flex-start;flex-wrap:wrap;gap:10px;padding:32px 5vw}
  .pc-detail .pc-next strong{font-size:32px;margin-left:0}
  .pc-detail .pc-next svg{width:28px;height:28px}
}
/* ---------- editorial case study sections ---------- */
.pc-story-content .pc-editorial-section{
  min-width:0;
  padding:clamp(34px,4.6vw,62px) 0;
  border-bottom:1px solid rgba(33,31,43,.1);
}
.pc-story-content .pc-editorial-heading{
  display:grid;
  grid-template-columns:42px minmax(0,1fr);
  gap:14px;
  align-items:start;
  margin-bottom:clamp(22px,3vw,34px);
}
.pc-editorial-heading>span{
  display:grid;
  place-items:center;
  width:36px;
  height:36px;
  border-radius:50%;
  background:rgba(48,79,254,.08);
  color:var(--blue);
  font-size:11px;
  font-weight:800;
}
.pc-editorial-heading h2{
  margin:0;
  color:#191a27;
  font-size:clamp(26px,3vw,40px);
  line-height:1.08;
  letter-spacing:-.05em;
}
.pc-editorial-heading p{
  margin:9px 0 0;
  color:#777681;
  font-size:13px;
  line-height:1.6;
}
.pc-editorial-section p{line-height:1.75}
.pc-editorial-lead{
  padding:clamp(22px,4vw,42px);
  border:1px solid rgba(48,79,254,.1);
  border-radius:24px;
  background:linear-gradient(120deg,rgba(48,79,254,.065),rgba(242,155,189,.11) 55%,#fff);
}
.pc-editorial-eyebrow{
  display:flex;
  align-items:center;
  gap:8px;
  color:var(--blue);
  font-size:10px;
  font-weight:800;
  letter-spacing:.12em;
  text-transform:uppercase;
}
.pc-editorial-lead>p{
  max-width:860px;
  margin:18px 0 0;
  color:#272733;
  font-size:clamp(20px,2.4vw,30px);
  line-height:1.5;
  letter-spacing:-.025em;
}
.pc-editorial-meta{
  display:grid;
  grid-template-columns:repeat(3,minmax(0,1fr));
  gap:18px;
  margin:18px 0;
  padding:20px 4px;
  border-bottom:1px solid rgba(33,31,43,.1);
}
.pc-editorial-meta>div{min-width:0}
.pc-editorial-meta span{
  display:block;
  margin-bottom:8px;
  color:#777681;
  font-size:9px;
  font-weight:800;
  letter-spacing:.12em;
  text-transform:uppercase;
}
.pc-editorial-meta strong{font-size:12px;line-height:1.65}
.pc-editorial-tools strong{display:block}
.pc-editorial-audience,.pc-editorial-persona{
  display:flex;
  align-items:flex-start;
  gap:16px;
  padding:22px;
  border:1px solid rgba(33,31,43,.08);
  border-radius:19px;
  background:#fff;
  box-shadow:0 12px 32px rgba(31,30,44,.04);
}
.pc-editorial-icon,.pc-editorial-persona-mark{
  display:grid;
  place-items:center;
  flex:none;
  width:42px;
  height:42px;
  border-radius:14px;
  background:rgba(242,155,189,.22);
  color:#30213a;
}
.pc-editorial-audience .pc-card-label,.pc-editorial-persona .pc-card-label{margin-bottom:5px}
.pc-editorial-audience p,.pc-editorial-persona p{margin:0;color:#292936;font-size:15px}
.pc-editorial-problem{
  position:relative;
  overflow:hidden;
  padding:clamp(26px,5vw,52px);
  border-radius:24px;
  background:#212139;
  color:#fff;
}
.pc-editorial-problem>span,.pc-editorial-insight>span,.pc-editorial-challenge>span,
.pc-editorial-validation>span+ p,.pc-editorial-feature>span{
  color:var(--pink);
  font-size:9px;
  font-weight:800;
  letter-spacing:.13em;
}
.pc-editorial-problem>p{
  position:relative;
  z-index:1;
  max-width:850px;
  margin:20px 0 0;
  font-size:clamp(22px,3vw,36px);
  line-height:1.48;
  letter-spacing:-.03em;
}
.pc-editorial-problem>i{
  position:absolute;
  top:-38px;
  right:22px;
  color:rgba(242,155,189,.14);
  font-family:Georgia,serif;
  font-size:220px;
  font-style:normal;
  line-height:1;
}
.pc-editorial-goals,.pc-editorial-features{display:grid;gap:10px}
.pc-editorial-goal,.pc-editorial-feature{
  display:grid;
  grid-template-columns:46px minmax(0,1fr) 20px;
  align-items:center;
  gap:16px;
  padding:19px 20px;
  border:1px solid rgba(33,31,43,.08);
  border-radius:17px;
  background:rgba(255,255,255,.82);
  transition:transform .22s ease,box-shadow .22s ease,border-color .22s ease;
}
.pc-editorial-goal:hover,.pc-editorial-feature:hover{
  transform:translateY(-2px);
  border-color:rgba(48,79,254,.2);
  box-shadow:0 14px 32px rgba(31,30,44,.07);
}
.pc-editorial-goal>span,.pc-editorial-feature>span{
  color:var(--blue);
  font-size:10px;
  font-weight:800;
  letter-spacing:.1em;
}
.pc-editorial-goal p,.pc-editorial-feature p{margin:0;color:#33323e;font-size:14px}
.pc-editorial-goal>svg,.pc-editorial-feature>svg{color:var(--pink)}
.pc-editorial-research{display:grid;grid-template-columns:minmax(0,.8fr) minmax(0,1.2fr);gap:16px}
.pc-editorial-research-note,.pc-editorial-insight,.pc-editorial-challenge{
  padding:22px;
  border:1px solid rgba(33,31,43,.08);
  border-radius:18px;
  background:#fff;
}
.pc-editorial-research-note{
  align-self:start;
  background:linear-gradient(145deg,rgba(48,79,254,.08),#fff 80%);
}
.pc-editorial-research-note p{margin:0;color:#2c2b38;font-size:15px}
.pc-editorial-insights,.pc-editorial-challenge-list{display:grid;gap:10px}
.pc-editorial-insight>span,.pc-editorial-challenge>span{color:var(--blue)}
.pc-editorial-insight h3,.pc-editorial-challenge h3{margin:10px 0 6px;font-size:16px;letter-spacing:-.02em}
.pc-editorial-insight p,.pc-editorial-challenge p{margin:0;color:#666570;font-size:13px}
.pc-editorial-persona small,.pc-editorial-journey small{
  display:block;
  margin-top:12px;
  color:#777681;
  font-size:11px;
  line-height:1.6;
}
.pc-editorial-journey{
  padding:24px;
  border:1px solid rgba(48,79,254,.12);
  border-radius:21px;
  background:linear-gradient(135deg,#fff,rgba(48,79,254,.045));
}
.pc-editorial-journey>p{margin:0;color:#292936;font-size:clamp(17px,2vw,22px)}
.pc-editorial-journey-goals{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px;margin-top:20px}
.pc-editorial-journey-goals>div{padding:14px;border-radius:13px;background:rgba(255,255,255,.85)}
.pc-editorial-journey-goals span{color:var(--pink);font-size:10px;font-weight:800}
.pc-editorial-journey-goals p{margin:7px 0 0;color:#44434e;font-size:12px}
.pc-editorial-wireframes{
  padding:24px;
  border:1px solid rgba(33,31,43,.08);
  border-radius:21px;
  background:linear-gradient(145deg,#fff,rgba(242,155,189,.09));
}
.pc-wireframe-copy>p{max-width:780px;margin:0;color:#2b2a36;font-size:clamp(17px,2vw,22px)}
.pc-method-tags{display:flex;flex-wrap:wrap;gap:8px;margin-top:16px}
.pc-method-tags span{padding:7px 11px;border:1px solid rgba(48,79,254,.15);border-radius:999px;background:#fff;color:#3f3e4a;font-size:10px;font-weight:700}
.pc-editorial-caption{margin:20px 0 0;color:#777681;font-size:11px}
.pc-editorial-process{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px;margin:0;padding:0;list-style:none}
.pc-editorial-process li{
  display:flex;
  align-items:flex-start;
  gap:15px;
  min-width:0;
  padding:20px;
  border:1px solid rgba(33,31,43,.08);
  border-radius:17px;
  background:#fff;
}
.pc-editorial-process li>span{color:var(--blue);font-size:10px;font-weight:800;letter-spacing:.1em}
.pc-editorial-process small,.pc-type-specimen small{display:block;color:#777681;font-size:9px;font-weight:800;letter-spacing:.12em;text-transform:uppercase}
.pc-editorial-process p{margin:8px 0 0;color:#353440;font-size:13px}
.pc-editorial-direction{
  margin:0 0 26px;
  padding:18px 21px;
  border-left:3px solid var(--pink);
  border-radius:0 14px 14px 0;
  background:rgba(242,155,189,.11);
  color:#302e3a;
  font-size:15px;
}
.pc-editorial-section .pc-sub{margin:28px 0 13px;font-size:15px}
.pc-editorial-section .pc-sub small{margin-left:8px;color:#777681;font-size:10px;font-weight:500}
.pc-editorial-section .pc-palette-strip{grid-template-columns:repeat(auto-fit,minmax(138px,1fr))}
.pc-editorial-section .pc-color-token{min-height:64px;background:#fff}
.pc-editorial-type{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px;margin-top:22px}
.pc-type-specimen{
  display:flex;
  align-items:center;
  gap:17px;
  min-width:0;
  padding:18px;
  border:1px solid rgba(33,31,43,.08);
  border-radius:16px;
  background:#fff;
}
.pc-type-specimen>span{color:#252434;font-size:48px;line-height:1;letter-spacing:-.07em}
.pc-type-specimen strong{display:block;overflow-wrap:anywhere;margin-top:6px;color:#292835;font-size:13px}
.pc-editorial-section .pc-principle-list{margin-top:12px}
.pc-editorial-screens{padding-left:clamp(16px,3vw,30px)!important;padding-right:clamp(16px,3vw,30px)!important;border:1px solid rgba(33,31,43,.08)!important;border-radius:24px;background:linear-gradient(145deg,#f3f2f8,#fdfbfd)!important}
.pc-editorial-screens .pc-editorial-heading{margin-top:4px}
.pc-editorial-screens .pc-gallery-switch{margin:0 0 15px}
.pc-editorial-screens .pc-gallery-switch button.is-active{background:var(--blue)}
.pc-editorial-screens .pc-gallery-more{margin-top:16px}
.pc-editorial-challenges{display:grid;grid-template-columns:minmax(0,1.15fr) minmax(240px,.85fr);gap:14px}
.pc-editorial-solution{
  align-self:stretch;
  padding:24px;
  border-radius:19px;
  background:linear-gradient(145deg,#24243e,#353552);
  color:#fff;
}
.pc-editorial-solution .pc-card-label{color:var(--pink)}
.pc-editorial-solution p{margin:0;font-size:clamp(18px,2vw,24px);line-height:1.6}
.pc-editorial-validation{
  display:flex;
  align-items:flex-start;
  gap:15px;
  padding:22px;
  border:1px solid rgba(48,79,254,.13);
  border-radius:18px;
  background:linear-gradient(120deg,rgba(48,79,254,.06),rgba(242,155,189,.11));
}
.pc-editorial-validation>span{
  display:grid;
  place-items:center;
  flex:none;
  width:36px;
  height:36px;
  border-radius:12px;
  background:var(--blue);
  color:#fff;
  font-size:19px;
}
.pc-editorial-validation p{margin:3px 0 0;color:#353440;font-size:14px}
.pc-editorial-outcome-card{
  padding:clamp(24px,4vw,38px);
  border:1px solid rgba(33,31,43,.08);
  border-radius:22px;
  background:#fff;
  box-shadow:0 16px 38px rgba(31,30,44,.05);
}
.pc-editorial-outcome-card>p{max-width:860px;margin:0;color:#262633;font-size:clamp(21px,2.7vw,34px);line-height:1.5;letter-spacing:-.025em}
.pc-editorial-outcome-card>div{margin-top:24px;padding-top:20px;border-top:1px solid rgba(33,31,43,.1)}
.pc-editorial-outcome-card>div>p{margin:0;color:#55545f;font-size:14px}
/* ---------- project-specific cover hero ---------- */
.pc-detail .pc-cover-hero{
  position:relative;
  isolation:isolate;
  overflow:hidden;
  padding:clamp(48px,7vw,94px) 5vw 0;
  background:
    radial-gradient(ellipse at 79% 38%,color-mix(in srgb,var(--accent) 18%,transparent),transparent 38%),
    linear-gradient(118deg,#faf9f6 8%,color-mix(in srgb,var(--accent) 10%,#faf9f6) 100%);
}
.pc-detail .pc-cover-hero::after{
  position:absolute;
  z-index:-1;
  top:4%;
  right:-8%;
  width:min(52vw,720px);
  aspect-ratio:1;
  border:1px solid color-mix(in srgb,var(--accent) 20%,transparent);
  border-radius:50%;
  box-shadow:0 0 0 34px color-mix(in srgb,var(--accent) 3%,transparent),0 0 0 82px color-mix(in srgb,var(--accent) 2%,transparent);
  content:"";
  pointer-events:none;
}
.pc-detail .pc-cover-hero .pc-d-inner{max-width:1320px}
.pc-detail .pc-cover-hero .pc-d-hero-grid{
  grid-template-columns:minmax(0,.84fr) minmax(0,1.16fr);
  gap:clamp(30px,5.5vw,82px);
  align-items:center;
}
.pc-detail .pc-cover-hero .pc-d-intro{padding:10px 0 30px}
.pc-detail .pc-cover-hero .pc-d-badges{gap:9px;margin-bottom:26px}
.pc-detail .pc-cover-hero .pc-d-badges span{
  min-height:32px;
  padding:7px 12px;
  border:1px solid color-mix(in srgb,var(--accent) 20%,#fff);
  background:rgba(255,255,255,.82);
  box-shadow:0 5px 18px rgba(31,30,44,.035);
  font-size:9px;
  letter-spacing:.1em;
}
.pc-detail .pc-cover-hero .pc-d-badges span:first-child{
  border-color:transparent;
  background:var(--blue);
  color:#fff;
}
.pc-detail .pc-cover-hero .pc-d-eyebrow{
  gap:9px;
  margin-bottom:16px;
  color:color-mix(in srgb,var(--accent) 72%,#272633);
  font-size:10px;
  font-weight:800;
  letter-spacing:.13em;
}
.pc-detail .pc-cover-hero .pc-d-eyebrow svg{flex:none}
.pc-detail .pc-cover-hero .pc-d-title{
  max-width:720px;
  color:#171827;
  font-family:'Bricolage Grotesque',Inter,sans-serif;
  font-size:clamp(54px,7.6vw,112px);
  font-weight:800;
  line-height:.9;
  letter-spacing:-.075em;
  text-wrap:balance;
}
.pc-detail .pc-cover-hero .pc-d-title.is-long{font-size:clamp(48px,6vw,88px)}
.pc-detail .pc-cover-hero .pc-d-lead{
  max-width:500px;
  margin:22px 0 0;
  color:#555560;
  font-size:clamp(15px,1.25vw,18px);
  line-height:1.75;
}
.pc-detail .pc-cover-hero .pc-d-actions{margin-top:28px}
.pc-detail .pc-cover-hero .pc-d-explore{
  min-height:50px;
  gap:24px;
  padding:0 20px;
  border:1px solid var(--blue);
  background:var(--blue);
  box-shadow:0 14px 30px rgba(48,79,254,.22);
  transition:transform .25s ease,box-shadow .25s ease,background .25s ease;
}
.pc-detail .pc-cover-hero .pc-d-explore:hover{
  transform:translateY(-3px);
  box-shadow:0 20px 36px rgba(48,79,254,.3);
}
.pc-detail .pc-cover-hero .pc-d-explore span{transition:transform .25s ease}
.pc-detail .pc-cover-hero .pc-d-explore:hover span{transform:translateY(3px)}
.pc-detail .pc-cover-hero .pc-showcase{
  min-height:clamp(360px,42vw,560px);
  margin:0;
  transition:transform .35s cubic-bezier(.2,.8,.2,1);
}
.pc-detail .pc-cover-hero .pc-showcase:hover{transform:translateY(-5px)}
.pc-detail .pc-cover-hero .pc-showcase-glow{opacity:.23;filter:blur(88px)}
.pc-detail .pc-cover-hero .pc-showcase-browser{
  max-width:680px;
  border-radius:22px;
  box-shadow:0 34px 78px rgba(31,30,44,.2),0 3px 8px rgba(31,30,44,.07);
  transform:rotate(1deg);
  transition:transform .35s cubic-bezier(.2,.8,.2,1),box-shadow .35s ease;
}
.pc-detail .pc-cover-hero .pc-showcase:hover .pc-showcase-browser{
  transform:rotate(0) translateY(-2px);
  box-shadow:0 40px 86px rgba(31,30,44,.22),0 3px 8px rgba(31,30,44,.07);
}
.pc-detail .pc-cover-hero .pc-showcase-browser .pc-cover-image{
  height:clamp(270px,34vw,440px);
  object-fit:cover;
  object-position:top center;
  transition:transform .5s cubic-bezier(.2,.8,.2,1);
}
.pc-detail .pc-cover-hero .pc-showcase-phone{
  width:clamp(112px,14vw,184px);
  border-radius:31px;
  box-shadow:0 30px 64px rgba(31,30,44,.22);
  transition:transform .35s cubic-bezier(.2,.8,.2,1),box-shadow .35s ease;
}
.pc-detail .pc-cover-hero .pc-showcase:hover .pc-showcase-phone-1{transform:translateY(10px) rotate(-9deg)}
.pc-detail .pc-cover-hero .pc-showcase:hover .pc-showcase-phone-2{transform:translateY(-20px) scale(1.025)}
.pc-detail .pc-cover-hero .pc-showcase:hover .pc-showcase-phone-3{transform:translateY(10px) rotate(9deg)}
.pc-detail .pc-cover-hero .pc-showcase-cover-card{
  top:7%;
  left:-3%;
  max-width:min(250px,52%);
  padding:9px 14px 9px 9px;
  border-color:rgba(255,255,255,.95);
  box-shadow:0 16px 36px rgba(31,30,44,.16);
  transition:transform .3s ease;
}
.pc-detail .pc-cover-hero .pc-showcase:hover .pc-showcase-cover-card{transform:rotate(-1deg) translateY(-3px)}
.pc-detail .pc-cover-hero .pc-showcase-cover-card img{width:50px;height:42px}
.pc-detail .pc-cover-hero .pc-showcase-cover-card span{font-size:9px}
.pc-detail .pc-cover-hero .pc-showcase-caption{
  right:4px;
  bottom:-5px;
  gap:10px;
  color:#53525e;
  font-size:9px;
  letter-spacing:.14em;
}
.pc-detail .pc-cover-hero .pc-meta-grid{
  grid-template-columns:minmax(0,.72fr) minmax(0,.82fr) minmax(0,1.46fr);
  gap:clamp(16px,3vw,42px);
  margin-top:16px;
  padding:23px 0 28px;
  border-color:rgba(33,31,43,.14);
}
.pc-detail .pc-cover-hero .pc-meta-grid dt{
  margin-bottom:8px;
  color:#777681;
  font-size:9px;
  letter-spacing:.13em;
}
.pc-detail .pc-cover-hero .pc-meta-grid dd{color:#292835;font-size:12px;line-height:1.65}
@media (max-width:850px){
  .pc-detail .pc-cover-hero{padding-top:48px}
  .pc-detail .pc-cover-hero .pc-d-hero-grid{
    grid-template-columns:minmax(0,.94fr) minmax(0,1.06fr);
    gap:24px;
  }
  .pc-detail .pc-cover-hero .pc-d-title{font-size:clamp(48px,7.5vw,72px)}
  .pc-detail .pc-cover-hero .pc-d-title.is-long{font-size:clamp(42px,6.3vw,64px)}
  .pc-detail .pc-cover-hero .pc-showcase{min-height:clamp(300px,48vw,420px)}
  .pc-detail .pc-cover-hero .pc-showcase-browser .pc-cover-image{height:clamp(230px,34vw,310px)}
  .pc-detail .pc-cover-hero .pc-showcase-phone{width:clamp(92px,15vw,128px)}
}
@media (max-width:650px){
  .pc-detail .pc-cover-hero{
    padding:38px 5vw 0;
    background:
      radial-gradient(ellipse at 80% 47%,color-mix(in srgb,var(--accent) 15%,transparent),transparent 44%),
      linear-gradient(155deg,#faf9f6 12%,color-mix(in srgb,var(--accent) 9%,#faf9f6) 100%);
  }
  .pc-detail .pc-cover-hero::after{top:26%;right:-30%;width:90vw}
  .pc-detail .pc-cover-hero .pc-d-hero-grid{grid-template-columns:1fr;gap:4px}
  .pc-detail .pc-cover-hero .pc-d-intro{padding:0 0 8px}
  .pc-detail .pc-cover-hero .pc-d-badges{margin-bottom:18px}
  .pc-detail .pc-cover-hero .pc-d-eyebrow{margin-bottom:12px;font-size:9px}
  .pc-detail .pc-cover-hero .pc-d-title{font-size:clamp(44px,12.5vw,72px);line-height:.94}
  .pc-detail .pc-cover-hero .pc-d-title.is-long{font-size:clamp(38px,11vw,60px)}
  .pc-detail .pc-cover-hero .pc-d-lead{max-width:36em;margin-top:14px;font-size:14px;line-height:1.7}
  .pc-detail .pc-cover-hero .pc-d-actions{margin-top:19px}
  .pc-detail .pc-cover-hero .pc-d-explore{min-height:46px;font-size:12px}
  .pc-detail .pc-cover-hero .pc-showcase{
    min-height:clamp(280px,84vw,390px);
    margin:0 -4px;
  }
  .pc-detail .pc-cover-hero .pc-showcase-browser{transform:none}
  .pc-detail .pc-cover-hero .pc-showcase-browser .pc-cover-image{height:clamp(220px,62vw,300px)}
  .pc-detail .pc-cover-hero .pc-showcase-phone{width:clamp(88px,25vw,128px)}
  .pc-detail .pc-cover-hero .pc-showcase-cover-card{left:0;top:3%;max-width:55%}
  .pc-detail .pc-cover-hero .pc-showcase-caption{right:7px;bottom:-2px}
  .pc-detail .pc-cover-hero .pc-meta-grid{
    grid-template-columns:repeat(2,minmax(0,1fr));
    gap:14px;
    margin-top:8px;
    padding:17px 0 21px;
  }
  .pc-detail .pc-cover-hero .pc-meta-grid>div:last-child{grid-column:1/-1}
}
@media (max-width:850px){
  .pc-editorial-research,.pc-editorial-challenges{grid-template-columns:1fr}
}
@media (max-width:600px){
  .pc-story-content .pc-editorial-section{padding:32px 0}
  .pc-story-content .pc-editorial-heading{grid-template-columns:32px minmax(0,1fr);gap:10px}
  .pc-editorial-heading>span{width:29px;height:29px;font-size:9px}
  .pc-editorial-heading h2{font-size:27px}
  .pc-editorial-heading p{font-size:11px}
  .pc-editorial-lead{padding:20px;border-radius:19px}
  .pc-editorial-lead>p{font-size:20px}
  .pc-editorial-meta{grid-template-columns:1fr 1fr;gap:14px}
  .pc-editorial-tools{grid-column:1/-1}
  .pc-editorial-audience,.pc-editorial-persona{gap:12px;padding:17px}
  .pc-editorial-problem{padding:24px}
  .pc-editorial-problem>p{font-size:22px}
  .pc-editorial-goal,.pc-editorial-feature{grid-template-columns:32px minmax(0,1fr) 16px;gap:10px;padding:15px}
  .pc-editorial-goal p,.pc-editorial-feature p{font-size:12px}
  .pc-editorial-journey,.pc-editorial-wireframes{padding:18px}
  .pc-editorial-journey-goals{grid-template-columns:1fr}
  .pc-editorial-process{grid-template-columns:1fr}
  .pc-editorial-type{grid-template-columns:1fr}
  .pc-editorial-screens{padding-left:12px!important;padding-right:12px!important;border-radius:18px}
  .pc-editorial-validation{padding:17px}
  .pc-editorial-validation p{font-size:12px}
  .pc-editorial-outcome-card{padding:20px}
}
@media (prefers-reduced-motion:reduce){
  .pc-carousel-card,.pc-carousel-card img,.pc-carousel-arrow,.pc-carousel-dots button,
  .pc-carousel-open,.pc-story-sidebar .pc-secnav button,
  .pc-editorial-goal,.pc-editorial-feature{transition:none}
  .pc-detail .pc-cover-hero .pc-showcase,
  .pc-detail .pc-cover-hero .pc-showcase-browser,
  .pc-detail .pc-cover-hero .pc-showcase-phone,
  .pc-detail .pc-cover-hero .pc-showcase-cover-card,
  .pc-detail .pc-cover-hero .pc-d-explore,
  .pc-detail .pc-cover-hero .pc-d-explore span{animation:none;transition:none}
}

/* ---------- final portfolio direction: white canvas + teal highlights ---------- */
.pc-root{
  --paper:#ffffff;
  --blue:#304ffe;
  --pink:#f29bbd;
  --teal:#eaf8f7;
  --teal-strong:#d8f1ef;
  background:#fff !important;
}
.pc-root,.pc-detail{background:#fff !important}
.pc-detail .pc-cover-hero{
  background:
    radial-gradient(ellipse at 78% 38%,rgba(216,241,239,.78),transparent 42%),
    radial-gradient(ellipse at 10% 92%,rgba(242,155,189,.10),transparent 34%),
    #fff;
}
.pc-detail .pc-cover-hero::after{
  border-color:rgba(48,79,254,.12);
  box-shadow:0 0 0 34px rgba(216,241,239,.34),0 0 0 82px rgba(48,79,254,.025);
}
.pc-detail .pc-top{background:rgba(255,255,255,.94)}
.pc-story-layout{background:#fff}
.pc-story-sidebar{
  top:88px;
  max-height:calc(100vh - 108px);
  overflow-y:auto;
  background:rgba(255,255,255,.9);
  border-color:rgba(48,79,254,.12);
  box-shadow:0 16px 42px rgba(31,30,44,.055);
  scrollbar-width:thin;
}
.pc-editorial-lead,
.pc-editorial-research-note,
.pc-editorial-journey,
.pc-editorial-wireframes,
.pc-editorial-validation{
  background:linear-gradient(135deg,#fff 0%,var(--teal) 100%);
}
.pc-editorial-audience,.pc-editorial-persona,.pc-editorial-insight,
.pc-editorial-challenge,.pc-editorial-outcome-card{
  background:#fff;
  border-color:rgba(48,79,254,.10);
}
.pc-editorial-icon,.pc-editorial-persona-mark{
  background:linear-gradient(145deg,var(--teal-strong),rgba(242,155,189,.2));
  color:var(--blue);
}
.pc-editorial-pair{
  display:grid;
  grid-template-columns:minmax(0,1fr) minmax(0,1fr);
  gap:clamp(20px,3vw,38px);
  align-items:stretch;
}
.pc-editorial-pair-item{
  min-width:0;
  padding:clamp(28px,3.2vw,42px) 0 !important;
}
.pc-editorial-pair-item .pc-editorial-heading{
  grid-template-columns:34px minmax(0,1fr);
  gap:10px;
}
.pc-editorial-pair-item .pc-editorial-heading>span{
  width:30px;height:30px;
  background:var(--teal-strong);
  color:var(--blue);
}
.pc-editorial-pair-item .pc-editorial-heading h2{font-size:clamp(22px,2.1vw,30px)}
.pc-editorial-pair-item .pc-editorial-heading p{font-size:11px}
.pc-editorial-problem{
  min-height:100%;
  padding:clamp(22px,3vw,34px);
  border:1px solid rgba(48,79,254,.10);
  background:linear-gradient(145deg,#f0faf9,#e6f5f4);
  color:#202633;
}
.pc-editorial-problem>span{color:var(--blue)}
.pc-editorial-problem>p{font-size:clamp(18px,2vw,25px);color:#242b38}
.pc-editorial-problem>i{color:rgba(48,79,254,.10)}
.pc-editorial-pair-item .pc-editorial-goals{gap:9px}
.pc-editorial-pair-item .pc-editorial-goal{
  grid-template-columns:30px minmax(0,1fr) 16px;
  gap:9px;
  padding:13px 14px;
  background:#fff;
  border-color:rgba(48,79,254,.10);
}
.pc-editorial-pair-item .pc-editorial-goal p{font-size:12px}
.pc-editorial-journey-goals{position:relative;gap:12px}
.pc-editorial-journey-goals>div{
  position:relative;
  border:1px solid rgba(48,79,254,.09);
  background:linear-gradient(145deg,#fff,var(--teal));
}
.pc-editorial-journey-goals span{
  display:grid;place-items:center;
  width:25px;height:25px;
  border-radius:50%;
  background:var(--blue);
  color:#fff;
}
.pc-editorial-process li{border-color:rgba(48,79,254,.10);background:linear-gradient(145deg,#fff,var(--teal))}
.pc-editorial-screens{
  background:linear-gradient(145deg,#f5fbfa,#fff 72%) !important;
  border-color:rgba(48,79,254,.10) !important;
}
.pc-editorial-solution{background:linear-gradient(145deg,#283a62,#304ffe)}
.pc-editorial-validation>span{background:var(--teal-strong);color:var(--blue)}
.pc-editorial-outcome-card{background:linear-gradient(145deg,#fff,var(--teal))}
@media(max-width:850px){
  .pc-editorial-pair{grid-template-columns:1fr;gap:0}
  .pc-editorial-pair-item{padding:30px 0 !important}
  .pc-story-sidebar{max-height:none;overflow:visible}
}
@media(max-width:600px){
  .pc-editorial-pair{display:block}
  .pc-editorial-pair-item .pc-editorial-heading h2{font-size:25px}
  .pc-story-sidebar{top:56px}
}

/* ---------- compact, project-aware case study system ---------- */
.pc-detail{--paper:#fff;background:#fff!important;color:var(--project-dark,#252530)}
.pc-detail .pc-top{background:rgba(255,255,255,.94);border-color:color-mix(in srgb,var(--project-primary) 15%,#fff)}
.pc-detail .pc-read b{background:var(--project-primary)}
.pc-detail .pc-back:hover,.pc-detail .pc-gallery-switch button.is-active,.pc-detail .pc-d-explore{background:var(--project-primary);border-color:var(--project-primary)}
.pc-detail .pc-story-sidebar{border-color:color-mix(in srgb,var(--project-primary) 18%,#fff)}
.pc-detail .pc-story-index-label,.pc-detail .pc-editorial-eyebrow,.pc-detail .pc-editorial-goal>span,.pc-detail .pc-editorial-feature>span,.pc-detail .pc-editorial-insight>span,.pc-detail .pc-editorial-challenge>span,.pc-detail .pc-editorial-process li>span,.pc-detail .pc-principle-list b{color:var(--project-primary)}
.pc-detail .pc-story-sidebar .pc-secnav button.is-active{background:color-mix(in srgb,var(--project-primary) 10%,#fff);color:var(--project-primary)}
.pc-detail .pc-story-sidebar .pc-secnav button.is-active i{background:var(--project-primary);border-color:var(--project-primary)}
.pc-detail .pc-editorial-heading>span{background:color-mix(in srgb,var(--project-primary) 13%,#fff);color:var(--project-primary)}
.pc-detail .pc-editorial-heading h2{font-size:clamp(20px,1.8vw,26px);color:var(--project-dark);letter-spacing:-.035em}
.pc-detail .pc-editorial-heading p{font-size:11px;margin-top:5px}
.pc-detail .pc-editorial-lead,.pc-detail .pc-editorial-research-note,.pc-detail .pc-editorial-journey,.pc-detail .pc-editorial-wireframes,.pc-detail .pc-editorial-validation,.pc-detail .pc-editorial-outcome-card{background:linear-gradient(135deg,#fff,color-mix(in srgb,var(--project-primary) 8%,#fff));border-color:color-mix(in srgb,var(--project-primary) 18%,#fff)}
.pc-detail .pc-editorial-audience,.pc-detail .pc-editorial-persona,.pc-detail .pc-editorial-insight,.pc-detail .pc-editorial-challenge,.pc-detail .pc-editorial-goal,.pc-detail .pc-editorial-feature,.pc-detail .pc-editorial-process li,.pc-detail .pc-type-specimen,.pc-detail .pc-color-token{border-color:color-mix(in srgb,var(--project-primary) 14%,#fff)}
.pc-detail .pc-editorial-icon,.pc-detail .pc-editorial-persona-mark{background:color-mix(in srgb,var(--project-secondary) 18%,#fff);color:var(--project-primary)}
.pc-detail .pc-editorial-problem{background:linear-gradient(135deg,var(--project-dark),color-mix(in srgb,var(--project-primary) 48%,var(--project-dark)))}
.pc-detail .pc-editorial-problem>span,.pc-detail .pc-editorial-solution .pc-card-label{color:color-mix(in srgb,var(--project-secondary) 70%,#fff)}
.pc-detail .pc-editorial-solution{background:linear-gradient(145deg,var(--project-dark),var(--project-primary))}
.pc-detail .pc-editorial-solution p{color:#fff}
.pc-detail .pc-editorial-direction{border-left-color:var(--project-secondary);background:color-mix(in srgb,var(--project-primary) 9%,#fff)}
.pc-detail .pc-editorial-screens{background:linear-gradient(145deg,color-mix(in srgb,var(--project-primary) 7%,#fff),#fff 72%)!important;border-color:color-mix(in srgb,var(--project-primary) 17%,#fff)!important}
.pc-detail .pc-color-token:hover{border-color:var(--project-primary)}
.pc-detail .pc-next{background:linear-gradient(125deg,#fff,color-mix(in srgb,var(--project-primary) 13%,#fff))}

/* Compact spacing; all existing case-study sections and screen assets remain in place. */
.pc-story-layout{grid-template-columns:minmax(156px,184px) minmax(0,1fr);gap:clamp(20px,3vw,42px);width:min(1280px,92%);padding:22px 0 54px}
.pc-story-sidebar{padding:13px 10px 10px;border-radius:16px}
.pc-story-index-label{margin:0 8px 8px}
.pc-story-sidebar .pc-secnav{gap:2px}
.pc-story-sidebar .pc-secnav button{min-height:32px;padding:6px 8px;font-size:10px;gap:7px}
.pc-story-project-count{margin:10px 8px 0;padding-top:9px}
.pc-story-content .pc-editorial-section{padding:22px 0}
.pc-story-content .pc-editorial-heading{grid-template-columns:30px minmax(0,1fr);gap:9px;margin-bottom:14px}
.pc-story-content .pc-editorial-heading>span{width:27px;height:27px;font-size:9px}
.pc-story-content .pc-editorial-heading h2{font-size:clamp(19px,1.8vw,25px)}
.pc-story-content .pc-editorial-heading p{font-size:10px;line-height:1.45}
.pc-detail .pc-editorial-section p{line-height:1.6}
.pc-detail .pc-editorial-lead{padding:19px;border-radius:16px}
.pc-detail .pc-editorial-lead>p{margin-top:10px;font-size:clamp(17px,1.8vw,22px);line-height:1.45}
.pc-detail .pc-editorial-meta{gap:12px;margin:10px 0;padding:12px 3px}
.pc-detail .pc-editorial-audience,.pc-detail .pc-editorial-persona{padding:14px;border-radius:14px;gap:11px}
.pc-detail .pc-editorial-icon,.pc-detail .pc-editorial-persona-mark{width:34px;height:34px;border-radius:10px}
.pc-detail .pc-editorial-audience p,.pc-detail .pc-editorial-persona p{font-size:12px}
.pc-detail .pc-editorial-problem{padding:19px;border-radius:16px}
.pc-detail .pc-editorial-problem>p{margin-top:10px;font-size:clamp(17px,1.8vw,22px);line-height:1.45}
.pc-detail .pc-editorial-goal,.pc-detail .pc-editorial-feature{grid-template-columns:30px minmax(0,1fr) 15px;gap:9px;padding:11px 12px;border-radius:12px}
.pc-detail .pc-editorial-goal p,.pc-detail .pc-editorial-feature p{font-size:11px}
.pc-detail .pc-editorial-research{gap:10px}
.pc-detail .pc-editorial-research-note,.pc-detail .pc-editorial-insight,.pc-detail .pc-editorial-challenge{padding:14px;border-radius:13px}
.pc-detail .pc-editorial-insight h3,.pc-detail .pc-editorial-challenge h3{margin:6px 0 4px;font-size:13px}
.pc-detail .pc-editorial-insight p,.pc-detail .pc-editorial-challenge p{font-size:11px}
.pc-detail .pc-editorial-journey,.pc-detail .pc-editorial-wireframes{padding:15px;border-radius:15px}
.pc-detail .pc-editorial-journey>p,.pc-detail .pc-wireframe-copy>p{font-size:15px}
.pc-detail .pc-editorial-journey-goals{gap:8px;margin-top:12px}
.pc-detail .pc-editorial-journey-goals>div{padding:10px}
.pc-detail .pc-editorial-process{gap:8px}
.pc-detail .pc-editorial-process li{padding:13px;border-radius:12px;gap:10px}
.pc-detail .pc-editorial-process p{margin-top:5px;font-size:11px}
.pc-detail .pc-editorial-section .pc-sub{margin:16px 0 9px;font-size:13px}
.pc-detail .pc-editorial-type{gap:8px;margin-top:12px}
.pc-detail .pc-type-specimen{padding:12px;border-radius:12px;gap:10px}
.pc-detail .pc-type-specimen>span{font-size:36px}
.pc-detail .pc-principle-list span{padding:7px 9px;font-size:10px}
.pc-detail .pc-editorial-screens{padding:16px!important;border-radius:17px}
.pc-detail .pc-editorial-screens .pc-gallery-switch{margin-bottom:10px}
.pc-detail .pc-gallery-screen{padding:8px}
.pc-detail .pc-editorial-challenges{gap:9px}
.pc-detail .pc-editorial-solution{padding:16px;border-radius:14px}
.pc-detail .pc-editorial-solution p{font-size:15px}
.pc-detail .pc-editorial-validation{padding:14px;border-radius:13px}
.pc-detail .pc-editorial-outcome-card{padding:18px;border-radius:16px}
.pc-detail .pc-editorial-outcome-card>p{font-size:clamp(17px,1.8vw,23px);line-height:1.45}
.pc-detail .pc-editorial-outcome-card>div{margin-top:14px;padding-top:12px}
.pc-detail .pc-next{padding:26px 5vw}
.pc-detail .pc-next strong{font-size:clamp(27px,4vw,48px)}
@media(max-width:850px){
 .pc-story-layout{grid-template-columns:1fr;width:min(100% - 28px,760px);gap:12px;padding-top:12px}
 .pc-story-sidebar{position:sticky;top:58px;z-index:20;padding:8px 10px;border-radius:13px}
 .pc-story-index-label,.pc-story-project-count{display:none}
 .pc-story-sidebar .pc-secnav{flex-direction:row;overflow-x:auto;gap:4px;scrollbar-width:none}
 .pc-story-sidebar .pc-secnav button{display:flex;flex:none;min-height:30px;white-space:nowrap;padding:6px 9px}
 .pc-story-sidebar .pc-secnav button i{display:none}
 .pc-story-content .pc-editorial-section{padding:18px 0}
}
@media(max-width:600px){
 .pc-story-layout{width:calc(100% - 24px);padding-bottom:34px}
 .pc-story-content .pc-editorial-heading h2{font-size:20px}
 .pc-detail .pc-editorial-meta{grid-template-columns:1fr 1fr}
 .pc-detail .pc-editorial-process,.pc-detail .pc-editorial-type{grid-template-columns:1fr}
 .pc-detail .pc-editorial-challenges{grid-template-columns:1fr}
 .pc-detail .pc-editorial-screens{padding:12px!important}
 .pc-detail .pc-palette-strip{grid-template-columns:repeat(2,minmax(0,1fr))}
}

/* ---------- project-specific card personalities + responsive hero stack ---------- */
.pc-detail{
  --project-radius:18px;
  --project-card-shadow:0 12px 28px color-mix(in srgb,var(--project-dark) 9%,transparent);
  --project-dark-contrast:#fff;
}
.pc-detail .pc-editorial-problem,
.pc-detail .pc-editorial-solution,
.pc-detail .pc-editorial-outcome-card,
.pc-detail .pc-editorial-research-note,
.pc-detail .pc-editorial-insight,
.pc-detail .pc-editorial-feature,
.pc-detail .pc-editorial-goal,
.pc-detail .pc-editorial-persona,
.pc-detail .pc-editorial-journey,
.pc-detail .pc-editorial-validation,
.pc-detail .pc-type-specimen,
.pc-detail .pc-color-token{
  border-radius:var(--project-radius);
  transition:transform .24s ease,box-shadow .24s ease,border-color .24s ease,background .24s ease;
}
.pc-detail .pc-editorial-insight:hover,
.pc-detail .pc-editorial-feature:hover,
.pc-detail .pc-editorial-goal:hover,
.pc-detail .pc-color-token:hover,
.pc-detail .pc-type-specimen:hover{
  transform:translateY(-3px);
  box-shadow:var(--project-card-shadow);
}
.pc-detail .pc-editorial-problem{
  color:#fff;
  border:1px solid color-mix(in srgb,var(--project-secondary) 34%,var(--project-dark));
  background:linear-gradient(145deg,var(--project-dark),color-mix(in srgb,var(--project-dark) 78%,var(--project-primary)));
  box-shadow:0 18px 34px color-mix(in srgb,var(--project-dark) 18%,transparent);
}
.pc-detail .pc-editorial-problem>span{color:color-mix(in srgb,var(--project-secondary) 65%,#fff)}
.pc-detail .pc-editorial-problem>p{color:#fff}
.pc-detail .pc-editorial-problem>i{color:rgba(255,255,255,.12)}
.pc-detail .pc-editorial-solution{
  border:1px solid color-mix(in srgb,var(--project-secondary) 30%,var(--project-dark));
  background:linear-gradient(145deg,var(--project-dark),color-mix(in srgb,var(--project-dark) 68%,var(--project-primary)));
  box-shadow:0 18px 34px color-mix(in srgb,var(--project-dark) 15%,transparent);
}
.pc-detail .pc-editorial-solution p{color:#fff}
.pc-detail .pc-editorial-goal{
  position:relative;
  border:1px solid color-mix(in srgb,var(--project-primary) 18%,#fff);
  box-shadow:0 6px 16px color-mix(in srgb,var(--project-dark) 4%,transparent);
}
.pc-detail .pc-editorial-feature{background:linear-gradient(135deg,#fff,color-mix(in srgb,var(--project-primary) 7%,#fff))}
.pc-detail .pc-editorial-feature:nth-child(odd){border-left:3px solid var(--project-primary)}
.pc-detail .pc-editorial-feature:nth-child(even){background:var(--project-dark);border-color:var(--project-dark)}
.pc-detail .pc-editorial-feature:nth-child(even) h3,
.pc-detail .pc-editorial-feature:nth-child(even) p{color:#fff}
.pc-detail .pc-editorial-feature:nth-child(even)>span{color:color-mix(in srgb,var(--project-secondary) 60%,#fff)}
.pc-detail .pc-editorial-feature:nth-child(even)>svg{color:color-mix(in srgb,var(--project-secondary) 70%,#fff)}
.pc-detail .pc-editorial-insight{background:linear-gradient(145deg,#fff,color-mix(in srgb,var(--project-primary) 7%,#fff))}
.pc-detail .pc-editorial-insight:nth-child(3n){background:var(--project-dark);border-color:var(--project-dark)}
.pc-detail .pc-editorial-insight:nth-child(3n) h3,
.pc-detail .pc-editorial-insight:nth-child(3n) p{color:#fff}
.pc-detail .pc-editorial-insight:nth-child(3n)>span{color:color-mix(in srgb,var(--project-secondary) 70%,#fff)}
.pc-detail .pc-editorial-outcome-card{background:linear-gradient(135deg,var(--project-dark),color-mix(in srgb,var(--project-dark) 72%,var(--project-primary)));color:#fff;border-color:color-mix(in srgb,var(--project-primary) 35%,var(--project-dark))}
.pc-detail .pc-editorial-outcome-card>p,
.pc-detail .pc-editorial-outcome-card strong,
.pc-detail .pc-editorial-outcome-card span{color:#fff}
.pc-detail .pc-editorial-outcome-card small{color:rgba(255,255,255,.76)}
.pc-detail .pc-editorial-journey-goals>div{border-color:color-mix(in srgb,var(--project-primary) 20%,#fff);background:linear-gradient(145deg,#fff,color-mix(in srgb,var(--project-primary) 8%,#fff))}
.pc-detail .pc-editorial-journey-goals>div:nth-child(even){background:color-mix(in srgb,var(--project-primary) 9%,#fff)}
.pc-detail .pc-editorial-process li{border-left:3px solid var(--project-primary);box-shadow:0 8px 18px color-mix(in srgb,var(--project-dark) 5%,transparent)}
.pc-detail .pc-editorial-persona{background:linear-gradient(115deg,color-mix(in srgb,var(--project-primary) 10%,#fff),#fff 70%);box-shadow:var(--project-card-shadow)}
.pc-detail .pc-editorial-audience{background:linear-gradient(145deg,var(--project-dark),color-mix(in srgb,var(--project-dark) 72%,var(--project-primary)))}
.pc-detail .pc-editorial-audience p,.pc-detail .pc-editorial-audience .pc-card-label{color:#fff}
.pc-detail .pc-editorial-screens{background:linear-gradient(145deg,color-mix(in srgb,var(--project-primary) 6%,#fff),#fff 74%)!important}
.pc-detail .pc-gallery-screen{border-color:color-mix(in srgb,var(--project-dark) 13%,#fff);box-shadow:0 12px 28px color-mix(in srgb,var(--project-dark) 9%,transparent)}
.pc-detail .pc-gallery-screen:hover{border-color:var(--project-primary);box-shadow:0 20px 38px color-mix(in srgb,var(--project-dark) 15%,transparent)}

/* The layered hero contains the main preview plus three original-content cards. */
.pc-detail .pc-showcase{overflow:visible!important;isolation:isolate;}
.pc-detail .pc-showcase-browser,
.pc-detail .pc-showcase-hybrid,
.pc-detail .pc-showcase-phones{position:relative;z-index:2;}
.pc-showcase-floats{position:absolute;inset:0;z-index:5;pointer-events:none;}
.pc-showcase-float{
  position:absolute;display:flex;flex-direction:column;gap:7px;overflow:hidden;
  width:clamp(138px,15vw,190px);padding:12px;
  border:1px solid color-mix(in srgb,var(--project-primary) 24%,#fff);
  border-radius:16px;background:rgba(255,255,255,.96);
  box-shadow:0 16px 34px color-mix(in srgb,var(--project-dark) 16%,transparent);
  backdrop-filter:blur(14px);pointer-events:auto;
  transition:transform .28s ease,box-shadow .28s ease;
}
.pc-showcase-float:hover{transform:translateY(-5px) rotate(0deg)!important;box-shadow:0 22px 40px color-mix(in srgb,var(--project-dark) 22%,transparent)}
.pc-showcase-float-kicker{font-size:8px;font-weight:800;letter-spacing:.13em;color:var(--project-primary)}
.pc-showcase-float strong{font-size:12px;line-height:1.25;color:var(--project-dark)}
.pc-showcase-float p{display:-webkit-box;overflow:hidden;margin:0;color:#666875;font-size:9px;line-height:1.45;-webkit-line-clamp:3;-webkit-box-orient:vertical}
.pc-showcase-float img{display:block;width:100%;height:58px;object-fit:cover;object-position:top;border-radius:9px;background:var(--project-soft)}
.pc-showcase-float-feature{top:-12px;right:-14px;transform:rotate(3deg)}
.pc-showcase-float-highlight{bottom:10px;left:-18px;width:clamp(145px,16vw,205px);min-height:116px;justify-content:center;background:linear-gradient(145deg,var(--project-dark),color-mix(in srgb,var(--project-dark) 72%,var(--project-primary)));border-color:color-mix(in srgb,var(--project-secondary) 35%,var(--project-dark));transform:rotate(-3deg)}
.pc-showcase-float-highlight .pc-showcase-float-kicker{color:color-mix(in srgb,var(--project-secondary) 65%,#fff)}
.pc-showcase-float-highlight strong,.pc-showcase-float-highlight p{color:#fff}
.pc-showcase-float-highlight i{position:absolute;right:10px;bottom:5px;color:color-mix(in srgb,var(--project-secondary) 65%,#fff);font-size:22px;font-style:normal;opacity:.8}
.pc-showcase-float-mini{right:-12px;bottom:-10px;width:clamp(112px,12vw,150px);padding:8px;transform:rotate(4deg)}
.pc-showcase-float-mini img{height:66px}
.pc-showcase-float-mini span{display:flex;justify-content:space-between;gap:5px;color:#656570;font-size:7px;font-weight:800;letter-spacing:.08em}
.pc-showcase-float-mini b{color:var(--project-primary)}

/* Each project gets a distinct composition; all colours still come from its own palette. */
.pc-project-oscorm .pc-showcase-float-feature{width:clamp(150px,16vw,205px);border-radius:20px;border-top:3px solid var(--project-primary)}
.pc-project-oscorm .pc-showcase-float-highlight{left:-24px;border-radius:22px 22px 22px 7px}
.pc-project-oscorm .pc-editorial-insight:nth-child(odd){transform:translateY(5px)}
.pc-project-wedding .pc-showcase-float-feature{top:-18px;right:-5px;width:clamp(145px,15vw,185px);border-radius:6px 18px 18px 18px;transform:rotate(2deg)}
.pc-project-wedding .pc-showcase-float-highlight{left:-8px;bottom:0;background:linear-gradient(145deg,var(--project-dark),color-mix(in srgb,var(--project-dark) 80%,var(--project-secondary)));border-radius:6px 22px 22px 22px}
.pc-project-wedding .pc-editorial-goal:nth-child(odd){transform:translateX(5px)}
.pc-project-school .pc-showcase-float-feature{top:-8px;right:-18px;width:clamp(132px,14vw,170px);border-radius:12px 24px 12px 12px}
.pc-project-school .pc-showcase-float-highlight{left:-10px;bottom:18px;width:clamp(150px,15vw,185px);border-radius:12px 12px 24px 12px}
.pc-project-school .pc-editorial-goal{border-left:4px solid var(--project-primary);border-radius:8px 15px 15px 8px}
.pc-project-service .pc-showcase-float-feature{top:-16px;right:-7px;transform:rotate(1deg);border-radius:20px 20px 7px 20px}
.pc-project-service .pc-showcase-float-highlight{left:-18px;bottom:4px;min-height:105px;border-radius:20px 7px 20px 20px}
.pc-project-service .pc-editorial-feature:nth-child(even){background:color-mix(in srgb,var(--project-primary) 12%,#fff);border-color:color-mix(in srgb,var(--project-primary) 22%,#fff)}
.pc-project-service .pc-editorial-feature:nth-child(even) h3,.pc-project-service .pc-editorial-feature:nth-child(even) p{color:var(--project-dark)}
.pc-project-job .pc-showcase-float-feature{top:-8px;right:-14px;width:clamp(145px,15vw,185px);border-radius:14px}
.pc-project-job .pc-showcase-float-highlight{left:-14px;bottom:12px;border-radius:14px;background:linear-gradient(145deg,var(--project-dark),color-mix(in srgb,var(--project-dark) 70%,var(--project-primary)))}
.pc-project-job .pc-editorial-goal{border-radius:10px 18px 18px 10px;border-left:4px solid var(--project-primary)}
.pc-project-freshgro .pc-showcase-float-feature{top:-10px;right:-18px;border-radius:24px 24px 8px 24px}
.pc-project-freshgro .pc-showcase-float-highlight{left:-12px;bottom:8px;border-radius:24px 8px 24px 24px;background:linear-gradient(145deg,var(--project-dark),color-mix(in srgb,var(--project-dark) 75%,var(--project-primary)))}
.pc-project-freshgro .pc-editorial-feature{border-radius:22px 22px 8px 22px}
.pc-project-freshgro .pc-editorial-insight:nth-child(3n){border-radius:22px 8px 22px 22px}
.pc-project-metro-buddy .pc-showcase-float-feature{top:-15px;right:-8px;border-radius:9px;border-style:dashed}
.pc-project-metro-buddy .pc-showcase-float-highlight{left:-16px;bottom:8px;border-radius:9px;border-style:dashed}
.pc-project-metro-buddy .pc-editorial-goal{border-style:dashed;border-radius:10px}
.pc-project-mylocalplace .pc-showcase-float-feature{top:-8px;right:-14px;width:clamp(145px,15vw,185px);border-radius:18px 18px 5px 18px}
.pc-project-mylocalplace .pc-showcase-float-highlight{left:-14px;bottom:2px;border-radius:18px 5px 18px 18px}
.pc-project-mylocalplace .pc-editorial-insight:nth-child(3n){background:linear-gradient(145deg,var(--project-dark),color-mix(in srgb,var(--project-dark) 70%,var(--project-secondary)))}
.pc-project-easyskytrip .pc-showcase-float-feature{top:-18px;right:-14px;border-radius:18px 18px 5px 18px}
.pc-project-easyskytrip .pc-showcase-float-highlight{left:-16px;bottom:0;border-radius:18px 5px 18px 18px}
.pc-project-easyskytrip .pc-showcase-float-mini{right:-16px;bottom:-15px;width:clamp(116px,12vw,152px)}
.pc-project-easyskytrip .pc-editorial-journey-goals>div{border-radius:8px 16px 16px 8px}

@media(min-width:1200px){
  .pc-detail .pc-d-hero-grid{grid-template-columns:minmax(0,.78fr) minmax(0,1.22fr);gap:clamp(32px,4vw,62px)}
  .pc-detail .pc-showcase{min-height:clamp(360px,34vw,470px);margin:8px 12px 20px 0}
  .pc-detail .pc-showcase-browser{width:92%;}
  .pc-detail .pc-showcase-hybrid{width:90%}
  .pc-detail .pc-showcase-floats{inset:0 -10px 0 0}
}
@media(min-width:768px) and (max-width:1199px){
  .pc-detail .pc-d-hero-grid{grid-template-columns:minmax(0,.85fr) minmax(0,1.15fr);gap:22px}
  .pc-detail .pc-showcase{min-height:clamp(300px,34vw,390px);margin:8px 6px 18px 0;padding:10px}
  .pc-showcase-float{width:clamp(112px,15vw,150px);padding:9px;border-radius:13px}
  .pc-showcase-float-feature{top:-8px;right:-7px}
  .pc-showcase-float-highlight{left:-7px;bottom:12px;width:clamp(125px,16vw,165px);min-height:96px}
  .pc-showcase-float-mini{right:-7px;bottom:-7px;width:clamp(96px,12vw,125px)}
  .pc-showcase-float img{height:44px}
  .pc-showcase-float p{-webkit-line-clamp:2}
}
@media(max-width:767px){
  .pc-detail .pc-d-hero{padding-bottom:16px}
  .pc-detail .pc-d-hero-grid{grid-template-columns:minmax(0,1fr);gap:8px}
  .pc-detail .pc-d-intro{order:0;padding:0 0 6px}
  .pc-detail .pc-showcase{order:1;display:flex;flex-direction:column;align-items:stretch;justify-content:flex-start;gap:12px;min-height:0;height:auto;margin:0;padding:12px;overflow:visible!important;border-radius:20px}
  .pc-detail .pc-showcase-browser,.pc-detail .pc-showcase-hybrid{width:100%;max-width:none;margin:0}
  .pc-detail .pc-showcase-browser img{height:clamp(180px,54vw,270px);object-fit:contain}
  .pc-detail .pc-showcase-hybrid img{max-height:280px}
  .pc-detail .pc-showcase-phones{min-height:0;height:auto;padding:8px 0 12px;gap:8px}
  .pc-detail .pc-showcase-phone{width:clamp(74px,24vw,116px);max-height:250px}
  .pc-detail .pc-showcase-floats{position:relative;inset:auto;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:9px;width:100%;margin:0}
  .pc-detail .pc-showcase-float,
  .pc-detail .pc-showcase-float-feature,
  .pc-detail .pc-showcase-float-highlight,
  .pc-detail .pc-showcase-float-mini{position:relative;inset:auto;width:auto;min-width:0;min-height:0;transform:none!important;padding:10px;border-radius:14px}
  .pc-detail .pc-showcase-float-feature{grid-column:1/-1;display:grid;grid-template-columns:minmax(0,1fr) 88px;align-items:center;gap:8px}
  .pc-detail .pc-showcase-float-feature .pc-showcase-float-kicker{grid-column:1/-1}
  .pc-detail .pc-showcase-float-feature img{grid-column:2;grid-row:2/4;height:70px}
  .pc-detail .pc-showcase-float-copy{grid-column:1;grid-row:2/4;min-width:0}
  .pc-detail .pc-showcase-float-highlight{grid-column:1;background:linear-gradient(145deg,var(--project-dark),color-mix(in srgb,var(--project-dark) 72%,var(--project-primary)))}
  .pc-detail .pc-showcase-float-mini{grid-column:2}
  .pc-detail .pc-showcase-float-mini img{height:64px}
  .pc-detail .pc-showcase-cover-card{top:9px;left:9px;z-index:7;max-width:42%}
  .pc-detail .pc-showcase-caption{position:relative;right:auto;bottom:auto;align-self:flex-end;margin-top:0}
}
@media(max-width:420px){
  .pc-detail .pc-showcase-float{padding:9px}
  .pc-detail .pc-showcase-float strong{font-size:11px}
  .pc-detail .pc-showcase-float p{font-size:8px}
  .pc-detail .pc-showcase-float-feature{grid-template-columns:minmax(0,1fr) 72px}
  .pc-detail .pc-showcase-float-feature img{height:58px}
}
@media(prefers-reduced-motion:reduce){
  .pc-detail .pc-editorial-insight,.pc-detail .pc-editorial-feature,.pc-detail .pc-editorial-goal,.pc-detail .pc-color-token,.pc-detail .pc-type-specimen,.pc-showcase-float{transition:none!important}
  .pc-detail .pc-editorial-insight:hover,.pc-detail .pc-editorial-feature:hover,.pc-detail .pc-editorial-goal:hover,.pc-detail .pc-color-token:hover,.pc-detail .pc-type-specimen:hover,.pc-showcase-float:hover{transform:none!important}
}


/* ---------- reference-inspired editorial case-study art direction ---------- */
/* The layout borrows the reference's presentation-board feel: crisp white canvas,
   compact editorial headers, coloured feature panels and image-led modules.
   Every colour is pulled from the active project's own theme variables. */
.pc-detail .pc-story-content .pc-editorial-section{
  position:relative;
  isolation:isolate;
  padding:clamp(25px,3vw,42px) clamp(14px,2vw,24px);
  margin:0 0 14px;
  overflow:hidden;
  border:1px solid color-mix(in srgb,var(--project-primary) 12%,#e9e9ed);
  border-radius:18px;
  background:#fff;
  box-shadow:0 8px 24px rgba(24,28,38,.035);
}
.pc-detail .pc-story-content .pc-editorial-section:after{
  content:"";position:absolute;z-index:-1;right:-48px;top:-58px;width:150px;height:150px;
  border:22px solid color-mix(in srgb,var(--project-primary) 7%,transparent);
  border-radius:50%;pointer-events:none;
}
.pc-detail .pc-editorial-heading{
  grid-template-columns:34px minmax(0,1fr);gap:11px;
  margin-bottom:20px;position:relative;z-index:1;
}
.pc-detail .pc-editorial-heading>span{
  width:30px;height:30px;border-radius:8px;
  color:#fff;background:var(--project-primary);
  font-size:10px;box-shadow:0 5px 12px color-mix(in srgb,var(--project-primary) 20%,transparent);
}
.pc-detail .pc-editorial-heading h2{
  font-size:clamp(19px,2vw,25px);line-height:1.15;letter-spacing:-.035em;
  color:var(--project-dark);font-weight:800;
}
.pc-detail .pc-editorial-heading p{margin-top:5px;font-size:11px;line-height:1.5;color:#85858d}
.pc-detail .pc-editorial-section p{line-height:1.58}
.pc-detail .pc-editorial-overview{
  display:grid;grid-template-columns:minmax(0,1.2fr) minmax(220px,.8fr);
  gap:12px;align-items:stretch;
}
.pc-detail .pc-editorial-lead{
  min-height:150px;padding:22px;border:0;border-radius:14px 14px 14px 5px;
  background:linear-gradient(130deg,color-mix(in srgb,var(--project-primary) 12%,#fff),#fff 76%);
}
.pc-detail .pc-editorial-lead>p{margin-top:12px;font-size:clamp(15px,1.6vw,19px);line-height:1.5;font-weight:650;color:var(--project-dark)}
.pc-detail .pc-editorial-eyebrow{color:var(--project-primary)}
.pc-detail .pc-editorial-meta{display:grid;grid-template-columns:1fr 1fr;gap:8px}
.pc-detail .pc-editorial-meta>div{
  padding:13px 14px;border:1px solid #ececf0;border-radius:12px;background:#fff;
}
.pc-detail .pc-editorial-meta>div:last-child{grid-column:1/-1}
.pc-detail .pc-editorial-meta span,.pc-detail .pc-editorial-audience .pc-card-label{font-size:9px;letter-spacing:.09em;text-transform:uppercase;color:#92929a}
.pc-detail .pc-editorial-meta strong{display:block;margin-top:5px;font-size:11px;line-height:1.45;color:var(--project-dark)}
.pc-detail .pc-editorial-audience{
  grid-column:1/-1;display:flex;gap:12px;align-items:center;padding:13px 16px;
  border-radius:12px;background:var(--project-dark);color:#fff;
}
.pc-detail .pc-editorial-audience .pc-editorial-icon{display:grid;place-items:center;width:36px;height:36px;flex:none;border-radius:10px;background:color-mix(in srgb,var(--project-primary) 45%,#fff 8%);color:#fff}
.pc-detail .pc-editorial-audience .pc-card-label{color:color-mix(in srgb,var(--project-secondary) 45%,#fff)}
.pc-detail .pc-editorial-audience p{margin:3px 0 0;color:#fff;font-size:12px}
.pc-detail .pc-editorial-pair{display:grid;grid-template-columns:1fr 1fr;gap:14px;align-items:stretch}
.pc-detail .pc-editorial-pair-item{min-width:0}
.pc-detail #pc-sec-problem .pc-editorial-problem{
  position:relative;min-height:170px;display:flex;flex-direction:column;justify-content:center;
  padding:24px;border:0;border-radius:14px 14px 5px 14px;
  background:linear-gradient(135deg,var(--project-dark),color-mix(in srgb,var(--project-dark) 78%,var(--project-primary)));
  box-shadow:0 12px 25px color-mix(in srgb,var(--project-dark) 13%,transparent);overflow:hidden;
}
.pc-detail #pc-sec-problem .pc-editorial-problem>span{color:color-mix(in srgb,var(--project-secondary) 60%,#fff);font-size:9px;font-weight:800;letter-spacing:.15em}
.pc-detail #pc-sec-problem .pc-editorial-problem p{position:relative;z-index:1;margin:12px 0 0;max-width:540px;color:#fff;font-size:15px;font-weight:600;line-height:1.55}
.pc-detail #pc-sec-problem .pc-editorial-problem i{right:15px;bottom:-38px;color:color-mix(in srgb,var(--project-primary) 55%,#fff);font-size:150px;opacity:.18}
.pc-detail .pc-editorial-goals{display:grid;grid-template-columns:1fr 1fr;gap:8px}
.pc-detail .pc-editorial-goal{min-height:82px;display:grid;grid-template-columns:28px 1fr 14px;gap:8px;align-items:start;padding:12px;border-radius:12px;border:1px solid color-mix(in srgb,var(--project-primary) 16%,#e9e9ed);background:color-mix(in srgb,var(--project-soft) 52%,#fff);transition:transform .22s ease,border-color .22s ease}
.pc-detail .pc-editorial-goal>span{display:grid;place-items:center;width:25px;height:25px;border-radius:7px;background:var(--project-primary);color:#fff;font-size:9px;font-weight:800}
.pc-detail .pc-editorial-goal p{margin:2px 0 0;font-size:11px;font-weight:600;line-height:1.45;color:var(--project-dark)}
.pc-detail .pc-editorial-goal svg{width:12px;height:12px;color:var(--project-primary)}
.pc-detail .pc-editorial-research{display:grid;grid-template-columns:.75fr 1.25fr;gap:12px}
.pc-detail .pc-editorial-research-note{padding:18px;border-radius:13px;background:var(--project-primary);color:#fff}
.pc-detail .pc-editorial-research-note .pc-card-label{color:rgba(255,255,255,.75)}
.pc-detail .pc-editorial-research-note p{margin:9px 0 0;color:#fff;font-size:13px;font-weight:650}
.pc-detail .pc-editorial-insights{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}
.pc-detail .pc-editorial-insight{padding:14px;border-radius:12px;border:1px solid #ededf0;background:#fff;box-shadow:0 5px 13px rgba(20,24,35,.035)}
.pc-detail .pc-editorial-insight>span{color:var(--project-primary);font-size:8px;font-weight:850;letter-spacing:.13em}
.pc-detail .pc-editorial-insight h3{margin:7px 0 4px;color:var(--project-dark);font-size:13px}
.pc-detail .pc-editorial-insight p{margin:0;color:#72727b;font-size:10px}
.pc-detail .pc-editorial-persona,.pc-detail .pc-editorial-journey,.pc-detail .pc-editorial-wireframes,
.pc-detail .pc-editorial-design,.pc-detail .pc-editorial-outcome-card{
  border-radius:14px;border:1px solid color-mix(in srgb,var(--project-primary) 14%,#e8e8ed);background:#fff;padding:18px;
}
.pc-detail .pc-editorial-persona{display:flex;gap:14px;align-items:center;background:linear-gradient(110deg,color-mix(in srgb,var(--project-primary) 10%,#fff),#fff 65%)}
.pc-detail .pc-editorial-persona-mark{width:48px;height:48px;display:grid;place-items:center;flex:none;border-radius:14px;background:var(--project-dark);color:#fff}
.pc-detail .pc-persona-copy p{margin:5px 0;color:var(--project-dark);font-size:14px;font-weight:650}
.pc-detail .pc-persona-copy small,.pc-detail .pc-editorial-caption{color:#85858d;font-size:10px}
.pc-detail .pc-editorial-journey-goals{gap:8px}
.pc-detail .pc-editorial-journey-goals>div{padding:12px;border:1px solid color-mix(in srgb,var(--project-primary) 18%,#eee);background:color-mix(in srgb,var(--project-soft) 65%,#fff);border-radius:10px}
.pc-detail .pc-editorial-journey-goals>div>span{color:var(--project-primary);font-weight:850;font-size:10px}
.pc-detail .pc-editorial-journey-goals p{margin:4px 0 0;font-size:11px;color:var(--project-dark)}
.pc-detail .pc-editorial-process{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:8px}
.pc-detail .pc-editorial-process li{padding:14px;border-radius:12px;background:var(--project-soft);border:1px solid color-mix(in srgb,var(--project-primary) 13%,#eee)}
.pc-detail .pc-editorial-process li>span{color:var(--project-primary);font-size:19px;font-weight:850}
.pc-detail .pc-editorial-process li small{display:block;margin:6px 0;color:var(--project-dark);font-size:9px;font-weight:850;text-transform:uppercase}
.pc-detail .pc-editorial-process li p{margin:0;font-size:10px;color:#696a73}
.pc-detail .pc-editorial-design{background:linear-gradient(140deg,#fff,color-mix(in srgb,var(--project-soft) 65%,#fff))}
.pc-detail .pc-editorial-screens{background:#fff}
.pc-detail .pc-editorial-screens .pc-gal{padding:12px;border-radius:14px;background:color-mix(in srgb,var(--project-soft) 55%,#f7f7f8);border:1px solid color-mix(in srgb,var(--project-primary) 13%,#eee)}
.pc-detail .pc-gallery-screen{border:1px solid #e7e7eb;border-radius:11px;background:#fff;box-shadow:0 7px 18px rgba(20,24,35,.08)}
.pc-detail .pc-gallery-browser-bar{background:#f7f7f8;border-bottom:1px solid #e7e7eb}
.pc-detail .pc-editorial-features{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:9px}
.pc-detail .pc-editorial-feature{min-height:105px;padding:16px;border:1px solid color-mix(in srgb,var(--project-primary) 17%,#e9e9ed);border-radius:13px;background:#fff}
.pc-detail .pc-editorial-feature:nth-child(3n+1){background:var(--project-dark);border-color:var(--project-dark)}
.pc-detail .pc-editorial-feature:nth-child(3n+1) h3,.pc-detail .pc-editorial-feature:nth-child(3n+1) p{color:#fff}
.pc-detail .pc-editorial-feature:nth-child(3n+1)>span,.pc-detail .pc-editorial-feature:nth-child(3n+1)>svg{color:color-mix(in srgb,var(--project-secondary) 55%,#fff)}
.pc-detail .pc-editorial-challenges{gap:10px}
.pc-detail .pc-editorial-challenge{padding:13px;border-radius:11px;background:var(--project-soft);border:1px solid color-mix(in srgb,var(--project-primary) 13%,#eee)}
.pc-detail .pc-editorial-solution{padding:18px;border-radius:13px;background:var(--project-dark)}
.pc-detail .pc-editorial-solution .pc-card-label{color:color-mix(in srgb,var(--project-secondary) 50%,#fff)}
.pc-detail .pc-editorial-solution p{color:#fff}
.pc-detail .pc-editorial-validation{padding:17px;border-radius:12px;background:color-mix(in srgb,var(--project-primary) 9%,#fff);border:1px solid color-mix(in srgb,var(--project-primary) 18%,#eee)}
.pc-detail .pc-editorial-outcome-card{background:linear-gradient(130deg,var(--project-dark),color-mix(in srgb,var(--project-dark) 78%,var(--project-primary)));border:0;box-shadow:0 12px 25px color-mix(in srgb,var(--project-dark) 15%,transparent)}
.pc-detail .pc-editorial-outcome-card .pc-card-label{color:color-mix(in srgb,var(--project-secondary) 55%,#fff)}
.pc-detail .pc-editorial-outcome-card>p,.pc-detail .pc-editorial-outcome-card>div>p{color:#fff}
.pc-detail .pc-editorial-outcome-card>div{border-top:1px solid rgba(255,255,255,.2)}
.pc-detail .pc-editorial-section .pc-sub{color:var(--project-dark)}
.pc-detail .pc-color-token{border-radius:10px;overflow:hidden}
.pc-detail .pc-color-token>span{height:52px}
.pc-detail .pc-type-specimen{border-radius:12px;border-color:color-mix(in srgb,var(--project-primary) 15%,#eee)}
.pc-detail .pc-story-content .pc-editorial-section:hover{border-color:color-mix(in srgb,var(--project-primary) 25%,#e8e8ed)}
@media(max-width:900px){
 .pc-detail .pc-editorial-overview{grid-template-columns:1fr}
 .pc-detail .pc-editorial-pair{grid-template-columns:1fr}
 .pc-detail .pc-editorial-research{grid-template-columns:1fr}
 .pc-detail .pc-editorial-process{grid-template-columns:repeat(2,minmax(0,1fr))}
}
@media(max-width:600px){
 .pc-detail .pc-story-content .pc-editorial-section{padding:20px 13px;margin-bottom:10px;border-radius:14px}
 .pc-detail .pc-editorial-heading{margin-bottom:15px}
 .pc-detail .pc-editorial-heading h2{font-size:19px}
 .pc-detail .pc-editorial-heading p{font-size:10px}
 .pc-detail .pc-editorial-goals,.pc-detail .pc-editorial-insights,.pc-detail .pc-editorial-features{grid-template-columns:1fr}
 .pc-detail .pc-editorial-process{grid-template-columns:1fr 1fr}
 .pc-detail .pc-editorial-meta{grid-template-columns:1fr 1fr}
 .pc-detail .pc-editorial-lead{padding:17px}
 .pc-detail .pc-editorial-problem{padding:18px!important}
}

/* ---------- editorial magazine-card redesign ---------- */
.pc-detail .pc-story-content{min-width:0}
.pc-detail .pc-story-content .pc-editorial-section{position:relative;isolation:isolate;margin:0 0 22px;padding:clamp(20px,2.4vw,30px);border:1px solid color-mix(in srgb,var(--project-primary) 15%,#e9e9ed);border-radius:20px;background:#fff;box-shadow:0 10px 28px rgba(25,25,40,.035);overflow:hidden}
.pc-detail .pc-story-content .pc-editorial-section::after{content:"";position:absolute;z-index:-1;right:-45px;top:-55px;width:150px;height:150px;border:1px solid color-mix(in srgb,var(--project-primary) 13%,transparent);border-radius:50%;box-shadow:0 0 0 18px color-mix(in srgb,var(--project-primary) 3%,transparent),0 0 0 38px color-mix(in srgb,var(--project-secondary) 4%,transparent);pointer-events:none}
.pc-detail .pc-editorial-heading{position:relative;z-index:1;grid-template-columns:34px minmax(0,1fr);gap:11px;margin-bottom:18px}
.pc-detail .pc-editorial-heading>span{width:30px;height:30px;border-radius:9px;background:var(--project-primary);color:#fff;font-size:9px}
.pc-detail .pc-editorial-heading h2{font-size:clamp(19px,1.7vw,25px);line-height:1.12;letter-spacing:-.04em}
.pc-detail .pc-editorial-heading p{margin-top:5px;font-size:11px}
.pc-detail .pc-editorial-overview-grid{display:grid;grid-template-columns:minmax(0,1.02fr) minmax(280px,.98fr);gap:14px;align-items:stretch}
.pc-detail .pc-editorial-overview-copy{display:flex;flex-direction:column;gap:10px;min-width:0}
.pc-detail .pc-editorial-lead{padding:20px;border-radius:15px;background:color-mix(in srgb,var(--project-primary) 7%,#fff)}
.pc-detail .pc-editorial-lead>p{margin-top:11px;font-size:clamp(16px,1.45vw,21px);line-height:1.5}
.pc-detail .pc-editorial-meta{margin:0;padding:13px 4px;gap:10px}
.pc-detail .pc-editorial-meta span{margin-bottom:5px;font-size:8px}
.pc-detail .pc-editorial-meta strong{font-size:11px}
.pc-detail .pc-editorial-audience{padding:14px;border-radius:14px;box-shadow:none}
.pc-detail .pc-editorial-audience p{font-size:12px;line-height:1.55}
.pc-detail .pc-editorial-overview-visual{position:relative;isolation:isolate;display:flex;flex-direction:column;justify-content:flex-end;min-width:0;min-height:330px;margin:0;padding:13px;border-radius:16px;background:var(--project-dark);overflow:hidden}
.pc-detail .pc-editorial-overview-visual>img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:top center;opacity:.92}
.pc-detail .pc-editorial-overview-visual::after{content:"";position:absolute;inset:35% 0 0;background:linear-gradient(transparent,rgba(0,0,0,.72));z-index:1}
.pc-detail .pc-overview-visual-kicker{position:absolute;z-index:2;top:13px;left:13px;padding:7px 9px;border:1px solid rgba(255,255,255,.4);border-radius:99px;background:rgba(20,20,25,.35);color:#fff;font-size:8px;font-weight:800;letter-spacing:.12em}
.pc-detail .pc-editorial-overview-visual figcaption{position:relative;z-index:2;display:flex;align-items:center;gap:9px;padding:11px 12px;border:1px solid rgba(255,255,255,.2);border-radius:11px;background:rgba(20,20,25,.38);backdrop-filter:blur(12px);color:#fff;font-size:12px}
.pc-detail .pc-editorial-overview-visual figcaption b{color:var(--project-secondary)}
.pc-detail .pc-editorial-overview-visual figcaption i{margin-left:auto;font-style:normal}
.pc-detail .pc-overview-visual-shape{position:absolute;z-index:0;right:-35px;bottom:-60px;width:170px;height:170px;border:24px solid color-mix(in srgb,var(--project-secondary) 70%,transparent);border-radius:50%;opacity:.45}
.pc-detail .pc-editorial-pair{display:grid;grid-template-columns:minmax(0,.92fr) minmax(0,1.08fr);gap:16px;align-items:stretch;margin:0 0 22px}
.pc-detail .pc-editorial-pair-item{margin:0!important;height:100%}
.pc-detail #pc-sec-problem .pc-editorial-problem{min-height:210px;padding:24px;border-radius:15px}
.pc-detail #pc-sec-problem .pc-editorial-problem p{font-size:clamp(17px,1.7vw,24px);line-height:1.45}
.pc-detail .pc-editorial-goals{grid-template-columns:repeat(2,minmax(0,1fr));gap:9px}
.pc-detail .pc-editorial-goal{position:relative;display:flex;flex-direction:column;align-items:flex-start;justify-content:space-between;min-height:116px;padding:14px;border-radius:14px}
.pc-detail .pc-editorial-goal:nth-child(2n){background:var(--project-dark);border-color:var(--project-dark)}
.pc-detail .pc-editorial-goal:nth-child(2n) p,.pc-detail .pc-editorial-goal:nth-child(2n)>svg{color:#fff}
.pc-detail .pc-editorial-goal:nth-child(2n)>span{color:var(--project-secondary)}
.pc-detail .pc-editorial-goal p{font-size:12px;line-height:1.5}
.pc-detail .pc-editorial-research{grid-template-columns:minmax(0,.72fr) minmax(0,1.28fr);gap:10px}
.pc-detail .pc-editorial-research-note,.pc-detail .pc-editorial-insight,.pc-detail .pc-editorial-challenge{padding:16px;border-radius:14px}
.pc-detail .pc-editorial-insights{grid-template-columns:repeat(2,minmax(0,1fr));gap:9px}
.pc-detail .pc-editorial-insight:nth-child(3n){background:var(--project-dark);border-color:var(--project-dark)}
.pc-detail .pc-editorial-insight:nth-child(3n) h3,.pc-detail .pc-editorial-insight:nth-child(3n) p{color:#fff}
.pc-detail .pc-editorial-persona{padding:18px;border-radius:15px}
.pc-detail .pc-editorial-journey{padding:18px;border-radius:15px}
.pc-detail .pc-editorial-journey-goals{position:relative;grid-template-columns:repeat(3,minmax(0,1fr));gap:9px}
.pc-detail .pc-editorial-journey-goals>div{position:relative;border:1px solid color-mix(in srgb,var(--project-primary) 16%,#fff);border-radius:12px}
.pc-detail .pc-editorial-journey-goals>div:nth-child(2n){background:var(--project-dark)}
.pc-detail .pc-editorial-journey-goals>div:nth-child(2n) p{color:#fff}
.pc-detail .pc-editorial-journey-goals>div:nth-child(2n) span{color:var(--project-secondary)}
.pc-detail .pc-editorial-wireframes,.pc-detail .pc-editorial-process li{border-radius:14px}
.pc-detail .pc-editorial-process{gap:9px}
.pc-detail .pc-editorial-process li{padding:15px}
.pc-detail .pc-editorial-process li:nth-child(2n){background:var(--project-dark);border-color:var(--project-dark)}
.pc-detail .pc-editorial-process li:nth-child(2n) p,.pc-detail .pc-editorial-process li:nth-child(2n) small{color:#fff}
.pc-detail .pc-editorial-process li:nth-child(2n)>span{color:var(--project-secondary)}
.pc-detail .pc-editorial-design{display:grid;grid-template-columns:1fr;gap:10px}
.pc-detail .pc-editorial-direction{margin:0;padding:15px 18px;border-radius:0 12px 12px 0;font-size:13px}
.pc-detail .pc-editorial-section .pc-sub{margin:15px 0 9px;font-size:13px}
.pc-detail .pc-editorial-section .pc-palette-strip{gap:8px}
.pc-detail .pc-editorial-section .pc-color-token{padding:8px;border-radius:12px}
.pc-detail .pc-editorial-section .pc-color-token>span{height:43px;border-radius:8px}
.pc-detail .pc-editorial-type{gap:9px;margin-top:12px}
.pc-detail .pc-type-specimen{padding:14px;border-radius:13px}
.pc-detail .pc-type-specimen>span{font-size:38px}
.pc-detail .pc-editorial-screens{padding:20px!important}
.pc-detail .pc-gal{gap:13px}
.pc-detail .pc-gallery-screen{border-radius:13px;box-shadow:0 12px 28px rgba(20,20,30,.1)}
.pc-detail .pc-gallery-screen img{object-fit:contain}
.pc-detail .pc-editorial-features{grid-template-columns:repeat(2,minmax(0,1fr));gap:9px}
.pc-detail .pc-editorial-feature{min-height:112px;padding:15px;border-radius:14px}
.pc-detail .pc-editorial-feature:nth-child(4n+1){grid-column:span 2;background:var(--project-dark);border-color:var(--project-dark)}
.pc-detail .pc-editorial-feature:nth-child(4n+1) h3,.pc-detail .pc-editorial-feature:nth-child(4n+1) p,.pc-detail .pc-editorial-feature:nth-child(4n+1)>svg{color:#fff}
.pc-detail .pc-editorial-feature:nth-child(4n+1)>span{color:var(--project-secondary)}
.pc-detail .pc-editorial-challenges{gap:10px}
.pc-detail .pc-editorial-challenge-list{grid-template-columns:repeat(2,minmax(0,1fr));gap:9px}
.pc-detail .pc-editorial-solution{padding:19px;border-radius:14px}
.pc-detail .pc-editorial-solution p{font-size:16px;line-height:1.5}
.pc-detail .pc-editorial-validation{padding:16px;border-radius:14px}
.pc-detail .pc-editorial-outcome-card{padding:22px;border-radius:16px}
.pc-detail .pc-editorial-outcome-card>p{font-size:clamp(18px,2vw,27px)}
@media(max-width:1050px){.pc-detail .pc-editorial-overview-grid{grid-template-columns:1fr 1fr}.pc-detail .pc-editorial-overview-visual{min-height:290px}.pc-detail .pc-editorial-pair{grid-template-columns:1fr}}
@media(max-width:760px){
 .pc-detail .pc-story-content .pc-editorial-section{padding:17px;margin-bottom:13px;border-radius:16px}
 .pc-detail .pc-editorial-pair{margin-bottom:13px}
 .pc-detail .pc-editorial-overview-grid{grid-template-columns:1fr}.pc-detail .pc-editorial-overview-visual{min-height:240px}
 .pc-detail .pc-editorial-meta{grid-template-columns:1fr 1fr}.pc-detail .pc-editorial-meta .pc-editorial-tools{grid-column:span 2}
 .pc-detail .pc-editorial-journey-goals{grid-template-columns:1fr}.pc-detail .pc-editorial-insights,.pc-detail .pc-editorial-challenge-list{grid-template-columns:1fr}
 .pc-detail .pc-editorial-features{grid-template-columns:1fr}.pc-detail .pc-editorial-feature:nth-child(4n+1){grid-column:auto}
 .pc-detail .pc-editorial-type{grid-template-columns:1fr}.pc-detail .pc-editorial-process{grid-template-columns:1fr}.pc-detail .pc-editorial-goals{grid-template-columns:1fr 1fr}
}
@media(max-width:420px){.pc-detail .pc-editorial-goals{grid-template-columns:1fr}.pc-detail .pc-editorial-meta{grid-template-columns:1fr}.pc-detail .pc-editorial-meta .pc-editorial-tools{grid-column:auto}}


/* Final interaction and card refinements requested */
.pc-detail .pc-editorial-goal,
.pc-detail .pc-editorial-feature {
  grid-template-columns: 30px minmax(0,1fr) !important;
  background: #fff !important;
  border-color: color-mix(in srgb,var(--project-primary) 18%,#e8e8ed) !important;
  color: var(--project-dark) !important;
}
.pc-detail .pc-editorial-goal > svg,
.pc-detail .pc-editorial-feature > svg { display:none !important; }
.pc-detail .pc-editorial-goal:nth-child(2n),
.pc-detail .pc-editorial-feature:nth-child(3n+1) {
  background: #fff !important;
  border-color: color-mix(in srgb,var(--project-primary) 18%,#e8e8ed) !important;
}
.pc-detail .pc-editorial-goal:nth-child(2n) p,
.pc-detail .pc-editorial-feature:nth-child(3n+1) h3,
.pc-detail .pc-editorial-feature:nth-child(3n+1) p { color: var(--project-dark) !important; }
.pc-detail .pc-editorial-goal:hover,
.pc-detail .pc-editorial-feature:hover {
  background: color-mix(in srgb,var(--project-primary) 10%,#fff) !important;
  border-color: color-mix(in srgb,var(--project-primary) 35%,#fff) !important;
  box-shadow: 0 9px 22px color-mix(in srgb,var(--project-primary) 10%,transparent);
}
.pc-detail .pc-editorial-journey-goals > div {
  transition: background .2s ease,border-color .2s ease,transform .2s ease,box-shadow .2s ease;
}
.pc-detail .pc-editorial-journey-goals > div > span {
  display:inline-grid;
  place-items:center;
  width:27px;
  height:27px;
  margin-bottom:8px;
  border-radius:8px;
  background:var(--project-primary);
  color:#fff !important;
  font-size:10px;
  font-weight:850;
}
.pc-detail .pc-editorial-journey-goals > div:nth-child(2n) {
  background:#fff !important;
  border-color:color-mix(in srgb,var(--project-primary) 18%,#eee) !important;
}
.pc-detail .pc-editorial-journey-goals > div:nth-child(2n) p { color:var(--project-dark) !important; }
.pc-detail .pc-editorial-journey-goals > div:hover {
  background:color-mix(in srgb,var(--project-primary) 10%,#fff) !important;
  border-color:color-mix(in srgb,var(--project-primary) 35%,#fff) !important;
  transform:translateY(-2px);
  box-shadow:0 8px 20px color-mix(in srgb,var(--project-primary) 10%,transparent);
}
.pc-detail .pc-editorial-overview-visual figcaption i { display:none !important; }
@media(max-width:767px){
  .pc-detail .pc-editorial-goal,.pc-detail .pc-editorial-feature { grid-template-columns:28px minmax(0,1fr) !important; }
}

`;