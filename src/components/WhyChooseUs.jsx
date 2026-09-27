import { ArrowUpRight, Blocks, Gauge, Layers3, LifeBuoy } from "lucide-react";
import { Link } from "react-router-dom";
import "./WhyChooseUs.css";

const reasons = [
  {
    icon: Blocks,
    title: "Product-focused development",
    text: "We do more than write code. Every solution is planned around your users, business goals and the real problem the product needs to solve.",
  },
  {
    icon: Gauge,
    title: "Designed to scale",
    text: "We build websites, applications and software with performance, maintainability and future growth in mind from the beginning.",
  },
  {
    icon: Layers3,
    title: "Flexible collaboration",
    text: "Every business works differently. Our process, technology and implementation are shaped around your requirements rather than a fixed template.",
  },
  {
    icon: LifeBuoy,
    title: "Support beyond launch",
    text: "Delivery is not the end of the relationship. We can continue supporting, maintaining and improving your digital product as your business evolves.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-serantra" className="why-serantra-section">
      <div className="why-serantra-background" aria-hidden="true">
        <div className="why-serantra-grid" />
        <div className="why-serantra-glow why-serantra-glow-one" />
        <div className="why-serantra-glow why-serantra-glow-two" />
      </div>

      <div className="why-serantra-container">
        <div className="why-serantra-layout">
          <div className="why-serantra-sticky">
            <div className="why-serantra-label motion-reveal"><span />Why Serantra</div>

            <h2 className="why-serantra-title motion-reveal">
              Digital solutions built
              <span>around your business,</span>
              not templates.
            </h2>

            <p className="why-serantra-description motion-reveal">
              We combine strategy, thoughtful design and modern development to create digital products
              that are useful today and ready for what comes next.
            </p>

            <Link to="/request-quote" className="why-serantra-link motion-reveal">
              Talk about your project
              <ArrowUpRight size={17} strokeWidth={1.8} />
            </Link>

            <div className="why-serantra-stats motion-reveal">
              <div><strong>Modern</strong><span>Technologies</span></div>
              <span className="why-stat-line" />
              <div><strong>Flexible</strong><span>Solutions</span></div>
              <span className="why-stat-line" />
              <div><strong>Ongoing</strong><span>Support</span></div>
            </div>
          </div>

          <div className="why-serantra-reasons motion-stagger">
            {reasons.map((reason) => {
              const Icon = reason.icon;
              return (
                <article key={reason.title} className="why-serantra-reason">
                  <div className="why-reason-light" aria-hidden="true" />
                  <div className="why-reason-top">
                    <Icon size={25} strokeWidth={1.5} className="why-reason-icon" />
                  </div>
                  <h3>{reason.title}</h3>
                  <p>{reason.text}</p>
                  <div className="why-reason-line"><span /></div>
                </article>
              );
            })}
          </div>
        </div>
      </div>

      <div className="section-motion-line" aria-hidden="true" />
    </section>
  );
}

