import * as React from "react"
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles((theme) => ({
//     root: {
//       flexGrow: 1,
//     },
//     paper: {
//       padding: theme.spacing(2),
//       textAlign: 'center',
//       color: theme.palette.text.secondary,
//     },
//   }));

const myGridSanitized = ({basePath, ...props}) => {
    // const classes = useStyles();
    return (
        <Grid {...props} />
    );
};

export default myGridSanitized; 