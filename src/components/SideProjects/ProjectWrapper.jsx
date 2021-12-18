import React from "react";
import { Box, Flex, Image, Heading, Text, Link, Fade, useDisclosure } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const ProjectWrapper = React.forwardRef((props, ref) => {
  const { isOpen, onToggle } = useDisclosure({defaultIsOpen: false});
  const { title, info, img, link } = props.projectInfo;

  const checkTarget = (e) => {
    if (e.pointerType == 'touch' && e.target.classList.contains('projectInfo')
      || e.relatedTarget && e.relatedTarget.classList.contains('view-live')
      || e.target && e.target.classList.contains('view-live')) {
      e.stopPropagation();
      return;
    }
    onToggle();
  }

  return (
    <MotionBox overflow="hidden" position="relative" rounded={6} h="200px" mb="8" onPointerEnter={onToggle} onPointerOut={checkTarget} variants={props.variants}>
      <Image src={img} alt={title} h="100%" w="100%" objectFit='cover' />
      <Fade in={isOpen}>
        <Flex className='projectInfo' position='absolute' left={0} top={0} w="100%" h="100%" direction='column' alignItems='center' justifyContent='center' bgColor='rgba(0,0,0,0.75)'>
          <Heading as="h3" size='lg' mb='1' pointerEvents='none'>{title}</Heading>
          <Text textStyle='paragraph' pointerEvents={'none'} mb='2'>{info}</Text>
          <Link className="view-live" href={link}>View live</Link>
        </Flex>
      </Fade>
    </MotionBox>
  );
});

export default ProjectWrapper;