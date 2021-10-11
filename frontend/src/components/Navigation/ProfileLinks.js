import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

export const ProfileLinks = () => {
  return (
    <div>
      <NavLink activeClassName={styles.activeNav} to="/notebooks">
        Notebooks
      </NavLink>
      <NavLink activeClassName={styles.activeNav} to="/notes">
        Notes
      </NavLink>
    </div>
  );
};

export default ProfileLinks;
