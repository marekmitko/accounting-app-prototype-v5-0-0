import React, { useState, useEffect, useMemo, } from 'react';
import { useGetOne } from 'react-admin';
import { Card, Typography, Box, makeStyles, } from '@material-ui/core';
import BoxTextInput from '../../../../myComponentsMui/myMuiForm/BoxTextInput.js';


const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(0.5),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

const InvoiceNo = () => {

    
    const classes = useStyles();

    return (
        <Card variant="outlined" className={classes.paper}>
                <Box display="flex"  mt="1em" pl="1em" p="0.25em" >
                    <Box display="flex" mt="-1.5em" mb="-1.5em">
                        <Box mt="1em" mb="-1.5em">
                            <Typography  variant="body2" align="right">
                      NUMER FAKTURY: </Typography>
                        </Box>
                        <BoxTextInput mt="-0.75em" ml="0.5em" label="Idno" source="idxd"   variant="standard"   mr="0.5em" disabled />
                        {/* <BoxTextInput mt="-0.75em" ml="0.5em" label="" source="id"  initialValue={invoice_no} variant="standard"   mr="0.5em" disabled /> */}
                    </Box>
                </Box>
        </Card>
    );
};

export default InvoiceNo; 