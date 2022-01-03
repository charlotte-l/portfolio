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

const SideProjects = (props) => {
  return (
    <Flex
      as="section"
      id="side-projects"
      position="relative"
      pt={{ base: 32, xl: 56 }}
      pb={{ base: 32, md: 56, xl: 72 }}
      bg="#062D36"
      color="#FFF"
      zIndex="0"
    >
      <Text textStyle='accent' className="section-number" right="-4%" bottom="10%" color="#062D36">03</Text>
      <Container maxW="5xl" textAlign="center" zIndex='2'>
        <StaggeredFade>
          <Box mb="16">
            <MotionHeading
              fontWeight={700}
              fontSize={{ base: '6xl', md: '7xl', xl: '8xl' }}
              lineHeight="1"
              mb="4"
              as="h2"
              variants={itemVariant}
            >
              Side projects
            </MotionHeading>
            <MotionText maxW="66ch" mx="auto" variants={itemVariant} textStyle='paragraph'>
              When I get chance, I like to mess around with various projects to learn new skills and flex my right brain. Here's a couple of my most recent experiments.
            </MotionText>
          </Box>
          <Grid templateColumns={{ base: '1fr', md: '0.37fr 0.64fr' }} gap="8" mb="8">
            {projects.slice(0, 2).map((project, i) => {
              return (
                <MotionBox key={i} variants={itemVariant}>
                  <ProjectWrapper title={project.title} info={project.info} img={project.img} link={project.link} />
                </MotionBox>
              )
            })}
          </Grid>
          <Grid templateColumns={{ base: '1fr', md: '0.64fr 0.37fr' }} gap="8" mb="8">
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
