export const EASE = [0.16, 1, 0.3, 1] as const;

export const DURATION = {
  reveal: 0.85,
  hover: 0.55,
  micro: 0.35,
} as const;

export const STAGGER = 0.08;

export const fadeUp = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-10%" },
  transition: { duration: DURATION.reveal, ease: EASE },
};

export const staggerContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: STAGGER, delayChildren: 0.04 },
  },
};

export const fadeUpItem = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: DURATION.reveal, ease: EASE } },
};

export const clipReveal = {
  initial: { opacity: 0, y: "110%" },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.18, margin: "0px 0px -24% 0px" },
  transition: { duration: DURATION.reveal, ease: EASE },
};

export const lineReveal = {
  initial: { scaleX: 0 },
  whileInView: { scaleX: 1 },
  viewport: { once: true, margin: "-10%" },
  transition: { duration: DURATION.reveal, ease: EASE },
};
