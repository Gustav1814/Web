import Link from "next/link";
import { CONTACT_EMAIL, primaryNav, serviceNav } from "@/lib/site";

export function SeoFooter() {
  return (
    <footer className="seo-footer">
      <div>
        <Link className="seo-footer__brand" href="/">ORXIVO</Link>
        <p>Orxivo (pronounced ORK-see-voh) builds global AI automation systems for sales, support, operations, and digital products.</p>
      </div>
      <div>
        <strong>Services</strong>
        {serviceNav.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
      </div>
      <div>
        <strong>Company</strong>
        {primaryNav.slice(1).map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
      </div>
      <small>© 2026 Orxivo Systems. Remote-first delivery · Available worldwide.</small>
    </footer>
  );
}
