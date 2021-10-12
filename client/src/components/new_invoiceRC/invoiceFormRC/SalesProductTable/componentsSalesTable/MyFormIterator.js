import * as React from "react";
import { ArrayInput, TextInput, TextField, FormDataConsumer, NumberInput, 
        
} from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';

import BoxItemNumberInput from '../../../../../myComponentsMui/myMuiForm/BoxItemNumberInput';
import BoxTextInput from '../../../../../myComponentsMui/myMuiForm/BoxTextInput';


/*
const useStyles = makeStyles({
    borderNull: {
        border: 0,
    },
    tableBorder: {

        "& tr": {
            paddingTop: 0,
            paddingBottom: 0,
            "& td": {
                border: 0,
                paddingTop: 0,
                paddingBottom: 0,
            },
        },
    },
    helperTextIsNONE: {
        "& p": {
            display: 'none',
        },
    },

});
*/



const useStyles = makeStyles({
    inlineBlock: { display: 'inline-flex',
},
styleItem: { variant: 'outlined',},
});

const useIteratorStyle = makeStyles(() => ({

    // ustawienie wierrsza
            // root: {
            // display: 'flex',
            // flexDirection: 'column',
            // },

    // ustawienia komórek
    form: {
      
      display: 'inline-flex',
    },
    line: {
      border: 0,
    },
    li: {
         display: 'inline-flex',
    },
    card: { display: 'inline-flex',
},
styleItem: { variant: 'outlined',},
  }));

const MyFormIterator = (props) => {
    const classes = useStyles();
    
    const BoxTextInputInForm = ({ variant, ...props }) => <BoxTextInput {...props} />;
    BoxTextInputInForm.defaultProps = BoxTextInput.defaultProps;

      const iteratorClasses = useIteratorStyle();


    // const MyFormIteratorProps =  useSimpleFormIterator();

    //1 const props
    // console.log("NEWIter", MyFormIteratorProps);
    return ( 
        <div></div>

);
};


export default MyFormIterator;
