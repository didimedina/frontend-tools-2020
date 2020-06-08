import React from 'react';
import { Box, Flex, Grid, Text, useTheme } from "@chakra-ui/core";
import PageShell from './components/PageShell';
import EmailForm from './components/EmailForm';
import Header from './components/Header';
// import { motion } from "framer-motion";
import { heading } from './theme';


const App = () => {
  // const MotionFlex = motion.custom(Flex)

  const { colors, fontSizes } = useTheme()

  return (
    <Box backgroundColor={colors.gray[50]} height='100vh'>
      <PageShell>
        <Header/>
        <Grid // Body Container
          templateColumns="repeat(5, 1fr)"
          h="100%"
          // bg={colors.gray[400]}
          w='80%'
          maxW='1280px'
          margin='auto'
        >
          <Flex // CTA Content Container 
            justifyContent="center"
            flexDirection="column"
            h='100%'
            gridColumn='1 / 4'
            gridRow='1 / 2'
          >
            <Text
              fontSize={fontSizes["2xl"]} color={colors.gray[900]}
            >
              Salto is an open source platform that enables SaaS Admins to configure their business tooling using reliable engineering best practices.
            </Text>
            <EmailForm/>
          </Flex>
          <Box // Photo 
            h='100%'
            border="2px solid"
            borderColor='tomato'
            gridColumn='3 / 6'
            gridRow='1 / 2'
          >
          </Box>
        </Grid>
      </PageShell> 
    </Box>
 
  );
}

export default App;
