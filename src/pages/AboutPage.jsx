import {
    ArrowRight,
    CheckCircle2,
    Clock3,
    Handshake,
    Headphones,
    Lightbulb,
    ShieldCheck,
    Sparkles,
  } from "lucide-react";
  
  import { Link } from "react-router-dom";
  
  import "./AboutPage.css";
  
  
  const reasons = [
    {
      icon: Lightbulb,
  
      title: "Innovation First",
  
      description:
        "We explore modern technologies and practical ideas to create digital solutions that help businesses stay competitive and ready for future growth.",
    },
  
    {
      icon: Handshake,
  
      title: "Client Partnership",
  
      description:
        "We work closely with our clients throughout every stage of the project, keeping communication clear and goals aligned.",
    },
  
    {
      icon: ShieldCheck,
  
      title: "Quality Assurance",
  
      description:
        "Every solution is reviewed and tested carefully to deliver reliable performance, usability and long-term value.",
    },
  
    {
      icon: Clock3,
  
      title: "Timely Delivery",
  
      description:
        "We plan projects carefully, maintain clear milestones and work efficiently to deliver quality solutions on time.",
    },
  
    {
      icon: Sparkles,
  
      title: "Creative Solutions",
  
      description:
        "We combine thoughtful design, strategy and modern development to create solutions that are useful, attractive and effective.",
    },
  
    {
      icon: Headphones,
  
      title: "Ongoing Support",
  
      description:
        "Our relationship does not end at launch. We continue supporting, maintaining and improving your digital products when required.",
    },
  ];
  
  
  export default function AboutPage() {
    return (
      <>
        {/* ===================================================
            ABOUT HERO
        ==================================================== */}
  
        <section className="about-page-hero">
          <div
            className="about-page-hero-overlay"
            aria-hidden="true"
          />
  
          <div
            className="about-page-hero-grid"
            aria-hidden="true"
          />
  
          <div
            className="about-page-hero-glow about-page-hero-glow-one"
            aria-hidden="true"
          />
  
          <div
            className="about-page-hero-glow about-page-hero-glow-two"
            aria-hidden="true"
          />
  
  
          <div className="about-page-hero-container">
            {/* BREADCRUMB */}
  
            <div className="about-page-breadcrumb">
              <Link to="/">
                Home
              </Link>
  
              <span>
                ›
              </span>
  
              <span>
                About
              </span>
            </div>
  
  
            {/* TITLE */}
  
            <h1>
              About
              <span>
                {" "}Serantra
              </span>
            </h1>
  
  
            {/* DESCRIPTION */}
  
            <p>
              Serantra Solution is a digital technology
              company focused on creating modern websites,
              web applications, custom software and
              user-focused digital experiences for growing
              businesses.
            </p>
          </div>
        </section>
  
  
        {/* ===================================================
            ABOUT OUR COMPANY
        ==================================================== */}
  
        <section className="about-company-section">
          {/* BACKGROUND */}
  
          <div
            className="about-company-background"
            aria-hidden="true"
          >
            <div className="about-company-grid-bg" />
  
            <div className="about-company-glow" />
          </div>
  
  
          <div className="about-company-container">
            {/* =================================================
                COMPANY IMAGE
            ================================================== */}
  
            <div className="about-company-visual">
              <div className="about-company-image-wrap">
                <img
                  src="/images/about/about-company.jpg"
                  alt="Serantra Solution technology and software development"
                  className="about-company-image"
                />
  
                <div
                  className="about-company-image-overlay"
                  aria-hidden="true"
                />
  
                <div
                  className="about-company-image-light"
                  aria-hidden="true"
                />
              </div>
  
  
              {/* STATS */}
  
              <div className="about-company-stats">
                <div>
                  <strong>
                    8
                  </strong>
  
                  <span>
                    Services
                  </span>
                </div>
  
  
                <div>
                  <strong>
                    6
                  </strong>
  
                  <span>
                    Process Stages
                  </span>
                </div>
  
  
                <div>
                  <strong>
                    100%
                  </strong>
  
                  <span>
                    Commitment
                  </span>
                </div>
              </div>
            </div>
  
  
            {/* =================================================
                COMPANY CONTENT
            ================================================== */}
  
            <div className="about-company-content">
              <div className="about-page-label">
                <span />
  
                OUR STORY
              </div>
  
  
              <h2>
                About Our
                <span>
                  {" "}Company
                </span>
              </h2>
  
  
              <p>
                Serantra Solution was created with a clear
                purpose: to help businesses transform ideas
                into useful, modern and scalable digital
                products.
              </p>
  
  
              <p>
                We combine strategy, design and development
                to build websites, web applications and
                custom software solutions around real
                business requirements rather than using
                one-size-fits-all templates.
              </p>
  
  
              <p>
                Our goal is to create digital solutions that
                are visually strong, technically reliable and
                ready to grow alongside the businesses that
                use them.
              </p>
  
  
              {/* COMPANY POINTS */}
  
              <div className="about-company-points">
                <div>
                  <CheckCircle2
                    size={17}
                    strokeWidth={1.8}
                  />
  
                  <span>
                    Modern technology and scalable development
                  </span>
                </div>
  
  
                <div>
                  <CheckCircle2
                    size={17}
                    strokeWidth={1.8}
                  />
  
                  <span>
                    Clear communication throughout every project
                  </span>
                </div>
  
  
                <div>
                  <CheckCircle2
                    size={17}
                    strokeWidth={1.8}
                  />
  
                  <span>
                    Digital solutions focused on real business goals
                  </span>
                </div>
  
  
                <div>
                  <CheckCircle2
                    size={17}
                    strokeWidth={1.8}
                  />
  
                  <span>
                    Ongoing technical support and improvement
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
  
  
        {/* ===================================================
            WHY CHOOSE SERANTRA
        ==================================================== */}
  
        <section className="about-why-section">
          {/* BACKGROUND */}
  
          <div
            className="about-why-background"
            aria-hidden="true"
          >
            <div className="about-why-grid-bg" />
  
            <div className="about-why-glow" />
          </div>
  
  
          <div className="about-why-container">
            {/* HEADING */}
  
            <div className="about-why-heading">
              <div className="about-page-label">
                <span />
  
                WHY SERANTRA
              </div>
  
  
              <h2>
                Why You Should Choose
                <span>
                  {" "}Serantra
                </span>
              </h2>
  
  
              <p>
                We combine technical experience, thoughtful
                design and reliable collaboration to create
                digital solutions built around your business.
              </p>
            </div>
  
  
            {/* REASONS */}
  
            <div className="about-why-grid">
              {reasons.map((reason) => {
                const Icon =
                  reason.icon;
  
                return (
                  <article
                    key={reason.title}
                    className="about-why-card"
                  >
                    <div
                      className="about-why-card-light"
                      aria-hidden="true"
                    />
  
  
                    <div className="about-why-icon">
                      <Icon
                        size={21}
                        strokeWidth={1.8}
                      />
                    </div>
  
  
                    <h3>
                      {reason.title}
                    </h3>
  
  
                    <p>
                      {reason.description}
                    </p>
  
  
                    <div
                      className="about-why-bottom-line"
                      aria-hidden="true"
                    >
                      <span />
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
  
  
        {/* ===================================================
            EXPERIENCE CTA
        ==================================================== */}
  
        <section className="about-experience-section">
          <div
            className="about-experience-background"
            aria-hidden="true"
          />
  
  
          <div className="about-experience-container">
            <div className="about-experience-card">
              <div
                className="about-experience-glow"
                aria-hidden="true"
              />
  
  
              <h2>
                We Commit To Give You
                <span>
                  {" "}The Best Experience
                </span>
              </h2>
  
  
              <p>
                Ready to transform your ideas into a modern
                digital solution? Let’s create something
                valuable together.
              </p>
  
  
              <div className="about-experience-actions">
                <Link
                  to="/request-quote"
                  className="about-primary-button"
                >
                  Start Your Project
  
                  <ArrowRight
                    size={17}
                    strokeWidth={2}
                  />
                </Link>
  
  
                <Link
                  to="/projects"
                  className="about-secondary-button"
                >
                  View Our Work
                </Link>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }