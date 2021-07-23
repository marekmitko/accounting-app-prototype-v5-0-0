import React, {
    createContext,
    useState,
    useCallback,
    useMemo,
    useContext,
  } from "react";
  import {
    TextInput,
    ImageInput,
    ImageField,
    SimpleForm,
    required,
    useDataProvider,
    useNotify,
    SaveContextProvider,
    useGetIdentity
  } from "react-admin";
  
  const ProfileContext = createContext();
  
  export const ProfileProvider = ({ children }) => {
    const [profileVersion, setProfileVersion] = useState(0);
    const context = useMemo(
      () => ({
        profileVersion,
        refreshProfile: () =>
          setProfileVersion((currentVersion) => currentVersion + 1)
      }),
      [profileVersion]
    );
  
    return (
      <ProfileContext.Provider value={context}>
        {children}
      </ProfileContext.Provider>
    );
  };
  
//   export const useProfile = () => useContext(ProfileContext);
export function useProfile(){
    const context = useContext(ProfileContext);
    if (!context){
        throw new Error("useProfile debe estar dentro del proveedor ProfileContext");
    }
    return context;
};
  
  export const ProfileEdit = ({ staticContext, ...props }) => {
    console.log("ProfileEdit");
    const dataProvider = useDataProvider();
    const notify = useNotify();
    const [saving, setSaving] = useState();
    const { refreshProfile } = useProfile();
  
    const { loaded, identity } = useGetIdentity();
  
    // const PostDetail = ({ id }) => {
    //     const { data: post, loading: postLoading } = useGetOne('posts', id);
    //     const { identity, loading: identityLoading } = useGetIdentity();
    //     if (postLoading || identityLoading) return <>Loading...</>;
    //     if (!post.lockedBy || post.lockedBy === identity.id) {
    //         // post isn't locked, or is locked by me
    //         return <PostEdit post={post} />
    //     } else {
    //         // post is locked by someone else and cannot be edited
    //         return <PostShow post={post} />
    //     }
    // }


    const handleSave = useCallback(
      (values) => {
        setSaving(true);
        dataProvider.updateUserProfile(
          { data: values },
          {
            onSuccess: ({ data }) => {
              setSaving(false);
              notify("Your profile has been updated", "info", {
                _: "Your profile has been updated"
              });
              refreshProfile();
            },
            onFailure: () => {
              setSaving(false);
              notify(
                "A technical error occured while updating your profile. Please try later.",
                "warning",
                {
                  _:
                    "A technical error occured while updating your profile. Please try later."
                }
              );
            }
          }
        );
      },
      [dataProvider, notify, refreshProfile]
    );
  
    const saveContext = useMemo(
      () => ({
        save: handleSave,
        saving
      }),
      [saving, handleSave]
    );
  
    if (!loaded) {
      return null;
    }
  
    return (
      <SaveContextProvider value={saveContext}>
        {/* <SimpleForm save={handleSave} record={identity ? identity : {}}> */}
        <SimpleForm save={handleSave} record={identity ? identity : {}}>
          <TextInput source="fullName" validate={required()} />
          {/* <ImageInput source="avatar" validate={required()}>
            <ImageField />
          </ImageInput> */}
        </SimpleForm>
      </SaveContextProvider>
    );
  };
  