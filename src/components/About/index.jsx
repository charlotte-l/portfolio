import React from 'react';
import { Container, Heading, Flex, Grid, Box, Text, Link } from '@chakra-ui/react';
import useWindowScrollPosition from 'hooks/useWindowScrollPos';
import useMediaQuery from 'hooks/useMediaQuery';
import { m, useReducedMotion } from 'framer-motion';
import StaggeredFade from 'components/common/StaggeredFade';
import { headingVariant, itemVariant } from 'components/common/constants';
import ParallaxItem from 'components/common/ParallaxItem';

import me from 'images/me-2x.jpg';
import meWebP from 'images/me-2x.webp';
import meSm from 'images/me.jpg';
import meSmWebP from 'images/me.webp';

import buttons from 'images/buttons-the-cat-2x.jpg';
import buttonsWebP from 'images/buttons-the-cat-2x.webp';
import buttonsSm from 'images/buttons-the-cat.jpg';
import buttonsSmWebP from 'images/buttons-the-cat.webp';

import guineapigs from 'images/benny-and-godzilla-2x.jpg';
import guineapigsWebP from 'images/benny-and-godzilla-2x.webp';
import guineapigsSm from 'images/benny-and-godzilla.jpg';
import guineapigsSmWebP from 'images/benny-and-godzilla.webp';

import Forest from './Forest';

const MotionHeading = m(Heading);
const MotionText = m(Text);

