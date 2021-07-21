import restProvider from 'ra-data-simple-rest'

// A function decorating a dataProvider for handling user profiles
const addUserProfileOverrides = (dataProvider) => ({
  ...dataProvider,
  getUserProfile() {
    const profile = localStorage.getItem("userProfile");
    if (!profile) {
      return Promise.resolve({ data: {} });
    }
    const data = JSON.parse(profile);
    console.log("getUserProfile", data);
    return Promise.resolve({ data });
  },
  async updateUserProfile({ data }) {
    // Convert a newly uploaded file to b64
    const avatar = await (data.avatar.rawFile instanceof File
      ? convertFileToBase64(data.avatar)
      : data.avatar);

    localStorage.setItem(
      "userProfile",
      JSON.stringify({
        ...data,
        id: "unique_id",
        avatar
      })
    );
    return Promise.resolve({ data });
  }
});

/**
 * Convert a `File` object returned by the upload input into a base 64 string.
 * That's not the most optimized way to store images in production, but it's
 * enough to illustrate the idea of data provider decoration.
 */
const convertFileToBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;

    reader.readAsDataURL(file.rawFile);
  });

export default addUserProfileOverrides(
    restProvider("restProvider('http://localhost:3000')")
);
