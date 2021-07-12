import React from "react";
import { Edit } from "react-admin";
import InvoiceDynamicForm from "../InvoiceDynamicForm/InvoiceDynamicForm.js";

const EditHomePage = props => (
  <Edit {...props}>
    <InvoiceDynamicForm />
  </Edit>
);

export default EditHomePage;
