import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { DropTarget } from "react-dnd";
import { withStyles } from "@material-ui/core/styles";

import { BlocDragType, NewBlocDragType } from "./constants";
const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit
  }
});

const BlocDropTarget = ({
  canDrop,
  classes,
  connectDropTarget,
  isOver,
  item
}) =>
  item && canDrop
    ? connectDropTarget(
        <div className={classes.root}>
          <Card raised={isOver}>
            <CardContent>
              <Typography>Drop here</Typography>
            </CardContent>
          </Card>
        </div>
      )
    : null;

const dropTarget = {
  drop({ homePosition, onAdd, onMove }, monitor) {
    const item = monitor.getItem();
    const type = monitor.getItemType();
    if (type === NewBlocDragType) {
      onAdd(item, homePosition);
    }
    if (type === BlocDragType) {
      onMove(item, homePosition);
    }
  },
  canDrop({ homePosition }, monitor) {
    const item = monitor.getItem();

    return item.homePosition !== homePosition;
  }
};

const collect = (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
  item: monitor.getItem(),
  canDrop: monitor.canDrop()
});

export default DropTarget([BlocDragType, NewBlocDragType], dropTarget, collect)(
  withStyles(styles)(BlocDropTarget)
);
