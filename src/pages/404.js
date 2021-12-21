import React from 'react';
import { motion } from 'framer-motion';
import { Container, SimpleGrid, Box, Flex, useBreakpointValue, Heading, Text, Link, Image } from '@chakra-ui/react';

import SEO from '../components/common/seo';
import Cursor from 'components/common/Cursor';
import { Comets } from 'components/Animals/Comets';
import StaggeredFade from 'components/common/StaggeredFade';
import { itemVariant } from 'components/common/constants';
import * as styles from "../styles/not-found.module.scss";
import { Campsite } from 'components/Animals/Campsite'; 

const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionLink = motion(Link);

const variants = itemVariant;

const PageNotFound = () => {
  const showCursor = useBreakpointValue({ base: false, md: true })

  return (
    <>
      <SEO title="404: Page Not Found" />
      <Container maxW="100vw" h="100vh" className={styles.skyBG} position="relative" centerContent justifyContent='center'>
        <Comets style={{position: "absolute", pointerEvents: "none"}} />
        <SimpleGrid columns={{ md: 2 }} gap='12'>
          <Box maxH={{base: "50vh", md: "90vh", xl: "75vh"}} px={{base: '12', md: '6', xl: '12'}} zIndex='2'>
            <Campsite width="100%" height="100%" mx="auto" filter='drop-shadow(0px 12px 32px rgba(0,16,36,0.5))' />
          </Box>
          <Flex alignItems='center' textAlign={{base: "center", md: "left"}}>
            <StaggeredFade>
              <MotionHeading
                fontWeight={700}
                fontSize={{ base: '4xl', md: '5xl', xl: '7xl' }}
                letterSpacing="1.5px"
                lineHeight="1"
                as="h1"
                variants={variants}
                mb="3"
              >
                All those who wander are not&nbsp;lost...
              </MotionHeading>
              <MotionText mb='6' variants={variants} textStyle='paragraph'>
                ...but I'm afraid this page is. Let's get you&nbsp;home.
              </MotionText>
              <MotionLink href="/" textStyle='paragraph' variants={variants}>
              Back to the homepage
              </MotionLink>
            </StaggeredFade>
          </Flex>
        </SimpleGrid>
      </Container>
      {showCursor && <Cursor />}
    </>
  );
};

export default PageNotFound;