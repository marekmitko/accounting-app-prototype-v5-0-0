import restProvider from 'ra-data-simple-rest'

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
                id: 'unique-id',
                fullName: "",
                // avatar: ""
            },
        });
    },
  
    updateUserProfile(params) {
        localStorage.setItem("profile", JSON.stringify({ id: 'unique-id', ...params.data }));
        return Promise.resolve({ data: params.data });
    }
});
  
  export default addUserProfileOverrides(
    restProvider('http://localhost:3000')
);
