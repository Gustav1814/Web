"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function ReferenceMotion() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.matchMedia("(max-width: 768px), (pointer: coarse)").matches;
    if (reduced || isMobile) return;

    const context = gsap.context(() => {
      gsap.to(".hero-reference__wordmark", {
        letterSpacing: "-0.09em",
        yPercent: -8,
        opacity: 0.28,
        scrollTrigger: {
          trigger: ".hero-reference",
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.to(".hero-reference__product", {
        yPercent: 4,
        scale: 0.99,
        opacity: 1,
        scrollTrigger: {
          trigger: ".hero-reference",
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.to(".axio-canvas", {
        opacity: 0,
        scale: 0.96,
        scrollTrigger: {
          trigger: ".hero-reference",
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.utils.toArray<HTMLElement>(".section-frame:not(.hero-reference)").forEach((section) => {
        const shell = section.querySelector<HTMLElement>(".section-shell");
        if (!shell) return;

        gsap.fromTo(
          shell,
          { opacity: 0.72, y: 48 },
          {
            opacity: 1,
            y: 0,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 88%",
              end: "top 52%",
              scrub: 0.6,
            },
          },
        );

        gsap.fromTo(
          section,
          { "--section-progress": 0 },
          {
            "--section-progress": 1,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top 90%",
              end: "top 20%",
              scrub: true,
            },
          },
        );
      });

      const horizontal = document.querySelector<HTMLElement>(".system-map");
      if (horizontal && window.innerWidth > 900) {
        gsap.fromTo(
          horizontal,
          { xPercent: 6 },
          {
            xPercent: -6,
            ease: "none",
            scrollTrigger: {
              trigger: ".system-flow",
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          },
        );
      }

      gsap.to(".final-convergence__grid", {
        rotate: 6,
        scale: 1.08,
        scrollTrigger: {
          trigger: ".final-convergence",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    });

    return () => context.revert();
  }, []);

  return null;
}
