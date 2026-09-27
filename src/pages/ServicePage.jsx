import { ArrowLeft, ArrowUpRight, Check, ChevronRight } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { services } from "../data/services";
import "./ServicePage.css";

export default function ServicePage() {
  const { slug } = useParams();
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return (
      <section className="service-not-found">
        <h1>Service not found</h1>
        <Link to="/">Return Home</Link>
      </section>
    );
  }

  return (
    <div className="service-page">
      <section className="service-page-hero">
        <div className="service-page-shell">
          <Link to="/#services" className="service-back-link motion-reveal">
            <ArrowLeft size={16} />
            All Services
          </Link>

          <div className="service-page-kicker motion-reveal">Serantra Solution / Service</div>
          <h1 className="motion-reveal">{service.title}</h1>
          <p className="motion-reveal">{service.description}</p>

          <Link to="/request-quote" className="service-page-cta motion-reveal">
            Discuss This Service
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>

      <section className="service-page-content">
        <div className="service-page-shell service-page-columns">
          <div className="service-page-side motion-reveal">
            <span>What you can expect</span>
            <h2>Built around outcomes, not a fixed template.</h2>
          </div>

          <div className="service-benefits motion-stagger">
            {service.benefits.map((benefit) => (
              <div key={benefit} className="service-benefit-row">
                <Check size={18} />
                <p>{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="service-capabilities">
        <div className="service-page-shell">
          <div className="service-section-heading motion-reveal">
            <span>Capabilities</span>
            <h2>What this service can include.</h2>
          </div>

          <div className="service-capability-list motion-stagger">
            {service.features.map((feature) => (
              <div key={feature}>
                <span>{feature}</span>
                <ChevronRight size={17} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="service-approach">
        <div className="service-page-shell service-page-columns">
          <div className="service-page-side motion-reveal">
            <span>Our approach</span>
            <h2>A clear path from requirement to launch.</h2>
          </div>

          <div className="service-approach-list motion-stagger">
            {service.approach.map((step, index) => (
              <div key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="service-final-cta">
        <div className="service-page-shell">
          <h2 className="motion-reveal">Ready to talk about your {service.title.toLowerCase()} project?</h2>
          <Link to="/request-quote" className="service-page-cta motion-reveal">
            Start a Project
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}

