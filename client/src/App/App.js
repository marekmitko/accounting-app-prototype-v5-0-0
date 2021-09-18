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
import AddInvCreate from "../components/NewInvoiceList/InvoiceDynamicForm"



function App() {
 
    return (
        <Admin 
            dataProvider={restProvider('http://localhost:3000')}
        >
            
            <Resource name="userProfile"/>
  
{/*pagesINVOICE ->db.json=>issuedInvoices_list*/}
            <Resource options={{ label: 'Lista FV' }} name="issuedInvoices_list" {...homepage} />
            <Resource options={{ label: 'Wystaw FV' }}  name="issuedInvoices_list/create" {...homepage} />
{/*pageINVOICEs <-db.json=>issuedInvoices_list*/}

{/*pagePARTNER ->db.json=>tradePartners_list*/}
            <Resource options={{ label: 'Kontrahenci' }} name='tradePartners_list' label="Kontrahenci"  {...clients} />
            <Resource options={{ label: 'Nowy Kontrahent' }}  name='tradePartners_list/create'  label="Nowy Kontrahent"  
                list={clients.create}
                edit={clients.edit}
                icon={clients.icon}
           
                />
{/*pagePARTNERs <-db.json=>tradePartners_list*/}
        </Admin>
    );
}

export default App