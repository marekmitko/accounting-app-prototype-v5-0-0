import React, {
    createContext,
    useState,
    useCallback,
    useMemo,
    useContext
  } from "react";
  import {
    FileInput,
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
  

export const ProfileEdit = ({ staticContext, ...props }) => {
  const dataProvider = useDataProvider();
  const notify = useNotify();
  const [saving, setSaving] = useState();

  const { loaded, identity } = useGetIdentity();

  const handleSave = useCallback((values) => {
    setSaving(true);
    dataProvider.updateUserProfile(
      { data: values },
      {
        onSuccess: ({ data }) => {
          setSaving(false);
          notify("Your profile has been updated", "info", {
            _: "Your profile has been updated"
          });
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
//   }, [dataProvider, notify, refresh]);
  }, [dataProvider, notify]);

  const saveContext = useMemo(() => ({
    save: handleSave,
    saving
  }), [saving, handleSave]);

//   if (!user.loaded) {
  if (!loaded) {
    return null;
  }

  return (
    <SaveContextProvider value={saveContext}>
      <SimpleForm save={handleSave} record={identity ? identity : {}}>
        <TextInput source="fullName" validate={required()} />
        <FileInput source="avatar" validate={required()} />
      </SimpleForm>
    </SaveContextProvider>
  );
};