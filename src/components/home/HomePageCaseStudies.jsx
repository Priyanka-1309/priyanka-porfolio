import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion as Motion } from "framer-motion";
import { Sparkles, Target, Users } from "lucide-react";

import weddingPlannerCover from "../../assets/images/projectsImage/weddingPlannerCover.png";
import CrmCover from "../../assets/images/projectsImage/crmCover.png";
import freshGroCover from "../../assets/images/projectsImage/freshGroCover.png";
import metroBuddyCover from "../../assets/images/projectsImage/metroBuddyCover.png";

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
/*  NOTE: palette, fonts, insights, features sab EDIT karne layak hain. */
/*  Apne real Figma colours / fonts / process se replace kar dena.      */
/* ------------------------------------------------------------------ */
const PROCESS_TITLES = ["Research", "Wireframes", "Visual design", "Prototype"];
const metroBuddyAppGallery = [
  mp1, mp2, mp3, mp4, mp5, mp6, mp7, mp8, mp9,
  mp10, mp11, mp12, mp13, mp14, mp15, mp16, mp17, mp18, mp19,
  mp26, mp27,
];
const metroBuddyWebsiteGallery = [mp20, mp21, mp22, mp23, mp24, mp25];

const projects = [
  {
    id: "wedding",
    number: "01",
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
    number: "02",
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
    number: "03",
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
    number: "04",
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
    number: "05",
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
    number: "06",
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
];

const FILTERS = [
  { key: "All", short: "All" },
  { key: "Website", short: "Web" },
  { key: "Mobile App", short: "Apps" },
];

const SECTIONS = [
  ["overview", "Overview"],
  ["challenge", "Challenge"],
  ["planning", "Research & planning"],
  ["exploration", "Design exploration"],
  ["final", "Final solution"],
  ["validation", "Validation"],
  ["reflection", "Reflection"],
];

const Arrow = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path d="M3 11L11 3M5 3h6v6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

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
  const previewProject = visible.find((project) => project.id === previewId) || visible[0];

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
      <style>{STYLES}</style>

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
              <span>Projects</span>
              <span className="pc-script">Explained</span>
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
                  onClick={() => setFilter(f.key)}
                  aria-pressed={filter === f.key}
                >
                  <span>{f.short}</span>
                  <small>{counts[f.key]}</small>
                </button>
              ))}
            </nav>
          </header>

          <div className="pc-project-browser">
            <nav className="pc-project-nav" aria-label="Choose a project">
              <p className="pc-project-nav-label">Selected work</p>
              {visible.map((project) => (
                <button
                  key={project.id}
                  type="button"
                  className={`pc-project-option ${previewProject.id === project.id ? "is-active" : ""}`}
                  style={{ "--accent": project.accent }}
                  onClick={() => setPreviewId(project.id)}
                  aria-pressed={previewProject.id === project.id}
                >
                  <span className="pc-option-number">{project.number}</span>
                  <span className="pc-option-copy">
                    <strong>{project.title}</strong>
                    <small>{project.projectType || (project.category === "Website" ? "Website" : "Mobile app")}</small>
                  </span>
                  <span className="pc-option-arrow" aria-hidden="true">↗</span>
                </button>
              ))}
            </nav>

            <article className="pc-project-showcase" style={{ "--accent": previewProject.accent }}>
              <button
                type="button"
                className="pc-project-cover"
                onClick={() => openProject(previewProject)}
                aria-label={`Open ${previewProject.title} case study`}
              >
                <img
                  src={previewProject.cover || previewProject.gallery[0]}
                  alt={`${previewProject.title} case study cover`}
                  loading="lazy"
                  decoding="async"
                />
                <span className="pc-project-kind">
                  {previewProject.projectType || (previewProject.category === "Website" ? "Website" : "Mobile app")}
                </span>
                <span className="pc-cover-cta">Open case study <span aria-hidden="true">↗</span></span>
              </button>
              <div className="pc-project-info">
                <p className="pc-project-label">{previewProject.label}</p>
                <h2>{previewProject.title}</h2>
                <p className="pc-project-description">{previewProject.description}</p>
                <div className="pc-project-meta">
                  <span>{previewProject.role}</span>
                  <span className="pc-project-pill">
                    {previewProject.projectType || (previewProject.category === "Website" ? "Website concept" : "App concept")}
                  </span>
                </div>
              </div>
            </article>
          </div>
        </>
      )}
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  CASE STUDY PAGE                                                    */
/* ------------------------------------------------------------------ */
function ProjectDetail({ project, onBack, onOpen }) {
  const [zoom, setZoom] = useState(null);
  const [active, setActive] = useState("overview");
  const [toast, setToast] = useState("");
  const [showAllScreens, setShowAllScreens] = useState(false);
  const [galleryMode, setGalleryMode] = useState(
    project.presentation === "hybrid" ? "App" : project.category === "Website" ? "Website" : "App"
  );
  const barRef = useRef(null);
  const isHybrid = project.presentation === "hybrid";
  const isWeb = isHybrid ? galleryMode === "Website" : project.category === "Website";
  const gal = project.galleryModes?.[galleryMode] || project.gallery;
  const i = projects.findIndex((p) => p.id === project.id);
  const next = projects[(i + 1) % projects.length];
  const previous = projects[(i - 1 + projects.length) % projects.length];
  const visibleGallery = showAllScreens ? gal : gal.slice(0, isWeb ? 4 : 6);

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
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id.replace("pc-sec-", ""));
        });
      },
      { rootMargin: "-35% 0px -60% 0px", threshold: 0 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
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
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
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

  return (
    <div className="pc-detail" style={{ "--accent": project.accent }}>
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
          <nav className="pc-secnav" aria-label="Case study sections">
            {SECTIONS.map(([id, label]) => (
              <button
                key={id}
                type="button"
                className={active === id ? "is-active" : ""}
                onClick={() => go(id)}
              >
                {label}
              </button>
            ))}
          </nav>
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
        className="pc-d-hero"
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
              <p className="pc-d-eyebrow">DESIGN CASE STUDY</p>
              <h1 className="pc-d-title">{project.title}</h1>
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

      {/* 02 — overview */}
      <Motion.section id="pc-sec-overview" className="pc-block pc-case-block" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.42, ease: "easeOut" }}>
        <div className="pc-block-head">
          <span className="pc-section-number">02</span>
          <h2>Overview</h2>
          <p className="pc-kicker">A quick look at the idea, people and priorities</p>
        </div>
        <div className="pc-block-body">
          <div className="pc-overview-intro">
            <span className="pc-overview-mark" aria-hidden="true"><Sparkles size={20} strokeWidth={1.8} /></span>
            <p className="pc-big">{project.overview}</p>
          </div>
          <div className="pc-overview-grid">
            <article className="pc-overview-audience">
              <span className="pc-card-label"><Users size={14} /> Made for</span>
              <h3>The people behind the project</h3>
              <p>{project.audience}</p>
              <span className="pc-overview-orbit" aria-hidden="true" />
            </article>
            <div className="pc-overview-goals">
              <div className="pc-overview-goals-head">
                <span className="pc-card-label"><Target size={14} /> Design priorities</span>
                <span className="pc-overview-count">{String(project.goals.length).padStart(2, "0")} goals</span>
              </div>
              {project.goals.map((goal, index) => (
                <div className="pc-overview-goal" key={goal}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{goal}</p>
                  <i aria-hidden="true">↗</i>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Motion.section>

      {/* 03 — challenge */}
      <Motion.section id="pc-sec-challenge" className="pc-block pc-tint pc-case-block" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.42, ease: "easeOut" }}>
        <div className="pc-block-head">
          <span className="pc-section-number">03</span>
          <h2>The challenge</h2>
          <p className="pc-kicker">The user problem and design objectives</p>
        </div>
        <div className="pc-block-body">
          <p className="pc-big">{project.problem}</p>
          <div className="pc-three">
            {project.insights.map((insight, index) => (
              <div className="pc-card pc-challenge-card" key={insight.t}>
                <span className="pc-card-label">Challenge 0{index + 1}</span>
                <h3>{insight.t}</h3><p>{insight.d}</p>
              </div>
            ))}
          </div>
          <div className="pc-objective-strip"><strong>Design objective</strong><span>{project.goals[0]}</span></div>
        </div>
      </Motion.section>

      {/* 04 — research and planning */}
      <Motion.section id="pc-sec-planning" className="pc-block pc-case-block" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.42, ease: "easeOut" }}>
        <div className="pc-block-head">
          <span className="pc-section-number">04</span>
          <h2>Research &amp; planning</h2>
          <p className="pc-kicker">Turning the problem into a clear direction</p>
        </div>
        <div className="pc-block-body">
          <div className="pc-planning-audience"><span className="pc-card-label">Primary audience</span><p>{project.audience}</p></div>
          <ol className="pc-steps">
            {project.process.map((text, index) => (
              <li key={text}>
                <span className="pc-step-n">0{index + 1}</span>
                <h3>{PROCESS_TITLES[index]}</h3>
                <p>{text}</p>
              </li>
            ))}
          </ol>
          <div className="pc-planning-goals">
            <h3>What the experience needs to do</h3>
            {project.goals.map((goal, index) => <div key={goal}><span>0{index + 1}</span><p>{goal}</p></div>)}
          </div>
        </div>
      </Motion.section>

      {/* 05 — design exploration */}
      <Motion.section id="pc-sec-exploration" className="pc-block pc-tint pc-case-block" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.42, ease: "easeOut" }}>
        <div className="pc-block-head">
          <span className="pc-section-number">05</span>
          <h2>Design exploration</h2>
          <p className="pc-kicker">Colour, type and visual decisions</p>
        </div>
        <div className="pc-block-body">
          <p className="pc-design-direction">{project.process[2]}</p>
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
          <h3 className="pc-sub">Typography</h3>
          <div className="pc-two">
            <div className="pc-card pc-type"><span className="pc-aa" style={{ fontFamily: `'${project.fonts.display}', sans-serif` }}>Aa</span><h3>{project.fonts.display}</h3><p>Headlines and key moments</p></div>
            <div className="pc-card pc-type"><span className="pc-aa" style={{ fontFamily: `'${project.fonts.body}', sans-serif` }}>Aa</span><h3>{project.fonts.body}</h3><p>Body text, buttons and labels</p></div>
          </div>
          <h3 className="pc-sub">Design principles</h3>
          <div className="pc-principle-list">{project.principles.map((principle, index) => <span key={principle}><b>0{index + 1}</b>{principle}</span>)}</div>
        </div>
      </Motion.section>

      {/* 06 — final solution and high-fidelity screens */}
      <Motion.section id="pc-sec-final" className="pc-final-section pc-case-block" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.08 }} transition={{ duration: 0.42, ease: "easeOut" }}>
        <div className="pc-block pc-final-intro">
          <div className="pc-block-head">
            <span className="pc-section-number">06</span>
            <h2>Final solution</h2>
            <p className="pc-kicker">A considered response to the challenge</p>
          </div>
          <div className="pc-block-body">
            <p className="pc-big">{project.solution}</p>
            <div className="pc-four">
              {project.features.map((feature, index) => (
                <div className="pc-card pc-feature" key={feature.t}>
                  <span className="pc-feature-index">0{index + 1}</span>
                  <h3>{feature.t}</h3><p>{feature.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="pc-gal-wrap">
          <div className="pc-gal-head">
            <div>
              <span className="pc-card-label">High-fidelity UI</span>
              <h2>Explore the finished interface</h2>
              <p>Browse the key screens and select any design to view it full size.</p>
            </div>
            <span className="pc-gallery-hint">Scroll to explore <b aria-hidden="true">→</b></span>
          </div>
          {project.galleryModes && (
            <div className="pc-gallery-switch" role="group" aria-label="Choose Metro Buddy interface">
              {Object.keys(project.galleryModes).map((mode) => (
                <button
                  type="button"
                  key={mode}
                  className={galleryMode === mode ? "is-active" : ""}
                  onClick={() => {
                    setGalleryMode(mode);
                    setShowAllScreens(false);
                    setZoom(null);
                  }}
                  aria-pressed={galleryMode === mode}
                >
                  {mode}
                  <span>{project.galleryModes[mode].length}</span>
                </button>
              ))}
            </div>
          )}
          <div className={`pc-gal ${isWeb ? "is-web" : "is-app"}`}>
            {visibleGallery.map((src, screenIndex) => (
              <Motion.button
                className="pc-gallery-screen"
                type="button"
                key={`${project.id}-${screenIndex}`}
                onClick={() => setZoom(screenIndex)}
                aria-label={`View ${project.title} screen ${screenIndex + 1} enlarged`}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{ duration: 0.38, delay: Math.min(screenIndex * 0.035, 0.21), ease: "easeOut" }}
              >
                {isWeb && (
                  <span className="pc-gallery-browser-bar" aria-hidden="true">
                    <i /><i /><i /><em>{project.title} · Screen {screenIndex + 1}</em>
                  </span>
                )}
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
        </div>
      </Motion.section>

      {/* 07 — validation plan */}
      <Motion.section id="pc-sec-validation" className="pc-block pc-tint pc-case-block" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.42, ease: "easeOut" }}>
        <div className="pc-block-head">
          <span className="pc-section-number">07</span>
          <h2>Validation</h2>
          <p className="pc-kicker">How I would test and improve the experience</p>
        </div>
        <div className="pc-block-body">
          <div className="pc-validation-intro"><span className="pc-validation-mark">↗</span><div><span className="pc-card-label">Next step</span><h3>Validate the key user goals</h3><p>These are proposed usability checks for the concept—not reported test results.</p></div></div>
          <div className="pc-three">
            {project.goals.map((goal, index) => (
              <div className="pc-card pc-validation-card" key={goal}><span className="pc-card-label">Check 0{index + 1}</span><h3>{["Task clarity", "Flow confidence", "Visual hierarchy"][index % 3]}</h3><p>Ask a target user to complete this goal, then note where the interface feels unclear: {goal.toLowerCase()}.</p></div>
            ))}
          </div>
        </div>
      </Motion.section>

      {/* 08 — reflection */}
      <Motion.section id="pc-sec-reflection" className="pc-block pc-case-block" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.42, ease: "easeOut" }}>
        <div className="pc-block-head">
          <span className="pc-section-number">08</span>
          <h2>Reflection</h2>
          <p className="pc-kicker">What I learned and what comes next</p>
        </div>
        <div className="pc-block-body">
          <p className="pc-big">{project.outcome}</p>
          <div className="pc-two">
            <div className="pc-card pc-learn"><span className="pc-card-label">Key learning</span><h3>What this project taught me</h3><p>{project.learnings}</p></div>
            <div className="pc-card pc-next-step"><span className="pc-card-label">Next iteration</span><h3>Learn from real users</h3><p>Test the main journey with people from the target audience, use their feedback to refine the flow, and check the experience across screen sizes.</p></div>
          </div>
        </div>
      </Motion.section>

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
  border:1px solid #eeedf1; border-radius:24px; background:#fff;
  box-shadow:0 14px 36px rgba(27,29,53,.055);
}
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
  .pc-project-nav{display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:6px; padding:12px}
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
`;