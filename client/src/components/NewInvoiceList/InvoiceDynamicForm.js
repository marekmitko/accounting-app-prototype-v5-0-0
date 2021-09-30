import * as React from "react";
import { useMemo, useEffect, useState, useCallback } from 'react';
import {
    Create,
    SelectArrayInput,
    NullableBooleanInput,
    SimpleForm,
    ArrayInput,
    ReferenceInput,
    SelectInput,
    FormGroupContextProvider,
} from 'react-admin';
import { Grid,  makeStyles  } from '@material-ui/core';

import myGridSanitized from '../../myComponents/myGridSanitized';
import InvoiceNo from './InvoiceDynamicForm/contractorsDataForm/InvoiceNo';
import InvoiceSellerForm from './InvoiceDynamicForm/contractorsDataForm/InvoiceSellerForm.js';
import InvoiceBuyerForm from './InvoiceDynamicForm/contractorsDataForm/InvoiceBuyerForm.js';
import InvoiceHeaderLogotype from './InvoiceDynamicForm/InvoiceHeader/InvoiceHeaderLogotype.js'
import InvoiceHeaderData from './InvoiceDynamicForm/InvoiceHeader/InvoiceHeaderData.js';
import SumItemListIteratorForm from './InvoiceDynamicForm/InvoiceInfoForm/SumItemListIteratorForm.js'
import InvoiceFooterForm from './InvoiceDynamicForm/InvoiceFooter/InvoiceFooterForm.js';
import AddTradePartnerItemButton from './InvoiceDynamicForm/contractorsDataForm/AddTradePartnerItemButton.js';
import SumSpanningTable from './InvoiceDynamicForm/SalesProductTable/SumSpanningTable';

// ad  ./components/NewInvoiceList/InvoiceDynamicForm/SalesProductTable/SumSpanningTable.js

const payment_method = [
    ];
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
            url: 'http://google.com',
        },
    ];

const useStyles = makeStyles(() => ({
        gridSimpleForm: { flexGrow: 1 },
    }));

const AddInvCreate = (props) => {

    const [dataSeller, setSellerData] = useState({});
        useEffect((dataSeller) => {
            // GET request using fetch inside useEffect React hook
            fetch('http://localhost:3000//userProfile/Profile12356x')
            .then(response => response.json())
            .then(data => setSellerData(data));
            // empty dependency array means this effect will only run once (like componentDidMount in classes)
        }, dataSeller);

    const classes = useStyles();
    const transform = data => ({
            ...data,
            createAt: new Date(),
        })
    const dateDefaultValue = useMemo(() => new Date(), []);
    const [version, setVersion] = useState(0);
    const handleChange = useCallback(() => setVersion(version + 1), [version]);

    const [typeItem, setTypeItem] = useState(true);

    return (
        <Create {...props} transform={ transform }>
            <SimpleForm  className={classes.gridSimpleForm} >
            
        {/*-> MAIN CONTAINER */}
                <myGridSanitized container spacing={3} formClassName={classes.gridSimpleForm} >
            {/*>> ->CONTAINER=>HeadlineDate */}
                    <Grid container spacing={2}  >
                        <Grid item xs={12} sm={4} >
                            <InvoiceHeaderLogotype />
                        </Grid>
                        <Grid item xs={12} sm={8} >
                            
  <InvoiceHeaderData />
                        </Grid>
                    </Grid>
            {/* X <-CONTAINER=>HeadlineDate */}
                    <Grid container spacing={2} > 
            {/*>> ->CONTAINER=>NewTradePartnerItemButton */}
                        <Grid item xs={12} sm={6}> 
                            <Grid container spacing={  2}  > 
                                <Grid item xs={12} sm={6}>
                                    <InvoiceNo/>
                                </Grid>
                            </Grid>
                        </Grid>
            {/* X <-CONTAINER=>NewTradePartnerItemButton*/}
                        <Grid item xs={12} sm={6}> 
            {/*>> ->CONTAINER=>NewTradePartnerItemButton */}
                            <Grid container spacing={  2}  > 
                                {/* <createTradePartnerItemButton name="Buyer"> */}
                                <Grid item xs={12} sm={6}>
                                    <ReferenceInput  label="Wybierz Kontrahenta" key={version} source={"id"} reference="tradePartners_list" >
                                        <SelectInput label="Wybierz Kontrahenta" variant ="outlined" fullWidth optionText="company" />
                                    </ReferenceInput>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <AddTradePartnerItemButton onChange={handleChange} />
                                </Grid>
                                {/* <createTradePartnerItemButton name="Buyer"> */}
                            </Grid>
            {/* X <-CONTAINER=>NewTradePartnerItemButton*/}
                        </Grid>
                    </Grid>
            {/*>> ->CONTAINER=>Seller&Buyer */}
                    <Grid container spacing={2} > 
                        <Grid item xs={12} sm={6}> 
                            <FormGroupContextProvider name="inv_Seller">
  <InvoiceSellerForm dataUser={dataSeller} />
                            </FormGroupContextProvider>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            
                            <Grid item xs={12} > 
                                {/* <FormGroupContextProvider name="Buyer"> */}
                                    <InvoiceBuyerForm/>
                                {/* </FormGroupContextProvider> */}
                            </Grid>
                        </Grid>
                    </Grid>  
            {/* X <-CONTAINER=>Seller&Buyer */}
            {/*>> ->CONTAINER=>SalesProductTable */}
                    <Grid container spacing={3}  >
                        <Grid  item xs={12} >
                            <ArrayInput label="" source="sales_list">
                                <SumSpanningTable typeItem={typeItem} setTypeItem={setTypeItem} { ...props }  />
                            </ArrayInput>
                        </Grid>
                    </Grid>
            {/* X <-CONTAINER=>SalesProductTable */}
            {/*>> ->CONTAINER=>DatagridProducts*/}
                    <Grid container spacing={3} >
                        <Grid item xs={12} >
                            {/* <InvoiceHeaderList>
                                <InvoiceItemCreate fullWidth />
                            </InvoiceHeaderList> */}
                        </Grid>
                {/*>> ->subCONTAINER=>SelectChoices&Sum*/}
                        <Grid item container spacing={6} >
                            <Grid item  xs={12} sm={4} >
                                <SelectArrayInput source="groups" resource="customers" choices={segments} fullWidth /> 
                                <NullableBooleanInput source="has_newsletter" resource="customers" />
                            </Grid>
                            <Grid item xs={12} sm={8}  >
                                <SumItemListIteratorForm />
                            </Grid>
                        </Grid>
                {/* X <- CONTAINER=>SelectChoices&Sum*/}
                    </Grid>  
            {/* X <-CONTAINER=>DatagridProducts*/}
            {/*>> ->CONTAINER=>AddedInfo*/}
                <Grid container spacing={3} >
                    <Grid item  xs={12}  >
                        <InvoiceFooterForm />
                    </Grid>
                </Grid>
            {/* X <-CONTAINER=>AddedInfo*/}
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
    


