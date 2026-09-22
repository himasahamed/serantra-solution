import { ArrowRight } from "lucide-react";

import AnimatedText from "./AnimatedText";

export default function Contact() {
  function handleSubmit(event) {
    event.preventDefault();

    const data =
      new FormData(event.currentTarget);

    const name =
      data.get("name");

    const email =
      data.get("email");

    const company =
      data.get("company");

    const message =
      data.get("message");

    const subject =
      encodeURIComponent(
        `Project enquiry from ${name}`
      );

    const body =
      encodeURIComponent(
`Hello Serantra Solution,

Name: ${name}
Email: ${email}
Company: ${company || "Not provided"}

Project Details:

${message}`
      );

    window.location.href =
      `mailto:serantrasolution@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <section
      id="contact"
      className="bg-[#080808] py-28 lg:py-36"
    >

      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:px-8">

        <div>

          <p className="text-xs uppercase tracking-[0.25em] text-blue-400">
            Contact
          </p>

          <h2 className="mt-6 text-4xl font-medium tracking-[-0.04em] md:text-5xl">

            <AnimatedText
              text="Let's discuss your"
              delay={35}
            />

            <span className="block text-zinc-500">

              <AnimatedText
                text="next project."
                delay={45}
              />

            </span>

          </h2>

          <p className="mt-7 max-w-md leading-7 text-zinc-500">

            Tell us about your website, software or UI/UX
            project and let's explore how Serantra Solution
            can help.

          </p>

          <div className="mt-12 space-y-8">

            <div>

              <p className="text-xs uppercase tracking-[0.18em] text-zinc-600">
                Email
              </p>

              <a
                href="mailto:serantrasolution@gmail.com"
                className="mt-3 block text-lg text-zinc-300 transition hover:text-blue-400"
              >
                serantrasolution@gmail.com
              </a>

            </div>

            <div>

              <p className="text-xs uppercase tracking-[0.18em] text-zinc-600">
                Phone
              </p>

              <a
                href="tel:0771472539"
                className="mt-3 block text-lg text-zinc-300 transition hover:text-blue-400"
              >
                077 147 2539
              </a>

            </div>

          </div>

        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          <div>

            <label
              htmlFor="name"
              className="mb-2 block text-xs uppercase tracking-wider text-zinc-500"
            >
              Name
            </label>

            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Your name"
              className="w-full border border-white/10 bg-white/[0.03] px-5 py-4 text-white outline-none transition placeholder:text-zinc-700 focus:border-blue-400/50"
            />

          </div>

          <div>

            <label
              htmlFor="email"
              className="mb-2 block text-xs uppercase tracking-wider text-zinc-500"
            >
              Email
            </label>

            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="your@email.com"
              className="w-full border border-white/10 bg-white/[0.03] px-5 py-4 text-white outline-none transition placeholder:text-zinc-700 focus:border-blue-400/50"
            />

          </div>

          <div>

            <label
              htmlFor="company"
              className="mb-2 block text-xs uppercase tracking-wider text-zinc-500"
            >
              Company
            </label>

            <input
              id="company"
              name="company"
              type="text"
              placeholder="Company name"
              className="w-full border border-white/10 bg-white/[0.03] px-5 py-4 text-white outline-none transition placeholder:text-zinc-700 focus:border-blue-400/50"
            />

          </div>

          <div>

            <label
              htmlFor="message"
              className="mb-2 block text-xs uppercase tracking-wider text-zinc-500"
            >
              Project Details
            </label>

            <textarea
              id="message"
              name="message"
              rows="6"
              required
              placeholder="Tell us about your project..."
              className="w-full resize-none border border-white/10 bg-white/[0.03] px-5 py-4 text-white outline-none transition placeholder:text-zinc-700 focus:border-blue-400/50"
            />

          </div>

          <button
            type="submit"
            className="group flex items-center gap-3 bg-white px-8 py-4 text-sm font-semibold text-black transition hover:bg-blue-500 hover:text-white"
          >
            Send Message

            <ArrowRight
              size={17}
              className="transition group-hover:translate-x-1"
            />
          </button>

        </form>

      </div>

    </section>
  );
}