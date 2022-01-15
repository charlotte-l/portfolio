import React, { useEffect, useMemo, useState } from "react";
import { useInView } from 'react-intersection-observer';
import { Box, Heading, Text, Link, useMergeRefs } from "@chakra-ui/react";
import { motion, useAnimation, useReducedMotion, useSpring } from "framer-motion";
import { useBoundingRect } from 'hooks/useBoundingRect';
import { debounce, throttle } from "lodash";

const MotionBox = motion(Box);

const ProjectWrapper = React.forwardRef((props, ref) => {
  const shouldReduceMotion = useReducedMotion();
  const [boxRef, dimensions] = useBoundingRect();
  const { width, height, left, top } = dimensions;
  const controls = useAnimation();
  const bgControls = useAnimation();
  const contentControls = useAnimation();
  const reducedAnimationContentControls = useAnimation();
  const [viewRef, inView] = useInView({ threshold: 0, triggerOnce: true, fallbackInView: true, rootMargin: '-50px 0px -50px 0px' });
  const [bgImageLoaded, setBgImageLoaded] = useState(false);

  const refs = useMergeRefs(boxRef, viewRef);

  const setPosition = (event) => {
    const { pageX, pageY } = event
    const offsetX = pageX - left - (width / 2)
    let offsetY = pageY - window.scrollY - top - (height / 2)
    if (Math.sign(offsetY) == "-1" && offsetY < -125) offsetY = "-100"
    if (Math.sign(offsetY) == "1" && offsetY > 100) offsetY = "100"
    
    controls.start({ rotateX: (offsetY / height) * -20, rotateY: (offsetX / width) * 20, transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] } })
    bgControls.start({ translateX: (offsetX / width) * -35, translateY: (offsetY / height) * -35, opacity: 0.8, transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] } })
    contentControls.start({ translateY: "0%", transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] } })
    reducedAnimationContentControls.start({ opacity: 1, transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] } })
  }

  const resetPosition = () => {
    setTimeout(() => {
      controls.start({ rotateX: 0, rotateY: 0, transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] } })
      bgControls.start({ translateX: 0, translateY: 0, opacity: 0.5, transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] } })
      contentControls.start({ translateY: "60%", transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] } })
      reducedAnimationContentControls.start({ opacity: 0, transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] } })
    }, 500);
  }

  const throttledSetPosition = useMemo(() => throttle(setPosition, 60));
  const debouncedResetPosition = useMemo(() => debounce(resetPosition, 300));

  let bgLoaded = false;

  useEffect(() => {
    resetPosition();

    if (inView) {
      console.log('visible');
      setBgImageLoaded(true);
    }
  }, [inView]);

  return (
    <MotionBox
      style={{ willChange: 'transform', transformStyle: 'preserve-3d' }}
      h="200px"
      w="100%"
      rounded={6}
      position="relative"
      overflow="hidden"
      backgroundColor="#062D36"
      initial={{ perspective: 800, rotateX: 0, rotateY: 0, transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] } }}
      animate={shouldReduceMotion ? null : controls}
      onMouseMove={throttledSetPosition}
      onMouseLeave={debouncedResetPosition}
      boxShadow="border"
      _hover={{
        boxShadow: "border-hover",
      }}
      ref={refs}
      role="group"
    >
      <MotionBox
        position="absolute"
        w="calc(100% + 50px)"
        h="calc(100% + 50px)"
        top="-25px"
        left="-25px"
        rounded={6}
        bgImage={bgImageLoaded ? props.img : 'none'}
        bgSize="cover"
        opacity={0.5}
        pointerEvents="none"
        animate={shouldReduceMotion ? null : bgControls}
      ></MotionBox>
      <MotionBox
        position="absolute"
        bottom="0"
        left="0"
        width="100%"
        padding="20px"
        textAlign="left"
        initial={shouldReduceMotion ? {translateY: "0%", opacity: 0} : {translateY: "60%"}}
        animate={shouldReduceMotion ? reducedAnimationContentControls : contentControls}
        _after={{
          content: "''",
          position: "absolute",
          width: "100%",
          height: "100%",
          top: "0",
          left: "0",
          bgImage: "linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.6) 100%)",
          bgBlendMode: "overlay",
          opacity: 0,
          zIndex: -1,
          transition: "opacity 0.6s cubic-bezier(0.23, 1, 0.32, 1) 0.8s"
        }}
        _groupHover={{
          _after: {
            opacity: 1,
            transitionDelay: "0s"
          }
        }}
      >
        <Heading as="h3" size="lg" mb="1" zIndex="1">{props.title}</Heading>
        <Text textStyle="paragraph-sm" maxW="40ch" zIndex="1">{props.info}</Text>
        <Link className="view-live" zIndex="1" href={props.link} target="_blank" rel="nofollow noopener">View live</Link>
      </MotionBox>
    </MotionBox>
  );
});

export default ProjectWrapper;