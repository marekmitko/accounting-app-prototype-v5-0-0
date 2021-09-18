import React from "react";
import { Edit } from "react-admin";
import AddInvCreate from "../InvoiceDynamicForm";

const EditHomePage = props => (
  <Edit {...props}>
   <AddInvCreate/>
  </Edit>
);

export default EditHomePage;
