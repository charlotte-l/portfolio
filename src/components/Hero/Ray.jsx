import React from "react";
import { Box } from "@chakra-ui/react";
import * as heroStyles from "../../styles/section-hero.module.scss";

const Ray = (props) => {
  return (
    <Box
      className={heroStyles.ray}
      {...props}
    >
    </Box>
  );
};

export default Ray;