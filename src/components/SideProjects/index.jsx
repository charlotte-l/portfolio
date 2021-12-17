import React from 'react';
import { Container, Flex, Heading, Grid, Link, Box, Text, Image } from '@chakra-ui/react';
import { Rabbits } from '../Animals/Rabbits';
import { Stag } from '../Animals/Stag';
import ProjectWrapper from './ProjectWrapper';
import { projects } from './Projects';

import { motion } from 'framer-motion';
import StaggeredFade from 'components/common/StaggeredFade';
import { itemVariant } from 'components/common/constants';

const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const variants = itemVariant;

const SideProjects = () => {

  return (
    <Flex as="section" id="side-projects" position="relative" overflow="hidden" py={{ base: 30, md: 48 }} bgGradient="linear(to-b, #060836, #2B023E)">
      <Box w="25vw" position="absolute" right="-1.5vw" top="0">
        <Stag width="100%" />
      </Box>
      <Container maxW="5xl" textAlign="center">
        <StaggeredFade>
          <Box mb="16">
            <MotionHeading
              fontWeight={700}
              fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
              lineHeight={'1.5'}
              as="h2"
              variants={variants}
            >
              Side projects
            </MotionHeading>
            <MotionText maxW="60ch" mx="auto" variants={variants}>
              When I get chance, I like to mess around with small projects to learn new skills and flex my right brain. Here's a couple of my most recent projects.
            </MotionText>
          </Box>
          <Grid templateColumns='0.37fr 0.64fr' gap={6}>
            {projects.slice(0,2).map((project, i) => <ProjectWrapper key={i} projectInfo={project} variants={variants} />)}
          </Grid>
          <Grid templateColumns='0.64fr 0.37fr' gap={6}>
            {projects.slice(2).map((project, i) => <ProjectWrapper key={i} projectInfo={project} variants={variants} />)}
          </Grid>
        </StaggeredFade>
      </Container>
      <Box w="25vw" position="absolute" left="-3.5vw" bottom="0">
        <Rabbits width="100%" />
      </Box>
    </Flex>
  );
};

export default SideProjects;
