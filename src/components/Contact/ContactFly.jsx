import React from 'react';
import { LinkBox, LinkOverlay, Flex } from '@chakra-ui/layout';
import { m, useReducedMotion } from 'framer-motion';

const MotionLinkBox = m(LinkBox);

const ContactFly = ({ link, icon, x, y }) => {
  const shouldReduceMotion = useReducedMotion();
  const delay = Math.floor(parseInt(x) / 10) / -2;

  return (
    <MotionLinkBox
      position={{ base: 'relative', md: 'absolute' }}
      left={{ md: x }}
      top={{ md: y }}
      style={{ transition: 'cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.5s' }}
      animation={!shouldReduceMotion && `bob 5s infinite ${delay}s alternate-reverse`}
      role="group"
    >
      <Flex
        rounded="full"
        p={{ base: '6', md: '8' }}
        w={{ base: '100%' }}
        h="auto"
        align="center"
        justify="center"
        bgGradient="radial(circle, #207285 0%, #062D36 62.5%, #F9F9EF 75%)"
        filter="drop-shadow(0px 0px 12px #f2f2c8)"
        style={{ transition: 'cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.5s' }}
        opacity="0.5"
        _groupHover={{ transform: 'scale(1.2)', opacity: '1' }}
      >
        {icon}
      </Flex>
      <LinkOverlay href={link} cursor="none" />
    </MotionLinkBox>
  );
};

export default ContactFly;
