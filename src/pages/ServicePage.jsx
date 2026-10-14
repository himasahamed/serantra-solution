import {
  ArrowRight,
  Bot,
  Code2,
  FileText,
  Layers3,
  Megaphone,
  Palette,
  PenTool,
  Sparkles,
} from "lucide-react";

import { Link } from "react-router-dom";

import "./ServicePage.css";


/* =========================================================
   SERVICES
========================================================= */

const services = [
  {
    number: "01",
    title: "Software Development",
    description:
      "Custom software solutions designed around your business processes, operational requirements and long-term goals.",
    icon: Code2,
  },

  {
    number: "02",
    title: "Web Development",
    description:
      "Modern, responsive and high-performing websites built to strengthen your digital presence and support business growth.",
    icon: Layers3,
  },

  {
    number: "03",
    title: "Brand Identity",
    description:
      "Professional visual identities that help your business communicate clearly, consistently and confidently.",
    icon: Sparkles,
  },

  {
    number: "04",
    title: "Creative Designing",
    description:
      "Purposeful digital and visual designs created for campaigns, business communication and brand experiences.",
    icon: Palette,
  },

  {
    number: "05",
    title: "UI/UX Design",
    description:
      "User-focused interfaces and experiences designed to make digital products simple, intuitive and effective.",
    icon: PenTool,
  },

  {
    number: "06",
    title: "Digital Marketing",
    description:
      "Digital strategies designed to improve visibility, strengthen engagement and connect your business with the right audience.",
    icon: Megaphone,
  },

  {
    number: "07",
    title: "Creative & Copywriting",
    description:
      "Clear, engaging and brand-focused content created for websites, campaigns and digital communication.",
    icon: FileText,
  },

  {
    number: "08",
    title: "AI Integration & Automation",
    description:
      "Practical AI and automation solutions that help businesses improve workflows, efficiency and digital operations.",
    icon: Bot,
  },
];


/* =========================================================
   PROCESS
========================================================= */

const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We begin by understanding your business, goals, users and project requirements.",
  },

  {
    number: "02",
    title: "Strategy",
    description:
      "We define the project direction, structure, priorities and technical approach.",
  },

  {
    number: "03",
    title: "Design",
    description:
      "We create a clear visual direction and user experience that supports your goals.",
  },

  {
    number: "04",
    title: "Development",
    description:
      "We transform the approved direction into a functional and reliable digital solution.",
  },

  {
    number: "05",
    title: "Testing",
    description:
      "We review functionality, usability, responsiveness and overall performance before launch.",
  },

  {
    number: "06",
    title: "Launch",
    description:
      "We prepare the final solution for release and provide support as it moves into production.",
  },
];


/* =========================================================
   SERVICE PAGE
========================================================= */

