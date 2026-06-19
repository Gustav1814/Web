"use client";

import { SectionFrame } from "@/components/ui/SectionFrame";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function FinalConvergence() {
  return (
    <SectionFrame
      id="final"
      className="final-convergence"
      ariaLabel="Request a free automation audit from Orxivo"
    >
      <div className="final-convergence__grid" aria-hidden="true">
        {Array.from({ length: 12 }, (_, index) => <i key={index} style={{ "--i": index } as React.CSSProperties} />)}
      </div>
      <div className="final-convergence__content">
        <span>SLOW REPLIES COST LEADS</span>
        <SectionHeading cinematic>Missed replies turn into missed revenue. <em>We build the AI system that closes the gap.</em></SectionHeading>
        <p>Book a free automation audit. We map where leads drop off and what a custom AI setup would recover.</p>
        <MagneticButton href="/contact">Request your automation audit</MagneticButton>
      </div>
    </SectionFrame>
  );
}
