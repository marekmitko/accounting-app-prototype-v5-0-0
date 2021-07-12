import React, { Component, Fragment } from "react";
import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import compose from "recompose/compose";
// import { DragDropContext } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import { withStyles } from "@material-ui/core/styles";
import isEqual from "lodash/isEqual";
import {
  getDefaultValues,
  translate,
  REDUX_FORM_NAME,
  Toolbar
} from "react-admin";

import allDefinitions from "../definitions";
import FormBloc from "./FormBloc";
import BlocSelector from "./BlocSelector";
import BlocDropTarget from "./BlocDropTarget";

const styles = theme => ({
  root: {
    display: "flex"
  },
  form: {
    flexGrow: 1
  },
  blocs: {
    flexBasis: "25%",
    marginLeft: theme.spacing.unit
  }
});

class DynamicFormView extends Component {
  state = {
    definitions: allDefinitions
      .filter(item => {
        Object.keys(this.props.record).includes(item.name);
      })
      .sort((d1, d2) => d1.homePosition > d2.homePosition)
  };

  static getDerivedStateFromProps(props, state) {
    const recordBlocs = Object.keys(props.record);

    if (recordBlocs.length === 0) {
      return null;
    }
    const definitions = allDefinitions
      .filter(item => recordBlocs.includes(item.name))
      .sort((d1, d2) => d1.homePosition > d2.homePosition);

    if (!isEqual(definitions, state.definitions)) {
      return { definitions };
    }

    return null;
  }

  handleAddBloc = (definition, index = 0) => {
    this.setState(({ definitions }) => {
      const sanitizedIndex = index + 1;

      let newDefinitions = [
        ...definitions.slice(0, sanitizedIndex),
        definition,
        ...definitions.slice(sanitizedIndex)
      ].map((definition, index) => ({
        ...definition,
        homePosition: index
      }));

      return { definitions: newDefinitions };
    });
  };

  handleMoveBloc = (definition, index = 0) => {
    this.setState(({ definitions }) => {
      const sanitizedIndex = index;

      const allButMoving = definitions.filter(
        d => d.homePosition !== definition.homePosition
      );

      let newDefinitions = [
        ...allButMoving.slice(0, sanitizedIndex),
        definition,
        ...allButMoving.slice(sanitizedIndex)
      ].map((definition, index) => ({
        ...definition,
        homePosition: index
      }));

      return { definitions: newDefinitions };
    });
  };

  handleSubmitWithRedirect = (redirect = this.props.redirect) =>
    this.props.handleSubmit(values => this.props.save(values, redirect));

  render() {
    const {
      basePath,
      classes,
      invalid,
      pristine,
      record,
      redirect,
      resource,
      saving,
      submitOnEnter,
      toolbar
    } = this.props;
    const { definitions } = this.state;

    return (
      <div className={classes.root}>
        <form className={classes.form}>
          <BlocDropTarget
            homePosition={0}
            onAdd={this.handleAddBloc}
            onMove={this.handleMoveBloc}
          />

          {definitions
            .sort((d1, d2) => d1.homePosition > d2.homePosition)
            .map(definition => (
              <Fragment key={`${definition.name}_${definition.homePosition}`}>
                <FormBloc
                  basePath={basePath}
                  definition={definition}
                  record={record}
                  resource={resource}
                />
                <BlocDropTarget
                  homePosition={definition.homePosition}
                  onAdd={this.handleAddBloc}
                  onMove={this.handleMoveBloc}
                />
              </Fragment>
            ))}
          {toolbar &&
            React.cloneElement(toolbar, {
              basePath,
              handleSubmitWithRedirect: this.handleSubmitWithRedirect,
              handleSubmit: this.props.handleSubmit,
              invalid,
              pristine,
              redirect,
              saving,
              submitOnEnter
            })}
        </form>
        <div className={classes.blocs}>
          <BlocSelector onAdd={this.handleAddBloc} />
        </div>
      </div>
    );
  }
}

DynamicFormView.defaultProps = {
  toolbar: <Toolbar />
};

// const DynamicForm = compose(
//   DragDropContext(HTML5Backend),
//   connect((state, props) => ({
//     form: props.form || REDUX_FORM_NAME,
//     // initialValues: getDefaultValues(state, props),
//     saving: props.saving || state.admin.saving
//   })),
// //   translate, // Must be before reduxForm so that it can be used in validation
// //   reduxForm({
// //     enableReinitialize: true,
// //     keepDirtyOnReinitialize: true
// //   }),
//   withStyles(styles)
// )(DynamicFormView);

// export default DynamicForm;