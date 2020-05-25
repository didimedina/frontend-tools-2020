import React, { useState } from 'react';
import { ThemeProvider } from '@chakra-ui/core';
import { motion } from "framer-motion";
import { Box } from "@chakra-ui/core";
import theme, { corner, spacer, text } from './theme';




function App() {
  const [density, setDensity] = useState('standard')
  const actualTheme = theme(density)
  const handleClick = () => setDensity('low')

 
  // const motionBox = motion.custom(Box)

  return (
    <ThemeProvider theme={actualTheme}>
        <Box 
          as="button" 
          fontSize={text.t2}
          rounded={corner.smooth} 
          py={spacer.normal}
          px={spacer.normal}
          bg="tomato" 
          color="white" 
          whileHover={{ scale: 1.3 }}
          >
          Button
        </Box>
        <Box />
        {/* 
            - Is Box simply working without an sx prop bec it recognizes all the css props in its definition?
            - Why cant i use the as prop to write motion.button and spit out a motion component?
         */}
        <motion.button
          onClick={handleClick}
           whileHover={{ scale: 1.3 }}
        >
          change density
        </motion.button>

    </ThemeProvider>
  );
}

export default App;
