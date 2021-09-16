import React from 'react';
import { useEffect } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { FieldArray } from 'react-final-form-arrays';

import arrayMutators from 'final-form-arrays';

import  { TextInput, NumberInput, SelectInput,
     FormDataConsumer, FunctionField, ArrayInput,
      SimpleFormIterator, TextField, NumberField,
      FormGroupContextProvider, useFormGroup, useReferenceArrayInputController,
    useRecordContext, useResourceContext,
     }  from 'react-admin';
import DragHandleIcon from '@material-ui/icons/DragHandle';  

import Add from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';

import SalesTableHeader from './componentsSumSpanningTable/SalesTableHeader';
import SalesProductTable from './componentsSumSpanningTable/SalesProductTable';
import IteratorProductRow from './componentsSumSpanningTable/IteratorProductRow';
import CustomIterator from './componentsSumSpanningTable/CustomIterator';
import InvoiceItemCreate from '../SalesDataForm/InvoiceProductList/InvoiceItem/InvoiceItemCreate';

import AddedRowIterator from "./AddedRowIterator"

import myFormDataConsumeSanitized from '../../../../myComponents/myFormDataConsumeSanitized';

import { useForm, useFormState } from 'react-final-form';

const useStyles = makeStyles({
  table: {
    minWidth: 700,
    borderSpacing: 0,

  },
});


function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}

function priceRow(qty, unit) {
  return qty * unit;
}

function createRow(desc, qty, unit) {
  const price = priceRow(qty, unit);
  return { desc, qty, unit, price };
}

function subtotal(items) {
  return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}

const rows = [
  createRow('Paperclips (Box)', 100, 1.15),
  createRow('Paper (Case)', 10, 45.99),
  createRow('Waste Basket', 2, 17.99),
];
const TAX_RATE = 0.07;

const invoiceSubtotal = subtotal(rows);
const invoiceTaxes = TAX_RATE * invoiceSubtotal;
const invoiceTotal = invoiceTaxes + invoiceSubtotal;

const type = [
    { id: 'usługi', name: 'Usugi' },
    { id: 'towar', name: 'Towary' },
    { id: 'najem', name: 'Najem' },
    { id: 'Prowizja', name: 'Prowizja' },
    { id: 'MVA', name: 'MVA' },
    { id: 'Sprzedaż 0% MVA', name: '0% MVA' },
    { id: 'Sprzedaż zwolniona MVA', name: 'Zwolniony' },
];
const TAX = [
    { id: '25%', name: '25 %', value: 0.25 },
    { id: '15%', name: '15 %', value: 0.15 },
    { id: '12%', name: '12 %', value: 0.12 },
    { id: '6%', name: '6 %', value: 0.06 },
    { id: '0%', name: '0 %', value: 0 },
];


