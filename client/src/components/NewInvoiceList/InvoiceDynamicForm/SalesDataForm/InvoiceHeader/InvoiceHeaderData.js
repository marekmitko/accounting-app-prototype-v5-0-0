import * as React from "react";
import {
    FormWithRedirect,
    DateInput,
    SelectArrayInput,
    TextInput,
    SaveButton,
    DeleteButton,
    NullableBooleanInput,
    NumberInput,
} from 'react-admin';
import { Card, Typography, Box, Toolbar,} from '@material-ui/core';


// const postDefaultValue = () => ({ id: uuid(), created_at: new Date(), nb_views: 0 })

//użyj create

const InvoiceHeaderData = props => (
    <Card variant="outlined" p="1em">
        <Box display="flex" m="1em">

                        <Box flex={1} mr="0.5em">
                            <Typography variant="h6" gutterBottom>Data</Typography>
                        </Box>
                            <DateInput source="first_name" resource="customers" fullWidth />
                        <Box flex={1} ml="0.5em">
                            <DateInput source="last_name" resource="customers" fullWidth />
                        </Box>
                        <Box flex={1} ml="0.5em">
                            <NumberInput source="nb_views:" postDefaultValue={0} fullWidth />
                        </Box>
     
    </Box>
    </Card>
);

export default InvoiceHeaderData;