import restProvider from 'ra-data-simple-rest';
import { GET_ONE, UPDATE } from "react-admin";

const data = restProvider('http://localhost:3000');

// A function decorating a dataProvider for handling user profiles
const handleUserProfile = dataProvider => (verb, resource, params) => {
    if (resource === "profile") {
        if (verb === GET_ONE) {
        const storedProfile = localStorage.getItem("profile");

        if (storedProfile) {
            return Promise.resolve({
                data: JSON.parse(storedProfile),
            });
        }
     // No profile yet, return a default one. It's important that I send the same id as requested in params. Indeed, react-admin will verify it and may throw an error if they are different. I don't have to do it when the profile exists as it will be included in the data stored in the local storage
        return Promise.resolve({
            data: { id: params.id, nickname: "" },
            });
        }
        if (verb === UPDATE) {
            localStorage.setItem("profile", JSON.stringify(params.data));
            return Promise.resolve({ data: params.data });
        }
    }
      // Fallback to the dataProvider default handling for all other resources
    return dataProvider(verb, resource, params);
};




const addUserProfileOverrides = dataProvider => ({
    ...dataProvider,
    getUserProfile(params) {
      const storedProfile = localStorage.getItem("profile");
  
      if (storedProfile) {
          return Promise.resolve({
              data: JSON.parse(storedProfile),
          });
      }
  
      // No profile yet, return a default one
      return Promise.resolve({
          data: {
            // As we are only storing this information in the localstorage, we don't really care about this id
            id: 'Profile12356x',
            fullName: "",
            avatar: ""
          },
      });
    },
  
    updateUserProfile(params) {
      localStorage.setItem("profile", JSON.stringify({ id: 'unique-id', ...params.data }));
      return Promise.resolve({ data: params.data });
    }
  });
  
  export default addUserProfileMethods(
    restProvider(data)
  );


//   export default addUserProfileOverrides(
//     restProvider("restProvider('http://localhost:3000')")
// );


//   restProvider('http://localhost:3000')
// // */
// // {
//     // import jsonServerProvider from "ra-data-json-server";
// import restProvider from 'ra-data-simple-rest'

// // A function decorating a dataProvider for handling user profiles
// const addUserProfileOverrides = (dataProvider) => ({
//   ...dataProvider,
//   getUserProfile() {
//     const profile = localStorage.getItem("userProfile");
//     if (!profile) {
//       return Promise.resolve({ data: {} });
//     }
//     const data = JSON.parse(profile);
//     console.log("getUserProfile", data);
//     return Promise.resolve({ data });
//   },
//   async updateUserProfile({ data }) {
//     // Convert a newly uploaded file to b64
//     const avatar = await (data.avatar.rawFile instanceof File
//       ? convertFileToBase64(data.avatar)
//       : data.avatar);

//     localStorage.setItem(
//       "userProfile",
//       JSON.stringify({
//         ...data,
//         id: "unique_id",
//         avatar
//       })
//     );
//     return Promise.resolve({ data });
//   }
// });

// /**
//  * Convert a `File` object returned by the upload input into a base 64 string.
//  * That's not the most optimized way to store images in production, but it's
//  * enough to illustrate the idea of data provider decoration.
//  */
// const convertFileToBase64 = (file) =>
//   new Promise((resolve, reject) => {
//     const reader = new FileReader();
//     reader.onload = () => resolve(reader.result);
//     reader.onerror = reject;

//     reader.readAsDataURL(file.rawFile);
//   });

// export default addUserProfileOverrides(
//   restProvider("https://jsonplaceholder.typicode.com")
// );

// // export default addUserProfileOverrides(
// //   jsonServerProvider("https://jsonplaceholder.typicode.com")
// // );


// }
// */