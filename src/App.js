import React from 'react';
import { Box, Flex } from "@chakra-ui/core";
import { color, size, space, corner } from './theme'

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
    </Box>
  );
};

export default App;
