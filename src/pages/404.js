import React from 'react';
import { m } from 'framer-motion';
import { Container, Flex, useBreakpointValue, Heading, Text, Link } from '@chakra-ui/react';

import { itemVariant } from 'components/common/constants';
import Cursor from 'components/common/Cursor';
import Comets from 'components/Graphics/Comets';
import StaggeredFade from 'components/common/StaggeredFade';
import SEO from '../components/common/seo';

import * as styles from '../styles/not-found.module.scss';

const MotionHeading = m(Heading);
const MotionText = m(Text);
const MotionLink = m(Link);

const variants = itemVariant;

const PageNotFound = () => {
  const showCursor = useBreakpointValue({ base: false, md: true });

  return (
    <>
      <SEO title="404: Page Not Found" />
      <Container
        maxW="100vw"
        h="100vh"
        className={styles.skyBG}
        position="relative"
        centerContent
        justifyContent="center"
      >
        <Comets style={{ position: 'absolute', pointerEvents: 'none' }} />
        <Flex alignItems="center" textAlign={{ base: 'center', md: 'left' }}>
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
            <MotionText mb="6" variants={variants} textStyle="paragraph">
              ...but I'm afraid this page is. Let's get you&nbsp;home.
            </MotionText>
            <MotionLink href="/" textStyle="paragraph" variants={variants}>
              Back to the homepage
            </MotionLink>
          </StaggeredFade>
        </Flex>
      </Container>
      {showCursor && <Cursor />}
    </>
  );
};

export default PageNotFound;
