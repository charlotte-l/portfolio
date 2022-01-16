import React from "react";
import { motion, useTransform, useSpring, useReducedMotion } from "framer-motion";
import { Box, Image, useBreakpointValue } from '@chakra-ui/react'

import layer1 from 'images/forest/optimized/layer-1-1x.png'
import layer1_2x from 'images/forest/optimized/layer-1-2x.png'
import layer1_3x from 'images/forest/optimized/layer-1-3x.png'
import layer2 from 'images/forest/optimized/layer-2-1x.png'
import layer2_2x from 'images/forest/optimized/layer-2-2x.png'
import layer2_3x from 'images/forest/optimized/layer-2-3x.png'
import layer3 from 'images/forest/optimized/layer-3-1x.png'
import layer3_2x from 'images/forest/optimized/layer-3-2x.png'
import layer3_3x from 'images/forest/optimized/layer-3-3x.png'
import layer4 from 'images/forest/optimized/layer-4-1x.png'
import layer4_2x from 'images/forest/optimized/layer-4-2x.png'
import layer4_3x from 'images/forest/optimized/layer-4-3x.png'
import layer5 from 'images/forest/optimized/layer-5-1x.png'
import layer5_2x from 'images/forest/optimized/layer-5-2x.png'
import layer5_3x from 'images/forest/optimized/layer-5-3x.png'
import layer6 from 'images/forest/optimized/layer-6-1x.png'
import layer6_2x from 'images/forest/optimized/layer-6-2x.png'
import layer6_3x from 'images/forest/optimized/layer-6-3x.png'

const MotionBox = motion(Box);

const Forest = (props) => {
  let showParallaxEffect = useBreakpointValue({ base: false, lg: true });
  if (useReducedMotion()) showParallaxEffect = false;

  const y = props.y;
  const opacity = useTransform(y, [0, 600], [0.5, 1]);
  const oS = useSpring(opacity, { stiffness: 400, damping: 90 })
  const y0 = useTransform(y, value => value / -2.5);
  const y1 = useTransform(y, value => value / 20);
  const y2 = useTransform(y, value => value / -5);
  const y3 = useTransform(y, value => value / 20);
  const y4 = useTransform(y, value => value / 35);
  const y5 = useTransform(y, value => value / 15);
  const yS0 = useSpring(y0, { stiffness: 400, damping: 90 });
  const yS1 = useSpring(y1, { stiffness: 400, damping: 90 });
  const yS2 = useSpring(y2, { stiffness: 400, damping: 90 });
  const yS3 = useSpring(y3, { stiffness: 400, damping: 90 });
  const yS4 = useSpring(y4, { stiffness: 400, damping: 90 });
  const yS5 = useSpring(y5, { stiffness: 400, damping: 90 });

  return (
    <MotionBox width={props.width} position='relative' left={props.translateX} style={{opacity: oS, aspectRatio: "3877.3 / 2174.2"}}>
      <MotionBox position='absolute' w="100%" h="100%" style={{ y: showParallaxEffect ? yS0 : 0 }}>
        <Image src={layer6_2x} srcSet={`${layer6} 1000w, ${layer6_2x} 1600w, ${layer6_3x} 3200w`} sizes="100vw" w="100%" objectFit='cover' />
      </MotionBox>
      <MotionBox position='absolute' w="100%" h="100%" style={{ y: showParallaxEffect ? yS1 : 0 }}>
        <Image src={layer5_2x} srcSet={`${layer5} 1000w, ${layer5_2x} 1600w, ${layer5_3x} 3200w`} sizes="100vw" w="100%" objectFit='cover' />
      </MotionBox>
      <MotionBox position='absolute' w="100%" h="100%" style={{ y: showParallaxEffect ? yS2 : 0 }}>
      <Image src={layer4_2x} srcSet={`${layer4} 1000w, ${layer4_2x} 1600w, ${layer4_3x} 3200w`} sizes="100vw" w="100%" objectFit='cover' />
      </MotionBox>
      <MotionBox position='absolute' w="100%" h="100%" style={{ y: showParallaxEffect ? yS3 : 0 }}>
      <Image src={layer3_2x} srcSet={`${layer3} 1000w, ${layer3_2x} 1600w, ${layer3_3x} 3200w`} sizes="100vw" w="100%" objectFit='cover' />
      </MotionBox>
      <MotionBox position='absolute' w="100%" h="100%" style={{ y: showParallaxEffect ? yS4 : 0 }}>
      <Image src={layer2_2x} srcSet={`${layer2} 1000w, ${layer2_2x} 1600w, ${layer2_3x} 3200w`} sizes="100vw" w="100%" objectFit='cover' />
      </MotionBox>
      <MotionBox position='absolute' w="100%" h="100%" style={{ y: showParallaxEffect ? yS5 : 0 }}>
      <Image src={layer1_2x} srcSet={`${layer1} 1000w, ${layer1_2x} 1600w, ${layer1_3x} 3200w`} sizes="100vw" w="100%" objectFit='cover' />
      </MotionBox>
    </MotionBox>
  );
};

export default Forest;