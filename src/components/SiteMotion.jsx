import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

export default function SiteMotion() {
  const location = useLocation();

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) return undefined;

    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1,
    });

    lenis.on("scroll", ScrollTrigger.update);

    const lenisTicker = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(lenisTicker);
    gsap.ticker.lagSmoothing(0);

    const ctx = gsap.context(() => {
      gsap.utils.toArray(".motion-reveal").forEach((element) => {
        gsap.fromTo(
          element,
          { autoAlpha: 0, y: 42, filter: "blur(8px)" },
          {
            autoAlpha: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.95,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 90%",
              once: true,
            },
            onComplete: () => {
              gsap.set(element, {
                clearProps: "opacity,visibility,transform,filter",
              });
            },
          }
        );
      });

      gsap.utils.toArray(".motion-stagger").forEach((group) => {
        const children = Array.from(group.children);
        if (!children.length) return;

        gsap.fromTo(
          children,
          { autoAlpha: 0, y: 34 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: group,
              start: "top 88%",
              once: true,
            },
            onComplete: () => {
              gsap.set(children, {
                clearProps: "opacity,visibility,transform",
              });
            },
          }
        );
      });

      gsap.utils.toArray("[data-parallax]").forEach((element) => {
        const speed = element.dataset.parallax;
        const movement = speed === "fast" ? -75 : speed === "medium" ? -45 : -25;

        gsap.fromTo(
          element,
          { y: 0 },
          {
            y: movement,
            ease: "none",
            scrollTrigger: {
              trigger: element.parentElement || element,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.1,
            },
          }
        );
      });

      gsap.utils.toArray(".section-motion-line").forEach((line) => {
        gsap.fromTo(
          line,
          { scaleX: 0, transformOrigin: "left center" },
          {
            scaleX: 1,
            ease: "none",
            scrollTrigger: {
              trigger: line,
              start: "top 92%",
              end: "top 55%",
              scrub: 1,
            },
          }
        );
      });
    });

    const handleAnchorClick = (event) => {
      const anchor = event.target.closest('a[href^="#"]');
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href || href === "#") return;

      const target = document.querySelector(href);
      if (!target) return;

      event.preventDefault();
      lenis.scrollTo(target, { offset: -90, duration: 1.1 });
    };

    document.addEventListener("click", handleAnchorClick);

    const refreshTimer = window.setTimeout(() => {
      lenis.resize();
      ScrollTrigger.refresh();
    }, 150);

    return () => {
      window.clearTimeout(refreshTimer);
      document.removeEventListener("click", handleAnchorClick);
      ctx.revert();
      gsap.ticker.remove(lenisTicker);
      lenis.destroy();
    };
  }, [location.pathname]);

  return null;
}
