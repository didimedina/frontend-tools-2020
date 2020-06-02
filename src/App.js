import React from 'react';
import { motion } from "framer-motion";
import { Box, Grid, Text, useColorMode, useTheme } from "@chakra-ui/core";
import { corner, spacer, text, heading } from './theme';
import { useDensity } from './ThemeProvider'
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';
import BodyContent from './BodyContent';
import EditorShell from './EditorShell';


// TODOs
// Make colors dynamic

function App() {
  // const [density, setDensity] = useDensity()
  // const handleDensity = () => setDensity(density === 'compact' ? 'comfy' : 'compact')
  // const { colorMode, toggleColorMode } = useColorMode('light');
  // console.log(colorMode)

  const colors = useTheme().colors




  return (
    <Box backgroundColor={colors.gray[50]}>
      <EditorShell
        // templateColumns = "260px 1fr 260px"
      >
        <LeftPanel/>
        <BodyContent/>
        <RightPanel/>
      </EditorShell> 
    </Box>
 
  );
}

export default App;
