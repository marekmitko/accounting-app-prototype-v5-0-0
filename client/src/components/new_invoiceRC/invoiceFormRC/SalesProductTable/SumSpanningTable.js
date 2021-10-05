import React from 'react';
import { useEffect } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { FieldArray } from 'react-final-form-arrays';
import {  Field, } from 'react-final-form';
import  { NumberInput, SelectInput, FormDataConsumer, useFormGroup, useRecordContext, useResourceContext,
}  from 'react-admin';

import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import Add from '@material-ui/icons/Add';
import Delete from '@material-ui/icons/HighlightOff';
import Button from '@material-ui/core/Button';

import BoxNumberInput from '../../../../myComponentsMui/myMuiForm/BoxNumberInput';

import createDecorator from 'final-form-calculate';
import { getIn } from 'final-form';
import SalesTableHeader from './componentsSalesTable/SalesTableHeader';
import AdditionalOptions from './componentsSubSalesTable/AdditionalOptions';
import SumSalesItems from './componentsSubSalesTable/SumSalesItems';



const useStyles = makeStyles({
    
    table: {
        minWidth: 700,
        borderSpacing: 0,
    },
    IteratorRowProduct: {
        "& tr": {
            "& td": {
                paddingTop: 14,
                paddingLeft: 2,
                paddingBottom: 14,
                paddingRight: 2,
                "& selectinput": {
                    "& div": {
                        minWidth: 80,
                        },
                    },
                     
            },
        },

    },
    select: {
        "& ul": {
            backgroundColor: "#cccccc",
        },
        "& li": {
            fontSize: 14,
        },
    },
    helperTextIsNONE: {
        fontSize: 14,
        "& p": {
            display: 'none',
        },
    },

});

// function ccyFormat(num) {
//   return `${num.toFixed(2)}`;
// }

// { ({ fieldProps }) => { 
//     console.log("propFieldsValue", typeof(fieldProps.fields.value ), fieldProps.fields.value )
//     console.log("propFields", typeof(fieldProps.fields ), fieldProps.fields["sales_list"] )

//         }      
// }

function subtotal(items) {
  return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}



const item_type = [
    { label: 'Usługa', id: 'usługi', name: 'Usługi' },
    { label: 'Towar', id: 'towar', name: 'Towary' },
    { label: 'Najem', id: 'najem', name: 'Najem' },
    { label: 'Prowizja', id: 'Prowizja', name: 'Prowizja' },
    { label: 'MVA', id: 'MVA', name: 'MVA' },
    { label: 'O% MVA', id: 'Sprzedaż 0% MVA', name: '0% MVA' },
    { label: 'Zwolniona', id: 'Sprzedaż zwolniona MVA', name: 'Zwolniony' },
];
const item_tax = [
    { id: 0.25, name: '25 %', label: '25%', value: 0.25 },
    { id: 0.15, name: '15 %', label: '15%', value: 0.15 },
    { id: 0.12, name: '12 %', label: '12%', value: 0.12 },
    { id: 0.06, name: '6 %',  label: '6%', value: 0.06 },
    { id: 0,    name: '0 %',  label: '0%', value: 0    },
];

                {/*>> ->CONTAINER=>HeadlineDate */}
                {/* X <-CONTAINER=>HeadlineDate */}

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


