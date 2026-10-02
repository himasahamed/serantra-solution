import {
  ArrowRight,
  Bot,
  CheckCircle2,
  Code2,
  FilePenLine,
  FlaskConical,
  Laptop,
  Megaphone,
  Palette,
  PenTool,
  Rocket,
  Search,
  Sparkles,
  Target,
} from "lucide-react";

import { Link } from "react-router-dom";

import "./ServicePage.css";


/* =========================================================
   SERVICES
========================================================= */

const services = [
  {
    icon: Laptop,

    title: "Software Development",

    description:
      "Custom software solutions tailored to your unique business requirements with modern technologies.",

    features: [
      "Custom Applications",
      "System Integration",
      "API Development",
      "Scalable Architecture",
    ],
  },

  {
    icon: Code2,

    title: "Web Development",

    description:
      "Building high-performance, responsive websites tailored to your business needs with modern technologies.",

    features: [
      "Responsive Design",
      "Fast Performance",
      "SEO Optimized",
      "Modern Frameworks",
    ],
  },

  {
    icon: Palette,

    title: "Brand Identity",

    description:
      "Creating a cohesive brand identity with logo design, typography and a consistent visual language.",

    features: [
      "Logo Design",
      "Style Guides",
      "Brand Strategy",
      "Visual Identity",
    ],
  },

  {
    icon: Sparkles,

    title: "Creative Designing",

    description:
      "Crafting visually strong graphics, marketing materials and digital content for modern brands.",

    features: [
      "Brand Materials",
      "Social Media",
      "Print Design",
      "Illustrations",
    ],
  },

  {
    icon: PenTool,

    title: "UI/UX Design",

    description:
      "Designing intuitive and engaging user experiences for websites, software and digital applications.",

    features: [
      "User Research",
      "Wireframing",
      "Prototyping",
      "Usability Testing",
    ],
  },

  {
    icon: Megaphone,

    title: "Digital Marketing",

    description:
      "Helping businesses strengthen their digital presence through strategic and results-focused marketing.",

    features: [
      "SEO Optimization",
      "Social Media",
      "Content Marketing",
      "Analytics",
    ],
  },

  {
    icon: FilePenLine,

    title: "Creative & Copywriting",

    description:
      "Compelling creative content and professional copy designed to communicate your brand clearly.",

    features: [
      "Website Copy",
      "Blog Writing",
      "Campaign Content",
      "Brand Voice",
    ],
  },

  {
    icon: Bot,

    title: "AI Integration & Automation",

    description:
      "Smart AI solutions and automation designed to streamline repetitive business processes.",

    features: [
      "AI Chatbots",
      "Process Automation",
      "AI Integration",
      "Data Analytics",
    ],
  },
];


/* =========================================================
   HOW WE WORK
   NO 01 / 02 / 03 NUMBERS
========================================================= */

const processSteps = [
  {
    icon: Search,

    title: "Discovery",

    description:
      "We dive deep into understanding your business, goals, users and project requirements.",
  },

  {
    icon: Target,

    title: "Strategy",

    description:
      "We create a clear project strategy and roadmap aligned with your business objectives.",
  },

  {
    icon: Palette,

    title: "Design",

    description:
      "We create modern visuals, user journeys and intuitive digital experiences.",
  },

  {
    icon: Code2,

    title: "Development",

    description:
      "We build robust, responsive and scalable solutions using modern technologies.",
  },

  {
    icon: FlaskConical,

    title: "Testing",

    description:
      "We perform detailed quality testing to ensure reliable and smooth performance.",
  },

  {
    icon: Rocket,

    title: "Launch",

    description:
      "We deploy your project and provide the support needed for a successful launch.",
  },
];


