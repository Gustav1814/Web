import type { ReactNode } from "react";
import { SeoFooter } from "@/components/seo/SeoFooter";
import { SeoHeader } from "@/components/seo/SeoHeader";

export function SeoShell({ children }: { children: ReactNode }) {
  return (
    <div className="seo-site">
      <SeoHeader />
      <main id="main-content">{children}</main>
      <SeoFooter />
    </div>
  );
}
