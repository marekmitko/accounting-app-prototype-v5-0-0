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
  
{/*pagesINVOICE ->db.json=>issuedInvoices_list*/}
            <Resource options={{ label: 'Wystaw FV' }}  name="issuedInvoices_list/create" 
                    list={homepage.create}
                    edit={homepage.edit}
                    />
            <Resource options={{ label: 'Lista FV' }} name="issuedInvoices_list" {...homepage} />
{/*pageINVOICEs <-db.json=>issuedInvoices_list*/}

{/*pagePARTNER ->db.json=>tradePartners_list*/}
            <Resource options={{ label: 'Nowy Kontrahent' }} name='tradePartners_list/create' label="Nowy Kontrahent"  
                list={clients.create}
                edit={clients.edit}
                icon={clients.icon}
                />
            <Resource options={{ label: 'Kontrahenci' }} name='tradePartners_list' label="Kontrahenci"  {...clients} />
{/*pagePARTNERs <-db.json=>tradePartners_list*/}
        </Admin>
    );
}

export default App