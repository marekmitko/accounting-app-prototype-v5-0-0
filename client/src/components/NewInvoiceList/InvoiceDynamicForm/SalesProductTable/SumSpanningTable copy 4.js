import React from 'react';
import { useEffect } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import { FieldArray, useFieldArray, } from 'react-final-form-arrays';
import Paper from '@material-ui/core/Paper';
import { FinalForm } from 'react-final-form';
import  { TextInput, NumberInput, SelectInput, FormDataConsumer, useFormGroup, useRecordContext, useResourceContext,
    CheckboxGroupInput, RadioButtonGroupInput, BooleanInput, 

}  from 'react-admin';


import Add from '@material-ui/icons/Add';
import Delete from '@material-ui/icons/HighlightOff';
import Button from '@material-ui/core/Button';
import Input  from '@material-ui/core/Input';

import SalesTableHeader from './componentsSumSpanningTable/SalesTableHeader';
import SubTableSumHeader from './componentsSumSpanningTable/SubTableSumHeader';

import BoxNumberInput from '../../../../myComponentsMui/myMuiForm/BoxNumberInput';

import { useForm, useFormState } from 'react-final-form';

import createDecorator from 'final-form-calculate'



const useStyles = makeStyles({
  table: {
    minWidth: 700,
    borderSpacing: 0,
  },
});

function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}

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


