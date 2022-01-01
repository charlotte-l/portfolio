import { Box, Stack, Text } from '@chakra-ui/layout';
import React from 'react';

const Footer = () => {
  return (
    <Box maxW="4xl" mx="auto" p="4" color="#FFF">
      <Stack direction={{base: "column", md: "row"}} justifyContent="space-between" alignItems="center" fontSize={{ base: 'xs', md: 'md' }}>
        <Text textShadow="0px 0px 8px #61336c" zIndex="2">Made with 🤍 by Charlotte Cameron. &copy; {new Date().getFullYear()}.</Text>
        <Text textShadow="0px 0px 8px #61336c" zIndex="2">Thanks for scrolling all the way! 👋</Text>
      </Stack>
    </Box>
  );
};

export default Footer;
