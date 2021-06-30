import React from 'react'
import { Create, SimpleForm, TextInput, DateInput } from 'react-admin'

import PostAddIcon from '@material-ui/icons/PostAdd';
import InvoiceForm from './InvoiceForm/InvoiceForm.js';

export const AddInvoiceIcon = PostAddIcon;


const InvoiceCreate = (props) => {
  return ( <React.Fragment>
    <InvoiceForm />
    <Create title='create invoice' {...props}>
      <SimpleForm>
        <TextInput source='title' />
        <TextInput multiline source='body' />
        <DateInput label='Published' source='publishedAt' />
      </SimpleForm>
    </Create>
    </React.Fragment>
  )
}

export default InvoiceCreate
