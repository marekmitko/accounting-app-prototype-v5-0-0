import React from 'react'
import {
  List,
  Datagrid,
  TextField,
  DateField,
  EditButton,
  DeleteButton,
} from 'react-admin'

const InvoicesList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source='inv_no' />
        <TextField source='customer.name' />
        <DateField source='payment_info.issue_date' />
        <EditButton basePath='/invoicesList' />
        <DeleteButton basePath='/invoicesList' />
      </Datagrid>
    </List>
  )
}

export default InvoicesList
