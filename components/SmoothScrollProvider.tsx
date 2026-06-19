"use client";

import { useEffect, useState, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type Lenis from "lenis";
import { createSmoothScroll } from "@/lib/scroll";
import { LenisProvider } from "@/lib/lenis-context";
import { SECTION_IDS, type SectionId } from "@/lib/constants";
import { useAxioStore } from "@/lib/store";

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const [lenis, setLenis] = useState<Lenis | null>(null);
  const [scrollLocked, setScrollLocked] = useState(false);
  const setActiveSection = useAxioStore((state) => state.setActiveSection);
  const setSectionProgress = useAxioStore((state) => state.setSectionProgress);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const nativeScroll = window.matchMedia("(max-width: 900px), (pointer: coarse)").matches;
    if (reduced || nativeScroll) {
      const frame = requestAnimationFrame(() => setScrollLocked(false));
      return () => cancelAnimationFrame(frame);
    }

    const handle = createSmoothScroll();
    const frame = requestAnimationFrame(() => setLenis(handle.lenis));

    return () => {
      cancelAnimationFrame(frame);
      handle.destroy();
    };
  }, []);

  useEffect(() => {
    if (!lenis) return;
    if (scrollLocked) {
      lenis.stop();
    } else {
      lenis.start();
      ScrollTrigger.refresh();
    }
  }, [lenis, scrollLocked]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const nativeScroll = window.matchMedia("(max-width: 900px), (pointer: coarse)").matches;

    if (nativeScroll) {
      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) continue;
            const id = (entry.target as HTMLElement).dataset.section as SectionId | undefined;
            if (id) {
              setActiveSection(id);
              setSectionProgress(1);
            }
          }
        },
        { rootMargin: "-35% 0px -45%", threshold: 0 },
      );

      SECTION_IDS.forEach((id) => {
        const element = document.querySelector<HTMLElement>(`[data-section="${id}"]`);
        if (element) observer.observe(element);
      });

      return () => observer.disconnect();
    }

    const triggers = SECTION_IDS.map((id) => {
      const element = document.querySelector<HTMLElement>(`[data-section="${id}"]`);
      if (!element) return null;
      return ScrollTrigger.create({
        trigger: element,
        start: "top 55%",
        end: "bottom 45%",
        onEnter: () => setActiveSection(id as SectionId),
        onEnterBack: () => setActiveSection(id as SectionId),
        onUpdate: (self) => setSectionProgress(self.progress),
      });
    });
    return () => triggers.forEach((trigger) => trigger?.kill());
  }, [setActiveSection, setSectionProgress]);

  return (
    <LenisProvider lenis={lenis} scrollLocked={scrollLocked} setScrollLocked={setScrollLocked}>
      {children}
    </LenisProvider>
  );
}
