import React from 'react';
import { Box, Grid } from "@chakra-ui/core";
import { color, space, corner, size, fontSize } from '../theme';

const Inspector = () => {
    
    return (
    <Grid 
        templateRows='auto auto 1fr'
        gridGap={space.looser}
        bg={color.base.white}
        gridArea="inspector"
        p={space.normal}
        borderTopLeftRadius={corner.smooth}
        justifyContent='space-between'
    >
        <Grid minW={'200px'} gridGap={space.tight}>
            <Box fontSize={fontSize.text.xs}>Environments</Box>
            <Box bg={color.grey[100]} h={size.element["2xl"]} borderRadius={corner.smooth}></Box>
        </Grid>
        <Grid minW={'200px'} gridGap={space.tight}>
            <Box fontSize={fontSize.text.xs}>Git</Box>
            <Box bg={color.grey[100]} h={size.element["2xl"]} borderRadius={corner.smooth}></Box>
        </Grid>
        <Grid minW={'200px'} gridGap={space.tight} alignContent='start'>
            <Box fontSize={fontSize.text.xs}>Operations</Box>
            <Box bg={color.grey[100]} h={size.element["2xl"]} borderRadius={corner.smooth}></Box>
            <Box bg={color.grey[100]} h={size.element["2xl"]} borderRadius={corner.smooth}></Box>
            <Box bg={color.grey[100]} h={size.element["2xl"]} borderRadius={corner.smooth}></Box>
            <Box bg={color.grey[100]} h={size.element["2xl"]} borderRadius={corner.smooth}></Box>
            <Box bg={color.grey[100]} h={size.element["2xl"]} borderRadius={corner.smooth}></Box>
        </Grid>
    </Grid>
    );
};


export default Inspector;