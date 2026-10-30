
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMoon, FiSun, FiMenu, FiX } from "react-icons/fi";
import logo from "../../assets/images/planetImg1.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "About me", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const linkClass = ({ isActive }) =>
    `navbar-link relative whitespace-nowrap ${
      isActive ? "navbar-link-active" : ""
    }`;

  return (
    <>
      <nav
        className={`navbar-wrapper ${
          darkMode ? "navbar-dark" : ""
        }`}
      >
        <div className="navbar-container">
          {/* LOGO */}
          <NavLink to="/" className="navbar-brand">
            <img src={logo} alt="Logo" className="navbar-logo" />
            <span className="brand-name">PORTFOLIO</span>
          </NavLink>

          {/* DESKTOP NAVIGATION */}
          <ul className="navbar-links">
            {links.map((link) => (
              <li key={link.path}>
                <NavLink to={link.path} className={linkClass}>
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* RIGHT SIDE */}
          <div className="navbar-actions">
            <NavLink to="/contact" className="login-link">
              Let's Talk
            </NavLink>

            <button
              type="button"
              className="theme-toggle"
              onClick={() => setDarkMode((prev) => !prev)}
              aria-label="Toggle theme"
            >
              {darkMode ? <FiSun /> : <FiMoon />}
            </button>

            <button
              type="button"
              className="mobile-menu-btn"
              onClick={() => setOpen((prev) => !prev)}
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {open ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div className={`mobile-menu ${open ? "mobile-menu-open" : ""}`}>
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={linkClass}
              onClick={() => setOpen(false)}
            >
              {link.name}
            </NavLink>
          ))}

          <NavLink
            to="/contact"
            className="mobile-contact-link"
            onClick={() => setOpen(false)}
          >
            Let's Talk
          </NavLink>
        </div>
      </nav>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap');

        .navbar-wrapper {
          --nav-pink: rgba(237, 126, 174, .9);
          --nav-blue: #536dff;

          position: fixed;
          top: 0;
          left: 0;
          z-index: 1000;
          width: 100%;
          padding: 6px 24px;
          background: rgba(247, 247, 250, 0.92);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          font-family: 'DM Sans', sans-serif;
          transition: background .3s ease;
        }

        .navbar-container {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          width: 100%;
          max-width: 1450px;
          min-height: 68px;
          margin: 0 auto;
          padding: 10px 22px;
          border: 1px solid rgba(35, 35, 50, 0.12);
          border-radius: 22px;
          background: rgba(255, 255, 255, 0.86);
          box-shadow: 0 2px 5px rgba(20, 20, 40, 0.025);
          transition: background .3s ease, border-color .3s ease;
        }

        /* BRAND */
        .navbar-brand {
          display: flex;
          flex-shrink: 0;
          align-items: center;
          gap: 10px;
          text-decoration: none;
        }

        .navbar-logo {
          display: block;
          width: 40px;
          height: 40px;
          object-fit: contain;
        }

        .brand-name {
          color: #252532;
          font-size: 18px;
          font-weight: 700;
          letter-spacing: 4px;
        }

        /* DESKTOP LINKS */
        .navbar-links {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: clamp(16px, 2.5vw, 38px);
          margin: 0 auto;
          padding: 0;
          list-style: none;
        }

        .navbar-link {
          display: inline-block;
          padding: 9px 0;
          color: #66677d;
          font-size: 15px;
          font-weight: 500;
          text-decoration: none;
          transition: color .25s ease;
        }

        /* PINK + BLUE GRADIENT TEXT ON HOVER */
        .navbar-link:hover,
        .navbar-link-active {
          background: linear-gradient(
            100deg,
            var(--nav-pink),
            var(--nav-blue)
          );
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .navbar-link::after {
          position: absolute;
          right: 0;
          bottom: 2px;
          left: 0;
          height: 2px;
          border-radius: 5px;
          background: linear-gradient(
            90deg,
            var(--nav-pink),
            var(--nav-blue)
          );
          content: "";
          transform: scaleX(0);
          transform-origin: left;
          transition: transform .25s ease;
        }

        .navbar-link:hover::after,
        .navbar-link-active::after {
          transform: scaleX(1);
        }

        /* RIGHT ACTIONS */
        .navbar-actions {
          display: flex;
          flex-shrink: 0;
          align-items: center;
          gap: 16px;
        }

        .login-link {
          color: #66677d;
          font-size: 15px;
          font-weight: 500;
          text-decoration: none;
          transition: color .25s ease;
        }

        .login-link:hover {
          color: var(--nav-blue);
        }

        .theme-toggle {
          display: flex;
          width: 44px;
          height: 44px;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(35, 35, 50, 0.12);
          border-radius: 50%;
          background: #fff;
          color: #62637a;
          font-size: 21px;
          cursor: pointer;
          transition: all .25s ease;
        }

        .theme-toggle:hover {
          border-color: transparent;
          background: linear-gradient(
            120deg,
            var(--nav-pink),
            var(--nav-blue)
          );
          color: white;
          transform: rotate(-8deg);
        }

        .mobile-menu-btn {
          display: none;
          align-items: center;
          justify-content: center;
          width: 42px;
          height: 42px;
          border: 1px solid rgba(35, 35, 50, 0.12);
          border-radius: 50%;
          background: #fff;
          color: #303047;
          font-size: 21px;
          cursor: pointer;
        }

        /* MOBILE MENU */
        .mobile-menu {
          display: none;
        }

        /* OPTIONAL DARK THEME */
        .navbar-dark {
          background: rgba(20, 21, 38, 0.94);
        }

        .navbar-dark .navbar-container {
          border-color: rgba(255, 255, 255, 0.13);
          background: rgba(31, 32, 51, 0.96);
        }

        .navbar-dark .brand-name {
          color: #fff;
        }

        .navbar-dark .navbar-link,
        .navbar-dark .login-link {
          color: #d1d1e1;
        }

        .navbar-dark .navbar-link:hover,
        .navbar-dark .navbar-link-active {
          background-image: linear-gradient(
            100deg,
            var(--nav-pink),
            var(--nav-blue)
          );
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .navbar-dark .theme-toggle {
          border-color: rgba(255, 255, 255, 0.15);
          background: #292a43;
          color: #fff;
        }

        /* RESPONSIVE */
        @media (max-width: 900px) {
          .navbar-wrapper {
            padding: 8px 16px;
          }

          .navbar-container {
            min-height: 62px;
            padding: 8px 15px;
            gap: 12px;
          }

          .brand-name {
            font-size: 15px;
            letter-spacing: 3px;
          }

          .navbar-logo {
            width: 34px;
            height: 34px;
          }

          .navbar-links {
            gap: 15px;
          }

          .navbar-link,
          .login-link {
            font-size: 13px;
          }

          .navbar-actions {
            gap: 10px;
          }
        }

        @media (max-width: 680px) {
          .navbar-wrapper {
            padding: 8px 12px;
          }

          .navbar-container {
            min-height: 60px;
            border-radius: 18px;
            padding: 8px 12px;
          }

          .navbar-links {
            display: none;
          }

          .brand-name {
            font-size: 14px;
            letter-spacing: 2.5px;
          }

          .navbar-logo {
            width: 34px;
            height: 34px;
          }

          .navbar-actions {
            margin-left: auto;
          }

          .login-link {
            display: none;
          }

          .mobile-menu-btn {
            display: flex;
          }

          .mobile-menu {
            display: flex;
            position: absolute;
            top: calc(100% + 8px);
            left: 12px;
            right: 12px;
            flex-direction: column;
            gap: 8px;
            padding: 12px;
            border: 1px solid rgba(35, 35, 50, 0.1);
            border-radius: 18px;
            background: #fff;
            box-shadow: 0 12px 35px rgba(30, 30, 55, 0.1);
            opacity: 0;
            visibility: hidden;
            transform: translateY(-8px);
            transition: opacity .25s ease, transform .25s ease,
              visibility .25s ease;
          }

          .mobile-menu-open {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
          }

          .mobile-menu .navbar-link {
            display: block;
            padding: 12px 14px;
            border-radius: 10px;
            font-size: 15px;
          }

          .mobile-menu .navbar-link:hover {
            background-color: rgba(237, 126, 174, 0.08);
          }

          .mobile-contact-link {
            display: block;
            margin-top: 4px;
            padding: 12px 14px;
            border-radius: 10px;
            background: linear-gradient(
              100deg,
              var(--nav-pink),
              var(--nav-blue)
            );
            color: #fff;
            font-size: 14px;
            font-weight: 600;
            text-align: center;
            text-decoration: none;
          }

          .navbar-dark .mobile-menu {
            border-color: rgba(255, 255, 255, 0.12);
            background: #202138;
          }

          .navbar-dark .mobile-menu .navbar-link {
            color: #eeeef8;
          }

          .navbar-dark .mobile-contact-link {
            color: #fff;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .navbar-wrapper *,
          .navbar-wrapper *::before,
          .navbar-wrapper *::after {
            transition: none !important;
          }
        }
      `}</style>

      {/* NAVBAR SPACER */}
      <div className="navbar-spacer" />

      <style>{`
        .navbar-spacer {
          height: 82px;
        }

        @media (max-width: 680px) {
          .navbar-spacer {
            height: 76px;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
