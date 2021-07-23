
import React from 'react'
import { List, EditableDatagrid } from 'react-admin'

const columns = [
    { key: 'id', name: 'ID', resizable: true, locked: true, sortable: true },
    {
        key: 'name',
        name: 'Name',
        editable: true,
        resizable: true,
        sortable: true,
    },
];
const UserList = props => (
   <List {...props}>
       <EditableDatagrid columns={columns} pageSize={5} />
   </List>
);

export default UserList