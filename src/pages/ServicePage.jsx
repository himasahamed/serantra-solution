import {
    ArrowRight,
    Check,
  } from "lucide-react";
  
  import {
    Link,
    Navigate,
    useParams,
  } from "react-router-dom";
  
  import { services } from "../data/services";
  
  export default function ServicePage() {
    const { slug } = useParams();
  
    const service = services.find(
      (item) => item.slug === slug
    );
  
    if (!service) {
      return <Navigate to="/" replace />;
    }
  
    return (
      <main className="bg-[#050505] pt-20 text-white">
  
        {/* HERO */}
  
        <section className="relative overflow-hidden border-b border-white/10">
  
          <div className="absolute right-[-200px] top-[-100px] h-[600px] w-[600px] rounded-full bg-blue-600/10 blur-[160px]" />
  
          <div className="relative mx-auto max-w-7xl px-6 py-28 lg:px-8 lg:py-40">
  
            <p className="text-xs uppercase tracking-[0.25em] text-blue-400">
              Services / {service.title}
            </p>
  
            <h1 className="mt-7 max-w-5xl text-5xl font-medium tracking-[-0.055em] sm:text-6xl lg:text-7xl">
              {service.title}
            </h1>
  
            <p className="mt-8 max-w-2xl text-xl leading-9 text-zinc-400">
              {service.heroText}
            </p>
  
            <a
              href="#service-contact"
              className="mt-10 inline-flex items-center gap-3 bg-white px-7 py-4 text-sm font-semibold text-black"
            >
              Start a Project
  
              <ArrowRight size={17} />
            </a>
  
          </div>
  
        </section>
  
        {/* DESCRIPTION */}
  
        <section className="py-28">
  
          <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:px-8">
  
            <div>
  
              <p className="text-xs uppercase tracking-[0.25em] text-blue-400">
                Overview
              </p>
  
              <h2 className="mt-6 text-4xl font-medium tracking-[-0.04em]">
                Built around your
                <span className="block text-zinc-500">
                  business requirements.
                </span>
              </h2>
  
            </div>
  
            <p className="text-lg leading-8 text-zinc-400">
              {service.description}
            </p>
  
          </div>
  
        </section>
  
        {/* BENEFITS */}
  
        <section className="border-y border-white/10 bg-[#090909] py-28">
  
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
  
            <p className="text-xs uppercase tracking-[0.25em] text-blue-400">
              Benefits
            </p>
  
            <h2 className="mt-6 text-4xl font-medium">
              What you can expect.
            </h2>
  
            <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
  
              {service.benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-center gap-4 border-b border-white/10 py-6"
                >
  
                  <Check
                    size={17}
                    className="shrink-0 text-blue-400"
                  />
  
                  <span className="text-zinc-300">
                    {benefit}
                  </span>
  
                </div>
              ))}
  
            </div>
  
          </div>
  
        </section>
  
        {/* FEATURES */}
  
        <section className="py-28">
  
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
  
            <p className="text-xs uppercase tracking-[0.25em] text-blue-400">
              Capabilities
            </p>
  
            <h2 className="mt-6 text-4xl font-medium">
              What we can build.
            </h2>
  
            <div className="mt-14 grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
  
              {service.features.map((feature, index) => (
                <div
                  key={feature}
                  className="min-h-[180px] bg-[#070707] p-8"
                >
  
                  <span className="font-mono text-xs text-blue-400">
                    0{index + 1}
                  </span>
  
                  <h3 className="mt-12 text-xl">
                    {feature}
                  </h3>
  
                </div>
              ))}
  
            </div>
  
          </div>
  
        </section>
  
        {/* CONTACT CTA */}
  
        <section
          id="service-contact"
          className="bg-blue-600"
        >
  
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-10 px-6 py-24 lg:flex-row lg:items-end lg:px-8">
  
            <div>
  
              <p className="text-xs uppercase tracking-[0.25em] text-blue-100">
                Start Your Project
              </p>
  
              <h2 className="mt-6 max-w-3xl text-4xl font-medium tracking-[-0.04em] md:text-5xl">
                Need {service.title.toLowerCase()}?
              </h2>
  
            </div>
  
            <a
              href="/#contact"
              className="flex w-fit items-center gap-3 bg-white px-7 py-4 font-semibold text-black"
            >
              Contact Serantra Solution
  
              <ArrowRight size={17} />
            </a>
  
          </div>
  
        </section>
  
      </main>
    );
  }