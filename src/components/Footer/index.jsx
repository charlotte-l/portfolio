import { Box, Stack, Text } from '@chakra-ui/layout';
import React from 'react';

const Footer = () => {
  return (
    <Box p="4" backgroundColor="#61336c">
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Text>Made with 🤍 by Charlotte Cameron. &copy; {new Date().getFullYear()}.</Text>
        <Text>Thanks for scrolling all the way! 👋</Text>
      </Stack>
    </Box>
  );
};

export default Footer;
