import {
  ArrowUpRight,
  Code2,
  Database,
  Layers3,
} from "lucide-react";

import { Link } from "react-router-dom";

import "./Hero.css";

export default function Hero() {
  return (
    <section
      id="home"
      className="serantra-hero"
    >
      {/* BACKGROUND */}

      <div
        className="hero-background-image"
        aria-hidden="true"
      />

      <div
        className="hero-background-overlay"
        aria-hidden="true"
      />

      <div
        className="hero-background-grid"
        aria-hidden="true"
      />

      {/* LIGHT */}

      <div
        className="hero-glow hero-glow-one"
        aria-hidden="true"
      />

      <div
        className="hero-glow hero-glow-two"
        aria-hidden="true"
      />

      {/* MAIN */}

      <div className="serantra-hero-container">

        {/* =============================================
            LEFT CONTENT
        ============================================== */}

        <div className="hero-copy">

          <div className="hero-mini-label">
            <span />

            DIGITAL INNOVATION
          </div>


          <h1>
            <span className="hero-title-white">
              Serantra
            </span>

            <span className="hero-title-gradient">
              Solutions
            </span>
          </h1>


          {/* NEW TEXT */}

          <h2 className="hero-innovation-title">
            Where Ideas Meet Innovation
          </h2>


          <p className="hero-description">
            We create modern digital experiences that help
            businesses grow through thoughtful design,
            reliable development and smart technology.
          </p>


          <div className="hero-service-line">
            Web Development
            <span />
            Software
            <span />
            UI/UX
          </div>


          <div className="hero-buttons">

            <Link
              to="/request-quote"
              className="hero-btn hero-btn-primary"
            >
              Start a Project

              <ArrowUpRight
                size={17}
                strokeWidth={2}
              />
            </Link>


            <Link
              to="/projects"
              className="hero-btn hero-btn-secondary"
            >
              Our Work
            </Link>

          </div>
        </div>


        {/* =============================================
            RIGHT VISUAL
        ============================================== */}

        <div className="hero-tech-scene">

          {/* ORBITS */}

          <div
            className="hero-orbit hero-orbit-one"
            aria-hidden="true"
          />

          <div
            className="hero-orbit hero-orbit-two"
            aria-hidden="true"
          />

          <div
            className="hero-orbit hero-orbit-three"
            aria-hidden="true"
          />


          {/* DOTS */}

          <span className="hero-orbit-dot hero-dot-one" />
          <span className="hero-orbit-dot hero-dot-two" />
          <span className="hero-orbit-dot hero-dot-three" />


          {/* =========================================
              CENTER 3D LOGO BOX
          ========================================== */}

          <div className="hero-logo-stage">

            <div
              className="hero-logo-box-glow"
              aria-hidden="true"
            />

            <div className="hero-logo-box">

              <div
                className="hero-logo-box-inner-light"
                aria-hidden="true"
              />

              <div
                className="hero-logo-shine"
                aria-hidden="true"
              />

              <img
                src="/images/brand/serantra-hero-logo.png"
                alt="Serantra Solutions"
                className="hero-main-logo"
              />

            </div>

          </div>


          {/* =========================================
              WEB APPS
          ========================================== */}

          <div className="hero-service-card hero-service-web">

            <div className="hero-service-icon">
              <Code2
                size={22}
                strokeWidth={1.8}
              />
            </div>


            <div className="hero-service-card-content">

              <span>
                DEVELOPMENT
              </span>

              <strong>
                Web Apps
              </strong>

            </div>
          </div>


          {/* =========================================
              CUSTOM SOFTWARE
          ========================================== */}

          <div className="hero-service-card hero-service-software">

            <div className="hero-service-icon hero-service-icon-cyan">
              <Database
                size={22}
                strokeWidth={1.8}
              />
            </div>


            <div className="hero-service-card-content">

              <span>
                SYSTEMS
              </span>

              <strong>
                Custom Software
              </strong>

            </div>
          </div>


          {/* =========================================
              UI UX
          ========================================== */}

          <div className="hero-service-card hero-service-ui">

            <div className="hero-service-icon">
              <Layers3
                size={22}
                strokeWidth={1.8}
              />
            </div>


            <div className="hero-service-card-content">

              <span>
                EXPERIENCE
              </span>

              <strong>
                UI / UX Design
              </strong>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}