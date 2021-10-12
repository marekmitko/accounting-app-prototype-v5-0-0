import * as React from 'react';
import { useEffect, useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { FieldArray, useFieldArray, } from 'react-final-form-arrays';
import {  Field, useFormState, useForm, } from 'react-final-form';
import  {   NumberInput, SelectInput, FormGroupContextProvider, FormDataConsumer, ArrayInput, useRecordContext, }  from 'react-admin';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Add from '@material-ui/icons/Add';
import Delete from '@material-ui/icons/HighlightOff';
import Button from '@material-ui/core/Button';
import BoxNumberInput from '../../../../myComponentsMui/myMuiForm/BoxNumberInput';
import createDecorator from 'final-form-calculate';
import SalesTableHeader from './componentsSalesTable/SalesTableHeader';
import AdditionalOptions from './componentsSubSalesTable/AdditionalOptions';

import SubArrIteratorItem from './SubArrIteratorItem';



const useStyles = makeStyles({
    
    table: {
        minWidth: 700,
        borderSpacing: 0,
    },
    IteratorRowProduct: {
        "& tr": {
            "& td": {
                paddingTop: 14,
                paddingLeft: 2,
                paddingBottom: 14,
                paddingRight: 2,
                "& selectinput": {
                    "& div": {
                        minWidth: 80,
                        },
                    },
            },
        },

    },
    select: {
        "& ul": {
            backgroundColor: "#cccccc",
        },
        "& li": {
            fontSize: 14,
        },
    },
    helperTextIsNONE: {
        fontSize: 14,
        "& p": {
            display: 'none',
        },
    },

});


function subtotal(items) {
  return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}

const item_type = [
    { label: 'Usługa', id: 'usługi', name: 'Usługi' },
    { label: 'Towar', id: 'towar', name: 'Towary' },
    { label: 'Najem', id: 'najem', name: 'Najem' },
    { label: 'Prowizja', id: 'Prowizja', name: 'Prowizja' },
    { label: 'MVA', id: 'MVA', name: 'MVA' },
    { label: 'O% MVA', id: 'Sprzedaż 0% MVA', name: '0% MVA' },
    { label: 'Zwolniona', id: 'Sprzedaż zwolniona MVA', name: 'Zwolniony' },
];
const item_tax = [
    { id: 0.25, name: '25 %', label: '25%', value: 0.25 },
    { id: 0.15, name: '15 %', label: '15%', value: 0.15 },
    { id: 0.12, name: '12 %', label: '12%', value: 0.12 },
    { id: 0.06, name: '6 %',  label: '6%', value: 0.06 },
    { id: 0,    name: '0 %',  label: '0%', value: 0    },
];


// const SumSpanningTable = (    {setTotalSumSales, total_sum_sales, form, typeItem, setTypeItem, source, record, resource, defaultValue, ...rest}) => {
const SumSpanningTable = ({source, resource, ...rest}) => {

    //czy ja tu mogę dodać motode do objektu? 
    const [count, setCount] = useState(0);
 
    const initOnClickValue =  { 
        sales_item: "",
        id: "",
        item_name: "",
        item_type: "Wybierz",
        item_qty: 1,
        item_netto: 0.00,
        item_tax: undefined,
        sum_item_netto: 0.00,
        sum_item_tax: 0.00,
        sum_item_brutto: 0.00,
    };

    

    // const TablefieldProps = useFieldArray(source, {initialValue: defaultValue, ...rest, });
  
    const classes = useStyles();
    

    // const handleChangeSelectType = (event) => {
    //     setTypeItem(event.target.value);
    // };
        // const record = useRecordContext();

    
        const formState = useFormState();
        const formStateData = formState.values;
 
        console.log("%c rest ", "color:white; font-weight:900; background-color:#FF5733;", 
            source, rest, console.count('count'));

    return (  



        <TableContainer component={Paper}>
                {/*>> ->CONTAINER=> SalesTable in Table */}
            <ArrayInput source='subSalesTable' label="" >
                <SubArrIteratorItem restSalesTable={rest} sourceSalesTable={source} />
            </ArrayInput>
                    {/* X <-CONTAINER=> SalesTable in Table */}
        </TableContainer>
    )
};
export default SumSpanningTable;