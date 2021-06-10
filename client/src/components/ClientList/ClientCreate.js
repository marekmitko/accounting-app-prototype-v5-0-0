import React from 'react'
import { Create, SimpleForm, TextInput, NumberInput } from 'react-admin'

const ClientCreate = (props) => {
  return (
    <Create title='Dodaj nowego kontrahenta' {...props}>
        <SimpleForm>
                {/* <TextInput disabled source='id' /> */}
                <TextInput label="NAZWA FIRMY" source="company" />
                <TextInput label="IMIĘ I NAZWISKO"source="fullname" />
                <TextInput label="ADRES EMAIL" type="email" source="email" />
                <TextInput label="ADRES"source="address.street" />
                <NumberInput label="MVA" source="MVA" />
                <NumberInput label="NUMER TELEFONU"source="telephoneNumber" />
        </SimpleForm>
    </Create>
    )
}

export default ClientCreate
