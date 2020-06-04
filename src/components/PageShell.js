import React from 'react';
import { Grid } from "@chakra-ui/core";

const PageShell = (props) => { 
    const {children} = props

    return (
        <Grid h='100vh' templateRows="auto 1fr">
            {children}
        </Grid>
    )
};

export default PageShell;