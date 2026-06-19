import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { SeoShell } from "@/components/seo/SeoShell";
import { createMetadata } from "@/lib/metadata";
import { blogPosts } from "@/lib/seo-content";

export const metadata: Metadata = createMetadata({
  title: "AI Automation Insights and Guides",
  description: "Practical guides on AI chatbots, voice agents, lead generation automation, customer support systems, and business workflows.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <SeoShell>
      <section className="seo-hero seo-hero--compact">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Insights", href: "/blog" }]} />
        <span className="seo-eyebrow">Orxivo insights</span>
        <h1>Practical AI automation guides for growing businesses</h1>
        <p>Clear thinking on chatbots, voice agents, lead systems, customer support, and operational automation.</p>
      </section>
      <section className="seo-section">
        <div className="blog-grid">
          {blogPosts.map((post) => (
            <article key={post.slug}>
              <span>{new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" })} · {post.readingTime}</span>
              <h2><Link href={`/blog/${post.slug}`}>{post.title}</Link></h2>
              <p>{post.description}</p>
              <Link href={`/blog/${post.slug}`}>Read guide <span aria-hidden="true">↗</span></Link>
            </article>
          ))}
        </div>
      </section>
      <section className="seo-cta">
        <span>Need an expert view of your workflow?</span>
        <h2>Get a focused automation audit from Orxivo.</h2>
        <Link className="seo-button" href="/contact">Start a Project <span aria-hidden="true">↗</span></Link>
      </section>
    </SeoShell>
  );
}
