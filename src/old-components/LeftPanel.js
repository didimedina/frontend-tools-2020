import React from 'react';
import { motion } from "framer-motion";
import { Box, useTheme } from "@chakra-ui/core";

const LeftPanel = () => {
    const theme = useTheme()
    const color = theme.colors
    const opacity = theme.opacity

    const MotionBox = motion.custom(Box)

    return (
        <MotionBox
            height='100vh'
            width={'260px'} 
            backgroundColor={color.gray[100]}
            initial={{
                x: -260,
                opacity: opacity.low,
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