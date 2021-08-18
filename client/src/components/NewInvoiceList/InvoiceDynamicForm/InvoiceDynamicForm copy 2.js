import * as React from "react";
import {
    FormWithRedirect,
    SelectArrayInput,
    SaveButton,
    DeleteButton,
    NullableBooleanInput,
    TabbedForm,
    SimpleForm,
    FormTab,
    Edit,
    Datagrid,
    TextField,
    DateField,
    TextInput,
    ReferenceManyField,
    NumberInput,    
    DateInput,
    BooleanInput,
    EditButton,
    TabbedFormTabs,
    FormGroupContextProvider, useFormGroup,
} from 'react-admin';
import {Accordion, AccordionDetails, AccordionSummary, Typography, Box, Toolbar, Grid, CardHeader, Card, Avatar, CardContent,  } from '@material-ui/core';

import InvoiceSellerForm from './InvoicePartiesDataForm/InvoiceSeller/InvoiceSellerForm.js';
import InvoiceBuyerForm from './InvoicePartiesDataForm/InvoiceBuyer/InvoiceBuyerForm.js';
import InvoiceItemCreate from './SalesDataForm/InvoiceProductList/InvoiceItem/InvoiceItemCreate.js';
import InvoiceHeaderForm from './SalesDataForm/InvoiceHeader/InvoiceHeader.js';
import InvoiceHeaderList from './SalesDataForm/InvoiceProductList/InvoiceHeaderList.js';
import InvoiceInfoForm from './InvoiceInfoForm/InvoiceInfoForm.js';
import InvoiceFooterForm from './SalesDataForm/InvoiceFooter/InvoiceFooterForm.js';
import BoxItemTextInput from '../../../myComponentsMui/myMuiForm/BoxItemTextInput.js';
import BoxBootstrapInput from '../../../myComponentsMui/myMuiForm/BoxBootstrapInput.js';
import InvoiceDocumentTitle from "./capition/DocumentTitle.js";

import myGridSanitized from "../../../myComponents/myGridSanitized.js";



const segments = [
    { id: 'compulsive', name: 'Compulsive' },
    { id: 'collector', name: 'Collector' },
    { id: 'ordered_once', name: 'Ordered Once' },
    { id: 'regular', name: 'Regular' },
    { id: 'returns', name: 'Returns' },
    { id: 'reviewer', name: 'Reviewer' },
];

const backlinksDefaultValue = [
    {
        date: new Date(),
        url: 'http://google.com',
    },
];

export const AddInvCreate = (props) => (
    <SimpleForm>
        {/* <myGridSanitized container spacing={3} style={{ width: "100%" }}> */}
        <myGridSanitized 
                container
                direction="row"
                
                >
              
            
            
                    <Grid item xs={11} >
                        <InvoiceHeaderForm />
                        < NumberInput />
                    </Grid>
    
                    <Grid item xs={11} sm={5}>
                        <FormGroupContextProvider name="Seller">
                            <InvoiceSellerForm />
                        </FormGroupContextProvider>
                        < NumberInput />
                    </Grid>
             
                    <Grid item xs={12} sm={6}>
                        <FormGroupContextProvider name="Buyer">
                            <InvoiceBuyerForm />
                        </FormGroupContextProvider>
                        < NumberInput />
                    </Grid>
                
                    <Grid item xs={12} sm={6}>
                        <FormGroupContextProvider name="options">
                            <Card  variant="outlined">
                            <CardHeader 
                                    avatar={
                                    <Avatar aria-label="recipe">
                                        R
                                    </Avatar>
                                    }
                                    title="Shrimp and Chorizo Paella"
                                    subheader="September 14, 2016"
                                    aria-controls="options-content"
                                    id="options-header"
                                />
                                <AccordionSummary
                                    // expandIcon={<ExpandMoreIcon />}
                                    aria-controls="options-content"
                                    id="options-header"
                                >
                                    {/* <AccordionSectionTitle name="options">Options</AccordionSectionTitle> */}
                                </AccordionSummary>
                                <AccordionDetails id="options-content" aria-labelledby="options-header">
                                    <TextInput source="teaser" />
                                </AccordionDetails>
                            </Card>
                        </FormGroupContextProvider>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <InvoiceDocumentTitle />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <InvoiceSellerForm />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <InvoiceBuyerForm />
                    </Grid>
                    <Grid item xs={12}>
                        <InvoiceHeaderList>
                            <InvoiceItemCreate fullWidth />
                        </InvoiceHeaderList>
                        <InvoiceInfoForm />
                    </Grid>
                    <Grid item xs={12} sm={8}>
                        <InvoiceFooterForm />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                    <InvoiceInfoForm />
                        <SelectArrayInput source="groups" resource="customers" choices={segments} fullWidth /> 
                        <NullableBooleanInput source="has_newsletter" resource="customers" />
                    </Grid>
            <TextInput source="title" />
            <FormGroupContextProvider name="options">
                <Accordion>
                    <AccordionSummary
                        // expandIcon={<ExpandMoreIcon />}
                        aria-controls="options-content"
                        id="options-header"
                        >
                        {/* <AccordionSectionTitle name="options">Options</AccordionSectionTitle> */}
                    </AccordionSummary>
                    <AccordionDetails id="options-content" aria-labelledby="options-header">
                        <TextInput source="teaser" />
                    </AccordionDetails>
                </Accordion>
            </FormGroupContextProvider>
            <FormGroupContextProvider name="options2">
                            <InvoiceSellerForm />
                            <Card  variant="outlined">
                                <CardHeader 
                                    avatar={
                                    <Avatar aria-label="recipe"> S </Avatar>}
                                    title={<Typography variant="h7" component="h4">SPRZEDAWCA</Typography>}
                                    subheader="September 14, 2016"
                                    aria-controls="options-content"
                                    id="options-header"
                                />
                                <CardContent 
                                        // expandIcon={<ExpandMoreIcon />}
                                        id="options-content" aria-labelledby="options-header"
                                >
                                     <InvoiceSellerForm />
                                    {/* <AccordionSectionTitle name="options">Options</AccordionSectionTitle> */}
                                </CardContent>
                            </Card>
                </FormGroupContextProvider>
                <Toolbar>
                    <Box display="flex" justifyContent="space-between" width="100%">
                        {/* <SaveButton
                            saving={formProps.saving}
                            handleSubmitWithRedirect={formProps.handleSubmitWithRedirect}
                            />
                        <DeleteButton record={formProps.record} /> */}
                    </Box>
                </Toolbar>
    </myGridSanitized>
 </SimpleForm>
);
// const AccordionSectionTitle = ({ children, name }) => {
//     const formGroupState = useFormGroup(name);

//     return (
//         <Typography color={formGroupState.invalid && formGroupState.dirty ? 'error' : 'inherit'}>
//             {children}
//         </Typography>
//     );
// }

