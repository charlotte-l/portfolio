import React from 'react';
import { Container, Heading, Flex, SimpleGrid, Box, Text, Link, Image } from "@chakra-ui/react";
import useWindowScrollPosition from "hooks/useWindowScrollPos";
import { motion } from 'framer-motion';
import StaggeredFade from 'components/common/StaggeredFade';
import { headingVariant, itemVariant } from 'components/common/constants';
import Forest from './Forest';
import profile1 from 'images/profile-1.jpg'
import buttons from 'images/buttons-the-cat.jpg'
import guineapigs from 'images/benny-and-godzilla.jpeg'
import ParallaxItem from 'components/common/ParallaxItem';

const MotionHeading = motion(Heading);
const MotionText = motion(Text);

const About = () => {
  const { y } = useWindowScrollPosition();

  return (
    <Flex
      as="section"
      id="about"
      direction="column"
      position="relative"
      bg="#062D36"
      color="#FFF"
      mt="-1px"
      pb={{ base: 32, md: 72 }}
      minH="100vh"
      zIndex="3"
      _before={{
        position: "absolute",
        content: "''",
        width: "66vh",
        height: "66vh",
        left: "-20%",
        bottom: "-10vh",
        borderRadius: "50%",
        background: "#062D36",
        boxShadow: "inset 0px 0px 0px 2px rgb(255 255 255 / 25%), 0px 0px 0px 59px #062D36, 0px 0px 0px 60px rgb(255 255 255 / 20%)",
      }}
    >
      <Box id="forest-wrap" w="100%" transform="translateY(-20vh)" mb="-10vh" position="relative" pointerEvents={"none"}>
        <Box overflow="hidden">
          <Forest y={y} width="105%" style={{ transform: "translateX(-2.5%)" }} />
        </Box>
      </Box>
      <Container maxW="8xl">
        <SimpleGrid columns={{ md: '2' }} className="about-wrapper">
          <Box position='relative'>
            <ParallaxItem
              w="50%"
              position="absolute"
              left="12.5%"
              top="25%"
              zIndex="1"
              scroll={y}
              speed={0.2}
              initial={{ translateY: -300 }}
              boxShadow="dark-lg"
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
              <Image src={profile1} h="100%" w="100%" rounded={6} objectFit='cover' />
            </ParallaxItem>
            <ParallaxItem
              w="25%"
              position="absolute"
              left="0%"
              top="-40%"
              zIndex="2"
              scroll={y}
              speed={0.1}
              initial={{ translateY: 100 }}
              boxShadow="dark-lg"
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
              <Image src={guineapigs} h="100%" w="100%" rounded={6} objectFit='cover' />
            </ParallaxItem>
            <ParallaxItem
              w="25%"
              position="absolute"
              right="25%"
              bottom="-10%"
              scroll={y}
              zIndex="2"
              speed={-0.1}
              initial={{ translateY: 100 }}
              boxShadow="dark-lg"
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
              <Image src={buttons} h="100%" w="100%" rounded={6} objectFit='cover' />
            </ParallaxItem>
          </Box>
          <Flex position='relative' maxW="60ch" direction="column" ml={{ base: 'auto', md: '0' }}>
            <StaggeredFade>
              <MotionHeading
                fontWeight={700}
                fontSize={{ base: '4xl', md: '6xl', xl: '8xl' }}
                lineHeight={'1.5'}
                as="h2"
                custom={'right'}
                variants={headingVariant}
                className="heading--r"
              >
                About
              </MotionHeading>
              <MotionText variants={itemVariant} mt="24" mb='4' textStyle='paragraph'>
                I have a passion for solving design problems and creating interactive, performant and functional web&nbsp;experiences.
              </MotionText>
              <MotionText variants={itemVariant} mb='4' textStyle='paragraph'>
                I'm currently a web developer at <Link title="adenin Technologies" href="#" target={"_blank"}>adenin Technologies</Link>; I built the majority of the company website. More recently, I've been developing Digital Assistant, a workplace experience and productivity app.
              </MotionText>
              <MotionText variants={itemVariant} mb='4' textStyle='paragraph'>
                Before web dev, I worked in Cybersecurity consultancy at <Link title="EY UK" href="https://www.ey.com/en_uk" target={"_blank"}>EY UK</Link>. Before that, I spent a year at <Link title="IBM UK" href="https://www.ibm.com/uk-en" target={"_blank"}>IBM UK</Link> managing technical projects.
              </MotionText>
              <MotionText variants={itemVariant} mb='4' textStyle='paragraph'>
                I have a Bachelor's degree in Physics from the <Link title="University of Manchester" href="https://www.manchester.ac.uk/" target={"_blank"}>University of Manchester</Link>. I'm also a Level 3 qualified Personal Trainer!
              </MotionText>
              <MotionText variants={itemVariant} mb='4' textStyle='paragraph'>
                I'm completely smitten with my rescue cat, Buttons, and my two guinea pigs (Godzilla and Benny).
              </MotionText>
            </StaggeredFade>
          </Flex>
        </SimpleGrid>
      </Container>
    </Flex>
  );
};

export default About;
