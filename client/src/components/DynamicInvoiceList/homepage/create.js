import React from "react";
import { Create } from "react-admin";
import DynamicForm from "../dynamicForm";

const CreateHomePage = props => (
  <Create {...props}>
    <DynamicForm />
  </Create>
);

export default CreateHomePage;
