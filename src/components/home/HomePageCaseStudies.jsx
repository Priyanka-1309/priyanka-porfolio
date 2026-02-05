// "use client";

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import ring2 from "../../assets/images/ring2.png"

// // ✅ IMPORT IMAGES (case studies folder se)
// import wedding1 from "../../case studies/1Wedding.png";
// import wedding2 from "../../case studies/2Wedding.png";
// import wedding3 from "../../case studies/3Wedding.png";
// import wedding4 from "../../case studies/4Wedding.png";
// import wedding5 from "../../case studies/5Wedding.png";
// import wedding6 from "../../case studies/6Wedding.png";
// import wedding7 from "../../case studies/7Wedding.png";

// import crm1 from "../../case studies/1crm.png";
// import crm2 from "../../case studies/2crm.png";
// import crm3 from "../../case studies/3crm.png";
// import crm4 from "../../case studies/4crm.png";
// import crm5 from "../../case studies/5crm.png";
// import crm6 from "../../case studies/6crm.png";
// import crm7 from "../../case studies/7crm.png";
// import crm8 from "../../case studies/8crm.png";
// import crm9 from "../../case studies/9crm.png";
// import crm10 from "../../case studies/10crm.png";
// import crm11 from "../../case studies/11crm.png";
// import crm12 from "../../case studies/12crm.png";
// import crm13 from "../../case studies/13crm.png";
// import crm14 from "../../case studies/14crm.png";
// import crm15 from "../../case studies/15crm.png";
// import crm16 from "../../case studies/16crm.png";
// import crm17 from "../../case studies/17crm.png";
// import crm18 from "../../case studies/18crm.png";
// import crm19 from "../../case studies/19crm.png";
// import crm20 from "../../case studies/20crm.png";
// import crm21 from "../../case studies/21crm.png";
// import crm22 from "../../case studies/22crm.png";
// import crm23 from "../../case studies/23crm.png";

// import service1 from "../../case studies/1service.png";
// import service2 from "../../case studies/2service.png";
// import service3 from "../../case studies/3service.png";
// import service4 from "../../case studies/4service.png";

// import jp1 from "../../case studies/1jp.jpg";
// import jp2 from "../../case studies/2jp.jpg";
// import jp3 from "../../case studies/3jp.jpg";
// import jp4 from "../../case studies/4jp.jpg";
// import jp5 from "../../case studies/5jp.jpg";
// import jp6 from "../../case studies/6jp.jpg";
// import jp7 from "../../case studies/7jp.jpg";
// import jp8 from "../../case studies/8jp.jpg";
// import jp9 from "../../case studies/9jp.jpg";
// import jp10 from "../../case studies/10jp.jpg";
// import jp11 from "../../case studies/11jp.jpg";
// import jp12 from "../../case studies/12jp.jpg";
// import jp13 from "../../case studies/13jp.jpg";
// import jp14 from "../../case studies/14jp.jpg";
// import jp15 from "../../case studies/15jp.jpg";
// import jp16 from "../../case studies/16jp.jpg";
// import jp17 from "../../case studies/17jp.jpg";
// import jp18 from "../../case studies/18jp.jpg";
// import jp19 from "../../case studies/19jp.jpg";

// import gp0 from "../../case studies/0gp.png";
// import gp1 from "../../case studies/1gp.png";
// import gp2 from "../../case studies/2gp.png";
// import gp3 from "../../case studies/3gp.png";
// import gp4 from "../../case studies/4gp.png";
// import gp5 from "../../case studies/5gp.png";
// import gp6 from "../../case studies/6gp.png";
// import gp7 from "../../case studies/7gp.png";
// import gp8 from "../../case studies/8gp.png";
// import gp9 from "../../case studies/9gp.png";
// import gp10 from "../../case studies/10gp.png";
// import gp11 from "../../case studies/11gp.png";
// import gp12 from "../../case studies/12gp.png";
// import gp13 from "../../case studies/13gp.png";
// import gp14 from "../../case studies/14gp.png";
// import gp15 from "../../case studies/15gp.png";
// import gp16 from "../../case studies/16gp.png";
// import gp17 from "../../case studies/17gp.png";
// import gp18 from "../../case studies/18gp.png";
// import gp19 from "../../case studies/19gp.png";

