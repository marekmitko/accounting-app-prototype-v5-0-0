
import * as React from "react";
import { useGetOne, Loading, Error } from 'react-admin';

const FetchRelated = ({ record, reference, source, children }) => {
    const { data, loading, error } = useGetOne(reference, record[source]);
    if (loading) return <Loading />;
    if (error) return <Error />;
    if (!data) return null;

    // this is the only way I found to be able to populate the fields in the form with the address data
    record[reference] = data;

    return <React.Fragment>{children}</React.Fragment>;
};

// ...
// import { Edit, SimpleForm, TextInput } from 'react-admin';

// ...
// const UserEdit = props => (
//  <Edit {...props}>
//   <SimpleForm>
//    <FetchRelated reference="address" source="address_id">
//     <TextInput source="address.postcode" label="Post Code" />
//    </FetchRelated>
//   </SimpleForm>
//  </Edit>
// );

export default FetchRelated;