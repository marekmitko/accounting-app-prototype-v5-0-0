import React, {ReactFragnent} from "react";
import {
    FormWithRedirect,
    DateInput,
    SelectArrayInput,
    TextInput,
    SaveButton,
    DeleteButton,
    NullableBooleanInput,
    CreateBase,
    ResourceContextProvider,
} from 'react-admin';
import { Card, Typography, Box, Toolbar, Grid } from '@material-ui/core';

import BoxTextInput from '../../client/src/myComponentsMui/myMuiForm/BoxTextInput.js';
import  myGridSanitized from "../../client/src/myComponents/myGridSanitized"
import { Children } from "react";



const InvoiceBuyerForm = (props) => (
// console.log(UserProfile("Profile12356x"));
<ResourceContextProvider resource='NewInvoiceList' >
    <CreateBase basePath='/NewInvoiceList/create' >
        <myGridSanitized  container spacing={3}>
        <Grid container item xs={12} spacing={3}>
        <Card variant="outlined" p="1em">
          
            
                {/* <Box flex={2} m="1em"> */}
        <Grid container item xs={12} spacing={3}>
                    <Typography variant="subtitle1" gutterBottom>
                DANE NABYWCY</Typography>
                <Grid container item xs={12} spacing={3}>
                        <BoxTextInput source="fullname.forename" resource="buyer" mr="0.5em" />
                        <BoxTextInput source="fullname.surname" resource="buyer"/>
                    </Grid>
                    <BoxTextInput flex={2} mt="0" mb="-1em" source="contact.email" resource="buyer" type="email" />
                    {/* <DateInput source="birthday" resource="customers" /> */}

                    <Typography  variant="body2" align="right">
                ADRES NABYWCY</Typography>
                    <BoxTextInput mb="-1.5em" mt="-0.5em" source="addres.street" resource="buyer" multiline  />
                    <Grid container item xs={12} spacing={3}>
                        <BoxTextInput source="addres.ZIPCode" resource="buyer" mr="0.5em" />
                        <BoxTextInput flex={2} source="addres.city" resource="buyer"/>
                    </Grid>
                </Grid>
                {/* </Box> */}

          
         
                
        </Card>
        </Grid>
        </myGridSanitized>
   </CreateBase>
   </ResourceContextProvider>
    );


export default InvoiceBuyerForm;