"use client";

import { motion } from "motion/react";
import { SectionFrame } from "@/components/ui/SectionFrame";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerItem, StaggerReveal } from "@/components/ui/StaggerReveal";
import { lineReveal } from "@/lib/animation";

const controls = [
  ["01", "Grounded answers", "Orxivo uses approved FAQs, services, pricing, schedules, and policies."],
  ["02", "The next correct question", "Qualification follows the business workflow—not generic conversation."],
  ["03", "Structured lead memory", "Every useful answer becomes searchable, actionable data."],
  ["04", "Controlled handoff", "When nuance or authority is needed, a human receives full context."],
] as const;

export function TrustSystem() {
  return (
    <SectionFrame id="trust" className="trust-system">
      <div className="section-shell trust-system__grid">
        <div className="section-body">
          <SectionLabel>07 / CONTROL & TRUST</SectionLabel>
          <SectionHeading>
            Not a chatbot. <em>A controlled lead workflow system.</em>
          </SectionHeading>
          <p>The intelligence is useful because the boundaries are deliberate.</p>
        </div>
        <StaggerReveal className="control-list">
          {controls.map(([index, title, copy]) => (
            <StaggerItem key={title} as="article">
              <motion.span
                className="control-line"
                aria-hidden="true"
                initial={lineReveal.initial}
                whileInView={lineReveal.whileInView}
                viewport={lineReveal.viewport}
                transition={lineReveal.transition}
              />
              <span>{index}</span>
              <div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </div>
              <i>VERIFIED</i>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </div>
    </SectionFrame>
  );
}
