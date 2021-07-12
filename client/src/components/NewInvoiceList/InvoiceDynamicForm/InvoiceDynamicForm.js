import * as React from "react";
import {
    FormWithRedirect,
    DateInput,
    SelectArrayInput,
    TextInput,
    SaveButton,
    DeleteButton,
    NullableBooleanInput,
} from 'react-admin';
import { Typography, Box, Toolbar } from '@material-ui/core';

import InvoiceSellerForm from './InvoicePartiesDataForm/InvoiceSeller/InvoiceSellerForm.js';
import InvoiceBuyerForm from './InvoicePartiesDataForm/InvoiceBuyer/InvoiceBuyerForm.js';
import InvoiceItemCreate from './SalesDataForm/InvoiceProductList/InvoiceItem/InvoiceItemCreate.js';
import InvoiceHeaderForm from './SalesDataForm/InvoiceHeader/InvoiceHeaderForm.js';
import InvoiceHeaderList from './SalesDataForm/InvoiceProductList/InvoiceHeaderList.js';


const InvoiceDynamicForm = props => (
    <FormWithRedirect
        {...props}
        render={formProps => (
            // here starts the custom form layout
            <form>
                <Box p="1em">
                <Box flex={1} m="0.5em">
                    <InvoiceHeaderForm />
                </Box>
                <Box display="flex">
                    <Box flex={1} m="0.5em" mr="0.5em">
                        <InvoiceSellerForm />
                    </Box>
                    <Box flex={1} m="0.5em" ml="0.5em" >
                        <InvoiceBuyerForm />
                    </Box> 
                </Box>

                <Box flex={1} m="0.5em">
                            
                            <Typography variant="h6" gutterBottom>Stats</Typography>
                            {/* <SelectArrayInput source="groups" resource="customers" choices={segments} fullWidth /> */}
                            {/* <NullableBooleanInput source="has_newsletter" resource="customers" /> */}
                    
                            <InvoiceHeaderList>
                    <InvoiceItemCreate fullWidth />
                    </InvoiceHeaderList>
                        </Box>

            
                           
                        </Box>
                <Toolbar>
                    <Box display="flex" justifyContent="space-between" width="100%">
                        <SaveButton
                            saving={formProps.saving}
                            handleSubmitWithRedirect={formProps.handleSubmitWithRedirect}
                        />
                        <DeleteButton record={formProps.record} />
                    </Box>
                </Toolbar>
            </form>
        )}
    />
);

export default InvoiceDynamicForm;