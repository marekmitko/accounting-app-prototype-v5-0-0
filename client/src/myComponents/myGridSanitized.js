import * as React from "react"
import { Grid } from '@material-ui/core';

const myGridSanitized = ({basePath, ...props}) => {
    return (
        <Grid {...props} />
    );
};

export default myGridSanitized; 