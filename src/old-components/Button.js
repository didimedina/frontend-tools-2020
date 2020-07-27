import React from 'react';
import { Box, Grid } from "@chakra-ui/core";
import Container from './components/Container';
import { size, color, space, fontSize, corner } from './theme';

const Button = () => {   
    return (     
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
              h={size.element.lg} 
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
              h={size.element.xl} 
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
              h={size.element["2xl"]} 
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
              h={size.element["3xl"]} 
              px={space.looser}
              border="none"
              fontSize={fontSize.text.md}
              bg={color.purple[600]}
              color={color.grey[50]}
              borderRadius={corner.smooth}
              > Press Me!
            </Box>
          </Grid>
        </Container>
    );
};

export default Button;