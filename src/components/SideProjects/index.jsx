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
      pb={{ base: 32, md: 96 }}
      bg="#062D36"
      color="#FFF"
      zIndex="0"
    >
      <Container maxW="5xl" textAlign="center" zIndex='2' mb="56">
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
