import React from "react";
import {
  alpha,
  withStyles,
  makeStyles,
} from "@material-ui/core/styles";
import {
    InputBase,
    InputLabel,
    FormControl,
    Box,
} from "@material-ui/core";


const BootstrapInput = withStyles((theme) => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(2),
      fontSize: 12,

    }
  },
  input: {
    display: 'flex',
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.common.white,
    border: "1px solid #ced4da",
    fontSize: 14,
    width: "100%",
    padding: "6px 8px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(","),
    "&:focus": {
    //   boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main
    }
  }
}))(InputBase);

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  margin: {
    margin: theme.spacing(1)
  }
}));

function CustomizedInputs() {
  const classes = useStyles();

  return (
    // <form className={classes.root} noValidate>
      <FormControl className={classes.margin} fullWidth >
        <InputLabel htmlFor="bootstrap-input">
          INFORMACJE DODATKOWE: 
        </InputLabel>
        <BootstrapInput defaultValue="Zapisz uwagii do faktury"  id="bootstrap-input" fullWidth />
      </FormControl>
    // </form>
  );
}


const BoxBootstrapInput = props => (
    <Box display="flex" flex={3} {...props} fullWidth>
        <CustomizedInputs {...props} fullWidth />
    </Box>
)

export default BoxBootstrapInput;

