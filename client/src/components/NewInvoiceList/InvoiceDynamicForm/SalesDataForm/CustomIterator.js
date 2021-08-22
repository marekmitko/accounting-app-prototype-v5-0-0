import React from 'react';
import { FieldArray } from 'react-final-form-arrays';
import { TextInput, NumberInput } from 'react-admin';
import Add from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';

import Table from '@material-ui/core/Table'; // new
import TableBody from '@material-ui/core/TableBody'; // new
import TableCell from '@material-ui/core/TableCell'; // new
import TableContainer from '@material-ui/core/TableContainer'; // new
import TableRow from '@material-ui/core/TableRow'; // new
import DragHandleIcon from '@material-ui/icons/DragHandle'; // new

const CustomIterator = ({ record }) => {
   return (
       <FieldArray name="questions">
           {(fieldProps) => {
               return (
                   <React.Fragment>
                       <TableContainer> // new
                           <Table aria-label="questions list"> // new
                               <TableBody> // new
                                   {fieldProps.fields.map((question, index) => {
                                       return (
                                           <TableRow hover tabIndex={-1} key={index}> // new
                                               <TableCell> // new
                                                   <DragHandleIcon /> // new
                                               </TableCell> // new
                                               <TableCell align="left"> // new
                                                   <NumberInput helperText="Unique id" label="Question ID" source={`questions[${index}].id`} />
                                               </TableCell> // new
                                               <TableCell align="left"> // new
                                                   <TextInput helperText="i.e. How do you do?" label="Question Text" source={`questions[${index}].text`} />
                                               </TableCell> // new
                                               <TableCell align="right"> // new
                                                   <Button style={{ color: 'red' }} type="button" onClick={() => fieldProps.fields.remove(index)}>
                                                       Remove
                                                   </Button>
                                               </TableCell> // new
                                           </TableRow> // new
                                       )
                                   })}
                               </TableBody> // new
                           </Table> // new
                           <Button
                               type="button"
                               onClick={() => fieldProps.fields.push({ id: '', question: '' })}
                               color="secondary"
                               variant="contained"
                               style={{ marginTop: '16px' }}
                           >
                               <Add />
                           </Button>
                       </TableContainer> // new
                   <React.Fragment/>
               )
           }
           }
       </FieldArray>
   )
};


export default CustomIterator;