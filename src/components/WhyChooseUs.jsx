import {
    Code2,
    Headphones,
    Settings2,
    ShieldCheck,
  } from "lucide-react";
  
  import AnimatedText from "./AnimatedText";
  
  const benefits = [
    {
      icon: Code2,
  
      title: "Modern Development",
  
      description:
        "We use modern technologies and development practices to build reliable digital products.",
    },
  
    {
      icon: ShieldCheck,
  
      title: "Scalable & Reliable",
  
      description:
        "Our solutions are designed to grow alongside your business while maintaining performance.",
    },
  
    {
      icon: Settings2,
  
      title: "Flexible Solutions",
  
      description:
        "Every project is developed around your unique requirements and business goals.",
    },
  
    {
      icon: Headphones,
  
      title: "Continuous Support",
  
      description:
        "We provide technical support, maintenance and improvements after project delivery.",
    },
  ];
  
  export default function WhyChooseUs() {
    return (
      <section className="border-y border-white/10 bg-[#090909] py-28">
  
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
  
          <div className="text-center">
  
            <p className="text-xs uppercase tracking-[0.25em] text-blue-400">
              Why Serantra Solution
            </p>
  
            <h2 className="mt-6 text-4xl font-medium tracking-[-0.04em] md:text-5xl">
  
              <AnimatedText
                text="Why choose us?"
                delay={45}
              />
  
            </h2>
  
          </div>
  
          <div className="mt-20 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
  
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
  
              return (
                <article key={benefit.title}>
  
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/5">
  
                    <Icon
                      size={25}
                      strokeWidth={1.5}
                      className="text-blue-400"
                    />
  
                  </div>
  
                  <h3 className="mt-7 text-xl font-medium">
                    {benefit.title}
                  </h3>
  
                  <p className="mt-4 text-sm leading-7 text-zinc-500">
                    {benefit.description}
                  </p>
  
                </article>
              );
            })}
  
          </div>
  
        </div>
  
      </section>
    );
  }