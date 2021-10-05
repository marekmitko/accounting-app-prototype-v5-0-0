// import React from 'react';
// import PropTypes from 'prop-types';
// import NumberFormat from 'react-number-format';
// import { makeStyles } from '@material-ui/core/styles';
// import TextField from '@material-ui/core/TextField';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     '& > *': {
//       margin: theme.spacing(1),
//     },
//   },
// }));




// function NumberFormatCustom(props) {
//   const { inputRef, onChange, ...other } = props;

//   return (
//     <NumberFormat
//       {...other}
//       getInputRef={inputRef}
//       onValueChange={(values) => {
//         onChange({
//           target: {
//             name: props.name,
//             value: values.value,
//           },
//         });
//       }}
//       thousandSeparator
//       isNumericString
//       prefix="$"
//     />
//   );
// }

// NumberFormatCustom.propTypes = {
//   inputRef: PropTypes.func.isRequired,
//   name: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };

// export default function FormattedInputs() {
//   const classes = useStyles();
//   const [values, setValues] = React.useState({

//     numberformat: '1320',
//   });

//   const handleChange = (event) => {
//     setValues({
//       ...values,
//       [event.target.name]: event.target.value,
//     });
//   };

//   return (
//     <div className={classes.root}>
  
//       <TextField
//         label="react-number-format"
//         value={values.numberformat}
//         onChange={handleChange}
//         name="numberformat"
//         id="formatted-numberformat-input"
//         InputProps={{
//           inputComponent: NumberFormatCustom,
//         }}
//       />
//     </div>
//   );
// }
