"use client";

import { StaggerItem, StaggerReveal } from "@/components/ui/StaggerReveal";
import { SectionFrame } from "@/components/ui/SectionFrame";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { MODULES } from "@/lib/constants";

export function ModuleGrid() {
  return (
    <SectionFrame
      id="modules"
      className="module-grid-section"
      ariaLabel="Modular AI agents for chat, voice, booking, CRM, and workflow automation"
    >
      <div className="section-shell">
        <div className="center-heading">
          <SectionLabel>06 / SYSTEM MODULES</SectionLabel>
          <SectionHeading>Modular AI agents. <em>Chat, voice, booking, and CRM on one stack.</em></SectionHeading>
        </div>
        <StaggerReveal className="module-grid">
          {MODULES.map(([name, copy, code]) => (
            <StaggerItem key={name}>
              <GlassPanel className="module-card">
                <span>{code}</span><i /><h3>{name}</h3><p>{copy}</p><small>CONNECTED TO ORXIVO CORE</small>
              </GlassPanel>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </div>
    </SectionFrame>
  );
}
