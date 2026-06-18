"use client";

import { motion } from "motion/react";
import { SectionFrame } from "@/components/ui/SectionFrame";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DURATION, EASE, STAGGER } from "@/lib/animation";

const layers = [
  ["01", "Website · WhatsApp · Voice", "CHANNEL SURFACES"],
  ["02", "Channel Handler", "NORMALIZE + ROUTE"],
  ["03", "AI Agent Engine", "INTENT + RESPONSE"],
  ["04", "Business Knowledge Base", "CONTROLLED TRUTH"],
  ["05", "Workflow Engine", "QUALIFY + ACT"],
  ["06", "PostgreSQL Database", "PERSIST + AUDIT"],
  ["07", "Dashboard · Notifications", "OPERATE + MEASURE"],
  ["08", "Human Team", "ESCALATE + CLOSE"],
] as const;

export function ArchitectureStack() {
  return (
    <SectionFrame id="architecture" className="architecture-stack">
      <div className="section-shell architecture-layout">
        <div className="architecture-copy">
          <SectionLabel>08 / ARCHITECTURE</SectionLabel>
          <SectionHeading>Built as a system. <em>Understood at a glance.</em></SectionHeading>
          <p>Each layer is replaceable, observable, and connected to one controlled data path.</p>
          <div className="architecture-key"><span><i className="cyan" />REAL-TIME</span><span><i className="violet" />PERSISTENT</span><span><i />HUMAN</span></div>
        </div>
        <div className="architecture-diagram">
          {layers.map(([number, title, meta], index) => (
            <motion.div
              key={title}
              className={`architecture-layer layer-${index}`}
              initial={{ opacity: 0, x: index % 2 ? 45 : -45 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * STAGGER, duration: DURATION.reveal, ease: EASE }}
            >
              <span>{number}</span><strong>{title}</strong><small>{meta}</small><i />
            </motion.div>
          ))}
        </div>
      </div>
    </SectionFrame>
  );
}
