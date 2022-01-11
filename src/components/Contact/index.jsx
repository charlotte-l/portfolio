import React from 'react';
import { Container, Box, Flex, Heading, Link } from '@chakra-ui/react';
import * as styles from "../../styles/section-contact.module.scss";
import StaggeredFade from 'components/common/StaggeredFade';
import { itemVariant } from 'components/common/constants';
import ContactFly from './ContactFly';
import { socialNetworks } from './SocialNetworks';
import { Comets } from 'components/Graphics/Comets';
// import { Bridge } from '../Graphics/Bridge';
import bridge from 'images/bridge.svg';

import { motion, useReducedMotion } from 'framer-motion';

const MotionContainer = motion(Container);
const MotionFlex = motion(Flex);

const Contact = (props) => {
  const shouldReduceMotion = useReducedMotion();
  
  return (
    <Flex
      as="section"
      id="contact"
      className={styles.skyBG}
      direction="column"
      justifyContent="flex-end"
      pt={{ base: 30, md: 48, xl: 60 }}
      pb={{ base: 8, sm: 20, md: 12 }}
      minH={{ base: "100vh", "2xl": "110vh" }}
      position="relative"
      color="#FFF"
      _before={{
        content: "''",
        position: "absolute",
        left: "0",
        top: "0",
        width: "100%",
        height: "100%",
        backgroundImage: [`url("${bridge}"), linear-gradient(to bottom, #062D36 20%, rgba(0,0,0,0) 21%)`, null, null, null, null, null, `url("${bridge}"), linear-gradient(to bottom, #062D36 30%, rgba(0,0,0,0) 31%)`],
        backgroundSize: "cover",
        backgroundPosition: "50% 0%",
        pointerEvents: "none",
      }}
    >
      <StaggeredFade>
        <MotionContainer maxW="3xl" pt={{ base: "36", "3xl": 72 }} pb="20" mx="auto" textAlign={{ base: "center", md: "left" }} zIndex="1" variants={itemVariant}>
          <Heading as="h2" fontSize={{ base: '5xl', md: '6xl', xl: '7xl' }}>
            <Link href="mailto:cel.cameron@protonmail.com" title="Email Charlotte">Drop me a line</Link>, I'd love to hear from&nbsp;you!
          </Heading>
        </MotionContainer>
        <MotionFlex w="100%" position='relative' direction={{ base: "column-reverse", md: "column" }} variants={itemVariant}>
          {!shouldReduceMotion && <Comets style={{ position: "absolute", pointerEvents: "none", height: "300%", top: "-150%", zIndex: "0" }} /> }
          <Box w="3xl" maxW="100%" h="30vh" mx="auto" position="relative" display={{ base: "flex" }} justifyContent={{ base: "space-evenly" }}>
            {socialNetworks && socialNetworks.map((network) => <ContactFly key={network.id} icon={network.icon} link={network.url} x={network.x} y={network.y} />)}
          </Box>
        </MotionFlex>
      </StaggeredFade>
    </Flex>
  );
};

export default Contact;