export default function ServicePage() {
  return (
    <main className="services-page">
      {/* ===================================================
          HERO
      ==================================================== */}

      <section className="services-hero">
        <div
          className="services-hero-background"
          aria-hidden="true"
        >
          <div className="services-hero-grid" />

          <div className="services-hero-glow services-hero-glow-one" />

          <div className="services-hero-glow services-hero-glow-two" />
        </div>


        <div className="services-hero-container">
          <div className="services-hero-content">
            <div className="services-hero-kicker">
              <span />

              OUR SERVICES
            </div>


            <h1>
              Digital solutions built
              <span>
                for modern businesses.
              </span>
            </h1>


            <p>
              From development and design to digital
              strategy and automation, we create practical
              solutions shaped around your business needs.
            </p>


            <div className="services-hero-actions">
              <Link
                to="/request-quote"
                className="services-primary-button"
              >
                Start a Project

                <ArrowRight
                  size={16}
                  strokeWidth={2}
                />
              </Link>

              <a
                href="#services-list"
                className="services-secondary-button"
              >
                Explore Services
              </a>
            </div>
          </div>
        </div>
      </section>


      {/* ===================================================
          SERVICES SECTION
      ==================================================== */}

      <section
        className="services-list-section"
        id="services-list"
      >
        <div
          className="services-section-background"
          aria-hidden="true"
        >
          <div className="services-section-glow" />
        </div>


        {/* =================================================
            WHAT WE OFFER - FAQ STYLE INTRO
        ================================================== */}

        <div className="service-editorial-intro">
          <div className="service-editorial-left">
            <div className="service-editorial-kicker">
              <span />

              WHAT WE OFFER
            </div>


            <h2 className="service-editorial-title">
              Solutions for your

              <span className="service-editorial-gradient">
                digital growth.
              </span>
            </h2>
          </div>


          <div className="service-editorial-right">
            <div className="service-editorial-line" />

            <p>
              We combine development, design, technology
              and digital strategy to create solutions
              that match your business needs.
            </p>
          </div>
        </div>


        {/* =================================================
            SERVICE CARDS
        ================================================== */}

        <div className="services-grid-container">
          <div className="services-card-grid">
            {services.map((service) => {
              const Icon =
                service.icon;

              return (
                <article
                  key={service.number}
                  className="services-card"
                >
                  <div className="services-card-top">
                    <span className="services-card-number">
                      {service.number}
                    </span>

                    <div className="services-card-icon">
                      <Icon
                        size={23}
                        strokeWidth={1.6}
                      />
                    </div>
                  </div>


                  <div className="services-card-content">
                    <h3>
                      {service.title}
                    </h3>

                    <p>
                      {service.description}
                    </p>
                  </div>


                  <Link
                    to="/request-quote"
                    className="services-card-link"
                  >
                    Discuss this service

                    <ArrowRight
                      size={15}
                      strokeWidth={1.8}
                    />
                  </Link>


                  <div
                    className="services-card-light"
                    aria-hidden="true"
                  />
                </article>
              );
            })}
          </div>
        </div>
      </section>


      {/* ===================================================
          PROCESS SECTION
      ==================================================== */}

      <section className="services-process-section">
        <div
          className="services-process-background"
          aria-hidden="true"
        >
          <div className="services-process-grid-bg" />

          <div className="services-process-glow" />
        </div>


        {/* =================================================
            PROCESS - FAQ STYLE INTRO
        ================================================== */}

        <div className="service-editorial-intro service-process-editorial">
          <div className="service-editorial-left">
            <div className="service-editorial-kicker">
              <span />

              OUR PROCESS
            </div>


            <h2 className="service-editorial-title">
              How We

              <span className="service-editorial-gradient">
                Work
              </span>
            </h2>
          </div>


          <div className="service-editorial-right">
            <div className="service-editorial-line" />

            <p>
              A simple and transparent process from your
              initial idea through development and launch.
            </p>
          </div>
        </div>


        {/* =================================================
            PROCESS STEPS
        ================================================== */}

        <div className="services-process-container">
          <div className="services-process-list">
            {processSteps.map(
              (step, index) => (
                <article
                  key={step.number}
                  className="services-process-item"
                >
                  <div className="services-process-number">
                    {step.number}
                  </div>


                  <div className="services-process-content">
                    <h3>
                      {step.title}
                    </h3>

                    <p>
                      {step.description}
                    </p>
                  </div>


                  <div
                    className="services-process-point"
                    aria-hidden="true"
                  >
                    <span />
                  </div>


                  {index <
                    processSteps.length - 1 && (
                    <div
                      className="services-process-connector"
                      aria-hidden="true"
                    />
                  )}
                </article>
              )
            )}
          </div>
        </div>
      </section>


      {/* ===================================================
          CTA
      ==================================================== */}

      <section className="services-cta-section">
        <div className="services-cta-container">
          <div className="services-cta-content">
            <div className="services-cta-kicker">
              <span />

              HAVE A PROJECT?
            </div>


            <h2>
              Have an idea?
              <span>
                Let&apos;s build it.
              </span>
            </h2>


            <p>
              Tell us what you are planning and we will
              help you explore the right digital solution
              for your business.
            </p>


            <Link
              to="/request-quote"
              className="services-cta-button"
            >
              Start a Project

              <ArrowRight
                size={17}
                strokeWidth={2}
              />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}