const SumSpanningTable = () => {
    
    const formGroupState = useFormGroup();
        
    const classes = useStyles();

    const record = useRecordContext();
    const resource = useResourceContext();
    // const refArrayInput = useReferenceArrayInputController();

    const arrayQuestion = formGroupState.questions;

    return (
        <FormGroupContextProvider name="questions">
         <FieldArray name="questions"> 
        {(fieldProps) => {
            // console.log("resourceContext", resource);
            // console.log("recordContext", record);
            // console.log("refArrayInputContext", refArrayInput);
            // console.log(fieldProps);
            // console.log("dupdfsda", formGroupState);
            // console.log("dupa", arrayQuestion);
            return (
                <TableContainer component={Paper}>
                
                    <Table className={classes.table} aria-label="questions list">
                        <SalesTableHeader/>
            
                        {/* <TableBody>  
                      
                        <AddedRowIterator />
                        </TableBody>   */}
                        <TableBody>  

               
                            {fieldProps.fields.map((question, index) => {
                                // console.log(question);
                                // console.log(fieldProps.fields);
                                  
                                return (
                                    
                                    <TableRow  hover tabIndex={-1} key={index}>  
                                           <TableCell>              
                                        <NumberInput  label="Question ID" source={`questions[${index}].id`} />
                                        </TableCell>  
                                        <TableCell align="center"   >
                                        {index+1}
                                            {/* <DragHandleIcon />   */}
                                        </TableCell>  
                                        <TableCell colSpan={5} >  
                                        <TextInput  variant ="outlined" label="Nazwa" source={`questions[${index}].item_name`} fullWidth />
                                        </TableCell>  
                                        <TableCell  align="left">  
                                            <SelectInput  label="Wybierz Typ" variant ="outlined" source={`questions[${index}].type`} choices={type}/>
                                        </TableCell>  
                                        <TableCell colSpan={2}  align="left">  
                                            <NumberInput variant ="outlined"  defaultValue={610} label="Kwota netto" source={`questions[${index}].netto`} />
                                        </TableCell>  
                                        <TableCell  align="left">  
                                            <SelectInput variant ="outlined"   label="VAT" source={`questions[${index}].tax`} choices={TAX}/>
                                        </TableCell>  
                                        <TableCell   align="left">  
                                            <NumberInput variant ="outlined"  defaultValue={5} label="Podaj ilość" source={`questions[${index}].my_first_input`} />
                                        </TableCell>  
                                        <TableRow colSpan={2} align="left">  
                                        <FormDataConsumer  subscription={{ values: true }}>
                                        {/* <myFormDataConsumeSanitized {...rest} source={question} subscription={{ values: true }}> */}
                    {({
                        formData, // The whole form data
                        scopedFormData, // The data for this item of the ArrayInput
                        getSource, // A function to get the valid source inside an ArrayInput
                        ...rest
                    }) => {
                        console.log("valueFormData", formData);
                        console.log("valueformquestion", formData["questions"]);
                        console.log("valueformquestionTab", formData["questions"][index]);
                        console.log("valueformquestionTabValue", formData["questions"][index]["item_qty"]);
                        console.log(typeof formData["questions"][index]["item_qty"]);
                        console.log("iterdupa", scopedFormData);
                        
                        if(formData) {
                            return ( <TableCell   align="left">  
                                        <NumberInput variant ="outlined" label="Wartość Netto" source={`questions[${index}].item_qty`} />
                                        <NumberInput variant ="outlined"  label="vataa"    source={`questions[${index}].item_vat`} />
                                        <NumberInput variant ="outlined"   label="Wartość Netto"    source={`questions[${index}].totalw`} />
                                        
            
                                      </TableCell>  ); 
                        }  if (formData["questions"][index]["item_vat"]) {
                            const Price = formData["questions"][index]["item_vat"] * formData["questions"][index]["item_qty"];
                                                return (
                                                    <TableCell   align="left"> 
                            <NumberInput variant ="outlined" defaultValue={Price} label="Total" source={`questions[${index}].total`} />
                            </TableCell>
                                                );} else {
                        return(
                            <TableCell>
                            <NumberInput disabled label="Total" source={`questions[${index}].total`}  />
                            </TableCell>
                        );
                        }            
                    }} 

            </FormDataConsumer>
      
                                        </TableRow>  
                                     
                                        <TableCell colSpan={2} align="left">  
                                            <TextInput   variant ="outlined"  label="Wartość VAT" source={`questions[${index}].sumTax`} disabled/>
                                        </TableCell>  
                                        <TableCell colSpan={2} align="left">  
                               
                                        </TableCell>  
                                        <TableCell colSpan={2} align="left">  
                                            <NumberInput   variant ="outlined"  defaultValue={question.qty}  label="Wartość Brutto" source={`questions[${index}].sumBrutto`} disabled />
                                        </TableCell>  
                                        <TableCell colSpan={2} align="left">  

                                                   
                                </TableCell>  
                                        <TableCell  align="right">  
                                            <Button style={{ color: 'red' }} type="button" onClick={() => fieldProps.fields.remove(index)}>
                                                X
                                            </Button>
                                        </TableCell>  
                                    </TableRow>  
                                    
                                )
                            })}


                        </TableBody>  

                        {/* <TableBody>
                    <IteratorProductRow/>
                    <  CustomIterator/>
                         {rows.map((row) => (
                            <TableRow key={row.desc}>
                            <TableCell>{row.desc}</TableCell>
                            <TableCell align="right">{row.qty}</TableCell>
                            <TableCell align="right">{row.unit}</TableCell>
                            <TableCell align="right">{ccyFormat(row.price)}</TableCell>
                            </TableRow>
                        ))} 

                        </TableBody> */}
                    </Table>
                    <Button
                        type="button"
                        onClick={() => fieldProps.fields.push({ id: '', question: '' })}
                        color="secondary"
                        variant="contained"
                        style={{ marginTop: '16px' }}
                    >
                        <Add />
                    </Button>
                   <Table>
                    <TableRow align="right">
                            <TableCell colSpan={5} rowSpan={3} />
                            <TableCell colSpan={2} >Subtotal</TableCell>
                            <TableCell align="right">{ccyFormat(invoiceSubtotal)}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell  >Tax</TableCell>
                            <TableCell align="right">{`${(TAX_RATE * 100).toFixed(0)} %`}</TableCell>
                            <TableCell align="right">{ccyFormat(invoiceTaxes)}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell colSpan={2}>Total</TableCell>
                            <TableCell align="right">{ccyFormat(invoiceTotal)}</TableCell>
                        </TableRow>
                    </Table>
        </TableContainer>
            )

            }
            }
        </FieldArray>
         </FormGroupContextProvider>
   
    )
};

 export default SumSpanningTable;