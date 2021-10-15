import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";
import Notes from "../Notes";
import Create from "../Notebooks/CreateNotebook";

export const ProfileLinks = () => {
  //TODO fix notebook link
  return (
    <div>
      <NavLink activeClassName={styles.activeNav} to="/notes">
        Notes
      </NavLink>
      <NavLink to="/newNotebook">Create Notebook</NavLink>
    </div>
  );
};

export default ProfileLinks;
