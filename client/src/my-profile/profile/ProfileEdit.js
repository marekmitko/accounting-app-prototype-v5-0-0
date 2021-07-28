import React from 'react';
import { Edit, TextInput, SimpleForm, required } from 'react-admin';

const ProfileEdit = ( { staticContext, ...props } ) => {
    return (
        // <Edit
        //     /*
        //         As we are not coming for a route generated by a Resource component,
        //         we have to provide the id ourselves.
        //         As there is only one config for the current user, we decided to
        //         hardcode it here
        //     */
        //     id="MyProfile"
        //     /*
        //         For the same reason, we need to provide the resource and basePath props
        //         which are required by the Edit component
        //     */
        //     resource="profile.MyProfile"
        //     basePath="/my-profile"
        //     redirect={false}
        //     title="My profile"
        //     {...props}
        // >
        <Edit {...props}title="My Profile" resource="profile" basePath="/my-profile" redirect={false}  >
            <SimpleForm>
                {/* <TextInput source="nickname" validate={required()} /> */}
                <TextInput source="nickname"/>
                <TextInput source="company"  />
            </SimpleForm>
        </Edit>
    );
};

export default ProfileEdit;
