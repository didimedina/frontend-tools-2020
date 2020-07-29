/** @jsx jsx */
import { Box, Grid, Flex, jsx } from "@chakra-ui/core";
import { color, space, corner, size, fontSize } from '../theme';

const PageModal = () => {
    
    return (
        <Flex
            w='100vw'
            h='100vh'
            bg={`${color.grey[700]}80`}
            position='absolute'
            justifyContent='center'
            alignItems='flex-end'
            sx={{'backdrop-filter':'blur(4px)'}}
            >
            <Grid 
                w='100%'
                h='90%'
                bg={color.base.white}
                templateRows='min-content 1fr'
                templateColumns='100%'
                p={space.normal}
                gridGap={space.loose}
                boxShadow={`0px 10px 32px ${color.grey[700]}20`}
                // justifyContent='center'
            >
                <Flex justifyContent='space-between' alignItems='center' bg={color.grey[100]} borderRadius={corner.smooth} >
                    <Box fontSize={fontSize.heading.lg} lineHeight='0px'>Hello World</Box>
                    <Box w={size.element.md} h={size.element.md} borderRadius={corner.pill} bg={color.grey[200]}></Box>
                </Flex>
                <Grid templateRows='1fr min-content' gridGap={space.loose} maxW={size.container.lg} w='100%' justifySelf='center'>
                    <Box w='100%' maxW={size.container.md} bg={color.grey[100]} borderRadius={corner.smooth} justifySelf='center'></Box>  
                    <Box h='64px' bg={color.grey[100]} borderRadius={corner.smooth}></Box>  
                </Grid>           
            </Grid>
        </Flex>
    );
};

export default PageModal;