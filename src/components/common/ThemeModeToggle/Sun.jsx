import React from "react";
import { motion } from "framer-motion";
import { transition } from "./constants";

export const Sun = () => {
  const whileTap = { scale: 0.95, rotate: 15 };

  const raysVariants = {
    initial: { rotate: 45 },
    animate: { rotate: 0, transition }
  };

  const coreVariants = {
    initial: { scale: 1.5 },
    animate: { scale: 0.75, transition }
  };

  return (
    <motion.svg
      key="sun"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke="currentColor"
      whileTap={whileTap}
      style={{
        originX: "50%", 
        originY: "50%",
      }}
    >
      <motion.circle
        cx="11.9998"
        cy="11.9998"
        r="5.75375"
        fill="currentColor"
        initial="initial"
        animate="animate"
        variants={coreVariants}
      />
      <motion.g
        stroke="currentColor"
        initial="initial"
        animate="animate"
        variants={raysVariants}
      >
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" />
        <line x1="21" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
      </motion.g>
    </motion.svg>
  );
};