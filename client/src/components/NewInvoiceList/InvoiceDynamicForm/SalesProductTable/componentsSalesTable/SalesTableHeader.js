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




const StyledTableSubHeader = withStyles((theme) => ({
    head: {
        backgroundColor: 'SteelBlue',
        color: theme.palette.common.white,
        paddingTop: 14,
        paddingLeft: 2,
        paddingBottom: 14,
        paddingRight: 2,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);


const SalesTableHeader = (props) => {

    return(
        <TableHead>
            <TableRow >
                <StyledTableSubHeader align="center" style={{ padding: 10 }} >L.P.</StyledTableSubHeader>
                <StyledTableSubHeader colSpan={2} align="center">NAZWA</StyledTableSubHeader>
                <StyledTableSubHeader   align="center">TYP</StyledTableSubHeader>
                <StyledTableSubHeader   align="center">ILOŚĆ</StyledTableSubHeader>
                <StyledTableSubHeader  align="center">NETTO</StyledTableSubHeader>
                <StyledTableSubHeader   align="center">VAT</StyledTableSubHeader>
                <StyledTableSubHeader  align="center">WARTOŚĆ NETTO</StyledTableSubHeader>
                <StyledTableSubHeader  align="center">WARTOŚĆ VAT</StyledTableSubHeader>
                <StyledTableSubHeader  align="center">WARTOŚĆ BRUTTO</StyledTableSubHeader>
                <StyledTableSubHeader  colSpan={2} align="center"><Delete /></StyledTableSubHeader>
            </TableRow>
        </TableHead>
    );
};

export default SalesTableHeader;