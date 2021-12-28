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
    <Flex as="section" id="work" position="relative" py={{ base: 32, md: 48 }} bg="#062D36">
      <Container maxW="8xl" px="0">
        <SimpleGrid columns={{md: '2'}}>
          <Flex position='relative' maxW="60ch"  direction="column" mr={{base: 'auto', xl: '0'}}>
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
          <Box>
            <ParallaxItem w="80%" ml='auto' mt="48" scroll={y} speed={0.1} initial={{translateY: -400}}>
              <Image src={screenshot1} h="100%" w="100%" rounded={6} boxShadow="2xl" objectFit='cover' />
            </ParallaxItem>
            <ParallaxItem w="66%" ml='auto' mr="20%" mt="-10%" scroll={y} speed={-0.1} initial={{translateY: 250}}>
              <Image src={screenshot2} h="100%" w="100%" rounded={6} boxShadow="dark-lg" objectFit='cover' />
            </ParallaxItem>
            <ParallaxItem w="50%" ml="-20%" mt="-20%" scroll={y} speed={-0.25} initial={{translateY: 100}}>
              <Image src={screenshot3} h="100%" w="100%" rounded={6} boxShadow="dark-lg" objectFit='cover' />
            </ParallaxItem>
          </Box>
        </SimpleGrid>
      </Container>
    </Flex>
  );
};

export default Work;
