import React from 'react';
import { Box, Grid } from "@chakra-ui/core";
import Section from "./components/Section"
import Container from './components/Container';
import { size, color, space, fontSize, corner } from './theme';

const App = () => {

  return (
    <Box>
      <Section>
        <Container>
          <Box color={color.grey[800]} fontSize={fontSize.heading.lg} mb={space.normal}>Button Sizes</Box>
          <Grid 
            templateColumns = "repeat(4, max-content)"
            templateRows = "auto auto"
            justifyItems = "start"
            rowGap={space.tight}
            columnGap={space.loose}
            >
            <Box color={color.grey[500]} fontSize={fontSize.text.sm}>Small</Box>
            <Box color={color.grey[500]} fontSize={fontSize.text.sm}>Medium</Box>
            <Box color={color.grey[500]} fontSize={fontSize.text.sm}>Large</Box>
            <Box color={color.grey[500]} fontSize={fontSize.text.sm}>Extra Large</Box>
            <Box //sm button
              as="button"
              h={size.elements.lg} 
              px={space.tight}
              border="none"
              fontSize={fontSize.text.xs}
              bg={color.purple[600]}
              color={color.grey[50]}
              borderRadius={corner.smooth}
              > Press Me!
            </Box>
            
            <Box //md button (standard)
              as="button"
              h={size.elements.xl} 
              px={space.normal}
              border="none"
              fontSize={fontSize.text.sm}
              bg={color.purple[600]}
              color={color.grey[50]}
              borderRadius={corner.smooth}
              > Press Me!
            </Box>
            
            <Box //lg button (marketing only)
              as="button"
              h={size.elements["2xl"]} 
              px={space.loose}
              border="none"
              fontSize={fontSize.text.sm}
              bg={color.purple[600]}
              color={color.grey[50]}
              borderRadius={corner.smooth}
              > Press Me!
            </Box>

            <Box //xl button (marketing only)
              as="button"
              h={size.elements["3xl"]} 
              px={space.loose}
              border="none"
              fontSize={fontSize.text.md}
              bg={color.purple[600]}
              color={color.grey[50]}
              borderRadius={corner.smooth}
              > Press Me!
            </Box>
          </Grid>
        </Container>
      </Section>
    </Box>
  );
};

export default App;
