import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

export default function SiteMotion() {
  const location = useLocation();

  useEffect(() => {
    const reduceMotion =
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

    if (reduceMotion) {
      return undefined;
    }

    /* ==========================================
       LENIS
    ========================================== */

    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1,
    });

    const handleLenisScroll = () => {
      ScrollTrigger.update();
    };

    lenis.on(
      "scroll",
      handleLenisScroll
    );

    const updateLenis = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateLenis);

    gsap.ticker.lagSmoothing(0);

    /* ==========================================
       GSAP
    ========================================== */

    const ctx = gsap.context(() => {
      /* PROJECTS */

      gsap.utils
        .toArray(".project-card")
        .forEach((card) => {
          gsap.fromTo(
            card,
            {
              opacity: 0,
              y: 55,
            },
            {
              opacity: 1,
              y: 0,

              duration: 0.9,

              ease: "power3.out",

              scrollTrigger: {
                trigger: card,
                start: "top 92%",
                once: true,
              },
            }
          );
        });

      /* WHY SERANTRA */

      gsap.utils
        .toArray(
          ".why-serantra-reason"
        )
        .forEach((item) => {
          gsap.fromTo(
            item,
            {
              opacity: 0,
              x: 45,
            },
            {
              opacity: 1,
              x: 0,

              duration: 0.85,

              ease: "power3.out",

              scrollTrigger: {
                trigger: item,
                start: "top 90%",
                once: true,
              },
            }
          );
        });

      /* FAQ */

      gsap.utils
        .toArray(
          ".faq-video-border"
        )
        .forEach((item) => {
          gsap.fromTo(
            item,
            {
              opacity: 0,
              y: 30,
            },
            {
              opacity: 1,
              y: 0,

              duration: 0.75,

              ease: "power3.out",

              scrollTrigger: {
                trigger: item,
                start: "top 93%",
                once: true,
              },
            }
          );
        });

      /* PARALLAX */

      gsap.utils
        .toArray("[data-parallax]")
        .forEach((element) => {
          const speed =
            element.dataset.parallax;

          let amount = -25;

          if (speed === "medium") {
            amount = -45;
          }

          if (speed === "fast") {
            amount = -65;
          }

          gsap.to(element, {
            y: amount,

            ease: "none",

            scrollTrigger: {
              trigger:
                element.parentElement ||
                element,

              start: "top bottom",
              end: "bottom top",

              scrub: 1,
            },
          });
        });

      /* SECTION LINES */

      gsap.utils
        .toArray(
          ".section-motion-line"
        )
        .forEach((line) => {
          gsap.fromTo(
            line,
            {
              scaleX: 0,

              transformOrigin:
                "left center",
            },
            {
              scaleX: 1,

              ease: "none",

              scrollTrigger: {
                trigger: line,

                start: "top 95%",
                end: "top 55%",

                scrub: 1,
              },
            }
          );
        });
    });

    const refreshTimer =
      window.setTimeout(() => {
        ScrollTrigger.refresh();
      }, 250);

    return () => {
      window.clearTimeout(
        refreshTimer
      );

      ctx.revert();

      gsap.ticker.remove(
        updateLenis
      );

      lenis.destroy();
    };
  }, [location.pathname]);

  return null;
}