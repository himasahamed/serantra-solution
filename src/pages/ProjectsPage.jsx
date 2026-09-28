import {
    useMemo,
    useState,
  } from "react";
  
  import {
    ArrowRight,
    CheckCircle2,
    Code2,
    Layers3,
    Monitor,
    Sparkles,
  } from "lucide-react";
  
  import {
    Link,
  } from "react-router-dom";
  
  import {
    projects,
  } from "../data/projects";
  
  import "./ProjectsPage.css";
  
  
  const filters = [
    "All Projects",
    "Web Development",
    "Web Application",
    "Software Development",
    "UI/UX Design",
  ];
  
  
  export default function ProjectsPage() {
    const [activeFilter, setActiveFilter] =
      useState("All Projects");
  
  
    const filteredProjects =
      useMemo(() => {
        if (
          activeFilter ===
          "All Projects"
        ) {
          return projects;
        }
  
        return projects.filter(
          (project) =>
            project.category ===
            activeFilter
        );
      }, [activeFilter]);
  
  
    return (
      <>
        {/* ===================================================
            PROJECTS HERO
        ==================================================== */}
  
        <section className="projects-page-hero">
          <div
            className="projects-page-hero-overlay"
            aria-hidden="true"
          />
  
          <div
            className="projects-page-hero-grid"
            aria-hidden="true"
          />
  
          <div
            className="projects-page-hero-glow projects-page-hero-glow-one"
            aria-hidden="true"
          />
  
          <div
            className="projects-page-hero-glow projects-page-hero-glow-two"
            aria-hidden="true"
          />
  
  
          <div className="projects-page-hero-container">
            {/* BREADCRUMB */}
  
            <div className="projects-page-breadcrumb">
              <Link to="/">
                Home
              </Link>
  
              <span>
                ›
              </span>
  
              <span>
                Projects
              </span>
            </div>
  
  
            {/* TITLE */}
  
            <h1>
              Our
              <span>
                {" "}Projects
              </span>
            </h1>
  
  
            {/* DESCRIPTION */}
  
            <p>
              Explore our portfolio of websites,
              applications and software solutions
              created to solve real business challenges
              and support long-term digital growth.
            </p>
          </div>
        </section>
  
  
        {/* ===================================================
            PROJECT SHOWCASE
        ==================================================== */}
  
        <section className="projects-showcase-section">
          {/* BACKGROUND */}
  
          <div
            className="projects-showcase-background"
            aria-hidden="true"
          >
            <div className="projects-showcase-grid-bg" />
  
            <div className="projects-showcase-glow" />
          </div>
  
  
          <div className="projects-showcase-container">
            {/* ===============================================
                SECTION HEADING
            ================================================ */}
  
            <div className="projects-showcase-heading">
              <div className="projects-page-label">
                <span />
  
                OUR WORK PORTFOLIO
              </div>
  
  
              <h2>
                Explore Our
                <span>
                  {" "}Digital Work
                </span>
              </h2>
  
  
              <p>
                A selection of websites,
                applications and digital solutions
                designed around real business
                requirements.
              </p>
            </div>
  
  
            {/* ===============================================
                FILTER BUTTONS
            ================================================ */}
  
            <div className="projects-filter-bar">
              {filters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() =>
                    setActiveFilter(
                      filter
                    )
                  }
                  className={`projects-filter-button ${
                    activeFilter === filter
                      ? "projects-filter-button-active"
                      : ""
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
  
  
            {/* ===============================================
                PROJECT CARDS
            ================================================ */}
  
            <div className="projects-page-grid">
              {filteredProjects.map(
                (project) => (
                  <article
                    key={project.id}
                    className="projects-page-card"
                  >
                    {/* IMAGE */}
  
                    <div className="projects-page-image-wrap">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="projects-page-image"
                      />
  
                      <div
                        className="projects-page-image-overlay"
                        aria-hidden="true"
                      />
  
  
                      <div className="projects-page-image-top">
                        <span className="projects-page-image-category">
                          {project.category}
                        </span>
  
                        <span className="projects-page-image-year">
                          {project.year}
                        </span>
                      </div>
  
  
                      <span
                        className="projects-page-image-number"
                        aria-hidden="true"
                      >
                        {project.id}
                      </span>
                    </div>
  
  
                    {/* =========================================
                        CARD DETAILS
                    ========================================== */}
  
                    <div className="projects-page-card-body">
                      <div className="projects-page-card-main">
                        <span className="projects-page-project-label">
                          PROJECT {project.id}
                        </span>
  
  
                        <h3>
                          {project.title}
                        </h3>
  
  
                        <span className="projects-page-subtitle">
                          {project.shortDescription}
                        </span>
  
  
                        <p className="projects-page-description">
                          {project.description}
                        </p>
  
  
                        {/* TECHNOLOGIES */}
  
                        <div className="projects-page-tech">
                          {project.technologies.map(
                            (technology) => (
                              <span key={technology}>
                                {technology}
                              </span>
                            )
                          )}
                        </div>
                      </div>
  
  
                      {/* =======================================
                          CARD FOOTER
                      ======================================== */}
  
                      <div className="projects-page-card-footer">
                        <div className="projects-page-client">
                          <CheckCircle2
                            size={14}
                            strokeWidth={1.8}
                          />
  
                          <span>
                            {project.client}
                          </span>
                        </div>
  
  
                        <div className="projects-page-status">
                          <span className="projects-page-status-dot" />
  
                          {project.status}
                        </div>
                      </div>
  
  
                      {/* MOVING LIGHT */}
  
                      <div
                        className="projects-page-card-light"
                        aria-hidden="true"
                      >
                        <span />
                      </div>
                    </div>
                  </article>
                )
              )}
            </div>
  
  
            {/* EMPTY CATEGORY */}
  
            {filteredProjects.length ===
              0 && (
              <div className="projects-empty">
                <p>
                  No projects have been added
                  to this category yet.
                </p>
              </div>
            )}
          </div>
        </section>
  
  
        {/* ===================================================
            WHAT WE BUILD
        ==================================================== */}
  
        <section className="projects-capabilities-section">
          <div className="projects-capabilities-container">
            <article className="projects-capability-item">
              <div className="projects-capability-icon">
                <Monitor
                  size={22}
                  strokeWidth={1.6}
                />
              </div>
  
              <div>
                <strong>
                  Modern Websites
                </strong>
  
                <span>
                  Responsive digital experiences
                </span>
              </div>
            </article>
  
  
            <article className="projects-capability-item">
              <div className="projects-capability-icon">
                <Code2
                  size={22}
                  strokeWidth={1.6}
                />
              </div>
  
              <div>
                <strong>
                  Web Applications
                </strong>
  
                <span>
                  Scalable business platforms
                </span>
              </div>
            </article>
  
  
            <article className="projects-capability-item">
              <div className="projects-capability-icon">
                <Layers3
                  size={22}
                  strokeWidth={1.6}
                />
              </div>
  
              <div>
                <strong>
                  Custom Software
                </strong>
  
                <span>
                  Solutions designed around workflows
                </span>
              </div>
            </article>
  
  
            <article className="projects-capability-item">
              <div className="projects-capability-icon">
                <Sparkles
                  size={22}
                  strokeWidth={1.6}
                />
              </div>
  
              <div>
                <strong>
                  UI / UX Design
                </strong>
  
                <span>
                  User-focused product experiences
                </span>
              </div>
            </article>
          </div>
        </section>
  
  
        {/* ===================================================
            PROJECT STATISTICS
        ==================================================== */}
  
        <section className="projects-stats-section">
          <div className="projects-stats-container">
            <div className="projects-stat">
              <strong>
                {projects.length}+
              </strong>
  
              <span>
                Projects Showcased
              </span>
            </div>
  
  
            <div className="projects-stat">
              <strong>
                8
              </strong>
  
              <span>
                Digital Services
              </span>
            </div>
  
  
            <div className="projects-stat">
              <strong>
                6
              </strong>
  
              <span>
                Development Stages
              </span>
            </div>
  
  
            <div className="projects-stat">
              <strong>
                100%
              </strong>
  
              <span>
                Commitment
              </span>
            </div>
          </div>
        </section>
  
  
        {/* ===================================================
            FINAL CTA
        ==================================================== */}
  
        <section className="projects-page-cta-section">
          <div
            className="projects-page-cta-background"
            aria-hidden="true"
          />
  
  
          <div className="projects-page-cta-container">
            <div className="projects-page-cta-card">
              <div
                className="projects-page-cta-glow"
                aria-hidden="true"
              />
  
  
              <h2>
                Have a Project in
                <span>
                  {" "}Mind?
                </span>
              </h2>
  
  
              <p>
                Let’s work together to turn your
                business idea into a modern digital
                solution.
              </p>
  
  
              <div className="projects-page-cta-actions">
                <Link
                  to="/request-quote"
                  className="projects-page-primary-cta"
                >
                  Start Your Project
  
                  <ArrowRight
                    size={17}
                    strokeWidth={2}
                  />
                </Link>
  
  
                <Link
                  to="/services"
                  className="projects-page-secondary-cta"
                >
                  View Services
                </Link>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }