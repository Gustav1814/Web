import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { SeoShell } from "@/components/seo/SeoShell";
import { createMetadata } from "@/lib/metadata";
import { industryPages } from "@/lib/seo-content";

export const metadata: Metadata = createMetadata({
  title: "AI Automation for Real Estate, Clinics, Ecommerce, Agencies & SaaS",
  description: "Explore Orxivo AI automation systems for real estate teams, clinics, ecommerce brands, agencies, and SaaS companies worldwide.",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <SeoShell>
      <section className="seo-hero seo-hero--compact">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Industries", href: "/industries" }]} />
        <span className="seo-eyebrow">Industries</span>
        <h1>AI automation systems shaped around how your industry operates</h1>
        <p>Orxivo adapts conversation, CRM, support, booking, and operational workflows to the practical requirements of growing businesses worldwide.</p>
      </section>
      <section className="seo-section">
        <div className="industry-grid">
          {industryPages.map((industry, index) => (
            <article key={industry.slug}>
              <span>0{index + 1}</span><h2><Link href={`/industries/${industry.slug}`}>{industry.name}</Link></h2>
              <p>{industry.description}</p><Link href={`/industries/${industry.slug}`}>Explore industry workflows <span aria-hidden="true">↗</span></Link>
            </article>
          ))}
        </div>
      </section>
      <section className="seo-cta"><span>Remote-first global delivery</span><h2>Bring us the workflow, not a generic industry template.</h2><Link className="seo-button" href="/contact">Book a Strategy Call <span aria-hidden="true">↗</span></Link></section>
    </SeoShell>
  );
}
