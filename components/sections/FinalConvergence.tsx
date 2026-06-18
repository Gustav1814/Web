"use client";

import { SectionFrame } from "@/components/ui/SectionFrame";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function FinalConvergence() {
  return (
    <SectionFrame id="final" className="final-convergence">
      <div className="final-convergence__grid" aria-hidden="true">
        {Array.from({ length: 12 }, (_, index) => <i key={index} style={{ "--i": index } as React.CSSProperties} />)}
      </div>
      <div className="final-convergence__content">
        <span>THE GAP IS MEASURABLE</span>
        <SectionHeading cinematic>Every missed reply is a lost customer. <em>Axio closes the gap.</em></SectionHeading>
        <p>Build the front office that answers while intent is still alive.</p>
        <MagneticButton href="mailto:hello@axio.systems?subject=Build%20my%20Axio%20demo">Build my demo</MagneticButton>
      </div>
    </SectionFrame>
  );
}
