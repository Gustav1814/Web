"use client";

import { motion } from "motion/react";
import { SectionFrame } from "@/components/ui/SectionFrame";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { TextReveal } from "@/components/ui/TextReveal";
import { PremiumProductLayer } from "@/components/three/PremiumProductLayer";
import { DURATION, EASE } from "@/lib/animation";

export function HeroExperience() {
  return (
    <SectionFrame id="hero" className="hero-reference hero-reference--fixed">
      <div className="hero-reference__top">
        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.45 }}>
          AI FRONT OFFICE SYSTEM
        </motion.span>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6 }}>
          Inquiry to qualified opportunity—
          <br />
          handled in one controlled system.
        </motion.p>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.75 }}>
          KARACHI / GLOBAL
          <br />
          2026
        </motion.div>
      </div>

      <motion.div
        className="hero-reference__wordmark hero-reference__wordmark--single"
        initial={{ opacity: 0, y: 65 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.55, duration: 1, ease: EASE }}
        aria-label="Orxivo"
      >
        ORXIVO
      </motion.div>

      <div className="hero-reference__intro">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.9, duration: DURATION.reveal }}
        >
          <span>01 / PRODUCT</span>
          <TextReveal as="h1" text="Your front office, rebuilt with AI." />
        </motion.div>
        <motion.div
          className="hero-reference__intro-copy"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.05, duration: DURATION.reveal }}
        >
          <p>
            Orxivo answers inquiries, qualifies leads, books appointments, follows up,
            and hands serious customers to your team automatically.
          </p>
          <div className="hero-reference__actions">
            <MagneticButton href="#product">View the system</MagneticButton>
            <MagneticButton href="#final" variant="ghost">Book a demo</MagneticButton>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="hero-reference__product hero-reference__product--fixed"
        initial={{ opacity: 0, y: 80, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 2.15, duration: 1.1, ease: EASE }}
      >
        <PremiumProductLayer />
      </motion.div>

      <div className="hero-reference__scroll">
        <span>SCROLL TO EXPLORE</span>
        <i />
      </div>
    </SectionFrame>
  );
}

