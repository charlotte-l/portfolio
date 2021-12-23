import { useState, useLayoutEffect, useCallback, useMemo } from 'react';
import { debounce } from 'lodash';

const getDimensionObject = (node) => {
  const rect = node.getBoundingClientRect();
  return {
    width: rect.width,
    height: rect.height,
    top: rect.top,
    left: rect.left,
  };
};

export const useBoundingRect = () => {
  const [dimensions, setDimensions] = useState({});
  const [node, setNode] = useState(null);

  const ref = useCallback((node) => {
    setNode(node);
  }, []);

  const measure = () => {
    return window.requestAnimationFrame(() => {
      setDimensions(getDimensionObject(node))
    });
  };

  const listener = useMemo(() => debounce(measure, 100));

  useLayoutEffect(() => {
    if ("undefined" !== typeof window && node) {
      measure();

      window.addEventListener("resize", listener);
      window.addEventListener("scroll", listener);

      return () => {
        window.removeEventListener("resize", listener);
        window.removeEventListener("scroll", listener);
      };
    }
  }, [node]);

  return [ref, dimensions, node];
};