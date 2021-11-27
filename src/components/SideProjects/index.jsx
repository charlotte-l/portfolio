import React from 'react';
import { Container, Flex, Heading, SimpleGrid, Box, Text } from '@chakra-ui/react';
import { Rabbits } from './Rabbits';
import { Stag } from './Stag';
import { projects } from './Projects';

const SideProjects = () => {
  return (
    <Flex as="section" id="side-projects" position="relative" overflow="hidden" py={{ base: 30, md: 48 }} bgGradient="linear(to-b, #060836, #2B023E)">
      <Box w="25vw" position="absolute" right="-1.5vw" top="0">
        <Stag width="100%" />
      </Box>
      <Container maxW="5xl" textAlign="center">
        <Box mb="16">
          <Heading as="h2">Side projects</Heading>
          <Text>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor
              voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.
          </Text>
        </Box>
        <SimpleGrid columns={2}>
          {projects.map((project, i) => {
            const { title, info, img } = project;
            return (
              <Box key={i} mb="8">
                <Heading as="h3">{title}</Heading>
                <Text>
                  {info}
                </Text>
              </Box>
            );
          })}
        </SimpleGrid>
      </Container>
      <Box w="25vw" position="absolute" left="-3.5vw" bottom="0">
        <Rabbits width="100%" />
      </Box>
    </Flex>
  );
};

export default SideProjects;
