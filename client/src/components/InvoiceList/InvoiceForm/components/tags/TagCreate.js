import React from 'react';
import { Create, TextInput, SimpleForm, required, ArrayInput, } from 'react-admin';


const TagCreate = props => (
    <Create {...props}>
        <SimpleForm>
                <TextInput source="item_name" />
                <TextInput source="item_desc" />
                <TextInput source="item_qty" />
                <TextInput source="rate" />
        </SimpleForm>
    </Create>
);

export default TagCreate;