import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import { wrapperVariant } from '../constants';

const StaggeredFade = ({ children }, props) => {
  const animation = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  
  React.useEffect(() => {
    if (inView) {
      animation.start("show");
    } else {
      animation.start("hidden");
    }
  }, [animation, inView]);

  const variants = wrapperVariant;

  return (
    <motion.div ref={ref} variants={variants} initial="hidden" animate={animation} {...props}>
      {children}
    </motion.div>
  );
};

export default StaggeredFade;