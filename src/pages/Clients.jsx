import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

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

      {/* CLIENT GRID */}

      <section className="py-24">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-6 md:grid-cols-2">

            {clients.map((client) => (
              <article
                key={client.name}
                className="group overflow-hidden border border-white/10 bg-[#090909]"
              >

                <div className="overflow-hidden">

                  <img
                    src={client.image}
                    alt={`${client.name} project`}
                    loading="lazy"
                    className="h-[340px] w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                </div>

                <div className="p-8">

                  <p className="text-xs uppercase tracking-[0.2em] text-blue-400">
                    {client.service}
                  </p>

                  <h2 className="mt-4 text-2xl font-medium">
                    {client.name}
                  </h2>

                  <p className="mt-4 leading-7 text-zinc-500">
                    {client.description}
                  </p>

                  <a
                    href="/#contact"
                    className="mt-7 inline-flex items-center gap-2 text-sm"
                  >
                    Discuss a similar project

                    <ArrowRight size={15} />
                  </a>

                </div>

              </article>
            ))}

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="border-t border-white/10 bg-[#090909]">

        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-10 px-6 py-24 lg:flex-row lg:items-end lg:px-8">

          <h2 className="max-w-3xl text-4xl font-medium tracking-[-0.04em] md:text-5xl">
            Want your business to become
            <span className="block text-zinc-500">
              our next success story?
            </span>
          </h2>

          <a
            href="/#contact"
            className="flex w-fit items-center gap-3 bg-white px-7 py-4 font-semibold text-black"
          >
            Start a Project

            <ArrowRight size={17} />
          </a>

        </div>

      </section>

    </main>
  );
}