import React from "react";
import List from "@material-ui/core/List";

import allDefinitions from "../definitions";
import Bloc from "./Bloc";

const BlocSelector = ({ onAdd }) => (
  <List>
    {allDefinitions.map(definition => (
      <Bloc
        key={definition.name}
        definition={definition}
        onAdd={() => onAdd(definition)}
      />
    ))}
  </List>
);

export default BlocSelector;
