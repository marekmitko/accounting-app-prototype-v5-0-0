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

// import visitors from '../components/NewInvoice/visitors/index.ts'


import { ListGuesser } from 'react-admin';

function App() {
    return (
        <Admin dataProvider={restProvider('http://localhost:3000')}>
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
            <Resource
                name='dbinvoices'
                options={{ label: 'Faktury' }} 
                list={InvoiceList}
                create={InvoiceCreate}
                edit={InvoiceEdit}
                icon={InvoiceListIcon}
                />
            <Resource
                name='dbinvoices'
                options={{ label: 'Faktury' }} 
                list={InvoiceList}
                create={InvoiceCreate}
                edit={InvoiceEdit}
                icon={InvoiceListIcon}
                />



            {/* <Resource 
                name="invoices-db" 
                {...visitors}
            />
            <Resource
                // name='invoices-db'
                options={{ label: 'Wystaw Fakturę' }} 
                list={InvoiceList}
                create={InvoiceCreate}
                edit={InvoiceEdit}
            /> */}
        </Admin>
    )
}

export default App
