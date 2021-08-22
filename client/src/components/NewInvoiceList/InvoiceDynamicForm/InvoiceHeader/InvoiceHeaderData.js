import * as React from "react";
import { useMemo } from 'react';
import {
    FormWithRedirect,
    DateInput,
    SelectArrayInput,
    TextInput,
    SaveButton,
    DeleteButton,
    NullableBooleanInput,
    NumberInput,
    FormDataConsumer,
} from 'react-admin';
import { Card, Typography, Box, Toolbar,} from '@material-ui/core';
import { useFormState } from 'react-final-form';




// const postDefaultValue = () => ({ created_at: new Date(), nb_views: 0 });

const InvoiceHeaderData = props => {

    // const date14DefaultValue = useMemo(() => new Date(), []);
   
    
    const dateFormatter = v => {
        // v is a `Date` object
        if (!(v instanceof Date) || isNaN(v)) return;
        const pad = '00';
        const yy = v.getFullYear().toString();
        const mm = (v.getMonth() + 1).toString();
        const dd = v.getDate().toString();
        return `${yy}-${(pad + mm).slice(-2)}-${(pad + dd).slice(-2)}`;
    };
    const dateAdded14 = v => {
        // v is a `Date` object
        if (!(v instanceof Date) || isNaN(v)) return;
        const pad = '14';
        const yy = v.getFullYear().toString();
        const mm = (v.getMonth() + 1).toString();
        const dd = v.getDate().toString();
        return `${yy}-${(pad + mm).slice(-2)}-${(pad + dd).slice(-2)}`;
    };
    const dateParser = v => {
        // v is a string of "YYYY-MM-DD" format
        const match = /(\d{4})-(\d{2})-(\d{2})/.exec(v);
        if (match === null) return;
        const d = new Date(match[1], parseInt(match[2], 10) - 1, match[3]);
        if (isNaN(d)) return;
        return d;
    };
   
    const dateDefaultValue = useMemo(() => new Date(), []);

    const added14 = (dateStart) => {
        let added14 = undefined;
        return dateStart.setDate();
    };

    const { values: { todayDate }} = useFormState({ subscription: { values: true } });

    const date14DefaultValue = useMemo(() => new Date(), []);
    const add14day = 12096e5;
    const date14 = new Date();


    return (
        <Card variant="outlined" p="1em">
            <Box display="flex" m="1em">
                <Box flex={1} mr="0.5em">
                    <Typography variant="h6" gutterBottom>Data</Typography>
                </Box>
                    <DateInput source="published_at" defaultValue={dateDefaultValue}  />
                    <FormDataConsumer>
                        {({ formData, ...rest }) => (
                        <DateInput defaultValue={formData.published_at - add14day}  source="dataTwoAdd14" {...rest} />
                        )}
                    </FormDataConsumer>
                <Box flex={1} ml="0.5em">
                    
                  
                    <DateInput  defaultValue={todayDate} format={dateAdded14} source="dataAddcalcul" />
                </Box>
                <Box flex={2} ml="0.5em">
                    <NumberInput source="nb_views" defaultValue={0} />
                </Box>
            </Box>
        </Card>
    );
};

export default InvoiceHeaderData;