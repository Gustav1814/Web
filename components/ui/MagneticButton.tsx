"use client";

import { motion } from "motion/react";
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
  const { lenis } = useLenis();

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (!href.startsWith("#")) return;
    event.preventDefault();
    scrollToTarget(lenis, href);
  };

  return (
    <motion.a
      href={href}
      className={`magnetic-button ${variant === "ghost" ? "magnetic-button--ghost" : ""} ${className}`.trim()}
      onClick={handleClick}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.985 }}
      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
    >
      <span>{children}</span>
      <i aria-hidden="true">↗</i>
    </motion.a>
  );
}
