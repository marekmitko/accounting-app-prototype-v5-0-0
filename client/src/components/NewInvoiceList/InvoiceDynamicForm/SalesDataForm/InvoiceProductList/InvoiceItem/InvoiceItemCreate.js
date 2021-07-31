import * as React from "react";
import { ArrayInput, SimpleFormIterator, TextInput, TextField, FormDataConsumer} from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import BoxItemTextInput from '../../../../../../myComponentsMui/myMuiForm/BoxItemTextInput';
import BoxItemNumberInput from '../../../../../../myComponentsMui/myMuiForm/BoxItemNumberInput';
import BoxTextInput from '../../../../../../myComponentsMui/myMuiForm/BoxTextInput';
import BoxBootstrapInput  from '../../../../../../myComponentsMui/myMuiForm/BoxBootstrapInput.js.js.js';


const useStyles = makeStyles({
    inlineBlock: { display: 'inline-flex',
},
styleItem: { variant: 'outlined',},
});

const InvoiceItemCreate = (props) => {
    const classes = useStyles();
    
    
    const BoxTextInputInForm = ({ variant, ...props }) => <BoxTextInput {...props} />;
    BoxTextInputInForm.defaultProps = BoxTextInput.defaultProps;

    return (
    <ArrayInput {...props} label="DODAJ PRODUKT"  source="product_list">
        <SimpleFormIterator>
        <FormDataConsumer>
            {({ getSource, scopedFormData }) => {
                return (
                    //Nie wiem czy to nie powino być tylko w tym Box ? 
                    <Box display="inline-flex" mr="0.1em" p="0" mb="-1.2em" fullWidth>
                        <BoxItemTextInput flex={5} label="Nazwa" source={getSource("item_name")}  resource="products" ml="-1.2em"/>
                        <BoxItemTextInput flex={3} label="Typ" source={getSource("item_desc")} resource="products"/>
                        <BoxItemNumberInput flex={1} label="Ilość" source={getSource("item_qty")} resource="products"/>
                        <BoxItemNumberInput flex={1} label="Netto" source={getSource("item_qty")} resource="products"/>
                        <BoxItemNumberInput flex={1} label="VAT" source={getSource("item_vat")} resource="products"/>
                        <BoxItemNumberInput flex={1} label="Ilość" source={getSource("sum_netto")} resource="products"/>
                        <BoxItemNumberInput flex={1} label="Ilość" source={getSource("sum_vat")} resource="products"/>
                        <BoxItemNumberInput flex={1} label="Brutto" source={getSource("sum_brutto")} resource="products"/>   
                    </Box>
                );
            }}
        </FormDataConsumer>
        </SimpleFormIterator>
   </ArrayInput>

);
};


export default InvoiceItemCreate;