import * as React from "react";
import { Card, Typography, Box, Toolbar,} from '@material-ui/core';
import InvoiceHeaderForm from './InvoiceHeaderForm.js';
import InvoiceHeaderData from './InvoiceHeaderData.js';

const InvoiceHeader = props => (
    <Card variant="outlined" p="1em">
        <Box display='flex' >
            <Box flex={1} m="0.5em">
                <InvoiceHeaderForm />
            </Box>
            <Box flex={2} m="0.5em">
                <InvoiceHeaderData />
            </Box>
        </Box>
    </Card>
);

export default InvoiceHeader;