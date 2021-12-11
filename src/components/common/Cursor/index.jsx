import React, { useRef, useEffect, useState } from 'react';

const Cursor = () => {
  const cursor = useRef();
  const cursor2 = useRef();
  const requestRef = useRef();
  const previousTimeRef = useRef();
  let [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  const onMouseMove = (event) => {
    const { pageX: x, pageY: y } = event;
    setMousePosition({ x, y });
    animateCursor(event);
  };

  const onResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);
    window.addEventListener("resize", onResize);
    requestRef.current = requestAnimationFrame(animateCursor2);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  let { x, y } = mousePosition;
  const winDimensions = { width, height };
  let endX = winDimensions.width / 2;
  let endY = winDimensions.height / 2;

  function animateCursor(e) {
    endX = e.pageX;
    endY = e.pageY;
    cursor.current.style.transform =  `translate3d(${endX}px, ${endY}px, 0)`;
  }

  const animateCursor2 = (time) => {
    if (previousTimeRef.current !== undefined) {
      x += (endX - x) / 8;
      y += (endY - y) / 8;
      cursor2.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    }
    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animateCursor2);
  };

  return (
    <>
      <div ref={cursor} className={`cursor`} id="cursor"></div>
      <div ref={cursor2} className={`cursor2`} id="cursor2"></div>
    </>
  );
};

export default Cursor;