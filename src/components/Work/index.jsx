import React from 'react';
import { Container, Flex, SimpleGrid, Box, Text, Heading, Link, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Monkey } from './Monkey';
import Carousel from '../../components/common/Carousel';

import StaggeredFade from 'components/common/StaggeredFade';
import { itemVariant } from 'components/common/constants';

import screenshotOne from "./screenshots/screenshot-one.png";
import screenshotTwo from "./screenshots/screenshot-two.png";
import screenshotThree from "./screenshots/screenshot-three.png";
import screenshotFour from "./screenshots/screenshot-four.png";
import screenshotFive from "./screenshots/screenshot-five.png";

const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionLink = motion(Link);
const variants = itemVariant;

const Work = () => {
  return (
    <Flex as="section" id="work" position="relative" py={{ base: 30, md: 48 }} bgGradient="linear(to-b, #062D36, #060836)">
      <Box w="10vw" position="absolute" right="5vw" top="0">
        <Monkey width="100%" />
      </Box>
      <Container maxW="5xl" minH="40vh" px="0">
        <SimpleGrid columns={2}>
          <Flex w="60ch" direction="column" justifyContent="center">
            <StaggeredFade>
              <MotionHeading
                fontWeight={700}
                fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
                lineHeight={'1.5'}
                as="h2"
                variants={variants}
              >
                Work
              </MotionHeading>
              <MotionText mb="4" variants={variants}>
                I use HTML &amp; CSS (usually SASS) every day, and I try to keep up with the latest features while maintaining graceful degradation.
                I use JavaScript fairly often, usually with React. I also run Node.js-based workflow automation via Gulp or Grunt for web projects, 
                and I've written other Node scripts to automate mundane tasks.
              </MotionText>
              <MotionText mb="4" variants={variants}>
                I have extensive experience with the JAMStack - you could say that static sites are my jam. I also dabble with WordPress and PHP as needed and have also built custom plugins for unique functionality.
              </MotionText>
              <MotionText variants={variants}>
                I know my way around Sketch and Figma, and am comfortable using Adobe Photoshop, Illustrator and Premiere.
              </MotionText>
            </StaggeredFade>
          </Flex>
          <Flex w="30vw" pl="24" direction={"column"} justifyContent={'center'}>
            <Carousel>
              <Box w="100%" h="300px">
                <Image src={screenshotOne} alt='Dan Abramov' boxSize='100%' fit='cover' />
              </Box>
              <Box w="100%" h="300px">
                <Image src={screenshotTwo} alt='Dan Abramov' boxSize='100%' fit='cover' />
              </Box>
              <Box w="100%" h="300px">
                <Image src={screenshotThree} alt='Dan Abramov' boxSize='100%' fit='cover' />
              </Box>
              <Box w="100%" h="300px">
                <Image src={screenshotFour} alt='Dan Abramov' boxSize='100%' fit='cover' />
              </Box>
              <Box w="100%" h="300px">
                <Image src={screenshotFive} alt='Dan Abramov' boxSize='100%' fit='cover' />
              </Box>
            </Carousel>
          </Flex>
        </SimpleGrid>
      </Container>
    </Flex>
  );
};

export default Work;
