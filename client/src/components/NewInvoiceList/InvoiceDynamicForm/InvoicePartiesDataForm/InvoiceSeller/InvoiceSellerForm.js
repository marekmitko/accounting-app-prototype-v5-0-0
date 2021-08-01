import React, { useState, useEffect } from 'react';
import {
    FormWithRedirect,
    useGetOne,
    useQuery,
    Loading, Error, 
} from 'react-admin';
import { Card, Typography, Box, Toolbar, makeStyles, } from '@material-ui/core';

import BoxTextInput from '../../../../../myComponentsMui/myMuiForm/BoxTextInput.js';
// import UserProfile from '../../../../../../../database/bin/my-profile/userDataProvider.js';


// import FetchRelated from '../../XsetData/FetchRelated';


// // fetch('https://api.npms.io/v2/search?q=react')
// //         .then(response => response.json())
// //         .then(data => this.setState({ totalReactPackages: data.total }));


const dataUser2 = ( userId ) => useGetOne('datauser', userId);


// const FetchRelated2 = ({ record, reference, source, children }) => {
    //     const { data, loading, error } = useGetOne(reference, record[source]);
    //     if (loading) return <Loading />;
    //     if (error) return <Error />;
    //     if (!data) return null;
    
    //     // this is the only way I found to be able to populate the fields in the form with the address data
    //     record[reference] = data;
    
    //     return <React.Fragment>{children}</React.Fragment>;
// };


// const addressUser = () => {Object.fromEntries(userData.address.map((team) => [team.id, team]))};


  const useStyles = makeStyles((theme) => ({
    paper: {
      padding: theme.spacing(0.5),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

const InvoiceSellerForm = props => {

    
    // const User124 = dataUser2("User12356x");
    
    // const [dataUser, setUserData] = useState({});
    // useEffect(() => {
    //         // GET request using fetch inside useEffect React hook
    //         fetch('http://localhost:3000//datauser/User12356x')
    //         .then(response => response.json())
    //         .then(data => setUserData(data));
            
    //         // empty dependency array means this effect will only run once (like componentDidMount in classes)
    //     }, []);
        
      const classes = useStyles();

    return (
        <Card variant="outlined" className={classes.paper}>
            <Box display="flex">
                <Box flex={2} m="1em">
                    <Typography variant="subtitle1" gutterBottom>
                DANE SPRZEDAWCY</Typography>
                    <Box display="flex" mb="-1.5em">
                    {/* <BoxTextInput source="company" resource="seller" initialValue={dataUser.company} variant="standard"  mr="0.5em" disabled /> */}
                    <BoxTextInput source="user.name"  variant="standard"  mr="0.5em" disabled />
                    {/* <BoxTextInput source="MyDatatProfile.name"  variant="standard"  mr="0.5em" disabled />
                    <BoxTextInput source="MyDatatProfile.name"  name="" resource="" initialValue={MyDatatProfile.name} variant="standard"  disabled /> */}
                    </Box>
                    <BoxTextInput variant="standard" flex={2} mt="0" mb="-1em" source="contact.email" resource="seller" type="email" disabled />
                    {/* <DateInput source="birthday" resource="customers" /> */}

                    <Typography  variant="body2" align="left">
                ADRES SPRZEDAWCY</Typography>
                    <BoxTextInput variant="standard" mb="-1.5em" mt="-0.5em" source="addres.street" resource="seller" multiline disabled />
                    <Box display="flex" mb="-1.5em">
                        <BoxTextInput  variant="standard" source="addres.ZIPCode" resource="seller" mr="0.5em" disabled/>
                        <BoxTextInput  variant="standard" flex={2} source="addres.city" resource="seller" disabled/>
                    </Box>
                </Box>
            </Box>
        </Card>
    )

};

export default InvoiceSellerForm;