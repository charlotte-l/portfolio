import React from 'react';
import { Container, Flex, Grid, Text, Heading } from '@chakra-ui/react';
import { m, useReducedMotion } from 'framer-motion';
import useWindowScrollPosition from 'hooks/useWindowScrollPos';
import useMediaQuery from 'hooks/useMediaQuery';
import ParallaxItem from 'components/common/ParallaxItem';
import StaggeredFade from 'components/common/StaggeredFade';
import { headingVariant, itemVariant } from 'components/common/constants';

import screenshot1 from 'images/screenshot-one-2x.jpg';
import screenshot1WebP from 'images/screenshot-one-2x.webp';
import screenshot1Sm from 'images/screenshot-one.jpg';
import screenshot1SmWebP from 'images/screenshot-one.webp';

import screenshot2 from 'images/screenshot-two-2x.jpg';
import screenshot2WebP from 'images/screenshot-two-2x.webp';
import screenshot2Sm from 'images/screenshot-two.jpg';
import screenshot2SmWebP from 'images/screenshot-two.webp';

import screenshot3 from 'images/screenshot-three-2x.jpg';
import screenshot3WebP from 'images/screenshot-three-2x.webp';
import screenshot3Sm from 'images/screenshot-three.jpg';
import screenshot3SmWebP from 'images/screenshot-three.webp';

const MotionHeading = m(Heading);
const MotionText = m(Text);

const Work = () => {
  const { y } = useWindowScrollPosition();
  const isDesktop = useMediaQuery('(min-width: 80em)');
  const shouldReduceMotion = useReducedMotion();

  return (
    <Flex
      as="section"
      id="work"
      position="relative"
      pt={{ base: 32, xl: 72 }}
      pb={{ base: 24, md: 36, xl: 54 }}
      bg="#062D36"
      color="#FFFFFF"
      zIndex="2"
    >
      <Text
        textStyle="accent"
        className="section-number"
        right="-4%"
        bottom={{ base: '-5%', xl: '-10%' }}
        color="#062D36"
      >
        02
      </Text>
      <Container maxW="7xl">
        <Grid templateColumns={{ base: '1fr', xl: '0.5fr 0.5fr' }}>
          <Flex
            position="relative"
            maxW={{ base: '100%', sm: '75ch', xl: '57.5ch', '2xl': '60ch' }}
            direction="column"
            mr={{ base: 'auto', xl: '6', '2xl': 0 }}
            ml={{ base: 'auto', '2xl': '0' }}
            mb={{ base: '0', sm: '20', md: '0' }}
            textAlign={{ base: 'center', xl: 'left' }}
          >
            <StaggeredFade>
              <MotionHeading
                fontWeight={700}
                fontSize={{ base: '6xl', md: '7xl', xl: '8xl' }}
                lineHeight="1"
                mb="4"
                as="h2"
                custom={isDesktop && 'left'}
                variants={isDesktop ? headingVariant : itemVariant}
                className={isDesktop && 'heading--l'}
                key={isDesktop}
              >
                Work
              </MotionHeading>
              <MotionText
                mt={isDesktop ? '24' : '0'}
                mb="4"
                variants={itemVariant}
                textStyle="paragraph"
              >
                I use HTML, SASS &amp; JavaScript every day, and I love to utilise bleeding-edge
                technology to craft unique and modern experiences.
              </MotionText>
              <MotionText mb="4" variants={itemVariant} textStyle="paragraph">
                I have extensive experience with the JAMStack, as well as JavaScript frameworks like
                React and jQuery. I also dabble with WordPress and PHP, and have also built custom
                plugins for customized functionality.
              </MotionText>
              <MotionText variants={itemVariant} textStyle="paragraph">
                I run Node.js-based workflow automation via Gulp or Grunt for web projects, and I've
                written other Node scripts to automate mundane tasks. I also know my way around
                Sketch and Figma, and I'm comfortable using Adobe Photoshop, Illustrator and
                Premiere.
              </MotionText>
            </StaggeredFade>
          </Flex>
          <Flex position="relative" direction={{ base: 'row', xl: 'column' }}>
            <ParallaxItem
              w={{ base: '75%', sm: '66%' }}
              alignSelf="flex-start"
              zIndex="1"
              rounded={6}
              boxShadow="dark-lg"
              scroll={y}
              min={isDesktop && !shouldReduceMotion ? 200 : 100}
              max={isDesktop && !shouldReduceMotion ? 400 : 150}
              speed={isDesktop && !shouldReduceMotion && 0.12}
              initial={{ translateY: '-50%' }}
              mt={{ base: '-5%', md: '7.5%', xl: '0%' }}
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
                  srcSet={`${screenshot2SmWebP} 412w, ${screenshot2WebP} 824w`}
                  type="image/webp"
                />
                <img
                  src={screenshot2}
                  srcSet={`${screenshot2Sm} 412w, ${screenshot2} 824w`}
                  sizes="(min-width: 30em) 66vw, (min-width: 80em) 33vw, (min-width: 100em) 412px, 75vw"
                  alt="Digital Assistant registration flow"
                  style={{ borderRadius: '6px' }}
                  loading="lazy"
                />
              </picture>
            </ParallaxItem>
            <ParallaxItem
              w={{ base: '44%', xl: '80%' }}
              alignSelf={{ base: 'center', xl: 'flex-end' }}
              zIndex="1"
              rounded={6}
              boxShadow="dark-lg"
              scroll={y}
              min={isDesktop && !shouldReduceMotion ? -400 : 100}
              max={isDesktop && !shouldReduceMotion ? -200 : 160}
              speed={isDesktop && !shouldReduceMotion && -0.14}
              mr={{ base: '-10%', xl: '0%' }}
              ml={{ base: '-10%', xl: 'auto' }}
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
                  srcSet={`${screenshot1SmWebP} 500w, ${screenshot1WebP} 1000w`}
                  type="image/webp"
                />
                <img
                  src={screenshot1}
                  srcSet={`${screenshot1Sm} 500w, ${screenshot1} 1000w`}
                  sizes="(min-width: 80em) 22vw, (min-width: 100em) 500px, 44vw"
                  alt="Digital Assistant app UI"
                  style={{ borderRadius: '6px' }}
                  loading="lazy"
                />
              </picture>
            </ParallaxItem>
            <ParallaxItem
              w={{ base: '50%', sm: '30%', xl: '50%' }}
              alignSelf={{ base: 'flex-start', xl: 'flex-end' }}
              zIndex="1"
              rounded={6}
              boxShadow="dark-lg"
              scroll={y}
              min={isDesktop && !shouldReduceMotion ? -400 : 100}
              max={isDesktop && !shouldReduceMotion ? -250 : 160}
              speed={isDesktop && !shouldReduceMotion && -0.125}
              initial={{ translateY: '100%' }}
              mt={{ base: '-25%', xl: '0%' }}
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
                  srcSet={`${screenshot3SmWebP} 312w, ${screenshot3WebP} 600w`}
                  type="image/webp"
                />
                <img
                  src={screenshot3}
                  srcSet={`${screenshot3Sm} 312w, ${screenshot3} 600w`}
                  sizes="(min-width: 30em) 30vw, (min-width: 80em) 25vw, (min-width: 100em) 312px, 50vw"
                  alt="adenin Blog posts"
                  style={{ borderRadius: '6px' }}
                  loading="lazy"
                />
              </picture>
            </ParallaxItem>
          </Flex>
        </Grid>
      </Container>
    </Flex>
  );
};

export default Work;
