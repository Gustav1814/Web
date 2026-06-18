"use client";

import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export type SmoothScrollHandle = {
  lenis: Lenis;
  destroy: () => void;
};

export const SCROLL_EASE = (t: number) => 1 - Math.pow(1 - t, 4);

export function createSmoothScroll(): SmoothScrollHandle {
  gsap.registerPlugin(ScrollTrigger);

  const lenis = new Lenis({
    duration: 1.15,
    lerp: 0.08,
    smoothWheel: true,
    wheelMultiplier: 0.9,
    touchMultiplier: 1.1,
    syncTouch: true,
  });

  ScrollTrigger.scrollerProxy(document.documentElement, {
    scrollTop(value?: number) {
      if (typeof value === "number") {
        lenis.scrollTo(value, { immediate: true });
      }
      return lenis.scroll;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.documentElement.style.transform ? "transform" : "fixed",
  });

  lenis.on("scroll", ScrollTrigger.update);
  const update = (time: number) => lenis.raf(time * 1000);
  gsap.ticker.add(update);
  gsap.ticker.lagSmoothing(0);

  const onRefresh = () => lenis.resize();
  ScrollTrigger.addEventListener("refresh", onRefresh);
  ScrollTrigger.refresh();

  const destroy = () => {
    ScrollTrigger.removeEventListener("refresh", onRefresh);
    gsap.ticker.remove(update);
    lenis.destroy();
    ScrollTrigger.scrollerProxy(document.documentElement, {});
  };

  return { lenis, destroy };
}

export function scrollToTarget(
  lenis: Lenis | null,
  href: string,
  options?: { offset?: number; duration?: number },
) {
  const target = href.startsWith("#") ? href : `#${href.replace(/^#/, "")}`;
  if (!target || target === "#") return;

  const element = document.querySelector<HTMLElement>(target);
  if (!element) return;

  if (lenis) {
    lenis.scrollTo(element, {
      offset: options?.offset ?? -80,
      duration: options?.duration ?? 1.4,
      easing: SCROLL_EASE,
    });
  } else {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  window.history.pushState(null, "", target);
}
