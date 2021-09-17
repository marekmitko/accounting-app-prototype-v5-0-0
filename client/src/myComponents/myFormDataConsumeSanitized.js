import * as React from "react"
import { ArrayInput, FormDataConsumer  } from 'react-admin';



const myFormDataConsumeSanitized = (props) => (
    <ArrayInput source="sales_item"  {...props} >
            <FormDataConsumer {...props} />
    </ArrayInput>
)
export default myFormDataConsumeSanitized; 

