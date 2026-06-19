"use client";

import { SectionFrame } from "@/components/ui/SectionFrame";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { StaggerItem, StaggerReveal } from "@/components/ui/StaggerReveal";

const plans = [
  {
    index: "P.01",
    name: "Starter Pilot",
    copy: "For one business location or one institute.",
    details: ["One primary channel", "One qualification workflow", "Booking or lead capture", "Pilot dashboard"],
  },
  {
    index: "P.02",
    name: "Growth System",
    copy: "For businesses with multiple services, staff, and follow-ups.",
    details: ["Website + WhatsApp", "Multi-service workflows", "Follow-up sequences", "Team handoff logic"],
  },
  {
    index: "P.03",
    name: "Custom Rollout",
    copy: "For multi-branch businesses and industry-specific operations.",
    details: ["Branch-aware routing", "Custom integrations", "Advanced permissions", "Dedicated rollout"],
  },
] as const;

export function PricingPilot() {
  return (
    <SectionFrame
      id="pricing"
      className="pricing-pilot"
      ariaLabel="Controlled pilot implementation tiers for automation rollout"
    >
      <div className="section-shell">
        <div className="split-heading section-body">
          <div>
            <SectionLabel>09 / IMPLEMENTATION</SectionLabel>
            <SectionHeading>
              Start with a controlled pilot. <em>Scale when the numbers prove it works.</em>
            </SectionHeading>
          </div>
          <p>Custom pilot pricing based on workflow depth, channels, and integration scope. We deploy within 10 business days and optimize from live performance data.</p>
        </div>
        <StaggerReveal className="pilot-grid">
          {plans.map((plan, index) => (
            <StaggerItem key={plan.name} as="article" className={index === 1 ? "is-featured" : ""}>
              <span>{plan.index}</span>
              <h3>{plan.name}</h3>
              <p>{plan.copy}</p>
              <ul>
                {plan.details.map((detail) => (
                  <li key={detail}>
                    <i />
                    {detail}
                  </li>
                ))}
              </ul>
              <strong>CUSTOM PILOT PRICING</strong>
              <MagneticButton href="/contact" variant={index === 1 ? "primary" : "ghost"}>
                Scope this pilot
              </MagneticButton>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </div>
    </SectionFrame>
  );
}
