import React, { useState, useEffect } from 'react';
import {
    FormWithRedirect,
    DateInput,
    SelectArrayInput,
    TextInput,
    SaveButton,
    DeleteButton,
    NullableBooleanInput,
    TextField,
    ReferenceInput,
    SelectInput,
    ResourceContextProvider,
    ResourceName,
    dataProvider,
    useGetOne,
    useQuery,
    Loading, Error, 
} from 'react-admin';
import { Card, Typography, Box, Toolbar } from '@material-ui/core';

import BoxTextInput from '../../../../mycomponentsMui/myMuiForm/BoxTextInput.js';


// import FetchRelated from '../../XsetData/FetchRelated';


// // fetch('https://api.npms.io/v2/search?q=react')
// //         .then(response => response.json())
// //         .then(data => this.setState({ totalReactPackages: data.total }));



// const dataUser = ( userId ) => useGetOne('datauser', userId);


// const FetchRelated2 = ({ record, reference, source, children }) => {
//     const { data, loading, error } = useGetOne(reference, record[source]);
//     if (loading) return <Loading />;
//     if (error) return <Error />;
//     if (!data) return null;

//     // this is the only way I found to be able to populate the fields in the form with the address data
//     record[reference] = data;

//     return <React.Fragment>{children}</React.Fragment>;
// };

// const [userData, setUserData] = useState({});

// const addressUser = () => {Object.fromEntries(userData.address.map((team) => [team.id, team]))};


// useEffect(() => {
    //     // GET request using fetch inside useEffect React hook
    //     fetch('http://localhost:3000//datauser/User1eeb58bsd')
    //     .then(response => response.json())
    //     .then(data => setUserData(data));
    
    //     // empty dependency array means this effect will only run once (like componentDidMount in classes)
    // }, []);
    
    
    
    const InvoiceSellerForm = props => {

    
    return (
        <Card variant="outlined" p="1em">
            <Box display="flex">
                <Box flex={2} m="1em">
                    <Typography variant="subtitle1" gutterBottom>
                DANE SPRZEDAWCY</Typography>
                    <Box display="flex" mb="-1em">
                        <BoxTextInput variant="standard" source="fullname.fullname" resource="seller" mr="0.5em" />
                        <BoxTextInput variant="standard" source="fullname.surname" resource="seller"/>
                    </Box>
                    <BoxTextInput variant="standard" flex={2} mt="0" mb="-1em" source="contact.email" resource="seller" type="email" disabled />
                    {/* <DateInput source="birthday" resource="customers" /> */}

                    <Typography  variant="body2" align="right">
                ADRES SPRZEDAWCY</Typography>
                    <BoxTextInput variant="standard" mb="-1.5em" mt="-0.5em" source="addres.street" resource="seller" multiline  />
                    <Box display="flex" mb="-1.5em">
                        <BoxTextInput  variant="standard" source="addres.ZIPCode" resource="seller" mr="0.5em" />
                        <BoxTextInput  variant="standard" flex={2} source="addres.city" resource="seller"/>
                    </Box>
                </Box>
            </Box>
        </Card>
    )
};

export default InvoiceSellerForm;