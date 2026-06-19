import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { SeoShell } from "@/components/seo/SeoShell";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "AI Automation Pricing and Project Options",
  description: "Explore Orxivo project options for AI automation pilots, connected business systems, websites, SaaS dashboards, and ongoing optimization.",
  path: "/pricing",
});

const plans = [
  { name: "Automation Pilot", fit: "One focused workflow", copy: "Validate a high-value chatbot, voice, lead, support, or internal automation use case.", features: ["Workflow audit", "System design", "Focused implementation", "Testing and launch"], cta: "Scope a Pilot" },
  { name: "Connected System", fit: "Multi-step operations", copy: "Build an integrated automation system across channels, CRM, calendars, data, and team handoffs.", features: ["Multiple workflows", "Custom integrations", "Operational dashboard", "Launch and optimization"], cta: "Plan the System" },
  { name: "Digital Product", fit: "Websites and SaaS", copy: "Design and build a premium website, portal, dashboard, or focused SaaS product.", features: ["Product strategy", "UX and visual design", "Development", "Performance and SEO QA"], cta: "Discuss a Product" },
];

export default function PricingPage() {
  return (
    <SeoShell>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
        { "@type": "Question", name: "How much does an AI automation project cost?", acceptedAnswer: { "@type": "Answer", text: "Pricing depends on workflow complexity, integrations, data, channels, risk, and required interfaces. Orxivo scopes projects after a short discovery conversation." } },
        { "@type": "Question", name: "Can we start with a small pilot?", acceptedAnswer: { "@type": "Answer", text: "Yes. A focused pilot is often the best way to validate technical feasibility and business value before expanding." } },
      ] }} />
      <section className="seo-hero seo-hero--compact">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Pricing", href: "/pricing" }]} />
        <span className="seo-eyebrow">Project options</span><h1>Scope matched to the workflow, not a generic software package</h1>
        <p>Every Orxivo engagement is shaped around the business process, integrations, risk, and outcome. Start focused, prove value, then expand.</p>
      </section>
      <section className="seo-section pricing-grid">
        {plans.map((plan, index) => <article key={plan.name} className={index === 1 ? "is-featured" : ""}><span>{plan.fit}</span><h2>{plan.name}</h2><p>{plan.copy}</p><ul>{plan.features.map((feature) => <li key={feature}>{feature}</li>)}</ul><Link className="seo-button" href="/contact">{plan.cta} <span aria-hidden="true">↗</span></Link></article>)}
      </section>
      <section className="seo-section seo-section--split"><div><span className="seo-kicker">Pricing factors</span><h2>What shapes the investment</h2></div><ul className="seo-benefits"><li>Number of channels and workflows</li><li>Integration and data complexity</li><li>Custom interface requirements</li><li>Compliance, monitoring, and support needs</li></ul></section>
      <section className="seo-cta"><span>Get a useful estimate</span><h2>Share the workflow and we’ll define the right starting scope.</h2><Link className="seo-button" href="/contact">Book a Strategy Call <span aria-hidden="true">↗</span></Link></section>
    </SeoShell>
  );
}
