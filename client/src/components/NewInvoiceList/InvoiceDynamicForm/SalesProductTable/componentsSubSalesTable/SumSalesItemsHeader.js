import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';




const StyledSubTableSumHeader = withStyles((theme) => ({
    head: {
        backgroundColor: '#0288D1',
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

export default function SumSalesItemsHeader ({ props }) {

    return(
        <TableHead >
            <TableRow align="right">
                <TableCell  align="center"></TableCell>
                <StyledSubTableSumHeader align="center">SUMA NETTO</StyledSubTableSumHeader>
                <StyledSubTableSumHeader  align="center">SUMA VAT</StyledSubTableSumHeader>
                <StyledSubTableSumHeader  align="center">SUMA BRUTTO</StyledSubTableSumHeader>
                <TableCell  colSpan={2}  />
            </TableRow>
        </TableHead>
    );
}