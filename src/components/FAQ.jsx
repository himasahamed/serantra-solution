import { useState } from "react";

import { ChevronDown } from "lucide-react";

import AnimatedText from "./AnimatedText";

const faqs = [
  {
    question:
      "What services does Serantra Solution provide?",

    answer:
      "Serantra Solution provides website development, web application development, custom software development, UI/UX design, software testing, maintenance and technical support.",
  },

  {
    question:
      "Do you develop responsive websites?",

    answer:
      "Yes. Our websites and web applications are designed to work effectively across desktop computers, tablets and mobile devices.",
  },

  {
    question:
      "Do you provide UI/UX design?",

    answer:
      "Yes. We create wireframes, user interfaces and complete UI/UX experiences before and during development.",
  },

  {
    question:
      "Do you provide support after launch?",

    answer:
      "Yes. We can provide maintenance, technical support, updates and improvements after your project has been launched.",
  },
];

export default function FAQ() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-[#050505] py-28 lg:py-36">

      <div className="mx-auto max-w-4xl px-6">

        <div className="text-center">

          <p className="text-xs uppercase tracking-[0.25em] text-blue-400">
            FAQ
          </p>

          <h2 className="mt-6 text-4xl font-medium tracking-[-0.04em] md:text-5xl">

            <AnimatedText
              text="Frequently asked questions."
              delay={25}
            />

          </h2>

        </div>

        <div className="mt-14 border-t border-white/10">

          {faqs.map((faq, index) => (
            <article
              key={faq.question}
              className="border-b border-white/10"
            >

              <button
                type="button"
                onClick={() =>
                  setActive(
                    active === index
                      ? -1
                      : index
                  )
                }
                className="flex w-full items-center justify-between gap-6 py-7 text-left"
              >

                <span className="text-lg font-medium">
                  {faq.question}
                </span>

                <ChevronDown
                  size={20}
                  className={`shrink-0 transition duration-300 ${
                    active === index
                      ? "rotate-180 text-blue-400"
                      : "text-zinc-500"
                  }`}
                />

              </button>

              {active === index && (
                <p className="max-w-3xl pb-7 leading-7 text-zinc-500">
                  {faq.answer}
                </p>
              )}

            </article>
          ))}

        </div>

      </div>

    </section>
  );
}