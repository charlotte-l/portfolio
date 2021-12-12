import React from 'react';
import { Flex } from '@chakra-ui/react';

const Item = ({ setTrackIsActive, itemWidth, children, gap }) => {
  const handleFocus = () => setTrackIsActive(true);

  return (
    <Flex
      onFocus={handleFocus}
      w={`${itemWidth}px`}
      _notLast={{
        mr: `${gap}px`
      }}
      py="4px"
    >
      {children}
    </Flex>
  );
};

export default Item;