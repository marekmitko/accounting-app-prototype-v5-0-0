import React from 'react';
// import { FieldArray } from 'react-final-form-arrays';
import { ArrayInput } from 'react-admin';

import CustomIterator from './CustomIterator';
import SpanningTable from '../SumSpanningTable';

const SalesProductTable = props => (
  
    <ArrayInput label="Lista produktów" source="questions">
        <CustomIterator />
       
    </ArrayInput>
);

export default SalesProductTable; 

