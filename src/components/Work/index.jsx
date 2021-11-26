import React from 'react';
import { Container, Flex, SimpleGrid, Box, Text, Heading } from '@chakra-ui/react';
import { Monkey } from './Monkey';

const Work = () => {
  return (
    <Flex as="section" id="work" position="relative" py={{ base: 30, md: 48 }} bgGradient="linear(to-b, #062D36, #060836)">
      <Box w="10vw" position="absolute" right="5vw" top="0">
        <Monkey width="100%" />
      </Box>
      <Container maxW="5xl">
        <Heading as="h2" color={'white'}>My work</Heading>
        <SimpleGrid columns={2}>
          <Box>
            <Heading as="h3" color={'white'}>Work sample</Heading>
            <Text color={'white'} mb="4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor
               voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.
            </Text>
          </Box>
          <Box>
            {/* image to go here */}
          </Box>
        </SimpleGrid>
      </Container>
    </Flex>
  );
};

export default Work;