// // ================= PROJECT DATA =================
// const projects = [
//   {
//     id: 1,
//     meta: "• UI UX DESIGN  • WEBSITE • Figma",
//     title: "Wedding Planner",
//     description:
//       "A modern wedding planning platform designed to help couples discover venues, vendors, and inspiration while simplifying the entire wedding planning journey.",
//     problem: [
//       "Wedding planning information is scattered across multiple platforms, making the process confusing and time-consuming.",
//       "Users find it difficult to compare venues and vendors due to lack of structured and consistent data.",
//       "Unclear pricing and limited details reduce trust and increase decision fatigue.",
//       "Poorly designed platforms make navigation overwhelming, especially on mobile devices.",
//       "Couples struggle to find inspiration and real wedding references in one place.",
//     ],
//     solutions: [
//       "Centralized platform for venues, vendors, and inspiration",
//       "Structured and comparable listings",
//       "Transparent pricing and details",
//       "Mobile-friendly and intuitive UI",
//       "Real wedding inspiration and references",
//     ],
//     outcome:
//       "The final design offers a smooth, elegant, and user-friendly experience that reduces planning stress for couples and improves engagement.",
//     images: [wedding1, wedding2, wedding3, wedding4, wedding5, wedding6, wedding7],
//   },
//   {
//     id: 2,
//     meta: "• UI UX DESIGN • App • Figma",
//     title: "CRM App",
//     description:
//       "A centralized CRM app designed to help users manage tasks, track progress, and organize information efficiently in one place.",
//     problem:
//       "Users had no centralized system to manage tasks. Information was scattered across notes and spreadsheets, causing confusion and inefficiency.",
//     solutions: [
//       "Single centralized task management system",
//       "Clear and structured workflows",
//       "Reduced manual effort",
//       "Clean UI with strong hierarchy",
//       "Easy navigation",
//     ],
//     outcome:
//       "Users can manage tasks efficiently, access information easily, and experience a smoother workflow.",
//     images: [
//       crm1, crm2, crm3, crm4, crm5, crm6, crm7, crm8, crm9, crm10, crm11,
//       crm12, crm13, crm14, crm15, crm16, crm17, crm18, crm19, crm20, crm21, crm22, crm23
//     ],
//   },
//   {
//     id: 3,
//     meta: "• SERVICE WEBSITE • UI UX DESIGN • Figma",
//     title: "Service Booking Website",
//     description:
//       "A website designed to help users discover, book, and manage local services with ease.",
//     problem:
//       "Finding reliable local services was difficult due to fragmented booking processes and lack of trust.",
//     solutions: [
//       "Centralized service discovery platform",
//       "Step-by-step booking flow",
//       "Clear pricing and service details",
//       "Simple onboarding",
//       "Clean UI",
//     ],
//     outcome:
//       "Users can book services faster with clarity and confidence, improving overall satisfaction.",
//     images: [service1, service2, service3, service4],
//   },
//   {
//     id: 4,
//     meta: "• UI UX DESIGN • App • Figma",
//     title: "Job Portal App",
//     description:
//       "A job portal app for job seekers and employers to manage applications efficiently.",
//     problem:
//       "Job information was scattered and applications were complicated for both seekers and employers.",
//     solutions: [
//       "Centralized job listings",
//       "Advanced search and filters",
//       "Clear job descriptions",
//       "Simplified application flow",
//       "Separate user flows",
//     ],
//     outcome:
//       "The app streamlines hiring, improves usability, and speeds up interactions.",
//     images: [jp1, jp2, jp3, jp4, jp5, jp6, jp7, jp8, jp9, jp10, jp11, jp12, jp13, jp14, jp15, jp16, jp17, jp18, jp19],
//   },
//   {
//     id: 5,
//     meta: "• UI UX DESIGN • App • Figma",
//     title: "Grocery App",
//     description:
//       "A mobile app designed to help users shop daily groceries easily.",
//     problem:
//       "Cluttered UI and complex checkout caused poor shopping experiences.",
//     solutions: [
//       "Clean product listings",
//       "Easy cart management",
//       "Simplified checkout",
//       "Order tracking",
//       "Consistent UI",
//     ],
//     outcome:
//       "Users enjoy faster shopping with a clean and intuitive experience.",
//     images: [gp0,gp1,gp2,gp3,gp4,gp5,gp6,gp7,gp8,gp9,gp10,gp11,gp12,gp13,gp14,gp15,gp16,gp17,gp18,gp19],
//   },
// ];

