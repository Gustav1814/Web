"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring } from "motion/react";
import { DURATION, EASE } from "@/lib/animation";
import { useIsMobile } from "@/lib/use-mobile";
import type { MouseEvent } from "react";

export function PremiumProductLayer() {
  const isMobile = useIsMobile();
  const rotateX = useSpring(0, { stiffness: 120, damping: 24 });
  const rotateY = useSpring(0, { stiffness: 120, damping: 24 });
  const translateX = useSpring(0, { stiffness: 120, damping: 24 });
  const translateY = useSpring(0, { stiffness: 120, damping: 24 });
  const lightX = useMotionValue(68);
  const lightY = useMotionValue(18);
  const reflection = useMotionTemplate`radial-gradient(560px circle at ${lightX}% ${lightY}%, rgba(255,255,255,.095), transparent 38%)`;

  const onMove = (event: MouseEvent<HTMLDivElement>) => {
    if (isMobile) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;
    rotateY.set((px - 0.5) * 6);
    rotateX.set((0.5 - py) * 5);
    translateX.set((px - 0.5) * 8);
    translateY.set((py - 0.5) * 6);
    lightX.set(px * 100);
    lightY.set(py * 100);
  };

  const reset = () => {
    if (isMobile) return;
    rotateX.set(0);
    rotateY.set(0);
    translateX.set(0);
    translateY.set(0);
    lightX.set(68);
    lightY.set(18);
  };

  return (
    <div className="premium-layer-stage" onMouseMove={onMove} onMouseLeave={reset}>
      <div className="premium-layer-shadow" />
      <motion.div
        className="premium-product-layer"
        animate={isMobile ? undefined : { y: [0, -8, 0] }}
        transition={isMobile ? undefined : { repeat: Infinity, duration: 6, ease: "easeInOut" }}
        style={isMobile ? undefined : {
          rotateX,
          rotateY,
          x: translateX,
          transformPerspective: 1200,
        }}
      >
        {!isMobile && <motion.div className="premium-product-reflection" style={{ background: reflection }} />}

        <header className="premium-product-header">
          <div className="premium-product-brand">
            <span>AX</span>
            <div><strong>Lead operations</strong><small>Live workspace</small></div>
          </div>
          <div className="premium-product-live"><i /> SYSTEM ONLINE</div>
          <button type="button" aria-label="Product menu"><i /><i /><i /></button>
        </header>

        <div className="premium-product-grid">
          <section className="preview-conversation">
            <div className="preview-section-head">
              <span>INCOMING INQUIRY</span>
              <small>WHATSAPP · NOW</small>
            </div>
            <div className="preview-contact">
              <i>SM</i>
              <div><strong>Sarah Mitchell</strong><small>New conversation</small></div>
            </div>
            <div className="preview-chat">
              <motion.div
                className="preview-message customer"
                initial={{ opacity: 0, y: isMobile ? 6 : 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: isMobile ? 0.4 : 2.35, duration: isMobile ? 0.3 : DURATION.reveal, ease: EASE }}
              >
                Hi, do you have weekend IELTS classes near the city center?
              </motion.div>
              <motion.div
                className="preview-message agent"
                initial={{ opacity: 0, y: isMobile ? 6 : 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: isMobile ? 0.6 : 2.8, duration: isMobile ? 0.3 : DURATION.reveal, ease: EASE }}
              >
                Yes. Would you prefer a morning or evening batch?
              </motion.div>
            </div>
            <div className="preview-input"><span>Orxivo is responding...</span><i>↗</i></div>
          </section>

          <section className="preview-lead">
            <div className="preview-section-head">
              <span>LEAD PROFILE</span>
              <b>QUALIFIED</b>
            </div>
            <div className="preview-lead-name">
              <div><strong>Sarah Mitchell</strong><small>#AX-1048 · Education</small></div>
              <em>92</em>
            </div>
            <dl>
              <div><dt>Course</dt><dd>IELTS</dd></div>
              <div><dt>Location</dt><dd>City center</dd></div>
              <div><dt>Mode</dt><dd>Physical</dd></div>
              <div><dt>Batch</dt><dd>Weekend</dd></div>
            </dl>
            <div className="preview-booking">
              <span><i>✓</i> DEMO BOOKED</span>
              <strong>Saturday · 11:30 AM</strong>
              <small>Confirmation sent automatically</small>
            </div>
          </section>
        </div>

        <footer className="premium-product-footer">
          <div><span>FOLLOW-UP</span><strong>Reminder scheduled</strong><small>Tomorrow · 10:00 AM</small></div>
          <div className="preview-connector"><i /><span /><i /></div>
          <div><span>HUMAN HANDOFF</span><strong>Counselor queue</strong><small>Full context attached</small></div>
          <button type="button">OPEN LEAD <span>↗</span></button>
        </footer>

        <motion.div
          className="qualification-float"
          initial={{ opacity: 0, x: isMobile ? 8 : 15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: isMobile ? 0.7 : 3.15, duration: isMobile ? 0.3 : DURATION.reveal, ease: EASE }}
        >
          <i />
          <div><span>QUALIFICATION COMPLETE</span><strong>High intent lead</strong></div>
        </motion.div>
      </motion.div>
    </div>
  );
}
