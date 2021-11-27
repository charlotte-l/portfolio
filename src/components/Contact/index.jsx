import React from 'react';
import { Container, Box, Flex, Heading, Link } from '@chakra-ui/react';
import * as sectionStyles from '../../styles/section-contact.module.scss'
import Fireflies from './Fireflies';
import ContactFly from './ContactFly';
import { socialNetworks } from './SocialNetworks';

const Contact = () => {

  return (
    <Flex as="section" id="contact" direction="column" pt={{ base: 30, md: 48 }} pb='0' bgGradient="linear(to-b, #2B023E, #60336B)">
      <Container maxW="6xl" py="20" mx="auto">
        <Heading as="h2" size="3xl" maxW="3xl">
          <Link href="mailto:cel.cameron@protonmail.com" color="#f2f2c8"><i>Drop me a line</i></Link>, I'd love to hear from you!
        </Heading>
      </Container>
      <Box w="100%" position='relative'>
        <Box w="100%" zIndex="0">
          <Fireflies width="100%" overflow='visible' />
        </Box>
        <Box w="6xl" h="100%" position='absolute' bottom='0' left='50%' transform="translateX(-50%)">
          {socialNetworks && socialNetworks.map((network) => <ContactFly key={network.id} icon={network.icon} link={network.url} x={network.x} y={network.y} />)}
        </Box>
      </Box>
    </Flex>
  );
};

export default Contact;
