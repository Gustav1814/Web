"use client";

import { motion } from "motion/react";
import { SectionFrame } from "@/components/ui/SectionFrame";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { DURATION, EASE, STAGGER } from "@/lib/animation";

const messages = [
  ["Fees?", "NEW"],
  ["Timing?", "WAITING"],
  ["Available today?", "WAITING"],
  ["Can I book a demo?", "COLD"],
  ["Location?", "COLD"],
  ["Still open?", "LOST"],
] as const;

export function ProblemField() {
  return (
    <SectionFrame
      id="problem"
      className="problem-field"
      ariaLabel="Lead response time and revenue loss from slow follow-up"
    >
      <div className="section-shell problem-field__layout">
        <AnimatedText className="problem-field__copy">
          <SectionLabel>01 / THE LEAK</SectionLabel>
          <SectionHeading cinematic>Slow replies cost you leads. <em>Our AI systems respond in under 4 seconds.</em></SectionHeading>
          <p>
            Most teams take hours to answer a new inquiry. By then, the prospect has moved on.
            Speed is one of the few levers you can control without adding headcount.
          </p>
        </AnimatedText>

        <div className="message-field">
          <div className="message-field__axis">
            <span>NEW</span><span>WAITING</span><span>COLD</span><span>LOST</span>
          </div>
          {messages.map(([message, status], index) => (
            <motion.div
              key={message}
              className={`lost-message state-${status.toLowerCase()}`}
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: status === "LOST" ? 0.24 : 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * STAGGER, duration: DURATION.reveal, ease: EASE }}
              style={{ "--row": index } as React.CSSProperties}
            >
              <span className="lost-message__pulse" />
              <strong>{message}</strong>
              <small>{status}</small>
              <i />
            </motion.div>
          ))}
        </div>
      </div>
    </SectionFrame>
  );
}
