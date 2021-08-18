import * as React from "react"
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles((theme) => ({
//     root: {
//       flexGrow: 1,
//     },
//   
//   }));

const myGridSanitized = ({basePath, ...props}) => {
    // const classes = useStyles();
    return (
        <Grid {...props} />
    );
};

export default myGridSanitized; 