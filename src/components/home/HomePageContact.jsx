import React from "react"
import { ArrowDown, Mail, MessageCircle, Phone } from "lucide-react"
import girlImage from "../../assets/images/girlImage2.png"
import ContactSubmitForm from "../contactSubmitForm/ContactSubmitForm"

function HomePageContact() {
  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-heading">
      <style>{`
        .contact-section,
        .contact-section * {
          box-sizing: border-box;
        }

        .contact-section {
          --contact-blue: #304ffe;
          --contact-pink: #f29bbd;
          --contact-dark: #242039;
          --contact-muted: #777489;
          position: relative;
          isolation: isolate;
          overflow: hidden;
          padding: 88px 24px 96px;
          background: #fff;
          color: var(--contact-dark);
          font-family: 'DM Sans', sans-serif;
        }

        .contact-section::before {
          position: absolute;
          z-index: -1;
          top: 2%;
          right: -180px;
          width: 420px;
          height: 420px;
          border-radius: 50%;
          background: var(--contact-pink);
          content: "";
          opacity: .13;
          filter: blur(110px);
          pointer-events: none;
        }

        .contact-shell {
          width: 100%;
          max-width: 1160px;
          margin: 0 auto;
        }

        .contact-intro {
          position: relative;
          display: grid;
          grid-template-columns: minmax(0, 1fr) 260px;
          align-items: center;
          min-height: 260px;
          margin-bottom: 32px;
          padding: 42px 56px;
          overflow: hidden;
          border: 1px solid #eeedf3;
          border-radius: 28px;
          background: linear-gradient(115deg, #fff 45%, #fff8fb 100%);
        }

        .contact-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 14px;
          color: var(--contact-blue);
          font-size: 12px;
          font-weight: 700;
          letter-spacing: .16em;
        }

        .contact-heading {
          max-width: 720px;
          margin: 0;
          color: var(--contact-dark);
          font-family: 'DM Sans', sans-serif;
          font-size: clamp(25px, 2.7vw, 36px);
          font-weight: 700;
          letter-spacing: -.04em;
          line-height: 1.3;
        }

        .contact-heading span {
          display: inline-block;
          color: var(--contact-pink);
          font-family: 'Caveat', cursive;
          font-size: 1.2em;
          font-weight: 600;
          letter-spacing: 0;
          line-height: 1.05;
        }

        .contact-lede {
          max-width: 560px;
          margin: 16px 0 0;
          color: var(--contact-muted);
          font-size: 15px;
          line-height: 1.75;
        }

        .contact-art {
          position: relative;
          display: grid;
          width: 230px;
          height: 240px;
          place-items: center;
          justify-self: end;
          overflow: hidden;
          border: 1px solid #f4dce6;
          border-radius: 42% 42% 24px 24px;
          background: radial-gradient(circle at 50% 35%, #fff 0 12%, #fff5f9 54%, #f8f6ff 100%);
        }

        .contact-art::before,
        .contact-art::after {
          position: absolute;
          border: 1px solid #304ffe18;
          border-radius: 50%;
          content: "";
          width: 190px;
          height: 190px;
          top: 16px;
          left: 50%;
          transform: translateX(-50%);
        }

        .contact-art::after {
          width: 158px;
          height: 158px;
          top: 32px;
          border-color: #f29bbd70;
        }

        .contact-girl {
          position: relative;
          z-index: 1;
          align-self: end;
          width: 210px;
          max-height: 225px;
          object-fit: contain;
          object-position: center bottom;
          animation: contact-float 6s ease-in-out infinite;
        }

        .contact-art-note {
          position: absolute;
          z-index: 2;
          right: 14px;
          bottom: 20px;
          padding: 8px 12px;
          border: 1px solid #eee8ff;
          border-radius: 999px;
          background: #fff;
          color: var(--contact-blue);
          box-shadow: 0 8px 24px #24203912;
          font-size: 10px;
          font-weight: 700;
        }

        .contact-content {
          display: grid;
          grid-template-columns: .82fr 1.18fr;
          gap: 32px;
          align-items: stretch;
        }

        .contact-details,
        .contact-form-card {
          border: 1px solid #eeedf3;
          border-radius: 24px;
          background: #fff;
        }

        .contact-details {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 420px;
          padding: 34px;
          background: #faf9ff;
        }

        .contact-details h3,
        .contact-form-title {
          margin: 0;
          font-size: 19px;
          font-weight: 700;
          letter-spacing: -.02em;
        }

        .contact-detail-copy {
          margin: 10px 0 28px;
          color: var(--contact-muted);
          font-size: 14px;
          line-height: 1.7;
        }

        .contact-links {
          display: grid;
          gap: 12px;
        }

        .contact-link {
          display: flex;
          min-width: 0;
          align-items: center;
          gap: 12px;
          color: var(--contact-dark);
          font-size: 13px;
          font-weight: 600;
          text-decoration: none;
          overflow-wrap: anywhere;
          transition: color .2s ease;
        }

        .contact-link:hover {
          color: var(--contact-blue);
        }

        .contact-link-whatsapp:hover {
          color: #168b52;
        }

        .contact-link-icon {
          display: grid;
          width: 38px;
          height: 38px;
          flex: 0 0 auto;
          place-items: center;
          border-radius: 50%;
          background: #fff;
          color: var(--contact-blue);
        }

        .contact-note {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: 30px;
          color: var(--contact-muted);
          font-size: 12px;
          line-height: 1.6;
        }

        .contact-note-dot {
          width: 8px;
          height: 8px;
          flex: 0 0 auto;
          border-radius: 50%;
          background: #36b37e;
          box-shadow: 0 0 0 4px #36b37e1c;
        }

        .contact-form-card {
          padding: 34px;
          box-shadow: 0 18px 55px #24203908;
        }

        .contact-form-heading {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 16px;
          margin-bottom: 22px;
        }

        .contact-form-heading p {
          margin: 6px 0 0;
          color: var(--contact-muted);
          font-size: 13px;
        }

        .contact-form-arrow {
          display: grid;
          width: 42px;
          height: 42px;
          flex: 0 0 auto;
          place-items: center;
          border-radius: 50%;
          background: #f4f2ff;
          color: var(--contact-blue);
        }

        @keyframes contact-float {
          0%, 100% { transform: translateY(0) rotate(-3deg); }
          50% { transform: translateY(-8px) rotate(2deg); }
        }

        @media (max-width: 760px) {
          .contact-section {
            padding: 64px 18px 72px;
          }

          .contact-intro {
            grid-template-columns: 1fr;
            min-height: auto;
            padding: 32px 26px;
          }

          .contact-art {
            width: 190px;
            height: 205px;
            margin: 22px auto 0;
            justify-self: center;
          }

          .contact-girl {
            width: 180px;
            max-height: 190px;
          }

          .contact-content {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .contact-details {
            min-height: 0;
            padding: 26px;
          }

          .contact-form-card {
            padding: 26px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .contact-girl {
            animation: none;
          }
        }
      `}</style>

      <div className="contact-shell">
        <header className="contact-intro">
          <div>
            <p className="contact-eyebrow">
              <span aria-hidden="true">✦</span> LET&apos;S TALK
            </p>
            <h2 className="contact-heading" id="contact-heading">
              Have a project in mind?
              <br />
              <span>Let&apos;s create something meaningful.</span>
            </h2>
            <p className="contact-lede">
              Tell me a little about what you&apos;re building. I&apos;d love to hear
              your idea and explore how we can bring it to life.
            </p>
          </div>
          <div className="contact-art" aria-hidden="true">
            <img className="contact-girl" src={girlImage} alt="" />
            <span className="contact-art-note">Let&apos;s create!</span>
          </div>
        </header>

        <div className="contact-content">
          <aside className="contact-details">
            <div>
              <h3>Let&apos;s make it happen</h3>
              <p className="contact-detail-copy">
                Have a question, a project, or just want to say hello? Pick the
                easiest way to reach me.
              </p>
              <div className="contact-links">
                <a className="contact-link" href="mailto:priyankachandel348@gmail.com">
                  <span className="contact-link-icon"><Mail size={17} /></span>
                  priyankachandel348@gmail.com
                </a>
                <a className="contact-link" href="tel:+917895763977">
                  <span className="contact-link-icon"><Phone size={17} /></span>
                  +91 7895763977
                </a>
                <a
                  className="contact-link contact-link-whatsapp"
                  href="https://wa.me/917895763977"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="contact-link-icon"><MessageCircle size={17} /></span>
                  Message me on WhatsApp
                </a>
              </div>
            </div>
            <p className="contact-note">
              <span className="contact-note-dot" aria-hidden="true" />
              Open to thoughtful collaborations and new opportunities.
            </p>
          </aside>

          <div className="contact-form-card">
            <div className="contact-form-heading">
              <div>
                <h3 className="contact-form-title">Send me a message</h3>
                <p>I&apos;ll get back to you as soon as I can.</p>
              </div>
              <span className="contact-form-arrow" aria-hidden="true">
                <ArrowDown size={19} />
              </span>
            </div>
            <ContactSubmitForm />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomePageContact
