import React from "react";
import { TextInput, SelectInput, CheckboxGroupInput } from "react-admin";

export default (parameter, definition) => {
  switch (parameter.type) {
    case "text":
      return <TextInput source={parameter.name} />;
    case "url":
      return <TextInput source={parameter.name} type="url" />;
    case "select":
      return (
        <SelectInput source={parameter.name} choices={parameter.choices} />
      );
    case "checkboxes":
      return (
        <CheckboxGroupInput
          source={parameter.name}
          choices={parameter.choices}
        />
      );
    default: {
      console.warn(
        `Invalid parameter type "${parameter.type}" for definition "${
          definition.name
        }"`
      );
      return null;
    }
  }
};