// // ================= MAIN COMPONENT =================
// export default function CaseStudies() {
//   const [openId, setOpenId] = useState(null);
//   const [galleryProject, setGalleryProject] = useState(null);

//   return (
//     <section className="py-5 bg-[#0F103F] relative">
//       <div className="max-w-5xl mx-auto px-10">

//         {/* HEADER */}
//         <div className="text-center max-w-2xl mx-auto mb-10">
//           <p className="text-sm tracking-widest text-gray-400 mb-2">
//             FEATURED WORK
//           </p>
//           <h2 className="text-4xl text-[#C961DE] font-serif font-bold mb-3">
//             Case Studies
//           </h2>
//           <p className="text-gray-300">
//             Real problems, real solutions.
//           </p>
//         </div>

//         {/* PROJECT LIST */}
//         {projects.map((project) => {
//           const isOpen = openId === project.id;

//           return (
//             <motion.div
//               key={project.id}
//               className="mb-6"
//               whileHover={{ y: -8, scale: 1.02 }}
//             >
//               <div className="rounded-xl bg-gradient-to-r from-[#C961DE] to-[#2954A3] p-[2px]">
//                 <div className="bg-[#1C1D5E] rounded-xl p-6">

//                   {/* TITLE */}
//                   <button
//                     onClick={() => setOpenId(isOpen ? null : project.id)}
//                     className="w-full flex justify-between text-left gap-4"
//                   >
//                     <div>
//                       <p className="text-xs text-white/70 mb-1">
//                         {project.meta}
//                       </p>
//                       <h3 className="text-xl text-[#C961DE] font-serif font-bold">
//                         {project.title}
//                       </h3>
//                       <p className="text-gray-300 mt-1 max-w-xl">
//                         {project.description}
//                       </p>
//                     </div>

//                     <motion.div
//                       animate={{ rotate: isOpen ? 180 : 0 }}
//                       className="w-10 h-10 rounded-full bg-gradient-to-br from-[#C961DE] to-[#2954A3] flex items-center justify-center"
//                     >
//                       <svg width="16" height="16" viewBox="0 0 24 24">
//                         <path
//                           d="M6 9l6 6 6-6"
//                           stroke="white"
//                           strokeWidth="2"
//                           fill="none"
//                         />
//                       </svg>
//                     </motion.div>
//                   </button>

//                   {/* DROPDOWN */}
//                   <AnimatePresence>
//                     {isOpen && (
//                       <motion.div
//                         initial={{ height: 0, opacity: 0 }}
//                         animate={{ height: "auto", opacity: 1 }}
//                         exit={{ height: 0, opacity: 0 }}
//                         className="overflow-hidden"
//                       >
//                         <div className="mt-6 grid md:grid-cols-2 gap-6 text-sm text-gray-200">

//                           <div>
//                             <h4 className="font-semibold text-white mb-2">
//                               ⚠ Problem
//                             </h4>
//                             {Array.isArray(project.problem) ? (
//                               <ul className="list-disc ml-4 space-y-1">
//                                 {project.problem.map((item, i) => (
//                                   <li key={i}>{item}</li>
//                                 ))}
//                               </ul>
//                             ) : (
//                               <p>{project.problem}</p>
//                             )}
//                           </div>

