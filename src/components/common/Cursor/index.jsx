import React, { useRef, useEffect, useState, useMemo } from 'react';
import { throttle } from 'lodash';

const Cursor = () => {
  const cursor = useRef();
  const cursor2 = useRef();
  const requestRef = useRef();
  const previousTimeRef = useRef();
  let [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  let cursorIsHovering = useState(false);

  const onMouseMove = (event) => {
    // const { clientX: x, clientY: y } = event;
    // setMousePosition({ x, y });
    animateCursor(event);
  };

  const throttledMouseMove = useMemo(() => throttle(onMouseMove, 16));

  const onResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    // set initial width/height
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);

    document.addEventListener('pointermove', throttledMouseMove);
    window.addEventListener('resize', onResize);
    requestRef.current = requestAnimationFrame(animateCursor2);
    handleLinks();

    return () => {
      document.removeEventListener('pointermove', throttledMouseMove);
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  let { x, y } = mousePosition;
  const winDimensions = { width, height };
  let endX = winDimensions.width / 2;
  let endY = winDimensions.height / 2;

  function animateCursor(e) {
    endX = e.clientX;
    endY = e.clientY;
    cursor.current.style.transform = `translate3d(${endX}px, ${endY}px, 0)`;
  }

  const animateCursor2 = (time) => {
    if (!cursor2.current) return false;

    if (previousTimeRef.current !== undefined) {
      x += (endX - x) / 8;
      y += (endY - y) / 8;
      cursor2.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    }
    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animateCursor2);
  };

  function toggleCursorHover() {
    if (!cursor2.current) return false;

    if (cursorIsHovering.current) {
      // hover state
      cursor.current.style.opacity = 0;
      cursor2.current.style.height = '48px';
      cursor2.current.style.width = '48px';
      cursor2.current.style.marginLeft = '-24px';
      cursor2.current.style.marginTop = '-24px';
      cursor2.current.style.border = '3px solid #f1c40f';
      cursor2.current.style.boxShadow = '0 0 22px rgba(241, 196, 15, 0.6)';
    } else {
      // normal state
      cursor.current.style.opacity = 1;
      cursor2.current.style.height = '';
      cursor2.current.style.width = '';
      cursor2.current.style.marginLeft = '';
      cursor2.current.style.marginTop = '';
      cursor2.current.style.border = '';
      cursor2.current.style.boxShadow = '';
    }
  }

  function handleLinks() {
    document.querySelectorAll('a, button').forEach((el) => {
      el.addEventListener('mouseover', () => {
        cursorIsHovering.current = true;
        toggleCursorHover();
      });
      el.addEventListener('mouseout', () => {
        cursorIsHovering.current = false;
        toggleCursorHover();
      });
    });
  }

  return (
    <>
      <div ref={cursor} className="cursor" id="cursor" />
      <div ref={cursor2} className="cursor2" id="cursor2" />
    </>
  );
};

export default Cursor;
