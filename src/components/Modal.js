/** @jsx jsx */
import { Box, Grid, Flex, jsx } from "@chakra-ui/core";
import { color, space, corner, size, fontSize } from '../theme';

const Modal = () => {
    
    return (
        <Flex
            w='100vw'
            h='100vh'
            bg={`${color.grey[700]}80`}
            position='absolute'
            justifyContent='center'
            alignItems='center'
            sx={{'backdrop-filter':'blur(4px)'}}
            >
            <Grid 
                w='100%'
                maxW={size.container.md}
                minH='60%'
                bg={color.base.white}
                borderRadius={corner.smoother}
                templateRows='min-content 1fr min-content'
                templateAreas={`"header" "body" "footer"`}
                p={space.normal}
                gridGap={space.loose}
                boxShadow={`0px 10px 32px ${color.grey[700]}20`}
            >
                <Flex justifyContent='space-between' alignItems='center' bg={color.grey[100]} borderRadius={corner.smooth} >
                    <Box fontSize={fontSize.heading.lg} lineHeight='0px'>Hello World</Box>
                    <Box w={size.element.md} h={size.element.md} borderRadius={corner.pill} bg={color.grey[200]}></Box>
                </Flex>
                 
                <Box w='100%' maxW={size.container.sm} bg={color.grey[100]} borderRadius={corner.smooth} justifySelf='center'></Box>  
                <Box h='64px' bg={color.grey[100]} borderRadius={corner.smooth}></Box>             
            </Grid>
        </Flex>
    );
};

export default Modal;