import { Variants, Transition, Easing } from "framer-motion";

export const FADE_UP_ANIMATION_VARIANTS: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6, 
      ease: [0.22, 1, 0.36, 1] as Easing
    } 
  },
};

export const STANDARD_TRANSITION: Transition = {
  duration: 0.6,
  ease: "easeOut" as Easing,
};

export const PRECISE_TRANSITION: Transition = {
  duration: 0.5,
  ease: [0.25, 0.1, 0.25, 1] as Easing,
};

export const HOVER_TRANSITION: Transition = {
  duration: 0.2,
  ease: "easeOut" as Easing,
};

export const VIEWPORT_CONFIG = {
  once: true,
  margin: "-50px",
} as const;

export const STAGGER_CHILD_VARIANTS = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export const STAGGER_CONTAINER_VARIANTS = (staggerChildren = 0.1) => ({
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren,
    },
  },
});
