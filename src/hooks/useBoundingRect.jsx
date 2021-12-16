import { useState, useLayoutEffect, useCallback } from 'react';
import { debounce } from 'lodash';

function getDimensionObject(node) {
  const rect = node.getBoundingClientRect();
  return {
    width: rect.width,
    height: rect.height,
  };
}

export const useBoundingRect = () => {
  const [dimensions, setDimensions] = useState({});
  const [node, setNode] = useState(null);

  const ref = useCallback((node) => {
    setNode(node);
  }, []);

  useLayoutEffect(() => {
    if ("undefined" !== typeof window && node) {
      const measure = () => {
        console.log('measuring')
        window.requestAnimationFrame(() =>
          setDimensions(getDimensionObject(node))
        );
      }

      measure();

      const listener = debounce(measure, 100);
      window.addEventListener("resize", listener);
      window.addEventListener("scroll", listener, {once: true});

      return () => {
        window.removeEventListener("resize", listener);
        window.removeEventListener("scroll", listener);
      };
    }
  }, [node]);

  return [ref, dimensions, node];
};