import * as React from 'react'
import { Admin, Resource } from 'react-admin'
import restProvider from 'ra-data-simple-rest'
import InvoiceList from '../components/InvoiceList/InvoicesList'
import InvoiceCreate from '../components/InvoiceList/InvoiceCreate'
import InvoiceEdit from '../components/InvoiceList/InvoiceEdit'

import ClientList from '../components/ClientList/ClientList'
import ClientCreate from '../components/ClientList/ClientCreate'
import ClientEdit from '../components/ClientList/ClientEdit'
import {ClientListIcon} from '../components/ClientList/ClientList'

import { ListGuesser } from 'react-admin';

function App() {
  return (
    <Admin dataProvider={restProvider('http://localhost:3000')}>
      <Resource name="client-list" list={ ListGuesser } />
      <Resource name="client-list" list={ ListGuesser } />
      <Resource
        name='client-list'
        options={{ label: 'Kontrahenci' }} 
        list={ClientList}
        create={ClientCreate}
        edit={ClientEdit}
        icon={ClientListIcon}
        />
      <Resource
        name='invoices-db'
        options={{ label: 'Faktury' }} 
        list={InvoiceList}
        create={InvoiceCreate}
        edit={InvoiceEdit}

      />
    </Admin>
  )
}

export default App
