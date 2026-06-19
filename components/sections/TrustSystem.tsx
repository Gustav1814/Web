"use client";

import { motion } from "motion/react";
import { SectionFrame } from "@/components/ui/SectionFrame";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerItem, StaggerReveal } from "@/components/ui/StaggerReveal";
import { lineReveal } from "@/lib/animation";

const controls = [
  ["01", "Grounded answers", "Every response is generated from your approved knowledge base: pricing, services, policies, and FAQs you control."],
  ["02", "The next correct question", "Qualification logic follows your business workflow, not generic conversation trees."],
  ["03", "Structured lead memory", "Every data point collected becomes a searchable, reportable field in your pipeline."],
  ["04", "Controlled handoff", "When a conversation requires human judgment, your team receives the full context, qualification score, and recommended next action."],
] as const;

export function TrustSystem() {
  return (
    <SectionFrame
      id="trust"
      className="trust-system"
      ariaLabel="Enterprise-grade controls for grounded answers, qualification, and human handoff"
    >
      <div className="section-shell trust-system__grid">
        <div className="section-body">
          <SectionLabel>07 / CONTROL & TRUST</SectionLabel>
          <SectionHeading>
            Not a chatbot. <em>A controlled, auditable lead operations system.</em>
          </SectionHeading>
          <p>We build systems with deliberate boundaries so automation stays accurate, accountable, and under your control.</p>
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
