import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import "./About.css";

export default function About() {
  return (
    <section className="about-section">
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div
        className="about-background"
        aria-hidden="true"
      >
        <div className="about-grid-bg" />

        <div className="about-glow about-glow-one" />

        <div className="about-glow about-glow-two" />
      </div>

      {/* =====================================================
          CONTAINER
      ====================================================== */}

      <div className="about-shell">
        {/* ===================================================
            SECTION LABEL
        ==================================================== */}

        <div className="about-kicker">
          <span />

          SERANTRA IN NUMBERS
        </div>

        {/* ===================================================
            DASHBOARD
        ==================================================== */}

        <div className="about-dashboard">
          {/* =================================================
              LEFT CARD
              PROJECTS COMPLETED
          ================================================== */}

          <div className="about-project-card">
            <div className="about-card-label">
              PROJECTS COMPLETED
            </div>

            <div className="about-project-number">
              10+
            </div>

            <h3>
              Projects Completed
            </h3>

            <p>
              Websites, software solutions and digital
              experiences successfully developed for
              businesses and growing brands.
            </p>

            <Link
              to="/projects"
              className="about-project-link"
            >
              See Our Work

              <ArrowRight
                size={16}
                strokeWidth={2}
              />
            </Link>

            {/* DECORATIVE SHAPE */}

            <div
              className="about-project-decoration"
              aria-hidden="true"
            >
              <span />
              <span />
              <span />
            </div>
          </div>

          {/* =================================================
              CENTER CARD
              CLIENT SATISFACTION
          ================================================== */}

          <div className="about-center-card">
            {/* LEFT VISUAL */}

            <div className="about-center-visual">
              <div className="about-progress-ring">
                <div className="about-progress-ring-inner">
                  <span>
                    98%
                  </span>
                </div>
              </div>
            </div>

            {/* RIGHT CONTENT */}

            <div className="about-center-content">
              <h3>
                Client Satisfaction
              </h3>

              <p>
                We measure success by how clients feel
                after launch, not just on launch day.
              </p>

              <div className="about-satisfaction-actions">
                <span className="about-revisions">
                  ↓ Revisions
                </span>

                <span className="about-repeat-clients">
                  ↑ Repeat clients
                </span>
              </div>
            </div>
          </div>

          {/* =================================================
              RIGHT COLUMN
          ================================================== */}

          <div className="about-right-column">
            {/* ===============================================
                SERVICES CARD
            ================================================ */}

            <div className="about-services-card">
              <div className="about-card-label">
                WHAT WE DO
              </div>

              <div className="about-services-top">
                <strong>
                  8
                </strong>

                <div className="about-service-badge">
                  SERVICES
                </div>
              </div>

              <h3>
                Core Services
              </h3>

              <div className="about-service-line">
                <span />
                <span />
                <span />
                <span />
              </div>

              <div className="about-service-footer">
                <span>
                  Development
                </span>

                <span>
                  Design
                </span>

                <span>
                  Digital
                </span>
              </div>
            </div>

            {/* ===============================================
                DIGITAL SOLUTIONS CARD
            ================================================ */}

            <div className="about-solutions-card">
              <div className="about-solutions-header">
                <div>
                  <div className="about-card-label">
                    OUR FOCUS
                  </div>

                  <h3>
                    Digital Solutions
                  </h3>
                </div>

                <div className="about-solution-icons">
                  <span>
                    WD
                  </span>

                  <span>
                    SD
                  </span>

                  <span>
                    UX
                  </span>

                  <span>
                    AI
                  </span>
                </div>
              </div>

              <p>
                Strategy, design and technology working
                together to create modern digital
                products and business solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}