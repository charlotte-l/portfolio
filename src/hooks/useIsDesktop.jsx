import React, { useState, useLayoutEffect } from "react";

const getIsDesktop = () => window.innerWidth >= 1200;

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