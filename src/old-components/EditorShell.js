import React from 'react';
import { Grid, Box, useTheme } from "@chakra-ui/core";

const EditorShell = (props) => { 
    const {children} = props
    const colors = useTheme().colors

    return (
        <Box backgroundColor = {colors.gray[50]}>
            <Grid templateColumns="260px 1fr 260px">
                {children}
            </Grid>
        </Box>
    )
};

export default EditorShell;