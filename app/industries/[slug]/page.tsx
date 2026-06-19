import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { IndustryPage } from "@/components/seo/IndustryPage";
import { createMetadata } from "@/lib/metadata";
import { industryPageMap, industryPages } from "@/lib/seo-content";

export function generateStaticParams() {
  return industryPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = industryPageMap.get(slug);
  if (!page) return {};
  return createMetadata({ title: page.title, description: page.description, path: `/industries/${page.slug}` });
}

export default async function IndustryRoute({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = industryPageMap.get(slug);
  if (!page) notFound();
  return <IndustryPage page={page} />;
}
