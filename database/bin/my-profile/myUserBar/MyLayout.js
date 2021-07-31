import React from 'react';
import { Layout } from 'react-admin';
import MyAppbar from './MyAppbar';

const MyLayout = props => <Layout {...props} appBar={MyAppbar} />;

export default MyLayout;
