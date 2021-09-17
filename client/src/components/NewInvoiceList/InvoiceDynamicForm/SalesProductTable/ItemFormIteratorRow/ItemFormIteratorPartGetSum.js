import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';

import TableRow from '@material-ui/core/TableRow';
import TableBody     from '@material-ui/core/TableBody';

import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';


import  { TextInput, NumberInput, SelectInput,
     FormDataConsumer, FunctionField, ArrayInput,
      SimpleFormIterator, TextField, NumberField,
      FormGroupContextProvider, useFormGroup, useReferenceArrayInputController,
    useRecordContext, useResourceContext,
     }  from 'react-admin';


import { useForm, useFormState } from 'react-final-form';



 const ItemFormIteratorPartGetSum = (index, fieldProps ) => {


    return(

<TableBody  >  

               
{fieldProps.fields.map((question, index) => {
    // console.log(question);
    // console.log(fieldProps.fields);
      
    return (
        
        <TableRow className="IteratorRowProduct" hover tabIndex={-1} key={index}>  
               {/* <TableCell>              
            <NumberInput  label="Question ID" source={`questions[${index}].id`} />
            </TableCell>   */}
            <TableCell align="center"   >
            {index+1}
                {/* <DragHandleIcon />   */}
            </TableCell>  
            <TableCell colSpan={2} >  
            <TextInput  label="Nazwa"  variant="outlined" source={`questions[${index}].item_name`} fullWidth />
            </TableCell>  
            <TableCell align="left">  
                {/* <SelectInput  label="Wybierz Typ" variant ="outlined" source={`questions[${index}].item_type`} choices={item_type}/> */}
            </TableCell>  
            <TableCell   align="left">  
                <NumberInput    label="Ilość" variant ="outlined" source={`questions[${index}].item_qty`} />
            </TableCell>  
            <TableCell  align="left" >
                    <NumberInput  label="Kwota netto" variant ="outlined"  source={`questions[${index}].item_netto`} />  
            </TableCell >
            <TableCell   align="left">  
                {/* <SelectInput   label="Stawka VAT" variant ="outlined" source={`questions[${index}].item_tax`} choices={item_tax}/> */}
            </TableCell>  

            <FormDataConsumer  subscription={{ values: true }} >
            {/* <myFormDataConsumeSanitized {...rest} source={question} subscription={{ values: true }}> */}
{({
formData, // The whole form data
scopedFormData, // The data for this item of the ArrayInput
getSource, // A function to get the valid source inside an ArrayInput
...rest
}) => {         
if(formData["questions"][index]["item_netto"] !== 'undefined' ) {
formData["questions"][index]["sum_item_netto"] = formData["questions"][index]["item_netto"] * formData["questions"][index]["item_qty"];
return ( 
    <TableCell   align="left">  
        <NumberInput  initialValues={formData["questions"][index]["sum_item_netto"]}  source={`questions[${index}].sum_item_netto`} label="Wartość Netto"   {...rest} disabled />
    </TableCell>  
); 
}   else {
return(
    <TableCell  align="left">
            <NumberInput  label="Wartość Netto" source={`questions[${index}].sum_item_netto`}  disabled  />
        </TableCell>
    );
}            
}} 

</FormDataConsumer>


{/* <ItemFormIteratorPartGetSum index={index} {...props} /> */}

          
         
            <TableCell  align="left">  
                <TextInput   variant ="outlined"  label="Wartość VAT" source={`questions[${index}].sumTax`} disabled/>
            </TableCell>  
            <TableCell  align="left">  
                <NumberInput   variant ="outlined"  defaultValue={question.qty}  label="Wartość Brutto" source={`questions[${index}].sumBrutto`} disabled />
            </TableCell>  
            
            <TableCell  align="right">  
                <Button style={{ color: 'red' }} type="button" onClick={() => fieldProps.fields.remove(index)}>
                    X
                </Button>
            </TableCell>  
        </TableRow>  
        
    )
})}


</TableBody>
  );
                };

export default  ItemFormIteratorPartGetSum;