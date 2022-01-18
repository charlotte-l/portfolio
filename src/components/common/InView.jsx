import React from 'react';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';

const InView = (showVariant, hideVariant) => {
  const animation = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  React.useEffect(() => {
    if (inView) {
      animation.start(showVariant);
    } else {
      animation.start(hideVariant);
    }
  }, [animation, inView]);

  return [ref, animation];
};

export default InView;
