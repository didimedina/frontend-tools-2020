import React from 'react';
import { motion } from "framer-motion";
import { Box, Text, useColorMode, useTheme } from "@chakra-ui/core";
import { corner, spacer, text, heading } from './theme';
import { useDensity } from './ThemeProvider'

const LeftPanel = () => {
    const { colorMode, toggleColorMode } = useColorMode('dark');
    console.log(colorMode)
    const theme = useTheme()
    const color = theme.colors
    const opacity = theme.opacity

    const MotionBox = motion.custom(Box)
    const MotionText = motion.custom(Text)

    return (
        <MotionBox
            height='100vh'
            width={'260px'} 
            backgroundColor={color.gray[100]}
            initial={{
                x: -260,
                opacity: 0,
            }}
            animate={{
                opacity: 1,
                x: 0,
            }}
            transition={{
                ease: "easeOut",
                duration: .5
            }}
        >
            SALTO
        </MotionBox>
)
};

export default LeftPanel;