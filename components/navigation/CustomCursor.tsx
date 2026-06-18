"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { useAxioStore } from "@/lib/store";

const DARK_SECTIONS = new Set(["problem", "product", "niches", "trust", "pricing", "hero"]);

export function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const scale = useSpring(1, { stiffness: 500, damping: 28 });
  const springX = useSpring(x, { stiffness: 520, damping: 38, mass: 0.35 });
  const springY = useSpring(y, { stiffness: 520, damping: 38, mass: 0.35 });
  const mode = useAxioStore((state) => state.cursorMode);
  const activeSection = useAxioStore((state) => state.activeSection);
  const onDark = DARK_SECTIONS.has(activeSection);
  const [coarse, setCoarse] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(pointer: coarse)");
    const update = () => setCoarse(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (coarse) return;
    const move = (event: PointerEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
    };
    const pulse = () => {
      scale.set(1.35);
      window.setTimeout(() => scale.set(1), 180);
    };
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerdown", pulse);
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerdown", pulse);
    };
  }, [coarse, scale, x, y]);

  if (coarse) return null;

  return (
    <>
      <motion.div
        className={`cursor cursor--ring is-${mode} ${onDark ? "cursor--on-dark" : "cursor--on-light"}`}
        style={{ x: springX, y: springY, scale }}
      />
      <motion.div
        className={`cursor cursor--dot is-${mode} ${onDark ? "cursor--on-dark" : "cursor--on-light"}`}
        style={{ x, y }}
      />
    </>
  );
}
