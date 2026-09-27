import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import "./About.css";

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-shell">
        <div className="about-kicker motion-reveal">
          <span />
          About Serantra
        </div>

        <div className="about-grid">
          <div>
            <h2 className="about-title motion-reveal">
              We turn business ideas into
              <span> useful digital products.</span>
            </h2>
          </div>

          <div className="about-copy motion-stagger">
            <p>
              Serantra Solution helps businesses plan, design and build modern digital products—from
              company websites to web applications, custom software and SaaS platforms.
            </p>
            <p>
              Our focus is simple: understand the real requirement first, then create a solution that is
              clear, scalable and practical for the people who will actually use it.
            </p>

            <Link to="/request-quote" className="about-link">
              Tell us what you want to build
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>

        <div className="about-principles motion-stagger">
          <div>
            <strong>Strategy</strong>
            <span>We start with goals, users and requirements.</span>
          </div>
          <div>
            <strong>Design</strong>
            <span>We make complex products feel clear and usable.</span>
          </div>
          <div>
            <strong>Engineering</strong>
            <span>We build maintainable systems for long-term growth.</span>
          </div>
        </div>
      </div>

      <div className="section-motion-line" aria-hidden="true" />
    </section>
  );
}
