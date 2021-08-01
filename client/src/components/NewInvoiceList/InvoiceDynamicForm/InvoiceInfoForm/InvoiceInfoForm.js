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
import BoxTextInput from '../../../../myComponentsMui/myMuiForm/BoxTextInput';

    

const InvoiceInfoForm = props => {


    return (
        <Card variant="outlined" source='seller' p="1em">
            <Box display="flex">
                <Box flex={2} m="1em">
                    <Typography variant="subtitle1" gutterBottom>
                SUMA</Typography>
                    <Box display="flex" mb="-1em">
                        
                    </Box>
                    <BoxTextInput variant="standard" flex={2} mt="0" mb="-1em" source="cadd.note" resource="npte" type="email" disabled />
                  

                    <Typography  variant="body2" align="right">
                Note</Typography>
                    <BoxTextInput variant="standard" mb="-1.5em" mt="-0.5em" source="note.street" resource="note" multiline disabled />
                    <Box display="flex" mb="-1.5em">
        
                    </Box>
                </Box>
            </Box>
        </Card>
    )

};

export default InvoiceInfoForm;