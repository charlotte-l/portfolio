export const onClientEntry = () => {
  document.getElementById('___loading').style.display = "flex"
}

export const onInitialClientRender = () => {
  setTimeout(function () {
    document.getElementById("___loading").classList.add('hide')
  }, 400)

  setTimeout(function () {
    document.getElementById("___loading").style.display = 'none'
  }, 900)
}