import React, { Fragnent, useState, useEffect, } from "react";
import {
    FormWithRedirect,
    DateInput,
    SelectArrayInput,
    TextInput,
    SaveButton,
    DeleteButton,
    NullableBooleanInput,
    ReferenceInput,
    SelectInput,
    useQuery,
} from 'react-admin';
import { Card, Typography, Box, Toolbar, Paper, makeStyles } from '@material-ui/core';

import BoxTextInput from '../../../../../myComponentsMui/myMuiForm/BoxTextInput.js';

const useStyles = makeStyles((theme) => ({
    paper: {
      padding: theme.spacing(0.5),
      textAlign: 'center',
    //   color: theme.palette.text.secondary,
    },
  }));


const InvoiceBuyerForm = props => {
// console.log(UserProfile("Profile12356x"));

const [customers, setCustomers] = useState([]);
const { data: customer } = useQuery({
  type: 'getList',
  resource: 'tradePartners_list',
  payload: {
    pagination: { page: 1, perPage: 600 },
    sort: { field: 'company', order: 'ASC' },
    filter: {},
  },
});

useEffect(() => {
    if (customer) {
    setCustomers(customer.map((d) => ({ id: d.company, name: d.company })));};
  }, [customer]);


  const [version, setVersion] = React.useState(0);
  const handleChange = React.useCallback(() => setVersion(version + 1), [version]);

 
const classes = useStyles();
// console.log(tradePartners_list);
console.log(customers);
    return (
        <Card variant="outlined" className={classes.paper}>
            <Box display="flex">
                <Box flex={2} m="1em">
                    <Typography variant="subtitle1" gutterButtom>
                DANE NABYWCY</Typography>
                    <Box display="flex" mb="-1.5em">
                    
                    {/* <ReferenceInput key={version} source="customers" reference="tradePartners_list"> */}
                    {/* <ReferenceInput key={version} source="userId" reference="users"> */}
                            <SelectInput  label="Wybierz Kontrahenta" variant ="outlined" source='company' choices={customers} fullWidth />
                    {/* </ReferenceInput> */}

                        </Box>
                    <Box display="flex" mb="-1.5em">
                        <BoxTextInput source="fullname.forename" resource="buyer" mr="0.5em" />
                        <BoxTextInput source="fullname.surname" resource="buyer"/>
                    </Box>
                    <BoxTextInput flex={2} mt="0" mb="-1em" source="contact.email" resource="buyer" type="email" />
                    {/* <DateInput source="birthday" resource="customers" /> */}

                    <Typography  variant="body2" align="left">
                ADRES NABYWCY</Typography>
                    <BoxTextInput mb="-1.5em" mt="-0.5em" source="addres.street" resource="buyer" multiline  />
                    <Box display="flex" mb="-1.75em">
                        <BoxTextInput source="addres.ZIPCode" resource="buyer" mr="0.5em" />
                        <BoxTextInput flex={2} source="addres.city" resource="buyer"/>
                    </Box>
                </Box>

          
            </Box>
                
        </Card>
    )
};

export default InvoiceBuyerForm;