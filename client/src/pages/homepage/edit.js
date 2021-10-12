import React from "react";
import { Edit } from "react-admin";
import InvoiceForm from "../../components/new_invoiceRC/InvoiceForm";

const EditHomePage = props => (
  <Edit {...props}>
   <InvoiceForm/>
  </Edit>
);

export default EditHomePage;
