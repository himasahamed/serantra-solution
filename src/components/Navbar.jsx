import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { services } from "../data/services";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const navItems = [
    { name: "Home", to: "/" },
    { name: "About", to: "/#about" },
    { name: "Clients", to: "/clients" },
    { name: "Projects", to: "/#projects" },
    { name: "Contact", to: "/#contact" },
  ];

  const isActive = (item) => {
    if (item.name === "Home") {
      return location.pathname === "/" && !location.hash;
    }

    if (item.name === "Clients") {
      return location.pathname === "/clients";
    }

    return location.pathname === "/" && location.hash === item.to.replace("/", "");
  };

  return (
    <>
      <header className="serantra-header">
        <div className="serantra-header-inner">
          <Link to="/" className="serantra-logo-pill" aria-label="Serantra Solution home">
            <div className="serantra-logo-symbol" aria-hidden="true">
              <span />
              <span />
            </div>

            <div className="serantra-logo-text">
              <strong>SERANTRA</strong>
              <small>SOLUTION</small>
            </div>
          </Link>

          <nav className="serantra-nav-pill" aria-label="Primary navigation">
            {navItems.slice(0, 2).map((item) => (
              <Link
                key={item.name}
                to={item.to}
                className={`serantra-nav-link ${
                  isActive(item) ? "serantra-nav-link-active" : ""
                }`}
              >
                {item.name}
              </Link>
            ))}

            <div
              className="serantra-services-menu"
              ref={dropdownRef}
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                type="button"
                className={`serantra-nav-link serantra-services-button ${
                  location.pathname.startsWith("/services/")
                    ? "serantra-nav-link-active"
                    : ""
                }`}
                onClick={() => setServicesOpen((current) => !current)}
                aria-expanded={servicesOpen}
              >
                Services
                <ChevronDown
                  size={15}
                  strokeWidth={1.8}
                  className={`serantra-dropdown-icon ${
                    servicesOpen ? "serantra-dropdown-icon-open" : ""
                  }`}
                />
              </button>

              <div
                className={`serantra-services-dropdown ${
                  servicesOpen ? "serantra-services-dropdown-open" : ""
                }`}
              >
                <div className="serantra-dropdown-inner">
                  <div className="serantra-dropdown-label">Our Services</div>

                  {services.map((service) => (
                    <Link
                      key={service.slug}
                      to={`/services/${service.slug}`}
                      className="serantra-dropdown-item"
                    >
                      <strong>{service.title}</strong>
                      <ArrowUpRight size={15} strokeWidth={1.7} />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {navItems.slice(2).map((item) => (
              <Link
                key={item.name}
                to={item.to}
                className={`serantra-nav-link ${
                  isActive(item) ? "serantra-nav-link-active" : ""
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <Link to="/request-quote" className="serantra-header-cta">
            <span>Start a Project</span>
            <ArrowUpRight size={16} strokeWidth={2} />
          </Link>

          <button
            type="button"
            className="serantra-mobile-button"
            onClick={() => setMenuOpen((current) => !current)}
            aria-label="Open navigation menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <div className={`serantra-mobile-menu ${menuOpen ? "serantra-mobile-menu-open" : ""}`}>
        <div className="serantra-mobile-nav">
          <Link to="/">Home</Link>
          <Link to="/#about">About</Link>

          <button
            type="button"
            className="serantra-mobile-services-button"
            onClick={() => setServicesOpen((current) => !current)}
            aria-expanded={servicesOpen}
          >
            <span>Services</span>
            <ChevronDown size={17} className={servicesOpen ? "rotate-180" : ""} />
          </button>

          <div
            className={`serantra-mobile-services ${
              servicesOpen ? "serantra-mobile-services-open" : ""
            }`}
          >
            <div>
              {services.map((service) => (
                <Link key={service.slug} to={`/services/${service.slug}`}>
                  {service.title}
                </Link>
              ))}
            </div>
          </div>

          <Link to="/clients">Clients</Link>
          <Link to="/#projects">Projects</Link>
          <Link to="/#contact">Contact</Link>

          <Link to="/request-quote" className="serantra-mobile-project-button">
            Start a Project
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </div>
    </>
  );
}

