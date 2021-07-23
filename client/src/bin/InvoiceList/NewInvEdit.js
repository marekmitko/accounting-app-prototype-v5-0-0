import React from 'react'
import { Edit, SimpleForm, TextInput, DateInput } from 'react-admin'

const VisitorEdit = props => (
    <Edit {...props}>
        <VisitorForm />
    </Edit>
);
export default VisitorEdit
