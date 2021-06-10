import React from 'react'
import { Edit, SimpleForm, TextInput, NumberInput } from 'react-admin'

const ClientEdit = (props) => {
  return (
    <Edit title='edit client' {...props}>
      <SimpleForm>
        <TextInput disabled source='id' />
        <TextInput source="company" />
        <TextInput  source="fullname" />
        <TextInput source="email" />
        <TextInput source="address.street" />
        <NumberInput source="MVA" />
        <NumberInput source="telephoneNumber" />
      </SimpleForm>
    </Edit>
  )
}

export default ClientEdit
