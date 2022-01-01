import React from "react";
import * as styles from "../../styles/not-found.module.scss";

export const Comets = (props) => {
  return (
    <svg width="100%" height="100%" preserveAspectRatio="none" {...props}>
      <defs>
        <radialGradient id="comet-gradient" cx="0" cy=".5" r="0.5">
          <stop offset="0%" stopColor="rgba(255,255,255,.8)"></stop>
          <stop offset="100%" stopColor="rgba(255,255,255,0)"></stop>
        </radialGradient>
      </defs>
      <g transform="rotate(-135)">
        <ellipse className={styles.comet} fill="url(#comet-gradient)" cx="0" cy="0" rx="150" ry="2"></ellipse>
      </g>
      <g transform="rotate(20)">
        <ellipse className={styles.comet} style={{animationDelay: "-3.3s"}} fill="url(#comet-gradient)" cx="100%" cy="0" rx="150" ry="2"></ellipse>
      </g>
      <g transform="rotate(335)">
        <ellipse className={styles.comet} style={{animationDelay: "-5s"}} fill="url(#comet-gradient)" cx="100%" cy="50%" rx="150" ry="2"></ellipse>
      </g>
    </svg >
  );
};