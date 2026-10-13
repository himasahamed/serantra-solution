import {
  ArrowRight,
  Bot,
  Braces,
  Code2,
  FlaskConical,
  Megaphone,
  Monitor,
  Paintbrush,
  Palette,
  PenTool,
  Rocket,
  Search,
  Sparkles,
  Target,
} from "lucide-react";

import { Link } from "react-router-dom";

import "./ServicePage.css";


const services = [
  {
    icon: Monitor,
    title: "Software Development",
    description:
      "Custom software solutions designed around your business requirements, workflows and future growth.",
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
      "Fast, responsive and modern websites developed to strengthen your digital presence and business performance.",
    features: [
      "Responsive Design",
      "Fast Performance",
      "SEO Friendly",
      "Modern Frameworks",
    ],
  },

  {
    icon: Palette,
    title: "Brand Identity",
    description:
      "Modern visual identity systems that help businesses build a clear, professional and memorable digital presence.",
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
      "Creative digital designs for websites, campaigns, social media and modern business communication.",
    features: [
      "Brand Materials",
      "Social Media",
      "Print Design",
      "Illustrations",
    ],
  },

  {
    icon: Paintbrush,
    title: "UI/UX Design",
    description:
      "Simple, intuitive and user-focused interface designs for websites, applications and digital products.",
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
      "Digital strategies designed to improve visibility, engagement and long-term online business growth.",
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
      "Clear and engaging content that communicates your business message and supports your digital brand.",
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
      "Smart AI and automation solutions designed to improve workflows, productivity and digital operations.",
    features: [
      "AI Chatbots",
      "Process Automation",
      "AI Integration",
      "Data Solutions",
    ],
  },
];


const process = [
  {
    icon: Search,
    title: "Discovery",
    description:
      "We understand your business, goals, users and project requirements.",
  },

  {
    icon: Target,
    title: "Strategy",
    description:
      "We create a clear project direction, roadmap and technical plan.",
  },

  {
    icon: Paintbrush,
    title: "Design",
    description:
      "We create modern visuals and intuitive user experiences.",
  },

  {
    icon: Braces,
    title: "Development",
    description:
      "We develop responsive, scalable and reliable digital solutions.",
  },

  {
    icon: FlaskConical,
    title: "Testing",
    description:
      "We test quality, usability, responsiveness and performance.",
  },

  {
    icon: Rocket,
    title: "Launch",
    description:
      "We deploy your project and provide continued technical support.",
  },
];


export default function ServicePage() {
  return (
    <main className="service-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="service-page-hero">
        <div
          className="service-page-grid"
          aria-hidden="true"
        />

        <div
          className="service-page-hero-glow service-page-hero-glow-one"
          aria-hidden="true"
        />

        <div
          className="service-page-hero-glow service-page-hero-glow-two"
          aria-hidden="true"
        />


        <div className="service-page-container">

          <div className="service-page-breadcrumb">
            <Link to="/">
              Home
            </Link>

            <span>
              /
            </span>

            <strong>
              Services
            </strong>
          </div>


          <div className="service-page-hero-content">

            <div className="service-page-label">
              <span />

              DIGITAL SOLUTIONS
            </div>


            <h1>
              Our{" "}

              <span>
                Services
              </span>
            </h1>


            <p>
              Modern digital solutions designed to help
              businesses build stronger products, improve
              digital experiences and grow with confidence.
            </p>

          </div>
        </div>
      </section>


      {/* =====================================================
          SERVICES
      ===================================================== */}

      <section className="service-page-services">

        <div
          className="service-page-services-glow"
          aria-hidden="true"
        />


        <div className="service-page-container">

          <div className="service-page-heading">

            <div className="service-page-label">
              <span />

              WHAT WE OFFER
            </div>


            <h2>
              Solutions for your
              <span>
                digital growth.
              </span>
            </h2>


            <p>
              We combine development, design, technology and
              digital strategy to create solutions that match
              your business needs.
            </p>

          </div>


          <div className="service-page-grid-list">

            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.title}
                  className="service-page-card"
                >
                  <div
                    className="service-page-card-glow"
                    aria-hidden="true"
                  />


                  <div className="service-page-card-icon">
                    <Icon
                      size={25}
                      strokeWidth={1.7}
                    />
                  </div>


                  <h3>
                    {service.title}
                  </h3>


                  <p>
                    {service.description}
                  </p>


                  <ul>
                    {service.features.map((feature) => (
                      <li key={feature}>
                        <span />

                        {feature}
                      </li>
                    ))}
                  </ul>


                  <div className="service-page-card-footer">
                    <span>
                      Explore Service
                    </span>

                    <ArrowRight
                      size={16}
                      strokeWidth={1.8}
                    />
                  </div>
                </article>
              );
            })}

          </div>
        </div>
      </section>


      {/* =====================================================
          HOW WE WORK
      ===================================================== */}

      <section className="service-page-process">

        <div className="service-page-container">

          <div className="service-page-heading">

            <div className="service-page-label">
              <span />

              OUR PROCESS
            </div>


            <h2>
              How We{" "}
              <span>
                Work
              </span>
            </h2>


            <p>
              A simple and transparent process from your
              initial idea through development and launch.
            </p>

          </div>


          <div className="service-page-process-grid">

            {process.map((step) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.title}
                  className="service-page-process-item"
                >
                  <div className="service-page-process-icon">
                    <Icon
                      size={23}
                      strokeWidth={1.7}
                    />
                  </div>


                  <h3>
                    {step.title}
                  </h3>


                  <p>
                    {step.description}
                  </p>
                </article>
              );
            })}

          </div>
        </div>
      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="service-page-cta-section">

        <div className="service-page-container">

          <div className="service-page-cta">

            <div
              className="service-page-cta-glow"
              aria-hidden="true"
            />


            <div className="service-page-cta-content">

              <div className="service-page-label">
                <span />

                START YOUR PROJECT
              </div>


              <h2>
                Ready to build something
                <span>
                  great?
                </span>
              </h2>


              <p>
                Tell us about your idea and we’ll help you
                plan the right digital solution for your
                business.
              </p>

            </div>


            <Link
              to="/request-quote"
              className="service-page-cta-button"
            >
              Start a Project

              <ArrowRight
                size={18}
                strokeWidth={2}
              />
            </Link>

          </div>
        </div>
      </section>

    </main>
  );
}