import React, {useState, useContext} from 'react'
import { ThemeProvider as ChakraThemeProvider } from '@chakra-ui/core';
import customTheme from './theme';


const DensityContext = React.createContext()

export const ThemeProvider = ({children}) => {
    const contextValue = useState('comfy')
    // const [ density ] = contextValue
    // const { colorMode } = useColorMode()
    // const theme = createTheme(density, colorMode)  
    const theme = customTheme  

    // console.log(customTheme);

    return (
        <ChakraThemeProvider theme={theme}>
            <DensityContext.Provider value={contextValue}>
                {children}
            </DensityContext.Provider>
        </ChakraThemeProvider>
    )
}

export const useDensity = () => {
    return useContext(DensityContext)
}

