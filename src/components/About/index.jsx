import React, { useContext, useMemo } from 'react';
import { Container, Heading, Flex, SimpleGrid, Box, Text } from "@chakra-ui/react";

import { motion } from 'framer-motion';
import StaggeredFade from 'components/common/StaggeredFade';
import { itemVariant } from 'components/common/constants';

import { Birds } from './Birds';
import Forest from './Forest';

const MotionText = motion(Text);

const About = () => {
  const variants = itemVariant;

  return (
    <Flex as="section" id="about" direction="column" position="relative" bg="#062D36" pb={{ base: 30, md: 48 }}>
      <Box w="100%" transform="translateY(-12.5%)" overflow="hidden">
        <Forest width="105%" style={{transform: "translateX(-2.5%)"}} />
      </Box>
      <Box w="40vw" position="absolute" left="-1px" bottom="0">
        <Birds width="100%" />
      </Box>
      <Container maxW="5xl">
        <SimpleGrid columns={2} className="about-wrapper">
          <Box></Box>
          <Box>
            <StaggeredFade>
              <MotionText variants={variants} color={'white'}>
                I like to resolve design problems, create smart user interface and imagine useful interaction, developing rich web experiences that work across all platforms and devices.
              </MotionText>
              <MotionText variants={variants} color={'white'}>
                Although I'm very familiar with using frameworks, my websites are primarily hand-coded using HTML5, CSS3, SVG and JavaScript.
              </MotionText>
              <MotionText variants={variants} color={'white'}>
                With a strong emphasis on "Progressive Enhancement", I look for creative ways to push the boundaries of website front-end code without compromising on browser support and performance.
              </MotionText>
            </StaggeredFade>
          </Box>
        </SimpleGrid>
      </Container>
    </Flex>
  );
};

export default About;
