import Link from "next/link";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { SeoShell } from "@/components/seo/SeoShell";
import type { ServicePage as ServicePageData } from "@/lib/seo-content";
import { industryPages, servicePageMap } from "@/lib/seo-content";
import { absoluteUrl, SITE_NAME } from "@/lib/site";

export function ServicePage({ page }: { page: ServicePageData }) {
  return (
    <SeoShell>
      <JsonLd data={[
        {
          "@context": "https://schema.org",
          "@type": "Service",
          name: page.title,
          description: page.description,
          url: absoluteUrl(`/${page.slug}`),
          provider: { "@type": "Organization", name: SITE_NAME, url: absoluteUrl("/") },
          areaServed: "Worldwide",
          serviceType: page.eyebrow,
        },
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: page.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: { "@type": "Answer", text: faq.answer },
          })),
        },
      ]} />

      <section className="seo-hero">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: page.eyebrow, href: `/${page.slug}` }]} />
        <span className="seo-eyebrow">{page.eyebrow}</span>
        <h1>{page.title}</h1>
        <p>{page.intro}</p>
        <div className="seo-actions">
          <Link className="seo-button" href="/contact">Get an Automation Audit <span aria-hidden="true">↗</span></Link>
          <Link className="seo-button seo-button--ghost" href="/case-studies">View Case Studies</Link>
        </div>
      </section>

      <section className="seo-section service-context">
        <article>
          <span className="seo-kicker">The problem</span>
          <h2>Manual handoffs create delays and lost context</h2>
          <p>{page.problem ?? `Businesses often lose time and opportunities when ${page.eyebrow.toLowerCase()} depends on slow replies, disconnected tools, repetitive administration, and inconsistent follow-up.`}</p>
        </article>
        <article>
          <span className="seo-kicker">The solution</span>
          <h2>A connected system with clear business controls</h2>
          <p>{page.solution ?? `${page.intro} Orxivo combines AI, workflow logic, integrations, and human escalation so the system remains useful in real operations.`}</p>
        </article>
      </section>

      <section className="seo-section seo-section--split">
        <div><span className="seo-kicker">Business outcomes</span><h2>Built to improve speed, consistency, and visibility</h2></div>
        <ul className="seo-benefits">{page.benefits.map((benefit) => <li key={benefit}>{benefit}</li>)}</ul>
      </section>

      <section className="seo-section">
        <span className="seo-kicker">Use cases</span>
        <h2>Where this system creates value</h2>
        <div className="seo-card-grid">
          {page.useCases.map((item, index) => <article key={item.title}><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.copy}</p></article>)}
        </div>
      </section>

      <section className="seo-section">
        <span className="seo-kicker">How it works</span>
        <h2>From customer or team input to a reliable next action</h2>
        <ol className="seo-process seo-process--light">
          {(page.howItWorks ?? [
            "A customer, lead, team member, or system event starts the workflow.",
            "AI and business rules interpret the request and identify the permitted next step.",
            "Connected tools provide context and complete approved actions.",
            "The result is recorded, monitored, and escalated when human judgment is needed.",
          ]).map((item, index) => <li key={item}><span>0{index + 1}</span><div><h3>{item}</h3></div></li>)}
        </ol>
      </section>

      <section className="seo-section seo-section--dark">
        <span className="seo-kicker">Our process</span>
        <h2>From workflow audit to a controlled launch</h2>
        <ol className="seo-process">
          {page.process.map((item, index) => <li key={item.title}><span>0{index + 1}</span><div><h3>{item.title}</h3><p>{item.copy}</p></div></li>)}
        </ol>
      </section>

      <section className="seo-section seo-section--split">
        <div><span className="seo-kicker">Why Orxivo</span><h2>A global, remote-first automation partner</h2><p className="seo-section-copy">Orxivo works with international clients through a clear process, timezone-flexible communication, English-first delivery, and systems designed around business outcomes rather than tool demos.</p></div>
        <ul className="seo-benefits">{(page.whyOrxivo ?? ["Custom systems built around your workflow", "Remote-first delivery for businesses worldwide", "Privacy, security, and human controls considered early", "Technical capability across AI, CRM, automation, web, and dashboards"]).map((item) => <li key={item}>{item}</li>)}</ul>
      </section>

      <section className="seo-section">
        <span className="seo-kicker">Frequently asked questions</span>
        <h2>What businesses ask before starting</h2>
        <div className="seo-faqs">
          {page.faqs.map((faq) => <details key={faq.question}><summary><span>{faq.question}</span><span aria-hidden="true">+</span></summary><p>{faq.answer}</p></details>)}
        </div>
      </section>

      <section className="seo-section seo-related">
        <span className="seo-kicker">Related services</span>
        <h2>Explore the wider Orxivo system</h2>
        <div>
          {page.related.map((slug) => {
            const related = servicePageMap.get(slug);
            return related ? <Link key={slug} href={`/${slug}`}>{related.eyebrow}<span aria-hidden="true">↗</span></Link> : null;
          })}
        </div>
      </section>

      <section className="seo-section seo-related">
        <span className="seo-kicker">Industry applications</span>
        <h2>Automation for different operating models</h2>
        <div>{industryPages.slice(0, 3).map((industry) => <Link key={industry.slug} href={`/industries/${industry.slug}`}>{industry.name}<span aria-hidden="true">↗</span></Link>)}</div>
      </section>

      <section className="seo-cta">
        <span>Have a workflow worth improving?</span>
        <h2>Let’s identify the highest-value automation opportunity.</h2>
        <Link className="seo-button" href="/contact">Book a Strategy Call <span aria-hidden="true">↗</span></Link>
      </section>
    </SeoShell>
  );
}