const SumSpanningTable = (props) => {

    const dataSalesList = props.fields.value;
    const metdataSalesList = props.fields;


        
    const classes = useStyles();


    return (  
        <FieldArray name="sales_list" decorators={[calculator]} > 

        {(fieldProps) => {
            console.log("met", typeof(metdataSalesList), metdataSalesList );
            
            console.log( "value", typeof(dataSalesList), dataSalesList );
            // console.log( "keys", Object.keys(dataSalesList));
       
        
            return (

                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="sales list table">
                        <SalesTableHeader/>
                    <TableBody>  
                        {( fieldProps  ) => {
                            const dataSource = fieldProps.fields.map((sales_item, index) => {
                            //    rowKey: index

                                
                                return (
                                    <TableRow dataSource={dataSource} rowKey="rowKey" className="IteratorRowProduct" hover tabIndex={-1} key={index}>  
                                        <TableCell align="center"   >
                                            {index+1}
                                        </TableCell>  
                                        <TableCell colSpan={2} >  
                                            <TextInput  label="Nazwa"  variant="outlined" source={`sales_list[${index}].item_name`} />
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
                                )
                            })
                        }
                    }
                        </TableBody>  
                    </Table>
                        <TableContainer>
                            <Grid container  formClassName={classes.gridSimpleForm} >
                                <Grid item xs={12}> 
                                    <TableRow>
                                        <Button
                                            type="button"
                                            onClick={
                                                () => fieldProps.dataSource.push({ id: '', sales_item: '', sum_item_brutto: '', })}
                                                
                                            
                                            color="secondary"
                                            variant="contained"
                                            style={{ marginTop: '16px', marginLeft: '16px' }}
                                        >
                                            <Add />
                                        </Button>
                                    </TableRow>
                                </Grid>
                                <Grid item xs={12} sm={6}> 
                                    <Table size="small" >
                             
                                        <TableRow align="left">
                                            <TableCell  />                                        
                                            <TableCell  /> 
                                            <TableCell >
                                                <RadioButtonGroupInput label="WYBIERZ FORMĘ PŁATNOŚCI:" source="payment_method" choices={[
                                                        { id: 'bank_transfer', name: 'PRZELEW' },
                                                        { id: 'cash', name: 'GOTÓWKA' },
                                                    ]} 
                                                />
                                            </TableCell>
                                            <TableCell/>
                                            <TableCell/>
                                        </TableRow>
                                        <TableRow align="left">
                                             <TableCell  />   
                                        <TableCell  /> 
                                            <TableCell >
                                                <CheckboxGroupInput label="PRZEŚLIJ FAKTURĘ ZA POŚREDNICTEM:" source="send_invoice_by" choices={[
                                                    { id: 'post', name: 'poczty' },
                                                    { id: 'mail', name: 'e-mail' },
                                                ]} 
                                            />
                                            </TableCell>
                                            <TableCell  />
                                            <TableCell  />
                                        </TableRow>
                                        <TableRow align="left">
                                            <TableCell  />
                                            <TableCell  />   
                                            <TableCell >
                                                <BooleanInput label="Faktura EHF" source="invoice_type_EHF" />
                                            </TableCell>
                                            <TableCell  />
                                            <TableCell  />
                                        </TableRow>
                                    </Table>
                                </Grid >
                                <Grid item xs={12} sm={6}> 
                                    <Table  >
                                        <SubTableSumHeader/>
                                        <TableBody>
                                            <TableRow align="right">
                                                <TableCell >Subtotal</TableCell>
                                                <TableCell align="center"></TableCell>
                                                <TableCell  align="center">{ccyFormat(245,544)}</TableCell>
                                       
                                              {/* <TableCell  align="center">{fieldProps.fields.value.reduce((suma, {sum_item_brutto}) => suma + sum_item_brutto, 0)}</TableCell>  */}
                                              {/* <TableCell  align="center">{fieldProps.fields.value}</TableCell>  */}
                                                
                                      
                                                <TableCell  colSpan={2}  />
                                            </TableRow>
                                            <TableRow align="right">
                                                <TableCell >Tax</TableCell>
                                                <TableCell align="center">
                                                {/* <FormDataConsumer  subscription={{ values: true }} >
                                        {({ 
                                            formData, // The whole form data
                                            scopedFormData, // The data for this item of the ArrayInput
                                            getSource, // A function to get the valid source inside an ArrayInput
                                            ...rest
                                    }) => {       
                                        console.log( "formData", typeof(formData), formData );
                                        console.log( "formDataSalesList", typeof(formData.sales_list), formData.sales_list );
                                        console.log( "scopedFormData", typeof(scopedFormData), scopedFormData );
                                            if(typeof formData !== 'undefined' ) {
                                                return ( <NumberInput     disabled />
                                                );}  else {
                                                    return( <NumberInput    disabled  />
                                                    );}            
                                            }
                                        } 
                                        </FormDataConsumer> */}
                                            </TableCell>
                                                <TableCell align="center"></TableCell>
                                                <TableCell align="center">{ccyFormat(25,66)}</TableCell>
                                                <TableCell  colSpan={2}  />
                                            </TableRow>
                                            <TableRow align="right">
                                                <TableCell >Total</TableCell>
                                                <TableCell align="center"></TableCell>
                                                <TableCell align="center"></TableCell>
                                                <TableCell align="center">{ccyFormat(25,55)}</TableCell> 
                                                <TableCell  colSpan={2}  />
                                                {/* { console.log('endtablesum', fieldProps.fields.map((name, index)=> `sales_list[${index}]`... ))} */}
                                                {/* sam string  */}
                                                {/* { console.log('endtablesum', fieldProps.fields.map((name, index)=> name ))} */}
                                                {/* tablica objektów  */}
                                                {/* { console.log('endtablesum', fieldProps.fields.value.map(({sum_item_brutto}) => sum_item_brutto ))} */}
                                                {/* { console.log('endtablesum', fieldProps.fields.value )} */}
                                                {/* { console.log('endtablesum', fieldProps.fields.value.reduce((suma, {sum_item_brutto}) => suma + sum_item_brutto, 0) )} */}
                                                {/* { console.log('2blesum', fieldProps.fields["sales_list"] )} */}

                                                {/* return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0); */}
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </Grid>
                            </Grid >
                        </TableContainer>
        
        </TableContainer>
            )

            }
            }
        </FieldArray>
       
    )
};

 export default SumSpanningTable;