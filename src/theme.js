import React from 'react'
import chakraTheme from '@chakra-ui/theme'

export const fonts = {
    body: 'Galano',
    code: 'JetBrains'
}

export const fontSize = {
    text: {
        '2xs': [10, null, 12, null],
        xs:    [12, null, 14, null],
        sm:    [14, null, 16, null],
        md:    [16, null, 20, null]
    },
    heading: {
        lg:    [20, null, 24, null],
        xl:    [24, null, 32, null],
        '2xl': [28, null, 48, null],
        '3xl': [32, null, 64, null],
    }
}

export const lineHeight = {
    none: 1,
    body: 1.5,
    heading: 1.125,
}

// export const fontSize = {
//     text: {
//         '2xs': [10, 10, 12, 14],
//         xs:    [12, 12, 14, 16],
//         sm:    [14, 14, 16, 20],
//         md:    [16, 16, 20, 24]
//     },
//     heading: {
//         lg:    [20, 20, 24, 28],
//         xl:    [24, 28, 32, 40],
//         '2xl': [28, 40, 48, 56],
//         '3xl': [32, 56, 64, 80],
//     }
// }

export const fontWeight = {
    regular: 400,
    bold: 700,
}

export const corner = {
    edge: 0,
    smooth: [4, null, 6, null],
    smoother: [8, null, 10, null],
    smoothest: [12, null, 16, null],
    pill: 9999
}

export const size = {
    element: {
        tiny:  [   6,   6,   7,   8 ],
        '2xs': [  10,  10,  12,  14 ],
        xs:    [  12,  12,  14,  16 ],
        sm:    [  14,  14,  16,  20 ],
        md:    [  16,  16,  20,  24 ],
        lg:    [  20,  20,  24,  28 ], 
        xl:    [  24,  28,  32,  40 ],
        "2xl": [  28,  40,  48,  56 ],
        "3xl": [  32,  56,  64,  80 ],
        "4xl": [  48,  80,  96, 112 ],
        "5xl": [  64, 112, 128, 160 ],
        "6xl": [  96, 160, 192, 224 ] 
    },
    container: {
        xs: [],
        sm: [224, 256, 320, 384],
        md: [320, 384, 448, 512],
        lg: [448, 512, 640, 768],
        xl: [640, 768, 896, 1024],
        max: 1280,
    }
}

export const space = {
    flush:       0,
    tightest: [  4,  5,  6,  7 ],
    tighter:  [  6,  7,  8, 10 ],
    tight:    [  8, 10, 12, 14 ],
    normal:   [ 12, 14, 16, 20 ],
    loose:    [ 16, 20, 24, 28 ],
    looser:   [ 24, 28, 32, 40 ],
    loosest:  [ 48, 56, 64, 80 ]
}

export const opacity = {
    low: 10,
    mid: 30,
    high: 60, 
}

export const color = {
    base: {
        transparent: "transparent",
        current: "currentColor",
        black: "#000",
        white: "#fff",
    },

    purple: { 
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

    grey: {
        50:  "#F7FAFC",
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

    red: {
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
    }
}


export default {
    fonts: {
        body: 'Georgia, Cambria, "Times New Roman", Times, serif',
        heading: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    },

    fontSizes: {
        ...fontSize
    },

    fontWeights: {
        ...fontWeight
    },

    lineHeights: {
        none: 'none',
        body: 1.5,
        heading: 1.125,
    },

    colors: {
        ...color.base,

        purple: {
            ...color.purple
        }, 

        grey: {
            ...color.grey
        },

        red: {
           ...color.red 
        },

        yellow: {
            ...color.yellow
        },

        green: {
            ...color.green
        },
    },
    
    radii: {
        ...corner
    },

    sizes: {
        ...size
    },
    
    space: {
        ...space
    },

    breakpoints: ['512px', '896px', '1280px'],

    opacity: {
        ...opacity
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
}
