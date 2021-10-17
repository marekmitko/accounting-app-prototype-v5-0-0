import * as React from "react";
import { useMemo, useEffect, } from 'react';
import {
 
    DateInput,
 
    NumberInput,
    FormDataConsumer,
} from 'react-admin';
import { Card, Typography, Box, Toolbar, Grid} from '@material-ui/core';
import { useFormState, useForm, } from 'react-final-form';





// const postDefaultValue = () => ({ created_at: new Date(), nb_views: 0 });

const InvoiceHeaderData = props => {

    // // const date14DefaultValue = useMemo(() => new Date(), []);

    
    // const dateFormatter = v => {
    //     // v is a `Date` object
    //     if (!(v instanceof Date) || isNaN(v)) return;
    //     const pad = '00';
    //     const yy = v.getFullYear().toString();
    //     const mm = (v.getMonth() + 1).toString();
    //     const dd = v.getDate().toString();
    //     return `${yy}-${(pad + mm).slice(-2)}-${(pad + dd).slice(-2)}`;
    // };
    // const dateAdded14 = v => {
    //     // v is a `Date` object
    //     if (!(v instanceof Date) || isNaN(v)) return;
    //     const pad = '14';
    //     const yy = v.getFullYear().toString();
    //     const mm = (v.getMonth() + 1).toString();
    //     const dd = v.getDate().toString();
    //     return `${yy}-${(pad + mm).slice(-2)}-${(pad + dd).slice(-2)}`;
    // };
    // const dateParser = v => {
    //     // v is a string of "YYYY-MM-DD" format
    //     const match = /(\d{4})-(\d{2})-(\d{2})/.exec(v);
    //     if (match === null) return;
    //     const d = new Date(match[1], parseInt(match[2], 10) - 1, match[3]);
    //     if (isNaN(d)) return;
    //     return d;
    // };
   
    // const dateDefaultValue = useMemo(() => new Date(), []);
    
    // const added14 = (dateStart) => {
    //     let added14 = undefined;
    //     return dateStart.setDate();
    // };


    //bin start 


    // //bin stop
    
    // const { values: { todayDate }} = useFormState({ subscription: { values: true } });
    
    // const date14DefaultValue = useMemo(() => new Date(), []);
    // const add14day = 12096e5;
    // const date14 = new Date();
    
    
    // const { values: { invoice_date  }} = useFormState({ subscription: { values: true } });

    
    // useEffect(() => {
    //     change('invoice_due_date ',  () => { new Date(Math.abs(invoice_date.getTime() + (14*24*60*60*1000))) } );
    //   }, [change, invoice_date]);


    // const {change} = useForm();
    // const { values: { test_first_input }} = useFormState({ subscription: { values: true } });

    // useEffect(() => {
    //     change('test_second_input', test_first_input / 10);
    // }, [change, test_first_input]);

    return (
        <Card variant="outlined" p="1em">
           {/*   <Box display="flex" m="1em">
                </Box>
                <Box flex={2} ml="0.5em">
                <NumberInput  source="test_first_input"/>
                <NumberInput source="test_second_input"/>
            </Box > */}

                <Grid container  >
                    <Grid spacing={3}  p="1em" item xs={10} sm={10} >
                        <Box m="1em" display='inline-block' ><Typography variant="h6" gutterBottom>Date</Typography></Box>
                        <Box m="1em"  display='inline-block'><DateInput  source="invoice_date"/> </Box>
                        <Box m="1em"  display='inline-block'><DateInput  source="invoice_due_date"/> </Box>
                        <Box m="1em"  display='inline-block'><NumberInput source="nb_views" defaultValue={0} /></Box>
                    </Grid>
                </Grid >
            {/* <FormDataConsumer>
    {({ formData, ...rest }) => (
                <DateInput 
                // defaultValue={  new Date(Math.abs(formData.invoice_date.getTime() + (14*24*60*60*1000)))  } 
                source="invoice_due_date" 
                {...rest} 
                />
                )}
            </FormDataConsumer>  */}
                     {/* <DateInput source="published_at"  /> */}
                    {/* <FormDataConsumer>
                        {({ formData, ...rest }) => (
                        <DateInput defaultValue={formData.published_at - add14day}  source="dataTwoAdd14" {...rest} />
                        )}
                    </FormDataConsumer> */}
                {/* <Box flex={1} ml="0.5em">
                    
                  
                    <DateInput  defaultValue={todayDate} format={dateAdded14} source="dataAddcalcul" />
                </Box>
                <Box flex={2} ml="0.5em"> */}
                {/* <FormDataConsumer>
                        {({ formData, ...rest }) => (
                        <DateInput defaultValue={formData.invoice_date + (14*24*60*60*1000) }  source="dataTwo " {...rest} />
                        )}
                </FormDataConsumer> */}
                    
              
            {/* </Box> */}
        </Card>
    );
};

export default InvoiceHeaderData;