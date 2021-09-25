import React from 'react';
import {store, useGlobalState} from 'state-pool'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import { FieldArray } from 'react-final-form-arrays';
import { FinalForm } from 'react-final-form';
import  {
        TextInput, NumberInput, SelectInput, 
        FormDataConsumer, 
        useFormGroup, useRecordContext, useResourceContext,
        CheckboxGroupInput, RadioButtonGroupInput, BooleanInput, 
}  from 'react-admin';


import Add from '@material-ui/icons/Add';
import Delete from '@material-ui/icons/HighlightOff';
import Button from '@material-ui/core/Button';
import Input  from '@material-ui/core/Input';

import SumSalesItemsHeader from './SumSalesItemsHeader';

// import BoxNumberInput from '../../../../myComponentsMui/myMuiForm/BoxNumberInput';






// const sumBrutto = formData.sales_list.reduce(( accumulator, obj ) => {
//     return accumulator + (obj['sum_item_brutto'] || 0 ) }, 0 )
//     console.log("sumBrutto", sumBrutto );



function ccyFormat(num) {
    return `${num.toFixed(2)}`;
}
// if(fromDataItems && fromDataItems.length > 0 ) 



function getSumOfValues( valueName, formDataItems ) {
        formDataItems.reduce(( accumulator, obj ) => {
            return accumulator + (obj[`${valueName}`] || 0 ) }, 0 )    
}
store.setState("dupowato",150);

export default function SumSalesItems({setSumBrutto}) {
   
    const [dupowato,setDupowato] = useGlobalState("dupowato");
    function setD(e){
        setDupowato(e.target.value)
    }

    console.log("setDupowato", setDupowato );
  
    return (
        <Table>
            <SumSalesItemsHeader/>
            <TableBody>
                <TableRow align="right">
                
                    <TableCell >
                        <input value={dupowato} onChange={setD} />
                    </TableCell>
                    <TableCell align="center"></TableCell>
                    <TableCell  align="center">
                    <FormDataConsumer  subscription={{ values: true }} >
                        {({ formData, ...rest  }) => { 
                                if(formData.sales_list && formData.sales_list.length > 0 ) {
                                    const sumBrutto = formData.sales_list.reduce(( accumulator, obj ) => {
                                        return accumulator + (obj['sum_item_brutto'] || 0 ) }, 0 )
                                        setSumBrutto(sumBrutto);
                                        console.log("sumBrutto", sumBrutto );       
                                }
                                if(formData.sales_list && formData.sales_list.length > 0 )  {
                                console.log( "fx", getSumOfValues( "sum_item_brutto", formData.sales_list ));
                                }
                            }
                        } 
                            </FormDataConsumer>
                    </TableCell>
                    <TableCell   >
                    
                    </TableCell>
                </TableRow>
                <TableRow align="right">
                    <TableCell >Tax</TableCell>
                    <TableCell align="center"></TableCell>
                    <TableCell align="center"></TableCell>
                    <TableCell align="center">{ccyFormat(25,66)}</TableCell>
                    <TableCell   />
                </TableRow>
                <TableRow align="right">
                    <TableCell >Total</TableCell>
                    <TableCell align="center"></TableCell>
                    <TableCell align="center"></TableCell>
                    <TableCell align="center">
                    
                                                </TableCell>
                   
                    <TableCell    />
                    
                </TableRow>
            </TableBody>
        </Table>
    );
}