import { Global } from '@emotion/react';
import React from 'react';

const Fonts = () => (
  <Global
    styles={`    
      @font-face {
        font-family: 'Playfair Display';
        font-style: normal;
        font-weight: 700;
        src: local('Playfair Display'),
             url('/fonts/playfair-display-v25-latin-700-subset.woff2') format('woff2');
        unicode-range: U+20-7E;
        font-display: swap;
      }

      @font-face {
        font-family: 'Times New Roman';
        src: local('Times New Roman');
        advance-override: 122.6%;
        ascent-override: 108.2%;
        descent-override: -25.1%;
        line-gap-override: 0%;
      }
      `}
  />
);

export default Fonts;
