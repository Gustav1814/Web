"use client";

import { AnimatePresence, motion } from "motion/react";
import { SectionFrame } from "@/components/ui/SectionFrame";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SYSTEM_NODES } from "@/lib/constants";
import { useAxioStore } from "@/lib/store";

import { DURATION, EASE, STAGGER } from "@/lib/animation";
import { useScrollRefresh } from "@/lib/use-scroll-refresh";

export function SystemFlow() {
  const selectedNode = useAxioStore((state) => state.selectedNode);
  const setSelectedNode = useAxioStore((state) => state.setSelectedNode);
  const selected = SYSTEM_NODES.find((node) => node.id === selectedNode);

  useScrollRefresh(selectedNode);

  return (
    <SectionFrame id="system" className="system-flow">
      <div className="section-shell">
        <div className="split-heading">
          <div>
            <SectionLabel>02 / CONTROL LAYER</SectionLabel>
            <SectionHeading cinematic>Orxivo catches the conversation <em>before it dies.</em></SectionHeading>
          </div>
          <p>Click through the operating path. Every layer has one job and one accountable output.</p>
        </div>

        <div className="system-map">
          <div className="system-map__rail" />
          {SYSTEM_NODES.map((node, index) => (
            <motion.button
              type="button"
              key={node.id}
              className={`system-node ${selectedNode === node.id ? "is-active" : ""}`}
              onClick={() => setSelectedNode(node.id)}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * STAGGER, duration: DURATION.reveal, ease: EASE }}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{node.label}</strong>
              <small>{node.short}</small>
              <i />
            </motion.button>
          ))}
        </div>

        <AnimatePresence>
          {selected && (
            <motion.aside
              className="system-drawer"
              initial={{ opacity: 0, x: 70 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 70 }}
            >
              <button type="button" onClick={() => setSelectedNode(null)}>CLOSE ×</button>
              <span>ACTIVE LAYER / {selected.id.toUpperCase()}</span>
              <h3>{selected.label}</h3>
              <p>{selected.detail}</p>
              <div className="system-drawer__signal"><i /> SIGNAL VERIFIED</div>
            </motion.aside>
          )}
        </AnimatePresence>
      </div>
    </SectionFrame>
  );
}
