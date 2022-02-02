import React from 'react';
import { Box } from '@chakra-ui/react';
import * as heroStyles from '../../styles/section-hero.module.scss';

const Ray = ({ animate }, ...props) => {
  return <Box className={`${heroStyles.ray} ${animate && 'animate'}`} {...props} />;
};

export default Ray;
