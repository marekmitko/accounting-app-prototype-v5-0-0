import React from 'react'
import { Create, SimpleForm, TextInput, ArrayInput, SimpleFormIterator, } from 'react-admin'

import PostAddIcon from '@material-ui/icons/PostAdd';
import InvoiceDataCreate from './components/InvoiceDataCreate.js';
import InvoiceItemListHeader from './components/InvoiceItemListHeader.js';
import InvoiceItemList from './components/invproduct/InvoiceItemCreate.js';
import InvoiceDataBuyer from './components/invbuyer/InvoiceDataBuyer.js';
// import ClientCreate from '../../../components/ClientList/ClientCreate.js'



export const AddInvoiceIcon = PostAddIcon;


const InvoiceForm = (props) => {
  return ( <React.Fragment>
        <h1>Masło</h1>

        <InvoiceDataCreate />
        <InvoiceDataBuyer />

        {/* <ClientCreate /> */}

    </React.Fragment>
  )
}

export default InvoiceForm
