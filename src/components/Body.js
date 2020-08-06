import React from 'react';
import { Box, Grid } from "@chakra-ui/core";
import { size, color, space, fontSize, corner, fonts } from '../theme';

const Body = () => {
    
    return (
        <Grid 
            p={space.normal}
            templateColumns='auto 1fr'
            gridGap={space.looser}
            girdArea="body"
            bg={color.base.white}
            borderTopLeftRadius={corner.smooth}
            borderTopRightRadius={corner.smooth}
        >
          <Box minW='200px' bg={color.grey[100]} borderRadius={corner.smooth}></Box>
          <Box maxW={size.container.lg} h={'100%'}>
              <Box fontFamily={fonts.body} fontSize={fontSize.heading.lg} paddingBottom={space.tight}>Environments</Box>
              <Box fontFamily={fonts.code} fontSize={fontSize.text.sm} color={color.grey[600]}>Our mission is to change the way companies manage the configuration of their business applications. Modern business operations is handled using an array of online services (e.g. Salesforce, NetSuite, Marketo, HubSpot, etc.). Being able to consistently make changes across these systems in a streamlined and reliable way is becoming challenging as business velocity increases. We see similarities between these problems and problems that DevOps people are handling on a daily basis. As such, we are developing a solution that is bringing Devops concepts and methodologies to day-to-day business operations.</Box>
              <Grid marginTop={space.loose} gridGap={space.tight}>
                <Box bg={color.grey[100]} h={'120px'} borderRadius={corner.smooth}></Box>
                <Box bg={color.grey[100]} h={'120px'} borderRadius={corner.smooth}></Box>
                <Box bg={color.grey[100]} h={'120px'} borderRadius={corner.smooth}></Box>
              </Grid>
          </Box>
        </Grid>
  );
};

export default Body;