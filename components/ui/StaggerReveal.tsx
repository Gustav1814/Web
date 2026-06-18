"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";
import { fadeUpItem, staggerContainer } from "@/lib/animation";

type StaggerRevealProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "ul" | "section";
};

export function StaggerReveal({ children, className = "", as = "div" }: StaggerRevealProps) {
  const Component = motion[as];

  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-10%" }}
      variants={staggerContainer}
    >
      {children}
    </Component>
  );
}

export function StaggerItem({
  children,
  className = "",
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "article" | "li";
}) {
  const Component = motion[as];

  return (
    <Component className={className} variants={fadeUpItem}>
      {children}
    </Component>
  );
}
