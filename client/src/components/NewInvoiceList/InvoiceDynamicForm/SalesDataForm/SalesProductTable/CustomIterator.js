import React from 'react';
import { FieldArray } from 'react-final-form-arrays';
import { TextInput, NumberInput } from 'react-admin';
import Add from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';

import Table from '@material-ui/core/Table';  
import TableBody from '@material-ui/core/TableBody';  
import TableCell from '@material-ui/core/TableCell';  
import TableContainer from '@material-ui/core/TableContainer';  
import TableRow from '@material-ui/core/TableRow';  
import DragHandleIcon from '@material-ui/icons/DragHandle';  

const CustomIterator = ({ record }) => {
    return (
        <FieldArray name="questions">
            {(fieldProps) => {
                return (
                    <React.Fragment>
                        <TableContainer>  
                            <Table aria-label="questions list">  
                                <TableBody>  
                                    {fieldProps.fields.map((question, index) => {
                                        return (
                                            <TableRow hover tabIndex={-1} key={index}>  
                                                <TableCell>  
                                                    <DragHandleIcon />  
                                                </TableCell>  
                                                <TableCell align="left">  
                                                    <NumberInput helperText="Unique id" label="Question ID" source={`questions[${index}].id`} />
                                                </TableCell>  
                                                <TableCell align="left">  
                                                    <TextInput helperText="i.e. How do you do?" label="Question Text" source={`questions[${index}].text`} />
                                                </TableCell>  
                                                <TableCell align="right">  
                                                    <Button style={{ color: 'red' }} type="button" onClick={() => fieldProps.fields.remove(index)}>
                                                        Remove
                                                    </Button>
                                                </TableCell>  
                                            </TableRow>  
                                        )
                                    })}
                                </TableBody>  
                            </Table>  
                            <Button
                                type="button"
                                onClick={() => fieldProps.fields.push({ id: '', question: '' })}
                                color="secondary"
                                variant="contained"
                                style={{ marginTop: '16px' }}
                            >
                                <Add />
                            </Button>
                        </TableContainer>  
                    </React.Fragment>
                )
            }
            }
        </FieldArray>
    )
}


export default CustomIterator;