import { useLayoutEffect, useMemo, useRef } from 'react';
import { throttle } from 'lodash';
import { useMotionValue } from 'framer-motion';

const defaultOptions = {
  throttle: 100,
};

function useWindowScrollPosition(options) {
  const opts = { ...defaultOptions, ...options };
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const previous = useRef({
    x: undefined,
    y: undefined,
  });

  const setPosition = () => {
    const newX = window.pageXOffset;
    const newY = window.pageYOffset;
    if (previous.current.x !== newX || previous.current.y !== newY) {
      previous.current.x = newX;
      previous.current.y = newY;
      x.set(newX);
      y.set(newY);
    }
  };

  const handleScroll = throttle(() => {
    setPosition();
  }, opts.throttle);

  useLayoutEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      handleScroll.cancel();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return useMemo(() => ({ x, y }), [x, y]);
}

export default useWindowScrollPosition;
