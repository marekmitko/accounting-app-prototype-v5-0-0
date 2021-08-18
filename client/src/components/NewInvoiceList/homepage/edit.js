import React from "react";
import { Edit } from "react-admin";
import AddInvCreate from "../InvoiceDynamicForm.js";

const EditHomePage = props => (
  <Edit {...props}>
   <AddInvCreate/>
  </Edit>
);

export default EditHomePage;
