"use client";

import { StaggerItem, StaggerReveal } from "@/components/ui/StaggerReveal";
import { SectionFrame } from "@/components/ui/SectionFrame";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { MODULES } from "@/lib/constants";

export function ModuleGrid() {
  return (
    <SectionFrame id="modules" className="module-grid-section">
      <div className="section-shell">
        <div className="center-heading">
          <SectionLabel>06 / SYSTEM MODULES</SectionLabel>
          <SectionHeading>One core. <em>Specialized operators.</em></SectionHeading>
        </div>
        <StaggerReveal className="module-grid">
          {MODULES.map(([name, copy, code]) => (
            <StaggerItem key={name}>
              <GlassPanel className="module-card">
                <span>{code}</span><i /><h3>{name}</h3><p>{copy}</p><small>CONNECTED TO AXIO CORE</small>
              </GlassPanel>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </div>
    </SectionFrame>
  );
}
