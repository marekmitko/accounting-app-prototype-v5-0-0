import React from "react";
import { Edit } from "react-admin";
import DynamicForm from "../dynamicForm";

const EditHomePage = props => (
  <Edit {...props}>
    <DynamicForm />
  </Edit>
);

export default EditHomePage;
