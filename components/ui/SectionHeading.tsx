"use client";

import { Children, isValidElement, type ReactElement, type ReactNode } from "react";
import { motion } from "motion/react";
import { DURATION, EASE } from "@/lib/animation";

type SectionHeadingProps = {
  children: ReactNode;
  className?: string;
  cinematic?: boolean;
  as?: "h1" | "h2" | "h3";
};

function parseHeading(children: ReactNode): { primary: ReactNode[]; accent: ReactNode | null } {
  const nodes = Children.toArray(children);
  const primary: ReactNode[] = [];
  let accent: ReactNode | null = null;

  for (const child of nodes) {
    if (isValidElement(child) && child.type === "em") {
      accent = (child as ReactElement<{ children?: ReactNode }>).props.children ?? null;
    } else {
      primary.push(child);
    }
  }

  return { primary, accent };
}

export function SectionHeading({
  children,
  className = "",
  cinematic = false,
  as: Tag = "h2",
}: SectionHeadingProps) {
  const { primary, accent } = parseHeading(children);

  if (cinematic) {
    return (
      <Tag className={`section-heading section-heading--cinematic ${className}`.trim()}>
        <motion.span
          className="section-heading__inner"
          initial={{ opacity: 0, y: 42 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.08, margin: "0px 0px -8% 0px" }}
          transition={{ duration: DURATION.reveal, ease: EASE }}
        >
          {primary}
          {accent ? <em>{accent}</em> : null}
        </motion.span>
      </Tag>
    );
  }

  return (
    <Tag className={`section-heading ${className}`.trim()}>
      {primary}
      {accent ? <em>{accent}</em> : null}
    </Tag>
  );
}
