import React from 'react';
import { m, useTransform, useSpring, useReducedMotion } from 'framer-motion';
import { Box, Image, useBreakpointValue } from '@chakra-ui/react';
import styled from 'styled-components';

import layer1 from 'images/forest/layer-1.svg';
import layer2 from 'images/forest/layer-2.svg';
import layer3 from 'images/forest/layer-3.svg';
import layer4 from 'images/forest/layer-4.svg';
import layer5 from 'images/forest/layer-5.svg';
import layer6 from 'images/forest/layer-6.svg';

const MotionBox = m(Box);

const StyledMotionBox = styled(MotionBox)`
  width: 105%;
  transform: translateX(-5%);

  @media screen and (max-width: 30em) {
    transform: translateX(-33%);
  }
`;

const Forest = (props) => {
  let showParallaxEffect = useBreakpointValue({ base: false, lg: true });
  if (useReducedMotion()) showParallaxEffect = false;

  const y = props.y;
  const opacity = useTransform(y, [0, 600], [0.5, 1]);
  const oS = useSpring(opacity, { stiffness: 400, damping: 90 });
  const y0 = useTransform(y, (value) => value / -2.5);
  const y1 = useTransform(y, (value) => value / 20);
  const y2 = useTransform(y, (value) => value / -10);
  const y3 = useTransform(y, (value) => value / 20);
  const y4 = useTransform(y, (value) => value / 35);
  const y5 = useTransform(y, (value) => value / 15);
  const yS0 = useSpring(y0, { stiffness: 400, damping: 90 });
  const yS1 = useSpring(y1, { stiffness: 400, damping: 90 });
  const yS2 = useSpring(y2, { stiffness: 400, damping: 90 });
  const yS3 = useSpring(y3, { stiffness: 400, damping: 90 });
  const yS4 = useSpring(y4, { stiffness: 400, damping: 90 });
  const yS5 = useSpring(y5, { stiffness: 400, damping: 90 });

  return (
    <StyledMotionBox
      style={{ opacity: oS, aspectRatio: '3877.3 / 2174.2', minHeight: '50vh' }}
    >
      <MotionBox position="absolute" w="100%" h="100%" style={{ y: showParallaxEffect ? yS0 : 0 }}>
        <Image src={layer6} w="100%" objectFit="cover" />
      </MotionBox>
      <MotionBox position="absolute" w="100%" h="100%" style={{ y: showParallaxEffect ? yS1 : 0 }}>
        <Image src={layer5} w="100%" objectFit="cover" />
      </MotionBox>
      <MotionBox position="absolute" w="100%" h="100%" style={{ y: showParallaxEffect ? yS2 : 0 }}>
        <Image src={layer4} w="100%" objectFit="cover" />
      </MotionBox>
      <MotionBox position="absolute" w="100%" h="100%" style={{ y: showParallaxEffect ? yS3 : 0 }}>
        <Image src={layer3} w="100%" objectFit="cover" />
      </MotionBox>
      <MotionBox position="absolute" w="100%" h="100%" style={{ y: showParallaxEffect ? yS4 : 0 }}>
        <Image src={layer2} w="100%" objectFit="cover" />
      </MotionBox>
      <MotionBox position="absolute" w="100%" h="100%" style={{ y: showParallaxEffect ? yS5 : 0 }}>
        <Image src={layer1} w="100%" objectFit="cover" />
      </MotionBox>
    </StyledMotionBox>
  );
};

export default Forest;
