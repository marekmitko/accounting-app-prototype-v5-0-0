import React from 'react';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import SumSalesItemsHeader from './SumSalesItemsHeader';


export default function SumSalesItems ({ total_sum_sales, form, record, resource, dataArray, ...fieldProps }) {

    function ccyFormat(num) { return `${num.toFixed(2)}`; }
        console.log("dataArray", dataArray);
        // console.log('sum_items_netto', total_sum_sales.sum_items_netto );

    // const dataSalesList =  dataArray.subSalesTable;
    // // const dataSalesList =  dataArray;
    // const a = [1,2];
    

    let total_netto = 0;
    for(let i=0; i<a.length; i++){
        total_netto+= ((+dataSalesList[i].item_qty)*(+dataSalesList[i].item_netto));
        // do poprawy prze funkcje set !!!
        total_sum_sales.sum_items_netto = total_netto;
    }

    let total_tax = 0;
    for(let i=0; i<a.length && dataSalesList[i].item_tax >= 0; i++){
        total_tax+= (((+dataSalesList[i].item_qty)*(+dataSalesList[i].item_netto))*(dataSalesList[i].item_tax));
        // do poprawy prze
        total_sum_sales.sum_items_tax = total_tax;
    }
    
    let total_brutto = 0;
    for(let i=0; i<a.length && dataSalesList[i].item_tax >= 0 && dataSalesList[i].item_netto; i++){
        total_brutto+= (((+dataSalesList[i].item_qty)*(+dataSalesList[i].item_netto))*(dataSalesList[i].item_tax + 1));
        // do poprawy prze funkcje set 
        total_sum_sales.sum_items_brutto = total_brutto;
    }



    return (
        <Table>
            <SumSalesItemsHeader/>
            <TableBody>
                <TableRow align="right">
                    <TableCell >Total</TableCell>
                    <TableCell align="center"><strong>{total_netto}</strong></TableCell>
                    <TableCell  align="center"><strong>{total_tax}</strong></TableCell>
                    <TableCell  align="center"><strong>{total_brutto}</strong></TableCell>
                    <TableCell/>
                </TableRow>
                <TableRow align="right">
                    <TableCell >Tax</TableCell>
                    <TableCell align="center"></TableCell>
                    <TableCell align="center"></TableCell>
                    <TableCell align="center"></TableCell>
                    <TableCell   />
                </TableRow>
                <TableRow align="right">
                    <TableCell >Total</TableCell>
                    <TableCell align="center"></TableCell>
                    <TableCell align="center"></TableCell>
                    <TableCell align="center"></TableCell> 
                    <TableCell    />
                </TableRow>
            </TableBody>
        </Table>
    );
}





// const {change} = useForm();
// const { values: { test_first_input }} = useFormState({ subscription: { values: true } });

// useMemo(() => {
//     change('test_second_input', test_first_input / 10);
// }, [change, test_first_input]);


//   return (
//       <Table>
//           <SumSalesItemsHeader/>
//           <TableBody>
//               <TableRow>
//                   <NumberInput  source="test_first_input"/>
//                   <NumberInput source="test_second_input"/>
//               </TableRow>

// function sumQty(data){
//     var sumBro = 0; 
//     if(data){
//         sumBro = data.reduce(( accumulator, obj ) => {
//             return accumulator + (obj['item_qty'] || 0 ) }, 0 )
//             console.log("sumBro", sumBro );
//         } else {
//             return sumBro};
//     }



{/* <FormDataConsumer  subscription={{ values: true }} >
                            {({ formData, ...rest  }) => { 
                                // console.log('fromData', formData);
                                if(formData.sales_list && formData.sales_list.length > 0 ) {

                                    var sumBrutto = formData.sales_list.reduce(( accumulator, obj ) => {
                                                    return accumulator + (obj['sum_item_brutto'] || 0 ) }, 0 )
                                            // console.log("sumBrutto", sumBrutto );
                                    }
                                }
                            } 
                        </FormDataConsumer> */}