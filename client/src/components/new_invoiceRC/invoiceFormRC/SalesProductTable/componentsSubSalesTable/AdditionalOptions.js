import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import  {
        TextInput, NumberInput, SelectInput, 
        FormDataConsumer, 
        useFormGroup, useRecordContext, useResourceContext,
        CheckboxGroupInput, RadioButtonGroupInput, BooleanInput, 
}  from 'react-admin';


const useStyles = makeStyles({
    borderNull: {
        border: 0,
    },
    tableBorder: {

        "& tr": {
            paddingTop: 0,
            paddingBottom: 0,
            "& td": {
                border: 0,
                paddingTop: 0,
                paddingBottom: 0,
            },
        },
    },
    helperTextIsNONE: {
        "& p": {
            display: 'none',
        },
    },

});


export default function AdditionalOptions ({props}) {

    const classes = useStyles();

    return (
        <React.Fragment>
                    <TableRow >
                        <TableCell className={ classes.borderNull } colSpan={4} /> 
                    </TableRow >
            <Table size="small" className={ classes.tableBorder } >
            {/*>> ->subCONTAINER=> AddPaymentMethod TableCell__TableRow */}
                    <TableRow className={ classes.helperTextIsNONE }align="left">
                        <TableCell  />                                        
                        <TableCell  /> 
            {/*>> ->subCONTAINER=> AddPaymentMethod TableCell__TableRow */}
                        <TableCell  className={ classes.helperTextIsNONE } >
                            <RadioButtonGroupInput className={ classes.helperTextIsNONE } label="WYBIERZ FORMĘ PŁATNOŚCI:" source="payment_method" choices={[
                                    { id: 'bank_transfer', name: 'PRZELEW' },
                                    { id: 'cash', name: 'GOTÓWKA' },
                                ]} 
                            />
                        </TableCell>
            {/* X <-subCONTAINER=> AddPaymentMethod TableCell__TableRow  */}
                        <TableCell />
                        <TableCell>
                                </TableCell>

            </TableRow>
                    <TableRow align="left">
                        <TableCell  />   
                        <TableCell  /> 
            {/*>> ->subCONTAINER=> AddMethodSendBy  TableCell__TableRow */}
                        <TableCell className={ classes.helperTextIsNONE } >
                            <CheckboxGroupInput label="PRZEŚLIJ FAKTURĘ ZA POŚREDNICTEM:" source="send_invoice_by" choices={[
                                { id: 'post', name: 'poczty' },
                                { id: 'mail', name: 'e-mail' },
                            ]}  />
                        </TableCell>
            {/* X <-subCONTAINER=> AddMethodSendBy  TableCell__TableRow  */}
                        <TableCell  />
                        <TableCell  />
                    </TableRow>
                    <TableRow align="left">
                        <TableCell  />
                        <TableCell  />   
            {/*>> ->subCONTAINER=> AddOptionEHF  TableCell__TableRow */}
                        <TableCell  className={ classes.helperTextIsNONE }  >
                            <BooleanInput label="Faktura EHF" source="invoice_type_EHF"  />
                        </TableCell>
            {/* X <-subCONTAINER=> AddOptionEHF TableCell__TableRow  */}
                        <TableCell  />
                        <TableCell  />
                    </TableRow>
            </Table>
            <TableRow >
                <TableCell colSpan={4} /> 
            </TableRow >
        </React.Fragment>
    );
}