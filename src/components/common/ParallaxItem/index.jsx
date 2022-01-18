import React from 'react';
import { m, useTransform, useSpring } from 'framer-motion';
import { Box } from '@chakra-ui/react';

const MotionBox = m(Box);

const ParallaxItem = React.forwardRef((props, ref) => {
  const { scroll, ...rest } = props;
  const speed = props.speed || -0.2;
  const yS = useTransform(scroll, (value) => value * speed);
  const yS0 = useSpring(yS, { stiffness: 400, damping: 90 });

  return (
    <MotionBox style={{ y: yS0 }} {...rest}>
      {props.children}
    </MotionBox>
  );
});

export default ParallaxItem;
