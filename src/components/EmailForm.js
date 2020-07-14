import React, { useState } from 'react';
import { Grid, Box } from "@chakra-ui/core";
import { color, corner, fontSize, space} from '../theme';

const EmailForm = () => {

    // const { colors, corners, space, fontSizes } = useTheme()

    const [ error, setError ] = useState();
    const [ email, setEmail ] = useState('');

    return (
        <Grid
         templateColumns="auto auto"
         columnGap={space.tighter}
         w='60%'
        >
            <Box
                as='input'
                border={error ? `2px solid ${color.purple[700]}` : '2px solid transparent'}
                value={email}
                color={color.grey[800]}
                onChange={e => setEmail(e.target.value)}
                placeholder='type here...'
                fontSize={fontSize.sm}
                py={space.normal}
                px={space.tight}
                borderRadius={corner.smooth}
                bg={color.grey[200]}
                _placeholder={{color: color.grey[400]}}
                // _hover={{bg: color.gray[300]}}
                _focus={{outline: "none"}}
            ></Box>
            {/* {error && <PseudoBox color="red" >{error}</PseudoBox>}
            {!error && <PseudoBox color="red" >Oh, no errors!</PseudoBox>} */}
            <Box
                as="button"
                border="none"
                fontSize={fontSize.md}
                py={space.normal}
                px={space.tight}
                bg={color.grey[800]}
                color={color.grey[50]}
                borderRadius={corner.smooth}
                _focus={{outline: "none"}}
                _hover={{bg: color.grey[900]}}
                disabled={email === ''}
                _disabled={{opacity: '50%'}}
                onClick={() => {
                    if (!email.includes('@') ) {setError('error')}
                    else { setError() }
                }}
            >Submit</Box>
        </Grid>


    )
};

export default EmailForm;