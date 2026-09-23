import { useEffect } from "react";

import {
  ArrowRight,
  Check,
  MoveUpRight,
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


  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [slug]);


  if (!service) {
    return (
      <Navigate
        to="/"
        replace
      />
    );
  }


  const relatedServices = services
    .filter(
      (item) =>
        item.slug !== service.slug
    )
    .slice(0, 3);


  const developmentSteps = [
    {
      number: "01",

      title: "Understand",

      description:
        "We understand your business, users, goals and project requirements.",
    },

    {
      number: "02",

      title: "Plan",

      description:
        "We define the project structure, functionality, technology and development direction.",
    },

    {
      number: "03",

      title: "Design",

      description:
        "We create clear, modern and user-focused interface experiences.",
    },

    {
      number: "04",

      title: "Develop",

      description:
        "We transform the approved design into a responsive and maintainable digital product.",
    },

    {
      number: "05",

      title: "Test",

      description:
        "We review functionality, responsiveness, usability and performance.",
    },

    {
      number: "06",

      title: "Launch",

      description:
        "We deploy the product and continue providing technical support when required.",
    },
  ];


  return (
    <main className="min-h-screen bg-[#050505] pt-20 text-white">

      {/* ========================================
          HERO
      ======================================== */}

      <section className="relative overflow-hidden border-b border-white/10">

        <div className="pointer-events-none absolute right-[-250px] top-[-180px] h-[700px] w-[700px] rounded-full bg-blue-600/10 blur-[170px]" />


        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-36">

          {/* BREADCRUMB */}

          <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.18em]">

            <Link
              to="/"
              className="text-zinc-600 transition hover:text-white"
            >
              Home
            </Link>

            <span className="text-zinc-700">
              /
            </span>

            <span className="text-zinc-600">
              Services
            </span>

            <span className="text-zinc-700">
              /
            </span>

            <span className="text-blue-400">
              {service.title}
            </span>

          </div>


          <div className="mt-16 grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">

            <div>

              <p className="text-xs uppercase tracking-[0.25em] text-blue-400">
                Serantra Solution
              </p>


              <h1 className="mt-6 max-w-5xl text-5xl font-medium leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-7xl xl:text-8xl">
                {service.title}
              </h1>

            </div>


            <div>

              <p className="max-w-xl text-lg leading-8 text-zinc-400">
                {service.heroText}
              </p>


              <div className="mt-9 flex flex-wrap gap-5">

                <Link
                  to="/request-quote"
                  className="group inline-flex items-center gap-3 bg-white px-7 py-4 text-sm font-semibold text-black transition hover:bg-blue-500 hover:text-white"
                >
                  Request a Free Quote

                  <ArrowRight
                    size={17}
                    className="transition group-hover:translate-x-1"
                  />
                </Link>


                <a
                  href="#overview"
                  className="group inline-flex items-center gap-2 border-b border-white/30 py-4 text-sm text-zinc-300 transition hover:border-blue-400 hover:text-blue-400"
                >
                  Explore Service

                  <MoveUpRight size={15} />
                </a>

              </div>

            </div>

          </div>


          {/* HERO INFORMATION */}

          <div className="mt-24 grid gap-8 border-t border-white/10 pt-8 sm:grid-cols-3">

            <div>

              <p className="text-xs uppercase tracking-[0.18em] text-zinc-600">
                Service
              </p>

              <p className="mt-2 text-sm text-zinc-300">
                {service.title}
              </p>

            </div>


            <div>

              <p className="text-xs uppercase tracking-[0.18em] text-zinc-600">
                Focus
              </p>

              <p className="mt-2 text-sm text-zinc-300">
                Performance & User Experience
              </p>

            </div>


            <div>

              <p className="text-xs uppercase tracking-[0.18em] text-zinc-600">
                Approach
              </p>

              <p className="mt-2 text-sm text-zinc-300">
                Strategy · Design · Development
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ========================================
          OVERVIEW
      ======================================== */}

      <section
        id="overview"
        className="py-28 lg:py-36"
      >

        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">

          <div>

            <p className="text-xs uppercase tracking-[0.25em] text-blue-400">
              Service Overview
            </p>


            <h2 className="mt-6 text-4xl font-medium tracking-[-0.04em] md:text-5xl">

              Built around your

              <span className="block text-zinc-500">
                business requirements.
              </span>

            </h2>

          </div>


          <div>

            <p className="text-xl leading-9 text-zinc-400">
              {service.description}
            </p>


            <p className="mt-8 leading-8 text-zinc-500">
              Our approach focuses on creating digital solutions
              that are practical, maintainable and aligned with
              your long-term goals.
            </p>

          </div>

        </div>

      </section>


      {/* ========================================
          BENEFITS
      ======================================== */}

      <section className="border-y border-white/10 bg-[#080808] py-28 lg:py-36">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr]">

            <div>

              <p className="text-xs uppercase tracking-[0.25em] text-blue-400">
                Benefits
              </p>


              <h2 className="mt-6 text-4xl font-medium tracking-[-0.04em] md:text-5xl">

                What you can

                <span className="block text-zinc-500">
                  expect.
                </span>

              </h2>

            </div>


            <div>

              {service.benefits.map(
                (benefit, index) => (
                  <div
                    key={benefit}
                    className="group grid grid-cols-[45px_1fr_auto] items-center gap-5 border-t border-white/10 py-7"
                  >

                    <span className="font-mono text-xs text-blue-400">
                      {String(index + 1).padStart(2, "0")}
                    </span>


                    <p className="text-zinc-300 transition group-hover:text-white md:text-lg">
                      {benefit}
                    </p>


                    <Check
                      size={16}
                      className="text-zinc-700 transition group-hover:text-blue-400"
                    />

                  </div>
                )
              )}

              <div className="border-t border-white/10" />

            </div>

          </div>

        </div>

      </section>


      {/* ========================================
          CAPABILITIES
      ======================================== */}

      <section className="py-28 lg:py-36">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">

            <div>

              <p className="text-xs uppercase tracking-[0.25em] text-blue-400">
                Capabilities
              </p>


              <h2 className="mt-6 text-4xl font-medium tracking-[-0.04em] md:text-5xl">
                What we can build.
              </h2>

            </div>


            <p className="max-w-md leading-7 text-zinc-500">
              Our service can be adapted to different industries,
              workflows and project requirements.
            </p>

          </div>


          <div className="mt-16">

            {service.features.map(
              (feature, index) => (
                <div
                  key={feature}
                  className="group flex items-center justify-between gap-8 border-t border-white/10 py-8 md:py-10"
                >

                  <div className="flex items-center gap-6 md:gap-12">

                    <span className="font-mono text-xs text-blue-400">
                      {String(index + 1).padStart(2, "0")}
                    </span>


                    <h3 className="text-xl font-medium text-zinc-300 transition duration-300 group-hover:translate-x-2 group-hover:text-white md:text-3xl">
                      {feature}
                    </h3>

                  </div>


                  <ArrowRight
                    size={20}
                    className="shrink-0 text-zinc-700 transition group-hover:translate-x-1 group-hover:text-blue-400"
                  />

                </div>
              )
            )}

            <div className="border-t border-white/10" />

          </div>

        </div>

      </section>


      {/* ========================================
          APPROACH
      ======================================== */}

      <section className="border-y border-white/10 bg-[#080808] py-28 lg:py-36">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <p className="text-xs uppercase tracking-[0.25em] text-blue-400">
            Our Approach
          </p>


          <h2 className="mt-6 max-w-3xl text-4xl font-medium tracking-[-0.04em] md:text-5xl">

            A clear path from idea

            <span className="block text-zinc-500">
              to final delivery.
            </span>

          </h2>


          <div className="mt-20">

            {developmentSteps.map((step) => (
              <div
                key={step.number}
                className="grid gap-5 border-t border-white/10 py-8 md:grid-cols-[90px_0.7fr_1.3fr] md:py-10"
              >

                <span className="font-mono text-xs text-blue-400">
                  {step.number}
                </span>


                <h3 className="text-xl font-medium md:text-2xl">
                  {step.title}
                </h3>


                <p className="max-w-xl leading-7 text-zinc-500">
                  {step.description}
                </p>

              </div>
            ))}

            <div className="border-t border-white/10" />

          </div>

        </div>

      </section>


      {/* ========================================
          RELATED SERVICES
      ======================================== */}

      <section className="py-28 lg:py-36">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <p className="text-xs uppercase tracking-[0.25em] text-blue-400">
            Explore More
          </p>


          <h2 className="mt-6 text-4xl font-medium tracking-[-0.04em] md:text-5xl">
            Related services.
          </h2>


          <div className="mt-16">

            {relatedServices.map(
              (related, index) => (
                <Link
                  key={related.slug}
                  to={`/services/${related.slug}`}
                  className="group flex items-center justify-between gap-8 border-t border-white/10 py-8 md:py-10"
                >

                  <div className="flex items-center gap-6 md:gap-10">

                    <span className="font-mono text-xs text-blue-400">
                      0{index + 1}
                    </span>


                    <div>

                      <h3 className="text-xl font-medium text-zinc-300 transition group-hover:text-white md:text-2xl">
                        {related.title}
                      </h3>


                      <p className="mt-2 hidden max-w-xl text-sm text-zinc-600 md:block">
                        {related.description}
                      </p>

                    </div>

                  </div>


                  <ArrowRight
                    size={19}
                    className="text-zinc-700 transition group-hover:translate-x-1 group-hover:text-blue-400"
                  />

                </Link>
              )
            )}

            <div className="border-t border-white/10" />

          </div>

        </div>

      </section>


      {/* ========================================
          QUOTE CTA
      ======================================== */}

      <section className="relative overflow-hidden bg-blue-600">

        <div className="pointer-events-none absolute right-[-100px] top-[-150px] h-[500px] w-[500px] rounded-full bg-white/10 blur-[100px]" />


        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-28">

          <div className="flex flex-col justify-between gap-12 lg:flex-row lg:items-end">

            <div>

              <p className="text-xs uppercase tracking-[0.25em] text-blue-100">
                Start Your Project
              </p>


              <h2 className="mt-6 max-w-4xl text-4xl font-medium tracking-[-0.045em] md:text-6xl">
                Need {service.title.toLowerCase()}?
              </h2>


              <p className="mt-6 max-w-2xl leading-7 text-blue-100/80">
                Tell us about your project and we can discuss
                the best approach for your requirements.
              </p>

            </div>


            <Link
              to="/request-quote"
              className="group flex w-fit shrink-0 items-center gap-3 bg-white px-7 py-4 text-sm font-semibold text-black transition hover:bg-black hover:text-white"
            >
              Request a Free Quote

              <ArrowRight
                size={17}
                className="transition group-hover:translate-x-1"
              />
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}