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
  const [scrollLocked, setScrollLocked] = useState(true);
  const setActiveSection = useAxioStore((state) => state.setActiveSection);
  const setSectionProgress = useAxioStore((state) => state.setSectionProgress);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setScrollLocked(false);
      return;
    }

    const handle = createSmoothScroll();
    setLenis(handle.lenis);
    handle.lenis.stop();

    return () => {
      handle.destroy();
      setLenis(null);
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
