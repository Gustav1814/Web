"use client";

import { useState } from "react";
import { motion, useMotionValueEvent, useScroll, useSpring } from "motion/react";
import { useAxioStore } from "@/lib/store";
import { ScrollLink } from "@/components/ui/ScrollLink";
import { NAV_ITEMS } from "@/lib/constants";

const DARK_SECTIONS = new Set(["problem", "product", "niches", "trust", "pricing"]);

export function Navbar() {
  const activeSection = useAxioStore((state) => state.activeSection);
  const dark = DARK_SECTIONS.has(activeSection);
  const { scrollY, scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 130, damping: 28, mass: 0.35 });
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (value) => {
    setScrolled(value > 40);
  });

  return (
    <motion.header
      className={`navbar navbar--reference ${dark ? "navbar--on-dark" : "navbar--on-light"} ${scrolled ? "navbar--scrolled" : ""}`}
      initial={false}
    >
      <ScrollLink className="reference-logo" href="#hero" aria-label="Orxivo home">
        ORXIVO<span>®</span>
      </ScrollLink>
      <nav>
        {NAV_ITEMS.map((item) => {
          const sectionId = item.href.replace("#", "");
          const isActive = activeSection === sectionId;
          return (
            <ScrollLink
              key={item.href}
              href={item.href}
              aria-current={isActive ? "page" : undefined}
              className={isActive ? "is-active" : ""}
            >
              {item.label}
              {isActive && <motion.i layoutId="nav-active" className="navbar-active-line" />}
            </ScrollLink>
          );
        })}
      </nav>
      <ScrollLink
        className="reference-project-link"
        href="/contact"
        data-conversion="booking_click"
      >
        START A PROJECT <i>↗</i>
      </ScrollLink>
      <motion.div className="navbar-progress" style={{ scaleX: progress }} />
    </motion.header>
  );
}
