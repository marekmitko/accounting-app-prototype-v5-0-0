import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import SalesTableHeader from './componentsSumSpanningTable/SalesTableHeader';
import SalesProductTable from './componentsSumSpanningTable/SalesProductTable';
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

const SpanningTable = (props) => {
    
        
    const classes = useStyles();
        
    return (
        <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="spanning table">

            <SalesTableHeader/>
   

            <TableBody>
                <TableRow>
                <SalesProductTable/>
                </TableRow>
                <TableRow>
                <InvoiceItemCreate fullWidth />
                </TableRow>
            {rows.map((row) => (
                <TableRow key={row.desc}>
                <TableCell>{row.desc}</TableCell>
                <TableCell align="right">{row.qty}</TableCell>
                <TableCell align="right">{row.unit}</TableCell>
                <TableCell align="right">{ccyFormat(row.price)}</TableCell>
                </TableRow>
            ))}

            <TableRow>
                <TableCell rowSpan={3} />
                <TableCell colSpan={2}>Subtotal</TableCell>
                <TableCell align="right">{ccyFormat(invoiceSubtotal)}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>Tax</TableCell>
                <TableCell align="right">{`${(TAX_RATE * 100).toFixed(0)} %`}</TableCell>
                <TableCell align="right">{ccyFormat(invoiceTaxes)}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell colSpan={2}>Total</TableCell>
                <TableCell align="right">{ccyFormat(invoiceTotal)}</TableCell>
            </TableRow>
            </TableBody>
        </Table>
        
        </TableContainer>
    );
};

 export default SpanningTable;