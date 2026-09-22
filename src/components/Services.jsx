import {
    ArrowRight,
    Code2,
    Globe2,
    MonitorSmartphone,
    Palette,
  } from "lucide-react";
  
  import AnimatedText from "./AnimatedText";
  
  const services = [
    {
      icon: Globe2,
  
      title: "Website Development",
  
      description:
        "Modern, responsive and SEO-focused websites designed to strengthen your online presence and support business growth.",
    },
  
    {
      icon: Code2,
  
      title: "Web Application Development",
  
      description:
        "Scalable web applications built around your business requirements, workflows and customers.",
    },
  
    {
      icon: MonitorSmartphone,
  
      title: "Custom Software Development",
  
      description:
        "Custom digital solutions designed to improve efficiency and simplify business operations.",
    },
  
    {
      icon: Palette,
  
      title: "UI/UX Design",
  
      description:
        "Clean and intuitive digital interfaces focused on usability, accessibility and great user experiences.",
    },
  ];
  
  export default function Services() {
    return (
      <section
        id="services"
        className="bg-[#050505] py-28 lg:py-36"
      >
  
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
  
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
  
            <div>
  
              <p className="text-xs uppercase tracking-[0.25em] text-blue-400">
                What We Do
              </p>
  
              <h2 className="mt-6 max-w-3xl text-4xl font-medium tracking-[-0.04em] md:text-6xl">
  
                <AnimatedText
                  text="Digital solutions for"
                  delay={28}
                />
  
                <span className="block text-zinc-500">
  
                  <AnimatedText
                    text="modern businesses."
                    delay={32}
                  />
  
                </span>
  
              </h2>
  
            </div>
  
            <p className="max-w-md leading-7 text-zinc-500">
  
              Strategy, design and development come together
              to create professional and scalable digital
              products.
  
            </p>
  
          </div>
  
          <div className="mt-16 grid border-l border-t border-white/10 md:grid-cols-2 lg:grid-cols-4">
  
            {services.map((service) => {
              const Icon = service.icon;
  
              return (
                <article
                  key={service.title}
                  className="group min-h-[330px] border-b border-r border-white/10 p-8 transition duration-500 hover:bg-blue-500/[0.05]"
                >
  
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03]">
  
                    <Icon
                      size={25}
                      strokeWidth={1.5}
                      className="text-blue-400"
                    />
  
                  </div>
  
                  <h3 className="mt-14 text-xl font-medium">
                    {service.title}
                  </h3>
  
                  <p className="mt-4 text-sm leading-7 text-zinc-500">
                    {service.description}
                  </p>
  
                  <a
                    href="#contact"
                    className="mt-7 inline-flex items-center gap-2 text-sm text-zinc-300 transition hover:text-blue-400"
                  >
                    Learn more
  
                    <ArrowRight size={14} />
                  </a>
  
                </article>
              );
            })}
  
          </div>
  
        </div>
  
      </section>
    );
  }