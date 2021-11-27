import React from 'react';
import { Container, Flex, SimpleGrid, Box, Text, Heading, Stack, Link } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Monkey } from './Monkey';

import StaggeredFade from 'components/common/StaggeredFade';
import { itemVariant } from 'components/common/constants';

const MotionText = motion(Text);
const MotionHeading = motion(Heading);
const variants = itemVariant;

const Work = () => {
  return (
    <Flex as="section" id="work" position="relative" py={{ base: 30, md: 48 }} bgGradient="linear(to-b, #062D36, #060836)">
      <Box w="10vw" position="absolute" right="5vw" top="0">
        <Monkey width="100%" />
      </Box>
      <Container maxW="5xl">
        <Stack direction="row" spacing="36">
          <StaggeredFade>
            <MotionHeading
              fontWeight={700}
              fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
              lineHeight={'1.5'}
              as="h2"
              variants={variants}
            >
              Work
            </MotionHeading>
            <MotionHeading as="h3" variants={variants}>Work sample</MotionHeading>
            <MotionText mb="4" variants={variants}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor
                voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.
            </MotionText>
            <MotionText mb="4" variants={variants}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor
                voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.
            </MotionText>
            <Link href="" title="adenin Technologies">Go to website</Link>
          </StaggeredFade>
          <Box>
            Slider
          </Box>
        </Stack>
      </Container>
    </Flex>
  );
};

export default Work;
