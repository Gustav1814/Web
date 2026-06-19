import Link from "next/link";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { SeoShell } from "@/components/seo/SeoShell";
import type { IndustryPage as IndustryPageData } from "@/lib/seo-content";
import { servicePageMap } from "@/lib/seo-content";
import { absoluteUrl, SITE_NAME } from "@/lib/site";

export function IndustryPage({ page }: { page: IndustryPageData }) {
  return (
    <SeoShell>
      <JsonLd data={[
        {
          "@context": "https://schema.org",
          "@type": "Service",
          name: page.title,
          description: page.description,
          url: absoluteUrl(`/industries/${page.slug}`),
          provider: { "@type": "Organization", name: SITE_NAME, url: absoluteUrl("/") },
          areaServed: "Worldwide",
          audience: { "@type": "BusinessAudience", industry: page.name },
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
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Industries", href: "/industries" }, { label: page.name, href: `/industries/${page.slug}` }]} />
        <span className="seo-eyebrow">AI automation for {page.name}</span>
        <h1>{page.title}</h1>
        <p>{page.intro}</p>
        <div className="seo-actions">
          <Link className="seo-button" href="/contact" data-conversion="booking_click">Book a Strategy Call <span aria-hidden="true">↗</span></Link>
          <Link className="seo-button seo-button--ghost" href="/ai-automation-agency">Explore Services</Link>
        </div>
      </section>

      <section className="seo-section seo-section--split">
        <div><span className="seo-kicker">Industry challenges</span><h2>Where growth creates operational pressure</h2></div>
        <ul className="seo-benefits">{page.problems.map((problem) => <li key={problem}>{problem}</li>)}</ul>
      </section>

      <section className="seo-section">
        <span className="seo-kicker">Automation use cases</span><h2>Workflows Orxivo can automate</h2>
        <div className="seo-card-grid">{page.workflows.map((item, index) => <article key={item.title}><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.copy}</p></article>)}</div>
      </section>

      <section className="seo-section seo-section--dark seo-section--split">
        <div><span className="seo-kicker">Expected outcomes</span><h2>Business results the system is designed to support</h2></div>
        <ul className="seo-benefits seo-benefits--dark">{page.outcomes.map((outcome) => <li key={outcome}>{outcome}</li>)}</ul>
      </section>

      <section className="seo-section">
        <span className="seo-kicker">Example builds</span><h2>Systems we can design for {page.name.toLowerCase()} teams</h2>
        <div className="industry-systems">{page.systems.map((system) => <div key={system}><span aria-hidden="true">↗</span><h3>{system}</h3></div>)}</div>
      </section>

      <section className="seo-section">
        <span className="seo-kicker">Frequently asked questions</span><h2>Planning automation for your industry</h2>
        <div className="seo-faqs">{page.faqs.map((faq) => <details key={faq.question}><summary><span>{faq.question}</span><span aria-hidden="true">+</span></summary><p>{faq.answer}</p></details>)}</div>
      </section>

      <section className="seo-section seo-related">
        <span className="seo-kicker">Related services</span><h2>Build the right combination of systems</h2>
        <div>{page.relatedServices.map((slug) => {
          const service = servicePageMap.get(slug);
          return service ? <Link key={slug} href={`/${slug}`}>{service.eyebrow}<span aria-hidden="true">↗</span></Link> : null;
        })}</div>
      </section>

      <section className="seo-cta">
        <span>Built for businesses worldwide</span><h2>Discuss the workflow that is limiting your team.</h2>
        <Link className="seo-button" href="/contact">Discuss Your Workflow <span aria-hidden="true">↗</span></Link>
      </section>
    </SeoShell>
  );
}
