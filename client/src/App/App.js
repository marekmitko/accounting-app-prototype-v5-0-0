import * as React from 'react'
import { Admin, Resource } from 'react-admin'
import restProvider from 'ra-data-simple-rest'
import InvoiceList from '../components/InvoiceList/InvoiceList'
import InvoiceCreate from '../components/InvoiceList/InvoiceCreate'
import InvoiceEdit from '../components/InvoiceList/InvoiceEdit'
import {InvoiceListIcon} from '../components/InvoiceList/InvoiceList'
import {AddInvoiceIcon} from '../components/InvoiceList/InvoiceCreate'

import ClientList from '../components/ClientList/ClientList'
import ClientCreate from '../components/ClientList/ClientCreate'
import ClientEdit from '../components/ClientList/ClientEdit'
import {ClientListIcon} from '../components/ClientList/ClientList'
import {AddClientIcon} from '../components/ClientList/ClientCreate'
// import InvoiceForm1 from "../components/InvFinalFormEx/InvoiceForm";

// import visitors from '../components/NewInvoice/visitors/index.ts';
// import ItemProduct from '../components/InvoiceList/InvoiceForm/components/ItemProductList';
import homepage from "../components/DynamicInvoiceList/homepage";
import tags from '../components/InvoiceList/InvoiceForm/components/tags';
import BuyerCreateAuto from '../components/InvoiceList/InvoiceForm/components/invbuyer/InvDBBuyerCreate.js';

import { ListGuesser, EditGuesser } from 'react-admin';

function App() {
    return (
        <Admin dataProvider={restProvider('http://localhost:3000')}>

            <Resource name="homepage" {...homepage} />
            <Resource name='newbuyer' create={BuyerCreateAuto} list={BuyerCreateAuto} />

            {/* <Resource name="dvinvfinalform" {...ItemProduct} /> */}
            <Resource name="dvinvfinalform" {...tags} />
            <Resource
                name='dbinvoiceslist/create'
                options={{ label: 'Wystaw Fakturę' }} 
                list={InvoiceCreate}
                create={InvoiceCreate}
                edit={InvoiceEdit}
                icon={AddInvoiceIcon}
            />
            <Resource
                name='dbinvoiceslist'
                options={{ label: 'Lista Faktur' }} 
                list={InvoiceList}
                create={InvoiceCreate}
                edit={InvoiceEdit}
                icon={InvoiceListIcon}
            />
            <Resource
                name='dbclientlist'
                label="Kontrahenci"
                options={{ label: 'Kontrahenci' }} 
                list={ClientList}
                create={ClientCreate}
                edit={ClientEdit}
                icon={ClientListIcon}
            />
            <Resource
                name='dbclientlist/create'
                label="Nowy Kontrahent"
                options={{ label: 'Nowy Kontrahent' }} 
                list={ClientCreate}
                create={ClientCreate}
                edit={ClientEdit}
                icon={AddClientIcon}
                />

            {/* <Resource name="customers" {...visitors} /> */}
            
            {/* <Resource
                // name='invoices-db'
                options={{ label: 'Wystaw Fakturę' }} 
                list={InvoiceList}
                create={InvoiceCreate}
                edit={InvoiceEdit}
            /> */}
        </Admin>
    );
}

export default App