//                           <div>
//                             <h4 className="font-semibold text-white mb-2">
//                               ✅ Solutions
//                             </h4>
//                             <ul className="list-disc ml-4 space-y-1">
//                               {project.solutions.map((item, i) => (
//                                 <li key={i}>{item}</li>
//                               ))}
//                             </ul>
//                           </div>

//                           <div className="md:col-span-2">
//                             <h4 className="font-semibold text-white mb-2">
//                               📈 Outcome
//                             </h4>
//                             <p>{project.outcome}</p>
//                           </div>
//               {/* RING — OUTSIDE CARD */}
//                    <img
//                      src={ring2}
//                      alt="ring"
//                      className="
//                    hidden md:block
//                    absolute
//                    top-[-120px]
//                    left-1/2
//                    -translate-x-1/2
//                    w-[80vw]
//                    h-[800px]
//                    max-w-none
//                    z-0
//                    opacity-40 
//                  "
//                    />
//                           {/* BUTTON ONLY FOR PROJECTS WITH IMAGES */}
//                           {project.images && (
//                             <div className="md:col-span-2 pt-4">
//                               <button
//                                 onClick={() => setGalleryProject(project)}
//                                 className="px-5 py-2.5 rounded-lg bg-gradient-to-br from-[#C961DE] to-[#2954A3] text-white text-sm font-medium hover:opacity-80 transition"
//                               >
//                                 View Project Images
//                               </button>
//                             </div>
//                           )}

//                         </div>
//                       </motion.div>
//                     )}
//                   </AnimatePresence>

//                 </div>
//               </div>
//             </motion.div>
//           );
//         })}
//       </div>

//       {/* ✅ COMPACT GALLERY MODAL */}
//       <AnimatePresence>
//         {galleryProject && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center px-4"
//           >
//             <motion.div
//               initial={{ scale: 0.9 }}
//               animate={{ scale: 1 }}
//               exit={{ scale: 0.9 }}
//               className="bg-[#1C1D5E] rounded-xl max-w-4xl w-full p-6 relative"
//             >
//               <button
//                 onClick={() => setGalleryProject(null)}
//                 className="absolute top-4 right-4 text-white text-xl"
//               >
//                 ✕
//               </button>

//               <h3 className="text-2xl text-[#C961DE] font-serif font-bold mb-4">
//                 {galleryProject.title} – Gallery
//               </h3>

//               <div className="flex gap-4 overflow-x-auto pb-2">
//                 {galleryProject.images.map((img, i) => (
//                   <div
//                     key={i}
//                     className="flex-shrink-0 w-[180px] h-[360px] rounded-xl overflow-hidden"
//                   >
//                     <img
//                       src={img}
//                       alt={`gallery ${i + 1}`}
//                       className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 rounded-lg"
//                     />
//                   </div>
//                 ))}
//               </div>

//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* ✅ VIEW ALL PROJECTS BUTTON */}
//       <div className="max-w-5xl mx-auto px-10 mt-10 flex justify-center">
//         <button
//           onClick={() => window.location.href = "/projects"}
//           className="px-8 py-3 bg-gradient-to-br from-[#C961DE] to-[#2954A3] text-white font-semibold rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
//         >
//           View All Projects
//         </button>
//       </div>
//     </section>
//   );
// }





 "use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ================= COVER IMAGES ================= */
import weddingPlannerCover from "../../assets/images/projectsImage/weddingPlannerCover.png";
import CrmCover from "../../assets/images/projectsImage/crmCover.png";
import freshGroCover from "../../assets/images/projectsImage/freshGroCover.png";

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

// Fresh Gro
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

