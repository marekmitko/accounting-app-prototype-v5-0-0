import * as React from "react";
import { ArrayInput, SimpleFormIterator, TextInput, TextField, } from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import BoxTextInput from "../../../../../mycomponentsMui/myMuiForm/BoxTextInput";

const useStyles = makeStyles({
    inlineBlock: { 
        display: 'flex',

    },
    itemProduct: {
        display: 'flex',
    }
});

// const TextFieldInForm = ({ variant, ...props }) => <BoxTextInput {...props} />;
// TextFieldInForm.defaultProps = BoxTextInput.defaultProps;

const InvoiceItemCreate = (props) => {
    const classes = useStyles();
    return (
        <ArrayInput  label="DODAJ PRODUKT" source="product_list.item_info" >
             {/* <SimpleFormIterator addButton={<CustomAddButton />} removeButton={<CustomRemoveButton </SimpleFormIterator>/>}> */}
            <SimpleFormIterator   mr="0.1em" p="0" fullWidth formClassName={classes.itemProduct}>
            <Box display="flex" mb="-1.2em" fullWidth>
                        <BoxTextInput variant="outlined" flex={5} label="Nazwa" source="item_name" resource="products" className={classes.inlineBlock} mr="0.5em" />
                        <BoxTextInput variant="outlined" flex={3} label="Opis" source="item_desc" resource="products" className={classes.inlineBlock} mr="0.5em" />
                        <BoxTextInput variant="outlined" flex={3} label="Ilość" source="item_qty" resource="products" className={classes.inlineBlock} mr="0.5em" />
                        <BoxTextInput variant="outlined" flex={3} label="Cena" source="rate" resource="products" className={classes.inlineBlock} mr="0.5em" />     
            </Box>
            </SimpleFormIterator>
        </ArrayInput>
            
    );
};

export default InvoiceItemCreate
