import React from 'react';
import { Box, Grid } from "@chakra-ui/core";
import { color } from './theme';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Inspector from './components/Inspector';
import Body from './components/Body';
import Modal from './components/Modal';


const App = () => {

  return (
    <Box bg={color.grey[200]} w='100vw' h='100vh' position='relative'>
      <Modal/>
      <Grid 
        w='100%'
        h='100%'
        templateColumns='min-content 1fr min-content'
        templateRows='min-content 1fr min-content' 
        templateAreas={`"header header header" "sidebar body inspector"`}
        gridGap='2px'
      >
        <Header/>
        <Sidebar/>
        <Body/>
        <Inspector/>
      </Grid>
    </Box>
  );
};

export default App;
