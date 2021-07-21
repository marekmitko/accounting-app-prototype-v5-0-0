import * as React from "react";
import { makeStyles } from '@material-ui/core/styles';
import BoxNumberInput from './BoxNumberInput';


const BoxItemNumberInput = (props) => (
<BoxNumberInput variant="outlined"  flex={1} mr="0.3em" {...props}  fullWidth />
)

export default BoxItemNumberInput;
