export const EASE_STANDARD: [number, number, number, number] = [0.2, 0, 0, 1];

export const DUR_FAST = 0.12;
export const DUR_BASE = 0.24;
export const DUR_SLOW = 0.48;

export const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DUR_SLOW, ease: EASE_STANDARD },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: DUR_BASE, ease: EASE_STANDARD },
  },
};

export const staggerChildren = (stagger = 0.08) => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger },
  },
});
