import {
  useEffect,
  useState,
} from "react";

import {
  ArrowUpRight,
  Menu,
  X,
} from "lucide-react";

import {
  Link,
  useLocation,
} from "react-router-dom";

import "./Navbar.css";


export default function Navbar() {
  const [menuOpen, setMenuOpen] =
    useState(false);

  const location =
    useLocation();


  /* =====================================================
     CLOSE MOBILE MENU AFTER ROUTE CHANGE
  ===================================================== */

  useEffect(() => {
    setMenuOpen(false);
  }, [
    location.pathname,
    location.hash,
  ]);


  /* =====================================================
     NAVIGATION
  ===================================================== */

  const navItems = [
    {
      name: "Home",
      to: "/",
    },

    {
      name: "About",
      to: "/about",
    },

    {
      name: "Services",
      to: "/services",
    },

    {
      name: "Projects",
      to: "/projects",
    },

    {
      name: "Contact",
      to: "/contact",
    },
  ];


  /* =====================================================
     ACTIVE NAVIGATION
  ===================================================== */

  const isActive = (item) => {
    if (item.name === "Home") {
      return (
        location.pathname === "/" &&
        !location.hash
      );
    }


    if (item.name === "About") {
      return (
        location.pathname ===
        "/about"
      );
    }


    if (item.name === "Services") {
      return (
        location.pathname ===
          "/services" ||
        location.pathname.startsWith(
          "/services/"
        )
      );
    }


    if (item.name === "Projects") {
      return (
        location.pathname ===
        "/projects"
      );
    }


    if (item.name === "Contact") {
      return (
        location.pathname ===
        "/contact"
      );
    }


    return false;
  };


  return (
    <>
      {/* =================================================
          HEADER
      ================================================== */}

      <header className="serantra-header">
        <div className="serantra-header-inner">

          {/* LOGO */}

          <Link
            to="/"
            className="serantra-logo-pill"
            aria-label="Serantra Solutions home"
          >
            <div
              className="serantra-logo-symbol"
              aria-hidden="true"
            >
              <span />
              <span />
            </div>


            <div className="serantra-logo-text">
              <strong>
                SERANTRA
              </strong>

              <small>
                SOLUTION
              </small>
            </div>
          </Link>


          {/* =================================================
              DESKTOP NAVIGATION
          ================================================== */}

          <nav
            className="serantra-nav-pill"
            aria-label="Primary navigation"
          >
            {navItems.map(
              (item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  className={`serantra-nav-link ${
                    isActive(item)
                      ? "serantra-nav-link-active"
                      : ""
                  }`}
                >
                  {item.name}
                </Link>
              )
            )}
          </nav>


          {/* =================================================
              START PROJECT BUTTON
          ================================================== */}

          <Link
            to="/request-quote"
            className="serantra-header-cta"
          >
            <span>
              Start a Project
            </span>

            <ArrowUpRight
              size={16}
              strokeWidth={2}
            />
          </Link>


          {/* =================================================
              MOBILE BUTTON
          ================================================== */}

          <button
            type="button"
            className="serantra-mobile-button"
            onClick={() =>
              setMenuOpen(
                (current) =>
                  !current
              )
            }
            aria-label={
              menuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <X
                size={22}
                strokeWidth={2}
              />
            ) : (
              <Menu
                size={22}
                strokeWidth={2}
              />
            )}
          </button>
        </div>
      </header>


      {/* =================================================
          MOBILE NAVIGATION
      ================================================== */}

      <div
        className={`serantra-mobile-menu ${
          menuOpen
            ? "serantra-mobile-menu-open"
            : ""
        }`}
      >
        <nav
          className="serantra-mobile-nav"
          aria-label="Mobile navigation"
        >
          <Link
            to="/"
            className={
              location.pathname === "/"
                ? "mobile-nav-active"
                : ""
            }
          >
            Home
          </Link>


          <Link
            to="/about"
            className={
              location.pathname === "/about"
                ? "mobile-nav-active"
                : ""
            }
          >
            About
          </Link>


          <Link
            to="/services"
            className={
              location.pathname.startsWith(
                "/services"
              )
                ? "mobile-nav-active"
                : ""
            }
          >
            Services
          </Link>


          <Link
            to="/projects"
            className={
              location.pathname ===
              "/projects"
                ? "mobile-nav-active"
                : ""
            }
          >
            Projects
          </Link>


          <Link
            to="/contact"
            className={
              location.pathname ===
              "/contact"
                ? "mobile-nav-active"
                : ""
            }
          >
            Contact
          </Link>


          <Link
            to="/request-quote"
            className="serantra-mobile-project-button"
          >
            Start a Project

            <ArrowUpRight
              size={17}
              strokeWidth={2}
            />
          </Link>
        </nav>
      </div>
    </>
  );
}