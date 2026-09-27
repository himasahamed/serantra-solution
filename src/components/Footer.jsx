import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import "./Footer.css";

const socialLinks = [
  {
    name: "Facebook",
    short: "f",
    url: "#",
  },
  {
    name: "LinkedIn",
    short: "in",
    url: "#",
  },
  {
    name: "Instagram",
    short: "ig",
    url: "#",
  },
  {
    name: "YouTube",
    short: "yt",
    url: "#",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handlePlaceholderSocial = (event, url) => {
    if (url === "#") {
      event.preventDefault();
    }
  };

  return (
    <footer className="serantra-footer">
      {/* TOP MOVING LIGHT */}

      <div
        className="footer-light-track"
        aria-hidden="true"
      >
        <span className="footer-light-beam" />
      </div>

      {/* BACKGROUND */}

      <div
        className="footer-background"
        aria-hidden="true"
      >
        <div className="footer-grid" />

        <div className="footer-glow footer-glow-one" />

        <div className="footer-glow footer-glow-two" />
      </div>

      <div className="footer-container">
        <div className="footer-layout">
          {/* BRAND */}

          <div className="footer-brand-column">
            <Link
              to="/"
              className="footer-brand"
              aria-label="Serantra Solution Home"
            >
              <div className="footer-logo-symbol">
                <span />
                <span />
              </div>

              <div className="footer-logo-text">
                <strong>SERANTRA</strong>
                <small>SOLUTION</small>
              </div>
            </Link>

            <p className="footer-description">
              Building modern websites, web applications
              and custom software solutions designed to
              help businesses grow in the digital world.
            </p>

            <div className="footer-socials">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  onClick={(event) =>
                    handlePlaceholderSocial(
                      event,
                      social.url
                    )
                  }
                  className="footer-social-link"
                  aria-label={social.name}
                  title={social.name}
                >
                  <span className="footer-social-text">
                    {social.short}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* USEFUL LINKS */}

          <div className="footer-column">
            <div className="footer-column-title">
              <h3>Useful Links</h3>
              <span />
            </div>

            <nav className="footer-links">
              <Link to="/">Home</Link>

              <Link to="/#about">
                About Us
              </Link>

              <Link to="/#services">
                Services
              </Link>

              <Link to="/#projects">
                Projects
              </Link>

              <Link to="/clients">
                Clients
              </Link>
            </nav>
          </div>

          {/* SUPPORT */}

          <div className="footer-column">
            <div className="footer-column-title">
              <h3>Support</h3>
              <span />
            </div>

            <nav className="footer-links">
              <Link to="/#faq">
                FAQ
              </Link>

              <Link to="/request-quote">
                Request a Quote
              </Link>

              <Link to="/services/maintenance-support">
                Maintenance & Support
              </Link>

              <a href="mailto:serantrasolution@gmail.com">
                Email Us
              </a>
            </nav>
          </div>

          {/* COMPANY */}

          <div className="footer-column">
            <div className="footer-column-title">
              <h3>Company</h3>
              <span />
            </div>

            <nav className="footer-links">
              <Link to="/#about">
                About Serantra
              </Link>

              <Link to="/clients">
                Our Clients
              </Link>

              <Link to="/#projects">
                Selected Work
              </Link>

              <Link to="/#contact">
                Contact Us
              </Link>
            </nav>
          </div>
        </div>

        {/* BOTTOM */}

        <div className="footer-bottom">
          <p>
            © {currentYear} Serantra Solution.
            All rights reserved.
          </p>

          <Link
            to="/request-quote"
            className="footer-project-link"
          >
            Start a Project

            <ArrowUpRight
              size={14}
              strokeWidth={1.8}
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}