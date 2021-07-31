import * as React from 'react';
// -import { useState, useEffect } from 'react';
import { useState, useEffect, useContext } from 'react';
// -import { useDataProvider, Loading, Error } from 'react-admin';
import { DataProviderContext, Loading, Error } from 'react-admin';

const UserProfile = ({ userId }) => {
// -   const dataProvider = useDataProvider();
    const dataProvider = useContext(DataProviderContext);
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    useEffect(() => {
        dataProvider.getOne('users', { id: userId })
        .then(response => console.log(...response))
            .then(({ data }) => {
                setUser(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            })
    }, []);

    if (loading) return <Loading />;
    if (error) return <Error />;
    if (!user) return null;

    return ( 
        <ul>
            <li>Name: {user.name}</li>
            <li>Email: {user.email}</li>
        </ul>
     );
};

export default UserProfile; 

