import * as React from "react";
import { Route } from 'react-router-dom';
// import ProfileEdit from
import { ProfileEdit } from "./userBar/profile";


export default [
    <Route exact path="/my-profile" component={ProfileEdit} />,
    // <Route exact path="/bar" component={Bar} />,
];