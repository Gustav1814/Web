"use client";

import { motion, type HTMLMotionProps } from "motion/react";
import { fadeUp } from "@/lib/animation";

type RevealProps = HTMLMotionProps<"div"> & {
  delay?: number;
  as?: "div" | "article" | "section" | "span";
};

export function Reveal({
  children,
  className = "",
  delay = 0,
  as = "div",
  ...props
}: RevealProps) {
  const Component = motion[as];

  return (
    <Component
      className={className}
      initial={fadeUp.initial}
      whileInView={fadeUp.whileInView}
      viewport={fadeUp.viewport}
      transition={{ ...fadeUp.transition, delay }}
      {...props}
    >
      {children}
    </Component>
  );
}
