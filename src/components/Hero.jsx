import { useEffect, useRef } from "react";
import { ArrowRight, ArrowUpRight, Code2, Database, Layers3, MousePointer2 } from "lucide-react";
import { Link } from "react-router-dom";
import "./Hero.css";

export default function Hero() {
  const visualRef = useRef(null);

  useEffect(() => {
    const visual = visualRef.current;
    if (!visual) return undefined;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return undefined;

    const handleMouseMove = (event) => {
      const rect = visual.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const rotateY = (x / rect.width - 0.5) * 14;
      const rotateX = (y / rect.height - 0.5) * -12;

      visual.style.setProperty("--hero-rotate-x", `${rotateX}deg`);
      visual.style.setProperty("--hero-rotate-y", `${rotateY}deg`);
      visual.style.setProperty("--hero-mouse-x", `${x}px`);
      visual.style.setProperty("--hero-mouse-y", `${y}px`);
    };

    const resetVisual = () => {
      visual.style.setProperty("--hero-rotate-x", "0deg");
      visual.style.setProperty("--hero-rotate-y", "0deg");
    };

    visual.addEventListener("mousemove", handleMouseMove);
    visual.addEventListener("mouseleave", resetVisual);

    return () => {
      visual.removeEventListener("mousemove", handleMouseMove);
      visual.removeEventListener("mouseleave", resetVisual);
    };
  }, []);

  return (
    <section id="home" className="serantra-hero">
      <div className="serantra-hero-background" aria-hidden="true">
        <div className="hero-grid-background" />
        <div className="hero-light hero-light-one" />
        <div className="hero-light hero-light-two" />
        <div className="hero-light hero-light-three" />
        <span className="hero-particle hero-particle-1" />
        <span className="hero-particle hero-particle-2" />
        <span className="hero-particle hero-particle-3" />
        <span className="hero-particle hero-particle-4" />
        <span className="hero-particle hero-particle-5" />
      </div>

      <div className="serantra-hero-container">
        <div className="serantra-hero-content">
          <div className="hero-eyebrow motion-reveal">
            <span className="hero-eyebrow-dot" />
            Digital solutions engineered for growth
          </div>

          <h1 className="serantra-hero-title motion-reveal">
            We build digital
            <span className="hero-gradient-word">experiences</span>
            that move businesses forward.
          </h1>

          <p className="serantra-hero-description motion-reveal">
            From modern websites and powerful web applications to custom software and SaaS platforms,
            Serantra Solution transforms ideas into scalable digital products.
          </p>

          <div className="serantra-hero-actions motion-reveal">
            <Link to="/request-quote" className="hero-primary-button">
              <span>Start a Project</span>
              <ArrowUpRight size={18} strokeWidth={2} />
              <span className="hero-button-light" />
            </Link>

            <a href="#services" className="hero-secondary-button">
              Explore Our Services
              <ArrowRight size={18} strokeWidth={1.8} />
            </a>
          </div>

          <div className="hero-mini-info motion-reveal">
            <div><span className="hero-info-dot" /><p>Websites</p></div>
            <div><span className="hero-info-dot" /><p>Web Apps</p></div>
            <div><span className="hero-info-dot" /><p>Custom Software</p></div>
          </div>
        </div>

        <div className="hero-visual-stage" ref={visualRef} data-parallax="slow">
          <div className="hero-mouse-light" />

          <div className="hero-visual-3d">
            <div className="hero-orbit hero-orbit-one" />
            <div className="hero-orbit hero-orbit-two" />

            <div className="hero-core">
              <div className="hero-core-glow" />
              <div className="hero-core-symbol"><span /><span /></div>
              <p>SERANTRA</p>
              <small>DIGITAL SYSTEM</small>
            </div>

            <div className="hero-floating-card hero-floating-card-one">
              <div className="hero-floating-icon"><Code2 size={18} strokeWidth={1.8} /></div>
              <div><small>DEVELOPMENT</small><strong>Web Applications</strong></div>
            </div>

            <div className="hero-floating-card hero-floating-card-two">
              <div className="hero-floating-icon"><Database size={18} strokeWidth={1.8} /></div>
              <div><small>SYSTEMS</small><strong>Custom Software</strong></div>
            </div>

            <div className="hero-floating-card hero-floating-card-three">
              <div className="hero-floating-icon"><Layers3 size={18} strokeWidth={1.8} /></div>
              <div><small>EXPERIENCE</small><strong>UI / UX Design</strong></div>
            </div>

            <div className="hero-cursor-card">
              <MousePointer2 size={15} fill="currentColor" />
              <span>Build</span>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-scroll-indicator">
        <span>Scroll to explore</span>
        <div className="hero-scroll-line"><span /></div>
      </div>
    </section>
  );
}

