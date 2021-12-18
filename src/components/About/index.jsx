import React from 'react';
import { Container, Heading, Flex, SimpleGrid, Box, Text, Link } from "@chakra-ui/react";

import { motion } from 'framer-motion';
import StaggeredFade from 'components/common/StaggeredFade';
import { itemVariant } from 'components/common/constants';

import { Birds } from '../Animals/Birds';
import Forest from './Forest';

const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const variants = itemVariant;

const About = () => {
  return (
    <Flex as="section" id="about" direction="column" position="relative" bg="#062D36" mt="-1px" pb={{ base: 32, md: 48 }}>
      <Box id="forest-wrap" w="100%" transform="translateY(-20vh)" mb="-10vh" position="relative" pointerEvents={"none"}>
        <Box overflow="hidden">
          <Forest width="105%" style={{ transform: "translateX(-2.5%)" }} />
        </Box>
      </Box>
      <Container maxW="100%" minH="40vh" px="0">
        <SimpleGrid columns={{md: '2'}} className="about-wrapper" overflow="hidden">
          <Box w={{base: "66.66vw", md: "40vw"}} transform="translateX(-25px)">
            <Birds width="100%" />
          </Box>
          <Flex maxW="60ch" px="3" direction="column" justifyContent="center" ml={{base: 'auto', md: '0'}}>
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
              <MotionText variants={variants} mb='4' textStyle='paragraph'>
                I have a passion for solving design problems and creating interactive, performant and functional web experiences. 
              </MotionText>
              <MotionText variants={variants} mb='4' textStyle='paragraph'>
                I'm currently a web developer at <Link title="adenin Technologies" href="#" target={"_blank"}>adenin Technologies</Link>; I built the majority of the company website. More recently, I've been developing Digital Assistant, a workplace experience and productivity app.
              </MotionText>
              <MotionText variants={variants} mb='4' textStyle='paragraph'>
                Before web dev, I worked in Cybersecurity consultancy at <Link title="EY UK" href="https://www.ey.com/en_uk" target={"_blank"}>EY UK</Link>. Before that, I spent a year at <Link title="IBM UK" href="https://www.ibm.com/uk-en" target={"_blank"}>IBM UK</Link> managing technical projects.
              </MotionText>
              <MotionText variants={variants} mb='4' textStyle='paragraph'>
                I have a Bachelor's degree in Physics from the <Link title="University of Manchester" href="https://www.manchester.ac.uk/" target={"_blank"}>University of Manchester</Link>. I'm also a Level 3 qualified Personal Trainer!
              </MotionText>
            </StaggeredFade>
          </Flex>
        </SimpleGrid>
      </Container>
    </Flex>
  );
};

export default About;
