import {
  ArrowRight,
  Bot,
  Code2,
  FlaskConical,
  Laptop,
  Megaphone,
  Palette,
  PenTool,
  Rocket,
  Search,
  Sparkles,
  Target,
  Workflow,
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
      "Creating a cohesive brand identity with logo design, typography, and color palette.",

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
      "Crafting visually stunning graphics, from marketing materials to social media content.",

    features: [
      "Brand Materials",
      "Social Media",
      "Print Design",
      "Illustrations",
    ],
  },

  {
    icon: Workflow,

    title: "UI/UX Design",

    description:
      "Designing intuitive and engaging user experiences for websites and applications.",

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
      "Boosting your online presence with SEO, social media strategies, and targeted campaigns.",

    features: [
      "SEO Optimization",
      "Social Media",
      "Content Marketing",
      "Analytics",
    ],
  },

  {
    icon: PenTool,

    title: "Creative & Copywriting",

    description:
      "Compelling content and creative copy that drives engagement and conversions.",

    features: [
      "Website Copy",
      "Blog Writing",
      "Ad Campaigns",
      "Brand Voice",
    ],
  },

  {
    icon: Bot,

    title: "AI Integration & Automation",

    description:
      "Smart AI solutions and automation to streamline your business processes.",

    features: [
      "AI Chatbots",
      "Process Automation",
      "Machine Learning",
      "Data Analytics",
    ],
  },
];


/* =========================================================
   HOW WE WORK
========================================================= */

const processSteps = [
  {
    number: "01",

    icon: Search,

    title: "Discovery",

    description:
      "We dive deep into understanding your business, goals, users and project requirements.",
  },

  {
    number: "02",

    icon: Target,

    title: "Strategy",

    description:
      "We create a clear project strategy and roadmap aligned with your business objectives.",
  },

  {
    number: "03",

    icon: Palette,

    title: "Design",

    description:
      "We create modern visuals, user journeys and intuitive digital experiences.",
  },

  {
    number: "04",

    icon: Code2,

    title: "Development",

    description:
      "We build robust, responsive and scalable solutions using modern technologies.",
  },

  {
    number: "05",

    icon: FlaskConical,

    title: "Testing",

    description:
      "We perform detailed quality testing to ensure reliable and smooth performance.",
  },

  {
    number: "06",

    icon: Rocket,

    title: "Launch",

    description:
      "We deploy your project and provide the support needed for a successful launch.",
  },
];


