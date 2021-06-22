import React from 'react'
import {
  List,
  Datagrid,
  TextField,
  DateField,
  EditButton,
  DeleteButton,
} from 'react-admin'

import FindInPageIcon from '@material-ui/icons/FindInPage';
export const InvoiceListIcon = FindInPageIcon;

const InvoiceList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField label="NR FV" source='inv_no' />
        <TextField label="NABYWCA" source='buyer.company' />
        <DateField label="DATA WYSTAWIENIA" source='payment_info.issue_date' />
        <DateField label="TERMIN PŁATNOŚCI" source='payment_info.due_date' />
        <TextField label="KWOTA" source='payment_info.balance' />
        <TextField label="WPŁACONO" />
        <TextField label="W DNIU" />
        <TextField label="OPERACJE" />
        <EditButton basePath='/dbinvoices' />
        <DeleteButton basePath='/dbinvoices' />
      </Datagrid>
    </List>
  )
}

export default InvoiceList
