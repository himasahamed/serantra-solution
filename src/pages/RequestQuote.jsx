import { useState } from "react";
import {
  ArrowRight,
  Check,
  LoaderCircle,
  Mail,
  Phone,
} from "lucide-react";

export default function RequestQuote() {
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();

    setSending(true);
    setStatus("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    formData.append(
      "access_key",
      import.meta.env.VITE_WEB3FORMS_ACCESS_KEY
    );

    formData.append(
      "subject",
      "New Project Quote Request - Serantra Solution"
    );

    formData.append(
      "from_name",
      "Serantra Solution Website"
    );

    try {
      const object = Object.fromEntries(formData);

      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(object),
        }
      );

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        form.reset();
      } else {
        console.error(result);
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    } finally {
      setSending(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#050505] pt-20 text-white">

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">

          <p className="text-xs uppercase tracking-[0.25em] text-blue-400">
            Start a Project
          </p>

          <h1 className="mt-6 max-w-4xl text-5xl font-medium tracking-[-0.05em] sm:text-6xl lg:text-7xl">
            Request a

            <span className="block text-zinc-500">
              free project quote.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-500">
            Tell us about your project requirements. We will review
            your information and contact you to discuss the best
            solution for your business.
          </p>

        </div>
      </section>


      <section className="py-24 lg:py-32">

        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">

          {/* LEFT SIDE */}

          <div>

            <p className="text-xs uppercase tracking-[0.25em] text-blue-400">
              Why Serantra Solution?
            </p>

            <h2 className="mt-6 text-3xl font-medium tracking-[-0.03em] md:text-4xl">
              Let's understand your

              <span className="block text-zinc-500">
                project first.
              </span>
            </h2>


            <div className="mt-10 space-y-5">

              {[
                "Solutions based on your business requirements.",
                "Modern and maintainable development.",
                "Responsive and user-focused design.",
                "Clear planning before development.",
                "Ongoing technical support when required.",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-4"
                >

                  <Check
                    size={17}
                    className="mt-1 shrink-0 text-blue-400"
                  />

                  <p className="leading-7 text-zinc-500">
                    {item}
                  </p>

                </div>
              ))}

            </div>


            <div className="mt-14 border-t border-white/10 pt-8">

              <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">
                Contact us directly
              </p>

              <a
                href="mailto:serantrasolution@gmail.com"
                className="mt-6 flex items-center gap-3 text-sm text-zinc-300 transition hover:text-blue-400"
              >
                <Mail size={17} />

                serantrasolution@gmail.com
              </a>

              <a
                href="tel:0771472539"
                className="mt-4 flex items-center gap-3 text-sm text-zinc-300 transition hover:text-blue-400"
              >
                <Phone size={17} />

                077 147 2539
              </a>

            </div>

          </div>


          {/* FORM */}

          <div>

            <p className="mb-8 text-sm leading-7 text-zinc-500">
              Fill in the form below and your request will be sent
              directly to Serantra Solution.
            </p>


            {status === "success" ? (

              <div className="py-16">

                <Check
                  size={32}
                  className="text-blue-400"
                />

                <h2 className="mt-7 text-3xl font-medium">
                  Request received.
                </h2>

                <p className="mt-4 max-w-lg leading-7 text-zinc-500">
                  Thank you. Your project request was sent
                  successfully and we will contact you soon.
                </p>

                <button
                  type="button"
                  onClick={() => setStatus("")}
                  className="mt-8 text-sm text-blue-400"
                >
                  Send another request
                </button>

              </div>

            ) : (

              <form
                onSubmit={handleSubmit}
                className="space-y-8"
              >

                {/* SPAM PROTECTION */}

                <input
                  type="checkbox"
                  name="botcheck"
                  className="hidden"
                  style={{ display: "none" }}
                  tabIndex="-1"
                  autoComplete="off"
                />


                <div className="grid gap-6 md:grid-cols-2">

                  <div>
                    <label
                      htmlFor="name"
                      className="mb-3 block text-xs uppercase tracking-[0.17em] text-zinc-500"
                    >
                      Full Name *
                    </label>

                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      placeholder="Your full name"
                      className="w-full border-0 border-b border-white/15 bg-transparent px-0 py-4 text-white outline-none placeholder:text-zinc-700 focus:border-blue-400"
                    />
                  </div>


                  <div>
                    <label
                      htmlFor="email"
                      className="mb-3 block text-xs uppercase tracking-[0.17em] text-zinc-500"
                    >
                      Email Address *
                    </label>

                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      placeholder="you@company.com"
                      className="w-full border-0 border-b border-white/15 bg-transparent px-0 py-4 text-white outline-none placeholder:text-zinc-700 focus:border-blue-400"
                    />
                  </div>

                </div>


                <div className="grid gap-6 md:grid-cols-2">

                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-3 block text-xs uppercase tracking-[0.17em] text-zinc-500"
                    >
                      Phone Number
                    </label>

                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      placeholder="+94 77 123 4567"
                      className="w-full border-0 border-b border-white/15 bg-transparent px-0 py-4 text-white outline-none placeholder:text-zinc-700 focus:border-blue-400"
                    />
                  </div>


                  <div>
                    <label
                      htmlFor="country"
                      className="mb-3 block text-xs uppercase tracking-[0.17em] text-zinc-500"
                    >
                      Country
                    </label>

                    <input
                      id="country"
                      type="text"
                      name="country"
                      placeholder="Your country"
                      className="w-full border-0 border-b border-white/15 bg-transparent px-0 py-4 text-white outline-none placeholder:text-zinc-700 focus:border-blue-400"
                    />
                  </div>

                </div>


                <div className="grid gap-6 md:grid-cols-2">

                  <div>
                    <label
                      htmlFor="company"
                      className="mb-3 block text-xs uppercase tracking-[0.17em] text-zinc-500"
                    >
                      Company
                    </label>

                    <input
                      id="company"
                      type="text"
                      name="company"
                      placeholder="Company name"
                      className="w-full border-0 border-b border-white/15 bg-transparent px-0 py-4 text-white outline-none placeholder:text-zinc-700 focus:border-blue-400"
                    />
                  </div>


                  <div>
                    <label
                      htmlFor="service"
                      className="mb-3 block text-xs uppercase tracking-[0.17em] text-zinc-500"
                    >
                      Service *
                    </label>

                    <select
                      id="service"
                      name="service"
                      required
                      defaultValue=""
                      className="w-full border-0 border-b border-white/15 bg-[#050505] px-0 py-4 text-zinc-400 outline-none focus:border-blue-400"
                    >
                      <option value="" disabled>
                        Select a service
                      </option>

                      <option value="Website Development">
                        Website Development
                      </option>

                      <option value="Web Application Development">
                        Web Application Development
                      </option>

                      <option value="Custom Software Development">
                        Custom Software Development
                      </option>

                      <option value="UI/UX Design">
                        UI/UX Design
                      </option>

                      <option value="SaaS Development">
                        SaaS Development
                      </option>

                      <option value="Maintenance & Support">
                        Maintenance & Support
                      </option>

                      <option value="Other">
                        Other
                      </option>
                    </select>
                  </div>

                </div>


                <div>
                  <label
                    htmlFor="message"
                    className="mb-3 block text-xs uppercase tracking-[0.17em] text-zinc-500"
                  >
                    Project Details *
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    required
                    placeholder="Describe your project, goals and requirements..."
                    className="w-full resize-none border-0 border-b border-white/15 bg-transparent px-0 py-4 leading-7 text-white outline-none placeholder:text-zinc-700 focus:border-blue-400"
                  />
                </div>


                {status === "error" && (
                  <p className="text-sm text-red-400">
                    Something went wrong. Please try again or
                    contact serantrasolution@gmail.com.
                  </p>
                )}


                <button
                  type="submit"
                  disabled={sending}
                  className="group flex items-center gap-3 bg-white px-8 py-4 text-sm font-semibold text-black transition hover:bg-blue-500 hover:text-white disabled:opacity-50"
                >

                  {sending ? (
                    <>
                      <LoaderCircle
                        size={17}
                        className="animate-spin"
                      />

                      Sending...
                    </>
                  ) : (
                    <>
                      Request My Free Quote

                      <ArrowRight
                        size={17}
                        className="transition group-hover:translate-x-1"
                      />
                    </>
                  )}

                </button>

              </form>

            )}

          </div>

        </div>

      </section>

    </main>
  );
}