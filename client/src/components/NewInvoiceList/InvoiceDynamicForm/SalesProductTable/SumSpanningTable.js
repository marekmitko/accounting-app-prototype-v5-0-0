import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { FieldArray } from 'react-final-form-arrays';


import  { TextInput, NumberInput }  from 'react-admin';
import DragHandleIcon from '@material-ui/icons/DragHandle';  

import Add from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';

import SalesTableHeader from './componentsSumSpanningTable/SalesTableHeader';
import SalesProductTable from './componentsSumSpanningTable/SalesProductTable';
import IteratorProductRow from './componentsSumSpanningTable/IteratorProductRow';
import CustomIterator from './componentsSumSpanningTable/CustomIterator';
import InvoiceItemCreate from '../SalesDataForm/InvoiceProductList/InvoiceItem/InvoiceItemCreate';

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

// const StyledTableCell = withStyles((theme) => ({
//     head: {
//       backgroundColor: 'SteelBlue',
//       color: theme.palette.common.white,
//     },
//     body: {
//       fontSize: 14,
//     },
//   }))(TableCell);

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



const SpanningTable = ( record ) => {
    
        
    const classes = useStyles();

    return (
        <FieldArray name="questions">
        {(fieldProps) => {
            return (
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="questions list">

                        <SalesTableHeader/>
            
                        <TableBody>  
                            {fieldProps.fields.map((question, index) => {
                                return (
                                    <TableRow hover tabIndex={-1} key={index}>  
                                    {/* <TableRow hover tabIndex={-1} key={index}>   */}
                                        <TableCell align="center"colSpan={1}  >
                                        {index+1}
                                            {/* <DragHandleIcon />   */}
                                        </TableCell>  
                                        <TableCell colSpan={7} >  
                                        <TextInput variant ="outlined" initialValue="produka" label="Produkt Name" source={`questions[${index}].item_name`} />
                                        </TableCell>  
                                        <TableCell colSpan={3} align="left">  
                                            <TextInput variant ="outlined" helperText="Unique id" label="Question ID" source={`questions[${index}].id`} />
                                        </TableCell>  
                                        <TableCell colSpan={5}  align="left">  
                                            <TextInput variant ="outlined" helperText="i.e. " label="Question Text" source={`questions[${index}].text`} />
                                        </TableCell>  
                                        <TableCell colSpan={2}  align="left">  
                                            <TextInput variant ="outlined" helperText="i.e. " label="Question Text" source={`questions[${index}].text`} />
                                        </TableCell>  
                                        <TableCell colSpan={2} align="left">  
                                            <TextInput variant ="outlined" helperText="i.e. " label="Question Text" source={`questions[${index}].text`} />
                                        </TableCell>  
                                        <TableCell colSpan={2} align="left">  
                                            <TextInput variant ="outlined" helperText="i.e. " label="Question Text" source={`questions[${index}].text`} />
                                        </TableCell>  
                                        <TableCell colSpan={2} align="left">  
                                            <TextInput variant ="outlined" helperText="i.e. " label="Question Text" source={`questions[${index}].text`} />
                                        </TableCell>  
                                        <TableCell colSpan={2} align="left">  
                                            <TextInput variant ="outlined" helperText="i.e. " label="Question Text" source={`questions[${index}].text`} />
                                        </TableCell>  
                                        <TableCell colSpan={1} align="right">  
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
            <TableRow>
                <TableCell rowSpan={3} />
                <TableCell >Subtotal</TableCell>
                <TableCell  align="right">{ccyFormat(invoiceSubtotal)}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>Tax</TableCell>
                <TableCell align="right">{`${(TAX_RATE * 100).toFixed(0)} %`}</TableCell>
                <TableCell align="right">{ccyFormat(invoiceTaxes)}</TableCell>
            </TableRow>
            <TableRow> 
                <TableCell  align="right">Total</TableCell>
                <TableCell  align="right">{ccyFormat(invoiceTotal)}</TableCell>
            </TableRow>
            </Table>
        </TableContainer>
            )

            }
            }
        </FieldArray>
    )
};

 export default SpanningTable;