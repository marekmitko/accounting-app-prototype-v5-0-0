import * as React from "react";
import { ArrayInput, SimpleFormIterator, TextInput, TextField, FormDataConsumer, NumberInput, } from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import BoxItemTextInput from '../../../../myComponentsMui/myMuiForm/BoxItemTextInput'
import BoxItemNumberInput from '../../../../myComponentsMui/myMuiForm/BoxItemNumberInput';
import BoxTextInput from '../../../../myComponentsMui/myMuiForm/BoxTextInput';
import BoxBootstrapInput  from '../../../../myComponentsMui/myMuiForm/BoxBootstrapInput.js';

import SalesTableHeader from '../../InvoiceDynamicForm/SalesProductTable/componentsSumSpanningTable/SalesTableHeader';

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

const AddedRowIterator = (props) => {
    const classes = useStyles();
    
    const BoxTextInputInForm = ({ variant, ...props }) => <BoxTextInput {...props} />;
    BoxTextInputInForm.defaultProps = BoxTextInput.defaultProps;

      const iteratorClasses = useIteratorStyle();

    return (
        <ArrayInput {...props} label="DODAJ PRODUKT"  source="product_list">
    {/* ->CONTAINER=>ProductList */}
            <SimpleFormIterator classes={iteratorClasses}  >

            {/* <TextInput label="IMIĘ I NAZWISKO"source="fullname" />
                <TextInput label="ADRES EMAIL" type="email" source="email" />
                {/* <TextInput label="ADRES"source="address.street" /> */}
                <NumberInput label="quantity" source="quantity" />
                <NumberInput label="unitprice" source="unitprice" /> */}

              
               <FormDataConsumer>
                    {({
                        formData, // The whole form data
                        scopedFormData, // The data for this item of the ArrayInput
                        getSource, // A function to get the valid source inside an ArrayInput
                        ...rest
                    }) => {
                        if (typeof scopedFormData !== 'undefined') {
                        scopedFormData.total = scopedFormData.quantity * scopedFormData.unitprice;
                        return (
                            <NumberInput disabled defaultValue={scopedFormData.total} label="Total" source={getSource('total')} {...rest} />
                        )
                        } else {
                        return(
                            <NumberInput disabled label="Total" source={getSource('total')} />
                        )
                        }            
                    }} 

            </FormDataConsumer>
          
            </SimpleFormIterator>
    {/* <-CONTAINER=ProductList */}
        </ArrayInput>

);
};


export default AddedRowIterator;