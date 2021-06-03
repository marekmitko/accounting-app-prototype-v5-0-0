import React from 'react'
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  EditButton,
  DeleteButton,
} from 'react-admin'

const ClientList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source='customer.name' />
        <TextField source='customer.company' />
        <EmailField source='customer.email' />
        <EditButton basePath='/clientList' />
        <DeleteButton basePath='/clientList' />
      </Datagrid>
    </List>
  )
}

export default ClientList
