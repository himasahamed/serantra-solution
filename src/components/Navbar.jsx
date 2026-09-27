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

  const location = useLocation();


  /* =====================================================
     CLOSE MOBILE MENU AFTER NAVIGATION
  ===================================================== */

  useEffect(() => {
    setMenuOpen(false);
  }, [
    location.pathname,
    location.hash,
  ]);


  /* =====================================================
     NAV ITEMS
  ===================================================== */

  const navItems = [
    {
      name: "Home",
      to: "/",
    },

    {
      name: "About",
      to: "/#about",
    },

    {
      name: "Services",
      to: "/services",
    },

    {
      name: "Clients",
      to: "/clients",
    },

    {
      name: "Projects",
      to: "/#projects",
    },

    {
      name: "Contact",
      to: "/#contact",
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


    if (item.name === "Services") {
      return location.pathname.startsWith(
        "/services"
      );
    }


    if (item.name === "Clients") {
      return (
        location.pathname ===
        "/clients"
      );
    }


    if (
      item.name === "About" ||
      item.name === "Projects" ||
      item.name === "Contact"
    ) {
      return (
        location.pathname === "/" &&
        location.hash ===
          item.to.replace("/", "")
      );
    }


    return false;
  };


  return (
    <>
      {/* =================================================
          DESKTOP HEADER
      ================================================== */}

      <header className="serantra-header">
        <div className="serantra-header-inner">

          {/* LOGO */}

          <Link
            to="/"
            className="serantra-logo-pill"
            aria-label="Serantra Solution home"
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


          {/* NAVIGATION */}

          <nav
            className="serantra-nav-pill"
            aria-label="Primary navigation"
          >
            {navItems.map((item) => (
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
            ))}
          </nav>


          {/* START PROJECT */}

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


          {/* MOBILE BUTTON */}

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
            aria-expanded={
              menuOpen
            }
          >
            {menuOpen ? (
              <X size={22} />
            ) : (
              <Menu size={22} />
            )}
          </button>

        </div>
      </header>


      {/* =================================================
          MOBILE MENU
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
          <Link to="/">
            Home
          </Link>


          <Link to="/#about">
            About
          </Link>


          {/* SERVICES IS NOW NORMAL LINK */}

          <Link to="/services">
            Services
          </Link>


          <Link to="/clients">
            Clients
          </Link>


          <Link to="/#projects">
            Projects
          </Link>


          <Link to="/#contact">
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