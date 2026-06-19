"use client";

import { motion } from "motion/react";
import { SectionFrame } from "@/components/ui/SectionFrame";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { TextReveal } from "@/components/ui/TextReveal";
import { PremiumProductLayer } from "@/components/three/PremiumProductLayer";
import { DURATION, EASE } from "@/lib/animation";
import { useShouldReduceMotion } from "@/lib/use-mobile";

export function HeroExperience() {
  const reduceMotion = useShouldReduceMotion();

  const mobileTransition = { duration: 0.4, ease: EASE };
  const desktopDelay = (delay: number) => (reduceMotion ? 0.1 : delay);

  return (
    <SectionFrame
      id="hero"
      className="hero-reference hero-reference--fixed"
      ariaLabel="Orxivo AI automation agency for chatbots, voice agents, and workflow systems"
    >
      <div className="hero-reference__top">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={reduceMotion ? mobileTransition : { delay: 1.45 }}
        >
          AI AUTOMATION AGENCY
        </motion.span>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={reduceMotion ? { ...mobileTransition, delay: 0.1 } : { delay: 1.6 }}
        >
          We build AI systems that capture, qualify, and convert leads.
          <br />
          Your team stays focused on closing.
        </motion.p>
      </div>

      <motion.div
        className="hero-reference__wordmark hero-reference__wordmark--single"
        initial={{ opacity: 0, y: reduceMotion ? 20 : 65 }}
        animate={{ opacity: 1, y: 0 }}
        transition={reduceMotion ? { ...mobileTransition, delay: 0.15 } : { delay: 1.55, duration: 1, ease: EASE }}
        aria-label="Orxivo"
      >
        ORXIVO
      </motion.div>

      <div className="hero-reference__intro">
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 10 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={reduceMotion ? { ...mobileTransition, delay: 0.2 } : { delay: 1.9, duration: DURATION.reveal }}
        >
          <span>01 / WHAT WE BUILD</span>
          <TextReveal as="h1" text="AI chatbots, voice agents, and workflow automation for your business." />
        </motion.div>
        <motion.div
          className="hero-reference__intro-copy"
          initial={{ opacity: 0, y: reduceMotion ? 10 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={reduceMotion ? { ...mobileTransition, delay: 0.25 } : { delay: 2.05, duration: DURATION.reveal }}
        >
          <p>
            We design and deploy AI agents that answer inquiries, qualify leads, book appointments,
            and pass serious customers to your team on every channel you use.
          </p>
          <div className="hero-reference__actions">
            <MagneticButton href="#product">See how it works</MagneticButton>
            <MagneticButton href="#final" variant="ghost">Request an automation audit</MagneticButton>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="hero-reference__product hero-reference__product--fixed"
        initial={{ opacity: 0, y: reduceMotion ? 30 : 80, scale: reduceMotion ? 0.99 : 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={reduceMotion ? { ...mobileTransition, delay: 0.3, duration: 0.5 } : { delay: 2.15, duration: 1.1, ease: EASE }}
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

