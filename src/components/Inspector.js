import React from 'react';
import { Box, Grid, Flex } from "@chakra-ui/core";
import { color, space, corner, size, fontSize, lineHeight, fonts } from '../theme';

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
            <Box border={`1px solid ${color.grey[200]}`} p={space.normal} color={color.grey[300]} borderRadius={corner.smooth}>Type something...</Box>
            <Grid
                templateColumns='1fr 1fr'
                gridGap={space.tightest}
            >
                <Flex justifyContent='center' alignItems='center' border={`1px solid ${color.grey[200]}`} p={space.tighter} borderRadius={corner.smooth} fontSize={fontSize.text.sm} color={color.grey[800]}>Fetch</Flex>
                <Flex justifyContent='center' alignItems='center' border={`1px solid ${color.grey[200]}`} p={space.tighter} borderRadius={corner.smooth} fontSize={fontSize.text.sm} color={color.grey[800]}>Deploy</Flex>
            </Grid>
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