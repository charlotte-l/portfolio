import React from "react";
import { Box, Flex, Image, Heading, Text, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { cardVariant } from 'components/common/constants';

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

const ProjectWrapper = React.forwardRef((props, ref) => {
  const { title, info, img, link } = props.projectInfo;

  return (
    <MotionBox
      position="relative"
      h="200px"
      mb="8"
      variants={props.variants}
      whileHover="hover"
    >
      <MotionFlex
        className='projectInfo'
        position='absolute'
        w="100%"
        h="100%"
        rounded={6}
        direction='column'
        alignItems='center'
        justifyContent='center'
        bgColor="blue"
        boxShadow="dark-lg"
        style={{WebkitBackfaceVisibility: "hidden"}}
        variants={cardVariant}
        custom={'bottom'}
        initial={{ rotateY: -180 }}
        transition={{
          duration: 1,
          ease: 'easeInOut',
        }}
      >
        <Heading as="h3" size='lg' mb='1' pointerEvents='none'>{title}</Heading>
        <Text textStyle='paragraph' pointerEvents={'none'} mb='2'>{info}</Text>
        <Link className="view-live" href={link}>View live</Link>
      </MotionFlex>
      <MotionFlex
        position='absolute'
        h="100%"
        w="100%"
        boxShadow="dark-lg"
        style={{WebkitBackfaceVisibility: "hidden"}}
        variants={cardVariant}
        custom={'top'}
        initial={{ rotateY: 0 }}
        transition={{
          duration: 1,
          ease: 'easeInOut',
        }}
      >
        <Image src={img} alt={title} h="100%" w="100%" rounded={6} objectFit='cover' />
      </MotionFlex>
    </MotionBox>
  );
});

export default ProjectWrapper;