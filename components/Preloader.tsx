"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useLenis } from "@/lib/lenis-context";

export function Preloader() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const { setScrollLocked } = useLenis();

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setScrollLocked(false);
      return;
    }

    setScrollLocked(true);
    const started = performance.now();
    const duration = 1450;
    let frame = 0;
    const update = (now: number) => {
      const value = Math.min((now - started) / duration, 1);
      setProgress(Math.round(value * 100));
      if (value < 1) frame = requestAnimationFrame(update);
    };
    frame = requestAnimationFrame(update);
    const timeout = window.setTimeout(() => {
      setVisible(false);
      setScrollLocked(false);
    }, duration + 120);
    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(timeout);
    };
  }, [setScrollLocked]);

  const dismiss = () => {
    setVisible(false);
    setScrollLocked(false);
  };

  return (
    <AnimatePresence onExitComplete={() => setScrollLocked(false)}>
      {visible && (
        <motion.div
          className="preloader preloader--reference"
          initial={{ opacity: 1 }}
          exit={{ clipPath: "inset(0 0 100% 0)", filter: "blur(10px)" }}
          transition={{ duration: 0.95, ease: [0.76, 0, 0.24, 1] }}
          onClick={dismiss}
        >
          <div className="preloader-reference__top">
            <span>ORXIVO / AI FRONT OFFICE</span>
            <span>INITIALIZING</span>
          </div>
          <div className="preloader-reference__word" aria-hidden="true">
            {"ORXIVO".split("").map((letter, index) => (
              <motion.span
                key={letter + index}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.12 + index * 0.08, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              >
                {letter}
              </motion.span>
            ))}
          </div>
          <div className="preloader-reference__bottom">
            <span>CONVERSATION SYSTEM</span>
            <strong>{String(progress).padStart(3, "0")}</strong>
          </div>
          <i style={{ transform: `scaleX(${progress / 100})` }} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
