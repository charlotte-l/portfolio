import React from 'react';
import { Container, Heading, Flex, SimpleGrid, Box, Text } from "@chakra-ui/react";

import { motion } from 'framer-motion';
import StaggeredFade from 'components/common/StaggeredFade';
import { itemVariant } from 'components/common/constants';

import { Birds } from './Birds';
import Forest from './Forest';

const MotionHeading = motion(Heading);
const MotionText = motion(Text);

const About = () => {
  const variants = itemVariant;

  return (
    <Flex as="section" id="about" direction="column" position="relative" bg="#062D36" pb={{ base: 30, md: 48 }}>
      <Box w="100%" transform="translateY(-20vh)" mb="-10vh" overflow="hidden">
        <Forest width="105%" style={{ transform: "translateX(-2.5%)" }} />
      </Box>
      <Container maxW="100%" minH="40vh" px="0">
        <SimpleGrid columns={2} className="about-wrapper" overflow="hidden">
          <Box w="40vw" transform="translateX(-25px)">
            <Birds width="100%" />
          </Box>
          <Flex maxW="60ch" px="3" direction="column" justifyContent="center">
            <StaggeredFade>
              <MotionHeading
                fontWeight={700}
                fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
                lineHeight={'1.5'}
                as="h2"
                variants={variants}
              >
                About
              </MotionHeading>
              <MotionText variants={variants}>
                I like to resolve design problems, create smart user interface and imagine useful interaction, developing rich web experiences that work across all platforms and devices.
              </MotionText>
              <MotionText variants={variants}>
                Although I'm very familiar with using frameworks, my websites are primarily hand-coded using HTML5, CSS3, SVG and JavaScript.
              </MotionText>
              <MotionText variants={variants}>
                With a strong emphasis on "Progressive Enhancement", I look for creative ways to push the boundaries of website front-end code without compromising on browser support and performance.
              </MotionText>
              <MotionText variants={variants}><br/></MotionText>
              <MotionText variants={variants}>
                Something about current work
              </MotionText>
              <MotionText variants={variants}>
                Something about what I did before this job (Cybersecurity, Physics degree). Also I'm a level 3 qualified PT!
              </MotionText>
            </StaggeredFade>
          </Flex>
        </SimpleGrid>
      </Container>
    </Flex>
  );
};

export default About;
