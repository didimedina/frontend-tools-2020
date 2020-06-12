import React, { useState } from 'react';
import { Grid, PseudoBox, useTheme } from "@chakra-ui/core";

const EmailForm = () => {

    const { colors, corners, space, fontSizes } = useTheme()

    const [ error, setError ] = useState();
    const [ email, setEmail ] = useState('');

    return (
        <Grid
         templateColumns="auto auto"
         columnGap={space.tighter}
         w='60%'
        >
            <PseudoBox
                as='input'
                border={error ? `2px solid ${colors.purple[700]}` : '2px solid transparent'}
                value={email}
                color={colors.gray[800]}
                onChange={e => setEmail(e.target.value)}
                placeholder='type here...'
                fontSize={fontSizes.sm}
                py={space.normal}
                px={space.tight}
                borderRadius={corners.smooth}
                bg={colors.gray[200]}
                _placeholder={{color: colors.gray[400]}}
                // _hover={{bg: color.gray[300]}}
                _focus={{outline: "none"}}
            ></PseudoBox>
            {/* {error && <PseudoBox color="red" >{error}</PseudoBox>}
            {!error && <PseudoBox color="red" >Oh, no errors!</PseudoBox>} */}
            <PseudoBox
                as="button"
                border="none"
                fontSize={fontSizes.md}
                py={space.normal}
                px={space.tight}
                bg={colors.gray[800]}
                color={colors.gray[50]}
                borderRadius={corners.smooth}
                _focus={{outline: "none"}}
                _hover={{bg: colors.gray[900]}}
                disabled={email === ''}
                _disabled={{opacity: '50%'}}
                onClick={() => {
                    if (!email.includes('@') ) {setError('error')}
                    else { setError() }
                }}
            >Submit</PseudoBox>
        </Grid>


    )
};

export default EmailForm;