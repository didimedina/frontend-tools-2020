import React from 'react';
import { Box, Flex, Grid } from "@chakra-ui/core";
import { size, color, space, fontSize, corner } from '../theme';

const Header = () => {
    
    return (
        <Flex
            justifyContent='space-between'
            gridArea="header"
            p={space.tight}
            bg={color.base.white}
            alignItems='center'>
            <Grid gridAutoFlow='column' gridGap={space.normal} alignItems='center'>
                <Box h={size.element.md} fontSize={fontSize.text.sm}>Salto</Box>
                <Box bg={color.grey[100]} w='120px' h={size.element.lg} borderRadius={corner.pill}></Box>
            </Grid>
            <Grid gridAutoFlow='column' gridGap={space.tight} alignItems='stretch'>
                <Box bg={color.grey[100]} w='120px' py={space.tightest} px={space.tight} borderRadius={corner.pill}>Didi Medina</Box>
                <Box w={size.element.lg} minH={size.element.lg} borderRadius={corner.pill} bg={color.grey[400]}></Box>
            </Grid>
            
        </Flex>
    );
};


export default Header;