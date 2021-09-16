import * as React from "react";
import { useMemo } from 'react';
import {
    Create,
    FormWithRedirect,
    SelectArrayInput,
    SaveButton,
    DeleteButton,
    NullableBooleanInput,
    SimpleForm,
    ArrayInput,
} from 'react-admin';
import { Grid,  makeStyles  } from '@material-ui/core';

// dasdasd{
   // CardHeader, Card, Avatar, CardContent,
   //Accordion, AccordionDetails, AccordionSummary, Typography, Box, Toolbar,
    // FormTab,
    // Edit,
    // Datagrid,
    // TextField,
    // DateField,
    // TextInput,
    // ReferenceManyField,
    // NumberInput,    
    // DateInput,
    // BooleanInput,
    // EditButton,
    // TabbedFormTabs,
    // FormGroupContextProvider, useFormGroup, DataInput,
// }

import InvoiceSellerForm from './InvoiceDynamicForm/InvoicePartiesDataForm/InvoiceSeller/InvoiceSellerForm.js';
import InvoiceBuyerForm from './InvoiceDynamicForm/InvoicePartiesDataForm/InvoiceBuyer/InvoiceBuyerForm.js';
import InvoiceItemCreate from './InvoiceDynamicForm/SalesDataForm/InvoiceProductList/InvoiceItem/InvoiceItemCreate.js';
import InvoiceHeaderLogotype from './InvoiceDynamicForm/InvoiceHeader/InvoiceHeaderLogotype.js'
import InvoiceHeaderData from './InvoiceDynamicForm/InvoiceHeader/InvoiceHeaderData.js';
import InvoiceHeaderList from './InvoiceDynamicForm/SalesDataForm/InvoiceProductList/InvoiceHeaderList.js';
import SumItemListIteratorForm from './InvoiceDynamicForm/InvoiceInfoForm/SumItemListIteratorForm.js'
import InvoiceFooterForm from './InvoiceDynamicForm/SalesDataForm/InvoiceFooter/InvoiceFooterForm.js';

import ClientCreateButton from '../../pages/clients/ClientCreateButton.js';
import SumSpanningTable from './InvoiceDynamicForm/SalesProductTable/SumSpanningTable';





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

const useStyles = makeStyles(() => ({
    gridSimpleForm: { flexGrow: 1 },
}));

const AddInvCreate = (props) => {
    const classes = useStyles();

    const transform = data => ({
        ...data,
        createAt: new Date(),
    })

    const dateDefaultValue = useMemo(() => new Date(), []);

    const [version, setVersion] = React.useState(0);
    const handleChange = React.useCallback(() => setVersion(version + 1), [version]);

    return (
        <Create {...props} transform={ transform }>
            <SimpleForm  className={classes.gridSimpleForm} >
            
        {/*-> MAIN CONTAINER */}
                <myGridSanitized container spacing={3} formClassName={classes.gridSimpleForm} >
            {/* ->CONTAINER=>HeadlineDate */}
                    <Grid container spacing={3}  >
                        <Grid item xs={12} sm={4} >
                            <InvoiceHeaderLogotype />
                        </Grid>
                        <Grid item xs={12} sm={8} >
                            
  {/* <InvoiceHeaderData /> */}
                        </Grid>
                    </Grid>
            {/* <-CONTAINER=>HeadlineDate */}
            {/* ->CONTAINER=>Seller&Buyer */}
                    <Grid container spacing={3} > 
                        <Grid item xs={12} sm={6}> 
                            {/* <FormGroupContextProvider name="Seller"> */}
  {/* <InvoiceSellerForm /> */}
                            {/* </FormGroupContextProvider> */}
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            {/* <FormGroupContextProvider name="Buyer"> */}
                                <ClientCreateButton  onChange={handleChange} />
                                
                                <InvoiceBuyerForm/>
                            {/* </FormGroupContextProvider> */}
                        </Grid>
                    </Grid>  
            {/* <-CONTAINER=>Seller&Buyer */}
            {/* ->CONTAINER=>SalesProductTable */}
                    <Grid container spacing={3}  >
                        <Grid  item xs={12} >
                            {/* <ArrayInput {...props} source="questions"> */}
                                <SumSpanningTable  />
                            {/* </ArrayInput> */}
                        </Grid>
                    </Grid>
            {/* <-CONTAINER=>SalesProductTable */}
            {/* ->CONTAINER=>DatagridProducts*/}
                    <Grid container spacing={3} >
                        <Grid item xs={12} >
                            <InvoiceHeaderList>
                                <InvoiceItemCreate fullWidth />
                            </InvoiceHeaderList>
                        </Grid>
                {/* ->subCONTAINER=>SelectChoices&Sum*/}
                        <Grid item container spacing={6} >
                            <Grid item  xs={12} sm={4} >
                                <SelectArrayInput source="groups" resource="customers" choices={segments} fullWidth /> 
                                <NullableBooleanInput source="has_newsletter" resource="customers" />
                            </Grid>
                            <Grid item xs={12} sm={8}  >
                                <SumItemListIteratorForm />
                            </Grid>
                        </Grid>
                {/* <- CONTAINER=>SelectChoices&Sum*/}
                    </Grid>  
            {/* <-CONTAINER=>DatagridProducts*/}
            {/* ->CONTAINER=>AddedInfo*/}
                <Grid container spacing={3} >
                    <Grid item  xs={12}  >
                        <InvoiceFooterForm />
                     
                    </Grid>
                </Grid>
            {/* <-CONTAINER=>AddedInfo*/}
                </myGridSanitized>
        {/*<- MAIN CONTAINER */}
            </SimpleForm>
        </Create>
    );
};

export default AddInvCreate;




















// może kiedyś będę to jeszcze oglądał 
 
                       {/*     <Grid item xs={12} sm={6}>
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
                                             <AccordionSectionTitle name="options">Options</AccordionSectionTitle> 
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
                             <AccordionSectionTitle name="options">Options</AccordionSectionTitle>
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
                                     <AccordionSectionTitle name="options">Options</AccordionSectionTitle> 
                                        </CardContent>
                                    </Card>
                        </FormGroupContextProvider>
                        <Toolbar>
                            <Box display="flex" justifyContent="space-between" width="100%">
                                {/* <SaveButton
                                    saving={formProps.saving}
                                    handleSubmitWithRedirect={formProps.handleSubmitWithRedirect}
                                    />
                                <DeleteButton record={formProps.record} /> 
                            </Box>
                        </Toolbar>  */}


// const AccordionSectionTitle = ({ children, name }) => {
//     const formGroupState = useFormGroup(name);

//     return (
    //         <Typography color={formGroupState.invalid && formGroupState.dirty ? 'error' : 'inherit'}>
    //             {children}
    //         </Typography>
    //     );
    // }
    


