import type { ReactNode } from "react";
import type { SectionId } from "@/lib/constants";

export function SectionFrame({
  id,
  className = "",
  children,
}: {
  id: SectionId;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} data-section={id} className={`section-frame ${className}`}>
      <div className="section-frame__index">{String(id).toUpperCase()}</div>
      {children}
    </section>
  );
}
