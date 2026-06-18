"use client";

import { useEffect, useState, type MouseEvent, type ReactNode } from "react";
import { motion, useMotionTemplate, useMotionValue } from "motion/react";

export function GlassPanel({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const lightX = useMotionValue(50);
  const lightY = useMotionValue(50);
  const background = useMotionTemplate`radial-gradient(440px circle at ${lightX}% ${lightY}%, rgba(89,214,255,.12), transparent 42%)`;
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  const onMove = (event: MouseEvent<HTMLDivElement>) => {
    if (reduced) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;
    ry.set((px - 0.5) * 7);
    rx.set((0.5 - py) * 7);
    lightX.set(px * 100);
    lightY.set(py * 100);
  };

  return (
    <motion.div
      className={`glass-panel ${className}`}
      style={reduced ? undefined : { rotateX: rx, rotateY: ry, transformPerspective: 900 }}
      onMouseMove={onMove}
      onMouseLeave={() => {
        rx.set(0);
        ry.set(0);
        lightX.set(50);
        lightY.set(50);
      }}
    >
      {!reduced && <motion.div className="glass-panel__light" style={{ background }} />}
      <div className="glass-panel__content">{children}</div>
    </motion.div>
  );
}
