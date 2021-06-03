import React from 'react'
import { Edit, SimpleForm, TextInput } from 'react-admin'

const ClientEdit = (props) => {
  return (
    <Edit title='edit client' {...props}>
      <SimpleForm>
        <TextInput disabled source='id' />
        <TextInput source='name' />
        <TextInput source='email' />
      </SimpleForm>
    </Edit>
  )
}

export default ClientEdit
