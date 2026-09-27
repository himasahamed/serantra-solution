import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-shell">
        <Link to="/" className="footer-brand">
          <strong>SERANTRA</strong>
          <span>SOLUTION</span>
        </Link>

        <p>Websites, applications and software built around real business needs.</p>

        <div className="footer-links">
          <Link to="/#about">About</Link>
          <Link to="/#services">Services</Link>
          <Link to="/clients">Clients</Link>
          <Link to="/#projects">Projects</Link>
          <Link to="/request-quote">Start a Project</Link>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Serantra Solution.</span>
        <span>Built for digital growth.</span>
      </div>
    </footer>
  );
}

