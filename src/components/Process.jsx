import AnimatedText from "./AnimatedText";

const process = [
  {
    number: "01",

    title: "Discovery & Strategy",

    description:
      "We understand your business, objectives, target users and project requirements.",
  },

  {
    number: "02",

    title: "Planning",

    description:
      "We define the project structure, functionality and technical development approach.",
  },

  {
    number: "03",

    title: "UI/UX Design",

    description:
      "We create wireframes and interfaces focused on usability and business goals.",
  },

  {
    number: "04",

    title: "Development",

    description:
      "We transform approved designs into responsive and scalable digital products.",
  },

  {
    number: "05",

    title: "Testing & Quality",

    description:
      "We test functionality, responsiveness, usability and performance.",
  },

  {
    number: "06",

    title: "Launch & Support",

    description:
      "We deploy your product and continue supporting future improvements.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="bg-[#050505] py-28 lg:py-36"
    >

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <p className="text-xs uppercase tracking-[0.25em] text-blue-400">
          Our Development Process
        </p>

        <h2 className="mt-6 max-w-3xl text-4xl font-medium tracking-[-0.04em] md:text-6xl">

          <AnimatedText
            text="From your initial idea"
            delay={30}
          />

          <span className="block text-zinc-500">

            <AnimatedText
              text="to final launch."
              delay={38}
            />

          </span>

        </h2>

        <div className="mt-16 grid gap-px border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3">

          {process.map((step) => (
            <article
              key={step.number}
              className="min-h-[290px] bg-[#070707] p-8 transition duration-500 hover:bg-[#0c0c0c] lg:p-10"
            >

              <span className="font-mono text-sm text-blue-400">
                {step.number}
              </span>

              <h3 className="mt-14 text-2xl font-medium">
                {step.title}
              </h3>

              <p className="mt-5 leading-7 text-zinc-500">
                {step.description}
              </p>

            </article>
          ))}

        </div>

      </div>

    </section>
  );
}