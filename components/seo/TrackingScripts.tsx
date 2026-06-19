"use client";

import Script from "next/script";
import { useEffect } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function TrackingScripts() {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = (event.target as HTMLElement).closest<HTMLElement>("[data-conversion]");
      if (!target) return;
      window.gtag?.("event", target.dataset.conversion || "conversion", {
        event_category: "conversion",
        event_label: target.textContent?.trim(),
      });
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  if (!gaId) return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
      <Script id="orxivo-ga4" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}window.gtag=gtag;gtag('js',new Date());gtag('config','${gaId}',{anonymize_ip:true});`}
      </Script>
    </>
  );
}
