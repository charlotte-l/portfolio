import React, { useRef } from 'react';
import {
  Box,
  Container,
  Heading,
  Stack,
  Text,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

import Ray from './Ray';
import SwoopArrow from './SwoopArrow';

import StaggeredFade from 'components/common/StaggeredFade';
import { itemVariant, swoopArrowVariant } from 'components/common/constants';

import * as heroStyles from "../../styles/section-hero.module.scss";

const MotionText = motion(Text);
const MotionHeading = motion(Heading);
const MotionArrow = motion(SwoopArrow);
const variants = itemVariant;
const swoopArrowVariants = swoopArrowVariant;

const Hero = () => {
  const swoopArrow = useRef(null);

  const addHoverClass = (def) => {
    if (def !== 'show') return;
    setTimeout(() => {
      swoopArrow.current.classList.add(heroStyles.swoopArrow);
    }, 500);
  }

  return (
    <Box as="section" id="hero" className={heroStyles.sectionBg} position="relative" overflow="hidden" minH="50vh" color={'white'}>
      <Container width='100%' height='100%' maxW="unset" position="absolute">
        <Ray />
        <Ray />
        <Ray />
        <Ray />
        <Ray />
        <Ray />
        <Ray />
      </Container>
      <Container maxW={'5xl'} zIndex="2" transform="translate3D(0,0,0)">
        <Stack
          textAlign={'center'}
          align={'center'}
          spacing={{ base: 4, md: 8 }}
          mt={{ base: 36, md: 48 }}
          mb={{ base: 32, md: 32 }}
        >
          <StaggeredFade>
            <MotionHeading
              fontWeight={700}
              fontSize={{ base: '4xl', md: '6xl', xl: '8xl' }}
              letterSpacing="1.5px"
              as="h1"
              variants={variants}
              mb="4"
            >
              Hi, I'm Charlotte
            </MotionHeading>
            <MotionText maxW={{base: '100%', md: '60ch'}} mx='auto' variants={variants} textStyle='paragraph-lg'>
              I'm a UK based web developer. I'm passionate about building fast, accessible and beautiful experiences for all. It's great to meet&nbsp;you!
            </MotionText>
            <MotionArrow ref={swoopArrow} w="10" mt="24" variants={swoopArrowVariants} onAnimationComplete={(def) => addHoverClass(def)}></MotionArrow>
          </StaggeredFade>
        </Stack>
      </Container>
    </Box>
  );
};

export default Hero;
