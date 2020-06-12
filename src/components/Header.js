import React from 'react';
import { Flex, Icon, Grid, PseudoBox, useColorMode, useTheme } from "@chakra-ui/core";
import { useDensity } from '../ThemeProvider'

const Header = () => {
    
    const { colors, corners, space, fontSizes, sizes } = useTheme()
  
    const { colorMode, toggleColorMode } = useColorMode();
    const [ density, setDensity ] = useDensity()
    const handleDensity = () => setDensity(density === 'compact' ? 'comfy' : 'compact')
    

    return (
        <Flex
            w="70%" 
            maxW="1024px" 
            m="auto" 
            justifyContent="space-between"
        >
         <Flex my={space.loose} justifyContent="center" flexDirection="column">
            <Icon name="wink" size={sizes.elements.sm} color={colors.gray[900]}>Logo</Icon>
         </Flex>
         <Grid templateColumns="auto auto" columnGap={space.tightest} alignContent='center'>
            <PseudoBox
                name='colorModeToggleCTA'
                as="button" 
                rounded={corners.smooth} 
                h={sizes.elements.md}
                w={sizes.elements.md}
                bg={colors.gray[800]}
                color={colors.gray[50]}
                border="none"
                onClick={toggleColorMode}
                _focus={{outline: "none"}}
            >
                {console.log(corners.smooth)}
                {colorMode === "light" ?
                    <Icon name="moon" size={sizes.elements['xs']}/> 
                    : 
                    <Icon name="sun" size={sizes.elements['xs']} />}
            </PseudoBox>
            <PseudoBox
                name='densityToggleCTA'
                as="button" 
                fontSize={fontSizes.xs}
                lineHeight='0'
                rounded={corners.smooth} 
                h={sizes.elements.md}
                w={sizes.elements.md}
                bg={colors.gray[300]} 
                color={colors.gray[800]}
                border="none"
                onClick={handleDensity}
                _focus={{outline: "none"}}
            >
              {density === "compact" ? 
              <Icon name="add" size={sizes.elements["xs"]}/>  
              : 
              <Icon name="minus" size={sizes.elements["xs"]}/>  }
            </PseudoBox>
         </Grid>
        </Flex>
    )
}

export default Header;