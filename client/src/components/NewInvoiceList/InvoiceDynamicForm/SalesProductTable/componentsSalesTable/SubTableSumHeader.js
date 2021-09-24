import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Delete from '@material-ui/icons/Delete';



const StyledSubTableSumHeader = withStyles((theme) => ({
    head: {
        backgroundColor: '#0288D1',
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);


const SubTableSumHeader = (props) => {

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
};

export default SubTableSumHeader;