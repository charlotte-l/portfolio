import React from "react";
import { LinkBox, LinkOverlay, Flex } from "@chakra-ui/layout";
import { motion } from "framer-motion";

const MotionLinkBox = motion(LinkBox);

const ContactFly = ({ link, icon, x, y }) => {
  const delay = Math.floor(parseInt(x) / 10) / -2;
  return (
    <MotionLinkBox
      position={{base: "relative", md: "absolute"}}
      left={{md: x}}
      top={{md: y}}
      opacity={{lg: '0.5'}}
      whileHover={{ scale: 1.25, opacity: 1, transition: { duration: .5, ease: "backInOut" } }}
      animation={`bob 5s infinite ${delay}s alternate-reverse`}
    >
      <Flex rounded="full" p={{base: "6", md: "8"}} w={{base: '100%'}} h='auto' align="center" justify="center" bgGradient="radial(circle, #62336e 0%, #562A63 62.5%, #F9F9EF 75%)" filter="drop-shadow(0px 0px 12px #f2f2c8)">
        {icon}
      </Flex>
      <LinkOverlay href={link} />
    </MotionLinkBox>
  );
}

export default ContactFly;