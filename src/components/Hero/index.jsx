import React, { useRef } from 'react';
import { Box, Container, Heading, Text } from '@chakra-ui/react';
import { m, useReducedMotion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import useMediaQuery from 'hooks/useMediaQuery';
import StaggeredFade from 'components/common/StaggeredFade';
import {
  itemVariant,
  swoopArrowVariant,
  swoopArrowMobileVariant,
} from 'components/common/constants';
import Ray from './Ray';
import SwoopArrow from './SwoopArrow';

import * as heroStyles from '../../styles/section-hero.module.scss';

const MotionText = m(Text);
const MotionHeading = m(Heading);
const MotionArrow = m(SwoopArrow);
const variants = itemVariant;
const swoopArrowVariants = swoopArrowVariant;

const Hero = () => {
  const [ref, inView] = useInView({ threshold: 0.1 });
  const isDesktop = useMediaQuery('(min-width: 80em)');
  const shouldReduceMotion = useReducedMotion();
  const swoopArrow = useRef(null);

  const addHoverClass = (def) => {
    if (def !== 'show' || shouldReduceMotion) return;
    setTimeout(() => {
      swoopArrow.current.classList.add(heroStyles.swoopArrow);
    }, 500);
  };

  return (
    <Box
      as="section"
      id="hero"
      className={heroStyles.sectionBg}
      position="relative"
      overflow="hidden"
      minH="50vh"
      color="white"
    >
      <Container width="100%" height="100%" maxW="unset" position="absolute" ref={ref}>
        <Ray animate={inView && isDesktop} />
        <Ray animate={inView && isDesktop} />
        <Ray animate={inView && isDesktop} />
        <Ray animate={inView && isDesktop} />
        <Ray animate={inView && isDesktop} />
        <Ray animate={inView && isDesktop} />
        <Ray animate={inView && isDesktop} />
      </Container>
      <Container maxW="5xl" zIndex="2" transform="translate3D(0,0,0)">
        <Box textAlign="center" align="center" mt={{ base: 36, md: 48 }} mb={{ base: 32, md: 32 }}>
          <StaggeredFade>
            <MotionHeading
              fontWeight={700}
              fontSize={{ base: '6xl', md: '7xl', xl: '8xl' }}
              letterSpacing="1.5px"
              as="h1"
              variants={variants}
              mb="4"
            >
              Hi, I&apos;m Charlotte
            </MotionHeading>
            <MotionText
              maxW={{ base: '100%', md: '60ch' }}
              mx="auto"
              variants={variants}
              textStyle="paragraph-lg"
            >
              I&apos;m a UK based web developer. I&apos;m passionate about building fast, accessible
              and beautiful experiences for all. It&apos;s great to meet&nbsp;you!
            </MotionText>
            <MotionArrow
              ref={swoopArrow}
              className={inView && 'animate'}
              w="10"
              mt="24"
              variants={
                isDesktop && !shouldReduceMotion ? swoopArrowVariants : swoopArrowMobileVariant
              }
              onAnimationComplete={(def) => addHoverClass(def)}
              aria-label="Scroll to content"
            />
          </StaggeredFade>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
