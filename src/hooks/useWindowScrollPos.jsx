import { useLayoutEffect, useMemo, useRef } from "react";
import { throttle } from "lodash";
import { useMotionValue } from 'framer-motion'

let supportsPassive = false;
try {
  var opts = Object.defineProperty({}, "passive", {
    get: function() {
      supportsPassive = true;
    }
  });
  window.addEventListener("testPassive", null, opts);
  window.removeEventListener("testPassive", null, opts);
} catch (e) {}

let defaultOptions = {
  throttle: 32
};

function useWindowScrollPosition(options) {
  let opts = Object.assign({}, defaultOptions, options);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const previous = useRef({
    x: undefined,
    y: undefined,
  });

  const setPosition = () => {
    const newX = window.pageXOffset;
    const newY = window.pageYOffset;
    console.log(newY);
    if (
      previous.current.x !== newX ||
      previous.current.y !== newY
    ) {
      previous.current.x = newX;
      previous.current.y = newY;
      x.set(newX);
      y.set(newY);
    }
  }

  const handleScroll = throttle(() => {
    setPosition();
  }, opts.throttle);

  useLayoutEffect(() => {
    window.addEventListener(
      "scroll",
      handleScroll,
      supportsPassive ? { passive: true } : false
    );

    return () => {
      handleScroll.cancel();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return useMemo(() => ({ x, y }), [x, y]);
}

export default useWindowScrollPosition;
