import {
  ArrowRight,
  Bot,
  Code2,
  Laptop,
  Megaphone,
  Palette,
  PenTool,
  Sparkles,
  Workflow,
} from "lucide-react";

import { Link } from "react-router-dom";
import "./ServicePage.css";

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

export default function ServicePage() {
  const handleMouseMove = (event) => {
    const card = event.currentTarget;

    const rect =
      card.getBoundingClientRect();

    const x =
      event.clientX - rect.left;

    const y =
      event.clientY - rect.top;

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

          <h1>
            What We
            <span> Offer</span>
          </h1>

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

        {/* SERVICES */}

        <div className="all-services-grid">
          {services.map(
            (service, index) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.title}
                  className="all-service-card"
                  onMouseMove={
                    handleMouseMove
                  }
                >
                  {/* MOUSE GLOW */}

                  <div
                    className="all-service-cursor-glow"
                    aria-hidden="true"
                  />

                  {/* NUMBER */}

                  <span className="all-service-number">
                    {String(
                      index + 1
                    ).padStart(2, "0")}
                  </span>

                  {/* ICON */}

                  <div className="all-service-icon">
                    <Icon
                      size={23}
                      strokeWidth={1.9}
                    />
                  </div>

                  {/* TITLE */}

                  <h2>
                    {service.title}
                  </h2>

                  {/* DESCRIPTION */}

                  <p className="all-service-description">
                    {
                      service.description
                    }
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
  );
}