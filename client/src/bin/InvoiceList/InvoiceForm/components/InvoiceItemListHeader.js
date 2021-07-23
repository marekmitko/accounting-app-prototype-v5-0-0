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

const InvoiceItemListHeader = (props) => {
    return (
    <List {...props}>
        <Datagrid>
            <TextField label="l.p" />
            <TextField label="NAZWA" source="company" />
            <TextField label="TYP" source="fullname" />
            <TextField label="ILOŚĆ" source="fullname" />
            <TextField label="CENA NETTO" source="fullname" />
            <TextField label="VAT" source="fullname" />
            <TextField label="WARTOŚĆ NETTO" source="fullname" />
            <TextField label="SUMA VAT" source="fullname" />
            <TextField label="WARTOŚĆ BRUTTO" source="fullname" />
            <EditButton label="EDYTUJ" basePath='/dbclientlist' />
            <DeleteButton label="USUŃ" basePath='/dbclientlist' />
        </Datagrid>
    </List>
  );
}

export default InvoiceItemListHeader;



