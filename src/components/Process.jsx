import AnimatedText from "./AnimatedText";

const process = [
  {
    number: "01",
    title: "Discovery & Strategy",
    description:
      "We learn about your business, target audience, objectives and requirements before defining the right digital solution.",
  },

  {
    number: "02",
    title: "Planning",
    description:
      "We define features, project structure, technology choices and the roadmap for development.",
  },

  {
    number: "03",
    title: "UI/UX Design",
    description:
      "Wireframes and user-focused interfaces are designed to create a clear and intuitive digital experience.",
  },

  {
    number: "04",
    title: "Development",
    description:
      "The approved design is transformed into a responsive, scalable and maintainable digital product.",
  },

  {
    number: "05",
    title: "Testing & Quality",
    description:
      "Functionality, responsiveness, usability and performance are carefully tested before launch.",
  },

  {
    number: "06",
    title: "Launch & Growth",
    description:
      "Your product is deployed and we continue providing support, maintenance and future improvements.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="relative overflow-hidden bg-[#050505] py-28 lg:py-40"
    >

      <div className="pointer-events-none absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-blue-600/5 blur-[160px]" />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">

        <div className="max-w-3xl">

          <p className="text-xs uppercase tracking-[0.25em] text-blue-400">
            Our Development Process
          </p>

          <h2 className="mt-6 text-4xl font-medium tracking-[-0.045em] md:text-6xl">

            <AnimatedText
              text="From your initial idea"
              delay={28}
            />

            <span className="block text-zinc-500">

              <AnimatedText
                text="to a finished product."
                delay={30}
              />

            </span>

          </h2>

        </div>

        <div className="relative mt-24">

          {/* VERTICAL LINE */}

          <div className="absolute bottom-0 left-[23px] top-0 w-px bg-gradient-to-b from-blue-500 via-purple-500/60 to-white/10 md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-20 md:space-y-28">

            {process.map((step, index) => {
              const left = index % 2 === 0;

              return (
                <article
                  key={step.number}
                  className="relative grid md:grid-cols-2"
                >

                  {/* center point */}

                  <div className="absolute left-[15px] top-1 z-10 flex h-[17px] w-[17px] items-center justify-center rounded-full border border-blue-400 bg-[#050505] md:left-1/2 md:-translate-x-1/2">

                    <span className="h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_14px_#60a5fa]" />

                  </div>

                  <div
                    className={`
                      ml-14
                      md:ml-0
                      ${
                        left
                          ? "md:col-start-1 md:pr-20 md:text-right"
                          : "md:col-start-2 md:pl-20"
                      }
                    `}
                  >

                    <span className="font-mono text-xs tracking-[0.2em] text-blue-400">
                      {step.number}
                    </span>

                    <h3 className="mt-4 text-2xl font-medium md:text-3xl">
                      {step.title}
                    </h3>

                    <p
                      className={`mt-5 max-w-md leading-7 text-zinc-500 ${
                        left ? "md:ml-auto" : ""
                      }`}
                    >
                      {step.description}
                    </p>

                  </div>

                </article>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
}