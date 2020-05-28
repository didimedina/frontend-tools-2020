import React from 'react';
import { motion } from "framer-motion";
import { Box, Grid, Text, useColorMode, useTheme } from "@chakra-ui/core";
import { corner, spacer, text, heading } from './theme';
import { useDensity } from './ThemeProvider'
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';
import BodyContent from './BodyContent';


// TODOs
// Make colors dynamic

function App() {
  const [density, setDensity] = useDensity()
  const handleDensity = () => setDensity(density === 'compact' ? 'comfy' : 'compact')
  const { colorMode, toggleColorMode } = useColorMode('light');
  console.log(colorMode)
  const theme = useTheme()
  const color = theme.colors
  const opacity = theme.opacity
  const currentColor = color.gray
  console.log(opacity.high)

  const fadeColor = (color, opacity) => {
    return `${color}${opacity}`
  }

  console.log(fadeColor(color.gray[600], 80))

  const MotionBox = motion.custom(Box)
  const MotionText = motion.custom(Text)



  return (
    <Box backgroundColor={color.gray[50]}>
      <Grid templateColumns="260px 1fr 260px" >
        <LeftPanel />
        <BodyContent />
        <RightPanel />
      </Grid> 
    </Box>
 
  );
}

export default App;
