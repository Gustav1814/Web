"use client";

import { motion } from "motion/react";
import { clipReveal, clipRevealMobile, STAGGER, STAGGER_MOBILE } from "@/lib/animation";
import { useIsMobile } from "@/lib/use-mobile";

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
  const isMobile = useIsMobile();
  const reveal = isMobile ? clipRevealMobile : clipReveal;
  const stagger = isMobile ? STAGGER_MOBILE : STAGGER;

  return (
    <Tag className={`text-reveal ${className}`}>
      {lines.map((line, index) => (
        <span key={`${line}-${index}`} className="text-reveal__line">
          <motion.span
            className="text-reveal__inner"
            initial={reveal.initial}
            whileInView={reveal.whileInView}
            viewport={reveal.viewport}
            transition={{ ...reveal.transition, delay: index * stagger }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
