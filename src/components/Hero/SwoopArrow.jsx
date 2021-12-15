import React from "react";
import { Button } from "@chakra-ui/react";

function getElementY(handle) {
  return window.pageYOffset + handle.getBoundingClientRect().top - 100
}

function doScrolling(element, duration) {
  const startingY = window.pageYOffset
  const elementY = getElementY(element)
  const targetY = document.body.scrollHeight - elementY < window.innerHeight ? document.body.scrollHeight - window.innerHeight : elementY
  const diff = targetY - startingY
  const easing = (x) => x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2
  let start

  if (!diff) return

  window.requestAnimationFrame(function step(timestamp) {
    if (!start) start = timestamp
    const time = timestamp - start
    let percent = Math.min(time / duration, 1)
    percent = easing(percent)

    window.scrollTo(0, startingY + diff * percent)

    if (time < duration) {
      window.requestAnimationFrame(step)
    }
  })
}

const scrollDown = () => {
  setTimeout(() => {
    doScrolling(document.querySelector('.about-wrapper'), 5000);
  }, 100);
}

const SwoopArrow = React.forwardRef((props, ref) => (
    <Button ref={ref} onClick={scrollDown} _focus={{boxShadow: "none"}} variant="link" {...props}>
      <svg viewBox="0 0 25 21.785" xmlns="http://www.w3.org/2000/svg">
        <path fill="#FFF" d="M12.501.136H12.5V.132zm0-.004v.004c-.153.482.048.186 0-.004zm0 .004V3.2l.002 9.21.11.28c1.039.727 1.767 6.68 2.65 8.964-.679-4.397-1.574-9.432-.791-11.745C15.998 5.4 21.15 9.675 24.868 12.9c-2.003-3.635-6.327-10.46-10.379-8.659-.042-.902-.153-2.12-1.387-2.136Zm0 3.063L12.498.136l-.6 1.97c-1.235.017-1.346 1.234-1.388 2.136-4.052-1.8-8.376 5.024-10.379 8.66C3.849 9.674 9.002 5.4 10.528 9.907c.783 2.313-.112 7.348-.791 11.745.883-2.284 1.611-8.237 2.65-8.963l.11-.282z" stroke="#FFF" strokeWidth=".264" strokeLinecap="butt" strokeLinejoin="round" strokeMiterlimit="6.3" />
      </svg>
    </Button>
))

export default SwoopArrow;