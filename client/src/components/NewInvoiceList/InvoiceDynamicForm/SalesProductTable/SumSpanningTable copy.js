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
import Input  from '@material-ui/core/Input';

import SalesTableHeader from './componentsSumSpanningTable/SalesTableHeader';

import ItemFormIteratorPartGetSum from './ItemFormIteratorRow/ItemFormIteratorPartGetSum'
import { useForm, useFormState } from 'react-final-form';

// const IteratorRowProduct = withStyles((theme) => ({


  
//     MuiFormHelperText: {
//         backgroundColor: 'SteelBlue',
//         '& MuiFormHelperText': {
//             display: 'none',
//             '& root': {
//               color: 'blue',
//             },
//           },
//     },

// }))(TableRow);



const useStyles

= makeStyles({
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



const ariaLabel = { 'aria-label': 'description' };

const TAX_RATE = 0.07;

const invoiceSubtotal = subtotal(rows);
const invoiceTaxes = TAX_RATE * invoiceSubtotal;
const invoiceTotal = invoiceTaxes + invoiceSubtotal;

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
    { id: '25%', name: '25 %', value: 0.25 },
    { id: '15%', name: '15 %', value: 0.15 },
    { id: '12%', name: '12 %', value: 0.12 },
    { id: '6%', name: '6 %', value: 0.06 },
    { id: '0%', name: '0 %', value: 0 },
];


const SumSpanningTable = (props) => {
    
    const formGroupState = useFormGroup();
        
    const classes = useStyles();

    const record = useRecordContext();
    const resource = useResourceContext();
    // const refArrayInput = useReferenceArrayInputController();


    return (
      
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
                
                    <Table className={classes.table} aria-label="sales_List">
                    {/* <Table className={classes.table} aria-label="questions list"> */}
                        <SalesTableHeader/>
            
                        {/* <TableBody>  
                      
                        <AddedRowIterator />
                        </TableBody>   */}
                        <TableBody  >  

               
                            {fieldProps.fields.map((question, index) => {
                                // console.log(question);
                                // console.log(fieldProps.fields);
                                  
                                return (
                                    
                                    <TableRow className="IteratorRowProduct" hover tabIndex={-1} key={index}>  
                                           {/* <TableCell>              
                                        <NumberInput  label="Question ID" source={`questions[${index}].id`} />
                                        </TableCell>   */}
                                        <TableCell align="center"   >
                                        {index+1}
                                            {/* <DragHandleIcon />   */}
                                        </TableCell>  
                                        <TableCell colSpan={2} >  
                                        <TextInput  label="Nazwa"  variant="outlined" source={`questions[${index}].item_name`} fullWidth />
                                        </TableCell>  
                                        <TableCell align="left">  
                                            <SelectInput  label="Wybierz Typ" variant ="outlined" source={`questions[${index}].item_type`} choices={item_type}/>
                                        </TableCell>  
                                        <TableCell   align="left">  
                                            <NumberInput    label="Ilość" variant ="outlined" source={`questions[${index}].item_qty`} />
                                        </TableCell>  
                                        <TableCell  align="left" children={
                                                <NumberInput  label="Kwota netto" variant ="outlined"  source={`questions[${index}].item_netto`} />} />  
                                            {/* <NumberInput  label="Kwota netto" variant ="outlined"  source={`questions[${index}].item_netto`} />
                                        </TableCell>   */}
                                        <TableCell   align="left">  
                                            <SelectInput   label="Stawka VAT" variant ="outlined" source={`questions[${index}].item_tax`} choices={item_tax}/>
                                        </TableCell>  
  
                                        <FormDataConsumer  subscription={{ values: true }} >
                                        {/* <myFormDataConsumeSanitized {...rest} source={question} subscription={{ values: true }}> */}
                    {({
                        formData, // The whole form data
                        scopedFormData, // The data for this item of the ArrayInput
                        getSource, // A function to get the valid source inside an ArrayInput
                        ...rest
                    }) => {         
                        if(formData["questions"][index]["item_netto"] !== 'undefined' ) {
                            formData["questions"][index]["sum_item_netto"] = formData["questions"][index]["item_netto"] * formData["questions"][index]["item_qty"];
                            return ( 
                                <TableCell   align="left">  
                                    <NumberInput  initialValues={formData["questions"][index]["sum_item_netto"]}  source={`questions[${index}].sum_item_netto`} label="Wartość Netto"   {...rest} disabled />
                                </TableCell>  
                            ); 
                        }   else {
                            return(
                                <TableCell  align="left">
                                        <NumberInput  label="Wartość Netto" source={`questions[${index}].sum_item_netto`}  disabled  />
                                    </TableCell>
                                );
                            }            
                        }} 

                 </FormDataConsumer>
                        
                        {/* <TableRow>
                        <ItemFormIteratorPartGetSum index={index} fieldProps={fieldProps} {...props} />
                        </TableRow> */}
                                      
                                     
                                        <TableCell  align="left">  
                                            <TextInput   variant ="outlined"  label="Wartość VAT" source={`questions[${index}].sumTax`} disabled/>
                                        </TableCell>  
                                        <TableCell  align="left">  
                                            <NumberInput   variant ="outlined"  defaultValue={question.qty}  label="Wartość Brutto" source={`questions[${index}].sumBrutto`} disabled />
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
       
    )
};

 export default SumSpanningTable;