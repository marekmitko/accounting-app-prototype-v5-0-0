import React from "react";
import { Create } from "react-admin";
import InvoiceDynamicForm from "../InvoiceDynamicForm/InvoiceDynamicForm.js";


const CreateHomePage = props => (
  <Create {...props}>
    <InvoiceDynamicForm />
  </Create>
);

export default CreateHomePage;
