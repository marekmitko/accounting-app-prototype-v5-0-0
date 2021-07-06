import React from "react";
import { FormSection } from "redux-form";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import { DragSource } from "react-dnd";
import IconDragIndicator from "@material-ui/icons/DragHandle";

import FormInput from "./FormInput";
import getInputComponent from "./getInputComponent";
import { BlocDragType } from "./constants";

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit
  }
});

const FormBloc = ({
  basePath,
  classes,
  connectDragSource,
  definition,
  record,
  resource
}) => (
  <FormSection name={definition.name}>
    <Card className={classes.root}>
      <CardContent>
        {connectDragSource(
          <div>
            <CardHeader
              avatar={<IconDragIndicator />}
              title={definition.name}
            />
          </div>
        )}
        {definition.parameters.map(parameter => (
          <FormInput
            key={parameter.name}
            basePath={basePath}
            input={getInputComponent(parameter, definition)}
            record={record}
            resource={resource}
          />
        ))}
      </CardContent>
    </Card>
  </FormSection>
);

const blocDragSource = {
  beginDrag(props) {
    return props.definition;
  }
};

const collect = (connect, monitor) => ({
  connectDragSource: connect.dragSource()
});

export default DragSource(BlocDragType, blocDragSource, collect)(
  withStyles(styles)(FormBloc)
);
