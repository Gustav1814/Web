import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { SeoShell } from "@/components/seo/SeoShell";
import { createMetadata } from "@/lib/metadata";
import { blogPostMap, blogPosts, servicePageMap } from "@/lib/seo-content";
import { absoluteUrl, SITE_NAME } from "@/lib/site";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPostMap.get(slug);
  if (!post) return {};
  return {
    ...createMetadata({ title: post.title, description: post.description, path: `/blog/${slug}`, type: "article" }),
    authors: [{ name: "Orxivo" }],
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPostMap.get(slug);
  if (!post) notFound();
  const service = servicePageMap.get(post.service);

  return (
    <SeoShell>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "Article",
        headline: post.title,
        description: post.description,
        datePublished: post.date,
        dateModified: post.date,
        mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
        author: { "@type": "Organization", name: SITE_NAME },
        publisher: { "@type": "Organization", name: SITE_NAME, url: absoluteUrl("/") },
      }} />
      <article className="article">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Insights", href: "/blog" }, { label: post.title, href: `/blog/${post.slug}` }]} />
        <header>
          <span className="seo-eyebrow">AI automation guide</span>
          <h1>{post.title}</h1>
          <p>{post.description}</p>
          <div><span>By Orxivo</span><time dateTime={post.date}>{new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" })}</time><span>{post.readingTime}</span></div>
        </header>
        <div className="article__body">
          <p className="article__lead">{post.intro}</p>
          {post.sections.map((section) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {section.points && <ul>{section.points.map((point) => <li key={point}>{point}</li>)}</ul>}
            </section>
          ))}
          {service && <aside><span>Related service</span><h2>{service.eyebrow}</h2><p>{service.description}</p><Link href={`/${service.slug}`}>Explore this service <span aria-hidden="true">↗</span></Link></aside>}
        </div>
      </article>
      <section className="seo-cta">
        <span>Turn the idea into a working system</span>
        <h2>Discuss your automation workflow with Orxivo.</h2>
        <Link className="seo-button" href="/contact">Book a Strategy Call <span aria-hidden="true">↗</span></Link>
      </section>
    </SeoShell>
  );
}
