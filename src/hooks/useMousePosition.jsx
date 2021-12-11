import { useCallback, useState, useEffect } from "react";

function getMousePositionFromEvent(e) {
  const {
    clientX,
    clientY,
    target
  } = e;

  return {
    left: clientX,
    top: clientY,
    hover: target && target.tagName === "A"
  };
}

const useMousePosition = () => {
  const [mousePosition, setMousePostition] = useState({left: 0, top: 0, hover: false});

  const updateMousePosition = useCallback((e) => {
    setMousePostition(getMousePositionFromEvent(e));
  }, []);

  useEffect(() => {
    document.addEventListener("pointermove", updateMousePosition);

    return () => {
      document.removeEventListener("pointermove", updateMousePosition);
    };
  }, []);

  return mousePosition;
};

export default useMousePosition;