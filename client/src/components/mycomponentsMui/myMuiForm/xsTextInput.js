import * as React from "react";
import TextField from '@material-ui/core/TextField';
import { useField } from 'react-final-form';
import {TextInput} from 'react-admin';


 const Fi = props => (
    <TextField display="flex" flex={1} {...props} >
        <TextInput {...props} fullWidth />
    </TextField>
)

export default BoxTextInput;