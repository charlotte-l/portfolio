import { Global } from "@emotion/react"
import React from "react"

const Fonts = () => (
  <Global
    styles={`
    @font-face {
        font-family: 'Playfair Display';
        font-style: normal;
        font-weight: 400;
        src: local('Playfair Display'),
             url('/fonts/playfair-display-v25-latin-regular.woff2') format('woff2')
      }
      
      @font-face {
        font-family: 'Playfair Display';
        font-style: normal;
        font-weight: 700;
        src: local('Playfair Display'),
             url('/fonts/playfair-display-v25-latin-700.woff2') format('woff2')
      }
      `}
  />
)

export default Fonts