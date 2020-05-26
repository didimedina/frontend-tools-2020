import React from 'react';
import { motion } from "framer-motion";
import { Box, Text, useColorMode } from "@chakra-ui/core";
import { corner, spacer, text, heading } from './theme';
import { useDensity } from './ThemeProvider'


// TODOs
// Make it control theme dark/light
// Make colors dynamic
// Make one button toggle density

function App() {
  const [density, setDensity] = useDensity()
  const handleDensity = () => setDensity(density === 'compact' ? 'comfy' : 'compact')
  const { colorMode, toggleColorMode } = useColorMode('light');
  console.log(colorMode)

  const MotionBox = motion.custom(Box)
  const MotionText = motion.custom(Text)


  return (   
    <Box
      mx='auto'
      width='100%'
      maxWidth='720px'
      marginTop={spacer.tight}
    >
      <Box
        backgroundColor = 'purple.50'
        padding={spacer.loose}
        mx= {spacer.tight}
        borderRadius= {corner.smoother}
      >
        <Text 
          fontSize={heading.h3}
          m={spacer.flush}
          color='purple.900' // why is this not in curly braces? Would be nice to get auto complete...
        >
          We're testing out some amazing frontend tooling.
        </Text>
        <Text
          fontSize={text.t1}
          color='purple.700'
        >
          Chakra-UI is replacing Theme-UI, but thats not an issue because they both use all the same 
          technologies under the hood. Then we also included Framer Motion to make things
          <MotionText as="span" ml={spacer.tightest} display="inline-block" color='red.500' whileHover={{ color: 'red.200', scale: 1.1 }}> animate and pop.</MotionText>
        </Text>
        <MotionBox 
          as="button" 
          fontSize={text.t2}
          rounded={corner.smooth} 
          py={spacer.tighter}
          px={spacer.normal}
          bg='red.500' 
          color="red.50"
          border="none"
          onClick={handleDensity}
          whileTap={{ scale: 0.95 }}
          mr={spacer.tighter}
          >
          {density === "compact" ? "Comfy" : "Compact"}
        </MotionBox>
        <MotionBox 
          as="button" 
          fontSize={text.t2}
          rounded={corner.smooth} 
          py={spacer.tighter}
          px={spacer.normal}
          bg='purple.500'
          color='purple.50'
          border="none"
          onClick={toggleColorMode}
          whileTap={{ scale: 0.95 }}
          mr={spacer.tighter}
          >
          Toggle {colorMode === "light" ? "Dark" : "Light"}
        </MotionBox>
      </Box>
    </Box>
  );
}

export default App;
