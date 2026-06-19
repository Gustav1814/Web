import type { ReactNode } from "react";
import type { SectionId } from "@/lib/constants";

export function SectionFrame({
  id,
  className = "",
  ariaLabel,
  children,
}: {
  id: SectionId;
  className?: string;
  ariaLabel?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} data-section={id} className={`section-frame ${className}`} aria-label={ariaLabel}>
      <div className="section-frame__index">{String(id).toUpperCase()}</div>
      {children}
    </section>
  );
}