const About = () => {
  const { y } = useWindowScrollPosition();
  const isDesktop = useMediaQuery('(min-width: 80em)');
  const shouldReduceMotion = useReducedMotion();

  return (
    <Flex
      as="section"
      id="about"
      direction="column"
      position="relative"
      bg="#062D36"
      color="#FFF"
      mt="-1px"
      pb={{ base: 24, md: 36, xl: 72 }}
      minH="100vh"
      zIndex="3"
    >
      <Box
        id="forest-wrap"
        w="100%"
        mb="-10vh"
        position="relative"
        pointerEvents="none"
        style={{ transform: 'translateY(-20vh)' }}
      >
        <Forest y={y} />
      </Box>
      <Text
        textStyle="accent"
        className="section-number"
        right="-4%"
        bottom={{ base: '-7.5%', xl: '-5%' }}
        color="#062D36"
      >
        01
      </Text>
      <Container maxW="8xl" pt={{ xl: 32 }}>
        <Grid templateColumns={{ base: '1fr', xl: '0.5fr 0.5fr' }} className="about-wrapper">
          <Flex
            position="relative"
            gridRow={{ base: '2', xl: '1' }}
            justifyContent={{ base: 'center', xl: 'unset' }}
          >
            <ParallaxItem
              w={{ base: '25%', sm: '20%', xl: '25%' }}
              zIndex="2"
              scroll={y}
              min={isDesktop && !shouldReduceMotion ? 100 : 0}
              max="400"
              speed={isDesktop && !shouldReduceMotion && 0.2}
              alignSelf={{ base: 'center', xl: 'flex-start' }}
              initial={{ translateY: '-125%' }}
              mt={{ base: '20%', xl: '0%' }}
              boxShadow="dark-lg"
              _after={{
                content: "''",
                position: 'absolute',
                width: '100%',
                height: '100%',
                top: '0',
                left: '0',
                rounded: '6',
                boxShadow: 'border-dark',
              }}
            >
              <picture>
                <source
                  srcSet={`${guineapigsSmWebP} 275w, ${guineapigsWebP} 550w`}
                  type="image/webp"
                />
                <img
                  src={guineapigs}
                  srcSet={`${guineapigsSm} 275w, ${guineapigs} 550w`}
                  sizes="(min-width: 80em) 12.5vw, (min-width: 100em) 176px, 20vw"
                  alt="Godzilla and Benny (guinea pigs)"
                  style={{ borderRadius: '6px' }}
                  loading="lazy"
                />
              </picture>
            </ParallaxItem>
            <ParallaxItem
              w={{ base: '50%', sm: '33%', xl: '50%' }}
              zIndex="1"
              scroll={y}
              min={isDesktop && !shouldReduceMotion ? 100 : 0}
              max="400"
              speed={isDesktop && !shouldReduceMotion && 0.1}
              alignSelf="center"
              initial={{ translateY: '-12.5%' }}
              ml="-2.5%"
              boxShadow="dark-lg"
              _after={{
                content: "''",
                position: 'absolute',
                width: '100%',
                height: '100%',
                top: '0',
                left: '0',
                rounded: '6',
                boxShadow: 'border-dark',
              }}
            >
              <picture>
                <source srcSet={`${meSmWebP} 320w, ${meWebP} 640w`} type="image/webp" />
                <img
                  src={me}
                  srcSet={`${meSm} 320w, ${me} 640w`}
                  sizes="(min-width: 80em) 25vw, (min-width: 100em) 352px, 40vw"
                  alt="It's me!"
                  style={{ borderRadius: '6px' }}
                  loading="lazy"
                />
              </picture>
            </ParallaxItem>
            <ParallaxItem
              w={{ base: '25%', sm: '20%', xl: '25%' }}
              scroll={y}
              min={isDesktop && !shouldReduceMotion ? -200 : 50}
              max={isDesktop && !shouldReduceMotion ? -100 : 100}
              zIndex="2"
              speed={isDesktop && !shouldReduceMotion && -0.1}
              alignSelf={{ base: 'center', xl: 'flex-end' }}
              initial={{ translateY: '100%' }}
              mt={{ base: '-33.33%', xl: '0%' }}
              ml="-2.5%"
              boxShadow="dark-lg"
              _after={{
                content: "''",
                position: 'absolute',
                width: '100%',
                height: '100%',
                top: '0',
                left: '0',
                rounded: '6',
                boxShadow: 'border-dark',
              }}
            >
              <picture>
                <source srcSet={`${buttonsSmWebP} 251w, ${buttonsWebP} 501w`} type="image/webp" />
                <img
                  src={buttons}
                  srcSet={`${buttonsSm} 251w, ${buttons} 501w`}
                  sizes="(min-width: 80em) 12.5vw, (min-width: 100em) 176px, 20vw"
                  alt="Buttons (black cat)"
                  style={{ borderRadius: '6px' }}
                  loading="lazy"
                />
              </picture>
            </ParallaxItem>
          </Flex>
          <Flex
            position="relative"
            maxW={{ base: '100%', sm: '75ch', xl: '55ch', '2xl': '60ch' }}
            direction="column"
            mx={{ base: 'auto', xl: '0' }}
            textAlign={{ base: 'center', xl: 'left' }}
          >
            <StaggeredFade>
              <MotionHeading
                fontWeight={700}
                fontSize={{ base: '6xl', md: '7xl', xl: '8xl' }}
                lineHeight="1"
                mb="4"
                as="h2"
                custom={isDesktop && 'right'}
                variants={isDesktop ? headingVariant : itemVariant}
                className={isDesktop && 'heading--r'}
                key={isDesktop}
              >
                About
              </MotionHeading>
              <MotionText
                variants={itemVariant}
                mt={isDesktop ? '24' : '0'}
                mb="4"
                textStyle="paragraph"
              >
                I have a passion for solving design problems and creating interactive, performant
                and functional web&nbsp;experiences.
              </MotionText>
              <MotionText variants={itemVariant} mb="4" textStyle="paragraph">
                I’m currently a web developer at{' '}
                <Link href="https://www.adenin.com/" target="_blank" rel="nofollow noopener">
                  adenin Technologies
                </Link>
                ; I built the majority of the company website. More recently, I've been developing
                Digital Assistant, a workplace experience and productivity app.
              </MotionText>
              <MotionText variants={itemVariant} mb="4" textStyle="paragraph">
                Before web dev, I worked in Cybersecurity consulting at{' '}
                <Link href="https://www.ey.com/en_uk" target="_blank" rel="nofollow noopener">
                  EY UK
                </Link>
                . Before <em>that</em>, I spent a year at{' '}
                <Link href="https://www.ibm.com/uk-en" target="_blank" rel="nofollow noopener">
                  IBM UK
                </Link>{' '}
                managing technical projects.
              </MotionText>
              <MotionText variants={itemVariant} mb="4" textStyle="paragraph">
                I have a Bachelor’s degree in Physics from the{' '}
                <Link href="https://www.manchester.ac.uk/" target="_blank" rel="nofollow noopener">
                  University of Manchester
                </Link>
                . I’m also a Level 3 qualified Personal Trainer! I’m completely smitten with my
                rescue cat, Buttons, and my two guinea pigs (Godzilla and Benny).
              </MotionText>
            </StaggeredFade>
          </Flex>
        </Grid>
      </Container>
    </Flex>
  );
};

export default About;
