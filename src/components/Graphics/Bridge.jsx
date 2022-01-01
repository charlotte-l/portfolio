import React from "react"
import * as styles from '../../styles/section-contact.module.scss'

export const Bridge = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3877.3 2610.2" {...props}>
      <defs>
        <radialGradient id="streetlight-gradient">
          <stop offset="80%" stopColor="#ffe876" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </radialGradient>
      </defs>
      <circle className={styles.streetlight} fill="url(#streetlight-gradient)" cx="200" cy="110" r="18"></circle>
      <circle className={styles.streetlight} fill="url(#streetlight-gradient)" cx="600" cy="120" r="18"></circle>
      <circle className={styles.streetlight} fill="url(#streetlight-gradient)" cx="1000" cy="50" r="18"></circle>
      <circle className={styles.streetlight} fill="url(#streetlight-gradient)" cx="1400" cy="65" r="18"></circle>
      <circle className={styles.streetlight} fill="url(#streetlight-gradient)" cx="1800" cy="50" r="18"></circle>
      <circle className={styles.streetlight} fill="url(#streetlight-gradient)" cx="2200" cy="70" r="18"></circle>
      <circle className={styles.streetlight} fill="url(#streetlight-gradient)" cx="2600" cy="50" r="18"></circle>
      <circle className={styles.streetlight} fill="url(#streetlight-gradient)" cx="3000" cy="100" r="18"></circle>
      <circle className={styles.streetlight} fill="url(#streetlight-gradient)" cx="3400" cy="80" r="18"></circle>
      <circle className={styles.streetlight} fill="url(#streetlight-gradient)" cx="3800" cy="160" r="18"></circle>
      <path fill="#0a151d" d="M686.8 2610.5h-518v-1182c0-198.5-168.8-346-168.8-346l.5-567s1018.5-230 1938-230c853.5 0 1939 230 1939 230v567s-169 147.5-169 346v1182h-518v-1182c0-360.3-507.5-789-1251-789-893.5 0-1252.7 428.3-1252.7 789" />
      <path fill="#0a151d" d="M3874.2 305.6c-2.7-.5-274.6-52.3-647.5-103.4C2882.8 155.2 2380.2 99 1939 99c-481.6 0-982.1 56.2-1317.2 103.3C258.7 253.4 6.5 305.1 4 305.6l-8-39.2c2.5-.5 256-52.5 620.3-103.7 214-30.1 423.9-54.1 623.8-71.3C1490.1 69.9 1725.3 59 1939 59c195.9 0 420 10.9 666 32.4a12995 12995 0 0 1 627.4 71.3c373.9 51.2 646.6 103.2 649.4 103.7l-7.6 39.2z" />
      <path fill="#0a151d" d="M1918.7 98h40v190h-40zm-213.2 0h40v196h-40zm-213.2 9h40v199h-40zm-213.2 16h40v200h-40zm-213.2 18h40v204h-40zm-213.2 22h40v210h-40zm-213.2 28h40v210h-40zm-213.1 30h40v217h-40zm-213.2 35h40v222h-40zM0 285h40v237H0zM2131.8 98h40v196h-40zm213.2 10h40v198h-40zm213.2 15h40v203h-40zm213.2 20h40v205h-40zm213.2 24h40v208h-40zm213.2 23h40v217h-40zm213.1 31h40v219h-40zm213.2 37h40v219h-40zm213.2 27h40v233h-40z" />
      <path fill="#ffe876" d="M169 1468v-39c0-216.1-169-347-169-347v96s40.2 28 85 84c47.3 59.2 87.5 183.3 84 200-.3 1.4 0 6 0 6zm3539-20v-39c0-216.1 169-347 169-347v96s-40.2 28-85 84c-47.3 59.2-87.5 183.3-84 200 .3 1.4 0 6 0 6zm-3021 64c-.1-2.6-7.1-127.1 14-217a602 602 0 0 1 60-155c33-59 74.9-124.5 123.6-175 97.5-100.9 216.7-170.7 373-227 188.2-67.7 407.3-106.5 673.5-106.5 283.7 0 527 42 723 124.9 157.9 66.7 285.8 160 380.1 277.1a801.5 801.5 0 0 1 94.9 148.6c20.7 42 37.5 85.6 50.1 129.7 21.5 75.5 11.8 205.1 11.8 207.3 0 0-10-64-18-84l-32.9-114.5a754 754 0 0 0-138.6-263.9c-204.1-251.9-574.2-335.1-1070.4-335.1-479.6 0-809.1 79.9-1018.6 296.8-104.6 108.3-161.9 223.1-183.2 300.3a2405 2405 0 0 0-31.2 121.3l-11.1 72z" />
    </svg>
  );
};