import {
    ArrowRight,
    MoveUpRight,
  } from "lucide-react";
  
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
        "A user-focused interface designed for clarity, usability and modern interaction.",
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
  
      text:
        "Tell us about your project, goals and business requirements.",
    },
  
    {
      number: "02",
  
      title: "We Analyze",
  
      text:
        "We review your requirements, project scope and the best technical approach.",
    },
  
    {
      number: "03",
  
      title: "We Provide a Proposal",
  
      text:
        "You receive a clear, non-binding proposal for your project.",
    },
  ];
  
  
  export default function Clients() {
    return (
      <main className="min-h-screen bg-[#050505] pt-20 text-white">
  
        {/* ========================================
            HERO
        ======================================== */}
  
        <section className="border-b border-white/10">
  
          <div className="mx-auto max-w-7xl px-6 py-28 lg:px-8 lg:py-36">
  
            <p className="text-xs uppercase tracking-[0.25em] text-blue-400">
              Our Clients
            </p>
  
  
            <h1 className="mt-6 max-w-5xl text-5xl font-medium tracking-[-0.05em] sm:text-6xl lg:text-7xl">
  
              Helping businesses turn ideas
  
              <span className="block text-zinc-500">
                into digital experiences.
              </span>
  
            </h1>
  
  
            <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-500">
              We work with businesses and organizations to create
              modern websites, software platforms and digital
              products built around their requirements.
            </p>
  
          </div>
  
        </section>
  
  
        {/* ========================================
            CLIENT PROJECTS
        ======================================== */}
  
        <section className="py-28">
  
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
  
            <div className="grid gap-x-12 gap-y-24 md:grid-cols-2">
  
              {clients.map((client, index) => (
                <article
                  key={client.name}
                  className="group"
                >
  
                  {/* IMAGE */}
  
                  <div className="overflow-hidden">
  
                    <img
                      src={client.image}
                      alt={`${client.name} - ${client.service}`}
                      loading="lazy"
                      className="h-[340px] w-full object-cover transition duration-700 group-hover:scale-[1.03] lg:h-[420px]"
                    />
  
                  </div>
  
  
                  {/* INFO */}
  
                  <div className="mt-7 grid grid-cols-[45px_1fr] gap-4">
  
                    <span className="font-mono text-xs text-blue-400">
                      {String(index + 1).padStart(2, "0")}
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
                        className="mt-6 inline-flex items-center gap-2 text-sm text-zinc-300 transition hover:text-blue-400"
                      >
                        View Project
  
                        <MoveUpRight size={14} />
                      </a>
  
                    </div>
  
                  </div>
  
                </article>
              ))}
  
            </div>
  
          </div>
  
        </section>
  
  
        {/* ========================================
            START PROJECT PROCESS
        ======================================== */}
  
        <section className="border-t border-white/10 bg-[#080808] py-28 lg:py-36">
  
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
  
            <p className="text-xs uppercase tracking-[0.25em] text-blue-400">
              Start Your Project
            </p>
  
  
            <h2 className="mt-6 max-w-3xl text-4xl font-medium tracking-[-0.04em] md:text-5xl">
  
              A simple way to start
  
              <span className="block text-zinc-500">
                working with us.
              </span>
  
            </h2>
  
  
            {/* DESKTOP ARROWS */}
  
            <div className="mt-20 hidden lg:flex">
  
              {clientSteps.map((step, index) => (
                <div
                  key={step.number}
                  className={`relative flex-1 ${
                    index > 0 ? "-ml-5" : ""
                  }`}
                  style={{
                    clipPath:
                      index === 0
                        ? "polygon(0 0, calc(100% - 42px) 0, 100% 50%, calc(100% - 42px) 100%, 0 100%)"
                        : "polygon(0 0, calc(100% - 42px) 0, 100% 50%, calc(100% - 42px) 100%, 0 100%, 42px 50%)",
                  }}
                >
  
                  {/* OUTER COLOR */}
  
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/50 to-purple-500/30" />
  
  
                  {/* INNER BACKGROUND */}
  
                  <div
                    className="absolute inset-[1px] bg-[#080808]"
                    style={{
                      clipPath:
                        index === 0
                          ? "polygon(0 0, calc(100% - 42px) 0, 100% 50%, calc(100% - 42px) 100%, 0 100%)"
                          : "polygon(0 0, calc(100% - 42px) 0, 100% 50%, calc(100% - 42px) 100%, 0 100%, 42px 50%)",
                    }}
                  />
  
  
                  <div className="relative z-10 min-h-[230px] px-14 py-10">
  
                    <p className="text-xs uppercase tracking-[0.18em] text-blue-400">
                      Step {step.number}
                    </p>
  
  
                    <h3 className="mt-5 text-2xl font-medium">
                      {step.title}
                    </h3>
  
  
                    <p className="mt-4 max-w-xs leading-7 text-zinc-500">
                      {step.text}
                    </p>
  
  
                    <span className="mt-8 block text-4xl font-light text-zinc-700">
                      {index + 1}
                    </span>
  
                  </div>
  
                </div>
              ))}
  
            </div>
  
  
            {/* MOBILE PROCESS */}
  
            <div className="mt-16 lg:hidden">
  
              {clientSteps.map((step, index) => (
                <div
                  key={step.number}
                  className="grid grid-cols-[50px_1fr] gap-5 border-t border-white/10 py-8"
                >
  
                  <span className="font-mono text-xs text-blue-400">
                    {String(index + 1).padStart(2, "0")}
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
              ))}
  
              <div className="border-t border-white/10" />
  
            </div>
  
  
            {/* QUOTE BUTTON */}
  
            <Link
              to="/request-quote"
              className="group mt-14 inline-flex items-center gap-3 bg-white px-7 py-4 text-sm font-semibold text-black transition hover:bg-blue-500 hover:text-white"
            >
              Request a Free Quote
  
              <ArrowRight
                size={17}
                className="transition group-hover:translate-x-1"
              />
            </Link>
  
          </div>
  
        </section>
  
      </main>
    );
  }