import { useState, useLayoutEffect } from 'react';

const getIsDesktop = () => {
  if (typeof window !== 'undefined') {
    return window.innerWidth >= 1280;
  }
  return undefined;
};

export default function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(getIsDesktop());

  useLayoutEffect(() => {
    const listener = () => {
      setIsDesktop(getIsDesktop());
    };

    window.addEventListener('resize', listener);
    window.addEventListener('scroll', listener, { once: true });

    return () => {
      window.removeEventListener('resize', listener);
    };
  }, []);

  return isDesktop;
}
