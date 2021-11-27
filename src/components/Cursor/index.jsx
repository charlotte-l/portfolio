import React from 'react';

const Cursor = ({mousePosition = {left: 0, right: 0, hover: false}}) => {
  return (
    <>
      <div className={`cursor ${mousePosition.hover && 'hover'}`} id="cursor" style={{transform: `translate3d(${mousePosition.left}px,${mousePosition.top}px, 0px`}}></div>
      <div className={`cursor2 ${mousePosition.hover && 'hover'}`} id="cursor2" style={{transform: `translate3d(${mousePosition.left}px,${mousePosition.top}px, 0px`}}></div>
    </>
  );
};

export default Cursor;