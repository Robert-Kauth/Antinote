import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";
import Notes from "../Notes";
import Create from "../Notebooks/CreateNotebook";

export const ProfileLinks = () => {
  //TODO fix notebook link
  return (
    <div>
      <NavLink to="/notes" activeClassName={styles.activeNav}>
        Notes
      </NavLink>
      <NavLink to="/newNotebook" activeClassName={styles.activeNav}>
        Create Notebook
      </NavLink>
    </div>
  );
};

export default ProfileLinks;
