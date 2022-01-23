import { Box, Stack, Text } from '@chakra-ui/layout';
import React from 'react';

const Footer = () => {
  return (
    <Box maxW="4xl" mx="auto" p="4" color="#FFF">
      <Stack
        direction={{ base: 'column', md: 'row' }}
        justifyContent="space-between"
        alignItems="center"
        textAlign={{ base: 'center', md: 'left' }}
      >
        <Text textStyle="paragraph-sm" textShadow="0px 0px 8px #61336c">
          Made with 🤍 by Charlotte Cameron. &copy;&nbsp;{new Date().getFullYear()}.
        </Text>
        <Text textStyle="paragraph-sm" textShadow="0px 0px 8px #61336c">
          Thanks for scrolling all the way! 👋
        </Text>
      </Stack>
    </Box>
  );
};

export default Footer;
