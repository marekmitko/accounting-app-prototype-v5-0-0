import * as React from 'react'
import { Admin, Resource, ListGuesser } from 'react-admin'
import restProvider from 'ra-data-simple-rest'
import clients from '../pages/clients'
import homepage from '../components/NewInvoiceList/homepage'

// import { Route } from "react-router-dom";
// import { UserList } from '../xprofile/users';
// import UserIcon from "@material-ui/icons/Group";




function App() {
    return (
        <Admin 
            dataProvider={restProvider('http://localhost:3000')}
        >
            
    {/*userPROFILE ->db.json=>userProfile*/}
            <Resource name="userProfile" />
    {/*userPROFILE <-db.json=>userProfile*/}
    {/*pageINVOICEs ->db.json=>issuedInvoices_list*/}
            <Resource options={{ label: 'Lista FV' }} name="issuedInvoices_list" {...homepage} />
            <Resource options={{ label: 'Wystaw FV' }}  name="issuedInvoices_list/create" {...homepage} />
    {/*pageINVOICE <-db.json=>issuedInvoices_list*/}
    {/*pagePARTNERs ->db.json=>tradePartners_list*/}
            <Resource options={{ label: 'Kontrahenci' }} name='tradePartners_list' label="Kontrahenci"  {...clients} />
            <Resource options={{ label: 'Nowy Kontrahent' }}  name='tradePartners_list/create'  label="Nowy Kontrahent"  
                list={clients.create}
                edit={clients.edit}
                icon={clients.icon}
            />
    {/*pagePARTNER <-db.json=>tradePartners_list*/}
        </Admin>
    );
}

export default App