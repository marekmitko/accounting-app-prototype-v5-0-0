import React, {ReactFragnent} from "react";
import {
    FormWithRedirect,
    DateInput,
    SelectArrayInput,
    TextInput,
    SaveButton,
    DeleteButton,
    NullableBooleanInput,
} from 'react-admin';
import { Card, Typography, Box, Toolbar } from '@material-ui/core';

import BoxTextInput from '../../../../mycomponentsMui/myMuiForm/BoxTextInput.js';



const InvoiceBuyerForm = props => {

    return (
        <Card variant="outlined" p="1em">
            <Box display="flex">
                <Box flex={2} m="1em">
                    <Typography variant="subtitle1" gutterBottom>
                DANE NABYWCY</Typography>
                    <Box display="flex" mb="-1.5em">
                        <BoxTextInput source="fullname.forename" resource="buyer" mr="0.5em" />
                        <BoxTextInput source="fullname.surname" resource="buyer"/>
                    </Box>
                    <BoxTextInput flex={2} mt="0" mb="-1em" source="contact.email" resource="buyer" type="email" />
                    {/* <DateInput source="birthday" resource="customers" /> */}

                    <Typography  variant="body2" align="right">
                ADRES NABYWCY</Typography>
                    <BoxTextInput mb="-1.5em" mt="-0.5em" source="addres.street" resource="buyer" multiline  />
                    <Box display="flex" mb="-1.75em">
                        <BoxTextInput source="addres.ZIPCode" resource="buyer" mr="0.5em" />
                        <BoxTextInput flex={2} source="addres.city" resource="buyer"/>
                    </Box>
                </Box>
            </Box>
        </Card>
    )
};

export default InvoiceBuyerForm;