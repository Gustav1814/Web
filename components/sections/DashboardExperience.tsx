"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { SectionFrame } from "@/components/ui/SectionFrame";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { useAxioStore } from "@/lib/store";

const leads = [
  { id: "A-1048", name: "Sarah Mitchell", source: "Website", intent: "Enterprise demo", score: 94, status: "Demo booked" },
  { id: "A-1047", name: "James Chen", source: "WhatsApp", intent: "Pricing inquiry", score: 81, status: "Qualified" },
  { id: "A-1046", name: "Maria Torres", source: "WhatsApp", intent: "Service booking", score: 76, status: "Follow-up" },
  { id: "A-1045", name: "David Park", source: "Website", intent: "Integration scope", score: 62, status: "New" },
] as const;

import { useScrollRefresh } from "@/lib/use-scroll-refresh";

export function DashboardExperience() {
  const [lead, setLead] = useState<(typeof leads)[number] | null>(null);
  const demoStatus = useAxioStore((state) => state.leadStatus);

  useScrollRefresh(lead?.id ?? null);

  return (
    <SectionFrame
      id="dashboard"
      className="dashboard-experience"
      ariaLabel="Operations dashboard for lead visibility, status tracking, and team handoff"
    >
      <div className="section-shell">
        <div className="split-heading">
          <div>
            <SectionLabel>04 / OPERATIONS</SectionLabel>
            <SectionHeading>Full operational visibility. <em>Every lead, every status, every required action.</em></SectionHeading>
          </div>
          <p>Your operations team sees every active lead, its qualification status, and the next required action, with full conversation history and handoff context.</p>
        </div>

        <div className="dashboard-shell premium-surface">
          <aside className="dashboard-nav">
            <div className="dashboard-nav__mark">OR</div>
            {["OV", "LD", "CV", "BK", "FL"].map((item, index) => (
              <span className={index === 0 ? "is-active" : ""} key={item}>{item}</span>
            ))}
          </aside>
          <div className="dashboard-main">
            <div className="dashboard-heading">
              <div><span>OPERATIONS / TODAY</span><h3>Lead command</h3></div>
              <div className="dashboard-live"><i /> SYSTEM LIVE</div>
            </div>
            <div className="metric-grid">
              <div><span>NEW LEADS</span><strong><AnimatedCounter value={28 + (demoStatus !== "New Lead" ? 1 : 0)} /></strong><small>+18% this week</small></div>
              <div><span>HOT LEADS</span><strong><AnimatedCounter value={9} /></strong><small>Needs attention</small></div>
              <div><span>DEMO BOOKED</span><strong><AnimatedCounter value={6 + (demoStatus === "Demo Booked" ? 1 : 0)} /></strong><small>72% show rate</small></div>
              <div><span>FOLLOW-UPS</span><strong><AnimatedCounter value={14} /></strong><small>7 automated today</small></div>
            </div>
            <div className="dashboard-content">
              <div className="lead-table">
                <div className="lead-table__head"><span>LEAD</span><span>SOURCE</span><span>INTENT</span><span>SCORE</span><span>STATUS</span></div>
                {leads.map((item) => (
                  <button type="button" key={item.id} onClick={() => setLead(item)}>
                    <span><i>{item.name.slice(0, 2).toUpperCase()}</i><b>{item.name}<small>{item.id}</small></b></span>
                    <span>{item.source}</span><span>{item.intent}</span><span>{item.score}%</span><span>{item.status}</span>
                  </button>
                ))}
              </div>
              <div className="handoff-queue">
                <span>HUMAN HANDOFF</span>
                <strong>3 conversations</strong>
                <div><i /> High-budget enterprise inquiry<small>Context ready · 2m</small></div>
                <div><i /> Parent requesting counselor<small>Qualified · 7m</small></div>
                <div><i /> Schedule exception requested<small>Booking blocked · 11m</small></div>
              </div>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {lead && (
            <motion.aside
              className="lead-drawer"
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 80 }}
            >
              <button type="button" onClick={() => setLead(null)}>CLOSE ×</button>
              <span>LEAD / {lead.id}</span><h3>{lead.name}</h3>
              <div className="lead-drawer__score">{lead.score}<small>/100 INTENT</small></div>
              <dl>
                <div><dt>Source</dt><dd>{lead.source}</dd></div>
                <div><dt>Intent</dt><dd>{lead.intent}</dd></div>
                <div><dt>Status</dt><dd>{lead.status}</dd></div>
              </dl>
              <div className="drawer-transcript"><small>CUSTOMER</small><p>Can you share the next available option?</p><small>ORXIVO</small><p>Yes. I found a suitable slot and can reserve it now.</p></div>
            </motion.aside>
          )}
        </AnimatePresence>
      </div>
    </SectionFrame>
  );
}
