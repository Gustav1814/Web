"use client";

import { motion } from "motion/react";
import { clipReveal } from "@/lib/animation";

export function TextReveal({
  text,
  className = "",
  as: Tag = "h2",
}: {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p";
}) {
  const lines = text.split("\n").filter(Boolean);

  return (
    <Tag className={`text-reveal ${className}`}>
      {lines.map((line, index) => (
        <span key={`${line}-${index}`} className="text-reveal__line">
          <motion.span
            className="text-reveal__inner"
            initial={clipReveal.initial}
            whileInView={clipReveal.whileInView}
            viewport={clipReveal.viewport}
            transition={{ ...clipReveal.transition, delay: index * 0.08 }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
