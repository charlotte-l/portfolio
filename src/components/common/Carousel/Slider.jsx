import React, { useLayoutEffect } from 'react';
import { Box, Flex, Button, Text, Progress, IconButton } from '@chakra-ui/react';
import { useBoundingRect } from 'hooks/useBoundingRect';
import { NextArrow, PrevArrow } from '../icons'

const Slider = ({
  setTrackIsActive,
  initSliderWidth,
  setActiveItem,
  activeItem,
  constraint,
  itemWidth,
  positions,
  children,
  gap
}) => {
  const [ref, { width }] = useBoundingRect();

  useLayoutEffect(() => initSliderWidth(Math.round(width)), [
    width,
    initSliderWidth
  ]);

  const handleFocus = () => setTrackIsActive(true);

  const handleDecrementClick = () => {
    setTrackIsActive(true);
    !(activeItem === positions.length - positions.length) &&
      setActiveItem((prev) => prev - 1);
  };

  const handleIncrementClick = () => {
    setTrackIsActive(true);
    !(activeItem === positions.length - constraint) &&
      setActiveItem((prev) => prev + 1);
  };

  return (
    <>
      <Box
        ref={ref}
        w={{ base: "100%", md: `calc(100% + ${gap}px)` }}
        ml={{ base: 0, md: `-${gap / 2}px` }}
        px={`${gap / 2}px`}
        position="relative"
        overflow="hidden"
      >
        {children}
      </Box>

      <Flex w={`${itemWidth}px`} mt={`${gap / 2}px`} mx="auto">
        <IconButton
          aria-label='Previous slide'
          icon={<PrevArrow />}
          onClick={handleDecrementClick}
          onFocus={handleFocus}
          mr={`${gap / 3}px`}
          fontSize='2xl'
          color="yellow.300"
          variant="link"
          minW={0}
        />

        <Progress
          value={100 / ((positions.length - constraint) / activeItem)}
          alignSelf="center"
          colorScheme='yellow'
          flex={1}
          h="2px"
        />

        <IconButton
          aria-label='Next slide'
          icon={<NextArrow />}
          onClick={handleIncrementClick}
          onFocus={handleFocus}
          ml={`${gap / 3}px`}
          fontSize='2xl'
          color="yellow.300"
          variant="link"
          zIndex={2}
          minW={0}
        />
      </Flex>
    </>
  );
};

export default Slider;