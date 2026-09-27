import { ArrowUpRight, Braces, Code2, Layers3, LifeBuoy, MonitorSmartphone, PanelsTopLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { services } from "../data/services";
import "./Services.css";

const iconMap = {
  "website-development": MonitorSmartphone,
  "web-application-development": PanelsTopLeft,
  "software-development": Code2,
  "ui-ux-design": Layers3,
  "saas-development": Braces,
  "maintenance-support": LifeBuoy,
};

export default function Services() {
  return (
    <section id="services" className="services-section">
      <div className="services-shell">
        <div className="services-layout">
          <div className="services-sticky">
            <div className="services-kicker motion-reveal"><span />What We Do</div>
            <h2 className="services-title motion-reveal">
              We don&apos;t sell a set of services.
              <span> We choose the right solution for your goals.</span>
            </h2>
            <p className="services-intro motion-reveal">
              Strategy, design and engineering are combined around the actual problem you need to solve.
            </p>
            <Link to="/request-quote" className="services-cta motion-reveal">
              Start a conversation
              <ArrowUpRight size={17} />
            </Link>
          </div>

          <div className="services-list motion-stagger">
            {services.map((service) => {
              const Icon = iconMap[service.slug] || Code2;

              return (
                <article key={service.slug} className="service-scroll-card">
                  <div className="service-icon"><Icon size={23} strokeWidth={1.6} /></div>
                  <div className="service-content">
                    <h3>{service.title}</h3>
                    <p>{service.short}</p>
                    <Link to={`/services/${service.slug}`}>
                      Learn More
                      <ArrowUpRight size={16} />
                    </Link>
                  </div>
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


