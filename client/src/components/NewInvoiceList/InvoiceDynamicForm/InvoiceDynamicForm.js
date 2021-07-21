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
import InvoiceHeaderForm from './SalesDataForm/InvoiceHeader/InvoiceHeader.js';
import InvoiceHeaderList from './SalesDataForm/InvoiceProductList/InvoiceHeaderList.js';
import InvoiceInfoForm from './InvoiceInfoForm/InvoiceInfoForm.js';
import InvoiceFooterForm from './SalesDataForm/InvoiceFooter/InvoiceFooterForm.js';
import BoxItemTextInput from '../../mycomponentsMui/myMuiForm/BoxItemTextInput.js';
import BoxBootstrapInput  from '../../mycomponentsMui/myMuiForm/BoxBootstrapInput.js';
import InvoiceDocumentTitle from "./capition/DocumentTitle.js";



const segments = [
    { id: 'compulsive', name: 'Compulsive' },
    { id: 'collector', name: 'Collector' },
    { id: 'ordered_once', name: 'Ordered Once' },
    { id: 'regular', name: 'Regular' },
    { id: 'returns', name: 'Returns' },
    { id: 'reviewer', name: 'Reviewer' },
];


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
                    <Box flex={1} m="0.5em">
                        <InvoiceDocumentTitle />
                    </Box>
                    <Box display="flex">
                        <Box flex={1} m="0.5em" mr="0.5em">
                            <InvoiceSellerForm />
                        </Box>
                        <Box flex={1} m="0.5em" ml="0.5em" >
                            <InvoiceBuyerForm />
                        </Box> 
                    </Box>
                        <Box flex={1} m="0.5em" ml="0.5em" >
                            <InvoiceInfoForm />
                            <Box display="flex">
                                <Box flex={2} m="0.5em" ml="0.5em" >
                                    <SelectArrayInput source="groups" resource="customers" choices={segments} fullWidth /> 
                                </Box>
                                <Box flex={2} m="0.5em" ml="0.5em" >
                                     <NullableBooleanInput source="has_newsletter" resource="customers" />
                                </Box>
                            </Box>
                        </Box> 

                    
                    <Box display="flex">
                        <Box flex={1} m="0.5em">
                            {/* <Typography variant="h6" gutterBottom>Pod Status </Typography>
                            <Box flex={1} m="0.5em">
                                <InvoiceInfoForm />
                                < BoxBootstrapInput />
                            </Box> */}
                                {/* <Typography variant="h6" gutterBottom>Stats</Typography> */}
                        <InvoiceHeaderList>
                        <InvoiceItemCreate fullWidth />
                        </InvoiceHeaderList>
                            </Box>
                            </Box>
                    <Box display="flex">
                    <Box flex={1} m="0.5em">
                            <InvoiceFooterForm />
                    </Box>
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