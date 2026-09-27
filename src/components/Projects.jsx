import { ArrowUpRight } from "lucide-react";
import "./Projects.css";

const projects = [
  {
    id: "01",
    category: "Website",
    year: "2026",
    title: "Modern Business Website",
    subtitle: "Website Development",
    description:
      "A modern, responsive business website designed around strong visual identity, clear user journeys and high-performance development.",
    image: "/images/projects/project-1.jpg",
    link: "#",
    size: "large",
  },
  {
    id: "02",
    category: "Web App",
    year: "2026",
    title: "Digital Management Platform",
    subtitle: "Web Application Development",
    description:
      "A scalable web application created to simplify business processes, improve accessibility and provide a smooth digital experience.",
    image: "/images/projects/project-2.jpg",
    link: "#",
    size: "small",
  },
  {
    id: "03",
    category: "Software",
    year: "2026",
    title: "Business Automation System",
    subtitle: "Custom Software Development",
    description:
      "A custom software solution built to automate repetitive operations and provide better control over business workflows.",
    image: "/images/projects/project-3.jpg",
    link: "#",
    size: "small",
  },
  {
    id: "04",
    category: "UI / UX",
    year: "2026",
    title: "Digital Product Experience",
    subtitle: "UI/UX Design",
    description:
      "A clean and user-focused interface system combining thoughtful interaction design, visual consistency and intuitive navigation.",
    image: "/images/projects/project-4.jpg",
    link: "#",
    size: "large",
  },
  {
    id: "05",
    category: "SaaS",
    year: "2026",
    title: "SaaS Management Dashboard",
    subtitle: "SaaS Development",
    description:
      "A responsive SaaS dashboard designed for data visibility, efficient workflows and future product scalability.",
    image: "/images/projects/project-5.jpg",
    link: "#",
    size: "equal",
  },
  {
    id: "06",
    category: "Development",
    year: "2026",
    title: "Enterprise Digital Solution",
    subtitle: "Web & Software Development",
    description:
      "A flexible digital platform combining modern frontend development, scalable architecture and a polished user experience.",
    image: "/images/projects/project-6.jpg",
    link: "#",
    size: "equal",
  },
];

export default function Projects() {
  const handleProjectClick = (event, link) => {
    if (!link || link === "#") {
      event.preventDefault();
    }
  };

  return (
    <section id="projects" className="projects-section">
      {/* ===============================
          BACKGROUND
      ================================ */}

      <div className="projects-background" aria-hidden="true">
        <div className="projects-grid" />

        <div className="projects-glow projects-glow-one" />
        <div className="projects-glow projects-glow-two" />
      </div>

      <div className="projects-container">
        {/* ===============================
            SECTION HEADING
        ================================ */}

        <div className="projects-heading">
          <div className="projects-eyebrow">
            <span />
            Selected Work
          </div>

          <div className="projects-heading-layout">
            <h2>
              Crafted solutions that drive
              <span className="project-gradient-text">
                digital transformation
              </span>
            </h2>

            <p>
              A selection of digital products, websites and
              software experiences created to solve real
              business challenges.
            </p>
          </div>
        </div>

        {/* ===============================
            PROJECT GRID
        ================================ */}

        <div className="projects-grid-layout">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className={`project-card project-card-${project.size}`}
            >
              {/* IMAGE */}

              <img
                src={project.image}
                alt={project.title}
                className="project-card-image"
                loading={index > 1 ? "lazy" : "eager"}
              />

              {/* BASE DARK OVERLAY */}

              <div className="project-card-overlay" />

              {/* PURPLE HOVER LIGHT */}

              <div className="project-card-purple-light" />

              {/* TOP INFORMATION */}

              <div className="project-card-top">
                <span className="project-category">
                  {project.category}
                </span>

                <span className="project-year">
                  {project.year}
                </span>
              </div>

              {/* MAIN CONTENT */}

              <div className="project-card-content">
                <div className="project-card-content-inner">
                  <span className="project-number">
                    {project.id}
                  </span>

                  <h3>{project.title}</h3>

                  <p className="project-subtitle">
                    {project.subtitle}
                  </p>

                  {/* Hidden until hover */}

                  <div className="project-hover-details">
                    <p className="project-description">
                      {project.description}
                    </p>

                    <a
                      href={project.link}
                      onClick={(event) =>
                        handleProjectClick(
                          event,
                          project.link
                        )
                      }
                      className="project-view-button"
                    >
                      View Project

                      <ArrowUpRight
                        size={16}
                        strokeWidth={2}
                      />
                    </a>
                  </div>
                </div>
              </div>

              {/* LARGE BACKGROUND NUMBER */}

              <span
                className="project-background-number"
                aria-hidden="true"
              >
                {project.id}
              </span>

              {/* MOVING BOTTOM LINE */}

              <div
                className="project-hover-line"
                aria-hidden="true"
              >
                <span />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}