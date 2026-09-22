import { Check } from "lucide-react";

import AnimatedText from "./AnimatedText";

export default function About() {
  const points = [
    "Modern and maintainable development",
    "Responsive and user-focused design",
    "SEO considered from the beginning",
    "Solutions based on business requirements",
  ];

  return (
    <section
      id="about"
      className="border-t border-white/10 bg-[#080808] py-28 lg:py-36"
    >

      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:px-8">

        <div>

          <p className="text-xs uppercase tracking-[0.25em] text-blue-400">
            About Serantra Solution
          </p>

          <h2 className="mt-6 text-4xl font-medium tracking-[-0.04em] md:text-6xl">

            <AnimatedText
              text="Turning ideas into"
              delay={32}
            />

            <span className="block text-zinc-500">

              <AnimatedText
                text="digital products."
                delay={38}
              />

            </span>

          </h2>

        </div>

        <div>

          <p className="text-lg leading-8 text-zinc-400">

            Serantra Solution creates modern and scalable
            digital solutions for businesses. We combine
            development, technology and user-focused design
            to transform ideas into professional digital
            products.

          </p>

          <p className="mt-6 leading-7 text-zinc-500">

            From professional websites and web applications
            to custom software and UI/UX design, our
            solutions are developed around real business
            requirements.

          </p>

          <div className="mt-10 space-y-5">

            {points.map((point) => (
              <div
                key={point}
                className="flex items-center gap-4"
              >

                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-blue-400/30 bg-blue-500/5">

                  <Check
                    size={14}
                    className="text-blue-400"
                  />

                </span>

                <span className="text-zinc-300">
                  {point}
                </span>

              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}