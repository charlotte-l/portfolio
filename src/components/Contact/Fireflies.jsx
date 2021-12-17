import React from "react";
import { Box } from "@chakra-ui/react"
import { motion } from "framer-motion";
import InView from "components/common/InView";
import { fireflyWrapVariant } from 'components/common/constants';
import * as sectionStyles from '../../styles/section-contact.module.scss'

const MotionBox = motion(Box);

const Fireflies = (props) => {
  const [ref, animation] = InView('show', 'hidden');

  return (
    <MotionBox ref={ref} variants={fireflyWrapVariant} initial="hidden" animate={animation} {...props}>
      <div className={sectionStyles.firefly}></div>
      <div className={sectionStyles.firefly}></div>
      <div className={sectionStyles.firefly}></div>
      <div className={sectionStyles.firefly}></div>
      <div className={sectionStyles.firefly}></div>
      <div className={sectionStyles.firefly}></div>
      <div className={sectionStyles.firefly}></div>
      <div className={sectionStyles.firefly}></div>
      <div className={sectionStyles.firefly}></div>
      <div className={sectionStyles.firefly}></div>
      <div className={sectionStyles.firefly}></div>
      <div className={sectionStyles.firefly}></div>
      <div className={sectionStyles.firefly}></div>
      <div className={sectionStyles.firefly}></div>
      <div className={sectionStyles.firefly}></div>
      <div className={sectionStyles.firefly}></div>
      <div className={sectionStyles.firefly}></div>
    </MotionBox>
  );
};

export default Fireflies;