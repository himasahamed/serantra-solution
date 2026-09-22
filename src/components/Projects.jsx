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
      className="bg-zinc-100 py-28 text-black lg:py-36"
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

        <div className="mt-16 grid gap-5 lg:grid-cols-3">

          {projects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden bg-white"
            >

              <div className="relative h-72 overflow-hidden bg-[#050816]">

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#1e40af_0%,#0f172a_40%,#020617_80%)]" />

                <div className="absolute left-1/2 top-1/2 h-36 w-56 -translate-x-1/2 -translate-y-1/2 rotate-[-6deg] rounded-xl border border-blue-300/20 bg-blue-500/10 shadow-2xl transition duration-700 group-hover:rotate-[-2deg] group-hover:scale-105">

                  <div className="h-8 border-b border-white/10" />

                  <div className="grid grid-cols-2 gap-3 p-4">

                    <div className="h-16 rounded bg-blue-400/20" />

                    <div className="h-16 rounded bg-white/10" />

                    <div className="col-span-2 h-7 rounded bg-white/10" />

                  </div>

                </div>

              </div>

              <div className="p-8">

                <p className="text-xs uppercase tracking-[0.15em] text-blue-600">
                  {project.type}
                </p>

                <h3 className="mt-4 text-2xl font-medium">
                  {project.title}
                </h3>

                <p className="mt-4 leading-7 text-zinc-600">
                  {project.description}
                </p>

                <a
                  href="#contact"
                  className="mt-7 inline-flex items-center gap-2 text-sm font-medium"
                >
                  Discuss your project

                  <ArrowRight size={15} />
                </a>

              </div>

            </article>
          ))}

        </div>

      </div>

    </section>
  );
}