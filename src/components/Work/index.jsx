import React from 'react';
import { Container, Flex, SimpleGrid, Box, Text, Heading, Link, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import useWindowScrollPosition from "hooks/useWindowScrollPos";
import ParallaxItem from 'components/common/ParallaxItem';
import StaggeredFade from 'components/common/StaggeredFade';
import { headingVariant, itemVariant } from 'components/common/constants';

import screenshot1 from "./screenshots/screenshot-one.png";
import screenshot2 from "./screenshots/screenshot-two.png";
import screenshot3 from "./screenshots/screenshot-three.png";

const MotionHeading = motion(Heading);
const MotionText = motion(Text);

const Work = () => {
  const { y } = useWindowScrollPosition();

  return (
    <Flex
      as="section"
      id="work"
      position="relative"
      py={{ base: 32, md: 48 }}
      bg="#062D36"
      color="#FFF"
      zIndex="2"
      _before={{
        position: "absolute",
        content: "''",
        width: "50vh",
        height: "50vh",
        right: "-20%",
        bottom: "-15vh",
        borderRadius: "30px",
        transform: "rotate(45deg)",
        background: "#062D36",
        boxShadow: "inset 0px 0px 0px 2px rgb(255 255 255 / 25%), 0px 0px 0px 59px #062D36, 0px 0px 0px 60px rgb(255 255 255 / 20%)",
      }}
    >
      <Container maxW="7xl" px="0">
        <SimpleGrid columns={{ md: '2' }}>
          <Flex position='relative' maxW="60ch" direction="column" mr={{ base: 'auto', xl: '0' }}>
            <StaggeredFade>
              <MotionHeading
                fontWeight={700}
                fontSize={{ base: '4xl', md: '6xl', xl: '8xl' }}
                lineHeight={'1.5'}
                as="h2"
                custom={'left'}
                variants={headingVariant}
                className='heading--l'
              >
                Work
              </MotionHeading>
              <MotionText mt="24" mb="4" variants={itemVariant} textStyle='paragraph'>
                I use HTML, SASS &amp; JavaScript every day, and I love to utilise bleeding-edge technology to craft unique and modern experiences.
              </MotionText>
              <MotionText mb="4" variants={itemVariant} textStyle='paragraph'>
                I have extensive experience with the JAMStack, as well as JavaScript frameworks like React and jQuery. I also dabble with WordPress and PHP, and have also built custom plugins for customized functionality.
              </MotionText>
              <MotionText variants={itemVariant} textStyle='paragraph'>
                I run Node.js-based workflow automation via Gulp or Grunt for web projects,
                and I've written other Node scripts to automate mundane tasks. I also know my way around Sketch and Figma, and I'm comfortable using Adobe Photoshop, Illustrator and Premiere.
              </MotionText>
            </StaggeredFade>
          </Flex>
          <Box position='relative'>
            <ParallaxItem
              w="80%"
              position="absolute"
              right="0%"
              bottom="-85%"
              zIndex="1"
              rounded={6}
              boxShadow="dark-lg"
              scroll={y}
              speed={-0.16}
              initial={{ translateY: -400 }}
              _after={{
                content: "''",
                position: "absolute",
                width: "100%",
                height: "100%",
                top: "0",
                left: "0",
                rounded: "6",
                boxShadow: "border-dark",
              }}
            >
              <Image src={screenshot1} h="100%" w="100%" rounded={6} objectFit='cover' />
            </ParallaxItem>
            <ParallaxItem
              w="66%"
              position="absolute"
              left="0%"
              top="-75%"
              zIndex="1"
              rounded={6}
              boxShadow="dark-lg"
              scroll={y}
              speed={0.15}
              initial={{ translateY: 250 }}
              _after={{
                content: "''",
                position: "absolute",
                width: "100%",
                height: "100%",
                top: "0",
                left: "0",
                rounded: "6",
                boxShadow: "border-dark",
              }}
            >
              <Image src={screenshot2} h="100%" w="100%" rounded={6} objectFit='cover' />
            </ParallaxItem>
            <ParallaxItem
              w="50%"
              position="absolute"
              right="5%"
              bottom="-50%"
              zIndex="1"
              rounded={6}
              boxShadow="dark-lg"
              scroll={y}
              speed={-0.125}
              initial={{ translateY: 100 }}
              _after={{
                content: "''",
                position: "absolute",
                width: "100%",
                height: "100%",
                top: "0",
                left: "0",
                rounded: "6",
                boxShadow: "border-dark",
              }}
            >
              <Image src={screenshot3} h="100%" w="100%" rounded={6} objectFit='cover' />
            </ParallaxItem>
          </Box>
        </SimpleGrid>
      </Container>
    </Flex>
  );
};

export default Work;
