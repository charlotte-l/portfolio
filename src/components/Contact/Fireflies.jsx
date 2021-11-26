import React from "react";
import { motion } from "framer-motion";
import InView from "components/common/InView";
import { fireflyWrapVariant } from 'components/common/constants';

const Fireflies = (props) => {
  const [ref, animation] = InView('show', 'hidden');

  return (
    <motion.svg ref={ref} key='fireflies' variants={fireflyWrapVariant} initial="hidden" animate={animation} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1366 319" {...props}>
      <defs>
        <filter id="softGlow" height="300%" width="300%" x="-75%" y="-75%">
          <feMorphology operator="dilate" radius="4" in="SourceAlpha" result="thicken" />
          <feGaussianBlur in="thicken" stdDeviation="10" result="blurred" />
          <feFlood floodColor="#CAB88F" result="glowColor" />
          <feComposite in="glowColor" in2="blurred" operator="in" result="softGlow_colored" />
          <feMerge>
            <feMergeNode in="softGlow_colored" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <radialGradient id="fireflyGradient">
          <stop offset="0%" stopColor="#62336e" />
          <stop offset="80%" stopColor="#562A63" />
          <stop offset="86%" stopColor="#FFF" />
          <stop offset="90%" stopColor="#FFF" />
          <stop offset="100%" stopColor="#F9F9EF" />
        </radialGradient>
      </defs>
      <g filter="url(#softGlow)" shapeRendering="geometricPrecision">
        <circle cx="927" cy="251" r={Math.floor((Math.random() * 4.5) + 5.5)} fill="url('#fireflyGradient')" style={{animation: 'hover 30s infinite linear alternate'}} />
        <circle cx="985" cy="45" r={Math.floor((Math.random() * 4.5) + 5.5)} fill="url('#fireflyGradient')" style={{offsetPath: `path('')`, animation: 'hover 40s infinite linear alternate'}} />
        <circle cx="1150" cy="121" r={Math.floor((Math.random() * 4.5) + 5.5)} fill="url('#fireflyGradient')" style={{offsetPath: `path('')`, animation: 'hover 20s infinite linear alternate'}} />
        <circle cx="649.77" cy="130.84" r={Math.floor((Math.random() * 4.5) + 5.5)} fill="url('#fireflyGradient')" style={{offsetPath: `path('')`, animation: 'hover 25s infinite linear alternate'}} />
        <circle cx="512" cy="35" r={Math.floor((Math.random() * 4.5) + 5.5)} fill="url('#fireflyGradient')" style={{offsetPath: `path('')`, animation: 'hover 55s infinite linear alternate'}} />
        <circle cx="35" cy="55" r={Math.floor((Math.random() * 4.5) + 5.5)} fill="url('#fireflyGradient')" style={{offsetPath: `path('')`, animation: 'hover 10s infinite linear alternate'}} />
        <circle cx="1283" cy="284" r={Math.floor((Math.random() * 4.5) + 5.5)} fill="url('#fireflyGradient')" style={{offsetPath: `path('')`, animation: 'hover 23s infinite linear alternate'}} />
        <circle cx="180" cy="208" r={Math.floor((Math.random() * 4.5) + 5.5)} fill="url('#fireflyGradient')" style={{offsetPath: `path('')`, animation: 'hover 43s infinite linear alternate'}} />
        <circle cx="418" cy="248" r={Math.floor((Math.random() * 4.5) + 5.5)} fill="url('#fireflyGradient')" style={{offsetPath: `path('')`, animation: 'hover 37s infinite linear alternate'}} />
      </g>
    </motion.svg>
  );
};

export default Fireflies;