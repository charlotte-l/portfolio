import React from 'react';
import { m, useTransform, useSpring } from 'framer-motion';
import { Box } from '@chakra-ui/react';

const MotionBox = m(Box);
const clamp = (val, min = 0, max = 1) => Math.max(min, Math.min(max, val));

const ParallaxItem = React.forwardRef((props, ref) => {
  const { scroll, ...rest } = props;
  const speed = props.speed || -0.2;
  const yS = useTransform(scroll, (value) => clamp(value * speed, props.min, props.max));
  const yS0 = useSpring(yS, { stiffness: 400, damping: 90 });

  return (
    <MotionBox style={{ y: yS0 }} {...rest}>
      {props.children}
    </MotionBox>
  );
});

export default ParallaxItem;
