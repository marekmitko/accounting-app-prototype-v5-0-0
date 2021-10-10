import * as React from "react";
import { useMemo, useEffect, useState, useCallback } from 'react';
import {
    SelectArrayInput,
    NullableBooleanInput,
    ArrayInput,
    ReferenceInput,
    SelectInput,
    FormGroupContextProvider,
    SaveButton,
    DeleteButton,
    Toolbar,
    TextField, useNotify, useCreate,
    useRecordContext,
    useFormContext,
    FormWithRedirect,
} from 'react-admin';
import { Grid,  makeStyles,  withStyles, CardContent, Typography, Box, } from '@material-ui/core';

import { sanitizeEmptyValues } from 'react-admin';
import { Form, useForm, Field, useFormState } from 'react-final-form';
import arrayMutators from 'final-form-arrays';
import  createDecorator  from 'final-form-calculate';
import { getIn } from 'final-form';

import myGridSanitized from '../../myComponents/myGridSanitized';
import InvoiceNo from './invoiceFormRC/contractorsDataForm/InvoiceNo';
import InvoiceSellerForm from './invoiceFormRC/contractorsDataForm/InvoiceSellerForm.js';
import InvoiceBuyerForm from './invoiceFormRC/contractorsDataForm/InvoiceBuyerForm.js';
import InvoiceHeaderLogotype from './invoiceFormRC/InvoiceHeader/InvoiceHeaderLogotype.js'
import InvoiceHeaderData from './invoiceFormRC/InvoiceHeader/InvoiceHeaderData.js';
import SumItemListIteratorForm from './invoiceFormRC/InvoiceInfoForm/SumItemListIteratorForm.js'
import InvoiceFooterForm from './invoiceFormRC/InvoiceFooter/InvoiceFooterForm.js';
import AddTradePartnerItemButton from './invoiceFormRC/contractorsDataForm/AddTradePartnerItemButton.js';
import SumSpanningTable from './invoiceFormRC/SalesProductTable/SumSpanningTable.js';

import AddedRowIterator from './invoiceFormRC/SalesProductTable/componentsSalesTable/AddedRowIterator';

import Save from '@material-ui/icons/Save';
import MuiTextField from '@material-ui/core/TextField'
import MuiButton from '@material-ui/core/Button';

import MyFormIterator from '../new_invoiceRC/invoiceFormRC/SalesProductTable/componentsSalesTable/MyFormIterator';
// ad  ./components/new_invoiceRC/InvoiceForm/SalesProductTable/SumSpanningTable.js

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


    

    
    
   
    const InvoiceForm = (props) => {
            
        const calculator = createDecorator(
    
            {
                field: /sales_list\[\d+\]\.item_netto/,
                updates: (value, name, allValues) => {
                    const totalField = name.replace(".item_netto", ".total");
                    const quantityField = name.replace(".item_netto", ".item_qty");
                    return {
                    [totalField]: parseInt(value) * parseInt(getIn(allValues, quantityField)),
                    };
                },
            },
            {
                field: /sales_list\[\d+\]\.item_qty/,
                updates: (value, name, allValues) => {
                    const totalField = name.replace(".item_qty", ".total");
                    const priceField = name.replace(".item_qty", ".item_netto");
                    return {
                    [totalField]: parseInt(value) * parseInt(getIn(allValues, priceField)),
                    };
                },
                }
        );

  

        
        
        
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

    const [total_sum_sales, setTotalSumSales] = useState({
            sum_items_netto: 0,
            sum_items_tax: 0,
            sum_items_brutto: 0,
    });


   


    return (
        <FormWithRedirect  { ...props }
                mutators={{...arrayMutators,}}
                // decorators={[calculator]}
                initialValues={{
                    sales_list: [ ],
                    invoice_date: new Date(),
                    invoice_due_data: new Date(new Date().getTime() + (14*24*60*60*1000)),
                    total_sum_sales,
                }}
           
                
            // initialValues={record}
            // onSubmit={submit}
            // onSubmit={submit}
            // mutators={{ ...arrayMutators }} // necessary for ArrayInput
            // subscription={defaultSubscription} // don't redraw entire form each time one field changes
            // key={version} // support for refresh button
            // keepDirtyOnReinitialize
   
            render={({   
                ...formProps, 
                form: {  mutators: { push, pop } },
                pristine,
                form,
                submitting,
                values
                }) => {
                // console.log('InvFormProps', formProps);
                // console.log('InvForm ', form);
                return (
                <form>

                        <Grid container spacing={3} formClassName={classes.gridSimpleForm} >
                            {/* <myGridSanitized container spacing={3} formClassName={classes.gridSimpleForm} > */}
                        {/* // <Create {...props} transform={ transform }>
                        //     <SimpleForm    className={classes.gridSimpleForm} > */}
                        {/*-> MAIN CONTAINER */}
                            {/*>> ->CONTAINER=>HeadlineDate */}
                                    <Grid container spacing={1}  >
                                        <Grid item xs={12} sm={1} >
                                            <InvoiceHeaderLogotype />
                                        </Grid>
                                        <Grid item xs={12} sm={11} >
                                            {/* <InvoiceHeaderData /> */}
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
                                    {/* <Grid container spacing={  2}  > 
                                         <ArrayInput source="New_iterator" {...props} > 
                                            <AddedRowIterator />
                                         </ArrayInput> 
                                    </Grid> */}
                                    {/* <Grid container spacing={  2}  > 
                                        <ArrayInput source="New_iterator" {...props} >
                                                <MyFormIterator />
                                        </ArrayInput>
                                    </Grid> */}
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
                                            <ArrayInput label="" source="sales_list" {...props}>
                                                <SumSpanningTable typeItem={typeItem} setTypeItem={setTypeItem}  form={form} total_sum_sales={total_sum_sales}  />
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
                            {/*>> ->CONTAINER=>Button*/}
                                <Grid container spacing={3} >
                                    <Grid item  xs={12}  >
                                        <Toolbar>
                                            <Box display="flex" justifyContent="space-between" width="100%">
                                                <SaveButton
                                                        saving={formProps.saving}
                                                        handleSubmitWithRedirect={formProps.handleSubmitWithRedirect}
                                                />
                                                
                                                {/* 
                                                //moze to tylko w edit jest 
                                                <DeleteButton record={formProps.record} /> */}
                                            </Box>
                                        </Toolbar>
                                    </Grid>
                                </Grid>
                            {/* X <-CONTAINER=>Button*/}
                        {/*<- MAIN CONTAINER */}
                        {/* //     </SimpleForm>
                        // </Create> */}
                        </Grid>
                    </form>
                );
                }
            }
        />
    );
};



export default InvoiceForm;





