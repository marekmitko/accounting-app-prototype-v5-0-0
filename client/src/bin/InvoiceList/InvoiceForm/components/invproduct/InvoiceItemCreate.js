import * as React from "react";
import { ArrayInput, SimpleFormIterator, TextInput, TextField, } from 'react-admin';


const InvoiceItemCreate = (props) => {
    return (
         
        <ArrayInput label="DODAJ PRODUKT" source="product_list.item_info">
            <SimpleFormIterator>
                <TextInput label="Nazwa" source="item_name" />
                <TextInput label="Opis" source="item_desc" />
                <TextInput label="Ilość" source="item_qty" />
                <TextInput label="Cena jednostkowa"source="rate" />
            </SimpleFormIterator>
        </ArrayInput>
            
    );
};

export default InvoiceItemCreate
