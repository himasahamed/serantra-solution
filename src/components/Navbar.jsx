import { useState } from "react";

import {
  ArrowRight,
  Menu,
  X,
} from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    ["Home", "#home"],
    ["About", "#about"],
    ["Services", "#services"],
    ["Process", "#process"],
    ["Projects", "#projects"],
    ["Contact", "#contact"],
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/75 backdrop-blur-xl">

      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

        <a
          href="#home"
          aria-label="Serantra Solution home"
        >
          <span className="block text-lg font-bold tracking-[0.18em]">
            SERANTRA
          </span>

          <span className="block text-[9px] tracking-[0.45em] text-blue-400">
            SOLUTION
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map(([name, link]) => (
            <a
              key={name}
              href={link}
              className="text-sm text-zinc-400 transition hover:text-white"
            >
              {name}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-blue-500 hover:text-white lg:flex"
        >
          Start a Project

          <ArrowRight size={16} />
        </a>

        <button
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() =>
            setMenuOpen(!menuOpen)
          }
          className="text-white lg:hidden"
        >
          {menuOpen
            ? <X size={26} />
            : <Menu size={26} />
          }
        </button>

      </div>

      {menuOpen && (
        <nav className="border-t border-white/10 bg-black px-6 py-7 lg:hidden">

          <div className="flex flex-col gap-5">

            {navItems.map(([name, link]) => (
              <a
                key={name}
                href={link}
                onClick={() =>
                  setMenuOpen(false)
                }
                className="text-zinc-300"
              >
                {name}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() =>
                setMenuOpen(false)
              }
              className="mt-2 flex w-fit items-center gap-2 bg-white px-5 py-3 text-sm font-semibold text-black"
            >
              Start a Project

              <ArrowRight size={16} />
            </a>

          </div>

        </nav>
      )}

    </header>
  );
}