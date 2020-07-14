import React from 'react';
import { Flex } from "@chakra-ui/core";
import { color } from '../theme'

const Section = (props) => { 
    const {children} = props

    return (
        <Flex bg={color.base.transparent} justifyContent={'center'}>
            {children}
        </Flex>
    )
};

export default Section;