import React from "react";
import { LinkBox, LinkOverlay, Flex } from "@chakra-ui/layout";
import { motion } from "framer-motion";

const MotionLinkBox = motion(LinkBox);

const ContactFly = ({ link, icon, x, y }) => {

  return (
    <MotionLinkBox
      position="absolute"
      left={x}
      top={y}
      opacity="0.5"
      whileHover={{
        scale: 1.25,
        opacity: 1,
        transition: {
          type: 'spring',
          duration: 0.8,
          bounce: 0.625
        }
      }}
    >
      <Flex rounded="full" p="8" w="30px" h="30px" align="center" justify="center" bgGradient="radial(circle, #62336e 0%, #562A63 62.5%, #F9F9EF 75%)" filter="drop-shadow(0px 0px 12px #f2f2c8)">
        {icon}
      </Flex>
      <LinkOverlay href={link} />
    </MotionLinkBox>
  );
}

export default ContactFly;