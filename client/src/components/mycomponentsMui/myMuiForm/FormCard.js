import * as React from "react";
import {TextInput} from 'react-admin';
import { Card } from '@material-ui/core';



 const FormCard = props => (
    <Card display="flex" flex={1} {...props} >
        <TextInput {...props} fullWidth />
    </Card>
)

export default  FormCard;