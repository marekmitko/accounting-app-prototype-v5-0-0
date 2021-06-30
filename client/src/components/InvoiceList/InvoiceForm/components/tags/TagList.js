import React, { Fragment } from "react";
import { connect } from "react-redux";
import { push } from "react-router-redux";

import {
  Datagrid,
  List,
  TextField,
  CardActions,
  CreateButton,
} from "react-admin";
import { Route } from "react-router";
import TagCreate from "./TagCreate";

const TagListActions = ({ basePath }) => (
  <CardActions>
    <CreateButton basePath={basePath} />
  </CardActions>
);

class TagList extends React.Component {
  render() {
    const props = this.props;
    return (
      <Fragment>
        <List
          {...props}
          sort={{ field: "name", order: "ASC" }}
          actions={<TagListActions />}
        >
          <Datagrid>
            <TextField source="name" />
            <TextField source="item_desc" />
            <TextField source="item_qty" />
            <TextField source="rate" />
          </Datagrid>
        </List>
        <Route
          path="/dvinvfinalform/create"
          render={() => (
            
              <TagCreate {...props} />
            
          )}
        />
      </Fragment>
    );
  }

//   handleClose = () => {
//     this.props.push("/tags");
//   };
}


// export default TagList;
export default connect(
  undefined,
  { push }
)(TagList);