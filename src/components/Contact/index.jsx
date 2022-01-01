import React from 'react';
import { Container, Box, Flex, Heading, Link } from '@chakra-ui/react';
import * as styles from "../../styles/section-contact.module.scss";
import StaggeredFade from 'components/common/StaggeredFade';
import { itemVariant } from 'components/common/constants';
import ContactFly from './ContactFly';
import { socialNetworks } from './SocialNetworks';
import { Comets } from 'components/Graphics/Comets';
import { Bridge } from '../Graphics/Bridge';
import { motion } from 'framer-motion';

const MotionContainer = motion(Container);
const MotionFlex = motion(Flex);

const Contact = () => {

  return (
    <Flex
      as="section"
      id="contact"
      className={styles.skyBG}
      direction="column"
      pt={{ base: 30, md: 36 }}
      pb={{ base: 8, sm: 20, md: 12 }}
      position="relative"
      color="#FFF"
    >
      <Bridge style={{position: "absolute", pointerEvents: "none", height: "auto", width: "100%", top: "-18vw", aspectRatio: "3877.3 / 2611.2", zIndex: "1" }} />
      <StaggeredFade>
        <MotionContainer maxW="4xl" pt="32" pb="24" mx="auto" zIndex="1" variants={itemVariant}>
          <Heading as="h2" fontSize={{ base: '4xl', md: '5xl', xl: '7xl' }} maxW="3xl">
            <Link href="mailto:cel.cameron@protonmail.com" title="Email Charlotte">Drop me a line</Link>, I'd love to hear from you!
          </Heading>
        </MotionContainer>
        <MotionFlex w="100%" position='relative' direction={{ base: "column-reverse", md: "column" }} variants={itemVariant}>
          <Comets style={{position: "absolute", pointerEvents: "none", height: "300%",  top: "-150%", zIndex: "0"}} />
          <Box w="4xl" maxW="100%" h="30vh" mx="auto" position="relative" display={{ base: "flex" }} justifyContent={{ base: "space-evenly" }}>
            {socialNetworks && socialNetworks.map((network) => <ContactFly key={network.id} icon={network.icon} link={network.url} x={network.x} y={network.y} />)}
          </Box>
        </MotionFlex>
      </StaggeredFade>
    </Flex>
  );
};

export default Contact;
