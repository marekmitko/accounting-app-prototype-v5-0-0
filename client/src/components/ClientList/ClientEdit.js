import React from 'react'
import { Edit, SimpleForm, TextInput, NumberInput } from 'react-admin'

const ClientEdit = (props) => {
    return (
    <Edit title='edit client' {...props}>
        <SimpleForm>
            {/* <TextInput disabled source='id' /> */}
            <TextInput label="NAZWA FIRMY" source="company" />
            <TextInput label="IMIĘ I NAZWISKO"source="fullname" />
            <TextInput label="ADRES EMAIL" type="email" source="email" />
            <TextInput label="ADRES"source="address.street" />
            <NumberInput label="MVA" source="MVA" />
            <NumberInput label="NUMER TELEFONU"source="telephoneNumber" />
        </SimpleForm>
    </Edit>
    )
}

export default ClientEdit
