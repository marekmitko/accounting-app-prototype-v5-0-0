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
    SaveButton,
    DeleteButton,
    Toolbar,
    useSaveContext,
    TextField, useNotify, useCreate,
    FormContext,
    useFormContext,

} from 'react-admin';
import { Grid,  makeStyles,  withStyles, CardContent, Typography, Box, } from '@material-ui/core';

import { sanitizeEmptyValues } from 'react-admin';
import { Form, useForm, Field } from 'react-final-form';
import arrayMutators from 'final-form-arrays';

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

import Save from '@material-ui/icons/Save';
import MuiTextField from '@material-ui/core/TextField'
import MuiButton from '@material-ui/core/Button';
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







    const TextInput = withStyles({
        root: {
            margin: '16px 0px'
        }
     })(MuiTextField);
     
     const Button = withStyles({
         root: {
             margin: '16px 0px'
         }
     })(MuiButton);

    const defaultSubscription = {
        submitting: true,
        pristine: true,
        valid: true,
        invalid: true,
        validating: true,
    };







// const AddInvCreate = (props) => {
const AddInvCreate = ({ basePath, record, save, saving, version, }) => {
        

  

        
        
        
        // const { values: { todayDate }} = useFormState({ subscription: { values: true } });
    // const { values: { todayDate }} = useFormState({ subscription: { values: true } });


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
    const [versionPartnerList, setVersionPartnerList] = useState(0);
    const handleChange = useCallback(() => setVersionPartnerList(versionPartnerList + 1), [versionPartnerList]);
    
    const [typeItem, setTypeItem] = useState(true);
    
    const submit = values => {
        // React-final-form removes empty values from the form state.
        // To allow users to *delete* values, this must be taken into account 
        save(sanitizeEmptyValues(record, values));
    };
    const  saveContext  =  useFormContext ( ) ;
    const  formContext  =  useFormContext ( ) ;

    
    // render={({ handleSubmit, form, submitting, pristine, values }) => (
    return (
        <Form
            initialValues={record}
            // onSubmit={submit}
            onSubmit={submit}
            mutators={{ ...arrayMutators }} // necessary for ArrayInput
            subscription={defaultSubscription} // don't redraw entire form each time one field changes
            key={version} // support for refresh button
            keepDirtyOnReinitialize
            render={({ submit, form, submitting, pristine, values }) => (
              
              
                        
                    <Grid container spacing={3} formClassName={classes.gridSimpleForm} >
                       
             
            {/* <myGridSanitized container spacing={3} formClassName={classes.gridSimpleForm} > */}
        {/* // <Create {...props} transform={ transform }>
        //     <SimpleForm    className={classes.gridSimpleForm} > */}
     
        {/*-> MAIN CONTAINER */}
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
                                    <ReferenceInput  label="Wybierz Kontrahenta" key={versionPartnerList} source={"id"} reference="tradePartners_list" >
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
                            {/* <FormGroupContextProvider name="inv_Seller"> */}
  <InvoiceSellerForm dataUser={dataSeller} />
                            {/* </FormGroupContextProvider> */}
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
                            {/* <ArrayInput label="" source="sales_list"> */}
                                <SumSpanningTable typeItem={typeItem} setTypeItem={setTypeItem}   />
                            {/* </ArrayInput> */}
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
            {/*>> ->CONTAINER=>Button*/}
                <Grid container spacing={3} >
                    <Grid item  xs={12}  >
                    <Toolbar>
                    <Box display="flex" justifyContent="space-between" width="100%">
                        
                        <SaveButton 
                            saving={formProps.saving}
                        />
                        {/* <DeleteButton record={formProps.record} /> */}
                    </Box>
                </Toolbar>
                    </Grid>
                </Grid>
            {/* X <-CONTAINER=>Button*/}
        {/*<- MAIN CONTAINER */}
        {/* //     </SimpleForm>
        // </Create> */}
        </Grid>
               
              
            )}
        />
    );
};



export default AddInvCreate;





