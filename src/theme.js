import React from 'react'
import chakraTheme from '@chakra-ui/core/dist/theme/theme'


// import { useTheme as chakraUseTheme } from "@chakra-ui/core";
//useTheme<MyTheme>()

// export const useTheme = chakraTheme<MyTheme> 

// export type MyTheme = {
//     pill: {

//     }
// }

export const createTheme = (density, colorMode) => ({
    fonts: {
        body: 'Georgia, Cambria, "Times New Roman", Times, serif',
        heading: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    },

    fontSizes: density === 'compact' ? {
        /* Compact */
        '2xs': [10, 10, 10, 12],
        xs:    [12, 12, 12, 14],
        sm:    [14, 14, 14, 16],
        md:    [16, 16, 16, 20],
        lg:    [20, 20, 20, 24],
        xl:    [24, 24, 28, 32],
        '2xl': [28, 28, 40, 48],
        '3xl': [32, 32, 56, 64],
    } : {
        /* Comfy */
        '2xs': [10, 10, 12, 14],
        xs:    [12, 12, 14, 16],
        sm:    [14, 14, 16, 20],
        md:    [16, 16, 20, 24],
        lg:    [20, 20, 24, 28],
        xl:    [24, 28, 32, 40],
        '2xl': [28, 40, 48, 56],
        '3xl': [32, 56, 64, 80],
    },

    fontWeights: {
        body: 400,
        heading: 700,
    },

    lineHeights: {
        none: 'none',
        body: 1.5,
        heading: 1.125,
    },

    colors: {
        transparent: "transparent",
        current: "currentColor",
        black: "#000",
        white: "#fff",

        purple: colorMode === 'dark' ?
        {
            900: "#faf5ff",
            800: "#ECECFF",
            700: "#E0E0FF",
            600: "#BFBCFC",
            500: "#786FF3",
            400: "#5C52E4",
            300: "#413BB2",
            200: "#2B2984",
            100: "#161755",
            50:  "#090929",
        } :
        {
            50:  "#faf5ff",
            100: "#ECECFF",
            200: "#E0E0FF",
            300: "#BFBCFC",
            400: "#786FF3",
            500: "#5C52E4",
            600: "#413BB2",
            700: "#2B2984",
            800: "#161755",
            900: "#090929",
        }, 

        gray: colorMode === 'dark' ? {
            900: "#F7FAFC",
            800: "#EDF2F7",
            700: "#E2E8F0",
            600: "#CBD5E0",
            500: "#A0AEC0",
            400: "#718096",
            300: "#4A5568",
            200: "#2D3748",
            100: "#1A202C",
            50: "#171923",
        } :
        {
            50: "#F7FAFC",
            100: "#EDF2F7",
            200: "#E2E8F0",
            300: "#CBD5E0",
            400: "#A0AEC0",
            500: "#718096",
            600: "#4A5568",
            700: "#2D3748",
            800: "#1A202C",
            900: "#171923",
        },

        red: colorMode === 'dark' ? 
        {
            900: "#fff5f5",
            800: "#fed7d7",
            700: "#feb2b2",
            600: "#fc8181",
            500: "#f56565",
            400: "#e53e3e",
            300: "#c53030",
            200: "#9b2c2c",
            100: "#822727",
            50:  "#63171b",
        } :
        {
            50:  "#fff5f5",
            100: "#fed7d7",
            200: "#feb2b2",
            300: "#fc8181",
            400: "#f56565",
            500: "#e53e3e",
            600: "#c53030",
            700: "#9b2c2c",
            800: "#822727",
            900: "#63171b",
        },

        yellow: {
            50:  "#fffff0",
            100: "#fefcbf",
            200: "#faf089",
            300: "#f6e05e",
            400: "#ecc94b",
            500: "#d69e2e",
            600: "#b7791f",
            700: "#975a16",
            800: "#744210",
            900: "#5F370E",
        },

        green: {
            50:  "#f0fff4",
            100: "#c6f6d5",
            200: "#9ae6b4",
            300: "#68d391",
            400: "#48bb78",
            500: "#38a169",
            600: "#2f855a",
            700: "#276749",
            800: "#22543d",
            900: "#1C4532",
        },
    },
    
    corners: {
        edge: 0,
        smooth: [4, null, 6, null],
        smoother: [8, null, 10, null],
        smoothest: [12, null, 16, null],
        pill: 9999
    },

    sizes: density === 'compact' ? {
        elements: {
            tiny:  [   4,   4,   5,   6 ],
            "2xs": [   8,   8,  10,  12 ],
            xs:    [  12,  12,  14,  16 ],
            sm:    [  16,  16,  20,  24 ],
            md:    [  24,  24,  28,  32 ],
            lg:    [  32,  32,  40,  48 ], 
            xl:    [  48,  48,  56,  64 ],
            "2xl": [  64,  64,  80,  96 ],
            "3xl": [  96,  96, 112, 128 ],
            "4xl": [ 128, 128, 160, 192 ],
            "5xl": [ 192, 192, 224, 256 ],
        },
        containers: {
            tiny:  [   4,   5,   6,   7 ],
            "2xs": [   8,  10,  12,  14 ],
            xs:    [  12,  14,  16,  20 ],
            sm:    [  16,  20,  24,  28 ],
            md:    [  24,  28,  32,  40 ],
            lg:    [  32,  40,  48,  56 ], 
            xl:    [  48,  56,  64,  80 ],
            "2xl": [  64,  80,  96, 112 ],
            "3xl": [  96, 112, 128, 160 ],
            "4xl": [ 128, 160, 192, 224 ],
            "5xl": [ 192, 224, 256, 320 ],
        }
    } : {
        elements: {
            tiny:  [   4,   5,   6,   7 ],
            "2xs": [   8,  10,  12,  14 ],
            xs:    [  12,  14,  16,  20 ],
            sm:    [  16,  20,  24,  28 ],
            md:    [  24,  28,  32,  40 ],
            lg:    [  32,  40,  48,  56 ], 
            xl:    [  48,  56,  64,  80 ],
            "2xl": [  64,  80,  96, 112 ],
            "3xl": [  96, 112, 128, 160 ],
            "4xl": [ 128, 160, 192, 224 ],
            "5xl": [ 192, 224, 256, 320 ],
        },
        containers: {
            tiny:  [   4,   5,   6,   7 ],
            "2xs": [   8,  10,  12,  14 ],
            xs:    [  12,  14,  16,  20 ],
            sm:    [  16,  20,  24,  28 ],
            md:    [  24,  28,  32,  40 ],
            lg:    [  32,  40,  48,  56 ], 
            xl:    [  48,  56,  64,  80 ],
            "2xl": [  64,  80,  96, 112 ],
            "3xl": [  96, 112, 128, 160 ],
            "4xl": [ 128, 160, 192, 224 ],
            "5xl": [ 192, 224, 256, 320 ], 
        }
    },
    
    // this breaks when being renamed to to spacers, nothing else does. how come?
    space: density === 'compact' ? {
        flush:       0,
        tightest: [  4,  4,  5,  6,],
        tighter:  [  6,  6,  7,  8 ],
        tight:    [  8,  8, 10, 12 ],
        normal:   [ 12, 12, 14, 16 ],
        loose:    [ 16, 16, 20, 24 ],
        looser:   [ 24, 24, 28, 32 ],
        loosest:  [ 48, 48, 56, 64 ]
    } :
    {
        flush:       0,
        tightest: [  4,  5,  6,  7],
        tighter:  [  6,  7,  8, 10],
        tight:    [  8, 10, 12, 14],
        normal:   [ 12, 14, 16, 20],
        loose:    [ 16, 20, 24, 28],
        looser:   [ 24, 28, 32, 40],
        loosest:  [ 48, 56, 64, 80]
    },

    breakpoints: ['512px', '896px', '1280px'],

    opacity: {
        low: 10,
        mid: 30,
        high: 60, 
    },

    icons: {
        ...chakraTheme.icons,
        wink: {
            path: <path 
                fillRule="evenodd" 
                clipRule="evenodd" 
                d="M19.84 3.37A19.51 19.51 0 0 1 24.45 16c0 4.81-1.73 9.22-4.61 12.63l4 3.37a24.74 24.74 0 0 0 5.84-16c0-6.1-2.2-11.68-5.85-16l-3.99 3.37zm-8.45 6.1a3.92 3.92 0 1 1-7.84 0 3.92 3.92 0 0 1 7.84 0zm-1.31 11.1v5.23c0 1.14-.3 2.24-1.06 3.18a6.8 6.8 0 0 1-2.35 1.77l-2.33 1.17L2 27.24l2.34-1.16c.25-.13.41-.23.51-.3v-5.2h5.23z"
                fill="currentColor"/>,
            viewBox: "0 0 32 32",
        }
    }
});
