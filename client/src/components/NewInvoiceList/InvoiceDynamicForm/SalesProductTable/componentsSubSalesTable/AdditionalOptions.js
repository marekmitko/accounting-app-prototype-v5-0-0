import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import { FieldArray } from 'react-final-form-arrays';
import { FinalForm } from 'react-final-form';
import  {
        TextInput, NumberInput, SelectInput, 
        FormDataConsumer, 
        useFormGroup, useRecordContext, useResourceContext,
        CheckboxGroupInput, RadioButtonGroupInput, BooleanInput, 
}  from 'react-admin';

export default function AdditionalOptions ({props}) {
    return (
        <Table size="small" >
        {/*>> ->subCONTAINER=> AddPaymentMethod TableCell__TableRow */}
                <TableRow align="left">
                    <TableCell  />                                        
                    <TableCell  /> 
        {/*>> ->subCONTAINER=> AddPaymentMethod TableCell__TableRow */}
                    <TableCell >
                        <RadioButtonGroupInput label="WYBIERZ FORMĘ PŁATNOŚCI:" source="payment_method" choices={[
                                { id: 'bank_transfer', name: 'PRZELEW' },
                                { id: 'cash', name: 'GOTÓWKA' },
                            ]} 
                        />
                    </TableCell>
        {/* X <-subCONTAINER=> AddPaymentMethod TableCell__TableRow  */}
                    <TableCell />
                    <TableCell>
                            </TableCell>
                        { ({ fieldProps }) => { 
                            console.log("propFieldsValue", typeof(fieldProps.fields.value ), fieldProps.fields.value )
                            console.log("propFields", typeof(fieldProps.fields ), fieldProps.fields["sales_list"] )
                        
                                }      
                        }
        </TableRow>
                <TableRow align="left">
                    <TableCell  />   
                    <TableCell  /> 
        {/*>> ->subCONTAINER=> AddMethodSendBy  TableCell__TableRow */}
                    <TableCell >
                        <CheckboxGroupInput label="PRZEŚLIJ FAKTURĘ ZA POŚREDNICTEM:" source="send_invoice_by" choices={[
                            { id: 'post', name: 'poczty' },
                            { id: 'mail', name: 'e-mail' },
                        ]} 
                        />
                    </TableCell>
        {/* X <-subCONTAINER=> AddMethodSendBy  TableCell__TableRow  */}
                    <TableCell  />
                    <TableCell  />
                </TableRow>
                <TableRow align="left">
                    <TableCell  />
                    <TableCell  />   
        {/*>> ->subCONTAINER=> AddOptionEHF  TableCell__TableRow */}
                    <TableCell >
                        <BooleanInput label="Faktura EHF" source="invoice_type_EHF" />
                    </TableCell>
        {/* X <-subCONTAINER=> AddOptionEHF TableCell__TableRow  */}
                    <TableCell  />
                    <TableCell  />
                </TableRow>
        </Table>
    );
}