const SumSpanningTable = (    {typeItem, setTypeItem, source, ...props}) => {
    // const formGroupState = useFormGroup();
    const classes = useStyles();
    const record = useRecordContext();
    const resource = useResourceContext();

    const handleChangeSelectType = (event) => {
        setTypeItem(event.target.value);
    };



    return (  
        <FieldArray name="sales_list" > 
            {(fieldProps) => {
                    return (
                        <TableContainer component={Paper}>
        {/*>> ->CONTAINER=> SalesTable in Table */}
                    <Table className={classes.table } aria-label="sales list table">
            {/*>>  ->subCONTAINER=> HEADER-> sales_list in TableHead--SalesTable */}
                        <SalesTableHeader/>
            {/* X <-subCONTAINER=> Header-> sales_list in TableHead--SalesTable */}
                        <TableBody className={classes.IteratorRowProduct } >  
            {/*>>  ->subCONTAINER=> sales_item in TableRow--iteratorForm */}
                            {fieldProps.fields.map((sales_item, index) => {
                                    return (
                                        <TableRow   hover tabIndex={-1} key={index}>  
                                            <TableCell style={{ padding: 10 }} align="center"   >
                                                {index+1}
                                            </TableCell>  
                                            <TableCell colSpan={2} >  
                                                <Field
                                                name={`sales_list[${index}].item_name`}
                                                render={({input}) => (
                                                    
                                                    <TextField  label="Nazwa" name={input.name} value={input.value} onChange={input.onChange} variant="outlined" 
                                                                InputLabelProps={{ shrink: true }}  />
                                                    )}  type="text" />
                                            </TableCell>  
                                            <TableCell align="center">  
                                                <Field
                                                    name={`sales_list[${index}].item_type`}
                                                    component="SelectInput" >
                                                        <SelectInput    label="Wybierz" variant ="outlined" source={`sales_list[${index}].item_type`} choices={item_type}
                                                                        className={ classes.helperTextIsNONE } />
                                                </Field>
                                            </TableCell>  
                                            {/* <TableCell>  
                                                <Field
                                                name={`sales_list[${index}].total`}
                                                component={TextField}
                                                placeholder="Total"
                                                />
                                            </TableCell>   */}
                                            <TableCell align="center">  
                                                <Field
                                                        name={`sales_list[${index}].item_qty`}
                                                        component="NumberInput" >
                                                    <NumberInput    label="Ilość" variant ="outlined" source={`sales_list[${index}].item_qty`} 
                                                                    // name={[...props.input.name]}
                                                                    // value={[...props.input.value]}
                                                                    // onChange={[...props.input.onChange]}
                                                                    className={ classes.helperTextIsNONE } 
                                                                    style={{ maxWidth: 90 }} />
                                                </Field>
                                            </TableCell>  
                                            <TableCell align="center" >
                                                <Field
                                                    name={`sales_list[${index}].item_netto`}
                                                    component="NumberInput" >
                                                        <NumberInput    label="Kwota netto" variant ="outlined"  source={`sales_list[${index}].item_netto`} 
                                                                        className={ classes.helperTextIsNONE } />
                                                </Field>
                                            </TableCell>   
                                            <TableCell align="left">  
                                                {/* <Field
                                                   
                                                    name={`sales_list[${index}].item_tax`} 
                                                    component="SelectInput" >
                                                        <SelectInput    label="VAT" variant ="outlined" source={`sales_list[${index}].item_tax`} choices={item_tax}
                                                                        className={ classes.helperTextIsNONE }
                                                                        style={{ maxWidth: 40 }}
                                                                        
                                                                         />
                                                </Field> */}
                                            </TableCell>  
                                    {/*sumNETTO ->tabCELL=>sum_item_netto*/}
                                            <TableCell align="right">  
                                                {/* <FormDataConsumer  subscription={{ values: true }} > */}
                                                    {() => {     
                                                        console.log('fieldProps', fieldProps.fields.value);    
                                                            if(typeof fieldProps.fields["sales_list"][index]["item_netto"] !== 'undefined' ) {
                                                                fieldProps.fields["sales_list"][index]["sum_item_netto"] = 
                                                                                                                fieldProps.fields["sales_list"][index]["item_netto"] * fieldProps.fields["sales_list"][index]["item_qty"];
                                                                return ( 
                                                                        <Field
                                                                            name={`sales_list[${index}].sum_item_netto`}
                                                                            initialValues={fieldProps.fields["sales_list"][index]["sum_item_netto"]}
                                                                            render={({input}) => (
                                                                                <TextField  label="Nazwa" name={input.name} value={input.value} onChange={input.onChange} variant="standart" 
                                                                                            InputLabelProps={{ shrink: true }}  />
                                                                                )}  type="number" />
                                                                );}  else {
                                                                        return( <Field
                                                                            name={`sales_list[${index}].sum_item_netto`}
                                                                            initialValues={0}
                                                                            render={({input}) => (
                                                                                <TextField  label="Nazwa" name={input.name} value={input.value} onChange={input.onChange} variant="standart" 
                                                                                            InputLabelProps={{ shrink: true }}  />
                                                                                )}  type="number" />
                                                                        );}            
                                                        }
                                                    } 
                                              
                                    {/*sumNETTO <-tabCELL=>sum_item_netto*/}
                                            </TableCell>
                                            <TableCell align="center">  
                                    {/*sumTAX ->tabCELL=>sum_item_tax*/}
                                                <FormDataConsumer  subscription={{ values: true }} >
                                                        {({ formData, ...rest  }) => {       
                                                            if(typeof formData["sales_list"][index]["item_tax"] !== 'undefined' ) {
                                                                formData["sales_list"][index]["sum_item_tax"] = 
                                                                                                                (formData["sales_list"][index]["item_netto"] * formData["sales_list"][index]["item_qty"])
                                                                                                                * formData["sales_list"][index]["item_tax"];
                                                                return (                                                                       
                                                                    <Field
                                                                    name={`sales_list[${index}].sum_item_tax`}
                                                                    initialValues={formData["sales_list"][index]["sum_item_tax"]}
                                                                        component="NumberInput" >
                                                                            <NumberInput    label="Kwota netto" variant ="field"  source={`sales_list[${index}].sum_item_tax`} 
                                                                                            className={ classes.helperTextIsNONE } />
                                                                    </Field>
                                                                );}  else {
                                                                    return( 
                                                                        <Field
                                                                            name={`sales_list[${index}].sum_item_tax`}
                                                                            component="NumberInput" >
                                                                                <NumberInput    label="Kwota netto" variant ="outlined"  source={`sales_list[${index}].sum_item_tax`} 
                                                                                                className={ classes.helperTextIsNONE } />
                                                                        </Field>
                                                                    );}            
                                                            }
                                                        } 
                                                </FormDataConsumer>
                                    {/*sumTAX <-tabCELL=>sum_item_tax*/}
                                            </TableCell>  
                                            <TableCell align="left">  
                                    {/*sumBRUTTO ->tabCELL=>sum_item_brutto*/}
                                                <FormDataConsumer  subscription={{ values: true }} >
                                                        {({ formData, ...rest  }) => {        
                                                            if(typeof formData["sales_list"][index]["sum_item_netto"] && formData["sales_list"][index]["sum_item_tax"] !== 'undefined' ) {
                                                                formData["sales_list"][index]["sum_item_brutto"] = 
                                                                                                                (formData["sales_list"][index]["item_netto"] * formData["sales_list"][index]["item_qty"])
                                                                                                                * (formData["sales_list"][index]["item_tax"] + 1);

                                                                                return ( <BoxNumberInput   source={`sales_list[${index}].sum_item_brutto`} label="Wartość brutto" variant="standard"   {...rest} 
                                                                                                    className={ classes.helperTextIsNONE }  disabled >
                                                                            {formData["sales_list"][index]["sum_item_brutto"] = (formData["sales_list"][index]["item_netto"] * formData["sales_list"][index]["item_qty"]) * (formData["sales_list"][index]["item_tax"] + 1)}
                                                                                </BoxNumberInput>
                                                                                );}  else {
                                                                                    return( <BoxNumberInput  mt="-0.75em" ml="0.5em" label="Wartość brutto" source={`sales_list[${index}].sum_item_brutto`}  variant="standard"   mr="0.5em" 
                                                                                                        className={ classes.helperTextIsNONE }  />
                                                                                        );}            
                                                                                    }
                                                                                } 
                                                    </FormDataConsumer>
                                        {/*sumBRUTTO <-tabCELL=>sum_item_brutto*/}
                                                </TableCell> 
                                            <TableCell colSpan={2} align="center" >  
                                                <Button 
                                                    style={{ textAlign: 'center' }} 
                                                    color="error"
                                                    type="button" 
                                                    // style={{ marginTop: '-5%' }}
                                                    onClick={() => fieldProps.fields.remove(index)}>
                                                    <Delete style={{ color: 'red' }} />
                                                </Button>
                                            </TableCell>  
                                        </TableRow>  
                                    );
                                }
                            )}
            {/* X <-subCONTAINER=> sales_item in TableRow--iteratorForm */}
                        </TableBody>  
                    </Table>
        {/* X <-CONTAINER=> SalesTable in Table */}
            {/*>>  ->subCONTAINER=> addButton in TableRow--capition */}
                        <capition>
                            <Grid container  formClassName={classes.gridSimpleForm} >
                                <Grid item xs={12}> 
                                    <div>
                                            <Button
                                                type="button"
                                                onClick={
                                                    () => fieldProps.fields.push({ id: '', sales_item: '', sum_item_brutto: '', sum_item_netto: '', })}
                                                    color="secondary"
                                                variant="contained"
                                                style={{ marginTop: '16px', marginLeft: '16px' }}
                                                >
                                                <Add />
                                            </Button>
                                    </div>
                                </Grid>
                            </Grid>
                        </capition>
            {/* X <-subCONTAINER=> addButton in TableRow--capition */}
                    <TableContainer>
                {/*>> ->CONTAINER=> additional options on the invoice */}
                            <Grid container  formClassName={classes.gridSimpleForm} >
                                <Grid item xs={12} sm={6}>
                        {/*>> ->subCONTAINER=> AdditionalOptions in Table */}
                                    <AdditionalOptions />
                        {/* X <-subCONTAINER=> AdditionalOptions in Table */}
                                </Grid >
                                <Grid item xs={12} sm={6}> 
                        {/*>> ->subCONTAINER=> SubTableSumSales in Table */}
                                    <SumSalesItems fieldProps={fieldProps} />
                        {/* X <-subCONTAINER=> SubTableSumSales in Table */}
                                </Grid>
                            </Grid >
                {/* X <-subCONTAINER=> additional options on the invoice */}
                    </TableContainer>
                </TableContainer>
                    );
                }
            }
        </FieldArray>
    )
};
export default SumSpanningTable;