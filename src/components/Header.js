import React from 'react';
import { Flex, Icon, PseudoBox, useColorMode } from "@chakra-ui/core";
import { color, corner, space, size} from '../theme';

const Header = () => {
  
    const { colorMode, toggleColorMode } = useColorMode();
    
    return (
        <Flex
            w="70%" 
            maxW="1024px" 
            m="auto" 
            justifyContent="space-between"
        >
            <Flex my={space.loose} justifyContent="center" flexDirection="column">
                <Icon name="wink" size={size.sm} color={color.grey[900]}>Logo</Icon>
            </Flex>
            <PseudoBox
                name='colorModeToggleCTA'
                as="button" 
                alignSelf='center'
                rounded={corner.smooth} 
                size={size.elements.xl}
                bg={color.grey[800]}
                color={color.grey[50]}
                border="none"
                onClick={toggleColorMode}
                _focus={{ outline: 'none' }}
            >
                {colorMode === "light" ?
                    <Icon name="moon" size={size.elements.sm}/> 
                    : 
                    <Icon name="sun" size={size.elements.sm} />}
            </PseudoBox>
        </Flex>
    )
}

export default Header;