export default function ServicePage() {
  /* =======================================================
     SERVICE CARD MOUSE LIGHT
  ======================================================= */

  const handleMouseMove = (event) => {
    const card =
      event.currentTarget;

    const rect =
      card.getBoundingClientRect();

    const x =
      event.clientX -
      rect.left;

    const y =
      event.clientY -
      rect.top;

    card.style.setProperty(
      "--service-mouse-x",
      `${x}px`
    );

    card.style.setProperty(
      "--service-mouse-y",
      `${y}px`
    );
  };


  return (
    <>
      {/* ===================================================
          SERVICES HERO
      ==================================================== */}

      <section className="services-hero">
        <div
          className="services-hero-overlay"
          aria-hidden="true"
        />

        <div
          className="services-hero-grid"
          aria-hidden="true"
        />

        <div
          className="services-hero-light services-hero-light-one"
          aria-hidden="true"
        />

        <div
          className="services-hero-light services-hero-light-two"
          aria-hidden="true"
        />


        <div className="services-hero-container">
          {/* BREADCRUMB */}

          <div className="services-breadcrumb">
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


          {/* TITLE */}

          <h1 className="services-hero-title">
            Our
            <span>
              {" "}Services
            </span>
          </h1>


          {/* DESCRIPTION */}

          <p className="services-hero-description">
            Comprehensive digital solutions tailored to
            transform your business and drive growth in
            the digital age.
          </p>
        </div>
      </section>


      {/* ===================================================
          WHAT WE OFFER
      ==================================================== */}

      <section className="all-services-page">
        {/* BACKGROUND */}

        <div
          className="all-services-background"
          aria-hidden="true"
        >
          <div className="all-services-grid-background" />

          <div className="all-services-main-glow" />

          <div className="all-services-side-glow" />
        </div>


        <div className="all-services-container">
          {/* HEADING */}

          <div className="all-services-heading">
            <div className="all-services-label">
              <span />

              ABOUT OUR AGENCY
            </div>


            <h2>
              What We
              <span>
                {" "}Offer
              </span>
            </h2>


            <p>
              From concept to completion, we provide
              end-to-end digital solutions that help
              businesses thrive in today's competitive
              landscape.
            </p>


            <Link
              to="/request-quote"
              className="all-services-cta"
            >
              Get Started Now

              <ArrowRight
                size={16}
                strokeWidth={2}
              />
            </Link>
          </div>


          {/* =================================================
              8 SERVICE CARDS
          ================================================== */}

          <div className="all-services-grid">
            {services.map(
              (service, index) => {
                const Icon =
                  service.icon;

                return (
                  <article
                    key={service.title}
                    className="all-service-card"
                    onMouseMove={handleMouseMove}
                  >
                    {/* CURSOR GLOW */}

                    <div
                      className="all-service-cursor-glow"
                      aria-hidden="true"
                    />


                    {/* NUMBER */}

                    <span className="all-service-number">
                      {String(
                        index + 1
                      ).padStart(
                        2,
                        "0"
                      )}
                    </span>


                    {/* ICON */}

                    <div className="all-service-icon">
                      <Icon
                        size={23}
                        strokeWidth={1.9}
                      />
                    </div>


                    {/* TITLE */}

                    <h3>
                      {service.title}
                    </h3>


                    {/* DESCRIPTION */}

                    <p className="all-service-description">
                      {service.description}
                    </p>


                    {/* FEATURES */}

                    <ul className="all-service-features">
                      {service.features.map(
                        (feature) => (
                          <li key={feature}>
                            <span />

                            {feature}
                          </li>
                        )
                      )}
                    </ul>


                    {/* VISUAL ONLY */}

                    <div className="all-service-learn-more">
                      Learn More

                      <ArrowRight
                        size={14}
                        strokeWidth={2}
                      />
                    </div>


                    {/* BOTTOM LIGHT */}

                    <div
                      className="all-service-bottom-light"
                      aria-hidden="true"
                    >
                      <span />
                    </div>
                  </article>
                );
              }
            )}
          </div>
        </div>
      </section>


      {/* ===================================================
          HOW WE WORK
      ==================================================== */}

      <section className="service-process-section">
        {/* BACKGROUND */}

        <div
          className="service-process-background"
          aria-hidden="true"
        >
          <div className="service-process-grid-bg" />

          <div className="service-process-glow" />
        </div>


        <div className="service-process-container">
          {/* HEADING */}

          <div className="service-process-heading">
            <div className="service-process-label">
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
              A proven methodology that delivers
              exceptional results every time.
            </p>
          </div>


          {/* PROCESS GRID */}

          <div className="service-process-grid">
            {processSteps.map(
              (step) => {
                const Icon =
                  step.icon;

                return (
                  <article
                    key={step.number}
                    className="service-process-card"
                  >
                    {/* NUMBER */}

                    <span className="service-process-number">
                      {step.number}
                    </span>


                    {/* ICON */}

                    <div className="service-process-icon">
                      <Icon
                        size={23}
                        strokeWidth={1.8}
                      />
                    </div>


                    {/* TITLE */}

                    <h3>
                      {step.title}
                    </h3>


                    {/* DESCRIPTION */}

                    <p>
                      {step.description}
                    </p>


                    {/* LIGHT */}

                    <div
                      className="service-process-card-light"
                      aria-hidden="true"
                    />
                  </article>
                );
              }
            )}
          </div>
        </div>
      </section>


      {/* ===================================================
          READY TO START PROJECT CTA
      ==================================================== */}

      <section className="service-project-cta-section">
        {/* BACKGROUND LIGHT */}

        <div
          className="service-project-cta-glow"
          aria-hidden="true"
        />

        {/* BACKGROUND GRID */}

        <div
          className="service-project-cta-grid"
          aria-hidden="true"
        />


        <div className="service-project-cta-container">
          <div className="service-project-cta-content">
            {/* TITLE */}

            <h2>
              Ready to Start Your
              <span>
                {" "}Project?
              </span>
            </h2>


            {/* DESCRIPTION */}

            <p>
              Let’s discuss how we can help transform
              your ideas into reality. Get in touch with
              our team today.
            </p>


            {/* BUTTONS */}

            <div className="service-project-cta-actions">
              <Link
                to="/request-quote"
                className="service-project-primary-button"
              >
                Get Free Quote

                <ArrowRight
                  size={17}
                  strokeWidth={2}
                />
              </Link>


              <Link
                to="/#projects"
                className="service-project-secondary-button"
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