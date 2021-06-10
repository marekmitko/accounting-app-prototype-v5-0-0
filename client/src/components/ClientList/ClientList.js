import React from 'react'
import {
    List,
    Datagrid,
    TextField,
    EmailField,
    EditButton,
    DeleteButton,
} from 'react-admin'

import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
export const ClientListIcon = SupervisorAccountIcon;
// import ClientCreate from './ClientCreate';
// export const ClientCreate = ClientCreate;
// import ClientEdit from './ClientEdit';
// export const ClientEdit = ClientEdit;

const ClientList = (props) => {
  return (
    <List {...props}>
      {/* <Datagrid> */}
      <Datagrid rowClick="edit">
            <TextField disabled source="id" />
            <TextField source="company" />
            <TextField source="fullname" />
            <EmailField source="email" />
            <TextField source="address.street" />
            <TextField source="MVA" />
            <TextField source="telephoneNumber" />
            <EditButton basePath='/client-list' />
            <DeleteButton basePath='/client-list' />
        </Datagrid>
    </List>
  )
}

export default ClientList



