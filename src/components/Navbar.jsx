import { useState } from "react";
import {
  ArrowRight,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";

import { Link, NavLink } from "react-router-dom";

import { services } from "../data/services";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

        <Link to="/" className="shrink-0">
          <span className="block text-lg font-bold tracking-[0.18em]">
            SERANTRA
          </span>

          <span className="block text-[9px] tracking-[0.45em] text-blue-400">
            SOLUTION
          </span>
        </Link>

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
              className="flex items-center gap-1 text-sm text-zinc-400 transition hover:text-white"
            >
              Services
              <ChevronDown
                size={15}
                className={`transition ${
                  servicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {servicesOpen && (
              <div className="absolute left-1/2 top-full w-[460px] -translate-x-1/2 pt-5">
                <div className="border border-white/10 bg-[#0a0a0a] p-3 shadow-2xl">

                  <p className="px-4 py-3 text-[10px] uppercase tracking-[0.22em] text-blue-400">
                    Services & Solutions
                  </p>

                  {services.map((service) => (
                    <Link
                      key={service.slug}
                      to={`/services/${service.slug}`}
                      onClick={() => setServicesOpen(false)}
                      className="group flex items-center justify-between border-t border-white/5 px-4 py-4 transition hover:bg-white/5"
                    >
                      <span className="text-sm text-zinc-300 transition group-hover:text-white">
                        {service.title}
                      </span>

                      <ArrowRight
                        size={14}
                        className="text-zinc-600 transition group-hover:translate-x-1 group-hover:text-blue-400"
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

        <a
          href="/#contact"
          className="hidden items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-blue-500 hover:text-white lg:flex"
        >
          Start a Project
          <ArrowRight size={16} />
        </a>

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white lg:hidden"
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

      </div>

      {/* MOBILE */}
      {menuOpen && (
        <div className="border-t border-white/10 bg-black px-6 py-6 lg:hidden">

          <div className="flex flex-col gap-5">

            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>

            <a
              href="/#about"
              onClick={() => setMenuOpen(false)}
            >
              About
            </a>

            <button
              type="button"
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex items-center justify-between"
            >
              Services
              <ChevronDown size={16} />
            </button>

            {servicesOpen && (
              <div className="ml-4 flex flex-col gap-4 border-l border-white/10 pl-4">
                {services.map((service) => (
                  <Link
                    key={service.slug}
                    to={`/services/${service.slug}`}
                    onClick={() => {
                      setMenuOpen(false);
                      setServicesOpen(false);
                    }}
                    className="text-sm text-zinc-500"
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            )}

            <Link
              to="/clients"
              onClick={() => setMenuOpen(false)}
            >
              Clients
            </Link>

            <a
              href="/#projects"
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </a>

            <a
              href="/#contact"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </a>

          </div>
        </div>
      )}

    </header>
  );
}