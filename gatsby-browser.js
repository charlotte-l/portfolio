import React from 'react'

export const onClientEntry = () => {
  document.getElementById('___loading').style.display = "flex"

  if (process.env.NODE_ENV !== 'production') {
    const whyDidYouRender = require('@welldone-software/why-did-you-render')
    whyDidYouRender(React, {
      trackAllPureComponents: true,
    })
  }
}

export const onInitialClientRender = () => {
  setTimeout(function () {
    document.getElementById("___loading").classList.add('hide')
  }, 400)

  setTimeout(function () {
    document.getElementById("___loading").style.display = 'none'
  }, 900)
}