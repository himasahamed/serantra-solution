import { useState } from "react";

import {
  ArrowRight,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";

import {
  Link,
  NavLink,
} from "react-router-dom";

import { services } from "../data/services";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">

      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

        {/* LOGO */}

        <Link
          to="/"
          className="shrink-0"
          onClick={() => setMenuOpen(false)}
        >
          <span className="block text-lg font-bold tracking-[0.18em] text-white">
            SERANTRA
          </span>

          <span className="block text-[9px] tracking-[0.45em] text-blue-400">
            SOLUTION
          </span>
        </Link>


        {/* DESKTOP NAVIGATION */}

        <nav className="hidden items-center gap-8 lg:flex">

          <NavLink
            to="/"
            className="text-sm text-zinc-400 transition hover:text-white"
          >
            Home
          </NavLink>

          <a
            href="/#about"
            className="text-sm text-zinc-400 transition hover:text-white"
          >
            About
          </a>


          {/* SERVICES DROPDOWN */}

          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >

            <button
              type="button"
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex items-center gap-1.5 text-sm text-zinc-400 transition hover:text-white"
            >
              Services

              <ChevronDown
                size={15}
                className={`transition duration-300 ${
                  servicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>


            {servicesOpen && (
              <div className="absolute left-1/2 top-full w-[460px] -translate-x-1/2 pt-5">

                <div className="bg-[#080808] px-6 py-5 shadow-2xl">

                  <p className="pb-4 text-[10px] uppercase tracking-[0.24em] text-blue-400">
                    Services & Solutions
                  </p>

                  {services.map((service) => (
                    <Link
                      key={service.slug}
                      to={`/services/${service.slug}`}
                      onClick={() => setServicesOpen(false)}
                      className="group flex items-center justify-between border-t border-white/10 py-4"
                    >
                      <span className="text-sm text-zinc-400 transition group-hover:translate-x-1 group-hover:text-white">
                        {service.title}
                      </span>

                      <ArrowRight
                        size={14}
                        className="text-zinc-700 transition group-hover:translate-x-1 group-hover:text-blue-400"
                      />
                    </Link>
                  ))}

                </div>

              </div>
            )}

          </div>


          <NavLink
            to="/clients"
            className="text-sm text-zinc-400 transition hover:text-white"
          >
            Clients
          </NavLink>


          <a
            href="/#projects"
            className="text-sm text-zinc-400 transition hover:text-white"
          >
            Projects
          </a>


          <a
            href="/#contact"
            className="text-sm text-zinc-400 transition hover:text-white"
          >
            Contact
          </a>

        </nav>


        {/* START PROJECT */}

        <Link
          to="/request-quote"
          className="hidden items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-blue-500 hover:text-white lg:flex"
        >
          Start a Project

          <ArrowRight size={16} />
        </Link>


        {/* MOBILE BUTTON */}

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          className="text-white lg:hidden"
        >
          {menuOpen ? (
            <X size={26} />
          ) : (
            <Menu size={26} />
          )}
        </button>

      </div>


      {/* MOBILE NAVIGATION */}

      {menuOpen && (
        <div className="border-t border-white/10 bg-black px-6 py-7 lg:hidden">

          <nav className="flex flex-col gap-6">

            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="text-zinc-300"
            >
              Home
            </Link>

            <a
              href="/#about"
              onClick={() => setMenuOpen(false)}
              className="text-zinc-300"
            >
              About
            </a>


            <button
              type="button"
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex items-center justify-between text-left text-zinc-300"
            >
              Services

              <ChevronDown
                size={16}
                className={`transition ${
                  servicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>


            {servicesOpen && (
              <div className="ml-3 flex flex-col border-l border-white/10 pl-5">

                {services.map((service) => (
                  <Link
                    key={service.slug}
                    to={`/services/${service.slug}`}
                    onClick={() => {
                      setMenuOpen(false);
                      setServicesOpen(false);
                    }}
                    className="border-b border-white/5 py-3 text-sm text-zinc-500"
                  >
                    {service.title}
                  </Link>
                ))}

              </div>
            )}


            <Link
              to="/clients"
              onClick={() => setMenuOpen(false)}
              className="text-zinc-300"
            >
              Clients
            </Link>


            <a
              href="/#projects"
              onClick={() => setMenuOpen(false)}
              className="text-zinc-300"
            >
              Projects
            </a>


            <a
              href="/#contact"
              onClick={() => setMenuOpen(false)}
              className="text-zinc-300"
            >
              Contact
            </a>


            <Link
              to="/request-quote"
              onClick={() => setMenuOpen(false)}
              className="mt-3 flex w-fit items-center gap-2 bg-white px-5 py-3 text-sm font-semibold text-black"
            >
              Start a Project

              <ArrowRight size={16} />
            </Link>

          </nav>

        </div>
      )}

    </header>
  );
}