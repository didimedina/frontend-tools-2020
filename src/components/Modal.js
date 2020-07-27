import React from 'react';
import { Box, Grid, Flex } from "@chakra-ui/core";
import { color, space, corner, size, fontSize } from '../theme';

const Modal = () => {
    
    return (
        <Flex
            w='100vw'
            h='100vh'
            bg={`${color.grey[600]}60`}
            position='absolute'
            justifyContent='center'
            alignItems='center'
        >
            <Grid 
                w='100%'
                maxW={size.container.lg}
                minH='60%'
                bg={color.base.white}
                borderRadius={corner.smoother}
                templateRows='min-content 1fr min-content'
                templateAreas={`"header" "body" "footer"`}
                p={space.normal}
                gridGap={space.loose}
            >
                <Box fontSize={fontSize.heading.lg}>Hello World</Box> 
                <Box w='100%' maxW={size.container.md} bg={color.purple[200]} justifySelf='center'></Box>  
                <Box h='64px' bg={color.red[200]}></Box>             
            </Grid>
        </Flex>
    );
};

export default Modal;