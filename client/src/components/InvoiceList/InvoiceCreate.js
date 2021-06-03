import React from 'react'
import { Create, SimpleForm, TextInput, DateInput } from 'react-admin'

const InvoiceCreate = (props) => {
  return (
    <Create title='create invoice' {...props}>
      <SimpleForm>
        <TextInput source='title' />
        <TextInput multiline source='body' />
        <DateInput label='Published' source='publishedAt' />
      </SimpleForm>
    </Create>
  )
}

export default InvoiceCreate
