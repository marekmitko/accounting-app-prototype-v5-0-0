import React from 'react'
import { Admin, Resource } from 'react-admin'
import restProvider from 'ra-data-simple-rest'
import InvoiceList from '../components/InvoiceList/InvoicesList'
import InvoiceCreate from '../components/InvoiceList/InvoiceCreate'
import InvoiceEdit from '../components/InvoiceList/InvoiceEdit'

import ClientList from '../components/ClientList/ClientList'
import ClientCreate from '../components/ClientList/ClientCreate'
import ClientEdit from '../components/ClientList/ClientEdit'

import { ListGuesser } from 'react-admin';

function App() {
  return (
    <Admin dataProvider={restProvider('http://localhost:3000')}>
      <Resource name="invoices-db" list={ListGuesser} />
      <Resource
        name='invoices-db'
        list={InvoiceList}
        create={InvoiceCreate}
        edit={InvoiceEdit}
      />
      <Resource
        name='clients-db'
        list={ClientList}
        create={ClientCreate}
        edit={ClientEdit}
      />
    </Admin>
  )
}

export default App
