import React from "react";
import { motion } from "framer-motion";


const Grass = (props) => {
  return (
    <motion.svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100" initial="start" animate="end" {...props}>

    </motion.svg>
  );
};

export default Grass;