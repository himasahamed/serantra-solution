import { useEffect, useState } from "react";
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


  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);


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


  const isActive = (item) => {
    if (item.name === "Home") {
      return location.pathname === "/";
    }

    if (item.name === "Services") {
      return (
        location.pathname === "/services" ||
        location.pathname.startsWith(
          "/services/"
        )
      );
    }

    return (
      location.pathname === item.to
    );
  };


  return (
    <>
      <header className="serantra-header">
        <div className="serantra-header-inner">

          {/* NAVBAR LOGO */}

          <Link
            to="/"
            className="serantra-navbar-logo"
            aria-label="Serantra Solutions home"
          >
            <img
              src="/images/brand/serantra-navbar-logo.png"
              alt="Serantra Solutions"
            />
          </Link>


          {/* DESKTOP NAVIGATION */}

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
                (current) => !current
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
              <X size={22} />
            ) : (
              <Menu size={22} />
            )}
          </button>
        </div>
      </header>


      {/* MOBILE MENU */}

      <div
        className={`serantra-mobile-menu ${
          menuOpen
            ? "serantra-mobile-menu-open"
            : ""
        }`}
      >
        <nav className="serantra-mobile-nav">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              className={
                isActive(item)
                  ? "serantra-mobile-nav-active"
                  : ""
              }
            >
              {item.name}
            </Link>
          ))}


          <Link
            to="/request-quote"
            className="serantra-mobile-project-button"
          >
            Start a Project

            <ArrowUpRight
              size={17}
            />
          </Link>
        </nav>
      </div>
    </>
  );
}