import { useState, useRef, useEffect } from 'react';

export const useBoundingRect = () => {
  const ref = useRef();
  const [rect, setRect] = useState({});

  const set = () => setRect(ref && ref.current ? ref.current.getBoundingClientRect() : {});

  const useEffectInEvent = (event, useCapture) => {
    useEffect(() => {
      set();
      window.addEventListener(event, set, useCapture);
      return () => window.removeEventListener(event, set, useCapture);
    }, []);
  };

  useEffectInEvent('resize');

  return [rect, ref];
};