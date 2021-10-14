import React from 'react';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import SumSalesItemsHeader from './SumSalesItemsHeader';


export default function SumSalesItems ({dataArray}) {

    function ccyFormat(num) { return `${num.toFixed(2)}`; }

    console.log("%c dataArray ", "color:#FF5733; font-weight:900; background-color:#7F3;",  
        dataArray, console.count('count'))    //cLog dataArray => dataSalesTable for total_sum_items_list

//notE Calculation method total sum sale list items for data {...total_sum_sales}

    const dataSalesList =  dataArray.sales_items_list;
    const total_sum_sales = dataArray.total_sum_sales;

    const a = dataSalesList;
    

    let total_netto = 0;
    for(let i=0; i<a.length; i++){
        if(+dataSalesList[i].item_netto !== 0){
        total_netto+= ((+dataSalesList[i].item_qty)*(+dataSalesList[i].item_netto));
        // do poprawy prze funkcje set !!!
        total_sum_sales.sum_items_netto = total_netto;
        } else {total_netto+= 0;}
    }

    let total_tax = 0;
    for(let i=0; i<a.length && dataSalesList[i].item_tax >= 0; i++){
        // if(+dataSalesList[i].item_netto !== 0){
        total_tax+= (((+dataSalesList[i].item_qty)*(+dataSalesList[i].item_netto))*(dataSalesList[i].item_tax));
        // do poprawy prze
        total_sum_sales.sum_items_tax = total_tax;
        // } else {total_tax+= 0;}
    }
    
    let total_brutto = 0;
    for(let i=0; i<a.length && dataSalesList[i].item_tax >= 0 && dataSalesList[i].item_netto; i++){
        // if(+dataSalesList[i].item_netto !== 0){
        total_brutto+= (((+dataSalesList[i].item_qty)*(+dataSalesList[i].item_netto))*(1 + dataSalesList[i].item_tax));
        // do poprawy prze funkcje set 
        total_sum_sales.sum_items_brutto = total_brutto;
        // } else {total_brutto+= 0;}
    }


 
    //
    //  if(!Number.isNaN(fieldProps.fields.value[index].item_netto))


    return (
        <Table>
            <SumSalesItemsHeader/>
            <TableBody align="right">
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
                                if(formData.sales_items_list && formData.sales_items_list.length > 0 ) {

                                    var sumBrutto = formData.sales_items_list.reduce(( accumulator, obj ) => {
                                                    return accumulator + (obj['sum_item_brutto'] || 0 ) }, 0 )
                                            // console.log("sumBrutto", sumBrutto );
                                    }
                                }
                            } 
                        </FormDataConsumer> */}