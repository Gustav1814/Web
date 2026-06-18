"use client";

import { motion, useMotionValue, useSpring } from "motion/react";
import { useAxioStore } from "@/lib/store";
import { scrollToTarget } from "@/lib/scroll";
import { useLenis } from "@/lib/lenis-context";
import type { MouseEvent, ReactNode } from "react";

type MagneticButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
};

export function MagneticButton({
  href,
  children,
  variant = "primary",
  className = "",
}: MagneticButtonProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 160, damping: 22 });
  const springY = useSpring(y, { stiffness: 160, damping: 22 });
  const setCursorMode = useAxioStore((state) => state.setCursorMode);
  const { lenis } = useLenis();

  const scale = useSpring(1, { stiffness: 260, damping: 24 });

  const move = (event: MouseEvent<HTMLAnchorElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left - rect.width / 2) * 0.18);
    y.set((event.clientY - rect.top - rect.height / 2) * 0.18);
  };

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (!href.startsWith("#")) return;
    event.preventDefault();
    scrollToTarget(lenis, href);
  };

  return (
    <motion.a
      href={href}
      className={`magnetic-button ${variant === "ghost" ? "magnetic-button--ghost" : ""} ${className}`.trim()}
      style={{ x: springX, y: springY, scale }}
      onClick={handleClick}
      onMouseMove={move}
      onMouseEnter={() => {
        setCursorMode("interactive");
        scale.set(1.03);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
        scale.set(1);
        setCursorMode("default");
      }}
    >
      <span>{children}</span>
      <i aria-hidden="true">↗</i>
    </motion.a>
  );
}
