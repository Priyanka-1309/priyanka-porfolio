import React, { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  Braces,
  Brush,
  Code2,
  PanelsTopLeft,
  PenTool,
  Sparkles,
  Waypoints,
} from "lucide-react";

const services = [
  {
    title: "UI/UX Design",
    category: "User experience",
    description:
      "Thoughtful user flows and polished interfaces for web and mobile, grounded in real user needs and clear visual hierarchy.",
    tags: ["User flows", "Interface design", "Figma"],
    visual: "interface",
    accent: "#304ffe",
    visualHeading: "A clearer experience",
    visualCaption: "Designed around the people who use it",
    Icon: Brush,
  },
  {
    title: "Website, Landing Page & App Design",
    category: "Digital experiences",
    description:
      "Clear, responsive designs for business websites, focused landing pages and app experiences—from the first page to the key user journey.",
    tags: ["Websites", "Landing pages", "Apps"],
    visual: "digital",
    accent: "#f29bbd",
    visualHeading: "Made for every screen",
    visualCaption: "Responsive web and mobile layouts",
    Icon: PanelsTopLeft,
  },
  {
    title: "Wireframing & Prototyping",
    category: "Ideas into reality",
    description:
      "Low-fidelity wireframes and clickable Figma prototypes that make ideas easier to explore, share and validate before development.",
    tags: ["Wireframes", "User journeys", "Prototypes"],
    visual: "flow",
    accent: "#304ffe",
    visualHeading: "Every step has a purpose",
    visualCaption: "From first click to finished journey",
    Icon: Waypoints,
  },
  {
    title: "Logo & Brand Identity",
    category: "A distinct first impression",
    description:
      "Memorable logo and visual identity explorations that give your product a consistent, recognizable presence across digital touchpoints.",
    tags: ["Logo design", "Visual identity", "Brand assets"],
    visual: "identity",
    accent: "#f29bbd",
    visualHeading: "A brand people remember",
    visualCaption: "A consistent look with its own character",
    Icon: PenTool,
  },
  {
    title: "Frontend Development",
    category: "Design meets code",
    description:
      "Bringing design-led pages to life with responsive HTML and CSS, plus JavaScript for simple interactions and polished details.",
    tags: ["HTML", "CSS", "JavaScript"],
    visual: "code",
    accent: "#304ffe",
    visualHeading: "From design to browser",
    visualCaption: "Responsive, detail-minded frontend",
    Icon: Code2,
  },
  {
    title: "Website UI Improvements",
    category: "Better by design",
    description:
      "A fresh look at your existing website to uncover usability gaps, improve visual clarity and make important actions easier to find.",
    tags: ["UI review", "Usability", "Iteration"],
    visual: "review",
    accent: "#f29bbd",
    visualHeading: "Small changes, clearer journeys",
    visualCaption: "Review, refine and improve what matters",
    Icon: Sparkles,
  },
];

const ROTATION_INTERVAL = 3500;

