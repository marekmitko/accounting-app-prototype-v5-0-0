import * as React from 'react'
import { 
        Admin, 
        Resource,
 } from 'react-admin'
import restProvider from 'ra-data-simple-rest'

import clients from '../pages/clients'
// import NewInvoiceList from "../components/NewInvoiceList/homepage";
import homepage from '../components/NewInvoiceList/homepage'

// import { Route } from "react-router-dom";
// import { UserList } from '../xprofile/users';
// import UserIcon from "@material-ui/icons/Group";




function App() {
 
    return (
        <Admin 
            dataProvider={restProvider('http://localhost:3000')}
        >
            {/* <Resource name="profile"  />
            <Resource name="datauser"  /> */}
            <Resource name="userProfile"/>

            <Resource options={{ label: '*Lista FV' }} name="homepage" {...homepage} />
            <Resource options={{ label: '*Wystaw FV' }}  name="homepage/create" {...homepage}/>
            {/* <Resource options={{ label: '_Lista FV_' }}  name="NewInvoiceList" {...homepage} /> */}

    
            <Resource options={{ label: 'Kontrahenci' }} name='dbclientlist' label="Kontrahenci"  {...clients} />
            <Resource options={{ label: 'Nowy Kontrahent' }} name='dbclientlist/create' label="Nowy Kontrahent"  
                list={clients.create}
                edit={clients.edit}
                icon={clients.icon}
            />

        </Admin>
    );
}

export default App