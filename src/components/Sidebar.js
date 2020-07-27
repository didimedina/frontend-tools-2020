import React from 'react';
import { Box, Flex, Grid } from "@chakra-ui/core";
import { size, color, space, corner } from '../theme';

const Sidebar = () => {
    
    return (
   
    <Flex gridArea="sidebar" p={space.normal} borderTopRightRadius={corner.smooth} bg={color.base.white} justifyContent='space-between' flexDirection='column' alignItems='center'>
          <Grid gridGap={space.normal}>
            <Box w={size.element.xl} h={size.element.xl} bg={color.grey[100]} borderRadius={corner.smooth}></Box>
            <Box w={size.element.xl} h={size.element.xl} bg={color.grey[100]} borderRadius={corner.smooth}></Box>
            <Box w={size.element.xl} h={size.element.xl} bg={color.grey[100]} borderRadius={corner.smooth}></Box>
          </Grid>
          <Grid gridGap={space.normal}>
            <Box w={size.element.xl} h={size.element.xl} bg={color.grey[100]} borderRadius={corner.smooth}></Box>
            <Box w={size.element.xl} h={size.element.xl} bg={color.grey[100]} borderRadius={corner.smooth}></Box>
          </Grid>
        </Flex>
    );
};


export default Sidebar;