import React from 'react';
import { motion } from "framer-motion";
import { Grid, Box, Text, useColorMode, useTheme } from "@chakra-ui/core";
import { corner, spacer, text, heading } from './theme';
import { useDensity } from './ThemeProvider'

const EditorShell = (props) => {
    
    const {children} = props
    const {colorMode, toggleColorMode} = useColorMode();
    console.log(colorMode)
    const theme = useTheme()
    const color = theme.colors
    const opacity = theme.opacity
    const currentColor = color.gray
    console.log(opacity.high)


    const MotionBox = motion.custom(Box)
    const MotionText = motion.custom(Text)


    return (
        <Box backgroundColor = {color.gray[50]}>
            <Grid templateColumns="260px 1fr 260px">
                {children}
            </Grid>
        </Box>
    )
};

export default EditorShell;