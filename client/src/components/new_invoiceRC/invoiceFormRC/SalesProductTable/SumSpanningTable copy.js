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
import TextField from '@material-ui/core/TextField';
import  { TextInput, NumberInput, SelectInput, FormDataConsumer, useFormGroup, useRecordContext, useResourceContext,
    CheckboxGroupInput, RadioButtonGroupInput, BooleanInput, 

}  from 'react-admin';


import Add from '@material-ui/icons/Add';
import Delete from '@material-ui/icons/HighlightOff';
import Button from '@material-ui/core/Button';
import Input  from '@material-ui/core/Input';

import SalesTableHeader from './componentsSalesTable/SalesTableHeader';
// import SubTableSumHeader from './componentsSubSalesTable/SumSalesItemsHeader';

import BoxNumberInput from '../../../../myComponentsMui/myMuiForm/BoxNumberInput';

import { useForm, useFormState } from 'react-final-form';

import { FormControl } from '@material-ui/core';

import createDecorator from 'final-form-calculate'
import AdditionalOptions from './componentsSubSalesTable/AdditionalOptions'
import SumSalesItems from './componentsSubSalesTable/SumSalesItems';





const useStyles = makeStyles({
  table: {
    minWidth: 700,
    borderSpacing: 0,
  },
});

// function ccyFormat(num) {
//   return `${num.toFixed(2)}`;
// }

function subtotal(items) {
  return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}

const calculator = createDecorator(
    // Calculations:
  {
     field: 'number1', // when the value of foo changes...
     updates: {
       number2: (fooValue, allValues) => allValues["number1"] * 2
     }
  })
  

const item_type = [
    { id: 'usługi', name: 'Usugi' },
    { id: 'towar', name: 'Towary' },
    { id: 'najem', name: 'Najem' },
    { id: 'Prowizja', name: 'Prowizja' },
    { id: 'MVA', name: 'MVA' },
    { id: 'Sprzedaż 0% MVA', name: '0% MVA' },
    { id: 'Sprzedaż zwolniona MVA', name: 'Zwolniony' },
];
const item_tax = [
    { id: 0.25, name: '25 %', value: 0.25 },
    { id: 0.15, name: '15 %', value: 0.15 },
    { id: 0.12, name: '12 %', value: 0.12 },
    { id: 0.06, name: '6 %', value: 0.06 },
    { id: 0, name: '0 %', value: 0 },
];

                {/*>> ->CONTAINER=>HeadlineDate */}
                {/* X <-CONTAINER=>HeadlineDate */}



