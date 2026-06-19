import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { SeoShell } from "@/components/seo/SeoShell";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "AI Automation Case Studies",
  description: "Explore representative Orxivo AI automation systems for lead qualification, appointment booking, customer support, and operational dashboards.",
  path: "/case-studies",
});

const cases = [
  { sector: "Education", title: "Inquiry-to-enrollment automation", result: "A connected chatbot, qualification flow, demo booking system, and counselor handoff.", metrics: ["Instant first response", "Structured lead records", "Automated demo booking"], href: "/ai-lead-generation-automation" },
  { sector: "Professional services", title: "AI receptionist and booking workflow", result: "An inbound voice workflow for intent capture, scheduling, reminders, and human transfer.", metrics: ["After-hours coverage", "Calendar integration", "Clear call outcomes"], href: "/ai-calling-agents" },
  { sector: "Customer operations", title: "Support triage and response system", result: "A grounded support assistant that resolves common questions and routes complex cases with context.", metrics: ["Faster triage", "Consistent answers", "Human escalation"], href: "/ai-customer-support-automation" },
  { sector: "Agency operations", title: "CRM follow-up and client onboarding workflow", result: "A project-style example connecting lead qualification, CRM tasks, onboarding requests, reminders, and delivery handoff.", metrics: ["Structured qualification", "Automated follow-up", "Tracked onboarding"], href: "/crm-automation" },
];

export default function CaseStudiesPage() {
  return (
    <SeoShell>
      <section className="seo-hero seo-hero--compact">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Case Studies", href: "/case-studies" }]} />
        <span className="seo-eyebrow">Project examples</span>
        <h1>AI automation systems designed around measurable workflows</h1>
        <p>These are clearly labeled representative project examples—not client claims, testimonials, or invented performance results. They show how Orxivo can connect conversations, data, automations, and human teams.</p>
      </section>
      <section className="seo-section case-grid">
        {cases.map((item, index) => (
          <article key={item.title}>
            <span>0{index + 1} / {item.sector}</span><h2>{item.title}</h2><p>{item.result}</p>
            <ul>{item.metrics.map((metric) => <li key={metric}>{metric}</li>)}</ul>
            <Link href={item.href}>Explore related service <span aria-hidden="true">↗</span></Link>
          </article>
        ))}
      </section>
      <section className="seo-cta"><span>Your workflow is different</span><h2>Let’s map the system your business actually needs.</h2><Link className="seo-button" href="/contact">Get an Automation Audit <span aria-hidden="true">↗</span></Link></section>
    </SeoShell>
  );
}
