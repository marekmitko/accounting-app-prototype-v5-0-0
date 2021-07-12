import React, { useState, useEffect } from 'react';
import {
  Create,
  SimpleForm,
  DateTimeInput,
  SelectInput,
  useNotify,
  useRefresh,
  useRedirect,
  useQuery,
  TextInput,
  NumberInput,
  ReferenceInput,
} from 'react-admin';
import InvoiceItemCreate from '../invproduct/InvoiceItemCreate.js';

const BuyerCreateAuto = (props) => {
    const notify = useNotify();
    const refresh = useRefresh();
    const redirect = useRedirect();
    
    const onSuccess = ({ data }) => {
        notify(`New Buyer created `);
        // doczytaj o redirect
        // redirect(`/rentals?filter=%7B"id"%3A"${data.id}"%7D`);
        refresh();
    };

    
    const [customers, setCustomers] = useState([]);
    const { data: customer } = useQuery({
      type: 'getList',
      resource: 'dbclientlist',
      payload: {
          pagination: { page: 1, perPage: 600 },
          sort: { field: 'company', order: 'ASC' },
          filter: {},
        },
    });
  
    const [emails, setEmails] = useState([]);
    const { data: email } = useQuery({
        type: 'getList',
      resource: 'dbclientlist',
      payload: {
          pagination: { page: 1, perPage: 1000 },
        sort: { field: 'email', order: 'ASC' },
        filter: {},
    },
});



// useEffect(() => {
//     if (customer)
//     setCustomers(customer.map((d) => ({ id: d.company, name: d.company })));
//     if (email) setEmails(email.map((d) => ({ id: d.email, name: d.email })));
// }, [customer, email]);

const [userData, setUserData] = useState({});

// const addressUser = () => {Object.fromEntries(userData.address.map((team) => [team.id, team]))};


useEffect(() => {
    // GET request using fetch inside useEffect React hook
    fetch('http://localhost:3000//datauser/User1eeb58bsd')
    .then(response => response.json())
    .then(data => setUserData(data));
    
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
}, []);

return (
    <Create {...props} title='Create new Customer' onSuccess={onSuccess}  >
        <SimpleForm>
            {/* this works */}
            <NumberInput source="nb_views" />
            <SelectInput label="NAZWA" source='company' choices={customers} />
            <TextInput label="NAZWA FIRMY" source="userData.company" />
            <SelectInput label="EMAIL" type="email" source="email" choices={emails} disabled/>
            <TextInput label="EMAIL" type="email" source="email"  />

                <TextInput label="IMIĘ I NAZWISKO"source="fullname" />
                <TextInput label="ADRES"source="address.street" />
                <NumberInput label="MVA" source="MVA" />
                <NumberInput label="NUMER TELEFONU"source="telephoneNumber" />
 
            
        <InvoiceItemCreate />
        </SimpleForm>

    </Create>
)

};

export default BuyerCreateAuto;