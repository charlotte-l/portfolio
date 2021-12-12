import React from 'react';
import { Container, Flex, Stack, Box, Text, Heading, Link, Image } from '@chakra-ui/react';
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

const MotionText = motion(Text);
const MotionHeading = motion(Heading);
const variants = itemVariant;

const Work = () => {
  return (
    <Flex as="section" id="work" position="relative" py={{ base: 30, md: 48 }} bgGradient="linear(to-b, #062D36, #060836)">
      <Box w="10vw" position="absolute" right="5vw" top="0">
        <Monkey width="100%" />
      </Box>
      <Container maxW="5xl" minH="40vh" px="0">
        <Stack spacing="24" direction="row">
          <Flex w="60ch" px="3" direction="column" justifyContent="center">
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
              <MotionHeading as="h3" variants={variants}>Work sample</MotionHeading>
              <MotionText mb="4" variants={variants}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor
                  voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.
              </MotionText>
              <MotionText mb="4" variants={variants}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor
                  voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.
              </MotionText>
              <Link href="" title="adenin Technologies">Go to website</Link>
            </StaggeredFade>
          </Flex>
          <Box w="30vw">
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
          </Box>
        </Stack>
      </Container>
    </Flex>
  );
};

export default Work;