export default function ServicePage() {
  return (
    <>
      {/* ===================================================
          SERVICES HERO
      ==================================================== */}

      <section className="services-page-hero">
        <div
          className="services-page-hero-overlay"
          aria-hidden="true"
        />

        <div
          className="services-page-hero-grid"
          aria-hidden="true"
        />

        <div
          className="services-page-hero-glow services-page-hero-glow-one"
          aria-hidden="true"
        />

        <div
          className="services-page-hero-glow services-page-hero-glow-two"
          aria-hidden="true"
        />


        <div className="services-page-hero-container">
          {/* BREADCRUMB */}

          <div className="services-page-breadcrumb">
            <Link to="/">
              Home
            </Link>

            <span>
              ›
            </span>

            <span>
              Services
            </span>
          </div>


          {/* HERO TITLE */}

          <h1>
            Our
            <span>
              {" "}Services
            </span>
          </h1>


          <p>
            Comprehensive digital solutions tailored
            to transform your business and drive
            sustainable growth in the digital age.
          </p>
        </div>
      </section>


      {/* ===================================================
          SERVICES
      ==================================================== */}

      <section className="services-main-section">
        <div
          className="services-main-background"
          aria-hidden="true"
        >
          <div className="services-main-grid-background" />

          <div className="services-main-glow" />
        </div>


        <div className="services-main-container">
          {/* HEADING */}

          <div className="services-main-heading">
            <div className="services-section-label">
              <span />

              WHAT WE OFFER
            </div>


            <h2>
              Solutions Built Around
              <span>
                {" "}Your Goals
              </span>
            </h2>


            <p>
              From design and development to automation
              and digital marketing, we provide services
              designed around real business requirements.
            </p>
          </div>


          {/* SERVICE CARDS */}

          <div className="services-page-grid">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.title}
                  className="services-page-card"
                >
                  <div
                    className="services-page-card-glow"
                    aria-hidden="true"
                  />


                  {/* ICON */}

                  <div className="services-page-icon">
                    <Icon
                      size={24}
                      strokeWidth={1.7}
                    />
                  </div>


                  {/* TITLE */}

                  <h3>
                    {service.title}
                  </h3>


                  {/* DESCRIPTION */}

                  <p className="services-page-card-description">
                    {service.description}
                  </p>


                  {/* FEATURES */}

                  <ul className="services-page-feature-list">
                    {service.features.map(
                      (feature) => (
                        <li key={feature}>
                          <CheckCircle2
                            size={13}
                            strokeWidth={2}
                          />

                          <span>
                            {feature}
                          </span>
                        </li>
                      )
                    )}
                  </ul>


                  {/*
                    Learn More is intentionally NOT linked.
                    It does not navigate anywhere.
                  */}

                  <button
                    type="button"
                    className="services-page-learn-more"
                  >
                    Learn More

                    <ArrowRight
                      size={14}
                      strokeWidth={1.9}
                    />
                  </button>


                  <div
                    className="services-page-card-light"
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
          HOW WE WORK
      ==================================================== */}

      <section className="service-process-section">
        <div
          className="service-process-background"
          aria-hidden="true"
        >
          <div className="service-process-grid-background" />

          <div className="service-process-glow" />
        </div>


        <div className="service-process-container">
          {/* HEADING */}

          <div className="service-process-heading">
            <div className="services-section-label">
              <span />

              OUR PROCESS
            </div>


            <h2>
              How We
              <span>
                {" "}Work
              </span>
            </h2>


            <p>
              A structured process designed to move
              your project from idea to successful
              digital solution.
            </p>
          </div>


          {/* =================================================
              PROCESS CARDS
              NUMBERS REMOVED
          ================================================== */}

          <div className="service-process-grid">
            {processSteps.map((step) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.title}
                  className="service-process-card"
                >
                  <div
                    className="service-process-card-glow"
                    aria-hidden="true"
                  />


                  <div className="service-process-icon">
                    <Icon
                      size={24}
                      strokeWidth={1.8}
                    />
                  </div>


                  <h3>
                    {step.title}
                  </h3>


                  <p>
                    {step.description}
                  </p>


                  <div
                    className="service-process-bottom-light"
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
          CTA
      ==================================================== */}

      <section className="services-cta-section">
        <div
          className="services-cta-background"
          aria-hidden="true"
        />


        <div className="services-cta-container">
          <div className="services-cta-card">
            <div
              className="services-cta-glow"
              aria-hidden="true"
            />


            <h2>
              Ready to Start Your
              <span>
                {" "}Project?
              </span>
            </h2>


            <p>
              Let’s discuss your requirements and
              create the right digital solution for
              your business.
            </p>


            <div className="services-cta-actions">
              <Link
                to="/request-quote"
                className="services-primary-cta"
              >
                Get Free Quote

                <ArrowRight
                  size={17}
                  strokeWidth={2}
                />
              </Link>


              <Link
                to="/projects"
                className="services-secondary-cta"
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