import React from 'react';
import { useInView } from 'react-intersection-observer';
import { m, useAnimation } from 'framer-motion';
import { wrapperVariant } from '../constants';

const StaggeredFade = ({ children }) => {
  const animation = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  React.useEffect(() => {
    if (inView) {
      animation.start('show');
    } else {
      animation.start('hidden');
    }
  }, [animation, inView]);

  const variants = wrapperVariant;

  return (
    <m.div ref={ref} variants={variants} initial="hidden" animate={animation}>
      {children}
    </m.div>
  );
};

export default StaggeredFade;
