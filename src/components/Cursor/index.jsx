import React from 'react';
import useMousePosition from 'hooks/useMousePosition';

const Cursor = () => {
  const mousePosition = useMousePosition();
  return (
    <>
      <div className={`cursor ${mousePosition.hover && 'hover'}`} id="cursor" style={{transform: `translate3d(${mousePosition.left}px,${mousePosition.top}px, 0px`}}></div>
      <div className={`cursor2 ${mousePosition.hover && 'hover'}`} id="cursor2" style={{transform: `translate3d(${mousePosition.left}px,${mousePosition.top}px, 0px`}}></div>
    </>
  );
};

export default Cursor;