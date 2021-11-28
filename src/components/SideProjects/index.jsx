import React from 'react';
import { Container, Flex, Heading, SimpleGrid, Box, Text } from '@chakra-ui/react';
import { Rabbits } from './Rabbits';
import { Stag } from './Stag';
import { projects } from './Projects';


import { motion } from 'framer-motion';
import StaggeredFade from 'components/common/StaggeredFade';
import { itemVariant } from 'components/common/constants';

const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionBox = motion(Box);

const SideProjects = () => {
  const variants = itemVariant;

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
            <MotionText variants={variants}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor
              voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.
            </MotionText>
          </Box>
          <SimpleGrid columns={2}>
            {projects.map((project, i) => {
              const { title, info, img } = project;
              return (
                <MotionBox key={i} mb="8" variants={variants}>
                  <Heading as="h3">{title}</Heading>
                  <Text>
                    {info}
                  </Text>
                </MotionBox>
              );
            })}
          </SimpleGrid>
        </StaggeredFade>
      </Container>
      <Box w="25vw" position="absolute" left="-3.5vw" bottom="0">
        <Rabbits width="100%" />
      </Box>
    </Flex>
  );
};

export default SideProjects;
