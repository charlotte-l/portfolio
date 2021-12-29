import React from 'react';
import { Container, Box, Flex, Heading, Link } from '@chakra-ui/react';
import Fireflies from './Fireflies';
import ContactFly from './ContactFly';
import { socialNetworks } from './SocialNetworks';

const Contact = () => {

  return (
    <Flex
      as="section"
      id="contact"
      direction="column"
      pt={{ base: 30, md: 36 }}
      pb={{ base: 8, sm: 20, md: 12 }}
      bg="#062D36"
      overflow="hidden"
      color="#FFF"
    >
      <Container maxW="6xl" py="20" mx="auto">
        <Heading as="h2" fontSize={{ base: '4xl', md: '5xl', xl: '7xl' }} maxW="3xl">
          <Link href="mailto:cel.cameron@protonmail.com" title="Email Charlotte">Drop me a line</Link>, I'd love to hear from you!
        </Heading>
      </Container>
      <Flex w="100%" position='relative' direction={{ base: "column-reverse", md: "column" }}>
        <Fireflies w="100%" h="30vh" overflow="hidden" zIndex="0" mt={{ base: "-22.5vh", md: "0" }} />
        <Box w="6xl" maxW="100%" h="100%" mx="auto" display={{ base: "flex" }} justifyContent={{ base: "space-evenly" }}>
          {socialNetworks && socialNetworks.map((network) => <ContactFly key={network.id} icon={network.icon} link={network.url} x={network.x} y={network.y} />)}
        </Box>
      </Flex>
    </Flex>
  );
};

export default Contact;
