import React from "react";
import { Layout } from "react-admin";
import MyAppBar from "./MyAppBar";
import { ProfileProvider } from "./profile";

const MyLayout = (props) => (
  <ProfileProvider>
    <Layout {...props} appBar={MyAppBar} />
  </ProfileProvider>
);

export default MyLayout;
