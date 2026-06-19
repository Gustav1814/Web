export const EASE = [0.16, 1, 0.3, 1] as const;

export const DURATION = {
  reveal: 0.85,
  hover: 0.55,
  micro: 0.35,
} as const;

export const DURATION_MOBILE = {
  reveal: 0.45,
  hover: 0.25,
  micro: 0.2,
} as const;

export const STAGGER = 0.08;
export const STAGGER_MOBILE = 0.04;

export const fadeUp = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-10%" },
  transition: { duration: DURATION.reveal, ease: EASE },
};

export const fadeUpMobile = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-5%" },
  transition: { duration: DURATION_MOBILE.reveal, ease: EASE },
};

export const staggerContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: STAGGER, delayChildren: 0.04 },
  },
};

export const staggerContainerMobile = {
  hidden: {},
  show: {
    transition: { staggerChildren: STAGGER_MOBILE, delayChildren: 0.02 },
  },
};

export const fadeUpItem = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: DURATION.reveal, ease: EASE } },
};

export const fadeUpItemMobile = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: DURATION_MOBILE.reveal, ease: EASE } },
};

export const clipReveal = {
  initial: { opacity: 0, y: "110%" },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.18, margin: "0px 0px -24% 0px" },
  transition: { duration: DURATION.reveal, ease: EASE },
};

export const clipRevealMobile = {
  initial: { opacity: 0, y: "50%" },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1, margin: "0px 0px -10% 0px" },
  transition: { duration: DURATION_MOBILE.reveal, ease: EASE },
};

export const lineReveal = {
  initial: { scaleX: 0 },
  whileInView: { scaleX: 1 },
  viewport: { once: true, margin: "-10%" },
  transition: { duration: DURATION.reveal, ease: EASE },
};

export const lineRevealMobile = {
  initial: { scaleX: 0 },
  whileInView: { scaleX: 1 },
  viewport: { once: true, margin: "-5%" },
  transition: { duration: DURATION_MOBILE.reveal, ease: EASE },
};
