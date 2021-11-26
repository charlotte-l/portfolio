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

const drawingTransition = {
  duration: 0.5,
  ease: [0, 0.55, 0.45, 1],
  delayChildren: 0.5,
  staggerChildren: 0.5
}

export const drawingVariant = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,
    transition: drawingTransition,
  }
}

const drawingLineTransition = {
  duration: 12,
  ease: [0, 0.55, 0.45, 1],
}

export const drawingLineVariant = {
  hidden: {
    pathLength: 0
  },
  show: {
    pathLength: 1,
    transition: drawingLineTransition,
  }
}

const fireflyWrapTransition = {
  duration: 3,
  ease: [0, 0.55, 0.45, 1],
  delayChildren: 1,
  staggerChildren: 0.5
}

export const fireflyWrapVariant = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,
    transition: fireflyWrapTransition,
  }
}