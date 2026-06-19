"use client";

import { motion } from "motion/react";
import { SectionFrame } from "@/components/ui/SectionFrame";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { NICHE_PACKS } from "@/lib/niche-data";
import { useAxioStore } from "@/lib/store";

import { DURATION, EASE } from "@/lib/animation";
import { useScrollRefresh } from "@/lib/use-scroll-refresh";

export function NicheEngine() {
  const selectedNiche = useAxioStore((state) => state.selectedNiche);
  const setSelectedNiche = useAxioStore((state) => state.setSelectedNiche);
  const pack = NICHE_PACKS.find((item) => item.id === selectedNiche) ?? NICHE_PACKS[0];

  useScrollRefresh(`${selectedNiche}:${pack.id}`);

  return (
    <SectionFrame id="niches" className="niche-engine">
      <div className="section-shell">
        <div className="split-heading">
          <div>
            <SectionLabel>05 / NICHE ENGINE</SectionLabel>
            <SectionHeading>One intelligence engine. <em>Different business workflows.</em></SectionHeading>
          </div>
          <p>The conversation logic, data model, and booking outcome reconfigure together.</p>
        </div>
        <div className="niche-tabs">
          {NICHE_PACKS.map((item) => (
            <button
              type="button"
              key={item.id}
              className={item.id === selectedNiche ? "is-active" : ""}
              onClick={() => setSelectedNiche(item.id)}
            >
              <span>{item.code}</span>{item.label}
            </button>
          ))}
        </div>
        <motion.div
          className="niche-workbench"
          key={pack.id}
          initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: DURATION.hover, ease: EASE }}
        >
          <div className="niche-message">
            <span>INCOMING / {pack.code}</span>
            <blockquote>“{pack.message}”</blockquote>
            <div className="niche-message__route"><i /><span>INTENT DETECTED</span><i /><span>WORKFLOW LOADED</span></div>
          </div>
          <div className="niche-questions">
            <span>QUALIFICATION PATH</span>
            {pack.questions.map((question, index) => <div key={question}><i>{index + 1}</i>{question}</div>)}
          </div>
          <div className="niche-record">
            <span>STRUCTURED LEAD</span>
            {pack.fields.map((field) => <div key={field.label}><small>{field.label}</small><strong>{field.value}</strong></div>)}
            <footer><div><small>BOOKING</small><strong>{pack.booking}</strong></div><div><small>FOLLOW-UP</small><strong>{pack.followUp}</strong></div></footer>
          </div>
        </motion.div>
      </div>
    </SectionFrame>
  );
}