export default function HomePageService() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const serviceListRef = React.useRef(null);
  const serviceItemRefs = React.useRef([]);
  const activeService = services[activeIndex];
  const ActiveIcon = activeService.Icon;

  useEffect(() => {
    if (paused || shouldReduceMotion) return undefined;

    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % services.length);
    }, ROTATION_INTERVAL);

    return () => window.clearInterval(timer);
  }, [paused, shouldReduceMotion]);

  useEffect(() => {
    const list = serviceListRef.current;
    const activeItem = serviceItemRefs.current[activeIndex];
    if (!list || !activeItem) return;

    const itemTop =
      activeItem.getBoundingClientRect().top -
      list.getBoundingClientRect().top +
      list.scrollTop;
    const targetTop = itemTop - (list.clientHeight - activeItem.offsetHeight) / 2;

    list.scrollTo({
      top: Math.max(0, targetTop),
      behavior: shouldReduceMotion ? "instant" : "smooth",
    });
  }, [activeIndex, shouldReduceMotion]);

  return (
    <section
      className="service-section"
      aria-labelledby="service-heading"
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false);
      }}
    >
      <style>{STYLES}</style>

      <div className="service-shell">
        <header className="service-heading">
          <span className="service-eyebrow">HOW I CAN HELP</span>
          <h2 id="service-heading" className="service-title">
            <span>Good design isn’t just how it looks.</span>
            <span className="service-title-accent">It’s how it works.</span>
          </h2>
          <p className="service-intro">
            I create thoughtful, user-centered digital experiences that help
            businesses connect with their audience and turn ideas into intuitive
            products.
          </p>
        </header>

        <div className="service-layout">
          <nav
            className="service-list"
            aria-label="Services"
          >
            <p className="service-list-label">MY SERVICES</p>
            <div className="service-list-window" ref={serviceListRef}>
              {services.map((service, index) => {
                const Icon = service.Icon;
                const isNear = Math.abs(index - activeIndex) === 1;

                return (
                  <button
                    className={`service-item ${activeIndex === index ? "is-active" : ""} ${isNear ? "is-near" : ""}`}
                    key={service.title}
                    type="button"
                    aria-pressed={activeIndex === index}
                    ref={(element) => { serviceItemRefs.current[index] = element; }}
                    onClick={() => {
                      setActiveIndex(index);
                      setPaused(false);
                    }}
                  >
                    <span className="service-number">{String(index + 1).padStart(2, "0")}</span>
                    <span className="service-item-copy">
                      <small>{service.category}</small>
                      <strong>{service.title}</strong>
                    </span>
                    <Icon className="service-item-icon" aria-hidden="true" />
                  </button>
                );
              })}
            </div>
          </nav>

          <div className="service-visual" aria-hidden="true">
            <div className="service-visual-orbit service-visual-orbit-one" />
            <div className="service-visual-orbit service-visual-orbit-two" />
            <div
              className={`service-artboard is-${activeService.visual}`}
              key={activeService.title}
              style={{ "--visual-accent": activeService.accent }}
            >
              <div className="service-artboard-top">
                <span className="service-window-dots"><i /><i /><i /></span>
                <span className="service-artboard-address" />
                <span className="service-artboard-menu"><i /><i /><i /></span>
              </div>
              <div className="service-artboard-content">
                <div className="service-artboard-rail">
                  <span className="is-selected"><ActiveIcon size={15} /></span>
                  <span><PanelsTopLeft size={14} /></span>
                  <span><Braces size={14} /></span>
                  <span><Sparkles size={14} /></span>
                </div>
                <div className="service-artboard-main">
                  <div className="service-artboard-heading">
                    <strong>{activeService.visualHeading}</strong>
                    <small>{activeService.visualCaption}</small>
                  </div>
                  {activeService.visual === "flow" ? (
                    <div className="service-flow-graphic">
                      {["Explore", "Choose", "Done"].map((step, index) => (
                        <React.Fragment key={step}>
                          <div className={`service-flow-step step-${index + 1}`}>
                            <span>0{index + 1}</span><strong>{step}</strong>
                          </div>
                          {index < 2 && <i className="service-flow-connector" />}
                        </React.Fragment>
                      ))}
                    </div>
                  ) : activeService.visual === "identity" ? (
                    <div className="service-brand-graphic">
                      <div className="service-brand-monogram">Aa</div>
                      <div className="service-brand-palette">
                        <span /><span /><span /><span />
                      </div>
                      <small>VISUAL IDENTITY · 2025</small>
                    </div>
                  ) : activeService.visual === "code" ? (
                    <div className="service-code-graphic">
                      <div><i>01</i><span><b>const</b> experience = {"{"}</span></div>
                      <div><i>02</i><span>&nbsp;&nbsp;responsive: <em>true</em>,</span></div>
                      <div><i>03</i><span>&nbsp;&nbsp;madeForPeople: <em>true</em>,</span></div>
                      <div><i>04</i><span>&nbsp;&nbsp;details: <strong>"just right"</strong></span></div>
                      <div><i>05</i><span>{"}"}</span></div>
                    </div>
                  ) : activeService.visual === "review" ? (
                    <div className="service-review-graphic">
                      <div><span>BEFORE</span><i /><i /><b>Hard to scan</b></div>
                      <ArrowUpRight size={20} />
                      <div><span>AFTER</span><i /><i /><b>Clear &amp; focused</b></div>
                    </div>
                  ) : (
                    <div className={`service-interface-graphic is-${activeService.visual}`}>
                      <div className="service-artboard-feature">
                        <div className="service-artboard-symbol"><ActiveIcon size={38} strokeWidth={1.6} /></div>
                        <div className="service-artboard-lines"><i /><i /><i /></div>
                      </div>
                      <div className="service-artboard-cards">
                        <div><span /><i /><i /></div>
                        <div><span /><i /><i /></div>
                        <div><span /><i /><i /></div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="service-visual-note service-visual-note-top">
              <ActiveIcon size={15} />
              <span>{activeService.category}</span>
            </div>
            <div className="service-visual-note service-visual-note-bottom">
              <Sparkles size={15} />
              <span>Made with purpose</span>
            </div>
            <span className="service-visual-spark service-visual-spark-one">✳</span>
            <span className="service-visual-spark service-visual-spark-two">✦</span>
          </div>

          <div className="service-detail" aria-live="polite" aria-atomic="true">
            <div className="service-detail-top">
              <span>{String(activeIndex + 1).padStart(2, "0")} / {String(services.length).padStart(2, "0")}</span>
              <span className="service-detail-line" />
              <ActiveIcon size={17} aria-hidden="true" />
            </div>
            <div className="service-detail-content" key={activeService.title}>
                <span className="service-category-pill">{activeService.category}</span>
                <h3>{activeService.title}</h3>
                <p>{activeService.description}</p>
                <div className="service-tags">
                  {activeService.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
                <a className="service-contact" href="mailto:priyankachandel348@gmail.com">
                  Let’s work together <ArrowUpRight size={16} aria-hidden="true" />
                </a>
            </div>
            <div className="service-progress" aria-hidden="true">
              {services.map((service, index) => (
                <span
                  className={index === activeIndex ? "is-active" : ""}
                  key={service.title}
                />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

const STYLES = `
@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&family=DM+Sans:wght@400;500;600;700;800&family=Playfair+Display:ital,wght@0,500;0,600;1,500&display=swap');

.service-section{
  --service-ink:#242039; --service-muted:#777489; --service-blue:#304ffe; --service-pink:#f29bbd;
  position:relative; overflow:hidden; padding:clamp(64px,8vw,112px) 5vw;
  background:#fff;
  color:var(--service-ink); font-family:'DM Sans',Inter,ui-sans-serif,system-ui,sans-serif;
}
.service-section *{box-sizing:border-box}
.service-shell{position:relative; z-index:1; width:min(1320px,100%); margin:0 auto}
.service-heading{max-width:900px; margin:0 auto clamp(32px,4vw,48px); text-align:center}
.service-eyebrow{
  display:block; width:fit-content; margin:0 auto 10px; color:#242039;
  font-family:'Playfair Display',serif; font-size:16px; font-style:italic; font-weight:500;
}
.service-title{
  display:flex; flex-wrap:wrap; align-items:baseline; justify-content:center;
  flex-direction:column; gap:0; margin:0; color:#242039;
  font-family:'DM Sans',sans-serif; font-size:clamp(25px,2.7vw,36px);
  font-weight:700; line-height:1.3; letter-spacing:-1px;
}
.service-title>span:first-child{color:#242039}
.service-title-accent{
  display:inline-block; color:#f29bbd; font-family:'Caveat',cursive;
  font-size:1.2em; font-weight:600; line-height:1; letter-spacing:0;
}
.service-intro{max-width:570px; margin:12px auto 0; color:var(--service-muted); font-size:13px; line-height:1.75}
.service-layout{
  display:grid; grid-template-columns:minmax(235px,.88fr) minmax(330px,1.3fr) minmax(265px,.9fr);
  grid-template-areas:"list visual detail"; align-items:center; gap:clamp(26px,4vw,58px);
}
.service-list{
  grid-area:list; display:flex; flex-direction:column; gap:11px; min-width:0;
}
.service-list-label{margin:0 0 0 4px; color:#777489; font-size:10px; font-weight:800; letter-spacing:.16em}
.service-list-window{
  position:relative; max-height:300px; padding:115px 4px;
  overflow-y:auto; overscroll-behavior:contain; scrollbar-width:none;
  mask-image:linear-gradient(to bottom,transparent 0%,#000 27%,#000 73%,transparent 100%);
  -webkit-mask-image:linear-gradient(to bottom,transparent 0%,#000 27%,#000 73%,transparent 100%);
}
.service-list-window::-webkit-scrollbar{display:none}
.service-item{
  --item-accent:#304ffe; display:grid; grid-template-columns:42px minmax(0,1fr) 16px;
  align-items:center; gap:10px; width:100%; min-height:69px; margin:4px 0; padding:9px 12px;
  border:1px solid transparent; border-radius:17px;
  background:transparent; color:var(--service-ink); text-align:left; cursor:pointer;
  opacity:.2; transition:background .22s,border-color .22s,transform .22s,box-shadow .22s,opacity .22s;
}
.service-item:hover{transform:translateX(3px); background:#fff; opacity:.72}
.service-item.is-near{opacity:.52}
.service-item.is-active{
  border-color:color-mix(in srgb,var(--service-blue) 18%,#fff);
  background:linear-gradient(100deg,color-mix(in srgb,var(--service-blue) 7%,#fff),color-mix(in srgb,var(--service-pink) 12%,#fff));
  box-shadow:0 9px 24px rgba(48,79,254,.08); opacity:1;
}
.service-number{
  display:grid; place-items:center; width:38px; height:38px; border-radius:50%;
  background:#f4f3f7; color:#79788a; font-size:13px; font-weight:800;
  font-variant-numeric:tabular-nums; transition:background .22s,color .22s;
}
.service-item.is-active .service-number{background:linear-gradient(135deg,#304ffe,#f29bbd); color:#fff}
.service-item-copy{display:grid; gap:4px; min-width:0}
.service-item-copy small{color:#9995aa; font-size:10px; line-height:1.2}
.service-item-copy strong{overflow-wrap:anywhere; color:#26283a; font-size:13px; font-weight:700; line-height:1.3}
.service-item-icon{width:15px; height:15px; color:#a09aaf; opacity:0; transition:opacity .2s,transform .2s}
.service-item:hover .service-item-icon,.service-item.is-active .service-item-icon{opacity:1}
.service-item.is-active .service-item-icon{color:var(--service-blue); transform:rotate(-8deg)}
.service-visual{
  position:relative; grid-area:visual; display:grid; place-items:center; min-width:0;
  min-height:clamp(320px,34vw,440px); isolation:isolate;
}
.service-visual::before{
  content:""; position:absolute; z-index:-2; width:78%; aspect-ratio:1; border-radius:50%;
  background:linear-gradient(135deg,color-mix(in srgb,#304ffe 20%,#fff),color-mix(in srgb,#f29bbd 42%,#fff));
  filter:blur(44px); opacity:.72;
}
.service-visual-orbit{
  position:absolute; z-index:-1; width:95%; height:72%; border:1px solid rgba(48,79,254,.25);
  border-radius:50%; transform:rotate(-13deg); animation:serviceOrbit 24s linear infinite;
}
.service-visual-orbit-two{width:106%; height:57%; border-color:rgba(242,155,189,.5); transform:rotate(19deg); animation-direction:reverse}
.service-artboard{
  position:relative; width:min(100%,470px); overflow:hidden; border:1px solid rgba(255,255,255,.96);
  border-radius:22px; background:rgba(255,255,255,.87); box-shadow:0 28px 70px rgba(62,47,94,.17);
  backdrop-filter:blur(14px); animation:serviceVisualIn .62s cubic-bezier(.2,.8,.2,1) both;
}
.service-artboard-top{
  display:grid; grid-template-columns:58px minmax(0,1fr) 54px; align-items:center; gap:12px;
  height:42px; padding:0 13px; border-bottom:1px solid #eeebf4; background:rgba(255,255,255,.82);
}
.service-window-dots,.service-artboard-menu{display:flex; align-items:center; gap:4px}
.service-window-dots i{width:7px; height:7px; border-radius:50%; background:#f29bbd}
.service-window-dots i:nth-child(2){background:#304ffe}
.service-window-dots i:nth-child(3){background:#c9d2ff}
.service-artboard-address{height:15px; border:1px solid #eeeaf4; border-radius:99px; background:#f8f6fb}
.service-artboard-menu{justify-content:flex-end}
.service-artboard-menu i{width:4px; height:4px; border-radius:50%; background:#c3bdce}
.service-artboard-content{display:grid; grid-template-columns:43px minmax(0,1fr); min-height:275px}
.service-artboard-rail{
  display:flex; flex-direction:column; align-items:center; gap:13px; padding:15px 0;
  border-right:1px solid #efecf4; color:#aaa4b7;
}
.service-artboard-rail span{display:grid; place-items:center; width:27px; height:27px; border-radius:9px}
.service-artboard-rail span.is-selected{background:color-mix(in srgb,var(--service-blue) 10%,#fff); color:var(--service-blue)}
.service-artboard-main{padding:21px clamp(14px,2.2vw,26px) 20px}
.service-artboard-heading{display:grid; gap:6px; margin-bottom:16px}
.service-artboard-heading strong{color:#413451; font-size:12px; font-weight:800}
.service-artboard-heading small{color:#9892a6; font-size:9px}
.service-artboard-feature{
  display:grid; grid-template-columns:104px 1fr; align-items:center; gap:19px;
  min-height:116px; padding:15px; border:1px solid #f0e9fa; border-radius:16px;
  background:linear-gradient(120deg,color-mix(in srgb,#304ffe 7%,#fff),color-mix(in srgb,#f29bbd 12%,#fff) 70%,#fff);
}
.service-artboard-symbol{
  display:grid; place-items:center; width:88px; height:86px; border:1px solid rgba(255,255,255,.85);
  border-radius:22px; background:linear-gradient(145deg,#fff,color-mix(in srgb,var(--visual-accent) 16%,#fff)); color:var(--visual-accent);
  box-shadow:0 10px 24px rgba(113,81,170,.11);
}
.service-artboard-lines{display:grid; gap:9px}
.service-artboard-lines i{height:6px; border-radius:9px; background:rgba(117,91,150,.16)}
.service-artboard-lines i:first-child{width:82%; height:9px; background:rgba(117,91,150,.3)}
.service-artboard-lines i:last-child{width:62%}
.service-artboard-cards{display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:10px; margin-top:14px}
.service-artboard-cards div{display:grid; gap:7px; padding:9px; border:1px solid #efecf4; border-radius:12px; background:#fff}
.service-artboard-cards span{height:42px; border-radius:8px; background:linear-gradient(135deg,color-mix(in srgb,#304ffe 14%,#fff),color-mix(in srgb,#f29bbd 28%,#fff))}
.service-artboard-cards div:nth-child(2) span{background:linear-gradient(135deg,color-mix(in srgb,#f29bbd 30%,#fff),#fff)}
.service-artboard-cards div:nth-child(3) span{background:linear-gradient(135deg,color-mix(in srgb,#304ffe 18%,#fff),#fff)}
.service-artboard-cards i{height:4px; width:76%; border-radius:8px; background:#dfdbe6}
.service-artboard-cards i:last-child{width:52%; background:#efedf2}
.service-flow-graphic{
  display:flex; align-items:center; justify-content:space-between; gap:6px;
  min-height:146px; padding:16px 13px; border:1px solid #e8edfa; border-radius:16px;
  background:linear-gradient(135deg,color-mix(in srgb,#304ffe 7%,#fff),#fff 60%,color-mix(in srgb,#f29bbd 12%,#fff));
}
.service-flow-step{
  display:grid; justify-items:center; gap:9px; width:31%; padding:13px 5px;
  border:1px solid #e7e5ef; border-radius:14px; background:#fff;
  box-shadow:0 7px 17px rgba(66,77,121,.07);
}
.service-flow-step span{
  display:grid; place-items:center; width:31px; height:31px; border-radius:11px;
  background:color-mix(in srgb,#304ffe 11%,#fff); color:#304ffe; font-size:9px; font-weight:800;
}
.service-flow-step.step-2 span{background:color-mix(in srgb,#f29bbd 24%,#fff); color:#b7507d}
.service-flow-step.step-3 span{background:color-mix(in srgb,#304ffe 11%,#fff); color:#304ffe}
.service-flow-step strong{color:#55546a; font-size:9px}
.service-flow-connector{flex:1; height:1px; border-top:1px dashed #b6b3c5}
.service-brand-graphic{
  display:grid; grid-template-columns:1fr auto; align-items:center; gap:14px;
  min-height:146px; padding:16px 20px; border:1px solid #f4e3ef; border-radius:16px;
  background:linear-gradient(120deg,color-mix(in srgb,#f29bbd 12%,#fff),#fff 65%,color-mix(in srgb,#304ffe 7%,#fff));
}
.service-brand-monogram{
  color:#304ffe; font-family:'Playfair Display',serif; font-size:72px;
  font-style:italic; letter-spacing:-.12em; line-height:1;
}
.service-brand-palette{display:grid; gap:7px}
.service-brand-palette span{width:21px; height:21px; border-radius:50%; background:#304ffe}
.service-brand-palette span:nth-child(2){background:#f29bbd}
.service-brand-palette span:nth-child(3){background:#c9d2ff}
.service-brand-palette span:nth-child(4){background:#fbe5ed}
.service-brand-graphic small{grid-column:1/-1; color:#988b9a; font-size:8px; font-weight:800; letter-spacing:.14em}
.service-code-graphic{
  display:grid; gap:9px; min-height:146px; align-content:center; padding:14px 16px;
  border:1px solid #33334c; border-radius:15px; background:#24243a;
  box-shadow:inset 0 1px 0 rgba(255,255,255,.08);
}
.service-code-graphic div{display:grid; grid-template-columns:23px 1fr; gap:7px; color:#e4dff4; font:10px/1.35 ui-monospace,SFMono-Regular,Consolas,monospace}
.service-code-graphic i{color:#74718e; font-style:normal}
.service-code-graphic b{color:#aab8ff; font-weight:600}
.service-code-graphic em{color:#f29bbd; font-style:normal}
.service-code-graphic strong{color:#f6c1d5; font-weight:500}
.service-review-graphic{
  display:grid; grid-template-columns:1fr auto 1fr; align-items:center; gap:9px;
  min-height:146px; padding:13px; border:1px solid #e9e9f0; border-radius:16px;
  background:linear-gradient(135deg,#faf9fc,#fff);
}
.service-review-graphic>svg{color:#304ffe}
.service-review-graphic>div{
  display:grid; gap:8px; min-height:108px; align-content:center; padding:11px;
  border:1px solid #efecf4; border-radius:12px; background:#fff;
}
.service-review-graphic>div>span{color:#9691a1; font-size:8px; font-weight:800; letter-spacing:.1em}
.service-review-graphic>div>i{height:5px; width:85%; border-radius:8px; background:#e8e5ee}
.service-review-graphic>div>i:nth-of-type(2){width:60%}
.service-review-graphic>div>b{color:#575268; font-size:9px}
.service-review-graphic>div:last-child{border-color:color-mix(in srgb,#304ffe 20%,#fff); background:color-mix(in srgb,#304ffe 4%,#fff)}
.service-review-graphic>div:last-child>i{background:color-mix(in srgb,#304ffe 18%,#fff)}
.service-review-graphic>div:last-child>b{color:#304ffe}
.service-artboard.is-code .service-artboard-main{background:#fafaff}
.service-artboard.is-digital .service-artboard-cards span{height:51px}
.service-artboard.is-review .service-artboard-heading strong{color:#304ffe}
.service-artboard.is-flow .service-artboard-heading strong{color:#304ffe}
.service-artboard.is-identity .service-artboard-heading strong{color:#c45191}
.service-visual-note{
  position:absolute; z-index:2; display:flex; align-items:center; gap:8px; padding:9px 12px;
  border:1px solid rgba(255,255,255,.9); border-radius:14px; background:rgba(255,255,255,.9);
  box-shadow:0 12px 28px rgba(36,32,57,.09); color:#55536a; font-size:10px; font-weight:700;
  backdrop-filter:blur(12px); animation:serviceFloat 4s ease-in-out infinite;
}
.service-visual-note svg{color:#304ffe}
.service-visual-note-top{top:10%; left:-3%}
.service-visual-note-bottom{right:-2%; bottom:10%; animation-delay:-2s}
.service-visual-spark{position:absolute; color:#304ffe; font-size:23px; animation:serviceFloat 3.5s ease-in-out infinite}
.service-visual-spark-one{top:14%; right:7%}
.service-visual-spark-two{bottom:19%; left:4%; color:#f29bbd; animation-delay:-1.3s}
.service-detail{grid-area:detail; min-width:0}
.service-detail-top{display:flex; align-items:center; gap:12px; color:#8586a0}
.service-detail-top>span:first-child{font-size:11px; font-weight:800; letter-spacing:.1em; font-variant-numeric:tabular-nums}
.service-detail-top svg{color:#304ffe}
.service-detail-line{width:64px; height:1px; background:linear-gradient(90deg,#304ffe,#f29bbd)}
.service-detail-content{padding-top:23px; animation:serviceContentIn .48s cubic-bezier(.2,.8,.2,1) both}
.service-category-pill{
  display:inline-flex; align-items:center; padding:7px 12px; border-radius:999px;
  background:color-mix(in srgb,#304ffe 9%,#fff); color:#304ffe; font-size:10px; font-weight:700;
}
.service-detail h3{
  margin:16px 0 12px; color:#171827; font-size:clamp(27px,3vw,39px);
  font-weight:800; letter-spacing:-.045em; line-height:1.08;
}
.service-detail-content>p{margin:0; color:#77798d; font-size:13px; line-height:1.8}
.service-tags{display:flex; flex-wrap:wrap; gap:8px; margin-top:19px}
.service-tags span{
  padding:8px 11px; border:1px solid #eee8f5; border-radius:999px;
  background:rgba(255,255,255,.8); color:#6d6880; font-size:10px; font-weight:600;
}
.service-contact{
  display:inline-flex; align-items:center; gap:13px; margin-top:24px; padding:11px 15px;
  border:1px solid transparent; border-radius:999px;
  background:linear-gradient(#fff,#fff) padding-box,linear-gradient(100deg,#304ffe,#f29bbd) border-box;
  color:#29263a; font-size:11px; font-weight:800; text-decoration:none;
  box-shadow:0 8px 18px rgba(48,79,254,.08); transition:transform .2s,box-shadow .2s;
}
.service-contact:hover{transform:translateY(-2px); box-shadow:0 12px 24px rgba(48,79,254,.16)}
.service-contact svg{color:#f29bbd}
.service-progress{display:flex; gap:5px; margin-top:28px}
.service-progress span{width:23px; height:3px; border-radius:9px; background:#e5e0eb; transition:width .25s,background .25s}
.service-progress span.is-active{width:42px; background:linear-gradient(90deg,#304ffe,#f29bbd)}
.service-section :is(button,a):focus-visible{outline:2px solid #304ffe; outline-offset:3px}
@keyframes serviceFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-7px)}}
@keyframes serviceContentIn{from{opacity:0; transform:translateY(10px)}to{opacity:1; transform:none}}
@keyframes serviceVisualIn{from{opacity:0; transform:translateY(12px) scale(.985)}to{opacity:1; transform:none}}
@keyframes serviceOrbit{to{rotate:347deg}}
@media (max-width:1000px){
  .service-layout{grid-template-columns:minmax(0,1fr) minmax(0,1fr); grid-template-areas:"visual detail" "list list"; gap:28px}
  .service-visual{min-height:360px}
  .service-list-window{max-height:290px; padding-block:110px}
  .service-item{min-height:64px}
  .service-artboard-content{min-height:250px}
  .service-visual-note-top{left:0}
  .service-visual-note-bottom{right:0}
}
@media (max-width:620px){
  .service-section{padding:60px 5vw 48px}
  .service-heading{margin-bottom:26px}
  .service-eyebrow{margin-bottom:9px; font-size:15px}
  .service-title{flex-direction:column; align-items:center; gap:0; font-size:clamp(23px,6.6vw,30px); letter-spacing:-.7px}
  .service-title-accent{font-size:1.14em}
  .service-intro{margin-top:12px; font-size:12px}
  .service-layout{grid-template-columns:minmax(0,1fr); grid-template-areas:"list" "visual" "detail"; gap:18px}
  .service-list{gap:9px}
  .service-list-window{max-height:240px; padding-block:85px}
  .service-item{min-height:60px}
  .service-visual{min-height:clamp(270px,76vw,350px); margin:0 6px}
  .service-visual-orbit-two{width:92%}
  .service-artboard{width:min(100%,430px); border-radius:18px}
  .service-artboard-content{grid-template-columns:36px minmax(0,1fr); min-height:220px}
  .service-artboard-rail{gap:9px; padding-top:12px}
  .service-artboard-rail span{width:25px; height:25px}
  .service-artboard-main{padding:16px 13px}
  .service-artboard-feature{grid-template-columns:76px 1fr; gap:12px; min-height:95px; padding:10px}
  .service-artboard-symbol{width:70px; height:70px}
  .service-artboard-cards{gap:7px; margin-top:10px}
  .service-artboard-cards div{padding:7px}
  .service-artboard-cards span{height:34px}
  .service-visual-note{gap:6px; padding:8px 10px; font-size:9px}
  .service-visual-note-top{top:4%; left:-2%}
  .service-visual-note-bottom{right:-2%; bottom:5%}
  .service-detail{padding:0 2px}
  .service-detail-content{padding-top:17px}
  .service-detail h3{margin-top:13px; font-size:30px}
  .service-detail-content>p{font-size:12px}
  .service-tags{gap:6px; margin-top:15px}
  .service-tags span{padding:7px 9px; font-size:9px}
  .service-contact{margin-top:18px}
  .service-progress{margin-top:19px}
}
@media (prefers-reduced-motion:reduce){
  .service-section *, .service-section *::before, .service-section *::after{
    scroll-behavior:auto !important; animation-duration:.01ms !important;
    animation-iteration-count:1 !important; transition-duration:.01ms !important;
  }
  .service-section .service-detail-content{animation:none}
  .service-section .service-artboard,.service-section .service-visual-orbit{animation:none}
}
`;
