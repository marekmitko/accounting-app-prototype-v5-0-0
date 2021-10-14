import * as React from "react";
import {    useMemo, useEffect, useState, useCallback } from 'react';
import {    SelectArrayInput,
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

import Save from '@material-ui/icons/Save';
import MuiTextField from '@material-ui/core/TextField'
import MuiButton from '@material-ui/core/Button';



 
const dataInitOnClickAddItem =  { 
    id: "",
    item_name: undefined,
    item_type: undefined,
    item_qty: 1,
    item_netto: 0.00,
    item_tax: undefined,
    sum_item_netto: 0.00,
    sum_item_tax: 0.00,
    sum_item_brutto: 0.00,
};


const dataSelectFieldSalesItem = {
    item_type: [
        { label: 'Usługa', id: 'usługi', name: 'Usługi' },
        { label: 'Towar', id: 'towar', name: 'Towary' },
        { label: 'Najem', id: 'najem', name: 'Najem' },
        { label: 'Prowizja', id: 'Prowizja', name: 'Prowizja' },
        { label: 'MVA', id: 'MVA', name: 'MVA' },
        { label: 'O% MVA', id: 'Sprzedaż 0% MVA', name: '0% MVA' },
        { label: 'Zwolniona', id: 'Sprzedaż zwolniona MVA', name: 'Zwolniony' },
    ],
    item_tax: [
        { id: 0.25, name: '25 %', label: '25%', value: 0.25 },
        { id: 0.15, name: '15 %', label: '15%', value: 0.15 },
        { id: 0.12, name: '12 %', label: '12%', value: 0.12 },
        { id: 0.06, name: '6 %',  label: '6%',  value: 0.06 },
        { id: 0,    name: '0 %',  label: '0%',  value: 0    },
    ]
};

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

    // const { values: { todayDate }} = useFormState({ subscription: { values: true } });
    const [versionDataUser, setVersionDataUser] = useState(0);
    const [dataUser, setDataUser] = useState({});
    useMemo((dataUser) => {
            // GET request using fetch inside useEffect React hook
            fetch('http://localhost:3000//userProfile/Profile12356x')
            .then(response => response.json())
            .then(data => setDataUser(data));
            // empty dependency array means this effect will only run once (like componentDidMount in classes)
        }, [versionDataUser]);

// useMemo(() => {
//     change('test_second_input', test_first_input / 10);
// }, [change, test_first_input]);

    const classes = useStyles();
    // const transform = data => ({
    //         ...data,
    //         createAt: new Date(),
        // })
    const dateDefaultValuse = useMemo(() => new Date(), []);
    const [versionPartnerList, setVersionPartnerList] = useState(0);
    const handleChange = useCallback(() => setVersionPartnerList(versionPartnerList + 1), [versionPartnerList]);

    return (
        <FormWithRedirect  { ...props }
                mutators={{...arrayMutators,}}
                initialValues={{
                    dataSeller: {dataUser},
                    salesTable: {   sales_items_list: [], 
                                    total_sum_sales: { sum_items_netto: 0, sum_items_tax: 0, sum_items_brutto: 0 } 
                                },
                    invoice_date: new Date(),
                    invoice_due_data: new Date(new Date().getTime() + (14*24*60*60*1000)),
                  
                    }
                }
                dataInitOnClickAddItem={dataInitOnClickAddItem}
                dataSelectFieldSalesItem={dataSelectFieldSalesItem}
                choices={segments}
                
                render={({  ...formProps,
                    initialValues,  values, 
                    // form: {  mutators: { push, pop } },  pristine, form, submitting,
                    }) => {
            // console.log("%c props ", "color:white; font-weight:900; background-color:#1B2631;", 
            //     props, console.count('count'));     //cLog props
            //     console.log("%c formProps ", "color:white; font-weight:900; background-color:#154360;", 
            //         formProps, console.count('count')); //cLog formProps
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
                                            <InvoiceSellerForm initSeller={dataUser} />
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
                                            <ArrayInput label="" source="salesTable"    >
                                                <SumSpanningTable 
                                                    dataInitOnClickAddItem={dataInitOnClickAddItem}
                                                    dataSelectFieldSalesItem={dataSelectFieldSalesItem}  />
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
                                                <DeleteButton record={formProps.record} />
                                                */}
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





            
// const calculator = createDecorator(
    
//     {
//         field: /sales_items_list\[\d+\]\.item_netto/,
//         updates: (value, name, allValues) => {
//             const totalField = name.replace(".item_netto", ".total");
//             const quantityField = name.replace(".item_netto", ".item_qty");
//             return {
//             [totalField]: parseInt(value) * parseInt(getIn(allValues, quantityField)),
//             };
//         },
//     },
//     {
//         field: /sales_items_list\[\d+\]\.item_qty/,
//         updates: (value, name, allValues) => {
//             const totalField = name.replace(".item_qty", ".total");
//             const priceField = name.replace(".item_qty", ".item_netto");
//             return {
//             [totalField]: parseInt(value) * parseInt(getIn(allValues, priceField)),
//             };
//         },
//         }
// );


