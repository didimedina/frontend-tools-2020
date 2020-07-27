import React from 'react';
import { Box } from "@chakra-ui/core";
import { color, space, size } from '../theme'

const Container = (props) => { 
    const {children} = props

    return (
        <Box w={'100%'} maxW={size.container.lg} bg={color.base.transparent} m={space.loose}>
            {children}
        </Box>
    )
};

export default Container;