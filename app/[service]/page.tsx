import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicePage } from "@/components/seo/ServicePage";
import { createMetadata } from "@/lib/metadata";
import { servicePageMap, servicePages } from "@/lib/seo-content";

export function generateStaticParams() {
  return servicePages.map((page) => ({ service: page.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ service: string }> }): Promise<Metadata> {
  const { service } = await params;
  const page = servicePageMap.get(service);
  if (!page) return {};
  return createMetadata({ title: page.title, description: page.description, path: `/${page.slug}` });
}

export default async function ServiceRoute({ params }: { params: Promise<{ service: string }> }) {
  const { service } = await params;
  const page = servicePageMap.get(service);
  if (!page) notFound();
  return <ServicePage page={page} />;
}