const SumSpanningTable = (    {source, ...props}) => {
    const formGroupState = useFormGroup();
    const classes = useStyles();
    const record = useRecordContext();
    const resource = useResourceContext();
    return (  
        <FieldArray name="sales_list" decorators={[calculator]} > 
            {(fieldProps) => {
                    return (
                        <TableContainer component={Paper}>
        {/*>> ->CONTAINER=> SalesTable in Table */}
                    <Table className={classes.table} aria-label="sales list table">
            {/*>>  ->subCONTAINER=> HEADER-> sales_list in TableHead--SalesTable */}
                        <SalesTableHeader/>
            {/* X <-subCONTAINER=> Header-> sales_list in TableHead--SalesTable */}
                        <TableBody>  
            {/*>>  ->subCONTAINER=> sales_item in TableRow--iteratorForm */}
                            {fieldProps.fields.map((sales_item, index) => {
                                    return (
                                        <TableRow className="IteratorRowProduct" hover tabIndex={-1} key={index}>  

                                        <TableCell align="center"   >
                                            {index+1}
                                        </TableCell>  
                                        <TableCell colSpan={2} >  
                                        <Field
                                        name={`sales_list[${index}].item_name`}
                                        render={({input}) => (
                                            <TextInput  label="Nazwa"  variant="outlined" source={`sales_list[${index}].item_name`} 
                                        />
                                    )}
                                    placeholder="NazwaProdukt"
                                  />
                                        </TableCell>  
                                        <TableCell align="left">  
                                            <SelectInput label="Wybierz Typ" variant ="outlined" source={`sales_list[${index}].item_type`} choices={item_type}/>
                                        </TableCell>  
                                        <TableCell   align="left">  
                                            <NumberInput    label="Ilość" variant ="outlined" source={`sales_list[${index}].item_qty`} />
                                        </TableCell>  
                                        <TableCell  align="left" >
                                            <NumberInput  label="Kwota netto" variant ="outlined"  source={`sales_list[${index}].item_netto`} />
                                        </TableCell>   
                                        <TableCell   align="left">  
                                            <SelectInput   label="Stawka VAT" variant ="outlined" source={`sales_list[${index}].item_tax`} choices={item_tax}/>
                                        </TableCell>  
                                        <TableCell    align="right">  
                                {/*sumNETTO ->tabCELL=>sum_item_netto*/}
                                            <FormDataConsumer  subscription={{ values: true }} >
                                                {({ formData, ...rest  }) => {         
                                                        if(typeof formData["sales_list"][index]["item_netto"] !== 'undefined' ) {
                                                            formData["sales_list"][index]["sum_item_netto"] = 
                                                                                                            formData["sales_list"][index]["item_netto"] * formData["sales_list"][index]["item_qty"];
                                                            return ( <NumberInput variant="filled" initialValues={formData["sales_list"][index]["sum_item_netto"]}  source={`sales_list[${index}].sum_item_netto`} label="Wartość Netto"   {...rest} disabled />
                                                            );}  else {
                                                                    return( <NumberInput variant="filled" label="Wartość Netto" source={`sales_list[${index}].sum_item_netto`}  disabled  />
                                                                    );}            
                                                    }
                                                } 
                                            </FormDataConsumer>
                                {/*sumNETTO <-tabCELL=>sum_item_netto*/}
                                        </TableCell>
                                        <TableCell  align="center">  
                                {/*sumTAX ->tabCELL=>sum_item_tax*/}
                                            <FormDataConsumer  subscription={{ values: true }} >
                                                    {({ formData, ...rest  }) => {       
                                                        if(typeof formData["sales_list"][index]["item_tax"] !== 'undefined' ) {
                                                            formData["sales_list"][index]["sum_item_tax"] = 
                                                                                                            (formData["sales_list"][index]["item_netto"] * formData["sales_list"][index]["item_qty"])
                                                                                                            * formData["sales_list"][index]["item_tax"];
                                                            return ( <NumberInput  initialValues={formData["sales_list"][index]["sum_item_tax"]}  source={`sales_list[${index}].sum_item_tax`} label="Wartość VAT"   {...rest} disabled />
                                                            );}  else {
                                                                return( <NumberInput  label="Wartość VAT" source={`sales_list[${index}].sum_item_tax`}  disabled  />
                                                                );}            
                                                        }
                                                    } 
                                            </FormDataConsumer>
                                {/*sumTAX <-tabCELL=>sum_item_tax*/}
                                        </TableCell>  
                                        <TableCell  align="left">  
                                {/*sumBRUTTO ->tabCELL=>sum_item_brutto*/}
                                            <FormDataConsumer  subscription={{ values: true }} >
                                                    {({ formData, ...rest  }) => {        
                                                        if(typeof formData["sales_list"][index]["sum_item_netto"] && formData["sales_list"][index]["sum_item_tax"] !== 'undefined' ) {
                                                            formData["sales_list"][index]["sum_item_brutto"] = 
                                                                                                            (formData["sales_list"][index]["item_netto"] * formData["sales_list"][index]["item_qty"])
                                                                                                            * (formData["sales_list"][index]["item_tax"] + 1);

                                                                            return ( <BoxNumberInput   source={`sales_list[${index}].sum_item_brutto`} label="Wartość brutto" variant="standard"   {...rest} disabled >
                                                                        {formData["sales_list"][index]["sum_item_brutto"] = (formData["sales_list"][index]["item_netto"] * formData["sales_list"][index]["item_qty"]) * (formData["sales_list"][index]["item_tax"] + 1)}
                                                                            </BoxNumberInput>
                                                                            );}  else {
                                                                                return( <BoxNumberInput  mt="-0.75em" ml="0.5em" label="Wartość brutto" source={`sales_list[${index}].sum_item_brutto`}  variant="standard"   mr="0.5em"  />
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
            {/*>>  ->subCONTAINER=> addButton in TableRow--capition */}
                        <capition>
                            <Grid container  formClassName={classes.gridSimpleForm} >
                                <Grid item xs={12}> 
                                    <TableRow>
                                        <Button
                                            type="button"
                                            onClick={
                                                () => fieldProps.fields.push({ id: '', sales_item: '', sum_item_brutto: '', })}
                                                color="secondary"
                                            variant="contained"
                                            style={{ marginTop: '16px', marginLeft: '16px' }}
                                            >
                                            <Add />
                                        </Button>
                                    </TableRow>
                                </Grid>
                            </Grid>
                        </capition>
            {/* X <-subCONTAINER=> addButton in TableRow--capition */}
                    </Table>
        {/* X <-CONTAINER=> SalesTable in Table */}
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