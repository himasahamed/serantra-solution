import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-glow" aria-hidden="true" />

      <div className="contact-shell">
        <div className="contact-kicker motion-reveal"><span />Start Something</div>
        <h2 className="contact-title motion-reveal">
          Have an idea?
          <span> Let&apos;s build what&apos;s next.</span>
        </h2>
        <p className="contact-copy motion-reveal">
          Tell us what you are planning and we will help you turn the requirement into a clear digital solution.
        </p>

        <div className="contact-actions motion-reveal">
          <Link to="/request-quote" className="contact-primary">
            Start a Project
            <ArrowUpRight size={18} />
          </Link>

          <a href="mailto:serantrasolution@gmail.com" className="contact-detail">
            <Mail size={17} />
            serantrasolution@gmail.com
          </a>

          <a href="tel:+94771472539" className="contact-detail">
            <Phone size={17} />
            077 147 2539
          </a>
        </div>
      </div>
    </section>
  );
}

