import React from "react";
import { DragSource } from "react-dnd";

import IconAddCircle from "@material-ui/icons/AddCircle";
import IconDragIndicator from "@material-ui/icons/DragHandle";
import IconButton from "@material-ui/core/IconButton";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import { withStyles } from "@material-ui/core/styles";

import { NewBlocDragType } from "./constants";

const styles = {
  handle: {
    cursor: "move",
    display: "flex"
  }
};
const Bloc = ({
  classes,
  definition,
  onAdd,
  connectDragSource,
  isDragging
}) => (
  <ListItem>
    {connectDragSource(
      <div className={classes.handle}>
        <ListItemIcon>
          <IconDragIndicator />
        </ListItemIcon>
        <ListItemText primary={definition.name} />
      </div>
    )}
    <ListItemSecondaryAction>
      <IconButton onClick={() => onAdd(definition)}>
        <IconAddCircle />
      </IconButton>
    </ListItemSecondaryAction>
  </ListItem>
);

const blocDragSource = {
  beginDrag(props) {
    return props.definition;
  }
};

const collect = (connect, monitor) => ({
  connectDragSource: connect.dragSource()
});

export default DragSource(NewBlocDragType, blocDragSource, collect)(
  withStyles(styles)(Bloc)
);
