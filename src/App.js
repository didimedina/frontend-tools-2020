import React from 'react';
import { Box, Flex, Grid, Text } from "@chakra-ui/core";
import { color, fontSize, size, space, corner } from './theme'
import PageShell from './components/PageShell';
import EmailForm from './components/EmailForm';
import Header from './components/Header';


const App = () => {

  return (
    <Box>
      <Flex
        name={'viewport'}
        h={'100vh'}
        justifyContent="center"
        bg={color.grey[300]}
        // flexDirection="column"
      >
        <Box
          maxW={size.containers.max}
          h={'400px'}
          w={'100%'}
          bg={color.grey[50]}
          alignSelf="center"
          mx={space.tight}
          borderRadius={corner.smoother}
          justifyContent={"center"}
          display={"flex"}
          flexDirection={"column"}
          boxShadow={`0px 2px 8px ${color.grey[400]}60`}
        >
          I'm a container!
        </Box>
      </Flex>
      <Box backgroundColor={color.grey[200]} height="100vh">
        <PageShell>
          <Header />
          <Grid // Body Container
            templateColumns="repeat(5, 1fr)"
            h="100%"
            w="80%"
            maxW="1280px"
            margin="auto"
          >
            <Flex // CTA Content Container
              justifyContent="center"
              flexDirection="column"
              h="100%"
              gridColumn="1 / 4"
              gridRow="1 / 2"
            >
              <Text fontSize={fontSize["2xl"]} color={color.grey[900]}>
                Salto is an open source platform that enables SaaS Admins to
                configure their business tooling using reliable engineering best
                practices.
              </Text>
              <EmailForm />
            </Flex>
            <Box // Photo
              h="100%"
              border="2px solid"
              borderColor="tomato"
              gridColumn="3 / 6"
              gridRow="1 / 2"
            >
              <Box size={size["5xl"]} bg={color.purple[200]}></Box>
            </Box>
          </Grid>
        </PageShell>
      </Box>
    </Box>
  );
};

export default App;
