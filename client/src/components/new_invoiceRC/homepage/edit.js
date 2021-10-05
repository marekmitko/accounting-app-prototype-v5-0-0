import React from "react";
import { Edit } from "react-admin";
import InvoiceForm from "../InvoiceForm";

const EditHomePage = props => (
  <Edit {...props}>
   <InvoiceForm/>
  </Edit>
);

export default EditHomePage;
