import React from 'react';
import { Container, Flex, Heading, Grid, Box, Text, Image } from '@chakra-ui/react';
import ProjectWrapper from './ProjectWrapper';
import { projects } from './Projects';

import { motion } from 'framer-motion';
import StaggeredFade from 'components/common/StaggeredFade';
import { itemVariant } from 'components/common/constants';

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);

const SideProjects = () => {
  return (
    <Flex
      as="section"
      id="side-projects"
      position="relative"
      pt={{ base: 32, md: 56 }}
      pb={{ base: 32, md: 32 }}
      bg="#062D36"
      color="#FFF"
      _before={{
        position: "absolute",
        content: "''",
        zIndex: "0",
        width: "78vh",
        height: "55vh",
        left: "-20%",
        bottom: "-5vh",
        borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
        transform: "rotate(35deg)",
        background: "#062D36",
        boxShadow: "inset 0px 0px 0px 2px rgb(255 255 255 / 25%), 0px 0px 0px 59px #062D36, 0px 0px 0px 60px rgb(255 255 255 / 20%)",
      }}
    >
      <Container maxW="5xl" textAlign="center" zIndex='2'>
        <StaggeredFade>
          <Box mb="16">
            <MotionHeading
              fontWeight={700}
              fontSize={{ base: '4xl', md: '6xl', xl: '8xl' }}
              lineHeight={'1.5'}
              as="h2"
              variants={itemVariant}
            >
              Side projects
            </MotionHeading>
            <MotionText maxW="65ch" mx="auto" variants={itemVariant} textStyle='paragraph'>
              When I get chance, I like to mess around with small projects to learn new skills and flex my right brain. Here's a couple of my most recent projects.
            </MotionText>
          </Box>
          <Grid templateColumns={{ base: '1fr', md: '0.37fr 0.64fr' }} gap={{ md: 6 }} mb="8" backgroundColor="#062D36">
            {projects.slice(0, 2).map((project, i) => {
              return (
                <MotionBox key={i} variants={itemVariant}>
                  <ProjectWrapper title={project.title} info={project.info} img={project.img} link={project.link} />
                </MotionBox>
              )
            })}
          </Grid>
          <Grid templateColumns={{ base: '1fr', md: '0.64fr 0.37fr' }} gap={{ md: 6 }} mb="8" backgroundColor="#062D36">
            {projects.slice(2).map((project, i) => {
              return (
                <MotionBox key={i} variants={itemVariant}>
                  <ProjectWrapper title={project.title} info={project.info} img={project.img} link={project.link} />
                </MotionBox>
              )
            })}
          </Grid>
        </StaggeredFade>
      </Container>
    </Flex>
  );
};

export default SideProjects;
