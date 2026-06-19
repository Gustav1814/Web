"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function useScrollRefresh(dependencyKey: string | number | null) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const frame = requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => cancelAnimationFrame(frame);
  }, [dependencyKey]);
}
