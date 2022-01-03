import React from 'react';
import { Container, Heading, Flex, SimpleGrid, Box, Text, Link, Image } from "@chakra-ui/react";
import useWindowScrollPosition from "hooks/useWindowScrollPos";
import useIsDesktop from 'hooks/useIsDesktop';
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

const About = (props) => {
  const { y } = useWindowScrollPosition()
  const isDesktop = useIsDesktop()

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
      <Box id="forest-wrap" w="100%" transform="translateY(-20vh)" mb="-10vh" position="relative" pointerEvents={"none"}>
        <Forest y={y} width={isDesktop ? "105%" : "150%"} translateX={isDesktop ? "-2.5%" : "-25%"} />
      </Box>
      <Text textStyle='accent' className="section-number" right="-4%" bottom={{ base: "-7.5%", xl: "-5%" }} color="#062D36">01</Text>
      <Container maxW="8xl" pt={{ xl: 32 }}>
        <SimpleGrid columns={{ xl: '2' }} className="about-wrapper">
          <Flex position='relative' gridRow={{ base: "2", xl: "1" }} justifyContent={{ base: "center", xl: "unset" }}>
            <ParallaxItem
              w={{ base: "25%", sm: "20%", xl: "25%" }}
              zIndex="2"
              scroll={y}
              speed={isDesktop ? 0.2 : 0.05}
              alignSelf={{ base: "center", xl: "flex-start" }}
              initial={{ translateY: "-125%" }}
              mt={{ base: "20%", xl: "0%" }}
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
              w={{ base: "50%", sm: "33%", xl: "50%" }}
              zIndex="1"
              scroll={y}
              speed={isDesktop ? 0.1 : 0.05}
              alignSelf="center"
              initial={{ translateY: "-12.5%" }}
              ml="-2.5%"
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
              w={{ base: "25%", sm: "20%", xl: "25%" }}
              scroll={y}
              zIndex="2"
              speed={isDesktop ? -0.1 : 0.05}
              alignSelf={{ base: "center", xl: "flex-end" }}
              initial={{ translateY: "100%" }}
              mt={{ base: "-33.33%", xl: "0%" }}
              ml="-2.5%"
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
          </Flex>
          <Flex position='relative' maxW={{ base: "100%", sm: "75ch", xl: "60ch" }} direction="column" mx={{ base: 'auto', xl: '0' }} textAlign={{ base: "center", xl: "left" }}>
            <StaggeredFade>
              <MotionHeading
                fontWeight={700}
                fontSize={{ base: '6xl', md: "7xl", xl: '8xl' }}
                lineHeight="1"
                mb="4"
                as="h2"
                custom={isDesktop && 'right'}
                variants={isDesktop ? headingVariant : itemVariant}
                className={isDesktop && "heading--r"}
              >
                About
              </MotionHeading>
              <MotionText variants={itemVariant} mt={isDesktop ? "24" : "0"} mb='4' textStyle='paragraph'>
                I have a passion for solving design problems and creating interactive, performant and functional web&nbsp;experiences.
              </MotionText>
              <MotionText variants={itemVariant} mb='4' textStyle='paragraph'>
                I'm currently a web developer at <Link title="adenin Technologies" href="#" target={"_blank"} rel="nofollow noopener">adenin Technologies</Link>; I built the majority of the company website. More recently, I've been developing Digital Assistant, a workplace experience and productivity app.
              </MotionText>
              <MotionText variants={itemVariant} mb='4' textStyle='paragraph'>
                Before web dev, I worked in Cybersecurity consulting at <Link title="EY UK" href="https://www.ey.com/en_uk" target={"_blank"} rel="nofollow noopener">EY UK</Link>. Before <em>that</em>, I spent a year at <Link title="IBM UK" href="https://www.ibm.com/uk-en" target={"_blank"} rel="nofollow noopener">IBM UK</Link> managing technical projects.
              </MotionText>
              <MotionText variants={itemVariant} mb='4' textStyle='paragraph'>
                I have a Bachelor's degree in Physics from the <Link title="University of Manchester" href="https://www.manchester.ac.uk/" target={"_blank"} rel="nofollow noopener">University of Manchester</Link>. I'm also a Level 3 qualified Personal Trainer! I'm completely smitten with my rescue cat, Buttons, and my two guinea pigs (Godzilla and Benny).
              </MotionText>
            </StaggeredFade>
          </Flex>
        </SimpleGrid>
      </Container>
    </Flex>
  );
};

export default About;
