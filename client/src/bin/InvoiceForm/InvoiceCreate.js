import React from 'react'
import { List, Datagrid, TextField, ReferenceField, DateField, ArrayField, SingleFieldList, ChipField, Link, } from 'react-admin'


// import { Link } from 'react-router-dom';

const CreateRelatedCommentButton = ({ record }) => (
    <Button
        component={Link}
        to={{
            pathname: '/comments/create',
            state: { record: { post_id: record.id } },
        }}
    >
        Write a comment for that post
    </Button>
);



const InvoiceCreateFormEx = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <ReferenceField source="inv_id" reference="invs"><TextField source="id" /></ReferenceField>
            <DateField source="inv_no" />
            <DateField source="payment_info.issue_date" />
            <TextField source="buyer.id" />
            <TextField source="seller.id" />
            <TextField source="supplier.id" />
            <ArrayField source="inv_info.item_list"><SingleFieldList><ChipField source="item_id" /></SingleFieldList></ArrayField>
        </Datagrid>
    </List>
);

export default InvoiceCreateFormEx;