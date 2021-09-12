import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const StyledTableHeader = withStyles((theme) => ({
    head: {
        backgroundColor: 'SteelBlue',
        color: theme.palette.common.white,
        borderBottom: "0",
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableSubHeader = withStyles((theme) => ({
    head: {
        backgroundColor: 'SteelBlue',
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);


const SalesTableHeader = (props) => {

    return(
        <TableHead>
            <TableRow >
                <TableCell colSpan={20} />
                <StyledTableHeader align="center" colSpan={6}>
                WARTOŚĆ SUMARYCZNA
                </StyledTableHeader>
                <TableCell colSpan={1} align="right"/>
            </TableRow>
            <TableRow >
                <StyledTableSubHeader colSpan={1}>L.P.</StyledTableSubHeader>
                <StyledTableSubHeader colSpan={7} align="center">NAZWA</StyledTableSubHeader>
                <StyledTableSubHeader colSpan={3} align="right">TYP</StyledTableSubHeader>
                <StyledTableSubHeader colSpan={5} align="right">ILOŚĆ</StyledTableSubHeader>
                <StyledTableSubHeader colSpan={2} align="right">NETTO</StyledTableSubHeader>
                <StyledTableSubHeader colSpan={2} align="right">VAT</StyledTableSubHeader>
                <StyledTableSubHeader colSpan={2} align="right">NETTO</StyledTableSubHeader>
                <StyledTableSubHeader colSpan={2} align="center">VAT</StyledTableSubHeader>
                <StyledTableSubHeader colSpan={2} align="left">BRUTTO</StyledTableSubHeader>
                <StyledTableSubHeader colSpan={1} align="center">X</StyledTableSubHeader>
            </TableRow>
        </TableHead>
    );
};

export default SalesTableHeader;