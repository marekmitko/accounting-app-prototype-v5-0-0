import * as React from 'react'
import { Admin, Resource } from 'react-admin'
import restProvider from 'ra-data-simple-rest'
import InvoiceList from '../bin/InvoiceList/InvoiceList'
import InvoiceCreate from '../bin/InvoiceList/InvoiceCreate'
import InvoiceEdit from '../bin/InvoiceList/InvoiceEdit'
import {InvoiceListIcon} from '../bin/InvoiceList/InvoiceList'
import {AddInvoiceIcon} from '../bin/InvoiceList/InvoiceCreate'

import ClientList from '../components/ClientList/ClientList'
import ClientCreate from '../components/ClientList/ClientCreate'
import ClientEdit from '../components/ClientList/ClientEdit'
import {ClientListIcon} from '../components/ClientList/ClientList'
import {AddClientIcon} from '../components/ClientList/ClientCreate'


import tags from '../bin/InvoiceList/InvoiceForm/components/tags';
import BuyerCreateAuto from '../bin/InvoiceList/InvoiceForm/components/invbuyer/InvDBBuyerCreate.js';

import NewInvoiceList from "../components/NewInvoiceList";

// import { ListGuesser, EditGuesser } from 'react-admin';

// import dataProvider from "./addUserProfileOverrides";

import { Route } from "react-router";

import MyLayout from "../userBar/MyLayout";
// import { ProfileEdit } from '../profile/profile';
import { UserList } from '../profile/users';
import UserIcon from "@material-ui/icons/Group";

import { ProfileEdit } from "../v2profile/profile";
import addUserProfileOverrides from "../v2profile/dataProvider";
import authProvider from "../v2profile/authProvider";


function App() {
    return (
        <Admin 
            // dataProvider={restProvider('http://localhost:3000')}
            dataProvider={addUserProfileOverrides}
            // authProvider={authProvider}
            customRoutes={[
            <Route
                key="my-profile"
                path="/my-profile"
                render={() => <ProfileEdit />}
            />
            ]}
            layout={MyLayout}
        >


            <Resource name="users" icon={UserIcon} list={UserList} />
            <Resource name="userProfile"/>
            <Resource
                name='datauser'
                list={ProfileEdit}
                edit={ProfileEdit}

            />
             <Resource name="profile" />

            {/* <Resource name="homepage" {...homepage} /> */}
            <Resource options={{ label: '*Wystaw FV' }}  name="NewInvoiceList/create" list={NewInvoiceList.create} />
            <Resource options={{ label: '*Lista FV' }}  name="NewInvoiceList" {...NewInvoiceList} />
{/*testowe autouzupełnianie */}
            {/* <Resource name='newbuyer' create={BuyerCreateAuto} list={BuyerCreateAuto} /> */}

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
