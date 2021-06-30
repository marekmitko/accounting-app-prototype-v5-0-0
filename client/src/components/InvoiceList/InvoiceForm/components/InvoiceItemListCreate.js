import * as React from "react";
import { ArrayInput, SimpleFormIterator, TextInput, TextField } from 'react-admin';


const InvoiceItemCreate = (props) => {
    return (
        <ArrayInput source="inv_info.item_list">
            <SimpleFormIterator>
            <TextField source="id" />
                <TextInput source="item_name" />
                <TextInput source="item_desc" />
                <TextInput source="item_qty" />
                <TextInput source="rate" />
     
            </SimpleFormIterator>
        </ArrayInput>
    );
};

export default InvoiceItemCreate
