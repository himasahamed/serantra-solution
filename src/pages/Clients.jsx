import { ArrowUpRight, CheckCircle2, Search, Send } from "lucide-react";
import { Link } from "react-router-dom";
import "./Clients.css";

const steps = [
  {
    icon: Send,
    title: "Make a Request",
    text: "Tell us what you want to build, improve or automate.",
  },
  {
    icon: Search,
    title: "We Analyze",
    text: "We review the requirement, scope, priorities and technical direction.",
  },
  {
    icon: CheckCircle2,
    title: "We Provide a Proposal",
    text: "You receive a clear proposal with the suggested solution and next steps.",
  },
];

export default function Clients() {
  return (
    <div className="clients-page">
      <section className="clients-hero">
        <div className="clients-shell">
          <div className="clients-kicker motion-reveal"><span />Clients</div>
          <h1 className="motion-reveal">
            Digital partnerships built around
            <span> real business requirements.</span>
          </h1>
          <p className="motion-reveal">
            We work with businesses that need thoughtful design, dependable development and a clear path from idea to launch.
          </p>
        </div>
      </section>

      <section className="clients-work">
        <div className="clients-shell">
          <div className="clients-work-grid motion-stagger">
            {[1, 2, 3, 4].map((item) => (
              <article key={item} className="client-work-item">
                <img src={`/images/projects/project-${item}.jpg`} alt="" loading="lazy" />
                <div className="client-work-overlay" />
                <div className="client-work-copy">
                  <span>Selected Collaboration</span>
                  <h2>Digital Solution {String(item).padStart(2, "0")}</h2>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="client-request-process">
        <div className="clients-shell">
          <div className="client-process-heading">
            <div className="clients-kicker motion-reveal"><span />Start with your requirement</div>
            <h2 className="motion-reveal">A simple path from your idea to a clear proposal.</h2>
          </div>

          <div className="client-process-list motion-stagger">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <article key={step.title}>
                  <Icon size={24} strokeWidth={1.6} />
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              );
            })}
          </div>

          <Link to="/request-quote" className="clients-quote-button motion-reveal">
            Request a Free Quote
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}

