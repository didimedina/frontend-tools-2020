import React from 'react';
import { motion } from "framer-motion";
import { Box, useTheme } from "@chakra-ui/core";

const RightPanel = () => {
    const colors = useTheme().colors
    const MotionBox = motion.custom(Box)

    return (
        <MotionBox 
            height='100vh'
            width={'260px'}
            backgroundColor={colors.gray[100]}
            >
            Left Panel Goes Here!
        </MotionBox>
)
};

export default RightPanel;