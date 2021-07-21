import React from "react";
import { UserMenu, MenuItemLink } from "react-admin";
import SettingsIcon from "@material-ui/icons/Settings";
import { useProfile } from "./profile";

const MyUserMenu = (props) => {
  const { profileVersion } = useProfile();

  return (
    <UserMenu key={profileVersion} {...props}>
      <MenuItemLink
        to="/my-profile"
        primaryText="My Profile"
        leftIcon={<SettingsIcon />}
      />
    </UserMenu>
  );
};

export default MyUserMenu;
