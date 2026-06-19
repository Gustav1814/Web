import type { Metadata } from "next";
import { Geist, Space_Grotesk } from "next/font/google";
import { JsonLd } from "@/components/seo/JsonLd";
import { TrackingScripts } from "@/components/seo/TrackingScripts";
import { absoluteUrl, SITE_NAME, SITE_URL } from "@/lib/site";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist", display: "swap" });
const space = Space_Grotesk({ subsets: ["latin"], variable: "--font-space", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "Orxivo | Global AI Automation Agency", template: "%s" },
  description: "Orxivo builds AI chatbots, voice agents, lead generation systems, CRM automations, and workflow automation tools for businesses worldwide.",
  applicationName: SITE_NAME,
  category: "technology",
  creator: SITE_NAME,
  publisher: SITE_NAME,
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  verification: { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION },
  icons: { icon: "/icon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} ${space.variable}`}>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <JsonLd data={[
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            name: SITE_NAME,
            url: SITE_URL,
            email: "hello@orxivo.systems",
            logo: absoluteUrl("/icon.svg"),
            description: "Orxivo is a global AI automation agency building AI chatbots, voice agents, calling agents, lead generation automations, customer support automations, CRM workflows, and business automation systems.",
            areaServed: "Worldwide",
            sameAs: [
              process.env.NEXT_PUBLIC_LINKEDIN_URL,
              process.env.NEXT_PUBLIC_GITHUB_URL,
              process.env.NEXT_PUBLIC_X_URL,
            ].filter(Boolean),
          },
          { "@context": "https://schema.org", "@type": "WebSite", name: SITE_NAME, url: SITE_URL },
        ]} />
        {children}
        <TrackingScripts />
      </body>
    </html>
  );
}
