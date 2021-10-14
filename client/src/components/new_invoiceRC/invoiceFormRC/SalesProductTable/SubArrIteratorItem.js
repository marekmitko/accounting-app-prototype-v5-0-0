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
import  {   NumberInput, SelectInput, FormGroupContextProvider, FormDataConsumer, ArrayInput, }  from 'react-admin';
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
import SumSalesItems from './componentsSubSalesTable/SumSalesItems';



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


// function subtotal(items) {
//   return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
// }



// const SubArrIteratorItem = (    {setTotalSumSales, total_sum_sales, form, typeItem, setTypeItem, source, record, resource, defaultValue, ...rest}) => {


const SubArrIteratorItem = ({ propsSalesTable }) => {

    //czy ja tu mogę dodać motode do objektu? 
    // const [count, setCount] = useState(0);
 
   
    
    const classes = useStyles();
    

    // const handleChangeSelectType = (event) => {
    //     setTypeItem(event.target.value);
    // };

      const sourceName = 'salesTable.sales_items_list';


                // console.log("%c rest ", "color:white; font-weight:900; background-color:#FFAA33;", 
                //     ource, defaultValue, rest , console.count('count'));

                console.log("%c propsSalesTable ", "color:pink; font-weight:900; background-color:#FF5733;", 
                    propsSalesTable, console.count('count'))   
                
                return (
                            <FieldArray  name='salesTable'  > 
                                        {(fieldProps) => {

                                    // console.log("%c fieldProps ", "color:white; font-weight:900; background-color:#5549C7;", 
                                    //     fieldProps, console.count('count'));

                                        return (

                                        <FieldArray  name={sourceName}  > 
                                            {(fieldProps) => {
                                    // console.log("%c subFieldProps ", "color:blue; font-weight:900; background-color:#DDEE55;", 
                                    //         fieldProps, sourceName, console.count('count'));
                                                    return (

                                        <React.Fragment> 
                                                    <Table className={classes.table } aria-label="sales list table">
                                            {/*>>  ->subCONTAINER=> HEADER-> sales_items_list in TableHead--SalesTable */}
                                                        <SalesTableHeader/>
                                            {/* X <-subCONTAINER=> Header-> sales_items_list in TableHead--SalesTable */}
                                                        <TableBody className={classes.IteratorRowProduct } >  


                                            {/*>>  ->subCONTAINER=> sales_item in TableRow--iteratorForm */}
                    {/* console.log("%c iteratorRow ", "color:#FF33FF; font-weight:900; background-color:#0033FF;", 
                        fieldProps.fields, sales_item, console.count('count'));
                        console.log("%c name ", "color:#FF11FF; font-weight:900; background-color:#3CBAF5;", 
                            fieldProps.fields.name, sales_item, console.count('count')); */}
                                        



                                                            {fieldProps.fields.map((item, index) => {
                                                                const sourceSalesItemList = fieldProps.fields.name;
                                                                const itemValue = fieldProps.fields.value[index];

                                                                let sum_netto = 0;
                                                                    if(Number(fieldProps.fields.value[index].item_netto) != NaN){
                                                                        sum_netto =  (+itemValue.item_qty)*(+itemValue.item_netto);
                                                                    }
                                                                    itemValue.sum_item_netto = sum_netto;


                                                                let sum_tax = 0;
                                                                    if(fieldProps.fields.value[index].item_tax >=0){
                                                                        sum_tax = ((+itemValue.item_qty) * (+itemValue.item_netto)) * itemValue.item_tax;
                                                                    }
                                                                    itemValue.sum_item_tax = sum_tax

                                                                let sum_brutto = 0;
                                                                    if(fieldProps.fields.value[index].item_tax >=0 )
                                                                        sum_brutto = ((+itemValue.item_qty) * (+itemValue.item_netto)) * ( itemValue.item_tax + 1);

                                                                    itemValue.sum_item_brutto = sum_brutto
                                                                    

                                                                                    
                                                                                    // console.log("%c subFieldProps ", "color:blue; font-weight:900; background-color:#DDEE55;", 
                                                                                    // sum_qty, sum_netto, sum_qqqq , console.count('count'));

                                                                        return (
                                                                    <React.Fragment> 
                                                                        <TableRow   hover tabIndex={-1} key={index}>  
                                                                        <FormGroupContextProvider name="IteratorItem">
                                                                            <TableCell style={{ padding: 10 }} align="center">{index+1}</TableCell>  
                                                                            <TableCell colSpan={2} >  
                                                                                <Field name={`${sourceSalesItemList}[${index}].item_name`}
                                                                                        render={({input}) => (
                                                                                            <TextField  label="Nazwa" name={input.name} value={input.value} 
                                                                                            onChange={input.onChange}  variant="outlined"   InputLabelProps={{ shrink: true }}  />
                                                                                        )}  type="text" />
                                                                            </TableCell>  
                                                                            <TableCell align="center">  
                                                                                <Field
                                                                                    name={`${sourceSalesItemList}[${index}].item_type`}
                                                                                    component="SelectInput" >
                                                                                        <SelectInput    label="Wybierz" variant ="outlined" source={`${sourceSalesItemList}[${index}].item_type`} 
                                                                                                        choices={propsSalesTable.dataSelectFieldSalesItem.item_type}
                                                                                                        className={ classes.helperTextIsNONE } />
                                                                                </Field>
                                                                            </TableCell>  
                                                                            <TableCell align="center">  
                                                                                <Field  name={`${sourceSalesItemList}[${index}].item_qty`}
                                                                                        type="number" component="NumberInput" >
                                                                                    <NumberInput    label="Ilość" variant ="outlined" source={`${sourceSalesItemList}[${index}].item_qty`} 
                                                                                                    // name={[...props.input.name]}
                                                                                                    // value={[...props.input.value]}
                                                                                                    // onChange={[...props.input.onChange]} SumSalesItems
                                                                                                    className={ classes.helperTextIsNONE }   style={{ maxWidth: 90 }} />
                                                                                </Field>
                                                                            </TableCell>  
                                                                            <TableCell align="center" >
                                                                                <Field  name={`${sourceSalesItemList}[${index}].item_netto`}
                                                                                    component="NumberInput" >
                                                                                        <NumberInput    label="Kwota netto" variant ="outlined"  source={`${sourceSalesItemList}[${index}].item_netto`} 
                                                                                                        className={ classes.helperTextIsNONE } />
                                                                                </Field>
                                                                            </TableCell>   
                                                                            <TableCell align="left">  
                                                                                <Field  name={`${sourceSalesItemList}[${index}].item_tax`} 
                                                                                        component="SelectInput" >
                                                                                            <SelectInput    label="VAT" variant ="outlined" source={`${sourceSalesItemList}[${index}].item_tax`} 
                                                                                                            choices={propsSalesTable.dataSelectFieldSalesItem.item_tax}
                                                                                                            className={ classes.helperTextIsNONE } style={{ maxWidth: 40 }}   />
                                                                                </Field>
                                                                            </TableCell>  
                                                                    {/*sumNETTO ->tabCELL=>sum_item */}

                                                                            <TableCell align="center">{sum_netto}</TableCell>
                                                                            <TableCell align="center">  {sum_tax} </TableCell>  
                                                                            <TableCell align="center">    {sum_brutto}
                                                                                                        {/* <BoxNumberInput  mt="-0.75em" ml="0.5em" label="Wartość brutto" source={`${sourceSalesItemList}[${index}].sum_item_brutto`}  variant="standard"   mr="0.5em" 
                                                                                                                                        className={ classes.helperTextIsNONE }  /> */}
                                                                             </TableCell>  
                                                                        {/*sumBRUTTO <-tabCELL=>sum_item */}
                                                                            <TableCell colSpan={3} align="center" >  
                                                                                <Button 
                                                                                    style={{ textAlign: 'center' }} 
                                                                                    color="error"
                                                                                    type="button" 
                                                                                    // style={{ marginTop: '-5%' }}
                                                                                    onClick={() => fieldProps.fields.remove(index)}>
                                                                                    <Delete style={{ color: 'red' }} />
                                                                                </Button>
                                                                            </TableCell>  
                                                                
                                                                        </FormGroupContextProvider>
                                                                        </TableRow>  
                                                                  </React.Fragment> 
                                                                                                            )

                                                                }
                                                                )}
                                                        </TableBody>  
                                            {/* X <-subCONTAINER=> sales_item in TableRow--iteratorForm */}
                                                    </Table>

                                                    <capition>
                                                            <Grid container  formClassName={classes.gridSimpleForm} >
                                                            {/*>>  ->subCONTAINER=> addButton in TableRow--capition */}
                                                                <Grid item xs={12}> 
                                                                    <div>
                                                                            <Button
                                                                                type="button"
                                                                                onClick={
                                                                                    () => fieldProps.fields.push( propsSalesTable.dataInitOnClickAddItem )}
                                                                                
                                                                                    color="secondary"
                                                                                variant="contained"
                                                                                style={{ marginTop: '16px', marginLeft: '16px' }}
                                                                                >
                                                                                <Add />
                                                                            </Button>
                                                                    </div>
                                                                </Grid>
                                                            {/* X <-subCONTAINER=> addButton in TableRow--capition */}
                                                            </Grid>
                                                        </capition>
                                                    <TableContainer>
                                                {/*>> ->CONTAINER=> additional options on the invoice */}
                                                            <Grid container  formClassName={classes.gridSimpleForm} >
                                                                <Grid item xs={12} sm={6}>
                                                        {/*>> ->subCONTAINER=> AdditionalOptions in Table */}
                                                                    <AdditionalOptions />

                                                        {/* X <-subCONTAINER=> AdditionalOptions in Table */}
                                                                </Grid >
                                                                <Grid item xs={12} sm={6}> 
                                                        {/*>> ->subCONTAINER=> SubTableSumSales in Table */}
                                                                    <SumSalesItems   dataArray={propsSalesTable.fields.value}    /> 
                                                        {/* X <-subCONTAINER=> SubTableSumSales in Table*/}
                                                                </Grid>
                                                            </Grid >
                                                {/* X <-subCONTAINER=> additional options on the invoice */}
                                                    </TableContainer>
                                        </React.Fragment> 
                                                    );
                                                }
                                            }
                                        </FieldArray>
                                        );
                                    } 
                                }
                            </FieldArray>
                        );
};
export default SubArrIteratorItem;