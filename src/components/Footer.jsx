
import { ArrowUp, ArrowUpRight } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Footer.css";

const socialLinks = [
  { name: "Facebook", short: "f", url: "#" },
  { name: "LinkedIn", short: "in", url: "#" },
  { name: "Instagram", short: "ig", url: "#" },
  { name: "YouTube", short: "yt", url: "#" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation();

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goToFAQ = (event) => {
    event.preventDefault();

    if (location.pathname !== "/") {
      navigate("/");
      window.setTimeout(() => {
        document.querySelector(".faq-section")?.scrollIntoView({
          behavior: "smooth",
        });
      }, 150);
    } else {
      document.querySelector(".faq-section")?.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="serantra-footer">
      <div className="footer-light-track" aria-hidden="true">
        <span className="footer-light-beam" />
      </div>

      <div className="footer-background" aria-hidden="true">
        <div className="footer-grid" />
        <div className="footer-glow footer-glow-one" />
        <div className="footer-glow footer-glow-two" />
      </div>

      <div className="footer-container">
        <div className="footer-layout">
          <div className="footer-brand-column">
            <Link
              to="/"
              className="footer-brand"
              aria-label="Serantra Solutions Home"
            >
              <div className="footer-logo-symbol" aria-hidden="true">
                <span />
                <span />
              </div>

              <div className="footer-logo-text">
                <strong>SERANTRA</strong>
                <small>SOLUTIONS</small>
              </div>
            </Link>

            <p className="footer-description">
              Building modern websites, web applications and
              custom software solutions designed to help
              businesses grow in the digital world.
            </p>

            <div className="footer-socials">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  onClick={(event) => {
                    if (social.url === "#") {
                      event.preventDefault();
                    }
                  }}
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

          <div className="footer-column">
            <div className="footer-column-title">
              <h3>Useful Links</h3>
              <span />
            </div>

            <nav className="footer-links" aria-label="Useful links">
              <Link to="/">Home</Link>
              <Link to="/about">About Us</Link>
              <Link to="/services">Services</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </nav>
          </div>

          <div className="footer-column">
            <div className="footer-column-title">
              <h3>Support</h3>
              <span />
            </div>

            <nav className="footer-links" aria-label="Support links">
              <a href="/#faq" onClick={goToFAQ}>
                FAQ
              </a>
              <Link to="/request-quote">Request a Quote</Link>
              <Link to="/services">Our Services</Link>
              <a href="mailto:serantrasolutions@gmail.com">
                Email Us
              </a>
            </nav>
          </div>

          <div className="footer-column">
            <div className="footer-column-title">
              <h3>Company</h3>
              <span />
            </div>

            <nav className="footer-links" aria-label="Company links">
              <Link to="/about">About Serantra</Link>
              <Link to="/projects">Selected Work</Link>
              <Link to="/contact">Contact Us</Link>
              <Link to="/request-quote">Start a Project</Link>
            </nav>
          </div>
        </div>

        {/* NEW FOOTER BOTTOM */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} Serantra Solutions.
            All rights reserved.
          </p>

          <nav className="footer-legal-links" aria-label="Legal links">
            <Link to="/terms-conditions">
              Terms &amp; Conditions
            </Link>
            <Link to="/privacy-policy">
              Privacy Policy
            </Link>
          </nav>

          <button
            type="button"
            className="footer-back-to-top"
            onClick={goToTop}
            aria-label="Back to top"
          >
            Back to top
            <ArrowUp size={15} strokeWidth={2} />
          </button>
        </div>
      </div>
    </footer>
  );
}
