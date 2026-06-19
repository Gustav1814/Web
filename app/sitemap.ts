import type { MetadataRoute } from "next";
import { blogPosts, industryPages, servicePages } from "@/lib/seo-content";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticPages = [
    { path: "/", priority: 1, changeFrequency: "monthly" as const },
    { path: "/case-studies", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/pricing", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/blog", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/contact", priority: 0.8, changeFrequency: "yearly" as const },
    { path: "/industries", priority: 0.8, changeFrequency: "monthly" as const },
  ];

  return [
    ...staticPages.map((page) => ({ url: absoluteUrl(page.path), lastModified: now, changeFrequency: page.changeFrequency, priority: page.priority })),
    ...servicePages.map((page) => ({ url: absoluteUrl(`/${page.slug}`), lastModified: now, changeFrequency: "monthly" as const, priority: 0.9 })),
    ...industryPages.map((page) => ({ url: absoluteUrl(`/industries/${page.slug}`), lastModified: now, changeFrequency: "monthly" as const, priority: 0.85 })),
    ...blogPosts.map((post) => ({ url: absoluteUrl(`/blog/${post.slug}`), lastModified: new Date(post.date), changeFrequency: "yearly" as const, priority: 0.7 })),
  ];
}
