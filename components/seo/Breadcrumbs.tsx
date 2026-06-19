import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import { absoluteUrl } from "@/lib/site";

export function Breadcrumbs({ items }: { items: { label: string; href: string }[] }) {
  return (
    <>
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        {items.map((item, index) => (
          <span key={item.href}>
            {index > 0 && <i aria-hidden="true">/</i>}
            {index === items.length - 1 ? <span aria-current="page">{item.label}</span> : <Link href={item.href}>{item.label}</Link>}
          </span>
        ))}
      </nav>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.label,
          item: absoluteUrl(item.href),
        })),
      }} />
    </>
  );
}