export default function CaseStudies() {
  const [openCard, setOpenCard] = useState(null);
  const [activeGallery, setActiveGallery] = useState(null);

  return (
    <section className="bg-[#0F103F] py-16">
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

        {/* WEDDING */}
        <CaseCard
          id="wedding"
          cover={weddingPlannerCover}
          title="Wedding Planner Platform"
          subtitle="UI UX • WEBSITE • FIGMA"
          openCard={openCard}
          setOpenCard={setOpenCard}
        >
          <CaseGrid>
            <Info icon="💍" title="Project Overview">Luxury wedding planning platform for venues & vendors.</Info>
            <Info icon="🎯" title="Goal">Emotion-driven, premium and confusion-free experience.</Info>
            <Info icon="🛠" title="Tools">Figma, Research, Wireframes, UI Design</Info>
            <Info icon="🎨" title="Branding">Elegant gradients, serif fonts, spacious UI</Info>
            <Info icon="✅" title="Solutions">Clear navigation & trust-focused layouts</Info>
            <Info icon="📈" title="Results">Improved usability & premium feel</Info>
          </CaseGrid>
          <GalleryButton onClick={() => setActiveGallery(weddingGallery)} />
        </CaseCard>

        {/* CRM */}
        <CaseCard
          id="crm"
          cover={CrmCover}
          title="S2 HIVE School UI"
          subtitle="EDUCATION • UI UX • FIGMA"
          openCard={openCard}
          setOpenCard={setOpenCard}
        >
          <CaseGrid>
            <Info icon="🏫" title="Project Overview">Modern school website UI.</Info>
            <Info icon="🎯" title="Goal">Clear academic information & trust.</Info>
            <Info icon="🛠" title="Tools">Figma, Auto Layout, Design System</Info>
            <Info icon="🎨" title="Branding">Professional blues & clean grids</Info>
            <Info icon="✅" title="Solutions">Card-based structured content</Info>
            <Info icon="📈" title="Results">Better readability & navigation</Info>
          </CaseGrid>
          <GalleryButton onClick={() => setActiveGallery(crmGallery)} />
        </CaseCard>

        {/* FRESH GRO */}
        <CaseCard
          id="freshgro"
          cover={freshGroCover}
          title="Fresh Gro Application UI"
          subtitle="MOBILE APP • UI UX • FIGMA"
          openCard={openCard}
          setOpenCard={setOpenCard}
        >
          <CaseGrid>
            <Info icon="🥦" title="Project Overview">Modern grocery delivery mobile app UI.</Info>
            <Info icon="🎯" title="Goal">Fast, simple & stress-free grocery ordering.</Info>
            <Info icon="🛠" title="Tools">Figma, Prototyping, UI Design</Info>
            <Info icon="🎨" title="Branding">Fresh green palette & minimal UI</Info>
            <Info icon="✅" title="Solutions">Easy browsing, cart & checkout flow</Info>
            <Info icon="📈" title="Results">Clean UX ready for development</Info>
          </CaseGrid>
          <GalleryButton onClick={() => setActiveGallery(freshGroGallery)} />
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
                    className="h-[230px] w-[140px] rounded-lg object-cover flex-shrink-0"
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* VIEW ALL */}
      <div className="max-w-5xl mx-auto px-10 mt-14 flex justify-center">
        <button
          onClick={() => (window.location.href = "/projects")}
          className="px-8 py-3 bg-gradient-to-br from-[#C961DE] to-[#2954A3] text-white font-semibold rounded-lg shadow-lg hover:scale-105 transition"
        >
          View All Projects
        </button>
      </div>
    </section>
  );
}

/* ================= COMPONENTS ================= */

function CaseCard({ id, cover, title, subtitle, openCard, setOpenCard, children }) {
  const open = openCard === id;

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-[800px] rounded-xl bg-gradient-to-r from-[#C961DE] to-[#2954A3] p-[1.5px]">
        <div className="bg-[#1C1D5E] rounded-xl">
          <div className="grid md:grid-cols-2 gap-4 p-4 items-center">
            <img
              src={cover}
              className="h-[180px] w-full md:w-[300px] object-cover rounded-lg"
            />
            <div>
              <p className="text-xs text-white/60">{subtitle}</p>
              <h3 className="text-2xl font-serif text-[#C961DE] mb-3">
                {title}
              </h3>
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
  <div className="grid md:grid-cols-2 gap-4 text-sm mt-4">
    {children}
  </div>
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
