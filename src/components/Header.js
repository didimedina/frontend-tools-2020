import React from 'react';
import { Flex, Icon, Grid, PseudoBox, useTheme, useColorMode } from "@chakra-ui/core";
import { element, textTest, spacer, corner } from '../theme';
import { useDensity } from '../ThemeProvider'

const Header = () => {
    const { colors } = useTheme()
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
         <Flex my={spacer.loose} justifyContent="center" flexDirection="column">
            <Icon name="wink" size={element.sm} color={colors.gray[900]}>Logo</Icon>
         </Flex>
         <Grid templateColumns="auto auto" columnGap={spacer.tightest} alignContent='center'>
            <PseudoBox
                name='colorModeToggleCTA'
                as="button" 
                // fontSize={textTest.sm}
                rounded={corner.smooth} 
                py={spacer.tight}
                px={spacer.normal}
                bg={colors.gray[800]}
                color={colors.gray[50]}
                border="none"
                onClick={toggleColorMode}
                _focus={{outline: "none"}}
            >
                {colorMode === "light" ?
                    <Icon name="moon" size={element.xs}/> 
                    : 
                    <Icon name="sun" size={element.xs} />}
            </PseudoBox>
            <PseudoBox
                name='densityToggleCTA'
                as="button" 
                fontSize={textTest.sm}
                lineHeight='0'
                rounded={corner.smooth} 
                py={spacer.tight}
                px={spacer.normal}
                bg={colors.gray[300]} 
                color={colors.gray[800]}
                border="none"
                onClick={handleDensity}
                _focus={{outline: "none"}}
            >
                {density === "compact" ? "Comfy" : "Compact"}
            </PseudoBox>
         </Grid>
        </Flex>
    )
}

export default Header;