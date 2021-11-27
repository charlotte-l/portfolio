import React from 'react';
import {
  Box,
  Container,
  Heading,
  Stack,
  Text,
  Button,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

import Ray from './Ray';

import StaggeredFade from 'components/common/StaggeredFade';
import { itemVariant } from 'components/common/constants';

import * as heroStyles from "../../styles/section-hero.module.scss";

const MotionText = motion(Text);
const MotionHeading = motion(Heading);
const variants = itemVariant;

const Hero = () => {
  return (
    <>
      <Box as="section" id="hero" className={heroStyles.sectionBg} position="relative" overflow="hidden" minH="50vh">
        <Container width={'100%'} height={'100%'} maxW="unset" position="absolute">
          <Ray />
          <Ray />
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
            py={{ base: 30, md: 48 }}>
            <StaggeredFade>
              <MotionHeading
                fontWeight={600}
                fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
                lineHeight={'1.5'}
                color={'white'}
                as="h2"
                variants={variants}
              >
                Hi, I'm Charlotte
              </MotionHeading>
              <MotionText color={'white'} maxW={'md'} lineHeight={1.6} variants={variants}>
                a web developer. I'm passionate about building fast, accessible and beautiful experiences for all. It's great to meet you!
              </MotionText>
            </StaggeredFade>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default Hero;