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
    <main className="min-h-screen bg-[#0b1220] pt-[72px] text-white">

      {/* TOP */}

      <section className="relative overflow-hidden border-b border-white/10">

        <div className="pointer-events-none absolute -right-40 top-0 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[140px]" />

        <div className="relative mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-20">

          <p className="text-xs uppercase tracking-[0.25em] text-blue-400">
            Start a Project
          </p>

          <h1 className="mt-6 max-w-4xl text-5xl font-medium tracking-[-0.05em] sm:text-6xl lg:text-7xl">
            Request a

            <span className="block text-slate-400">
              free project quote.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400">
            Tell us about your project requirements. We will review
            your information and contact you to discuss the best
            solution for your business.
          </p>

        </div>

      </section>


      {/* FORM */}

      <section className="py-20 lg:py-28">

        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">

          <div>

            <p className="text-xs uppercase tracking-[0.25em] text-blue-400">
              Why Serantra Solution?
            </p>

            <h2 className="mt-6 text-3xl font-medium md:text-4xl">
              Let's understand your

              <span className="block text-slate-400">
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

                  <p className="leading-7 text-slate-400">
                    {item}
                  </p>
                </div>
              ))}

            </div>

            <div className="mt-14 border-t border-white/10 pt-8">

              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                Contact us directly
              </p>

              <a
                href="mailto:serantrasolution@gmail.com"
                className="mt-6 flex items-center gap-3 text-sm text-slate-300 hover:text-blue-400"
              >
                <Mail size={17} />
                serantrasolution@gmail.com
              </a>

              <a
                href="tel:0771472539"
                className="mt-4 flex items-center gap-3 text-sm text-slate-300 hover:text-blue-400"
              >
                <Phone size={17} />
                077 147 2539
              </a>

            </div>

          </div>


          <div>

            {status === "success" ? (

              <div className="py-12">

                <Check
                  size={32}
                  className="text-blue-400"
                />

                <h2 className="mt-7 text-3xl font-medium">
                  Request received.
                </h2>

                <p className="mt-4 max-w-lg leading-7 text-slate-400">
                  Your request was sent successfully. We will contact
                  you soon.
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

                <input
                  type="checkbox"
                  name="botcheck"
                  className="hidden"
                  tabIndex="-1"
                  autoComplete="off"
                />


                <div className="grid gap-6 md:grid-cols-2">

                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Full name"
                    className="w-full border-0 border-b border-white/15 bg-transparent py-4 outline-none placeholder:text-slate-600 focus:border-blue-400"
                  />

                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Email address"
                    className="w-full border-0 border-b border-white/15 bg-transparent py-4 outline-none placeholder:text-slate-600 focus:border-blue-400"
                  />

                </div>


                <div className="grid gap-6 md:grid-cols-2">

                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone number"
                    className="w-full border-0 border-b border-white/15 bg-transparent py-4 outline-none placeholder:text-slate-600 focus:border-blue-400"
                  />

                  <input
                    type="text"
                    name="country"
                    placeholder="Country"
                    className="w-full border-0 border-b border-white/15 bg-transparent py-4 outline-none placeholder:text-slate-600 focus:border-blue-400"
                  />

                </div>


                <div className="grid gap-6 md:grid-cols-2">

                  <input
                    type="text"
                    name="company"
                    placeholder="Company"
                    className="w-full border-0 border-b border-white/15 bg-transparent py-4 outline-none placeholder:text-slate-600 focus:border-blue-400"
                  />

                  <select
                    name="service"
                    required
                    defaultValue=""
                    className="w-full border-0 border-b border-white/15 bg-[#0b1220] py-4 text-slate-400 outline-none focus:border-blue-400"
                  >
                    <option value="" disabled>
                      Select a service
                    </option>

                    <option>Website Development</option>
                    <option>Web Application Development</option>
                    <option>Custom Software Development</option>
                    <option>UI/UX Design</option>
                    <option>SaaS Development</option>
                    <option>Maintenance & Support</option>
                    <option>Other</option>
                  </select>

                </div>


                <textarea
                  name="message"
                  rows="6"
                  required
                  placeholder="Tell us about your project..."
                  className="w-full resize-none border-0 border-b border-white/15 bg-transparent py-4 leading-7 outline-none placeholder:text-slate-600 focus:border-blue-400"
                />


                {status === "error" && (
                  <p className="text-sm text-red-400">
                    Something went wrong. Please try again.
                  </p>
                )}


                <button
                  type="submit"
                  disabled={sending}
                  className="group flex items-center gap-3 bg-white px-8 py-4 text-sm font-semibold text-[#0b1220] transition hover:bg-blue-500 hover:text-white disabled:opacity-50"
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