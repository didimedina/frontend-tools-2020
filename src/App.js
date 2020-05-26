import React, { useState } from 'react';
import { ThemeProvider } from '@chakra-ui/core';
import { motion } from "framer-motion";
import { Box, Text } from "@chakra-ui/core";
import theme, { corner, spacer, text, heading } from './theme';


// TODOs
// Make it control theme dark/light
// Make colors dynamic
// Make one button toggle density

function App() {
  const [density, setDensity] = useState('standard')
  const actualTheme = theme(density)
  const handleDensify = () => setDensity('low')
  const handleComfy = () => setDensity('high')

 
  const MotionBox = motion.custom(Box)
  const MotionText = motion.custom(Text)

  return (
    <ThemeProvider theme={actualTheme}>    
      <Box
        mx='auto'
        width='100%'
        maxWidth='720px'
        marginTop={spacer.tight}
      >
        <Box
          backgroundColor = "#F1F1F4"
          padding={spacer.loose}
          mx= {spacer.tight}
          borderRadius= {corner.smoother}
        >
          <Text 
            fontSize={heading.h3}
            m={spacer.flush}
            color="#343B48"
          >
            We're testing out some amazing frontend tooling.
          </Text>
          <Text
            fontSize={text.t1}
            color="#636370"
          >
            Chakra-UI is replacing Theme-UI, but thats not an issue because they both use all the same 
            technologies under the hood. Then we also included Framer Motion to make things
            <MotionText as="span" ml={spacer.tightest} display="inline-block" color={"tomato"} whileHover={{ color: "green", scale: 1.1 }}> animate and pop.</MotionText>
          </Text>
          <MotionBox 
            as="button" 
            fontSize={text.t2}
            rounded={corner.smooth} 
            py={spacer.tighter}
            px={spacer.normal}
            bg="tomato" 
            color="white"
            border="none"
            onClick={handleDensify}
            whileTap={{ scale: 0.95 }}
            mr={spacer.tighter}
            >
            Compact
          </MotionBox>
          <MotionBox 
            as="button" 
            fontSize={text.t2}
            rounded={corner.smooth} 
            py={spacer.tighter}
            px={spacer.normal}
            bg="tomato" 
            color="white"
            border="none"
            onClick={handleComfy}
            whileTap={{ scale: 0.95 }}
            >
            Comfort
          </MotionBox>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
