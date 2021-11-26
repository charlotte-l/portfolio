/* eslint-disable react/require-default-props */
/* eslint-disable react/no-danger */
/* eslint-disable jsx-a11y/html-has-lang */
import React from 'react'

const loadingCSS = `
  #___loading {
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    z-index: 9999;
    background-image: radial-gradient(white, rgba(255,255,255,.2) 2px, transparent 10px),
                      radial-gradient(white, rgba(255,255,255,.15) 1px, transparent 5px),
                      radial-gradient(white, rgba(255,255,255,.1) 2px, transparent 10px),
                      radial-gradient(rgba(255,255,255,.4), rgba(255,255,255,.1) 2px, transparent 5px),
                      linear-gradient(0deg, #002e24 0%, #001024 100%);
    background-size: 550px 550px, 350px 350px, 250px 250px, 150px 150px, 100% 100%; 
    background-position: 0 0, 40px 60px, 130px 270px, 70px 100px, center center;
    transition: opacity 0.5s ease-out;
    opacity: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  #___loading.hide {
    opacity: 0;
  }

  .loader {
    width: 100px;
    height: 100px;
    border: 2px solid #F9F9EF;
    border-radius: 50%;
    overflow: hidden;
    position: relative;
    background-color: #F9F9EF;
    transform: translateZ(0);
    filter: drop-shadow(0px 0px 10px #F9F9EF);
  }

  .loader::before {
    content: '';
    display: block;
    position: absolute;
    top: 0; left: 0;
    background-color: #001024;
    width: 50%; height: 100%;
    animation: flip 2s 1s steps(2) infinite alternate;
  }

  .loader-inner {
    transform-style: preserve-3d;
    width: 100%;
    height: 100%;
    animation: rotate 4s linear infinite;
  }

  .loader-inner::before {
    content: '';
    display: block;
    transform-style: preserve-3d;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    transition: transform 4s;
    position: absolute;
    backface-visibility: hidden;
    background-color: #001024;
    top: 0;
    left: 0;
  }

  .loader-inner::after {
    content: '';
    display: block;
    transform-style: preserve-3d;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    transition: transform 4s;
    position: absolute;
    backface-visibility: hidden;
    background-color: #F9F9EF;
    transform: rotateY(180deg);
    top: 0;
    left: 0;
  }

  @keyframes rotate {
    0%   { transform: rotateY(0deg); }
    100% { transform: rotateY(360deg); }
  }
  
  @keyframes flip {
    0%   { left: 0; }
    100% { left: 100%; }
  }
`

export default function HTML({
  htmlAttributes,
  headComponents,
  bodyAttributes,
  preBodyComponents,
  postBodyComponents,
  body,
}) {
  return (
    <html {...htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        {headComponents}
        <style dangerouslySetInnerHTML={{ __html: loadingCSS }}></style>
      </head>
      <body {...bodyAttributes}>
        {preBodyComponents}
        <div id="___loading">
          <div className="loader" aria-label="Loading..."><div className="loader-inner"></div></div>
        </div>
        <div key="body" id="___gatsby" dangerouslySetInnerHTML={{ __html: body }} />
        {postBodyComponents}
      </body>
    </html>
  );
}