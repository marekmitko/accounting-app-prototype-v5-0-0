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
} from 'react-admin';
import InvoiceItemCreate from '../invproduct/InvoiceItemCreate.js';



const BuyerCreateAuto = (props) => {
    const notify = useNotify();
    const refresh = useRefresh();
    const redirect = useRedirect();
    
    const onSuccess = ({ data }) => {
        notify(`New Buyer created `);
        
        // redirect(`/rentals?filter=%7B"id"%3A"${data.id}"%7D`);
        refresh();
    };

    const [customers, setCustomers] = useState([]);
    const { data: customer } = useQuery({
      type: 'getList',
      resource: 'dbclientlist',
      payload: {
        pagination: { page: 1, perPage: 600 },
        sort: { field: 'email', order: 'ASC' },
        filter: {},
      },
    });

    const [films, setFilms] = useState([]);
    const { data: film } = useQuery({
    type: 'getList',
    resource: 'dbclientlist',
    payload: {
      pagination: { page: 1, perPage: 1000 },
      sort: { field: 'company', order: 'ASC' },
      filter: {},
    },
  });


  useEffect(() => {
    if (film) setFilms(film.map((d) => ({ id: d.title, name: d.title })));
    if (customer)
      setCustomers(customer.map((d) => ({ id: d.company, name: d.company })));
  }, [film, customer]);

return (
    <Create {...props} title='Create new Customer' onSuccess={onSuccess}>
        <SimpleForm>
            {/* this works */}
            <NumberInput source="nb_views" />
            <SelectInput label="NAZWA" source='company' choices={customers} />
            <TextInput label="NAZWA FIRMY" source="company" />
            <TextInput label="ADRES EMAIL" type="email" source="email" />


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