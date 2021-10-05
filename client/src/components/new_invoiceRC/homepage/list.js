import React from "react";
import { Datagrid, EditButton, List, TextField, DateField, DeleteButton } from "react-admin";

const ListHomePage = props => (
    <List {...props}>
        <Datagrid>
            <TextField label="NR" source="id" />
            <TextField label="NABYWCA" source="buyer" />
            <DateField label="DATA WYSTAWIENIA" source="published_at" />
            <DateField label="TERMIN PŁATNOŚCI"source="dataTwoAdd14" />
            <TextField label="NALEŻNOŚĆ" source="amount_payment" />
            <TextField source="payment" />
            <DateField source="payment_date" />
            <EditButton label="EDYTUJ" basePath='/issuedInvoices_list' />
            <DeleteButton label="USUŃ" basePath='/issuedInvoices_list' />
        </Datagrid>
    </List>
);

export default ListHomePage;
