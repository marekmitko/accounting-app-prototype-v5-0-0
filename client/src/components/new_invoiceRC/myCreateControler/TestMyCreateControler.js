// import React from 'react';
// import { useCreateController, CreateContextProvider, SimpleForm, TextInput, } from 'react-admin';

// const MyCreate = props => {
//     const createControllerProps = useCreateController(props);
//     const {
//         basePath, // deduced from the location, useful for action buttons
//         defaultTitle, // the translated title based on the resource, e.g. 'Create Post'
//         record, // empty object, unless some values were passed in the location state to prefill the form
//         redirect, // the default redirection route. Defaults to 'edit', unless the resource has no edit view, in which case it's 'list'
//         resource, // the resource name, deduced from the location. e.g. 'posts'
//         save, // the create callback, to be passed to the underlying form as submit handler
//         saving, // boolean that becomes true when the dataProvider is called to create the record
//         version, // integer used by the refresh feature
//     } = createControllerProps;
//     return (
//         <CreateContextProvider value={createControllerProps}>
//             <div>
//                 <h1>{defaultTitle}</h1>
//                 {React.cloneElement(props.children, {
//                     basePath,
//                     record,
//                     redirect,
//                     resource,
//                     save,
//                     saving,
//                     version,
//                 })}
//             </div>
//         </CreateContextProvider>
//     );
// }

// const PostCreate = props => (
//     <MyCreate {...props}>
//         <SimpleForm>
//         <TextInput label="NAZWA FIRMY" source="TESTcompany" />
//         </SimpleForm>
//     </MyCreate>
// );

// export default PostCreate;