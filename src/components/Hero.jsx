import {
  ArrowRight,
  MoveUpRight,
} from "lucide-react";

import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-black pt-20"
      style={{
        backgroundImage: "url('/images/hero-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* ======================================
          DARK OVERLAY
      ====================================== */}

      <div className="absolute inset-0 bg-black/20" />

      {/* LEFT SIDE GRADIENT */}

      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-transparent" />

      {/* BOTTOM GRADIENT */}

      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />


      {/* ======================================
          HERO CONTENT
      ====================================== */}

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-32 lg:px-8">

        <div className="max-w-4xl">

          {/* SMALL LABEL */}

          <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-blue-400/20 bg-black/20 px-4 py-2 backdrop-blur-md">

            <span className="h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_12px_#60a5fa]" />

            <span className="text-xs uppercase tracking-[0.15em] text-blue-100">
              Software Development · Web · UI/UX
            </span>

          </div>


          {/* MAIN HEADING */}

          <h1 className="text-5xl font-medium leading-[0.98] tracking-[-0.05em] text-white sm:text-6xl md:text-7xl lg:text-8xl">

            Software Development

            <span className="block bg-gradient-to-r from-blue-300 via-indigo-300 to-purple-300 bg-clip-text text-transparent">
              & Digital Solutions
            </span>

          </h1>


          {/* DESCRIPTION */}

          <p className="mt-8 max-w-2xl text-base leading-8 text-zinc-200 sm:text-lg">

            Serantra Solution builds modern websites, scalable web
            applications, custom software and user-focused digital
            experiences designed to help businesses grow.

          </p>


          {/* BUTTONS */}

          <div className="mt-10 flex flex-wrap items-center gap-6">

            <Link
              to="/request-quote"
              className="group flex items-center gap-3 bg-white px-7 py-4 text-sm font-semibold text-black transition duration-300 hover:bg-blue-500 hover:text-white"
            >
              Start a Project

              <ArrowRight
                size={17}
                className="transition duration-300 group-hover:translate-x-1"
              />
            </Link>


            <a
              href="#services"
              className="group flex items-center gap-3 border-b border-white/40 py-4 text-sm font-medium text-white transition duration-300 hover:border-blue-400 hover:text-blue-300"
            >
              Explore Services

              <MoveUpRight
                size={16}
                className="transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>

          </div>

        </div>


        {/* ======================================
            HERO BOTTOM SERVICES
        ====================================== */}

        <div className="mt-24 flex flex-wrap gap-x-10 gap-y-5 border-t border-white/15 pt-7 text-xs uppercase tracking-[0.15em] text-zinc-300">

          <span>
            Website Development
          </span>

          <span>
            Software Development
          </span>

          <span>
            UI/UX Design
          </span>

          <span>
            Web Applications
          </span>

        </div>

      </div>

    </section>
  );
}