import React, { useState, useEffect, useMemo, } from 'react';
import { useGetOne } from 'react-admin';
import { Card, Typography, Box, makeStyles, } from '@material-ui/core';
import BoxTextInput from '../../../../../myComponentsMui/myMuiForm/BoxTextInput.js';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(0.5),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

const InvoiceSellerForm = (props) => {

// const { data } = useGetOne('userProfile', {userProfile.Profile12356x});

    const [dataSeller, setSellerData] = useState({});
    useEffect((dataSeller) => {
            // GET request using fetch inside useEffect React hook
            fetch('http://localhost:3000//userProfile/Profile12356x')
            .then(response => response.json())
            .then(data => setSellerData(data));
            // empty dependency array means this effect will only run once (like componentDidMount in classes)
        }, dataSeller);

    const classes = useStyles();

    return (
        <React.Fragment>
        <Card variant="outlined" className={classes.paper}>
                <Box display="flex"  mt="1em" pl="1em" p="0.25em" >
                    <Box display="flex" mt="-1.5em" mb="-1.5em">
                        <Box mt="1em" mb="-1.5em">
                            <Typography  variant="body2" align="right">
                      NUMER RACHUNKU SPRZEDAWCY: </Typography>
                        </Box>
                        <BoxTextInput mt="-0.75em" ml="0.5em" label="" source="myNoBank"  initialValue={dataSeller.noBank} variant="standard"   mr="0.5em" disabled />
                    </Box>
                </Box>
        </Card>
        <Card variant="outlined" className={classes.paper}>
            <Box display="flex">
                <Box flex={2} m="1em">
                    <Typography variant="subtitle1" gutterBottom>
                DANE SPRZEDAWCY</Typography>
                    <Box display="flex" mb="-1.5em">
                        <BoxTextInput label="NAZWA FIRMY" source="myCompany"  initialValue={dataSeller.myCompany} variant="standard"   mr="0.5em" disabled />
                    {/* <BoxTextInput variant="standard" flex={2} mt="0" mb="-1em" source="contact.email" resource="seller" type="email" disabled  */}
                    </Box>
                    <Box mt="1em" mb="-1.5em">
                        <Typography  variant="body2" align="right">
                    ADRES SPRZEDAWCY</Typography>
                    </Box>
                    <BoxTextInput label="ULICA"  source="myStreet"  initialValue={dataSeller.myStreet} variant="standard" mb="-1.5em" mt="-0.5em" multiline disabled />
                    <Box display="flex" mb="-1.5em">
                        <BoxTextInput  label="KOD POCZTOWY"  source="myZIPCode"  initialValue={dataSeller.myZIPCode}  variant="standard" mr="0.5em" disabled/>
                        <BoxTextInput    label="MIEJSCOWOŚĆ" source="myCity"  initialValue={dataSeller.myCity}variant="standard" flex={2}  disabled/>
                    </Box>
                    <Box mt="1em" mb="-1.5em">
                        <Typography  variant="body2" align="right">
                    DANE KTONTAKTOWE</Typography>
                    </Box>
                    <Box display="flex" mb="-1.5em">
                        <BoxTextInput label="TELEFON" source="myPhoneNo"  initialValue={dataSeller.myPhone} variant="standard"   mr="0.5em" disabled />
                        <BoxTextInput label="" source="myEmail"  initialValue={dataSeller.myEmail}  variant="standard" mr="0.5em" disabled /> 
                    </Box>
                    <Box display="flex" mt="-1.5em" mb="-1.5em">
                        <Box mt="1em" mb="-1.5em">
                            <Typography  variant="body2" align="right">
                        NUMER ORG. </Typography>
                        </Box>
                        <BoxTextInput mt="-0.75em" ml="0.5em" label="" source="myMVA"  initialValue={dataSeller.myMVA} variant="standard"   mr="0.5em" disabled />
                    </Box>
                </Box>
            </Box>
        </Card>
        </React.Fragment>
    )
};

export default InvoiceSellerForm;