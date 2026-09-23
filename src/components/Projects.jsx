import { ArrowRight } from "lucide-react";
import AnimatedText from "./AnimatedText";

const projects = [
  {
    title: "Business Website Platform",
    type: "Website Development",
    description:
      "A modern responsive company website focused on performance, SEO and generating customer enquiries.",
  },

  {
    title: "Business Management System",
    type: "Web Application",
    description:
      "A scalable web application designed to organize workflows and improve business efficiency.",
  },

  {
    title: "SaaS Product Experience",
    type: "UI/UX Design",
    description:
      "A modern SaaS interface focused on navigation, usability and professional product experience.",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#f4f4f5] py-28 text-black lg:py-36"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <p className="text-xs uppercase tracking-[0.25em] text-blue-600">
          Selected Projects
        </p>

        <h2 className="mt-6 text-4xl font-medium tracking-[-0.04em] md:text-6xl">
          <AnimatedText
            text="Our projects."
            delay={45}
          />
        </h2>

        <div className="mt-20">

          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group grid gap-10 border-t border-black/10 py-14 md:grid-cols-[120px_1fr_1fr]"
            >

              <div>
                <span className="font-mono text-sm text-blue-600">
                  0{index + 1}
                </span>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-blue-600">
                  {project.type}
                </p>

                <h3 className="mt-4 text-3xl font-medium tracking-[-0.03em]">
                  {project.title}
                </h3>
              </div>

              <div>
                <p className="max-w-md leading-7 text-zinc-600">
                  {project.description}
                </p>

                <a
                  href="#contact"
                  className="mt-7 inline-flex items-center gap-2 text-sm font-medium"
                >
                  Discuss your project

                  <ArrowRight
                    size={15}
                    className="transition group-hover:translate-x-1"
                  />
                </a>
              </div>

            </article>
          ))}

          <div className="border-t border-black/10" />

        </div>

      </div>
    </section>
  );
}