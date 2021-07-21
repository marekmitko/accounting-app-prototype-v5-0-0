import * as React from "react";
import {NumberInput} from 'react-admin';
import {Box} from '@material-ui/core';



 const BoxNumberInput = props => (
    <Box display="flex" flex={1} {...props} >
        <NumberInput {...props} fullWidth />
    </Box>
)

export default BoxNumberInput;