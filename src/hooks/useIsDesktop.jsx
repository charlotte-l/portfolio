import React, { useState, useLayoutEffect } from "react";

const getIsDesktop = () => {
  if ("undefined" !== typeof window) {
    return window.innerWidth >= 1280;
  }
  return undefined;
}

export default function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(getIsDesktop());

  useLayoutEffect(() => {
    const onResize = () => {
      setIsDesktop(getIsDesktop());
    }

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    }
  }, []);

  return isDesktop;
}