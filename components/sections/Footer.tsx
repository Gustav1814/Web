"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { DURATION, EASE, STAGGER } from "@/lib/animation";

export function Footer() {
  return (
    <footer className="footer">
      <Reveal className="footer__brand">
        <span>ORXIVO</span>
        <p>Global AI Automation Systems. Pronounced ORK-see-voh.</p>
      </Reveal>
      <nav>
        {[
          ["/ai-automation-agency", "Services"],
          ["/case-studies", "Case Studies"],
          ["/pricing", "Pricing"],
          ["/blog", "Insights"],
          ["/contact", "Contact"],
        ].map(([href, label], index) => (
          <motion.span
            key={href}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * STAGGER, duration: DURATION.reveal, ease: EASE }}
          >
            <Link href={href}>{label}</Link>
          </motion.span>
        ))}
      </nav>
      <Reveal className="footer__bottom" delay={0.2}>
        <span>© 2026 ORXIVO SYSTEMS</span>
        <span>REMOTE-FIRST DELIVERY / BUSINESSES WORLDWIDE</span>
      </Reveal>
    </footer>
  );
}
