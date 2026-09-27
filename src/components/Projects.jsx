import { ArrowUpRight } from "lucide-react";
import "./Projects.css";

const projects = [
  {
    title: "Business Website Platform",
    category: "Website Development",
    image: "/images/projects/project-1.jpg",
    size: "large",
  },
  {
    title: "Operations Dashboard",
    category: "Web Application",
    image: "/images/projects/project-2.jpg",
    size: "small",
  },
  {
    title: "Property Management System",
    category: "Custom Software",
    image: "/images/projects/project-3.jpg",
    size: "small",
  },
  {
    title: "SaaS Product Experience",
    category: "SaaS Development",
    image: "/images/projects/project-4.jpg",
    size: "large",
  },
  {
    title: "Digital Product Redesign",
    category: "UI/UX Design",
    image: "/images/projects/project-5.jpg",
    size: "equal",
  },
  {
    title: "Support & Optimization",
    category: "Maintenance & Support",
    image: "/images/projects/project-6.jpg",
    size: "equal",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-shell">
        <div className="projects-heading">
          <div className="projects-kicker motion-reveal"><span />Selected Work</div>
          <h2 className="motion-reveal">
            Crafted solutions that drive
            <span className="project-gradient-text"> digital transformation</span>
          </h2>
          <p className="motion-reveal">
            A selection of the kinds of digital products, systems and experiences we create for modern businesses.
          </p>
        </div>

        <div className="projects-grid motion-stagger">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className={`project-card project-card-${project.size} project-card-${index + 1}`}
            >
              <img src={project.image} alt="" loading="lazy" />
              <div className="project-overlay" />
              <div className="project-details">
                <span>{project.category}</span>
                <div>
                  <h3>{project.title}</h3>
                  <ArrowUpRight size={20} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="section-motion-line" aria-hidden="true" />
    </section>
  );
}
