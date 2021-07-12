import React from "react";
import { Datagrid, EditButton, List, TextField } from "react-admin";

const ListHomePage = props => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <EditButton />
    </Datagrid>
  </List>
);

export default ListHomePage;
