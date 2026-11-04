
import React, { useState } from "react";
import {
  Mail,
  Phone,
  MessageCircle,
  ArrowUpRight,
  Sparkles,
  Send,
  Paperclip,
  X,
  MoveUpRight,
} from "lucide-react";

function HomePageContact() {
  const [service, setService] = useState("UI/UX Design");
  const [file, setFile] = useState(null);
  const [sending, setSending] = useState(false);

  const services = [
    "UI/UX Design",
    "Web Design",
    "App Design",
    "Other",
  ];


  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    if (!form.reportValidity()) return;

    setSending(true);

    const data = new FormData(form);

    const subject = encodeURIComponent(
      "New Project Inquiry - Portfolio"
    );

    const body = encodeURIComponent(
      `Hello Priyanka,

I would like to discuss a project with you.

Service: ${service}

Name: ${data.get("name")}
Email: ${data.get("email")}

Project Details:
${data.get("details")}

Selected file: ${file ? file.name : "No file attached"}

Looking forward to connecting!`
    );

    window.location.href =
      `mailto:priyankachandel348@gmail.com?subject=${subject}&body=${body}`;

    setSending(false);
  };

  return (
    <section className="contact-section" id="contact">

      <style>{`

        .contact-section,
        .contact-section * {
          box-sizing: border-box;
        }

        .contact-section {
          --blue: #304ffe;
          --pink: #f29bbd;
          --dark: #242039;
          --muted: #777489;

          position: relative;
          isolation: isolate;
          overflow: hidden;
          padding: 38px 24px;
          background: #fff;
          color: var(--dark);
          font-family: 'DM Sans', sans-serif;
        }

        /* SECTION BACKGROUND: PURE WHITE */

        .contact-shell {
          width: 100%;
          max-width: 1160px;
          margin: auto;
        }

        /* MAIN GLASS CARD */

        .contact-card {
          position: relative;
          display: grid;
          grid-template-columns: .88fr 1.12fr;
          align-items: center;
          gap: 34px;
          padding: 30px 34px;
          overflow: hidden;

          border: 1px solid transparent;
          border-radius: 26px;
          background:
            linear-gradient(135deg, rgba(255,255,255,.96), rgba(255,255,255,.88)) padding-box,
            conic-gradient(from var(--contact-angle), #304ffe, #f29bbd, #ffffff, #f29bbd, #304ffe) border-box;

          backdrop-filter: blur(25px);
          -webkit-backdrop-filter: blur(25px);

          box-shadow:
            0 25px 80px rgba(48,79,254,.09),
            0 8px 35px rgba(36,32,57,.045),
            inset 0 1px 0 white;

          animation: cardEnter .9s ease both;
        }

        .contact-card::before {
          content: "";
          position: absolute;
          inset: -1px;
          padding: 1.5px;
          border-radius: inherit;
          background: conic-gradient(
            from var(--contact-angle),
            #304ffe,
            #8b9aff,
            #f29bbd,
            #ffffff,
            #f29bbd,
            #304ffe
          );
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
          animation: neonBorder 7s linear infinite;
          z-index: 3;
        }

        .contact-card::after {
          content: "";
          position: absolute;
          width: 280px;
          height: 280px;
          right: -170px;
          top: -190px;
          border-radius: 50%;
          background: var(--pink);
          opacity: .14;
          filter: blur(75px);
          pointer-events: none;
          z-index: 0;
        }

        .contact-card > * {
          position: relative;
          z-index: 1;
        }

        /* LEFT SECTION */

        .contact-left {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          justify-content: center;
          min-width: 0;
        }

        .contact-top {
          animation: slideUp .8s .15s both;
        }

        .contact-label {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          margin: 0 0 15px;
          color: var(--blue);
          font-size: 11px;
          font-weight: 800;
          letter-spacing: .17em;
        }

        .contact-label svg {
          color: var(--pink);
        }

        .contact-title {
          margin: 0;
          color: var(--dark);
          font-size: clamp(34px, 3.5vw, 43px);
          font-weight: 750;
          letter-spacing: -.055em;
          line-height: 1.08;
        }

        .contact-title span {
          display: inline-block;
          color: var(--pink);
          font-family: 'Caveat', cursive;
          font-size: 1.12em;
          font-weight: 600;
          letter-spacing: 0;
        }

        .contact-description {
          max-width: 350px;
          margin: 15px 0 18px;
          color: var(--muted);
          font-size: 13px;
          line-height: 1.65;
        }

        /* CONTACT DETAILS */

        .contact-details {
          margin-top: 22px;
          animation: slideUp .8s .35s both;
        }

        .contact-details-title {
          margin: 0 0 15px;
          color: var(--muted);
          font-size: 11px;
          font-weight: 800;
          letter-spacing: .15em;
        }

        .contact-link {
          display: flex;
          width: fit-content;
          align-items: center;
          gap: 12px;
          margin: 9px 0;
          color: var(--dark);
          font-size: 12px;
          font-weight: 600;
          text-decoration: none;
          overflow-wrap: anywhere;
          transition: .3s ease;
        }

        .contact-link:hover {
          color: var(--blue);
          transform: translateX(5px);
        }

        .contact-link-icon {
          display: grid;
          width: 33px;
          height: 33px;
          flex-shrink: 0;
          place-items: center;
          border: 1px solid rgba(48,79,254,.10);
          border-radius: 12px;
          background: rgba(255,255,255,.85);
          color: var(--blue);
          transition: .3s ease;
        }

        .contact-link:hover .contact-link-icon {
          background: var(--blue);
          color: white;
          transform: rotate(-7deg);
        }

        .contact-status {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: 17px;
          color: var(--muted);
          font-size: 11px;
          line-height: 1.6;
        }

        .contact-status-dot {
          width: 8px;
          height: 8px;
          flex-shrink: 0;
          border-radius: 50%;
          background: #36b37e;
          box-shadow: 0 0 0 5px rgba(54,179,126,.12);
          animation: pulseDot 2s infinite;
        }

        /* RIGHT FORM GLASS */

        .contact-right {
          position: relative;
          z-index: 2;
          min-width: 0;
          padding: 21px 23px;
          border: 1px solid rgba(255,255,255,.95);
          border-radius: 21px;
          background: rgba(255,255,255,.62);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          box-shadow:
            0 15px 45px rgba(36,32,57,.045),
            inset 0 1px 0 white;

          animation: slideUp .9s .25s both;
          transition: box-shadow .4s ease;
        }

        .contact-right:hover {
          box-shadow:
            0 20px 55px rgba(48,79,254,.08),
            inset 0 1px 0 white;
        }

        .contact-form-heading {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
          margin-bottom: 14px;
        }

        .contact-form-heading h3 {
          margin: 0;
          font-size: 20px;
          font-weight: 750;
          letter-spacing: -.04em;
        }

        .contact-form-heading p {
          margin: 4px 0 0;
          color: var(--muted);
          font-size: 12px;
          line-height: 1.6;
        }

        .contact-form-icon {
          display: grid;
          width: 38px;
          height: 38px;
          flex-shrink: 0;
          place-items: center;
          border: 1px solid rgba(48,79,254,.1);
          border-radius: 14px;
          background: linear-gradient(
            135deg,
            rgba(48,79,254,.11),
            rgba(242,155,189,.2)
          );
          color: var(--blue);
          animation: floatIcon 4s ease-in-out infinite;
        }

        /* FORM GROUP */

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .contact-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .contact-group label,
        .contact-group-title {
          color: var(--dark);
          font-size: 12px;
          font-weight: 700;
        }

        .contact-required {
          color: var(--pink);
        }

        /* SERVICE PILLS */

        .contact-options {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
        }

        .contact-pill {
          padding: 7px 11px;
          border: 1px solid rgba(36,32,57,.12);
          border-radius: 30px;
          background: rgba(255,255,255,.7);
          color: #666276;
          font-family: inherit;
          font-size: 11px;
          font-weight: 500;
          cursor: pointer;
          transition: .3s ease;
        }

        .contact-pill:hover {
          border-color: var(--blue);
          color: var(--blue);
          transform: translateY(-2px);
        }

        .contact-pill.active {
          border-color: var(--blue);
          background: var(--blue);
          color: white;
          box-shadow: 0 5px 15px rgba(48,79,254,.18);
        }

        /* INPUTS */

        .contact-input-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .contact-input,
        .contact-textarea {
          width: 100%;
          min-width: 0;
          padding: 9px 12px;
          border: 1px solid rgba(36,32,57,.12);
          border-radius: 10px;
          outline: none;
          background: rgba(255,255,255,.8);
          color: var(--dark);
          font-family: inherit;
          font-size: 12px;
          transition: .3s ease;
        }

        .contact-input::placeholder,
        .contact-textarea::placeholder {
          color: #aaa7b7;
        }

        .contact-input:focus,
        .contact-textarea:focus {
          border-color: var(--blue);
          background: white;
          box-shadow: 0 0 0 4px rgba(48,79,254,.08);
        }

        .contact-textarea {
          min-height: 68px;
          resize: vertical;
          line-height: 1.6;
        }

        /* FILE UPLOAD */

        .contact-upload {
          position: relative;
          display: flex;
          min-height: 57px;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          gap: 4px;
          padding: 8px 12px;
          border: 1px dashed rgba(48,79,254,.28);
          border-radius: 12px;
          background: rgba(48,79,254,.025);
          color: var(--muted);
          cursor: pointer;
          overflow: hidden;
          transition: .3s ease;
        }

        .contact-upload:hover {
          border-color: var(--blue);
          background: rgba(48,79,254,.055);
          transform: translateY(-2px);
        }

        .contact-upload svg {
          color: var(--blue);
        }

        .contact-upload strong {
          color: var(--dark);
          font-size: 11px;
          font-weight: 600;
        }

        .contact-upload small {
          font-size: 10px;
        }

        .contact-file-input {
          position: absolute;
          width: 1px;
          height: 1px;
          opacity: 0;
          pointer-events: none;
        }

        .contact-file-name {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          color: var(--blue);
          font-size: 11px;
          overflow-wrap: anywhere;
        }

        .contact-file-remove {
          display: grid;
          width: 25px;
          height: 25px;
          flex-shrink: 0;
          place-items: center;
          border: 0;
          border-radius: 50%;
          background: rgba(242,155,189,.18);
          color: var(--dark);
          cursor: pointer;
        }

        /* SUBMIT BUTTON */

        .contact-submit {
          position: relative;
          display: flex;
          width: 100%;
          min-height: 42px;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin-top: 3px;
          padding: 10px 18px;
          overflow: hidden;
          border: 0;
          border-radius: 30px;
          background: linear-gradient(105deg, var(--blue), #6479ff);
          color: white;
          font-family: inherit;
          font-size: 12px;
          font-weight: 700;
          cursor: pointer;
          box-shadow: 0 9px 24px rgba(48,79,254,.2);
          transition: .35s ease;
        }

        .contact-submit::before {
          content: "";
          position: absolute;
          top: 0;
          left: -110%;
          width: 70%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255,255,255,.35),
            transparent
          );
          transform: skewX(-20deg);
          transition: .7s ease;
        }

        .contact-submit:hover::before {
          left: 130%;
        }

        .contact-submit:hover {
          transform: translateY(-3px);
          box-shadow: 0 14px 30px rgba(48,79,254,.3);
        }

        .contact-submit svg {
          transition: transform .3s ease;
        }

        .contact-submit:hover svg {
          transform: translate(3px, -3px);
        }

        .contact-form-footnote {
          margin: -5px 0 0;
          color: #9995a8;
          font-size: 10px;
          text-align: center;
        }

        @property --contact-angle {
          syntax: '<angle>';
          initial-value: 0deg;
          inherits: false;
        }

        /* ANIMATIONS */

        @keyframes neonBorder {
          to { --contact-angle: 360deg; }
        }

        @keyframes cardEnter {
          from {
            opacity: 0;
            transform: translateY(30px) scale(.985);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(22px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes floatIcon {
          0%, 100% { transform: translateY(0) rotate(0); }
          50% { transform: translateY(-6px) rotate(4deg); }
        }

        @keyframes pulseDot {
          0%, 100% { box-shadow: 0 0 0 4px rgba(54,179,126,.12); }
          50% { box-shadow: 0 0 0 8px rgba(54,179,126,.05); }
        }

        /* RESPONSIVE */

        @media(max-width: 950px) {
          .contact-card {
            gap: 24px;
            padding: 26px;
          }

          .contact-right {
            padding: 19px;
          }

          .contact-title {
            font-size: 35px;
          }
        }

        @media(max-width: 700px) {
          .contact-section {
            padding: 34px 14px;
          }

          .contact-card {
            grid-template-columns: 1fr;
            gap: 22px;
            padding: 22px 17px;
            border-radius: 23px;
          }

          .contact-title {
            font-size: clamp(35px, 9vw, 43px);
          }

          .contact-description {
            font-size: 13px;
          }

          .contact-details {
            margin-top: 26px;
          }

          .contact-right {
            padding: 18px 15px;
          }

          .contact-input-row {
            grid-template-columns: 1fr;
            gap: 15px;
          }
        }

        @media(max-width: 380px) {
          .contact-options {
            gap: 7px;
          }

          .contact-pill {
            padding: 8px 10px;
            font-size: 10px;
          }

          .contact-form-heading h3 {
            font-size: 19px;
          }
        }

        @media(prefers-reduced-motion: reduce) {
          .contact-section *,
          .contact-section *::before,
          .contact-section *::after {
            animation: none !important;
            transition: none !important;
          }
        }

      `}</style>

      <div className="contact-shell">

        <div className="contact-card">

          {/* LEFT SIDE */}

          <div className="contact-left">

            <div className="contact-top">

              <p className="contact-label">
                <Sparkles size={15} />
                LET'S CONNECT
              </p>

              <h2 className="contact-title">
                Tell us about your
                <br />
                project
                <br />
                <span>Let's create something great.</span>
              </h2>

              <p className="contact-description">
                Have a project in mind? I'd love to hear
                about your ideas, understand your vision
                and help create a meaningful digital experience.
              </p>



            </div>

            <div className="contact-details">

              <p className="contact-details-title">
                GET IN TOUCH
              </p>

              <a
                href="mailto:priyankachandel348@gmail.com"
                className="contact-link"
              >
                <span className="contact-link-icon">
                  <Mail size={17} />
                </span>
                priyankachandel348@gmail.com
              </a>

              <a
                href="tel:+917895763977"
                className="contact-link"
              >
                <span className="contact-link-icon">
                  <Phone size={17} />
                </span>
                +91 7895763977
              </a>

              <a
                href="https://wa.me/917895763977"
                target="_blank"
                rel="noreferrer"
                className="contact-link"
              >
                <span className="contact-link-icon">
                  <MessageCircle size={17} />
                </span>
                Message me on WhatsApp
                <ArrowUpRight size={14} />
              </a>

              <div className="contact-status">
                <span className="contact-status-dot" />
                Open to new opportunities and collaborations
              </div>

            </div>

          </div>

          {/* RIGHT SIDE FORM */}

          <div className="contact-right">

            <div className="contact-form-heading">

              <div>
                <h3>Send me a message</h3>
                <p>
                  Tell me a little about your next big idea.
                </p>
              </div>

              <div className="contact-form-icon">
                <Send size={19} />
              </div>

            </div>

            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >

              {/* SERVICE */}

              <div className="contact-group">

                <span className="contact-group-title">
                  Service
                </span>

                <div className="contact-options">

                  {services.map((item) => (
                    <button
                      key={item}
                      type="button"
                      className={`contact-pill ${
                        service === item ? "active" : ""
                      }`}
                      onClick={() => setService(item)}
                    >
                      {item}
                    </button>
                  ))}

                </div>

              </div>

              {/* NAME AND EMAIL */}

              <div className="contact-input-row">

                <div className="contact-group">
                  <label htmlFor="contact-name">
                    Full name<span className="contact-required">*</span>
                  </label>

                  <input
                    id="contact-name"
                    className="contact-input"
                    type="text"
                    name="name"
                    placeholder="Your name"
                    autoComplete="name"
                    required
                  />
                </div>

                <div className="contact-group">
                  <label htmlFor="contact-email">
                    Email address<span className="contact-required">*</span>
                  </label>

                  <input
                    id="contact-email"
                    className="contact-input"
                    type="email"
                    name="email"
                    placeholder="Your email"
                    autoComplete="email"
                    required
                  />
                </div>

              </div>

              {/* PROJECT DETAILS */}

              <div className="contact-group">

                <label htmlFor="contact-details">
                  Project details<span className="contact-required">*</span>
                </label>

                <textarea
                  id="contact-details"
                  className="contact-textarea"
                  name="details"
                  placeholder="Tell me about your project, goals and ideas..."
                  required
                />

              </div>

              {/* FILE UPLOAD */}

              <div className="contact-group">

                <span className="contact-group-title">
                  Attach a file <span style={{color:"#999"}}>(optional)</span>
                </span>

                <label className="contact-upload">

                  <input
                    type="file"
                    className="contact-file-input"
                    accept=".pdf,.png,.jpg,.jpeg,.doc,.docx"
                    onChange={(e) =>
                      setFile(e.target.files?.[0] || null)
                    }
                  />

                  <Paperclip size={19} />

                  <strong>
                    {file ? "File selected" : "Choose a file or drag and drop"}
                  </strong>

                  <small>
                    PDF, PNG, JPG or DOC
                  </small>

                </label>

                {file && (
                  <div className="contact-file-name">
                    <span>{file.name}</span>

                    <button
                      type="button"
                      className="contact-file-remove"
                      aria-label="Remove file"
                      onClick={() => setFile(null)}
                    >
                      <X size={14} />
                    </button>
                  </div>
                )}

              </div>

              {/* SUBMIT */}

              <button
                className="contact-submit"
                type="submit"
                disabled={sending}
              >
                {sending ? "Opening email..." : "Submit inquiry"}
                <MoveUpRight size={16} />
              </button>

              <p className="contact-form-footnote">
                Your project details will be used to respond to your inquiry.
              </p>

            </form>

          </div>

        </div>

      </div>

    </section>
  );
}

export default HomePageContact;
