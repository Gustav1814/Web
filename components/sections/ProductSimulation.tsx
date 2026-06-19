"use client";

import { AnimatePresence, motion } from "motion/react";
import { SectionFrame } from "@/components/ui/SectionFrame";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useAxioStore } from "@/lib/store";

const demoTurns = [
  {
    agent: "Are you looking for online or physical classes?",
    reply: "Physical",
    field: ["MODE", "PHYSICAL"],
  },
  {
    agent: "Which city works for you?",
    reply: "City center",
    field: ["LOCATION", "CITY CENTER"],
  },
  {
    agent: "Weekday or weekend batch?",
    reply: "Weekend batch",
    field: ["BATCH", "WEEKEND"],
  },
  {
    agent: "A demo slot is open Saturday at 11:30. Reserve it?",
    reply: "Book demo class",
    field: ["BOOKING", "SAT · 11:30"],
  },
] as const;

export function ProductSimulation() {
  const demoStep = useAxioStore((state) => state.demoStep);
  const leadStatus = useAxioStore((state) => state.leadStatus);
  const advanceDemo = useAxioStore((state) => state.advanceDemo);
  const resetDemo = useAxioStore((state) => state.resetDemo);

  return (
    <SectionFrame
      id="product"
      className="product-simulation"
      ariaLabel="Live AI lead qualification demo from conversation to booked meeting"
    >
      <div className="section-shell">
        <div className="split-heading">
          <div>
            <SectionLabel>03 / PRODUCT SIMULATION</SectionLabel>
            <SectionHeading cinematic>AI lead qualification, live. <em>From first message to booked meeting.</em></SectionHeading>
          </div>
          <p>Each answer the AI agent collects updates the lead profile, moves the score forward, and triggers the next step in the workflow.</p>
        </div>

        <div className="simulation-console premium-surface">
          <div className="simulation-console__topbar">
            <span>ORXIVO LIVE SESSION</span>
            <div><i /> ENCRYPTED CHANNEL</div>
            <button type="button" onClick={resetDemo}>RESET</button>
          </div>

          <div className="simulation-chat">
            <div className="chat-header">
              <span className="avatar">AS</span>
              <div><strong>Orxivo · Institute Agent</strong><small>Responding instantly</small></div>
            </div>
            <div className="chat-transcript">
              <div className="bubble bubble--customer">Hi, I want to join IELTS classes.</div>
              {demoTurns.slice(0, Math.max(1, demoStep + 1)).map((turn, index) => (
                <div key={turn.reply}>
                  <motion.div
                    className="bubble bubble--axio"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {turn.agent}
                  </motion.div>
                  {index < demoStep && (
                    <motion.div
                      className="bubble bubble--customer"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      {turn.reply}
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
            <AnimatePresence mode="wait">
              {demoStep < demoTurns.length ? (
                <motion.button
                  key={demoStep}
                  className="preset-reply"
                  type="button"
                  onClick={advanceDemo}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                >
                  {demoTurns[demoStep].reply} <span>→</span>
                </motion.button>
              ) : (
                <motion.div className="booking-confirmed" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <i>✓</i> DEMO CLASS RESERVED
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="simulation-profile">
            <div className="profile-heading">
              <div><span>LEAD PROFILE</span><strong>Student inquiry #A-1048</strong></div>
              <b className={`status status-${leadStatus.toLowerCase().replace(" ", "-")}`}>{leadStatus}</b>
            </div>
            <div className="profile-score">
              <span>QUALIFICATION SCORE</span>
              <strong>{Math.min(34 + demoStep * 16, 98)}%</strong>
              <i><b style={{ width: `${Math.min(34 + demoStep * 16, 98)}%` }} /></i>
            </div>
            <div className="profile-fields">
              <div><span>COURSE</span><strong>IELTS</strong></div>
              {demoTurns.slice(0, demoStep).map((turn) => (
                <motion.div key={turn.field[0]} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <span>{turn.field[0]}</span><strong>{turn.field[1]}</strong>
                </motion.div>
              ))}
            </div>
            <div className="follow-up-task">
              <span>NEXT AUTOMATION</span>
              <strong>{demoStep >= 4 ? "Confirmation + counselor handoff" : "Waiting for qualification data"}</strong>
              <small>{demoStep >= 4 ? "Created just now" : "Workflow armed"}</small>
            </div>
          </div>
        </div>
      </div>
    </SectionFrame>
  );
}
