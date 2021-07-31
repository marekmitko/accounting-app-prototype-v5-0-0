import   React from "react";
import {
    FormWithRedirect,
    DateInput,
    SelectArrayInput,
    TextInput,
    SaveButton,
    DeleteButton,
    NullableBooleanInput,
} from 'react-admin';
import { Card, Typography, Box, Toolbar } from '@material-ui/core';
import BoxBootstrapInput from "../../../../../myComponentsMui/myMuiForm/BoxBootstrapInput";

const InvoiceFooterForm = props => (<React.Fragment>
    <Card variant="outlined" p="1em">
        <Box display="flex" m="1em">

                        <Box flex={1} mr="0.5em">
                        <Typography variant="h6" gutterBottom> </Typography>
                        </Box>

                            {/* <DateInput source="first_name" resource="customers" fullWidth />
                        <Box flex={1} ml="0.5em">
                        <DateInput source="last_name" resource="customers" fullWidth />
                    </Box> */}
     
    </Box>
    </Card>
                    <BoxBootstrapInput />
                    </React.Fragment>
);

export default InvoiceFooterForm;