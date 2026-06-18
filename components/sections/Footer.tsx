"use client";

import { motion } from "motion/react";
import { ScrollLink } from "@/components/ui/ScrollLink";
import { Reveal } from "@/components/ui/Reveal";
import { DURATION, EASE, STAGGER } from "@/lib/animation";

export function Footer() {
  return (
    <footer className="footer">
      <Reveal className="footer__brand">
        <span>AXIO</span>
        <p>AI Front Office Systems.</p>
      </Reveal>
      <nav>
        {[
          ["#product", "Product"],
          ["#niches", "Niches"],
          ["#architecture", "Architecture"],
          ["#final", "Demo"],
          ["mailto:hello@axio.systems", "Contact"],
        ].map(([href, label], index) =>
          href.startsWith("mailto:") ? (
            <motion.a
              key={href}
              href={href}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * STAGGER, duration: DURATION.reveal, ease: EASE }}
            >
              {label}
            </motion.a>
          ) : (
            <motion.span
              key={href}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * STAGGER, duration: DURATION.reveal, ease: EASE }}
            >
              <ScrollLink href={href}>{label}</ScrollLink>
            </motion.span>
          ),
        )}
      </nav>
      <Reveal className="footer__bottom" delay={0.2}>
        <span>© 2026 AXIO SYSTEMS</span>
        <span>KARACHI · PAKISTAN / AVAILABLE GLOBALLY</span>
      </Reveal>
    </footer>
  );
}
