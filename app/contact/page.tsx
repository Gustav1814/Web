import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { ContactForm } from "@/components/seo/ContactForm";
import { SeoShell } from "@/components/seo/SeoShell";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Contact Orxivo for a Global AI Automation Project",
  description: "Book an Orxivo strategy call for AI chatbots, voice agents, CRM automation, workflow automation, lead systems, websites, and SaaS dashboards.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <SeoShell>
      <section className="seo-hero seo-hero--compact">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact", href: "/contact" }]} />
        <span className="seo-eyebrow">Start a project</span>
        <h1>Tell us which workflow, bottleneck, or digital product matters most</h1>
        <p>Share the current process and desired outcome. We’ll identify whether a focused pilot, connected automation system, or custom product is the right next step for your global team.</p>
      </section>
      <section className="seo-section contact-layout">
        <div>
          <span className="seo-kicker">Project inquiry</span>
          <h2>Request an automation audit</h2>
          <p>Orxivo works remotely with businesses worldwide through a clear process, timezone-flexible communication, and privacy-aware implementation. For direct contact, email <a href="mailto:hello@orxivo.systems">hello@orxivo.systems</a>.</p>
        </div>
        <ContactForm />
      </section>
    </SeoShell>
  );
}
