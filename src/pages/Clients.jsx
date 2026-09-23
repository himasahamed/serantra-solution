import { ArrowRight } from "lucide-react";

const clients = [
  {
    name: "Client Project One",
    service: "Website Development",
    image: "/images/clients/client-1.jpg",
    description:
      "A modern responsive website designed to strengthen the client's digital presence.",
  },

  {
    name: "Client Project Two",
    service: "Web Application",
    image: "/images/clients/client-2.jpg",
    description:
      "A custom web application developed around the client's business workflow.",
  },

  {
    name: "Client Project Three",
    service: "UI/UX Design",
    image: "/images/clients/client-3.jpg",
    description:
      "A user-focused interface designed for clarity, usability and modern digital interaction.",
  },

  {
    name: "Client Project Four",
    service: "Software Development",
    image: "/images/clients/client-4.jpg",
    description:
      "A custom software solution created to improve operational efficiency.",
  },
];

const clientSteps = [
  {
    number: "01",
    title: "Make a Request",
    text: "Tell us about your project and what you need.",
  },

  {
    number: "02",
    title: "We Analyze",
    text: "We review your requirements, goals and project scope.",
  },

  {
    number: "03",
    title: "We Provide a Proposal",
    text: "You receive a clear, non-binding project proposal.",
  },
];

export default function Clients() {
  return (
    <main className="min-h-screen bg-[#050505] pt-20 text-white">

      {/* HERO */}

      <section className="border-b border-white/10">

        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-8 lg:py-36">

          <p className="text-xs uppercase tracking-[0.25em] text-blue-400">
            Our Clients
          </p>

          <h1 className="mt-6 max-w-4xl text-5xl font-medium tracking-[-0.05em] sm:text-6xl lg:text-7xl">

            Helping businesses turn ideas

            <span className="block text-zinc-500">
              into digital experiences.
            </span>

          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-500">
            We work with businesses and organizations to create modern
            websites, software platforms and digital products built around
            their requirements.
          </p>

        </div>

      </section>

      {/* CLIENT PROJECTS - NO BOXES */}

      <section className="py-28">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-x-10 gap-y-20 md:grid-cols-2">

            {clients.map((client, index) => (
              <article
                key={client.name}
                className="group"
              >

                <div className="overflow-hidden">

                  <img
                    src={client.image}
                    alt={`${client.name} project`}
                    loading="lazy"
                    className="h-[360px] w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                  />

                </div>

                <div className="mt-7 flex gap-6">

                  <span className="font-mono text-xs text-blue-400">
                    0{index + 1}
                  </span>

                  <div>

                    <p className="text-xs uppercase tracking-[0.18em] text-blue-400">
                      {client.service}
                    </p>

                    <h2 className="mt-3 text-2xl font-medium">
                      {client.name}
                    </h2>

                    <p className="mt-4 max-w-lg leading-7 text-zinc-500">
                      {client.description}
                    </p>

                    <a
                      href="/#contact"
                      className="mt-6 inline-flex items-center gap-2 text-sm text-zinc-300"
                    >
                      View Project

                      <ArrowRight size={14} />
                    </a>

                  </div>

                </div>

              </article>
            ))}

          </div>

        </div>

      </section>

      {/* CLIENT PROCESS */}

      <section className="border-t border-white/10 bg-[#080808] py-28">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <p className="text-xs uppercase tracking-[0.25em] text-blue-400">
            Start Your Project
          </p>

          <h2 className="mt-6 max-w-3xl text-4xl font-medium tracking-[-0.04em] md:text-5xl">
            A simple way to
            <span className="block text-zinc-500">
              start working with us.
            </span>
          </h2>

          {/* DESKTOP ARROW PROCESS */}

          <div className="mt-20 hidden lg:grid lg:grid-cols-3">

            {clientSteps.map((step, index) => (
              <div
                key={step.number}
                className={`client-process-arrow relative min-h-[220px] ${
                  index > 0 ? "-ml-5" : ""
                }`}
              >

                <div className="relative z-10 flex h-full flex-col justify-between px-14 py-10">

                  <div>

                    <p className="text-xs uppercase tracking-[0.18em] text-blue-400">
                      Step {step.number}
                    </p>

                    <h3 className="mt-5 text-2xl font-medium">
                      {step.title}
                    </h3>

                    <p className="mt-4 max-w-xs leading-7 text-zinc-500">
                      {step.text}
                    </p>

                  </div>

                  <span className="mt-8 text-4xl font-light text-zinc-700">
                    {index + 1}
                  </span>

                </div>

              </div>
            ))}

          </div>

          {/* MOBILE VERSION */}

          <div className="mt-16 space-y-10 lg:hidden">

            {clientSteps.map((step, index) => (
              <div
                key={step.number}
                className="relative border-b border-white/10 pb-10"
              >

                <div className="flex gap-6">

                  <span className="text-3xl font-light text-blue-400">
                    {index + 1}
                  </span>

                  <div>

                    <h3 className="text-xl font-medium">
                      {step.title}
                    </h3>

                    <p className="mt-3 leading-7 text-zinc-500">
                      {step.text}
                    </p>

                  </div>

                </div>

              </div>
            ))}

          </div>

          <a
            href="/#contact"
            className="mt-14 inline-flex items-center gap-3 bg-white px-7 py-4 font-semibold text-black transition hover:bg-blue-500 hover:text-white"
          >
            Request a Free Quote

            <ArrowRight size={17} />
          </a>

        </div>

      </section>

    </main>
  );
}