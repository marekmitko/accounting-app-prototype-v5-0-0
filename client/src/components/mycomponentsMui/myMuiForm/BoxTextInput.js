import * as React from "react";
import {TextInput} from 'react-admin';
import {Box} from '@material-ui/core';



 const BoxTextInput = props => (
    <Box display="flex" flex={1} {...props} >
        <TextInput {...props} fullWidth />
    </Box>
)

export default BoxTextInput;