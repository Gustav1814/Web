import Link from "next/link";
import { primaryNav } from "@/lib/site";

export function SeoHeader() {
  return (
    <header className="seo-header">
      <Link className="seo-logo" href="/" aria-label="Orxivo home">ORXIVO<sup>®</sup></Link>
      <nav aria-label="Main navigation">
        {primaryNav.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
      </nav>
      <Link className="seo-header__cta" href="/contact" data-conversion="booking_click">Book a Strategy Call <span aria-hidden="true">↗</span></Link>
    </header>
  );
}
