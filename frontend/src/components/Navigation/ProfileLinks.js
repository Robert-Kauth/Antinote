import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";
import Notes from "../Notes";

export const ProfileLinks = () => {
  //TODO fix notebook link
  return (
    <div>
      <NavLink activeClassName={styles.activeNav} to="/notes">
        Notes
      </NavLink>
    </div>
  );
};

export default ProfileLinks;
