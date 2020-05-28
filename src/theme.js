export default (density, colorMode) => ({
    fonts: {
        body: 'Georgia, Cambria, "Times New Roman", Times, serif',
        heading: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    },

    fontSizes: density === 'compact' ? 
        [
            /* SM */ 10, 12, 14, 16, 20, 24, 28, 32,   
            /* MD */ 10, 12, 14, 16, 20, 24, 28, 32,
            /* LG */ 10, 12, 14, 16, 20, 28, 40, 56,
            /* XL */ 12, 14, 16, 20, 24, 32, 48, 64,
        ] :
        [
            /* SM */ 10, 12, 14, 16, 20, 24, 28, 32,
            /* MD */ 10, 12, 14, 16, 20, 28, 40, 56,
            /* LG */ 12, 14, 16, 20, 24, 32, 48, 64,
            /* XL */ 14, 16, 20, 24, 28, 40, 56, 80
        ],

    fontWeights: {
        body: 400,
        heading: 700,
    },
    lineHeights: {
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
            50: "#090929",
        } :
        {
            50: "#faf5ff",
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
            50: "#63171b",
        } :
        {
            50: "#fff5f5",
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
            50: "#fffff0",
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
            50: "#f0fff4",
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
    radii: 
        [             0, 
            /* SM */  4,  8, 12, 
            /* MD */  4,  8, 12,
            /* LG */  6, 10, 16,
            /* XL */  6, 10, 16,
                      9999
        ],


    space: density === 'compact' ? 
        [
                      0,
            /* SM */  4,  6,  8, 12, 16, 24, 48,
            /* MD */  4,  6,  8, 12, 16, 24, 48,
            /* LG */  5,  7, 10, 14, 20, 28, 56,
            /* XL */  6,  8, 12, 16, 24, 32, 64
        ] :
        [
                      0,
            /* SM */  4,  6,  8, 12, 16, 24, 48,
            /* MD */  5,  7, 10, 14, 20, 28, 56,
            /* LG */  6,  8, 12, 16, 24, 32, 64,
            /* XL */  7, 10, 14, 20, 28, 40, 80
        ],

    breakpoints: ['512px', '896px', '1280px'],

    opacity: {
        low: 10,
        mid: 30,
        high: 60, 
    }


});


export const spacer = {
    flush:      0,
    tightest: [ 1,  8, 15, 22],
    tighter:  [ 2,  9, 16, 23],
    tight:    [ 3, 10, 17, 24],
    normal:   [ 4, 11, 18, 25],
    loose:    [ 5, 12, 19, 26],
    looser:   [ 6, 13, 20, 27],
    loosest:  [ 7, 14, 21, 28]
}

export const heading = {
    h1: [ 7, 15, 23, 31],
    h2: [ 6, 14, 22, 30],
    h3: [ 5, 13, 21, 29],
    h4: [ 4, 12, 20, 28],
}

export const text = {
    t1: [ 3, 11, 19, 27],
    t2: [ 2, 10, 18, 26],
    t3: [ 1,  9, 17, 25],
    t4: [ 0,  8, 16, 24],
}

export const corner = {
    edge:        0,
    smooth:    [ 1, 4, 7, 10],
    smoother:  [ 2, 5, 8, 11],
    smoothest: [ 3, 6, 9, 12],
    pill:       13,
}