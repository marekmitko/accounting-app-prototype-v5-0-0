import React from 'react';
import {
    List,
    Datagrid,
    TextField,
    EmailField,
    EditButton,
    DeleteButton,
} from 'react-admin';

import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
export const ClientListIcon = SupervisorAccountIcon;
// import ClientCreate from './ClientCreate';
// export const ClientCreate = ClientCreate;
// import ClientEdit from './ClientEdit';
// export const ClientEdit = ClientEdit;

const ClientList = (props) => {
    return (
    <List {...props}>
        <Datagrid>
            <TextField label="NAZWA FIRMY" source="company" />
            <TextField label="PRZEDSTAWICIEL" source="fullname" />
            <EmailField label="EMAIL" source="email" />
            <TextField label="ADRES" source="address.street" />
            <TextField label="MVA" source="MVA" />
            <TextField label="TELEFON" source="telephoneNumber" />
            <EditButton label="EDYTUJ" basePath='/dbclientlist' />
            <DeleteButton label="USUŃ" basePath='/dbclientlist' />
        </Datagrid>
    </List>
  );
}

export default ClientList;



