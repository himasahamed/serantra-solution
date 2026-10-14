import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import {
  Link,
  NavLink,
  useLocation,
} from "react-router-dom";

import "./Navbar.css";


const navLinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Services",
    path: "/services",
  },
  {
    name: "Projects",
    path: "/projects",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];


export default function Navbar() {
  const [mobileOpen, setMobileOpen] =
    useState(false);

  const [scrolled, setScrolled] =
    useState(false);

  const location =
    useLocation();


  /* =======================================================
     CLOSE MOBILE MENU AFTER ROUTE CHANGE
  ======================================================= */

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);


  /* =======================================================
     NAVBAR SCROLL EFFECT
  ======================================================= */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(
        window.scrollY > 20
      );
    };

    handleScroll();

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);


  return (
    <header
      className={`serantra-navbar ${
        scrolled
          ? "serantra-navbar-scrolled"
          : ""
      }`}
    >
      <div className="navbar-container">

        {/* =================================================
            LOGO
        ================================================== */}

        <Link
          to="/"
          className="navbar-logo"
          aria-label="Serantra Solutions Home"
        >
          <img
            src="/images/brand/serantra-navbar-logo.png"
            alt="Serantra Solutions"
          />
        </Link>


        {/* =================================================
            DESKTOP NAVIGATION
        ================================================== */}

        <nav
          className="navbar-navigation"
          aria-label="Main navigation"
        >
          {navLinks.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                `navbar-nav-link ${
                  isActive
                    ? "navbar-nav-link-active"
                    : ""
                }`
              }
            >
              <span>
                {item.name}
              </span>
            </NavLink>
          ))}
        </nav>


        {/* =================================================
            START PROJECT BUTTON
        ================================================== */}

        <Link
          to="/request-quote"
          className="navbar-project-button"
        >
          <span>
            Start a Project
          </span>

          <ArrowUpRight
            size={16}
            strokeWidth={1.9}
          />
        </Link>


        {/* =================================================
            MOBILE BUTTON
        ================================================== */}

        <button
          type="button"
          className="navbar-mobile-toggle"
          onClick={() =>
            setMobileOpen(
              (current) => !current
            )
          }
          aria-label={
            mobileOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? (
            <X
              size={21}
              strokeWidth={1.8}
            />
          ) : (
            <Menu
              size={21}
              strokeWidth={1.8}
            />
          )}
        </button>
      </div>


      {/* ===================================================
          MOBILE NAVIGATION
      ==================================================== */}

      <div
        className={`navbar-mobile-menu ${
          mobileOpen
            ? "navbar-mobile-menu-open"
            : ""
        }`}
      >
        <nav
          className="navbar-mobile-navigation"
          aria-label="Mobile navigation"
        >
          {navLinks.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                `navbar-mobile-link ${
                  isActive
                    ? "navbar-mobile-link-active"
                    : ""
                }`
              }
            >
              <span>
                {item.name}
              </span>
            </NavLink>
          ))}

          <Link
            to="/request-quote"
            className="navbar-mobile-project"
          >
            Start a Project

            <ArrowUpRight
              size={15}
              strokeWidth={1.8}
            />
          </Link>
        </nav>
      </div>
    </header>
  );
}