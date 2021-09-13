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
                {/* <TableRow >
                    <TableCell colSpan={20} />
                    <StyledTableHeader align="center" colSpan={6}>
                    WARTOŚĆ SUMARYCZNA
                    </StyledTableHeader>
                    <TableCell colSpan={1} align="right"/>
                </TableRow> */}
            <TableRow >
                <StyledTableSubHeader >L.P.</StyledTableSubHeader>
                <StyledTableSubHeader colSpan={5} align="center">NAZWA</StyledTableSubHeader>
                <StyledTableSubHeader  align="center">TYP</StyledTableSubHeader>
                <StyledTableSubHeader colSpan={2} align="center">NETTO</StyledTableSubHeader>
                <StyledTableSubHeader  align="center">VAT</StyledTableSubHeader>
                <StyledTableSubHeader  align="center">ILOŚĆ</StyledTableSubHeader>
                <StyledTableSubHeader colSpan={2} align="right">WARTOŚĆ NETTO</StyledTableSubHeader>
                <StyledTableSubHeader colSpan={2} align="center">WARTOŚĆ VAT</StyledTableSubHeader>
                <StyledTableSubHeader colSpan={2} align="left">WARTOŚĆ BRUTTO</StyledTableSubHeader>
                <StyledTableSubHeader  align="center">X</StyledTableSubHeader>
            </TableRow>
        </TableHead>
    );
};

export default SalesTableHeader;