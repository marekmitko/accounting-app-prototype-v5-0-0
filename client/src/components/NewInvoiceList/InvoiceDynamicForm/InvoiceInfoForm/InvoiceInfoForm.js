import React, { useState, useEffect } from 'react';
import {
    FormWithRedirect,
    DateInput,
    SelectArrayInput,
    TextInput,
    SaveButton,
    DeleteButton,
    NullableBooleanInput,
    TextField,
    ReferenceInput,
    SelectInput,
    ResourceContextProvider,
    ResourceName,
    dataProvider,
    useGetOne,
    useQuery,
    Loading, Error, 
} from 'react-admin';
import { Card, Typography, Box, Toolbar } from '@material-ui/core';
import BoxTextInput from '../../../mycomponentsMui/myMuiForm/BoxTextInput';



const InvoiceInfoForm = props => {


    return (
        <Card variant="outlined" source='seller' p="1em">
            <Box display="flex">
                <Box flex={2} m="1em">
                    <Typography variant="subtitle1" gutterBottom>
                FORMA PŁATNOŚCI</Typography>
                    <Box display="flex" mb="-1em">
                        {/* <BoxTextInput source="fullname.forename" resource="seller" initialValue="company" variant="standard"  mr="0.5em" disabled />
                        <BoxTextInput source="fullname.surname" resource="seller" variant="standard"  disabled /> */}
                    </Box>
                    <BoxTextInput variant="standard" flex={2} mt="0" mb="-1em" source="contact.email" resource="seller" type="email" disabled />
                    {/* <DateInput source="birthday" resource="customers" /> */}

                    <Typography  variant="body2" align="right">
                ADRES SPRZEDAWCY</Typography>
                    <BoxTextInput variant="standard" mb="-1.5em" mt="-0.5em" source="addres.street" resource="seller" multiline disabled />
                    <Box display="flex" mb="-1.5em">
                        {/* <BoxTextInput  variant="standard" source="addres.ZIPCode" resource="seller" mr="0.5em" disabled/>
                        <BoxTextInput  variant="standard" flex={2} source="addres.city" resource="seller" disabled/> */}
                    </Box>
                </Box>
            </Box>
        </Card>
    )

};

export default InvoiceInfoForm;