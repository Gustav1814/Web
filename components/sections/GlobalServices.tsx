import Link from "next/link";
import { servicePages } from "@/lib/seo-content";

export function GlobalServices() {
  return (
    <section className="global-services" aria-labelledby="global-services-title">
      <div>
        <span>GLOBAL AI AUTOMATION SERVICES</span>
        <h2 id="global-services-title">Custom systems for sales, support, CRM, and operations</h2>
        <p>Explore Orxivo services for businesses worldwide, delivered through a remote-first process.</p>
      </div>
      <nav aria-label="Orxivo services">
        {servicePages.map((service, index) => (
          <Link key={service.slug} href={`/${service.slug}`}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{service.eyebrow}</strong>
            <i aria-hidden="true">↗</i>
          </Link>
        ))}
      </nav>
    </section>
  );
}
