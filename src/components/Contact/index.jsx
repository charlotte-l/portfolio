import React from 'react';
import { Container, Box, Flex, Heading, Link } from '@chakra-ui/react';
import * as sectionStyles from '../../styles/section-contact.module.scss'
import Fireflies from './Fireflies';
import ContactFly from './ContactFly';
import { socialNetworks } from './SocialNetworks';

const Contact = () => {

  return (
    <Flex as="section" id="contact" direction="column" pt={{ base: 30, md: 48 }} pb='0' bgGradient="linear(to-b, #2B023E, #60336B)">
      <Container maxW="5xl" py="20">
        <Container mx="0px">
          <Heading as="h2">
            <Link href="mailto:">Drop me a line</Link>, I'd love to hear from you!
          </Heading>
        </Container>
      </Container>
      <Box w="100%" position='relative'>
        <Box w="100%">
          <Fireflies width="100%" overflow='visible' />
        </Box>
        <Box w="100%" h="100%" position='absolute' bottom='0' left='0'>
          {socialNetworks && socialNetworks.map((network) => <ContactFly key={network.id} icon={network.icon} link={network.url} x={network.x} y={network.y} />)}
        </Box>
      </Box>
    </Flex>
  );
};

export default Contact;
