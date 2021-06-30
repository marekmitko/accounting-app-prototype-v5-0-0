// in tags/TagList.js
import React from 'react';
import { Datagrid, List, TextField } from 'react-admin';

const TagList = ({ classes, ...props }) => (
    <List {...props} sort={{ field: 'name', order: 'ASC' }}>
        <Datagrid>
            <TextField source="name" />
        </Datagrid>
    </List>
);

export default TagList;

// in tags/TagCreate.js
import React from 'react';
import { Create, TextInput, SimpleForm, required } from 'react-admin';

const TagCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" validate={required()} />
        </SimpleForm>
    </Create>
);

export default TagCreate;
