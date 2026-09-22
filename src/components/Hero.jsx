import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-black pt-20"
    >

      {/* Background */}

      <img
        src="/images/hero-bg.png"
        alt=""
        aria-hidden="true"
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      {/* overlays */}

      <div className="absolute inset-0 bg-black/30" />

      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-transparent" />

      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30" />

      {/* content */}

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-32 lg:px-8">

        <div className="max-w-4xl">

          <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-blue-400/20 bg-black/20 px-4 py-2 backdrop-blur">

            <span className="h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_12px_#60a5fa]" />

            <span className="text-xs uppercase tracking-[0.15em] text-blue-100">
              Software Development · Web · UI/UX
            </span>

          </div>

          <h1 className="text-5xl font-medium leading-[1] tracking-[-0.05em] text-white sm:text-6xl md:text-7xl lg:text-8xl">

            Software Development

            <span className="block text-blue-300">
              & Digital Solutions
            </span>

          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-zinc-300 sm:text-lg">

            Serantra Solution builds modern websites,
            scalable web applications, custom software
            and user-focused digital experiences designed
            to help businesses grow.

          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <a
              href="#contact"
              className="group flex items-center gap-3 bg-white px-7 py-4 text-sm font-semibold text-black transition hover:bg-blue-500 hover:text-white"
            >
              Start a Project

              <ArrowRight
                size={17}
                className="transition group-hover:translate-x-1"
              />
            </a>

            <a
              href="#services"
              className="border border-white/20 bg-white/5 px-7 py-4 text-sm font-medium text-white backdrop-blur transition hover:bg-white/10"
            >
              Explore Services
            </a>

          </div>

        </div>

        <div className="mt-24 flex flex-wrap gap-x-10 gap-y-5 border-t border-white/10 pt-7 text-xs uppercase tracking-[0.15em] text-zinc-400">

          <span>Website Development</span>

          <span>Software Development</span>

          <span>UI/UX Design</span>

          <span>Web Applications</span>

        </div>

      </div>

    </section>
  );
}