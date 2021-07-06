import * as React from "react";
import {
    TextInput,
    Create,
    SimpleForm,
    NumberInput,
} from 'react-admin';
import { Typography, Box, Toolbar } from '@material-ui/core';




const MyTextInput = props => (
    <div className="special-input">
        <TextInput {...props} />
    </div>
)
const BuyerCreate = (props) => (
    <Create title='Dodaj nowego kontrahenta' resource="buyer" basePath  {...props} >
        <SimpleForm>
            {/* this works */}
            <MyTextInput source="title" />
            <NumberInput source="nb_views" />
            <TextInput label="NAZWA FIRMY" source="company" />
                <TextInput label="IMIĘ I NAZWISKO"source="fullname" />
                <TextInput label="ADRES EMAIL" type="email" source="email" />
                <TextInput label="ADRES"source="address.street" />
                <NumberInput label="MVA" source="MVA" />
                <NumberInput label="NUMER TELEFONU"source="telephoneNumber" />

            
        </SimpleForm>
    </Create>
);

export default BuyerCreate;
