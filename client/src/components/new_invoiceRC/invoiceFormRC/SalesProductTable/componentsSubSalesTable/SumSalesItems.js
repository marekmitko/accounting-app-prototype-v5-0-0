import React from 'react';
import { useMemo, useEffect, } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import { FieldArray } from 'react-final-form-arrays';
import { FinalForm, useForm, useFormState, } from 'react-final-form';
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








export default function SumSalesItems ({setSumTable, sumTable, form, record, resource, dataArray, ...fieldProps }) {

    function ccyFormat(num) {
        return `${num.toFixed(2)}`;
    }

    const formGroupState = useFormGroup("IteratorItem");

    // console.log( 'fieldProps', fieldProps );
    // console.log( 'IteratorItem', formGroupState );
    console.log( 'dataArray', dataArray.sales_list );


    const dataItem =  dataArray.sales_list;
    
    
    console.log('typeOf', typeof(dataItem) );
    console.log('ArrFrom', Array.from(dataItem) );
    let a = Array.from(dataItem);
    let sum=0;
    for(let i=0;i<a.length;i++){
        sum+= +(dataItem[i].item_qty);
    }

    function sumQty(data){
        var sumBro = 0; 
        if(data){
            sumBro = data.reduce(( accumulator, obj ) => {
                return accumulator + (obj['item_qty'] || 0 ) }, 0 )
                console.log("sumBro", sumBro );
            } else {
                return sumBro};
        }

  const {change} = useForm();
  const { values: { test_first_input }} = useFormState({ subscription: { values: true } });

  useMemo(() => {
      change('test_second_input', test_first_input / 10);
  }, [change, test_first_input]);


    return (
        <Table>
            <SumSalesItemsHeader/>
            <TableBody>
                <TableRow>
                    <NumberInput  source="test_first_input"/>
                    <NumberInput source="test_second_input"/>
                </TableRow>
                <TableRow align="right">
                    <TableCell >Subtotal</TableCell>
                    <TableCell align="center">
                    <FormDataConsumer  subscription={{ values: true }} >
                    {({ formData, scopedFormData, getSource, ...rest  }) => { 
                          
                            return  ( <NumberInput defaultValue={sumTable} source="sumTableTest" {...rest}/> );
                         
                        
                        }
                    }
                </FormDataConsumer>
                    

                    </TableCell>
                    <TableCell  align="center">
                        {ccyFormat(245,544)}</TableCell>
                    <TableCell   >
                    <FormDataConsumer  subscription={{ values: true }} >
                            {({ formData, ...rest  }) => { 
                                // console.log('fromData', formData);
                                if(formData.sales_list && formData.sales_list.length > 0 ) {

                                    var sumBrutto = formData.sales_list.reduce(( accumulator, obj ) => {
                                                    return accumulator + (obj['sum_item_brutto'] || 0 ) }, 0 )
                                            // console.log("sumBrutto", sumBrutto );
                                    }
                                }
                            } 
                        </FormDataConsumer>
                    </TableCell>
                </TableRow>
                <TableRow align="right">
                    <TableCell >Tax</TableCell>
                    <TableCell align="center">{sum}</TableCell>
                    <TableCell align="center"></TableCell>
                    <TableCell align="center">{ccyFormat(25,66)}</TableCell>
                    <TableCell   />
                </TableRow>
                <TableRow align="right">
                    <TableCell >Total</TableCell>
                    <TableCell align="center"></TableCell>
                    <TableCell align="center">{sumQty(dataItem)}</TableCell>
                    <TableCell align="center"><div>{ccyFormat(25,55)}</div></TableCell> 
                    <TableCell    />
                    {/* { console.log('endtablesum', fieldProps.fields.map((name, index)=> `sales_list[${index}]`... ))} */}
                    {/* sam string  */}
                    {/* { console.log('endtablesum', fieldProps.fields.map((name, index)=> name ))} */}
                    {/* tablica objektów  */}
                    {/* { console.log('endtablesum', fieldProps.fields.value.map(({sum_item_brutto}) => sum_item_brutto ))} */}
                    {/* { console.log('endtablesum', fieldProps.fields.value )} */}
                    {/* { console.log('endtablesum', fieldProps.fields.value.reduce((suma, {sum_item_brutto}) => suma + sum_item_brutto, 0) )} */}
                    {/* { console.log('2blesum', fieldProps.fields["sales_list"] )} */}

                    {/* return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0); */}
                </TableRow>
            </TableBody>
        </Table>
    );
}