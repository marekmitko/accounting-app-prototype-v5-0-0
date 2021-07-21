import * as React from "react";
import { makeStyles } from '@material-ui/core/styles';
import BoxTextInput from './BoxTextInput';


const BoxItemTextInput = (props) => (
<BoxTextInput variant="outlined"  flex={1} mr="0.3em" {...props}  fullWidth />
)

export default BoxItemTextInput;
