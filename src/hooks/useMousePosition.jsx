import { useCallback, useRef, useState, useEffect } from "react";

function getMousePositionFromEvent(e) {
  const {
    clientX,
    clientY,
    target
  } = e;

  return {
    left: clientX,
    top: clientY,
    hover: target.tagName === "A"
  };
}

const useMousePosition = () => {
  const [mousePosition, setMousePostition] = useState({left: 0, top: 0, hover: false});

  const updateMousePosition = useCallback((e) => {
    setMousePostition(getMousePositionFromEvent(e));
  }, []);

  useEffect(() => {
    document.addEventListener("mousemove", updateMousePosition);

    return () => {
      document.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return mousePosition;
};

export default useMousePosition;