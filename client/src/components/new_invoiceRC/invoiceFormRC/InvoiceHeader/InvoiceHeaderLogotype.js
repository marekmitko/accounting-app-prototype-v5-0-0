import * as React from "react";
import {
    FormWithRedirect,
    DateInput,
    SelectArrayInput,
    TextInput,
    SaveButton,
    DeleteButton,
    NullableBooleanInput,
} from 'react-admin';
import { Card, Typography, Box, Toolbar,} from '@material-ui/core';

const InvoiceHeaderLogotype = props => (
    <Card variant="outlined" p="1em">
        <Box display="flex" m="1em">

                        <Box flex={1} mr="0.5em">
                            <Typography variant="h6" gutterBottom>Logotype</Typography>
                        </Box>
                
     
    </Box>
    </Card>
);

export default InvoiceHeaderLogotype;