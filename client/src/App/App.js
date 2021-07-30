import * as React from 'react'
import { Admin, Resource } from 'react-admin'
import restProvider from 'ra-data-simple-rest'

import clients from '../pages/clients'
import NewInvoiceList from "../components/NewInvoiceList/homepage";
import homepage from '../components/NewInvoiceList/homepage'

import { Route } from "react-router-dom";
// import { UserList } from '../xprofile/users';
import UserIcon from "@material-ui/icons/Group";




function App() {
    
    // const renderProfileEditor = (routeProps) => {
    //     let id = 'MyProfile';  
    //     // get your id howsoever, e.g. from localStorage 
    //     return (
    //     <profile.edit ProfileEdit id={id} {...routeProps} /> ) };

    return (
        <Admin 
            dataProvider={restProvider('http://localhost:3000')}
        >
            <Resource name="profile"  />
            <Resource name="userProfile"/>

            <Resource name="homepage" {...homepage} />
            <Resource options={{ label: '*Wystaw FV' }}  name="NewInvoiceList/create" list={NewInvoiceList.create} />
            <Resource options={{ label: '_Lista FV_' }}  name="NewInvoiceList" {...NewInvoiceList} />

            <Resource
                name='dbinvoiceslist'
                // options={{ label: 'Lista Faktur' }} 
                // list={InvoiceList}
                // create={InvoiceCreate}
                // edit={InvoiceEdit}
                // icon={InvoiceListIcon}
            />
            <Resource
                name='dbclientlist'
                label="Kontrahenci"
                options={{ label: 'Kontrahenci' }} 
                {...clients}
            />
            <Resource
                name='dbclientlist/create'
                label="Nowy Kontrahent"
                options={{ label: 'Nowy Kontrahent' }} 
                list={clients.create}
                edit={clients.edit}
                icon={clients.icon}
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
