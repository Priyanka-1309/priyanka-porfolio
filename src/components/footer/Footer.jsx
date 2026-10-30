import React from "react"
import { ArrowUpRight, BriefcaseBusiness, House, Mail, UserRound } from "lucide-react"
import { Link } from "react-router-dom"

const navigation = [
  { label: "Home", to: "/", Icon: House },
  { label: "Projects", to: "/projects", Icon: BriefcaseBusiness },
  { label: "About", to: "/about", Icon: UserRound },
  { label: "Contact", to: "/contact", Icon: Mail },
]

function Footer() {
  return (
    <footer className="site-footer">
      <style>{`
        .site-footer,
        .site-footer * {
          box-sizing: border-box;
        }

        .site-footer {
          --footer-blue: #304ffe;
          --footer-pink: #f29bbd;
          --footer-dark: #242039;
          --footer-muted: #777489;
          overflow: hidden;
          border-top: 1px solid #eeedf3;
          background: #fff;
          color: var(--footer-dark);
          font-family: 'DM Sans', sans-serif;
        }

        .footer-shell {
          width: 100%;
          max-width: 1160px;
          margin: 0 auto;
          padding: 38px 24px 24px;
        }

        .footer-cta {
          position: relative;
          display: flex;
          min-height: 190px;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          padding: 32px 42px;
          overflow: hidden;
          border: 1px solid #eeedf3;
          border-radius: 24px;
          background: linear-gradient(110deg, #faf9ff 0%, #fff8fb 100%);
        }

        .footer-cta-copy {
          position: relative;
          z-index: 1;
          max-width: 650px;
        }

        .footer-eyebrow {
          margin: 0 0 8px;
          color: var(--footer-blue);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: .15em;
        }

        .footer-heading {
          margin: 0;
          font-size: clamp(24px, 3vw, 36px);
          font-weight: 700;
          letter-spacing: -.045em;
          line-height: 1.2;
        }

        .footer-heading span {
          color: var(--footer-pink);
          font-family: 'Caveat', cursive;
          font-size: 1.16em;
          font-weight: 600;
          letter-spacing: 0;
        }

        .footer-description {
          margin: 10px 0 0;
          color: var(--footer-muted);
          font-size: 13px;
          line-height: 1.65;
        }

        .footer-cta-link {
          position: relative;
          z-index: 1;
          display: inline-flex;
          flex: 0 0 auto;
          align-items: center;
          gap: 10px;
          padding: 13px 20px;
          border-radius: 999px;
          background: var(--footer-dark);
          color: #fff;
          font-size: 13px;
          font-weight: 600;
          text-decoration: none;
          transition: transform .2s ease, background .2s ease;
        }

        .footer-cta-link:hover {
          transform: translateY(-2px);
          background: var(--footer-blue);
        }

        .footer-design-art {
          position: absolute;
          right: 160px;
          bottom: 20px;
          width: 170px;
          height: 128px;
          pointer-events: none;
          animation: footer-drift 7s ease-in-out infinite;
        }

        .footer-design-window {
          position: absolute;
          top: 4px;
          right: 8px;
          width: 132px;
          height: 94px;
          padding: 9px;
          border: 1px solid #eeedf3;
          border-radius: 12px;
          background: #fff;
          box-shadow: 0 12px 30px #24203912;
          transform: rotate(5deg);
        }

        .footer-design-topbar {
          display: flex;
          gap: 4px;
          padding-bottom: 7px;
          border-bottom: 1px solid #f0eef5;
        }

        .footer-design-topbar i {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #f29bbd;
        }

        .footer-design-topbar i:nth-child(2) {
          background: #d7d0ff;
        }

        .footer-design-topbar i:nth-child(3) {
          background: #304ffe;
        }

        .footer-design-content {
          display: grid;
          grid-template-columns: 35px 1fr;
          gap: 8px;
          padding-top: 8px;
        }

        .footer-design-tile {
          display: grid;
          height: 40px;
          place-items: center;
          border-radius: 7px;
          background: linear-gradient(145deg, #304ffe, #8b9cff);
        }

        .footer-design-tile::after {
          width: 13px;
          height: 13px;
          border: 2px solid #fff;
          border-radius: 50%;
          content: "";
        }

        .footer-design-lines {
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 5px;
        }

        .footer-design-lines i {
          height: 4px;
          border-radius: 99px;
          background: #e8e7ef;
        }

        .footer-design-lines i:first-child {
          width: 80%;
          background: #d7d0ff;
        }

        .footer-design-lines i:last-child {
          width: 58%;
        }

        .footer-design-palette {
          position: absolute;
          bottom: 2px;
          left: 5px;
          display: flex;
          gap: 5px;
          padding: 7px;
          border: 1px solid #eeedf3;
          border-radius: 999px;
          background: #fff;
          box-shadow: 0 8px 20px #24203910;
          transform: rotate(-7deg);
        }

        .footer-design-palette i {
          width: 13px;
          height: 13px;
          border-radius: 50%;
          background: #304ffe;
        }

        .footer-design-palette i:nth-child(2) {
          background: #f29bbd;
        }

        .footer-design-palette i:nth-child(3) {
          background: #d7d0ff;
        }

        .footer-design-palette i:nth-child(4) {
          background: #242039;
        }

        .footer-nav {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 10px 38px;
          padding: 28px 0 22px;
        }

        .footer-nav-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: var(--footer-muted);
          font-size: 13px;
          font-weight: 600;
          text-decoration: none;
          transition: color .2s ease;
        }

        .footer-nav-link svg {
          color: var(--footer-blue);
          transition: transform .2s ease;
        }

        .footer-nav-link:hover {
          color: var(--footer-blue);
        }

        .footer-nav-link:hover svg {
          transform: translateY(-2px);
        }

        .footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 14px;
          padding-top: 18px;
          border-top: 1px solid #eeedf3;
          color: #9290a0;
          font-size: 11px;
        }

        .footer-credit {
          margin: 0;
        }

        .footer-credit span {
          color: var(--footer-blue);
          font-weight: 700;
        }

        @keyframes footer-drift {
          0%, 100% { transform: translateY(0) rotate(-4deg); }
          50% { transform: translateY(-8px) rotate(3deg); }
        }

        @media (max-width: 640px) {
          .footer-shell {
            padding: 24px 18px 20px;
          }

          .footer-cta {
            min-height: 0;
            align-items: flex-start;
            flex-direction: column;
            padding: 26px 24px;
          }

          .footer-cta-link {
            margin-top: 4px;
          }

          .footer-design-art {
            right: -32px;
            bottom: 4px;
            opacity: .35;
            transform: scale(.8);
            transform-origin: bottom right;
          }

          .footer-nav {
            justify-content: flex-start;
            gap: 16px 24px;
            padding: 24px 4px 20px;
          }

          .footer-bottom {
            align-items: flex-start;
            flex-direction: column;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .footer-design-art {
            animation: none;
          }
        }
      `}</style>

      <div className="footer-shell">
        <section className="footer-cta" aria-labelledby="footer-heading">
          <div className="footer-cta-copy">
            <p className="footer-eyebrow">HAVE AN IDEA?</p>
            <h2 className="footer-heading" id="footer-heading">
              Let&apos;s make it <span>happen.</span>
            </h2>
            <p className="footer-description">
              Thoughtful design starts with a good conversation. Tell me what you have in mind.
            </p>
          </div>
          <div className="footer-design-art" aria-hidden="true">
            <div className="footer-design-window">
              <div className="footer-design-topbar"><i /><i /><i /></div>
              <div className="footer-design-content">
                <span className="footer-design-tile" />
                <span className="footer-design-lines"><i /><i /><i /></span>
              </div>
            </div>
            <div className="footer-design-palette"><i /><i /><i /><i /></div>
          </div>
          <a className="footer-cta-link" href="mailto:priyankachandel348@gmail.com">
            Let&apos;s talk <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </section>

        <nav className="footer-nav" aria-label="Footer navigation">
          {navigation.map((item) => (
            <Link className="footer-nav-link" key={item.label} to={item.to}>
              <item.Icon size={16} aria-hidden="true" />
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="footer-bottom">
          <p className="footer-credit">
            Designed &amp; developed with <span>♥</span> by Priyanka Chandel
          </p>
          <span>© {new Date().getFullYear()} Priyanka Chandel</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
