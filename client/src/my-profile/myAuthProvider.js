export default {
    getIdentity: () => {
      const profile = localStorage.getItem("userProfile");
    
      if (profile) {
        const data = JSON.parse(profile);
        return Promise.resolve(data);
      }
    
      return Promise.resolve();
    }
    // called when the user attempts to log in
    login: ({ username }) => {
      localStorage.setItem("user", { username });
      // accept all username/password combinations
      return Promise.resolve();
    },
    // called when the user clicks on the logout button
    logout: () => {
      localStorage.removeItem("user");
      return Promise.resolve();
    },
    // called when the API returns an error
    checkError: ({ status }) => {
      if (status === 401 || status === 403) {
        localStorage.removeItem("user");
        return Promise.reject();
      }
      return Promise.resolve();
    },
    // called when the user navigates to a new location, to check for authentication
    checkAuth: () => {
      const user = localStorage.getItem("user");
      return user ? Promise.resolve() : Promise.reject();
    },
    // called when the user navigates to a new location, to check for permissions / roles
    getPermissions: () => Promise.resolve(),
  };
  