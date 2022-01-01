import { useMemo } from "react";

const wrapperTransition = {
  duration: 0.8,
  delay: 0.6,
  ease: [0, 0.55, 0.45, 1],
  delayChildren: 0.6,
  staggerChildren: 0.4
};

export const wrapperVariant = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  show: {
    y: 0,
    x: 0,
    opacity: 1,
    transition: wrapperTransition,
  }
};

const itemTransition = {
  duration: 0.8,
  ease: [0, 0.55, 0.45, 1],
}

export const headingVariant = {
  hidden: (i) => ({
    opacity: 0,
    x: i == 'left' ? "-100%" : "100%",
    y: 24,
    scale: i == 'left' ? -1 : 1,
  }),
  show: (i) => ({
    opacity: 1,
    y: 0,
    x: i == 'left' ? "-100%" : "100%",
    scale: i == 'left' ? -1 : 1,
    transition: itemTransition,
  }),
};

export const itemVariant = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  show: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: itemTransition,
  }
};

export const cardVariant = {
  show: (i) => ({
    rotateY: i == 'top' ? 0 : -180,
  }),
  hover: (i) => ({
    rotateY: i == 'top' ? 180 : 0,
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  }),
};

const swoopTransition = {
  type: 'tween',
  duration: 1.25,
  delay: 2,
  ease: 'linear',
}

export const swoopArrowVariant = {
  hidden: {
    opacity: 0,
    y: 0,
    x: -60,
    rotate: 90,
    scale: 0.5,
  },
  show: {
    opacity: 1,
    scale: 1,
    y: [0, 0, -40, -80, -100, -50, 0],
    x: [0, 80, 120, 80, 0, -20, 0],
    rotate: [90, 45, 0, -45, -135, -202.5, -180],
    transition: swoopTransition,
  },
};