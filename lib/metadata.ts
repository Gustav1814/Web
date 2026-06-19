import type { Metadata } from "next";
import { absoluteUrl, SITE_NAME } from "@/lib/site";

export function createMetadata({
  title,
  description,
  path,
  type = "website",
}: {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
}): Metadata {
  const url = absoluteUrl(path);
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;

  return {
    title: fullTitle,
    description,
    alternates: { canonical: url },
    openGraph: {
      type,
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      images: [{ url: absoluteUrl("/opengraph-image"), width: 1200, height: 630, alt: `${SITE_NAME} AI automation agency` }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [absoluteUrl("/opengraph-image")],
    },
  };
}
