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

export default handleUserProfile(
    restProvider(data)
    //tu powinien być weksporotowany obiekt 
);