import React from 'react'
import { Create, SimpleForm, TextInput } from 'react-admin'

const ClientCreate = (props) => {
  return (
    <Create title='create client' {...props}>
      <SimpleForm>
        <TextInput source='customer.name' />
        <TextInput source='email' />
      </SimpleForm>
    </Create>
  )
}

export default ClientCreate
