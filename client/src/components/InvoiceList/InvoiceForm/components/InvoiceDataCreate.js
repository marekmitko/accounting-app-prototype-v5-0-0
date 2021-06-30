import * as React from "react";
import {
    FormWithRedirect,
    DateInput,
    SelectArrayInput,
    TextInput,
    SaveButton,
    DeleteButton,
    NullableBooleanInput,
    TextField,
    ArrayInput, 
    SimpleFormIterator,
    Datagrid,
    Create,
    ArrayField,
    SingleFiledList,
} from 'react-admin';
import { Typography, Box, Toolbar } from '@material-ui/core';

import InvoiceItemCreate from './InvoiceItemListCreate.js';



const segments = [
    { id: 'compulsive', name: 'Compulsive' },
    { id: 'collector', name: 'Collector' },
    { id: 'ordered_once', name: 'Ordered Once' },
    { id: 'regular', name: 'Regular' },
    { id: 'returns', name: 'Returns' },
    { id: 'reviewer', name: 'Reviewer' },
];

const InvoiceDataCreate = props => (
    <FormWithRedirect
        {...props}
        render={formProps => (
            // here starts the custom form layout
            <form>
                <Box p="1em">
                    <Box display="flex">
                        <Box flex={1} mr="1em">

                            <Typography variant="h6" gutterBottom>SPRZEDAWCA</Typography>

                            <Box display="flex">
                                <Box flex={1} mr="0.5em">
                                    <TextField label="NAZWA FIRMY" source='company' resource="datauser"/>
                                    <TextInput source="company" resource="datauser" fullWidth />
                                </Box>
                                <Box flex={1} ml="0.5em">
                                    <TextInput source="last_name" resource="customers" fullWidth />
                                </Box>
                            </Box>
                            <TextInput source="email" resource="customers" type="email" fullWidth />
                            <DateInput source="birthday" resource="customers" />
                            <Box mt="1em" />

                            <Typography variant="h6" gutterBottom>Address</Typography>

                            <TextInput resource="customers" source="address" multiline fullWidth />
                            <Box display="flex">
                                <Box flex={1} mr="0.5em">
                                    <TextInput source="zipcode" resource="customers" fullWidth />
                                </Box>
                                <Box flex={2} ml="0.5em">
                                    <TextInput source="city" resource="customers" fullWidth />
                                </Box>
                            </Box>
                        </Box>

                        <Box flex={1} ml="1em">
                            <Typography variant="h6" gutterBottom>NABYWCA</Typography>

                            <Box display="flex">
                                <Box flex={1} mr="0.5em">
                                    <TextInput source="first_name" resource="customers" fullWidth />
                                </Box>
                                <Box flex={1} ml="0.5em">
                                    <TextInput source="last_name" resource="customers" fullWidth />
                                </Box>
                            </Box>
                            <TextInput source="email" resource="customers" type="email" fullWidth />
                            <DateInput source="birthday" resource="customers" />
                            <Box mt="1em" />

                            <Typography variant="h6" gutterBottom>Address</Typography>

                            <TextInput resource="customers" source="address" multiline fullWidth />
                            <Box display="flex">
                                <Box flex={1} mr="0.5em">
                                    <TextInput source="zipcode" resource="customers" fullWidth />
                                </Box>
                                <Box flex={2} ml="0.5em">
                                    <TextInput source="city" resource="customers" fullWidth />
                                </Box>
                            </Box>
                            
                            <Typography variant="h6" gutterBottom>Stats</Typography>

                            <SelectArrayInput source="groups" resource="customers" choices={segments} fullWidth />
                            <NullableBooleanInput source="has_newsletter" resource="customers" />
                        </Box>

                    </Box>
                        <Box flex={1} ml="1em">
                        <Typography variant="h6" gutterBottom>Stats</Typography>

                    <SelectArrayInput source="groups" resource="customers" choices={segments} fullWidth />
                                <NullableBooleanInput source="has_newsletter" resource="customers" />

                        </Box>
                                <ArrayField source="inv_info.item_list">
         
            <Datagrid>
            <Box display="inline">
                <TextField source="item_name" />
                <TextField source="item_desc" />
                <TextField source="item_qty" />
                <TextField source="rate" />
         </Box>
            </Datagrid>
            
        </ArrayField>
        <InvoiceItemCreate />
                </Box>
                <Toolbar>
                    <Box display="flex" justifyContent="space-between" width="100%">
                        <SaveButton
                            saving={formProps.saving}
                            handleSubmitWithRedirect={formProps.handleSubmitWithRedirect}
                        />
                        <DeleteButton record={formProps.record} />
                    </Box>
                </Toolbar>
            </form>
        )}
    />
);

export default InvoiceDataCreate;